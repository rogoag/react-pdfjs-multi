import React, { PureComponent, RefObject } from 'react';
import { PDFDocumentProxy } from 'pdfjs-dist';
import PdfRendererControls from './PdfRendererControls';
import 'pdfjs-dist/web/pdf_viewer.css';
import './PdfRenderer.scss';
import { I18nDataRenderer, defaultI18n, I18nContext } from './I18nContext';
import { getPDFFileNameFromURL } from './lib/filenameHelper';

const ipp = require('ipp');


const roundToNearest = (numToRound: number, numToRoundTo: number) =>
  Math.round(numToRound / numToRoundTo) * numToRoundTo;

const {
  PDFViewer,
  DownloadManager,
  EventBus,
} = require('pdfjs-dist/web/pdf_viewer');

const initialState = {
  scale: 100,
  isLoading: true,
  firstPageWidth: 0,
};

type State = typeof initialState;

export type RendererDocumentPosition = {
  zoom: number;
  rotation: number;
  scrollTop: number | null;
  scrollLeft?: number | null;
};

type PdfChangeHook = (
  documentIndex: string,
  position: RendererDocumentPosition
) => void;

type Props = {
  pdfDoc: PDFDocumentProxy;
} & Partial<DefaultProps>;

type DefaultProps = {
  activeIndex?: string;
  autoZoom?: boolean;
  controls?: boolean;
  downloadBtn: boolean;
  i18nData?: I18nDataRenderer;
  pdfChangeHook?: PdfChangeHook | null;
  zoom?: number;
  rotation?: number;
  scrollTop?: number;
  scrollLeft?: number;
  downloadName?: string;
};
export default class PdfRenderer extends PureComponent<Props, {}> {
  state: State = initialState;
  container: RefObject<HTMLDivElement>;
  pdfViewer: any;
  downloadManager: any;
  printSrc: string;

  static defaultProps: DefaultProps = {
    activeIndex: '0',
    autoZoom: true,
    controls: true,
    downloadBtn: true,
    i18nData: defaultI18n,
    pdfChangeHook: null,
    rotation: 0,
    scrollTop: 0,
    scrollLeft: 0,
  };

  constructor(props: Props) {
    super(props);
    this.container = React.createRef();
    this.pdfViewer = null;
    this.downloadManager = new DownloadManager({
      disableCreateObjectURL: false,
    });
    this.printSrc = '';
  }

  async componentDidMount() {
    const { autoZoom, pdfDoc } = this.props;

    this.pdfViewer = new PDFViewer({
      container: this.container.current,
      eventBus: new EventBus(),
    });

    this.pdfViewer.setDocument(pdfDoc);

    if (autoZoom) {
      window.addEventListener('resizeAutoZoom', this.autoFitScale);
    }

    this.rePosition();

    this.setState(() => ({ isLoading: false }));
  }

  componentDidUpdate(prevProps: Props) {
    const { pdfDoc, pdfChangeHook } = this.props;

    if (pdfDoc !== prevProps.pdfDoc) {
      if (typeof pdfChangeHook === 'function') {
        pdfChangeHook(String(prevProps.activeIndex), {
          zoom: this.state.scale,
          rotation: this.pdfViewer.pagesRotation,
          scrollTop: this.container.current && this.container.current.scrollTop,
          scrollLeft:
            this.container.current && this.container.current.scrollLeft,
        });
      }

      this.pdfViewer.setDocument(pdfDoc);
      this.rePosition();
    }
  }

  componentWillUnmount() {
    if (this.props.autoZoom) {
      window.removeEventListener('resizeAutoZoom', this.autoFitScale);
    }
  }

  autoFitScale = () => {
    const firstPageWith = this.pdfViewer._pages[0].viewport.width;
    const currentScale = this.pdfViewer._pages[0].scale;
    const originalWidth = firstPageWith / currentScale;
    let containerWidth =
      this.container.current && this.container.current.offsetWidth < 1020
        ? this.container.current.offsetWidth - 56
        : 1019;
    let nextScale = -1;

    if (this.container.current) {
      nextScale = Math.abs(containerWidth) / originalWidth;
    }
    this.setScale(nextScale * 100);
  };

