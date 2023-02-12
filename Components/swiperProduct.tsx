// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {BsArrowLeft, BsArrowRight} from "react-icons/bs"
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from './productCard';
import { useRef, useState } from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface state{
  id:Number,
  nom:string,
  promotion:number,
  prix:number,
  img:'',
  frais_livraison:number,
  description:String
}

const SwiperProduct= (props:any) => {
  const data:state[]=[
    {
      id: 1,
      img:"",
      nom: "Mateo",
      promotion: 36,
      prix: 3455,
      frais_livraison: 0,
      description: "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi"
    },
    {
      id: 2,
      img:"",
      nom: "Sanford",
      promotion: 84,
      prix: 6568,
      frais_livraison: 200,
      description: "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat."
    },
    {
      id: 3,
      img:"",
      nom: "Marlon",
      promotion: 38,
      prix: 9408,
      frais_livraison: 200,
      description: "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo."
    },
    {
      id: 4,
      img:"",
      nom: "Robinson",
      promotion: 13,
      prix: 3055,
      frais_livraison: 0,
      description: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
    },
    {
      id: 5,
      img:"",
      nom: "Scott",
      promotion: 91,
      prix: 7134,
      frais_livraison: 0,
      description: "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl."
    },
    {
      id: 6,
      img:"",
      nom: "Nobie",
      promotion: 43,
      prix: 7677,
      frais_livraison: 0,
      description: "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat."
    },
    {
      id: 7,
      img:"",
      nom: "Etan",
      promotion: 68,
      prix: 1423,
      frais_livraison: 200,
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus."
    },
    {
      id: 8,
      img:"",
      nom: "Emylee",
      promotion: 11,
      prix: 4566,
      frais_livraison: 0,
      description: "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio."
    },
    {
      id: 9,
      img:"",
      nom: "Zaria",
      promotion: 54,
      prix: 6639,
      frais_livraison: 0,
      description: "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
    },
    {
      id: 10,
      img:"",
      nom: "Raye",
      promotion: 54,
      prix: 8635,
      frais_livraison: 200,
      description: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus."
    }]
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null)
    return ( 
           <div>
            <div className='pb-2 mb-2 hidden lg:block'>
             <Swiper className='w-full py-4 pb-6'
            // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={0}
              slidesPerView={4}
              navigation={{ prevEl, nextEl }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
              loop
            >
              {
                data.map(card=>{
                 if(card.id != props.id) return  <SwiperSlide className='p-2'><ProductCard name={card.nom} discount={card.promotion} price={card.prix} freeShiping={card.frais_livraison} id={card.id} details={card.description}></ProductCard></SwiperSlide>
                })
              }
              
            </Swiper>
            <div className='flex justify-between items-center text-[#07484A]'>
                <div className='bg-[#F9D9DA] p-5 rounded-full' ref={(node) => setPrevEl(node)}><BsArrowLeft></BsArrowLeft></div>
                <div className='bg-[#E0EFF6] p-5 rounded-full' ref={(node) => setNextEl(node)}><BsArrowRight></BsArrowRight></div>
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
                 if(card.id != props.id) return  <SwiperSlide className='p-2'><ProductCard name={card.nom} discount={card.promotion} price={card.prix} freeShiping={card.frais_livraison} id={card.id} details={card.description}></ProductCard></SwiperSlide>
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
              slidesPerView={2.5}
              navigation={false}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
              loop
            >
              {
                data.map(card=>{
                 if(card.id != props.id) return  <SwiperSlide className='p-1'><ProductCard name={card.nom} discount={card.promotion} price={card.prix} freeShiping={card.frais_livraison} id={card.id} details={card.description}></ProductCard></SwiperSlide>
                })
              }
            </Swiper>
           </div>
           </div>
    );
}
 
export default SwiperProduct;