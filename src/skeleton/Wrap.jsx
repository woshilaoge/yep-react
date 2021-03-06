import React from 'react';

import PropTypes from 'prop-types';

import uid from './uid';

const Wrap = ({
  uniquekey,
  width,
  height,
  style,
  className,
  children,
  primaryColor,
  primaryOpacity,
  secondaryColor,
  secondaryOpacity,
  speed,
  animate,
  preserveAspectRatio,
}) => {
  const idClip = uniquekey ? `${uniquekey}-idClip` : uid();
  const idGradient = uniquekey ? `${uniquekey}-idGradient` : uid();

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      version="1.1"
      style={style}
      preserveAspectRatio={preserveAspectRatio}
      className={className}
    >
      <rect
        style={{fill: `url(#${idGradient})`}}
        clipPath={`url(#${idClip})`}
        x="0"
        y="0"
        width={width}
        height={height}
      />

      <defs>
        <clipPath id={idClip}>{children}</clipPath>

        <linearGradient id={idGradient}>
          <stop offset="0%" stopColor={primaryColor} stopOpacity={primaryOpacity}>
            {animate ? (
              <animate attributeName="offset" values="-2; 1" dur={`${speed}s`} repeatCount="indefinite" />
            ) : null}
          </stop>
          <stop offset="50%" stopColor={secondaryColor} stopOpacity={secondaryOpacity}>
            {animate ? (
              <animate attributeName="offset" values="-1.5; 1.5" dur={`${speed}s`} repeatCount="indefinite" />
            ) : null}
          </stop>
          <stop offset="100%" stopColor={primaryColor} stopOpacity={primaryOpacity}>
            {animate ? (
              <animate attributeName="offset" values="-1; 2" dur={`${speed}s`} repeatCount="indefinite" />
            ) : null}
          </stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

Wrap.propTypes = {
  animate: PropTypes.bool,
  speed: PropTypes.number,
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  preserveAspectRatio: PropTypes.string,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
  primaryOpacity: PropTypes.number,
  secondaryOpacity: PropTypes.number,
  style: PropTypes.object,
  uniquekey: PropTypes.string,
};

export default Wrap;
