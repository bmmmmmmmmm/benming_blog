import React, { FC, ReactElement } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Routes } from '../Typings/router'

interface Iprpos {
  routes: Routes[] | undefined
}

const HomeRoute:FC<Iprpos> = ({
  routes
}):ReactElement => (
  <Switch>
    {routes !== undefined
      ? routes.map((item) =>
          item.exact ? (
            <Route
              path={item.path}
              component={item.component}
              key={item.path}
              exact
            />
          ) : (
            <Route
              path={item.path}
              component={item.component}
              key={item.path}
            />
          )
        )
      : false}
    <Redirect to="/notFound" />
  </Switch>
);
export default HomeRoute;
