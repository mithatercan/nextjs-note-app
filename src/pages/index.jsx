import React from "react";
import dynamic from "next/dynamic";

const SkipSSR = dynamic(() => import("../components/SkipSSR"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

const Home = () => {
  return (
    <div className='home-view'>
      <p>
        This app is for learning Next.js. I made this based on the tutorial at{" "}
        <a href='https://frontendmasters.com/courses/next-js/'>
          Frontend Masters
        </a>
        . I highly recommend you to watch this course and learn more about
        Next.js.
      </p>
      <hr />
      <h1>Test Component For SSR</h1>
      <SkipSSR />
    </div>
  );
};

export default Home;
