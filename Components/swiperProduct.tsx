// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {BsArrowLeft, BsArrowRight} from "react-icons/bs"
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from './productCard';
import { useEffect, useRef, useState } from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {  useDispatch, useSelector } from 'react-redux';
import { SetAllProduct } from '../feature/Shoping/ShopingSlice';

const SwiperProduct= (props:any) => {
  const direction=useSelector((state:any)=>state.main.dir)
  const AllProduct=useSelector((state:any)=>state.Shop.Allproduct)
  const dispatch=useDispatch()
  console.log("Redux Ryad",AllProduct);
  const [AllProducts,setAllProducts]=useState<any>(AllProduct)
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null)
    useEffect(() => {
      setPrevEl(null)
      setNextEl(null)
    }, [direction])
    const firstUpdate = useRef(true);
    useEffect(() => {
        fetch('http://localhost:8000/api/v1/products/')
    .then((res) => res.json())
    .then((data1) => {
      dispatch(SetAllProduct(data1))
      setAllProducts(data1)
      console.log(AllProduct)
      console.log(AllProducts)
    });
        // first render
        
      
    }, []) 
    return ( 
           <div>
            <div className='pb-2 mb-2 hidden lg:block'>
            {AllProducts && <Swiper className='w-full py-4 pb-6'
            dir={!direction ? "rtl" : "ltr"}
            key={direction}
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={0}
              slidesPerView={3.80}
              navigation={{ nextEl,prevEl }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
              loop
            >
              {
                AllProducts.map((card:any) =>{
                 return  <SwiperSlide className='p-4' dir={direction ? 'ltr' : "rtl"}><ProductCard id={card.id} nom={card.nom} promotion={card.promotion} price={card.prix} frais_livraison={card.frais_livraison} description={card.description} img={card.get_thumbnail} brand={card.brand} img1={card.get_image} img2={card.get_image2}></ProductCard></SwiperSlide>} 
                )
              }
              
            </Swiper>}
            <div className={`flex  ${direction && 'flex-row-reverse'} p-4 justify-between items-center text-[#07484A]`} dir={direction ? "rtl" : "ltr"}>
                  <div className='cursor-pointer bg-[#F9D9DA] p-5 rounded-full' ref={(node) => setPrevEl(node)}><BsArrowLeft></BsArrowLeft></div>
                  <div className='cursor-pointer bg-[#E0EFF6] p-5 rounded-full' ref={(node) => setNextEl(node)}><BsArrowRight></BsArrowRight></div>
              </div>
           </div>
           {/* ------------- */}
           <div className='pb-2 mb-2 hidden sm:block lg:hidden'>
             {AllProducts && <Swiper className='w-full py-4 pb-6'
            // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={0}
              slidesPerView={2.75}
              navigation={false}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
              loop
            >
             {
                AllProducts.map((card:any)=>{
                 return  <SwiperSlide className='p-2' dir={direction ? 'ltr' : "rtl"}><ProductCard id={card.id} nom={card.nom} promotion={card.promotion} price={card.prix} frais_livraison={card.frais_livraison} description={card.description} img={card.get_thumbnail} brand={card.brand} img1={card.get_image} img2={card.get_image2}></ProductCard></SwiperSlide>
                })
              }
            </Swiper>}
           </div>
           {/* <-----------> */}

           <div className='pb-2 mb-2 sm:hidden block'>
             {AllProducts && <Swiper className='w-full py-4 pb-6'
            // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={0}
              slidesPerView={1.98}
              navigation={false}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
              loop
            >
              {
                AllProducts.map((card:any)=>{
                  return  <SwiperSlide className='p-1' dir={direction ? 'ltr' : "rtl"}><ProductCard id={card.id} nom={card.nom} promotion={card.promotion} price={card.prix} frais_livraison={card.frais_livraison} description={card.description} img={card.get_thumbnail} brand={card.brand} img1={card.get_image} img2={card.get_image2}></ProductCard></SwiperSlide>
                })
              }
            </Swiper>}
           </div>
           </div>
    );
}
 
export default SwiperProduct;