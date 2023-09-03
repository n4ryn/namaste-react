import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ItemList from "./ItemList";

import { clearCart } from "../redux/slice/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const [checkout, setCheckout] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (checkout) {
      setTimeout(() => {
        return navigate("/");
      }, 1500);
    }
  }, [checkout]);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRedirect = () => {
    navigate("/");
  };

  const handleCheckout = () => {
    setCheckout(true);
    dispatch(clearCart());
  };

  const subTotal = cartItems
    ?.map((item) => item?.card?.info?.price / 100)
    ?.reduce((total, num) => {
      return total + num;
    }, 0);

  return checkout ? (
    <div className="min-h-[calc(100vh_-_152px)] flex justify-center items-center">
      <p className="font-bold text-2xl">Thanks for shopping with us 🫡</p>
    </div>
  ) : (
    <div className="min-h-[calc(100vh_-_152px)]">
      <div className="md:flex md:justify-center md:items-start p-4 w-12/12 min-h-[calc(100vh_-_14.5rem)] gap-8">
        <div className="mb-10 md:w-8/12">
          {!cartItems?.length ? (
            <div className="min-h-[calc(100vh_-_19rem)] flex flex-col justify-center items-center gap-10">
              <p className="font-bold text-2xl">Cart is empty</p>
              <button
                className="bg-orange-400 text-white px-6 py-2 rounded-md hover:drop-shadow-lg"
                onClick={handleRedirect}
              >
                Take me home! {console.log(subTotal)}
              </button>
            </div>
          ) : (
            ""
          )}

          {cartItems?.length ? (
            <>
              <div className="flex justify-between items-center p-2">
                <p className="text-2xl font-bold">Your cart</p>
                <button
                  className="bg-orange-400 text-white px-6 py-2 rounded-md hover:drop-shadow-lg"
                  onClick={handleClearCart}
                >
                  Clear cart
                </button>
              </div>
              <ItemList items={cartItems}></ItemList>
            </>
          ) : (
            ""
          )}
        </div>

        {cartItems?.length ? (
          <div className="md:w-4/12 flex flex-col justify-center items-center gap-6">
            <p className="font-semibold text-lg">
              Total price: ₹{subTotal?.toFixed(2)}
            </p>
            <button
              className="bg-orange-400 text-white px-6 py-2 rounded-md hover:drop-shadow-lg"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Cart;
