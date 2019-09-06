import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import Img from "gatsby-image";

import Layout from "../components/layout"
import SEO from "../components/seo"
import ImageSection from "../components/imageSection"
import Service from '../components/service';
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
          <div className="full-section image" id="home">
            <ImageSection image={this.props.data.sectionOneImage} />
            <div className="middle-section section">
              <span className="title" dangerouslySetInnerHTML={{ __html: this.props.data.allSectionsJson.edges[0].node.title }} />
              <span className="description" dangerouslySetInnerHTML={{ __html: this.props.data.allSectionsJson.edges[0].node.description }} />
              <span className="learn"><a href="#about">Learn More <i className="fa fa-arrow-circle-down" /></a></span>
            </div>
          </div>
          <div className="about section" id="about">
            <span className="title" dangerouslySetInnerHTML={{ __html: this.props.data.allSectionsJson.edges[1].node.title }} />
            <span className="description" dangerouslySetInnerHTML={{ __html: this.props.data.allSectionsJson.edges[1].node.description }} />
              <Img
                style={{
                  height: "300px",
                  opacity: .15,
                  position: "absolute",
                  right: "0",
                  top: "25%",
                  width: "300px",
                }}
                sizes={this.props.data.sectionTwoImage.sizes}
              />
          </div>
          <div className="image" style={{ position: 'relative' }}>
            <ImageSection image={this.props.data.sectionThreeImage} />
            <div className="services section" id="services">
              <span className="title" dangerouslySetInnerHTML={{ __html: this.props.data.allSectionsJson.edges[2].node.title }} />
              {this.props.data.allServicesJson.edges.map(({ node }) => (
                <Service
                  key={node.icon}
                  children={node.services}
                  icon={node.icon}
                  description={node.description}
                  title={node.title} />
              ))}
            </div>
          </div>
          <div className="contact section" id="contact">
            <Img
              style={{
                boxShadow: "-20px 20px 37px -9px rgba(143,140,143,1)",
                height: "100%",
                maxWidth: "400px",
                width: "100%",
              }}
              sizes={this.props.data.sectionFourImage.sizes}
            />
            <div className="details">
              <span className="title" dangerouslySetInnerHTML={{ __html: this.props.data.allSectionsJson.edges[3].node.title }} />
              <span className="description" dangerouslySetInnerHTML={{ __html: this.props.data.allSectionsJson.edges[3].node.description }} />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default IndexPage

export const pageQuery = graphql`
  query PageQuery {
    allSectionsJson: allSectionsJson {
      edges {
        node {
          title
          description
        }
      }
    }
    allServicesJson: allServicesJson {
      edges {
        node {
          icon
          title
          description
          services {
            description
            icon
            title
          }
        }
      }
    }
    sectionOneImage: imageSharp(fluid: {originalName: {regex: "/hands.png/"}}) {
      sizes(maxWidth: 1680, maxHeight: 800,) {
        ...GatsbyImageSharpSizes
      }
    }
    sectionTwoImage: imageSharp(fluid: {originalName: {regex: "/guitar.jpg/"}}) {
      sizes(maxWidth: 400, maxHeight: 400,) {
        ...GatsbyImageSharpSizes
      }
    }
    sectionThreeImage: imageSharp(fluid: {originalName: {regex: "/stage.png/"}}) {
      sizes(maxWidth: 1680,) {
        ...GatsbyImageSharpSizes
      }
    }
    sectionFourImage: imageSharp(fluid: {originalName: {regex: "/van.png/"}}) {
      sizes(maxWidth: 800, maxHeight: 800,) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;