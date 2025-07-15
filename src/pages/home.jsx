import Category from "../category";
import Nav from "../component/nav";
import Card from "../component/card";
import { food_items } from "../food";
import { useContext } from "react";
import { data } from "../context/userContext";
import { MdOutlineCancel } from "react-icons/md";
import SideCard from "../component/sideCard";
import { useSelector } from "react-redux";
import { TfiFaceSad } from "react-icons/tfi";
import { toast } from "react-toastify";

function Home() {
  let { foods, setFoods, input, showCart, setShowCart } = useContext(data);

  function filterFood(category) {
    if (category === "All") {
      setFoods(food_items);
    } else {
      let newCategory = food_items.filter(
        (item) => item.food_category === category
      );

      setFoods(newCategory);
    }
  }

  let items = useSelector((state) => state.cart);

  let total = items.reduce((total, item) => total + item.qty * item.price, 0);

  let deliveryFee = 25;
  let taxes = (total * 10) / 1000;
  let subTotal = Math.floor(deliveryFee + taxes + total);
  console.log(subTotal);

  return (
    <div className=" bg-gray-500 w-full min-h-screen">
      <Nav></Nav>
      {!input ? (
        <div className="flex flex-wrap justify-center items-center gap-6">
          {Category.map((item) => {
            return (
              <div
                className="bg-purple-200 h-[150px] w-[140px] flex flex-col items-center gap-5 p-5 justify-center text-[16px] font-bold rounded-md shadow-xl hover:bg-purple-300 cursor-pointer transition-all"
                onClick={() => filterFood(item.name)}
              >
                {item.image}
                {item.name}
              </div>
            );
          })}
        </div>
      ) : null}

      <div className="w-full flex flex-wrap gap-5 px-5 pt-8 pb-8 justify-center items-center">
        {foods.length > 1 ? (
          foods.map((item) => (
            <Card
              name={item.food_name}
              id={item.id}
              image={item.food_image}
              type={item.food_type}
              price={item.price}
            />
          ))
        ) : (
          <div className=" flex justify-between items-center gap-8 pt-[300px]">
            <div className="text-center text-4xl text-gray-800 font-semibold ">
              Empty cart
            </div>
            <TfiFaceSad className="text-7xl text-gray-800" />
          </div>
        )}
      </div>
      <div
        className={`w-[100%] md:w-[32vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration-500 flex flex-col items-center overflow-auto ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="w-[100%] flex justify-between items-center">
          <span className="text-pink-500 text-[25px] font-semibold ">
            Cart Items
          </span>
          <MdOutlineCancel
            className="text-red-500 w-[30px] h-[30px] font-semibold cursor-pointer hover:text-gray-900"
            onClick={() => {
              setShowCart(false);
            }}
          />
        </header>
        {items.length > 0 ? (
          <>
            <div>
              {items.map((item) => (
                <SideCard
                  name={item.name}
                  id={item.id}
                  price={item.price}
                  image={item.image}
                  qty={item.qty}
                />
              ))}
            </div>
            <div className="w-full border-t-2 border-b-2  border-gray-600 mt-7 flex flex-col gap-3 p-4">
              <div className="w-full flex justify-between items-center">
                <span className="text-xl text-gray-600 font-semibold">
                  Total
                </span>
                <span className="text-pink-500 font-semibold text-lg">
                  Rs {total}/-
                </span>
              </div>
              <div className="w-full flex justify-between items-center">
                <span className="text-xl text-gray-600 font-semibold">
                  Delivery Fee
                </span>
                <span className="text-pink-500 font-semibold text-lg">
                  Rs 25/-
                </span>
              </div>
              <div className="w-full flex justify-between items-center">
                <span className="text-xl text-gray-600 font-semibold">
                  Taxes incl.
                </span>
                <span className="text-pink-500 font-semibold text-lg">
                  Rs {taxes}/-
                </span>
              </div>
            </div>
            <div className="w-full flex justify-between items-center p-6">
              <span className="text-xl text-gray-600 font-semibold">
                Grand Total
              </span>
              <span className="text-pink-500 font-semibold text-lg">
                Rs {subTotal}/-
              </span>
            </div>
            <button
              className="bg-pink-300 w-[80%] p-3 rounded-lg hover:bg-pink-400 cursor-pointer transition-all font-semibold"
              onClick={() => {
                toast.success("Order Placed !");
              }}
            >
              Order
            </button>
          </>
        ) : (
          <div className=" flex justify-between items-center gap-8 pt-[300px]">
            <div className="text-center text-4xl text-pink-600 font-semibold ">
              Empty cart
            </div>
            <TfiFaceSad className="text-7xl text-pink-600" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
