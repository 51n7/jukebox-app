import React, { useState } from "react";
import Form from "../Form";
import Header from "../Header";

const Layout = ({children}) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [value, setValue] = useState(0);

  const onLogin = token => {
    if (token) {
      setLoggedIn(true);
    }
  };

  const valueClicked = () => {
    setValue(value + 1);
  };

  return (
    <div>
      {loggedIn ? (
        <>
          <Header value={value} onClick={valueClicked} />
          {children}
        </>
      ) : (
        <Form onLogin={onLogin} />
      )}
    </div>
  );
};

export default Layout;
