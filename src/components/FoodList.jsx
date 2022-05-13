import Food from "./Food";

export default function FoodList({ food, handleDeleteItem }) {

  return (
    <div>
      <ul>
        {
          food.map((foods) => (
            <li key={foods.id}>
              <Food food={food} handleDeleteItem={handleDeleteItem} />
            </li>
          ))
        }
      </ul>
    </div>
  )
}

