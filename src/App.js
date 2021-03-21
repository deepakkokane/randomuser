import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Container, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import MyCard from "./components/MyCard";

function App() {
  const [details, setDetails] = useState(null);

  const getDetails = async () => {
    const { data } = await Axios.get("https://randomuser.me/api/");
    const res = data.results[0];

    setDetails(res);
    console.log(details);
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col md={4} className="offset-md-4">
          {details ? (
            <MyCard details={details} />
          ) : (
            <h1 className="text-center mt-5 pt-5">
              Loading
              <span className="spinner spinner-border text-warning"></span>
            </h1>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
