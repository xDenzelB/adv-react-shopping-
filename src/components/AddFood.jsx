import { useState } from 'react';
export default function AddFood({ newFood }) {
  const [text, setText] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setText('');
    newFood(text);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder='Add More Food!'
        value={text}
        onChange={(e) => setText(e.target.value)} />
      <button aria-label={`${text}-newFood`} type='submit'>
        Add Food! 🍥
      </button>
  </form>
)
}