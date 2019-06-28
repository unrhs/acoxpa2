import React from "react";
import Slider1 from "../../assets/images/slider1.jpg";
import Slider2 from "../../assets/images/slider2.jpeg";
import Slider3 from "../../assets/images/slider3.jpg";

const Slider = () => (
  <div
    className="uk-position-relative uk-visible-toggle uk-light"
    tabIndex="-1"
    uk-slideshow="animation:fade"
    uk-slideshow="ratio: 7:3"
  >
    <ul className="uk-slideshow-items ">
      <li>
        <img src={Slider1} alt="uno" uk-cover="true" />
        <div className="uk-position-center uk-position-small uk-text-center">
          Lorem{" "}
          <h1
            className="uk-heading-medium"
            uk-slideshow-parallax="x: 100,-100"
          />
          <p uk-slideshow-parallax="x: 200,-200">Lorem ipsum dolor sit amet.</p>
        </div>
      </li>
      <li>
        <img src={Slider2} alt="dos" uk-cover="true" />
        <div className="uk-position-center uk-position-small uk-text-center">
          <h1 className="uk-heading-medium" uk-slideshow-parallax="x: 100,-100">
            Lorem{" "}
          </h1>
          <p uk-slideshow-parallax="x: 200,-200">Lorem ipsum dolor sit amet.</p>
        </div>
      </li>
      <li>
        <img src={Slider3} alt="tres" uk-cover="true" />
        <div className="uk-position-center uk-position-small uk-text-center">
          <h1 className="uk-heading-medium" uk-slideshow-parallax="x: 100,-100">
            Lorem{" "}
          </h1>
          <p uk-slideshow-parallax="x: 200,-200">Lorem ipsum dolor sit amet.</p>
        </div>
      </li>
    </ul>

    <a
      className="uk-position-center-left uk-position-small uk-hidden-hover"
      href="#"
      uk-slidenav-previous="true"
      uk-slideshow-item="previous"
    >
      {/* <span uk-icon="icon: chevron-left" /> */}
    </a>
    <a
      className="uk-position-center-right uk-position-small uk-hidden-hover"
      href="#"
      uk-slidenav-next="true"
      uk-slideshow-item="next"
    >
      {/* <span uk-icon="icon: chevron-right" /> */}
    </a>
  </div>
);
export default Slider;
