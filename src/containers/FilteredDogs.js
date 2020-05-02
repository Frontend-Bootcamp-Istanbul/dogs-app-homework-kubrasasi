import React from "react";
import dogs from "../dogsdata";
import {
  Breadcrumb,
  BreadcrumbItem,
  ListGroup,
  ListGroupItem,
  Container,
  Jumbotron,
} from "reactstrap";

const FilteredDogs = (props) => {
  const secilenTur = props.match.params.yazilanTur;
  const filteredDogs = dogs.filter((dog) => dog.breedSlug === secilenTur);
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="#">Anasayfa</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>{secilenTur}</BreadcrumbItem>
      </Breadcrumb>
      <Jumbotron>
        <Container>
          <h4 className="display-3">Kategoriye Ait Köpek Listesi</h4>
        </Container>
      </Jumbotron>
      {filteredDogs.map((dog) => {
        return (
          <div>
            <Container>
              <ListGroup>
                <ListGroupItem style={ListGroupStyle} key={dog.id}>
                  {dog.name}
                </ListGroupItem>
              </ListGroup>
            </Container>
            ;
          </div>
        );
      })}
    </div>
  );
};

const ListGroupStyle = {
  width: "100%",
};

export default FilteredDogs;
