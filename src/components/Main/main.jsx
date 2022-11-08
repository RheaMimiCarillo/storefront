import Header from "../Header/header";
import Footer from "../Footer/footer";
import Categories from "../Categories/categories";

function Main(props)
{
  return(
    <main className="main">
      <Header/>
      <Categories/>
      <Footer/>
    </main>
  )
}

export default Main;
