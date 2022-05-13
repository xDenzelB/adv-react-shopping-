import Food from "./Food";

export default function FoodList({ food, handleEditItem, handleDeleteItem }) {

  return (
    <div>
      <ul>
        {
          food.map((foods) => (
            <li key={foods.id}>
              <Food food={foods} handleDeleteItem={handleDeleteItem} handleEditItem={handleEditItem} />
            </li>
          ))
        }
      </ul>
    </div>
  )
}

