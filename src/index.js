import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import { store } from "./redux/store";
import { Provider } from "react-redux";

import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./sass/index.scss";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import Layout from "./components/Layout";

// stripe integration
const stripePromise = loadStripe(
  "pk_test_51MX63uAgsjEWH9YskpT4NBJTBcUopFt3ys4Kh5V4i3dU6rZCovd3W7ytbeEufwrgbR1lYx2iX6fvtnXFYAzqHmbP00FyGsJjnk"
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Elements stripe={stripePromise}>
        <Layout />
      </Elements>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
