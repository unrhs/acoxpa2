import React from "react";
import Offer1 from "../../assets/images/offer1.jpg";
import Offer2 from "../../assets/images/offer2.jpg";
import Offer3 from "../../assets/images/offer3.jpg";
import Offer4 from "../../assets/images/offer4.jpg";
import Offer5 from "../../assets/images/offer5.jpg";
import Offer6 from "../../assets/images/offer6.jpg";
import Offer7 from "../../assets/images/offer7.jpg";
import ads from "../../assets/json/ads";
const Discounts = () => (
  <div uk-sortable="true">
    <ul
      className="uk-grid-small uk-child-width-1-2 uk-child-width-1-4@s uk-text-center"
      uk-sortable="handle: .uk-card"
      uk-grid="yes"
    >
      {ads.map((ad, i) => (
        <li key={i}>
          <div
            className="uk-card uk-card-default uk-card-body"
            tabIndex="0"
            // key={i}
          />
          <img src={ad.url} alt={ad.name} key={i} />
        </li>
      ))}
    </ul>
  </div>
);

export default Discounts;
