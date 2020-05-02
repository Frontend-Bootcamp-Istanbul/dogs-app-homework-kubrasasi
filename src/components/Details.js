import React, { useState } from "react";
import dogs from "../dogsdata";
import {
  Container,
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardImg,
  CardText,
} from "reactstrap";
import { findByLabelText } from "@testing-library/react";

const Details = ({ match }) => {
  let { id } = match.params;

  const myDog = dogs.find((dog) => dog.id === id);
  const { name, description, age, breed, image } = myDog;
  const imgStyle = {
    maxHeight: 500,
    maxWidth: 500,
  };

  return (
    <div>
      <Container>
        <Card style={cardStyle}>
          <CardHeader>{name}</CardHeader>
          <CardImg className="img-thumbnail" src={image} alt="Card image cap" />
          <CardBody>
            <h3>Açıklama</h3>
            <CardText>{description}</CardText>
            <h3>Yaş</h3>
            <CardText>{age}</CardText>
            <h3>Cinsi</h3>
            <CardText>{breed}</CardText>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

const cardStyle = {
  margin: "125px auto 0",
  width: "30%",
  textAlign: "center",
  boxShadow: "5px 8px 8px 5px #e6e6e3",
};

export default Details;
