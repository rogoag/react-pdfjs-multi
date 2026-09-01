import { SFC } from 'react';
import './PdfRendererControls.scss';
declare type Props = {
    autoZoom?: boolean;
    downloadBtn?: boolean;
    onDownload: () => void;
    onPrint: () => void;
    onZoomIn: () => void;
    onZoomOut: () => void;
    onRotateRight: () => void;
    onRotateLeft: () => void;
    scale: number;
    setScale: (scale: number) => void;
};
declare const PdfControls: SFC<Props>;
export default PdfControls;
