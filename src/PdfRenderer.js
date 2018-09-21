import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { PdfRendererControls } from './components';
import 'pdfjs-dist/web/pdf_viewer.css';
import './PdfRenderer.css';

const { PDFViewer } = require('pdfjs-dist/web/pdf_viewer');

export default class PdfRenderer extends PureComponent {
  static propTypes = {
    // pdfDoc: instanceOf(PDFDocumentProxy)
    pdfDoc: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  };

  state = { scale: 100 };

  constructor(props) {
    super(props);
    this.container = React.createRef();
    this.pdfViewer = null;
  }

  componentDidMount() {
    const { pdfDoc } = this.props;

    this.pdfViewer = new PDFViewer({
      container: this.container.current,
    });

    this.pdfViewer.setDocument(pdfDoc);
  }

  componentDidUpdate(prevProps) {
    const { pdfDoc } = this.props;
    if (pdfDoc !== prevProps.pdfDoc) {
      this.pdfViewer.setDocument(pdfDoc);
    }
  }

  setScale = (scale) => {
    this.setState(() => ({ scale }));
    this.pdfViewer.currentScaleValue = scale / 100;
  };

  zoomIn = () => {
    const { scale } = this.state;
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
    const { scale } = this.state;
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

  render() {
    const { scale } = this.state;

    return (
      <div className="renderer-container">
        <PdfRendererControls
          scale={scale}
          setScale={this.setScale}
          onZoomIn={this.zoomIn}
          onZoomOut={this.zoomOut}
        />
        <div ref={this.container} className="renderer-target-container">
          <div id="viewer" className="pdfViewer" />
        </div>
      </div>
    );
  }
}
