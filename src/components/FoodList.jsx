import Food from "./Food";

export default function FoodList({ food, onHandleEdit, onHandleDelete }) {

  return (
    <div>
      <ul>
        {
          food.map((foods) => (
            <li key={foods.id}>
              <Food food={foods} onDeleteFood={onHandleDelete} onEditFood={onHandleEdit} />
            </li>
          ))
        }
      </ul>
    </div>
  )
}

