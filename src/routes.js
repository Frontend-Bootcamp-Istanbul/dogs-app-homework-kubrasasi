import React from "react";
import Homepage from "./containers/Homepage";
import Goldens from "./containers/Goldens";
import Cavaliers from "./containers/Cavaliers";
import FilteredDogs from "./containers/FilteredDogs";
import Details from "./components/Details";
import { Jumbotron, Button } from "reactstrap";

const routes = [
  {
    path: "/",
    exact: true,
    component: Homepage,
    title: "Anasayfa",
  },
  {
    path: "/tur/:yazilanTur",
    exact: false,
    component: FilteredDogs,
    title: "Filtrelenmis Dogs",
  },
  {
    path: "/hakkinda",
    exact: false,
    component: () => {
      return (
        <div>
          <Jumbotron>
            <h1 className="display-3">Kübra Şaşı</h1>
            <p className="lead">
              This is a simple hero unit, a simple Jumbotron-style component for
              calling extra attention to featured content or information.This is
              a simple hero unit, a simple Jumbotron-style component for calling
              extra attention to featured content or information.This is a
              simple hero unit, a simple Jumbotron-style component for calling
              extra attention to featured content or information.This is a
              simple hero unit, a simple Jumbotron-style component for calling
              extra attention to featured content or information.This is a
              simple hero unit, a simple Jumbotron-style component for calling
              extra attention to featured content or information.This is a
              simple hero unit, a simple Jumbotron-style component for calling
              extra attention to featured content or information.This is a
              simple hero unit, a simple Jumbotron-style component for calling
              extra attention to featured content or information.This is a
              simple hero unit, a simple Jumbotron-style component for calling
              extra attention to featured content or information.This is a
              simple hero unit, a simple Jumbotron-style component for calling
              extra attention to featured content or information.This is a
              simple hero unit, a simple Jumbotron-style component for calling
              extra attention to featured content or information.
            </p>
            <hr className="my-2" />
          </Jumbotron>
        </div>
      );
    },
    title: "Hakkinda",
  },
  {
    path: "/details/:id",
    exact: false,
    component: Details,
    title: "Details",
  },
];

export default routes;
