import { createContext, useContext, useReducer } from 'react';

const initialItems = [
  { id: 0, text: 'lomi salmon' },
  { id: 1, text: 'Huli huli chicken' },
  { id: 2, text: 'Katsu moco' }
];

function foodReducer(food, action) {
  switch (action.type) {
    case 'add': {
      return [
        ...food,
        {
          id: action.id,
          text: action.text,
        }
      ];
    }
    case 'edit': {
      return food.map((foods) => {
        if (foods.id === action.task.id) {
          return action.task;
        }
        return foods;
      });
    } 
    case 'delete': {
      return food.filter((foods) => foods.id !== action.id)
    }
    case 'clear': {
      return []
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
      }
  }
}

export const useContext = createContext();

export default function ListOfFood({ children }) {
  const [food, dispatch] = useReducer(foodReducer, initialItems);

  function handleAddItem(text) {
    dispatch({
      type: 'add',
      id: Math.floor(Math.random() * 1000),
      text
    });
  };

  function handleEditItem(task) {
    dispatch({
      type: 'edit',
      task
    });
  };

  function handleDeleteItem(taskId) {
    dispatch({
      type: 'delete',
      taskId
    });
  };

  function handleClearItem() {
    dispatch({
      type: 'clear'
    })
  }
}
