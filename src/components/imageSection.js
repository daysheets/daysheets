import React from 'react';
import Img from "gatsby-image";
import { Parallax } from "react-parallax";

import './imageSection.scss';

class ImageSection extends React.Component {
  render() {
    console.log(this.props.image);
    return (
      <div className="image-section">
        {!this.props.parallax &&
        <Img
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%"
          }}
          sizes={this.props.image.sizes}
        />}
        {this.props.parallax &&
        <Parallax bgImage={this.props.image.sizes.src} bgImageSizes={this.props.image.sizes.sizes} bgImageSrcSet={this.props.image.sizes.srcSet} strength={500} />}
      </div>
    );
  }
}

export default ImageSection