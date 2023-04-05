import UperProductPage from '../../Components/UperProductPage';
import Footer from '../../Components/footer';
import Navbar from '../../Components/Navbar';
import SwiperProduct from '../../Components/swiperProduct';
import { useRouter } from 'next/router';
import Pannier from '../../Components/Pannier/pannier';
import { useSelector } from 'react-redux';


const Product = () => {
    const router = useRouter();
const data = router.query;
console.log(data)
const PannierC=useSelector((state:any)=>state.main.PannierClicked)
const direction=useSelector((state:any)=>state.main.dir)
const Produits=useSelector((state:any)=>state.main.Lang.ProduitsPage)
    return (  
              <div className='overflow-hidden w-full bg-[#F5F5F5]' dir={`${direction ? 'ltr' : 'rtl'}`} >
                 { PannierC &&    <div className="fixed top-0 left-0 bottom-0 right-0 w-full grid place-content-center z-10 h-[100vh] bg-[#00000045]">
            <Pannier></Pannier>
              </div>
                  }
                <Navbar></Navbar>
                <h1 className="text-[#E00409] text-[32px] font-semibold text-center p-4">{Produits}</h1>
           {  data &&   <UperProductPage  id={data.id ? +data.id : 0} nom={data.nom as string}
        promotion={data.promotion ? +data.promotion : 0}
        prix={data.price ? +data.price : 0} description={data.description as string} img={data.img as string} img1={data.img1 as string} img2={data.img2 as string} img3={data.img3 as string} rate={data.rate as any} frais_livraison={data.frais_livraison}></UperProductPage>
            }   
                <SwiperProduct id={data}></SwiperProduct>
                <Footer></Footer>
              </div>
    );
}
 
export default Product;