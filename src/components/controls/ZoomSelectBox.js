import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ZoomSelectBox.scss';

class ZoomSelectBox extends Component {
  static propTypes = {
    scale: PropTypes.number.isRequired,
    setScale: PropTypes.func.isRequired,
  };

  selectOptions = [
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
      text: scale => `${scale}%`,
    },
  ];

  showCalculatedScale = () => {
    const { scale } = this.props;
    return this.selectOptions.filter(option => option.value === scale).length === 0 ? scale : 0;
  };

  render() {
    const { scale, setScale } = this.props;
    return (
      <div className="dropdown-toolbar-container">
        <span className="dropdown-toolbar">
          <select
            value={scale}
            onChange={(e) => {
              setScale(parseInt(e.target.value, 10));
            }}
          >
            {this.selectOptions.map(({ id, text, value }) => {
              if (id === 'calculated') {
                return (
                  <option
                    key={`id-${scale}`}
                    value={this.showCalculatedScale()}
                    hidden
                    disabled="disabled"
                  >
                    {text(scale)}
                  </option>
                );
              }
              return (
                <option key={id} value={value}>
                  {text}
                </option>
              );
            })}
          </select>
        </span>
      </div>
    );
  }
}

export default ZoomSelectBox;
