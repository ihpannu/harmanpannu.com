import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import './index.scss'
import Header from '../components/Header/Header'
import fontawesome from "@fortawesome/fontawesome";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import brands from "@fortawesome/fontawesome-free-brands";
import faCheckSquare from "@fortawesome/fontawesome-free-solid/faCheckSquare";
import Footer from '../components/Footer/Footer';

fontawesome
  .library
  .add(brands, faCheckSquare);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Harman Pannu"
      meta={[
        {
          name: "Harman Pannu's Portfolio Website",
          content: "Portfolio Website"
        },
        {
          name: "keywords",
          content: "Portfolio Website"
        }
      ]}
    />
    <Header />
    {children()}
    </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper