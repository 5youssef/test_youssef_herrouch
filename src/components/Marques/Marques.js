import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Marques = () => {
  return (
    <div className="Marques">
      <h3 className="bigTitle my-4">nos marques</h3>

      <Row >
        <Col className="my-4 text-center" >
          <img alt="..." src={require("../../assets/img/img1.png")} />
        </Col>

        <Col className="my-4 text-center" >
          <img alt="..." src={require("../../assets/img/img2.png")} />
        </Col>
      </Row>
      <Row className="mb-4">
        <Col className="my-4 text-center" >
          <img alt="..." src={require("../../assets/img/img3.png")} />
        </Col>
        <Col className="my-4 text-center" >
          <img alt="..." src={require("../../assets/img/img4.png")} />
        </Col>
      </Row >
    </div>
  );
};

export default Marques;
