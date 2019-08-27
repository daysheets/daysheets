import React from 'react';
import Img from "gatsby-image";
import './imageSection.scss';

class ImageSection extends React.Component {
  render() {
    return (
      <div className="image-section">
        <Img
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%"
          }}
          sizes={this.props.image.sizes}
        />
      </div>
    );
  }
}

export default ImageSection