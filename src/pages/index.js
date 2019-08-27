import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ImageSection from "../components/imageSection"
import './home.scss';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <div className="home-page">
          <div className="title-section">
            <ImageSection image={this.props.data.sectionOneImage} />
            <div className="middle-section">
              <span className="title-name">Touring can be <b>easy</b>, not <b>exhausting</b>.</span>
              <span className="title-description">The Day Sheets team is here to help artists and managers with all facets of touring. Whether you need help with travel arrangements, or growing your fanclub. Day Sheets has you covered.</span>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default IndexPage

export const pageQuery = graphql`
  query ImageQuery {
    sectionOneImage: imageSharp(fluid: {originalName: {regex: "/hands.png/"}}) {
      sizes(maxWidth: 1680, maxHeight: 800,) {
        ...GatsbyImageSharpSizes
      }
    }
    sectionThreeImage: imageSharp(fluid: {originalName: {regex: "/stage.png/"}}) {
      sizes(maxWidth: 1680, maxHeight: 800,) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;