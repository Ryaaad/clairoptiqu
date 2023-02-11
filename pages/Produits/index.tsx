import Checkout from "../../Components/checkOut";
import Navbar from "../../Components/Navbar"
import Footer from "../../Components/footer";
import Products from '../../Components/AllProducts';

const Produits = () => {
    return ( 
        <div  className="font-['Montserrat'] bg-[#F5F5F5] ">
        <Navbar Home={false}></Navbar>
        <Products></Products>
        {/* <Checkout /> */}
        <Footer></Footer>
      </div>
      );
}
 
export default Produits;