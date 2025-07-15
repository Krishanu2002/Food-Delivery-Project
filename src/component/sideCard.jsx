import { useDispatch } from "react-redux";
import image1 from "../assets/image1.avif";
import { MdDelete } from "react-icons/md";
import { RemoveItem, IncrementQty, DecrementQty } from "../redux/cartSlice";
import { toast } from "react-toastify";

function SideCard({ name, id, price, image, qty }) {
  let dispatch = useDispatch();

  return (
    <div className="w-[100%] h-[200px] md:h-[120px] p-2 flex justify-between shadow-lg my-8">
      <div className="w-[60%] h-full flex gap-3">
        <div className="w-[70%] h-full overflow-hidden rounded-lg">
          <img src={image} alt="" className="object-cover " />
        </div>

        <div className="w-[30%] h-full flex flex-col gap-5 ">
          <div className="text-lg text-gray-600 font-semibold whitespace-nowrap  ">
            {name}
          </div>
          <div className="w-[100px] h-[40px] bg-slate-400 flex rounded-lg overflow-hidden shadow-lg border-2 font-semibold border-pink-500 text-xl">
            <button
              className="w-[30%] h-full bg-white flex justify-center items-center text-pink-500 hover:bg-pink-300"
              onClick={() => {
                qty > 1 ? dispatch(DecrementQty(id)) : 1;
              }}
            >
              -
            </button>
            <span className="w-[40%] h-full bg-slate-300 flex justify-center items-center text-pink-500 ">
              {qty}
            </span>
            <button
              className="w-[30%] h-full bg-white flex justify-center items-center text-pink-500 hover:bg-pink-300"
              onClick={() => {
                dispatch(IncrementQty(id));
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end gap-12 ">
        <span className="text-pink-500 text-lg font-semibold">Rs {price}</span>
        <MdDelete
          className="text-red-600 text-2xl cursor-pointer"
          onClick={() => {
            dispatch(RemoveItem(id));
            toast.error("Item deleted !");
          }}
        />
      </div>
    </div>
  );
}

export default SideCard;
