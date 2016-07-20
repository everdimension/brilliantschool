import React, { PropTypes } from 'react'

const propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
}

function SvgIcon ({ name, className }) {
  return (
    <svg className={className}>
      <use xlinkHref={`#${name}`} />
    </svg>
  )
}

SvgIcon.propTypes = propTypes

export default SvgIcon
