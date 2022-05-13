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


})