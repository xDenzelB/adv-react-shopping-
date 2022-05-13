import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {

  render(
  <App />
  )
  
  it('Should add more food to the list', async () => {
    const food = await screen.findAllByRole('textbox');
    userEvent.type(food[0], 'Kalbi Ribs');

    expect(food[0]).toBeInTheDocument();
  });

  it('Should update and change the name of the food', async () => {
    const change = await screen.findByRole('button', { name: 'Edit' });
    userEvent.click(change[0]);

    const add = await screen.findAllByRole('textbox');

    userEvent.type(add[0], 'Ahi tuna poke');
    const newFood = await screen.findByText('Ahi tuna poke');
    expect(newFood).toBeInTheDocument();
  })

})