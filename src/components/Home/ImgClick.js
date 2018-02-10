import React from "react";
import Link from "gatsby-link";
import ProfilePic from "../../asset/profile.png";
import fontawesome from "@fortawesome/fontawesome";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import Resume from "../../asset/harman-resume.pdf";
import * as Icons from "@fortawesome/fontawesome-free-solid";

const Name = (
  <div>
    <h1 className="name spin">Harman Pannu</h1>
    <h4>Front-end Web Developer</h4>
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

  render() {
    return (
      <button className="button" onClick={this.handleClick}>
        {this.state.divHide ? (
          <div>
            <div className="image-normal grid">
              <figure className="effect-sadie">
                <img src={ProfilePic} alt="profile_picture" />
                <figcaption>
                  <p>
                    <FontAwesomeIcon icon={Icons.faAngleDown} size="3x" />
                  </p>
                </figcaption>
              </figure>
            </div>
            {Name}
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
              <li>
                <a href={Resume} target="_blank" style={{ color: "#5ABAA5" }}>
                  Download Resume <FontAwesomeIcon icon={Icons.faFilePdf} />
                </a>
              </li>
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
