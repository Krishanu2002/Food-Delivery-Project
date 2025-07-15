import { GrSquare } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { AddItem } from "../redux/cartSlice";
import { toast } from "react-toastify";

function Card({ name, image, id, type, price }) {
  let dispatch = useDispatch();

  return (
    <div className="h-[400px] w-[300px] bg-green-100 p-4 rounded-lg flex flex-col gap-3 shadow-lg hover:border-4 border-pink-500  transition-all">
      <div className="h-[60%] w-[100%] overflow-hidden rounded-lg">
        <img src={image} alt="" className="object-cover"></img>
      </div>
      <div className="text-2xl font-semibold">{name}</div>

      <div className="w-[100%] flex justify-between items-center">
        <div className="text-xl font-semibold text-pink-500">Rs {price}</div>
        <div
          className={`flex justify-center items-center gap-2 text-lg font-semibold ${
            type === "Veg" ? "text-green-500" : "text-red-500"
          }`}
        >
          <GrSquare />
          <span>{type}</span>
        </div>
      </div>
      <button
        className="bg-pink-300 w-full p-3 rounded-lg hover:bg-pink-400 cursor-pointer transition-all font-semibold"
        onClick={() => {
          dispatch(
            AddItem({ id: id, name: name, image: image, price: price, qty: 1 })
          );
          toast.success("Item added in cart");
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Card;
