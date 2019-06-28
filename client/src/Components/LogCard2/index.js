import React from "react";

const LogCard2 = ({ handleChange, handleSubmit }) => (
  <div
    className="uk-section uk-section-muted uk-flex uk-flex-middle uk-animation-fade"
    uk-height-viewport="true"
  >
    <div className="uk-width-1-1">
      <div className="uk-container">
        <div className="uk-grid-margin uk-grid uk-grid-stack" uk-grid="true">
          <div className="uk-width-1-1@m">
            <div className="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
              <h3 className="uk-card-title uk-text-center">
                ¡Bienvenido Nuevamente!
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="uk-margin">
                  <div className="uk-inline uk-width-1-1">
                    <span className="uk-form-icon" uk-icon="icon: mail" />
                    <input
                      onChange={handleChange}
                      className="uk-input uk-form-large"
                      type="text"
                      placeholder="example@mail.com"
                      name="email"
                      required="true"
                    />
                  </div>
                </div>
                <div className="uk-margin">
                  <div className="uk-inline uk-width-1-1">
                    <span className="uk-form-icon" uk-icon="icon: lock" />
                    <input
                      onChange={handleChange}
                      name="password"
                      className="uk-input uk-form-large"
                      type="password"
                      placeholder="********"
                      required="true"
                    />
                  </div>
                </div>
                <div className="uk-margin">
                  <button className="uk-button uk-button-primary uk-button-large uk-width-1-1">
                    Login
                  </button>
                </div>
                <div className="uk-text-small uk-text-center">
                  ¿Sin registro? <a href="/register">Crear Cuenta</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LogCard2;
