import React, { PropTypes } from 'react'
import SvgIcon from '../SvgIcon'
import './IndexFeature.css'

const propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.string.isRequired,
}

function IndexFeature ({ icon, children }) {
  return (
    <div className="IndexFeature">
      <div className="FeatureIcon">
        <SvgIcon className="FeatureIcon__svg" name={icon} />
      </div>

      <p className="FeatureText">
        {children}
      </p>
    </div>
  )
}

IndexFeature.propTypes = propTypes

export default IndexFeature
