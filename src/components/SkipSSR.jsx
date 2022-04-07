import React from "react";

const SkipSSR = () => {
  return (
    <p>
      This is a test component to skip server side rendering. When you reload
      the page, you will see this component render on the client side.
    </p>
  );
};

export default SkipSSR;
