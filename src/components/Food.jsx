import { useState } from 'react';

export default function Food({ food, onHandleEdit, onHandleDelete }) {
  const [editItem, setEditItem] = useState(false);

  let foodDetail 
  if (editItem) {
    foodDetail = (
      <>
        <input type='text' value={food.text} onChange={(e) => { onHandleEdit({ ...food, text: e.target.value }) }} />
        <button type='button' onClick={() => setEditItem(false)}>
          Save
        </button>
      </>
    )
  } else {
    foodDetail = (
      <>
        <p>{food.text}</p>
        <button name='edit' type='button' onClick={() => setEditItem(true)}>
          Edit
        </button>
      </>
    )
  }


  return (
    <div>
      {foodDetail}
      <button type='text' onClick={() => onHandleDelete(food.id)}>
        Delete
      </button>
    </div>
  );
}