import React from "react";
import Card1 from "../../assets/images/card1.png";
import Card2 from "../../assets/images/card2.jpg";

const Card = () => (
  <div
    className="uk-child-width-1-2@m  uk-flex uk-flex-wrap uk-flex-center uk-margin-small"
    uk-grid="true"
  >
    <div className="uk-card uk-card-small uk-card-default">
      <div className="uk-card-media-top">
        <img src={Card1} alt="" />
      </div>
      <div className="uk-card-secondary">
        <h3 className="uk-card-title">Electrónica</h3>
        <p>
          El área de electrónica de la avenida está compuesta por departamentos
          de electrónica de Centros Comerciales, Tiendas sobre la avenida,
          Tiendas Departamentales, Tiendas de Autoservicio.
        </p>
        <p>
          Podrás darte cuenta de que en la avenida encontrarás todo lo que
          siempre haz querido. Consulta más detalles en el apartado de
          Electrónica.
        </p>
      </div>
    </div>

    <div className="uk-card uk-card-small uk-card-default">
      <div className="uk-card-secondary">
        <h3 className="uk-card-title">Moda y Accesorios</h3>
        <p>
          Con amplia variedad de Moda y Accesorios ACOXPA cumple con una serie
          de tiendas de ropa para Hombres, Mujeres, Bebés, además de contar con
          Tiendas Deportivas y Joyerías.
        </p>
      </div>
      <div className="uk-card-media-bottom">
        <img src={Card2} alt="" />
      </div>
    </div>
  </div>
);

export default Card;
