import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom"; // v6 import
import Footer from "../components/Footer";
import Header from "../components/Header";
import routes from "./config";
import { Styles } from "../styles/styles";
import '../styles/rtl.css';

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Styles />
      <Header />
      <Routes>
        {routes.map((routeItem) => {
          const Component = routeItem.component;
          return (
            <Route
              key={routeItem.path}
              path={routeItem.path}
              element={<Component />}
            />
          );
        })}
      </Routes>
      <Footer />
    </Suspense>
  );
};

export default Router;
