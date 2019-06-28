import React from "react";
import LogJPG from "../../assets/images/logCard.jpg";

const LogCard = ({
  name,
  lastName,
  email,
  password,
  handleChange,
  handleSubmit
}) => (
  <div
    className="uk-section uk-section-muted uk-flex uk-flex-middle uk-animation-fade"
    uk-height-viewport
    uk-animation-fade
  >
    <div className="uk-width-1-1">
      <div className="uk-container">
        <div className="uk-grid-margin uk-grid uk-grid-stack" uk-grid="true">
          <div className="uk-width-5-6 uk-margin-auto">
            <div
              className="uk-card uk-card-default uk-card-large uk-grid-collapse uk-child-width-1-2@s uk-margin uk-border-rounded"
              uk-grid="true"
            >
              <div className="uk-flex-last@s uk-card-media-right uk-cover-container">
                <img src={LogJPG} alt="" uk-cover />
                <canvas width="600" height="400" />
              </div>
              <div>
                <div className="uk-card-body">
                  <h3 className="uk-card-title uk-text-bold uk-text-uppercase uk-text-primary">
                    Registro
                  </h3>
                  <form className="uk-form-stacked" onSubmit={handleSubmit}>
                    <div className="uk-margin">
                      <label className="uk-form-label" for="form-stacked-text">
                        Nombre
                      </label>
                      <div className="uk-form-controls">
                        <input
                          className="uk-input"
                          id="form-stacked-text"
                          type="text"
                          name="name"
                          value={name}
                          onChange={handleChange}
                          placeholder="ej. Artemio"
                          required="true"
                        />
                      </div>
                    </div>
                    <div className="uk-margin">
                      <label className="uk-form-label" for="form-stacked-text">
                        Apellido
                      </label>
                      <div className="uk-form-controls">
                        <input
                          className="uk-input"
                          id="form-stacked-text"
                          type="text"
                          name="lastName"
                          value={lastName}
                          onChange={handleChange}
                          placeholder="ej. Pérez"
                          required="true"
                        />
                      </div>
                    </div>
                    <div className="uk-margin">
                      <label className="uk-form-label" for="form-stacked-text">
                        Email
                      </label>
                      <div className="uk-form-controls">
                        <input
                          className="uk-input"
                          id="form-stacked-text"
                          type="email"
                          name="email"
                          value={email}
                          onChange={handleChange}
                          placeholder="example@email.com"
                          required="true"
                        />
                      </div>
                    </div>

                    <div className="uk-margin">
                      <label className="uk-form-label" for="form-stacked-text">
                        Password
                      </label>
                      <div className="uk-form-controls">
                        <input
                          className="uk-input"
                          id="form-stacked-text"
                          type="password"
                          name="password"
                          value={password}
                          onChange={handleChange}
                          placeholder="***********"
                          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                          required="true"
                        />
                      </div>
                      <small className="uk-flex uk-flex-middle uk-margin-small-top">
                        Debe contener mínimo 8 caracteres, un número y una letra
                        mayúscula.
                      </small>
                    </div>
                    <div className="uk-margin">
                      <div className="uk-form-controls">
                        <label>
                          <input
                            className="uk-checkbox uk-margin-small-right"
                            type="checkbox"
                            required="true"
                          />
                          <small>
                            Acepta nuestros{" "}
                            <a href="/terms">Términos del Servicio</a> y{" "}
                            <a href="/privacy">Política de Privacidad</a>.
                          </small>
                        </label>
                      </div>
                    </div>
                    <div className="uk-margin">
                      <div className="uk-form-controls">
                        <button
                          type="submit"
                          className="uk-button uk-button-primary"
                        >
                          Crear Cuenta
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LogCard;
