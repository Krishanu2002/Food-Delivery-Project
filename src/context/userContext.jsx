import { createContext, useState } from "react";
import { food_items } from "../food";

const data = createContext();

function UserContext({ children }) {
  const [input, setInput] = useState("");
  const [foods, setFoods] = useState(food_items);
  const [showCart, setShowCart] = useState(false);

  let dataComing = { input, setInput, foods, setFoods, showCart, setShowCart };

  return (
    <div>
      <data.Provider value={dataComing}>{children}</data.Provider>
    </div>
  );
}

export default UserContext;
export { data };
