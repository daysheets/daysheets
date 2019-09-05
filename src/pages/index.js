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
          <div className="full-section image">
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
                  right: "-50px",
                  top: "25%",
                  width: "300px",
                }}
                sizes={this.props.data.sectionTwoImage.sizes}
              />
          </div>
          <div className="image" style={{ position: 'relative' }}>
            <ImageSection image={this.props.data.sectionThreeImage} />
            <div className="services section">
              <span className="title" dangerouslySetInnerHTML={{ __html: this.props.data.allSectionsJson.edges[2].node.title }} />
              {this.props.data.allServicesJson.edges.map(({ node }) => (
                <Service
                  key={node.icon}
                  children={node.services}
                  icon={node.icon}
                  icons={this.props.data.icons.edges}
                  description={node.description}
                  title={node.title} />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default IndexPage

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      sizes(maxWidth: 72, maxHeight: 50,) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`

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
    icons: allFile(filter: {relativePath: {regex: "/icons/"}}) {
      edges {
        node {
          ...squareImage
        }
      }
    }
  }
`;