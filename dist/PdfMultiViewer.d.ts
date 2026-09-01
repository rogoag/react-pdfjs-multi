import { PureComponent, RefObject } from 'react';
import { RendererDocumentPosition } from './PdfRenderer';
import './PdfMultiViewer.scss';
import { I18nDataRenderer } from './I18nContext';
import { PDFDocumentProxy } from 'pdfjs-dist';
declare type PdfDefinition = {
    title: string;
    source: string;
};
declare type PdfSource = string | PdfDefinition;
declare type PdfFile = {
    index?: number;
    title?: string;
    zoom?: number;
    downloadName?: string;
    rotation?: number;
    scrollTop?: number;
    scrollLeft?: number;
    source: string;
    pdfProxy: PDFDocumentProxy | null;
};
declare type State = {
    files: PdfFile[];
    activeIndex: string;
    listVisible: boolean;
    overlayMode: boolean;
};
export declare type I18nData = {
    pages?: string;
} & I18nDataRenderer;
declare type Props = {
    pdfs: PdfSource[];
} & Partial<DefaultProps>;
declare type DefaultProps = {
    autoZoom?: boolean;
    controls?: boolean;
    startIndex?: string;
    i18nData?: I18nData;
    downloadName?: string;
    onClose: () => void;
    printURL: string;
    onSuccess: Function;
    onFailure: Function;
};
export default class PdfMultiViewer extends PureComponent<Props, {}> {
    state: State;
    worker: any;
    viewerContainer: RefObject<HTMLDivElement>;
    static defaultProps: DefaultProps;
    constructor(props: Props);
    loadPdfDocuments(): void;
    changePdf: (activeIndex: string, file: PdfFile) => () => void;
    renderListItems(): JSX.Element[];
    toggleList: () => void;
    setOverlayMode: (currentContainerWidth?: number | undefined) => void;
    getViewerContainerWidth: () => number | undefined;
    onResizeEvent: () => void;
    rememberPosition: (index: string, position: RendererDocumentPosition) => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export {};
