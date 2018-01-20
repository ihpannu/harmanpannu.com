import React from "react"
import Link from "gatsby-link"
import Footer from '../Footer/Footer'
// import Particles from "react-particles-js";
import ProfilePic from '../../asset/profile.png'
import ImageClicked from './ImgClick'

// import fontawesome from "@fortawesome/fontawesome"; import FontAwesomeIcon
// from "@fortawesome/react-fontawesome"; import Header from "../Header/Header"
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      divHide: true
    };
    this.handleClick = this
      .handleClick
      .bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      divHide: !prevState.divHide
    }));
  }

  render() {
    return (
      <div className="home">
        <div className="lines lines--active"></div>
        <section className="main-section">
          <div className="profile-picture">
            <ImageClicked/>
          </div>

        </section>

        <Footer/>
      </div>
    )
  }
}

export default Home;
