import Header from "./components/Header";
import FoodShopping from "./views/FoodShopping";
import { FoodProvider } from './context/UserContext';
export default function App() {
return (
    <>
      <FoodProvider>
      <Header />
      <FoodShopping />
      </FoodProvider>
    
    </>
  );
}
