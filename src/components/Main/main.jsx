import Categories from "../Categories/categories";
import Hero from "./Hero/hero";

import './main.scss';

function Main(props)
{
  return (
    <main className="main">
      <Hero />
      <Categories />
    </main>
  )
}

export default Main;
