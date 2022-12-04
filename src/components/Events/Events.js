import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

const Slider = () => {
  const listEvents = [
    {
      name: "Lorem ipsum",
      date: "20 Oct - 25 Nov",
      urlImage: require("../../assets/img/image2.png"),
    },
    {
      name: "Lorem ipsum",
      date: "20 Oct - 25 Nov",
      urlImage: require("../../assets/img/image2.png"),
    },
    {
      name: "Lorem ipsum",
      date: "20 Oct - 25 Nov",
      urlImage: require("../../assets/img/image2.png"),
    },
    {
      name: "Lorem ipsum",
      date: "20 Oct - 25 Nov",
      urlImage: require("../../assets/img/image2.png"),
    },
    {
      name: "Lorem ipsum",
      date: "20 Oct - 25 Nov",
      urlImage: require("../../assets/img/image2.png"),
    },
  ];

  return (
    <div>
      <h3 className="bigTitle">événements tendance</h3>
      <div className="Events">
        {listEvents.map((item) => (
          <div className="cardEvent">
            <img src={item.urlImage} alt="First slide" />
            <div className="textCardEvent">
              <h3>{item.name}</h3>
              <p>{item.date}</p>

            </div>
          </div>
        ))}
      </div>
      <Button className="global-btn">Voir tous les événements</Button>{" "}
    </div>
  );
};

export default Slider;
