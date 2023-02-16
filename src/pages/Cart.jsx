import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Helmet from "../components/Helmet";
import CartItem from "../components/CartItem";
import Button from "../components/Button";

import productData from "../assets/fake-data/products";
import numberWithCommas from "../utils/numberWithCommas";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems.value);

  const [cartProducts, setCartProducts] = useState(
    productData.getCartItemsInfo(cartItems)
  );

  const [totalProducts, setTotalProducts] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCartProducts(productData.getCartItemsInfo(cartItems));
    setTotalPrice(
      cartItems.reduce(
        (total, item) => total + Number(item.quantity) * Number(item.price),
        0
      )
    );
    setTotalProducts(
      cartItems.reduce((total, item) => total + Number(item.quantity), 0)
    );
  }, [cartItems]);

  return (
    <Helmet title="Cart">
      <div className="cart">
        <div className="cart__info">
          <div className="cart__info__txt">
            <p>
              You have <em>{totalProducts}</em> products in your cart
            </p>
            <div className="cart__info__txt__price">
              <span>Total Price: </span>{" "}
              <span>{numberWithCommas(Number(totalPrice))}</span>
            </div>

            <div className="cart__info__txt__price">
              <span>Shipping Price: </span>
              <span>{totalPrice > 1 ? "$25" : "0"} </span>
            </div>
            <hr />
            <div className="cart__info__txt__price">
              <span>
                {" "}
                <b>Total: </b>{" "}
              </span>
              <span>$ {totalPrice > 1 ? totalPrice + 25 : "0"}</span>
            </div>
          </div>
          <div className="cart__info__btn">
            {totalPrice > 0 ? (
              <form
                action={`http://stripe.hillmango.com/checkout/create-checkout-session/`}
                method="POST"
              >
                <input
                  type="hidden"
                  name="product_name"
                  value={`Total amount to pay:`}
                />
                <input
                  type="hidden"
                  name="price"
                  value={(totalPrice + 25) * 100}
                />
                <Button size="block" type="submit">
                  Checkout
                </Button>
              </form>
            ) : (
              false
            )}

            <Link to="/catalog">
              <Button size="block">Continue Shopping</Button>
            </Link>
          </div>
        </div>
        <div className="cart__list">
          {cartProducts.map((item, index) => (
            <CartItem item={item} key={index} />
          ))}
        </div>
      </div>
    </Helmet>
  );
};

export default Cart;
