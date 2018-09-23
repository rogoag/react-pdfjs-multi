import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './lib/resizeAutoZoomEvent';
import './ZoomSelectBox.scss';

type Props = {
  autoZoom?: boolean;
  scale: number;
  setScale: (scale: number) => void;
};

class ZoomSelectBox extends PureComponent<Props, {}> {
  static propTypes = {
    scale: PropTypes.number.isRequired,
    setScale: PropTypes.func.isRequired,
  };

  createSelectOptions = () => [
    {
      id: 'automated',
      text: 'Automatischer Zoom',
    },
    {
      id: '50-percent',
      text: '50%',
      value: 50,
    },
    {
      id: '75-percent',
      text: '75%',
      value: 75,
    },
    {
      id: 'original',
      text: 'Originalgröße (100%)',
      value: 100,
    },
    {
      id: '125-percent',
      text: '125%',
      value: 125,
    },
    {
      id: '150-percent',
      text: '150%',
      value: 150,
    },
    {
      id: '200-percent',
      text: '200%',
      value: 200,
    },
    {
      id: '300-percent',
      text: '300%',
      value: 300,
    },
    {
      id: '400-percent',
      text: '400%',
      value: 400,
    },
    {
      id: 'calculated',
    },
  ];

  showCalculatedScale = () => {
    const { scale } = this.props;
    return this.createSelectOptions().filter(option => option.value === scale)
      .length === 0 && scale % 10 === 0
      ? scale
      : 0;
  };

  render() {
    const { autoZoom, scale, setScale } = this.props;
    return (
      <div className="dropdown-toolbar-container">
        <span className="dropdown-toolbar">
          <select
            value={scale}
            onChange={e => {
              setScale(parseInt(e.target.value, 10));
            }}
          >
            {this.createSelectOptions().map(({ id, text, value }) => {
              switch (id) {
                case 'calculated':
                  return (
                    <option
                      key={`${id}-${scale}`}
                      value={this.showCalculatedScale()}
                      hidden={true}
                      disabled={true}
                    >
                      {`${scale}%`}
                    </option>
                  );
                case 'automated':
                  return (
                    autoZoom && (
                      <option key={`${id}-${scale}`} value={-1}>
                        {text}
                      </option>
                    )
                  );
                default:
                  return (
                    <option key={id} value={value}>
                      {text}
                    </option>
                  );
              }
            })}
          </select>
        </span>
      </div>
    );
  }
}

export default ZoomSelectBox;
