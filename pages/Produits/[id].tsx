import UperProductPage from '../../Components/UperProductPage';
import Footer from '../../Components/footer';
import Navbar from '../../Components/Navbar';
import Search from '../../Components/search';
import SwiperProduct from '../../Components/swiperProduct';
import { useRouter } from 'next/router';
import Pannier from '../../Components/Pannier/pannier';
import { useSelector } from 'react-redux';


const Product = () => {
    const router = useRouter();
const data = router.query;
const PannierC=useSelector((state:any)=>state.main.PannierClicked)
    return (  
              <div className='overflow-hidden w-full'>
                 { PannierC &&    <div className="fixed top-0 left-0 bottom-0 right-0 w-full grid place-content-center z-10 h-[100vh] bg-[#00000045]">
            <Pannier></Pannier>
              </div>
                  }
                <Navbar Home={false}></Navbar>
                <h1 className="text-[#E00409] text-[32px] font-semibold text-center p-4">Nos Produits</h1>
           {  data &&   <UperProductPage  id={data.id ? +data.id : 0} nom={data.name as string}
        promotion={data.discount ? +data.discount : 0}
        prix={data.price ? +data.price : 0} frais_livraison={data.freeShiping ? +data.freeShiping : 0} description={data.details as string} img={''}></UperProductPage>
            }   
                <SwiperProduct id={data}></SwiperProduct>
                <Footer></Footer>
              </div>
    );
}
 
export default Product;