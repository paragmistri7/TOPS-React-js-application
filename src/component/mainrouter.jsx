import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Mainfile from "./mainfile";
import Home from "./home.jsx";
import Example from "./mainexample";
import Errorpage from "./errorpage ";
// import Examplerouter from '../examplecompo/01examplerouter'
// import Classrouter from '../classcompo/classrouter'

const Mainrouter = () => {
  const Classrouter = React.lazy(() => {
    return import("../classcompo/classrouter");
  });
  const Functionrouter = React.lazy(() => {
    return import("../functionalcompo/01functionalrouter");
  });
  const Examplerouter = React.lazy(() => {
    return import("../examplecompo/01examplerouter");
  });
  const PracticeRouter = React.lazy(() => {
    return import("../Practice/01PracticeRouter.jsx");
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<Mainfile />}>
          <Route path="home" element={<Home />} />
          <Route path="example/*" element={<Example />}>
            <Route
              path="classcom/*"
              element={
                <Suspense fallback={<h1>loading...</h1>}>
                  <Classrouter />
                </Suspense>
              }
            />

            <Route
              path="functioncom/*"
              element={
                <Suspense fallback={<h1>function loading...</h1>}>
                  <Functionrouter />
                </Suspense>
              }
            ></Route>

            <Route
              path="examplecom/*"
              element={
                <Suspense fallback={<h1>Example loading....</h1>}>
                  
                  <Examplerouter />
                </Suspense>
              }
            ></Route>

            <Route
              path="practice/*"
              element={
                <Suspense fallback={<h1>Example loading....</h1>}>
                  
                  <PracticeRouter />
                </Suspense>
              }
            ></Route>

            <Route path="*" element={<Errorpage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default Mainrouter;
