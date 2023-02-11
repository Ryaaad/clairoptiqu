import UperProductPage from '../../Components/UperProductPage';
import Footer from '../../Components/footer';
import Navbar from '../../Components/Navbar';
import Search from '../../Components/search';
import SwiperProduct from '../../Components/swiperProduct';
import { useRouter } from 'next/router';


const Product = () => {
    const router = useRouter();
const data = router.query;
console.log(data);
    return (  
              <div className='overflow-hidden w-full'>
                <Navbar Home={false}></Navbar>
                <h1 className="text-[#E00409] text-[32px] font-semibold text-center p-4">Nos Produits</h1>
                <UperProductPage  id={data.id} name={data.name} discount={+data.discount} price={+data.price} freeShiping={+data.freeShiping} details={data.details}></UperProductPage>
                <SwiperProduct id={data}></SwiperProduct>
                <Footer></Footer>
              </div>
    );
}
 
export default Product;