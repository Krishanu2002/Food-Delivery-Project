import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useContext, useEffect } from "react";
import { data } from "../context/userContext";
import { food_items } from "../food";
import { useSelector } from "react-redux";
function Nav() {
  let { input, setInput, foods, setFoods, showCart, setShowCart } =
    useContext(data);

  useEffect(() => {
    let newList = food_items.filter(
      (item) =>
        item.food_name.includes(input) ||
        item.food_name.toLowerCase().includes(input)
    );
    setFoods(newList);
  }, [input]);

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  let items = useSelector((state) => state.cart);
  console.log(items);

  return (
    <div className=" w-full h-[100px] bg-gray-500 flex justify-between items-center px-8">
      <div className="w-[60px] h-[60px]  bg-pink-100 flex justify-center items-center rounded-md shadow-xl hover:bg-pink-200 cursor-pointer transition-all">
        <MdFastfood className="h-[30px] w-[30px] text-pink-500" />
      </div>
      <form
        className="w-[45%] h-[50px] md:w-[60%] bg-white flex items-center px-5 gap-5 rounded-md shadow-xl"
        onSubmit={(e) => e.preventDefault()}
      >
        <FaSearch className="h-[23px] w-[23px] text-pink-500" />
        <input
          type="text"
          placeholder="Search food items here"
          className=" w-[100%] outline-none text-[15px] md:text-[20px]"
          onChange={handleOnChange}
          value={input}
        ></input>
      </form>
      <div
        className="w-[60px] h-[60px] bg-pink-100 flex justify-center items-center rounded-md shadow-xl relative hover:bg-pink-200 cursor-pointer transition-all"
        onClick={() => {
          setShowCart(true);
        }}
      >
        <FaShoppingCart className="h-[30px] w-[30px] text-pink-500 " />
        <span className="absolute top-0 right-2 text-pink-500 font-bold">
          {items.length}
        </span>
      </div>
    </div>
  );
}

export default Nav;
