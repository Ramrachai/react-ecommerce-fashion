import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

import Helmet from "../components/Helmet";
import HeroSlider from "../components/HeroSlider";
import Section, { SectionTitle, SectionBody } from "../components/Section";
import PolicyCard from "../components/PolicyCard";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";

import heroSliderData from "../assets/fake-data/hero-slider";
import policy from "../assets/fake-data/policy";
import productData from "../assets/fake-data/products";

import banner from "../assets/images/banner.png";

import { useDispatch } from "react-redux";
import { clearItem } from "../redux/shopping-cart/cartItemsSlide";
import styled from "styled-components";

const Home = () => {
  let [searchParams, setSearchParams] = useSearchParams({});

  const [modalIsOpen, setIsOpen] = React.useState(false);

  const dispatch = useDispatch();
  const paymentSuccess = searchParams.get("success");

  useEffect(() => {
    if (paymentSuccess) {
      dispatch(clearItem());
      setIsOpen(true);
    }
  }, []);

  return (
    <Helmet title="Home page">
      {/* hero slider */}
      <HeroSlider
        data={heroSliderData}
        control={true}
        auto={false}
        timeOut={5000}
      />
      {/* end hero slider */}

      {/* policy section */}
      <Section>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {policy.map((item, index) => (
              <Link key={index} to="/policy">
                <PolicyCard
                  name={item.name}
                  description={item.description}
                  icon={item.icon}
                />
              </Link>
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* end policy section */}

      {/* best selling section */}
      <Section>
        <SectionTitle>Our Best selling Products</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(4).map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* end best selling section */}

      {modalIsOpen && (
        <PaymentMsg>
          <h2>Payment is successful. Thank you for your order </h2>
          <button onClick={() => setIsOpen(false)}> close </button>
        </PaymentMsg>
      )}

      {/* new arrival section */}
      <Section>
        <SectionTitle>New arrival </SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(8).map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* end new arrival section */}

      {/* banner */}
      <Section>
        <SectionBody>
          <Link to="/catalog">
            <img src={banner} alt="" />
          </Link>
        </SectionBody>
      </Section>
      {/* end banner */}

      {/* popular product section */}
      <Section>
        <SectionTitle>Popular Products</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(12).map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* end popular product section */}

      {/* payment message modal   */}
    </Helmet>
  );
};

export default Home;

const PaymentMsg = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: #27bb71;

  padding: 10px 16px;

  h2 {
    font-size: 14px;
    letter-spacing: 2px;
    text-align: center;
    color: white;
    font-weight: 100;
  }
  button {
    background-color: transparent;
    outline: none;
    border: 1px solid #064e26;
    border-radius: 2px;
    padding: 3px 5px;
    cursor: pointer;
  }
`;
