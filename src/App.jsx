import Header from "./components/Header";
import { ListOfFoodProvider } from './context/UserContext';
export default function App() {
  return (
    <>
      <ListOfFoodProvider>
        <Header />
      </ListOfFoodProvider>
    
    </>
  );
}
