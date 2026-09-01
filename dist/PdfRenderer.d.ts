import { PureComponent, RefObject } from 'react';
import { PDFDocumentProxy } from 'pdfjs-dist';
import 'pdfjs-dist/web/pdf_viewer.css';
import './PdfRenderer.scss';
import { I18nDataRenderer } from './I18nContext';
declare const initialState: {
    scale: number;
    isLoading: boolean;
    firstPageWidth: number;
};
declare type State = typeof initialState;
export declare type RendererDocumentPosition = {
    zoom: number;
    rotation: number;
    scrollTop: number | null;
    scrollLeft?: number | null;
};
declare type PdfChangeHook = (documentIndex: string, position: RendererDocumentPosition) => void;
declare type Props = {
    pdfDoc: PDFDocumentProxy;
} & Partial<DefaultProps>;
declare type DefaultProps = {
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
    printURL?: string;
    successCallback: Function;
    failureCallback: Function;
};
export default class PdfRenderer extends PureComponent<Props, {}> {
    state: State;
    container: RefObject<HTMLDivElement>;
    pdfViewer: any;
    downloadManager: any;
    printSrc: string;
    static defaultProps: DefaultProps;
    constructor(props: Props);
    componentDidMount(): Promise<void>;
    componentDidUpdate(prevProps: Props): void;
    componentWillUnmount(): void;
    autoFitScale: () => void;
    rePosition(): Promise<void>;
    setScrollTop(scrollTop: number): void;
    setScrollLeft(scrollLeft: number): void;
    setScale: (scale: number) => void;
    zoomIn: () => void;
    zoomOut: () => void;
    rotateRight: () => void;
    rotateLeft: () => void;
    download: () => Promise<void>;
    doIPPPrint: (printURL: string, blob: Blob) => Promise<void>;
    doHTTPPrint: (printURL: string, blob: Blob) => Promise<void>;
    onPrint: () => Promise<void>;
    render(): JSX.Element;
}
export {};
