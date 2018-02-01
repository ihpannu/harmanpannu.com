import React from "react";
import Link from "gatsby-link";
import ProfilePic from "../../asset/profile.png";
import fontawesome from "@fortawesome/fontawesome";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

const Name = (
  <div>
    <h1 className="name spin">Harman Pannu</h1>
    <h4>Front End Web Developer</h4>
  </div>
);

class ImageClicked extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      divHide: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      divHide: !prevState.divHide
    }));
  }

  //  <Anime opacity={[0, 1]} translateY={"1em"} delay={(e, i) => i * 1000}> </Anime>

  render() {
    return (
      <button className="button" onClick={this.handleClick}>
        {this.state.divHide ? (
          <div className="image-normal">
            <img src={ProfilePic} alt="profile_picture" /> {Name}
          </div>
        ) : (
          <div className="image-clicked">
            <img src={ProfilePic} alt="profile_picture" />

            <h1>
              Let's work together{" "}
              <a href="tel://1-206-566-8477">
                <FontAwesomeIcon
                  icon={["fab", "whatsapp"]}
                  style={{ color: "#5ABBA5" }}
                />
              </a>
            </h1>
            <br />

            <p className="on-click-para">
              Software Engineer 👨🏻‍💻 actively looking for a company to help solve
              problems.
            </p>
          </div>
        )}
      </button>
    );
  }
}

export default ImageClicked;
