import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HotelPage from "./hotelPage";
import { kebabCase } from "./helpers/kebabCase";
import Layout from "./component/layout/Layout";
import { data } from "./helpers/hotels";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/hotels-app" element={<App />} />
          {/* <Route path="/" element={<App />} /> */}
          {data.map((hotel) => {
            return (
              <Route
                path={`/hotel/${encodeURI(kebabCase(hotel["שם"]))}`}
                element={<HotelPage hotel={hotel} />}
              />
            );
          })}
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
