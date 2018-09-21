import React from 'react';
import PropTypes from 'prop-types';
import ZoomSelectBox from './ZoomSelectBox';
import './PdfRendererControls.scss';

function PdfControls({
  onZoomIn, onZoomOut, scale, setScale,
}) {
  return (
    <div className="renderer-controls">
      <div>
        <div className="button-group">
          <button className="renderer-controls-button" type="button" onClick={onZoomOut}>
            <span className="zoom-out-label">Verkleinern</span>
          </button>
          <div className="split-button-seperator" />
          <button className="renderer-controls-button" type="button" onClick={onZoomIn}>
            <span className="zoom-in-label">Vergrößern</span>
          </button>
        </div>
        <ZoomSelectBox scale={scale} setScale={setScale} />
      </div>
    </div>
  );
}

PdfControls.propTypes = {
  onZoomIn: PropTypes.func.isRequired,
  onZoomOut: PropTypes.func.isRequired,
  scale: PropTypes.number.isRequired,
  setScale: PropTypes.func.isRequired,
};

export default PdfControls;
