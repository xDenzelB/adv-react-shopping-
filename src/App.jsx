import Header from "./components/Header";
import { FoodProvider } from './context/UserContext';
export default function App() {
return (
    <>
      <FoodProvider>
        <Header />
      </FoodProvider>
    
    </>
  );
}
