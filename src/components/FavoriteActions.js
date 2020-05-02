import React from "react";
import { Button } from "reactstrap";

const FavoriteActions = (props) => {
  return (
    <div style={buttonMargin}>
      {props.getStatus(props.id) ? (
        <Button
          disabled={props.disabled}
          size="sm"
          outline
          color="danger"
          onClick={() => {
            props.toggle(props.id);
          }}
        >
          Favorilerden Cikar
        </Button>
      ) : (
        <Button
          disabled={props.disabled}
          size="sm"
          outline
          color="success"
          onClick={() => {
            props.toggle(props.id);
          }}
        >
          Favoriye Ekle
        </Button>
      )}
    </div>
  );
};

const buttonMargin = {
  marginTop: "35px",
  textAlign: "center",
};

export default FavoriteActions;
