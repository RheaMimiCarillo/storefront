import Categories from "../Categories/categories";
import ActiveCategory from '../Categories/ActiveCategory/activeCategory';
import Products from '../Products/products';
import Hero from "./Hero/hero";
import PermanentDrawerRight from '../Cart/simpleCart'

import './main.scss';

function Main(props)
{
  return (
    <main className="main">
      <Hero />
      <Categories />
      <ActiveCategory/>
      <Products/>
      <PermanentDrawerRight />
    </main>
  )
}

export default Main;
