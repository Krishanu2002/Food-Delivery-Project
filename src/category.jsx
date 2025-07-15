import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { CiBowlNoodles } from "react-icons/ci";
import { GiMeal } from "react-icons/gi";
import { FaPizzaSlice } from "react-icons/fa";
import { PiHamburgerBold } from "react-icons/pi";

const Category = [
  {
    id: 1,
    name: "All",
    image: <TiThSmallOutline className="h-[60px] w-[60px] text-pink-500" />,
  },
  {
    id: 2,
    name: "Breakfast",
    image: (
      <MdOutlineFreeBreakfast className="h-[60px] w-[60px] text-pink-500" />
    ),
  },
  {
    id: 3,
    name: "Soup",
    image: <LuSoup className="h-[60px] w-[60px] text-pink-500" />,
  },
  {
    id: 4,
    name: "Pasta",
    image: <CiBowlNoodles className="h-[60px] w-[60px] text-pink-500" />,
  },
  {
    id: 5,
    name: "Main Course",
    image: <GiMeal className="h-[60px] w-[60px] text-pink-500" />,
  },
  {
    id: 6,
    name: "Pizza",
    image: <FaPizzaSlice className="h-[60px] w-[60px] text-pink-500" />,
  },
  {
    id: 7,
    name: "Burger",
    image: <PiHamburgerBold className="h-[60px] w-[60px] text-pink-500" />,
  },
];
export default Category;
