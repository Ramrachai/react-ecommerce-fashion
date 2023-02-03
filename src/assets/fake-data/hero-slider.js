// const img1 = require("../images/slider/slide_1.png").default;
// const img2 = require("../images/slider/slide_2.png").default;
// const img3 = require("../images/slider/slide_3.png").default;

import img1 from "../images/slider/one.png";
import img2 from "../images/slider/two.png";
import img3 from "../images/slider/three.png";

const heroSliderData = [
  {
    title: "Step into summer",
    description: "A look at our freshest finds",
    img: img1,
    color: "black",
    path: "/catalog/high-waist-skinny-jeans",
  },
  {
    title: "Shop now and get 10% off your first order",
    description: "Find the perfect item for any occasion",
    img: img2,
    path: "/catalog/cute-floral-top",
    color: "black",
  },
  {
    title: "Treat yourself to something special",
    description: "Browse our selection of top-quality products",
    img: img3,
    path: "/catalog/denim-jacket",
    color: "black",
  },
];

export default heroSliderData;
