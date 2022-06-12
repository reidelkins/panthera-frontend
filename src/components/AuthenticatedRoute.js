import React from "react";
import Router from "next/router";
import useAuth from "../utils/Auth"

const authenticatedRoute = (Component = null, options = {}) => {
  class AuthenticatedRoute extends React.Component {
    state = {
      loading: true,
    };

    async componentDidMount() {
      const isLoggedIn = useAuth
      if (isLoggedIn) {
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

  return AuthenticatedRoute;
};

export default authenticatedRoute;