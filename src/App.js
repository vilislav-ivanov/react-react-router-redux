import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { setAuthUser } from './actions';

const App = ({ auth, setAuthUser }) => {
  useEffect(() => {
    setAuthUser();
  }, [setAuthUser]);

  const greetings = auth.loading ? (
    <p>some loading...</p>
  ) : (
    <h1>Hello there, user {auth.id}</h1>
  );

  return <div>{greetings}</div>;
};

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps, { setAuthUser })(App);
