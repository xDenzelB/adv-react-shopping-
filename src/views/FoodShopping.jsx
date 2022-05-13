import AddFood from "../components/AddFood";
import FoodList from "../components/FoodList";
import { useList } from "../context/UserContext";

export default function FoodShopping() {
  const { food, handleDeleteItem, handleEditItem, handleAddItem } = useList();

  return (
    <div>
      <AddFood newFood={handleAddItem} />
      <FoodList food={food} onHandleDelete={handleDeleteItem} onHandleEdit={handleEditItem} />
  </div>
)
}