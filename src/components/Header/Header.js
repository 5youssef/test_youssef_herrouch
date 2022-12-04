import React from "react";

const Header = () => {
  return (
    <>
      <div className="header">
        <div>
          <img alt="..." src={require("../../assets/img/iconMenu.png")} />
        </div>
        <div>
          <img className="logo" alt="..." src={require("../../assets/img/logo.png")} />
        </div>
        <div className="contentSearch">
          <div>
            <img alt="..." src={require("../../assets/img/iconSearch.png")} />
          </div>
          <div>
            <img alt="..." src={require("../../assets/img/iconQr.png")} />
          </div>
        </div>
      </div>
      <div className="Menu">
        <div className="Link-active">
          <div>
            <img alt="..." src={require("../../assets/img/iconMagasins.png")} />
          </div>
          <div>Magasins</div>
        </div>
        <div className="Link">
          <div>
            <img
              alt="..."
              src={require("../../assets/img/iconReastauration.png")}
            />
          </div>
          <div>Restauration</div>
        </div>
        <div className="Link">
          <div>
            <img
              className="iconInfo"
              alt="..."
              src={require("../../assets/img/iconInformation.png")}
            />
          </div>
          <div>Informations</div>
        </div>
      </div>
    </>
  );
};

export default Header;
