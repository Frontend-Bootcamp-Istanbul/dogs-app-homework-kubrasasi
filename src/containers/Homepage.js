import React from "react";
import dogs from "../dogsdata";
import { Container, Row, Col } from "reactstrap";
import FavoriteActions from "../components/FavoriteActions";
import Dog from "../components/Dog";
import axios from "axios";

const apiHost = "https://5eac43064bf71e00166a0732.mockapi.io";

class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      favorites: [],
      loadingFavorites: false,
      disabled: "",
    };
  }
  componentDidMount() {
    // localstoragedan getirme
    /*        this.setState({
            favorites: window.localStorage.getItem("favorites") ? JSON.parse(window.localStorage.getItem("favorites")): []
        })*/

    this.setState(
      {
        loadingFavorites: true,
      },
      () => {
        axios
          .get(`${apiHost}/favorites`)
          .then((result) => {
            this.setState({
              favorites: result.data,
              loadingFavorites: false,
            });
          })
          .catch((err) => {
            console.log("Axios err", err);
            this.setState({
              loadingFavorites: false,
            });
          });
      }
    );
  }

  toggle = (dogId) => {
    const foundDog = this.state.favorites.find(
      (favorite) => favorite.dogId === dogId
    );
    if (foundDog) {
      axios
        .delete(`${apiHost}/favorites/${foundDog.id}`)
        .then((result) => {
          this.setState({
            favorites: this.state.favorites.filter(
              (dog) => dog.dogId !== dogId
            ),
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      // window.localStorage.setItem("favorites", JSON.stringify(this.state.favorites));
      axios
        .post(`${apiHost}/favorites`, {
          dogId,
        })
        .then((result) => {
          const eklenenFavori = result.data; // {id: 1, dogId: benim yolladigim dog id, createdat: date}
          this.setState({
            favorites: [...this.state.favorites, eklenenFavori],
            disabled: false,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  getStatus = (dogId) => {
    const foundDog = this.state.favorites.find(
      (favorite) => favorite.dogId === dogId
    );
    return foundDog;
  };

  render() {
    if (this.state.loadingFavorites) {
      return (
        <div>
          <h1>Sayfa Yukleniyor.....</h1>
        </div>
      );
    }
    return (
      <div>
        <Container className="themed-container" style={{ marginTop: "20px" }}>
          <Row>
            {dogs.map((dog) => {
              return (
                <Col xs="3" style={colDeger}>
                  <Dog
                    toggle={this.toggle}
                    id={dog.id}
                    getStatus={this.getStatus}
                    {...dog}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
}

const colDeger = {
  marginBottom: "25px",
};

export default Homepage;
