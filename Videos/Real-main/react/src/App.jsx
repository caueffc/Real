import IconCarrinho from "./components/Carrinho"
import IconHamburger from "./components/IconHamburger"
import { Logo } from "./components/Logo"
import MainNav from "./components/MainNav"
import Carrinho from "./components/Carrinho"; 
import Footer from "./components/Footer"
function App() {


  return (
    <>
      <div className="navbar">
        <div className="header-inner-content">

          <IconHamburger/>
          <Logo/>

          <MainNav/>
          <Carrinho/>
          



        </div>
      </div>


      </>
      )
}

export default App
