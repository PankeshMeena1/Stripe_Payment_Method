import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import "./CartPage.css"
import { Link } from "react-router-dom";
import {
  qtyDecrease,
  qtyIncrease,
  removeCart,
  clearCart
} from "../redux/slices/cartSlice";

const Cart = () => {
  let Sum = 0;
  const [cartItems, setCartItems] = useState("");
  const [email, setEmail] = useState("")
  const cartData = useSelector((state) => state.cartSlice.cart);
  const dispatch = useDispatch();

  const cardQuantity = () => {
    if (cartData.length > 0) {
      setCartItems(`Cart (${cartData.length} items)`);
    } else {
      setCartItems("Your Cart is empty");
    }
  };
  useEffect(() => {
    cardQuantity();
  });
  console.log(email)

  //payment integration...
  const makePayment = async () => {
    if (!email) {
      alert("please enter your email")
      return 0;
    }
    else {

      const stripe = await loadStripe(
        //This is the publishable key of our stripe payment api...
        // I have create this account only for this project that the reaon why i am providing the secret key..
        "pk_test_51PNVMB00Cl7fHLHIy0UaFYfoVZy8CeNjXUZXOOiF3Rl166HL4pww3tvmgk2HihryiLSoZMzj6hR0YUaKjy6dg3M100sc8mqhB6"
      );
      const body = {
        products: cartData,
        email: email
      };
      const headers = {
        "Content-Type": "application/json",
      };
      const response = await fetch(
        "http://localhost:7000/api/create-checkout-session",
        {
          method: "POST",
          headers,
          body: JSON.stringify(body),
        }
      );
      const session = await response.json();
      const result = stripe.redirectToCheckout({
        sessionId: session.id,
      });
      console.log(result)
      if (result.error) {
        console.log(result.error);
      }
    }
    setEmail("")
    dispatch(clearCart())
  };

  return (
    <>
      <div className="cart">
        <h1>Shopping Cart</h1>
        <div className="cart-container11">
          <div className="cart-part1">
            <h6 className="cart-h6">{cartItems}</h6>

            {cartData.map((key) => {
              Sum += key.quantity * key.price;
              return (
                <div className="cart-part-1-content">
                  <div className="cart-part-1-img">
                    <img src={key.image} alt="img" height="100%" width="100%" />
                  </div>
                  <div className="cart-part1-details">
                    <div className="cart-quantity-handler">
                      <h2> </h2>{" "}
                      <div>
                        {" "}
                        <span
                          onClick={() => dispatch(qtyDecrease({ id: key.id }))}
                          className="cart-quant-handler"
                        >
                          -
                        </span>{" "}
                        <span>{key.quantity}</span>{" "}
                        <span
                          onClick={() => dispatch(qtyIncrease({ id: key.id }))}
                          className="cart-quant-handler"
                        >
                          +
                        </span>{" "}
                      </div>
                    </div>
                    <p>{key.title}</p>

                    <div className="cartremove">
                      <div className="cart-buttons">
                        <button onClick={() => dispatch(removeCart({ id: key.id }))}
                          className="cartButtons"
                        >
                          {" "}
                          <span>
                            <i class="ri-delete-bin-5-line" style={{ fontSize: "20px", marginRight: "10px" }}></i>
                          </span>
                          <span className="wishremove">Remove Item</span>
                        </button>
                      </div>
                      <h2 className="cart-total-price">
                        {key.quantity * key.price}
                      </h2>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cart-part2">
            <h6 className="cart-h6">Checkout</h6>
            {cartData.map((item) => {
              return (
                <div className="cart-page-checkout">
                  <p>{item.title}</p>
                  <p>$ {item.price}</p>
                </div>
              )
            })}
            <hr></hr>
            <div className="cart-page-checkout">
              <h3>Total Price </h3>
              <h3>$ {Sum}</h3>
            </div>

            <hr size="1" />
            <div className="cart-page-checkout">
              <p>Amount to pay </p>
              <p>$ {Sum}</p>
            </div>
            <div className="cart-page-checkout">
              <input type="email" name="email" placeholder="Please Enter Your Email" onChange={(e) => {
                setEmail(e.target.value)
              }} className="email-input" />
            </div>


            <button className="go-to-checkout cartButtons" onClick={makePayment}>
              <Link>Go to Checkout</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
