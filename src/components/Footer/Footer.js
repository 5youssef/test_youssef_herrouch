import React from "react";

const Footer = () => {
  return (
    <div className="Footer">
      <div>
        <div className="Link-Active">
          <div>
            <img alt="..." src={require("../../assets/img/iconHome.png")} />{" "}
          </div>
          <div className="text-Link-Active">Accueil</div>
        </div>
      </div>
      <div>
        <img alt="..." src={require("../../assets/img/iconCar.png")} />
      </div>
      <div>
        <img alt="..." src={require("../../assets/img/iconUser.png")} />
      </div>
    </div>
  );
};

export default Footer;
