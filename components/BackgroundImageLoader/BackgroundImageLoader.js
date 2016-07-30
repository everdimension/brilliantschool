import React, { PropTypes } from 'react'

const placeholderDefault = 'http://placehold.it/100x100';
const loadedImagesHash = {};

class BackgroundImageLoader extends React.Component {
  constructor(props) {
    super(props);
    const loaded = props.url in loadedImagesHash;
    this.state = { loaded }
    this.onImageLoad = this.onImageLoad.bind(this);
  }

  componentDidMount() {
    if (this.state.loaded) {
      return;
    }
    this.imgNode = new Image();
    this.imgNode.onload = this.onImageLoad;
    this.imgNode.src = this.props.url;
  }

  componentWillUnmount() {
    if (this.imgNode && this.imgNode.onload) {
      this.imgNode.onload = null;
    }
  }

  onImageLoad() {
    loadedImagesHash[this.props.url] = true;
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
          transition: 'background-image 0.3s ease-in-out',
        }}
      />
    )
  }
}

export default BackgroundImageLoader
