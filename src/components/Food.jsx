import { useState } from 'react';

export default function Food({ food, handleEditItem, handleDeleteItem }) {
  const [editItem, setEditItem] = useState(false);

  let foodDetail 
  if (editItem) {
    foodDetail = (
      <>
        <input type='text' value={food.text} onChange={(e) => { handleEditItem({ ...food, text: e.target.value }) }} />
        <button type='button' aria-label={`${food.text}-save`} onClick={() => setEditItem(false)}>
          Save
        </button>
      </>
    )
  } else {
    foodDetail = (
      <>
        <p>{food.text}</p>
        <button name='edit' aria-label={`${food.text}-edit`} type='button' onClick={() => setEditItem(true)}>
          Edit
        </button>
      </>
    )
  }


  return (
    <div>
      {foodDetail}
      <button type='text' aria-label={`${food.text}-delete`} onClick={() => handleDeleteItem(food.id)}>
        Delete
      </button>
    </div>
  );
}