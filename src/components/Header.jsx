import { useList } from '../context/UserContext';

export default function Header() {
  const { food, handleClearItem } = useList();

  function clearCart() {
    const remove = confirm('Would you like to clear your cart?')

    if (remove) handleClearItem();
  }
  return (
    <>
    <h1>My Food List!!</h1>
    <section>
        Total items: {food.length}
        <button type='button' onClick={clearCart}>
          Clear Items!
        </button>
    </section>
    </>
  )
}
