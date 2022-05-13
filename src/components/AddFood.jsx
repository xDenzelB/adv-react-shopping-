import { useState } from 'react';
export default function AddFood({ newFood }) {
  const [text, setText] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setText('');
    newFood(text);
  }

  return (
  
)
}