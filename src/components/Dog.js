import React from "react";
import FavoriteActions from "./FavoriteActions";
import { Link } from "react-router-dom";
import Details from "./Details";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Button,
} from "reactstrap";

const Dog = ({ id, name, toggle, getStatus, image }) => {
  return (
    <Card>
      <CardImg style={CardImage} top width="100%" src={image} alt={name} />
      <CardBody>
        <CardTitle>
          <Button
            style={ButtonWdith}
            size="sm"
            outline
            color="primary"
            href={`/details/${id}/`}
            key={id}
          >
            {name}
          </Button>
        </CardTitle>
        <CardText></CardText>

        <FavoriteActions toggle={toggle} id={id} getStatus={getStatus} />
      </CardBody>
    </Card>
  );
};

const CardImage = {
  height: "250px",
  justifyContent: "center",
  textAlign: "center",
  borderRadius: 2,
};

const ButtonWdith = {
  width: "100%",
};

export default Dog;
