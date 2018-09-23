import React, { SFC } from 'react';
import ZoomSelectBox from './ZoomSelectBox';
import './PdfRendererControls.scss';

type Props = {
  autoZoom?: boolean;
  onZoomIn: () => void;
  onZoomOut: () => void;
  scale: number;
  setScale: (scale: number) => void;
};

const PdfControls: SFC<Props> = ({
  autoZoom,
  onZoomIn,
  onZoomOut,
  scale,
  setScale,
}) => (
  <div className="renderer-controls">
    <div>
      <div className="button-group">
        <button
          className="renderer-controls-button"
          type="button"
          onClick={onZoomOut}
        >
          <span className="zoom-out-label">Verkleinern</span>
        </button>
        <div className="split-button-seperator" />
        <button
          className="renderer-controls-button"
          type="button"
          onClick={onZoomIn}
        >
          <span className="zoom-in-label">Vergrößern</span>
        </button>
      </div>
      <ZoomSelectBox autoZoom={autoZoom} scale={scale} setScale={setScale} />
    </div>
  </div>
);

export default PdfControls;
