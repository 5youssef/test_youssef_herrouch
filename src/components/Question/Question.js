import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

const Question = () => {
  return (
    <div className="Question">
      <h3 className="bigTitle">questionnaires</h3>
      <Carousel controls={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../../assets/img/image3.png")}
            alt="First slide"
          />
          <Button className="badge-btn">100 points</Button>
          <Carousel.Caption>
            <h3>Que pensez-vous d’anfaplace ?</h3>
            <p>
              Igitur nominum nominum ob epigonus molitioni oppressi pollicitos
              vivendi ob.
            </p>
            <Button className="slide-btn">Je participe</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../../assets/img/image3.png")}
            alt="Second slide"
          />
          <Button className="badge-btn">100 points</Button>
          <Carousel.Caption>
            <h3>Que pensez-vous d’anfaplace ?</h3>
            <p>
              Igitur nominum nominum ob epigonus molitioni oppressi pollicitos
              vivendi ob.
            </p>
            <Button className="slide-btn">Je participe</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../../assets/img/image3.png")}
            alt="Third slide"
          />
          <Button className="badge-btn">100 points</Button>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <Button className="slide-btn">Je participe</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Question;
