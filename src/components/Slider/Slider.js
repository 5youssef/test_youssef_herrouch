import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import axios from "axios";

const Slider = () => {
  const [Listplaces, setListplaces] = useState([]);

  const getList = async () => {
    axios({
      method: "get",
      url: "https://artchou.com/api/places",
    }).then(function (rep) {
      const results = rep?.data?.data;
      setListplaces(results);
    });
  };

  console.log("Listplaces", Listplaces);

  useEffect(() => {
    getList();
  }, []);

  return (
    <div className="Slider">
      <h3 className="bigTitle">The PLACE TO BE</h3>
      <Carousel controls={false}>
        {Listplaces.length > 0 &&
          Listplaces?.map((item) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={item?.thumbnail}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>{item.name}</h3>
                <p>{item.link}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
      </Carousel>
      <Button className="global-btn">Voir toutes les actualités</Button>{" "}
    </div>
  );
};

export default Slider;
