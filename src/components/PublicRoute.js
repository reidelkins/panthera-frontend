import React from "react";
import Router from "next/router";
import useAuth  from "../utils/Auth"

const publicRoute = (Component = null, options = {}) => {
  class PublicRoute extends React.Component {
    state = {
      loading: true,
    };

    async componentDidMount() {
      const isLoggedIn = useAuth
      if (!isLoggedIn) {
        this.setState({ loading: false });
      } else {
        Router.push(options.pathAfterFailure || "/login");
      }
    }

    render() {
      const { loading } = this.state;

      if (loading) {
        return <div />;
      }

      return <Component {...this.props} />;
    }
  }

  return PublicRoute;
};

export default publicRoute;