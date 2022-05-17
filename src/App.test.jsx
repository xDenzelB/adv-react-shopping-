import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { FoodProvider } from './context/UserContext';

describe('App', () => {

  render(
  <FoodProvider>
    <App />
  </FoodProvider>  
  )
  
  it('Should add more food to the list', async () => {
    render(
      <FoodProvider>
        <App />
      </FoodProvider>  
      )
    const food = await screen.getAllByPlaceholderText('Add More Food!');
    userEvent.type(food[0], 'Kalbi Ribs');
    const add = await screen.getByRole('button', { name: 'Kalbi Ribs-newFood' });
    userEvent.click(add);
    const newFood = await screen.findAllByText(/kalbi ribs/i)

    expect(newFood[0]).toBeInTheDocument();
  });


  it('Should update and change the name of the food', async () => {
    render(
      <FoodProvider>
        <App />
      </FoodProvider>  
      )
    const change = await screen.getByRole('button', { name: /lomi salmon-edit/i });
    userEvent.click(change);

    const add = await screen.findAllByRole('textbox');
    waitFor(async () => {
      userEvent.type(add, 'Ahi tuna poke');
      const newFood = await screen.findByText('Ahi tuna poke');
      const save = await screen.getByRole('button', { name: /Ahi tuna poke-save/i });
      userEvent.click(save);

     const updatedFood = screen.getByText(/ahi tuna poke/i);
      expect(updatedFood).toBeInTheDocument();

    });
  
  })

  it('Should delete food items', async () => {
    render(
      <FoodProvider>
        <App />
      </FoodProvider>  
      )
    
    const deleteFood = await screen.getByRole('button', { name: /lomi salmon-delete/i });
    userEvent.click(deleteFood);

    expect(screen.queryByText(/lomi salmon/i)).not.toBeInTheDocument()
  })

})