  async rePosition() {
    const { autoZoom, zoom, rotation, scrollTop, scrollLeft } = this.props;
    await this.pdfViewer.firstPagePromise;

    if (rotation) {
      this.pdfViewer.pagesRotation = rotation;
    }

    if (zoom) {
      this.setScale(zoom);
    } else if (!zoom && autoZoom) {
      this.autoFitScale();
    }

    if (typeof scrollTop !== 'undefined') {
      this.setScrollTop(scrollTop);
    }

    if (typeof scrollLeft !== 'undefined') {
      this.setScrollLeft(scrollLeft);
    }
  }

  setScrollTop(scrollTop: number) {
    if (this.container.current) {
      this.container.current.scrollTop = scrollTop;
    }
  }

  setScrollLeft(scrollLeft: number) {
    if (this.container.current) {
      this.container.current.scrollLeft = scrollLeft;
    }
  }

  setScale = (scale: number) => {
    const { autoZoom } = this.props;
    if (autoZoom && scale < 0) {
      this.autoFitScale();
      return;
    }

    const nextScale = scale >= 10 ? scale : 10;

    this.setState(() => ({ scale: nextScale }));
    this.pdfViewer.currentScaleValue = nextScale / 100;
  };

  zoomIn = () => {
    let { scale } = this.state;
    scale = roundToNearest(scale, 10);
    let newScale;

    if (scale >= 110 && scale < 990) {
      newScale = scale + 20;
    } else if (scale === 75 || scale === 125) {
      newScale = scale + 5;
    } else {
      newScale = scale + 10;
    }

    if (newScale > 1000) return;

    this.setScale(newScale);
  };

  zoomOut = () => {
    let { scale } = this.state;
    scale = scale === 125 ? scale : roundToNearest(scale, 10);
    let newScale;

    if (scale > 110 && scale !== 125) {
      newScale = scale - 20;
    } else if (scale === 75 || scale === 125) {
      newScale = scale - 5;
    } else {
      newScale = scale - 10;
    }

    if (newScale <= 0) return;

    this.setScale(newScale);
  };

  rotateRight = () => {
    const currentRotation = this.pdfViewer.pagesRotation;
    this.pdfViewer.pagesRotation = currentRotation + 90;
  };

  rotateLeft = () => {
    const currentRotation = this.pdfViewer.pagesRotation;
    this.pdfViewer.pagesRotation = currentRotation - 90;
  };

  download = async () => {
    const pdfDoc = this.props.pdfDoc as any;
    const { url } = pdfDoc._transport._params;

    const filename = this.props.downloadName || getPDFFileNameFromURL(url);

    const downloadByUrl = () => {
      this.downloadManager.downloadUrl(url, filename);
    };

    try {
      const data = await this.props.pdfDoc.getData();
      const blob = new Blob([data], { type: 'application/pdf' });
      this.downloadManager.download(blob, url, filename);
    } catch (e) {
      downloadByUrl();
    }
  };

  onPrint = async () => {
    try {
     const data = await this.props.pdfDoc.getData();
     const blob = new Blob([data], { type: 'application/pdf' });
     const arrbuffer = await blob.arrayBuffer();
     const buffer = Buffer.from(arrbuffer)
     const printer = ipp.Printer('ipp://local.rogoag.com/printers/pj722');
     const msg = {
       'operation-attributes-tag': {
         'document-format': 'application/pdf',
       },
       data: buffer
     };

     printer.execute('Print-Job', msg, (err: any, res: any) => {
       if (err) { console.error(err); }
       console.log(res);
     });
    } catch(err) {
      console.error('Problem executing print job. Error: ', err);
    }
  }

  render() {
    const { isLoading, scale } = this.state;
    const { autoZoom, controls, downloadBtn, i18nData } = this.props;

    return (
      <div className="renderer-container">
        {controls && (
          <I18nContext.Provider value={{ ...defaultI18n, ...i18nData! }}>
            <PdfRendererControls
              autoZoom={autoZoom}
              downloadBtn={downloadBtn}
              scale={scale}
              setScale={this.setScale}
              onDownload={this.download}
              onPrint={this.onPrint}
              onZoomIn={this.zoomIn}
              onZoomOut={this.zoomOut}
              onRotateRight={this.rotateRight}
              onRotateLeft={this.rotateLeft}
            />
          </I18nContext.Provider>
        )}
        <div
          ref={this.container}
          className={`renderer-target-container ${
            !controls ? 'no-controls' : ''
          } `}
        >
          <div
            id="viewer"
            className={`pdfViewer ${isLoading ? 'hidden' : ''}`}
          />
        </div>
      </div>
    );
  }
}
