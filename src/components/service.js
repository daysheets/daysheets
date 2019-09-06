import React from 'react';
import Img from "gatsby-image";
import PropTypes from "prop-types";

import './service.scss';

class Service extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: null,
      open: false,
    };
    this.onOpen = this.onOpen.bind(this);
  }

  componentDidMount() {
    const svg = require(`../images/icons/${this.props.icon}.svg`);
    
    if (svg) {
      this.setState({ icon: svg });
    }
  }

  onOpen() {
    this.setState((state, props) => ({
      open: !state.open
    }));
  }

  render() {
    return (
      <div className={this.state.open ? 'service open' : 'service'} onClick={this.onOpen}>
        <div>
          {this.state.icon && <span>
            <img src={this.state.icon} className="icon" />
          </span>}
          <div className="details">
            <span className="title">{this.props.title}</span>
            <span className="description">{this.props.description}</span>
          </div>
          <div className="toggle">
            {!this.state.open && <i className="fa fa-plus"></i>}
            {this.state.open && <i className="fa fa-minus"></i>}
          </div>
        </div>
        {this.state.open && this.props.children.map(v => {
          const svg = require(`../images/icons/${v.icon}.svg`);
          return (
            <div className="subservice" key={v.icon}>
              <div>
                {v.icon && <span className="icon-container">
                  <img src={svg} className="icon" />
                </span>}
                <div className="details">
                  <span className="title">{v.title}</span>
                  <span className="description">{v.description}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    );
  }
}

Service.propTypes = {
  children: PropTypes.array,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
}

Service.defaultProps = {
  children: [],
  description: '',
  icon: '',
  title: '',
}

export default Service