import Checkout from "../../Components/checkOut";
import Navbar from "../../Components/Navbar"
import Footer from "../../Components/footer";
import Products from '../../Components/AllProducts';
import Pannier from "../../Components/Pannier/pannier";
import { useSelector } from "react-redux";

const Produits = () => {
  const PannierC=useSelector((state:any)=>state.main.PannierClicked)
  const direction=useSelector((state:any)=>state.main.dir)
    return ( 
        <div  className="font-['Montserrat'] bg-[#F5F5F5] " dir={`${direction ? 'ltr' : 'rtl'}`}>
           { PannierC &&    <div className="fixed top-0 left-0 bottom-0 right-0 w-full grid place-content-center z-10 h-[100vh] bg-[#00000045]">
            <Pannier></Pannier>
              </div>
                  }
        <Navbar></Navbar>
        <Products></Products>
        {/* <Checkout /> */}
        <Footer></Footer>
      </div>
      );
}
 
export default Produits;