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
import { useSelector } from 'react-redux';

interface props{
  id:Number,
  nom:String,
  promotion:number,
  prix:number,
  img:'',
  frais_livraison:number,
  description:String,
  category:String
}

const SwiperProduct= (props:any) => {
  const direction=useSelector((state:any)=>state.main.dir)
  const data=[
    {
      id: 1,
      nom: "Homme",
      promotion: 36,
      prix: 3455,
      frais_livraison: 0,
      description: "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi",
      category:"Homme"
    },
    {
      id: 2,
      nom: "Homme",
      promotion: 84,
      prix: 6568,
      frais_livraison: 200,
      description: "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
      category:"Homme"
  },
    {
      id: 3,
      nom: "Homme",
      promotion: 38,
      prix: 9408,
      frais_livraison: 200,
      description: "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
      category:"Homme"
  },
    {
      id: 4,
      nom: "Homme",
      promotion: 13,
      prix: 3055,
      frais_livraison: 0,
      description: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
      category:"Homme"
  },
    {
      id: 5,
      nom: "Enfant",
      promotion: 91,
      prix: 7134,
      frais_livraison: 0,
      description: "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      category:"Enfant"
  },
    {
      id: 6,
      nom: "page1",
      promotion: 43,
      prix: 7677,
      frais_livraison: 0,
      description: "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat."
    , category:"Femme"},
    {
      id: 7,
      nom: "page30",
      promotion: 68,
      prix: 1423,
      frais_livraison: 200,
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus."
      ,category:"Femme"
  },
    {
      id: 8,
      nom: "Homme",
      promotion: 11,
      prix: 4566,
      frais_livraison: 0,
      description: "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio."
      ,category:"Homme"  
  },
    {
      id: 9,
      nom: "Homme",
      promotion: 54,
      prix: 6639,
      frais_livraison: 0,
      description: "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
      ,category:"Homme"  
  },
    {
      id: 10,
      nom: "page1",
      promotion: 54,
      prix: 8635,
      frais_livraison: 200,
      description: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus."
      ,category:"Homme"  
  },
    {
        id: 11,
        nom: "page2",
        promotion: 36,
        prix: 3455,
        frais_livraison: 0,
        description: "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi"
          ,category:"Enfant"
      },
      {
        id: 12,
        nom: "page2",
        promotion: 84,
        prix: 6568,
        frais_livraison: 200,
        description: "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat."
          ,category:"Femme"
      },
      {
        id: 13,
        nom: "page2",
        promotion: 38,
        prix: 9408,
        frais_livraison: 200,
        description: "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo."
          ,category:"Femme"
      },
      {
        id: 14,
        nom: "page2",
        promotion: 13,
        prix: 3055,
        frais_livraison: 0,
        description: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
          ,category:"Enfant"
      }
  ]
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null)
    useEffect(() => {
      setPrevEl(null)
      setNextEl(null)
    }, [direction])
    return ( 
           <div>
            <div className='pb-2 mb-2 hidden lg:block'>
            <Swiper className='w-full py-4 pb-6'
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
                data.map(card=>{
                 if(card.id != props.id.id){return  <SwiperSlide className='p-4' dir={direction ? 'ltr' : "rtl"}><ProductCard name={card.nom} discount={card.promotion} price={card.prix} freeShiping={card.frais_livraison} id={card.id} details={card.description}></ProductCard></SwiperSlide>} 
                })
              }
              
            </Swiper>
            <div className={`flex  ${direction && 'flex-row-reverse'} p-4 justify-between items-center text-[#07484A]`} dir={direction ? "rtl" : "ltr"}>
                  <div className='cursor-pointer bg-[#F9D9DA] p-5 rounded-full' ref={(node) => setPrevEl(node)}><BsArrowLeft></BsArrowLeft></div>
                  <div className='cursor-pointer bg-[#E0EFF6] p-5 rounded-full' ref={(node) => setNextEl(node)}><BsArrowRight></BsArrowRight></div>
              </div>
           </div>
           {/* ------------- */}
           <div className='pb-2 mb-2 hidden sm:block lg:hidden'>
             <Swiper className='w-full py-4 pb-6'
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
                data.map(card=>{
                 if(card.id != props.id.id) return  <SwiperSlide className='p-2' dir={direction ? 'ltr' : "rtl"}><ProductCard name={card.nom} discount={card.promotion} price={card.prix} freeShiping={card.frais_livraison} id={card.id} details={card.description}></ProductCard></SwiperSlide>
                })
              }
            </Swiper>
           </div>
           {/* <-----------> */}

           <div className='pb-2 mb-2 sm:hidden block'>
             <Swiper className='w-full py-4 pb-6'
            // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={0}
              slidesPerView={2.15}
              navigation={false}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
              loop
            >
              {
                data.map(card=>{
                 if(card.id != props.id.id) return  <SwiperSlide className='p-1' dir={direction ? 'ltr' : "rtl"}><ProductCard name={card.nom} discount={card.promotion} price={card.prix} freeShiping={card.frais_livraison} id={card.id} details={card.description}></ProductCard></SwiperSlide>
                })
              }
            </Swiper>
           </div>
           </div>
    );
}
 
export default SwiperProduct;