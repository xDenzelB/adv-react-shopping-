import FoodList from "../components/FoodList";
import { useList } from "../context/UserContext";

export default function FoodShopping() {
  const { food, handleDeleteItem, handleEditItem } = useList();

  return (
    <div>
      <FoodList food={food} onDeleteItem={handleDeleteItem} onEditItem={handleEditItem} />
  </div>
)
}