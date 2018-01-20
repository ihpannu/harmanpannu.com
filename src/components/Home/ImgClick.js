import React from "react"
import Link from "gatsby-link"
import ProfilePic from '../../asset/profile.png'
const Name = <div>
  <h1 className="name spin">
    Harman Pannu
  </h1>
  <h4>Front End Web Developer</h4>
</div>;

class ImageClicked extends React.Component {
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
      <button className="button" onClick={this.handleClick}>
        {this.state.divHide
          ? <div className="image-normal">
              <img src={ProfilePic} alt="profile_picture"/> {Name}
            </div>

          : <div className="image-clicked">
            <img src={ProfilePic} alt="profile_picture"/>

            <h1>Hire Me &#9786;</h1>
            <br/>

            <p className="on-click-para">
              " Frontend Web Developer who loves to code and solve problems. Looking for a
              company where I can make an impact."
            </p>
          </div>}

      </button>
    )
  }
}

export default ImageClicked;
