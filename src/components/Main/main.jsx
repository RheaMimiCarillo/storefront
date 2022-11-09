import Categories from "../Categories/categories";
import Products from '../Products/products';
import Hero from "./Hero/hero";

import './main.scss';

function Main(props)
{
  return (
    <main className="main">
      <Hero />
      <Categories />
      <Products/>
    </main>
  )
}

export default Main;
