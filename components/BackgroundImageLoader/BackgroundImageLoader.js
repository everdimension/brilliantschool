import React, { PropTypes } from 'react'

const placeholderDefault = 'http://placehold.it/100x100';

class BackgroundImageLoader extends React.Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
    }
    this.onImageLoad = this.onImageLoad.bind(this);
  }

  componentWillMount() {
    this.imgNode = new Image();
    this.imgNode.onload = this.onImageLoad;
    this.imgNode.src = this.props.url;
  }

  componentWillUnmount() {
    this.imgNode.onload = null;
  }

  onImageLoad() {
    this.setState({ loaded: true });
  }

  render () {
    const { url, placeholder, ...restProps } = this.props
    let src = placeholder || placeholderDefault;
    if (this.state.loaded) {
      src = url;
    }
    return (
      <div
        {...restProps}
        style={{
          backgroundImage: `url('${src}')`,
        }}
      />
    )
  }
}

export default BackgroundImageLoader
