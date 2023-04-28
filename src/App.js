import './App.css';
import './Assets/scss/style.scss'
import { CategoryFillters } from './Components/CategoryFillters';
import Products from './Components/Products';
import TopHeader from './Components/TopHeader';

function App() {
  return (
    <>
    <TopHeader/>
    <CategoryFillters/>
    <Products/>
    </>
  );
}

export default App;
