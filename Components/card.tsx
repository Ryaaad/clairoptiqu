import Link from 'next/link';
import { useSelector } from 'react-redux';
import img from '../assets/img.png'


interface props{
    id:number;
    nom:string;
    brand:string;
    price:string;
    frais_livraison:boolean;
    img1:string;
    img2:string;
    img:string;
    promotion:string;
    description:String;
}
const Card:React.FC<props> = (props) => {
    let newprice=+props.price- +props.price* +props.promotion/100 ;
    const Lang=useSelector((state:any)=>state.main.Lang.Landing.Card.Livraison)
    const dir=useSelector((state:any)=>state.main.dir)
    const currency=useSelector((state:any)=>state.main.Lang.Money)
    return ( 
        <Link href={{
            pathname: `/Produits/${props.id}`,
            query: props, // the data
          }}>
        <div style={{boxShadow: "rgba(17,17,26,0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px"}} 
        className="w-[22vw] min-w-max min-h-max rounded-[20px] bg-[rgba(255,255,246,1)] pb-2 cursor-pointer
        max-lg:w-[28vw] max-lg:h-max 
        max-sm:rounded-[15px] max-sm:w-[30vw] max-sm:pb-1 max-sm:min-w-max 
        max-[550px]:w-[35vw] max-[550px]:
        ">
            <img src={props.img} alt=""  className="h-[20vw] rounded-t-[20px] bg-cover w-full max-lg:h-[22vw] max-sm:h-[30vw] max-sm:rounded-t-[15px] " />
        <div className='px-[10px] py-2 max-[550px]:px-2 '>
        <div className="flex justify-between items-center ">
         <h1 className="text-[25px] font-bold text-[rgba(77,77,129,1)] max-xl:text-[22px] max-lg:text-[17px] max-sm:text-[14px] max-[550px]:text-[12px] ">{props.nom}</h1>
    
    <div className={`flex place-content-center rounded-[10px]  bg-[rgba(255,52,57,0.3)] p-[2px] px-2 max-lg:px-[6px] max-lg:rounded-none ${+props.promotion!=0 ? 'visible' : 'invisible' } `}>
       { dir &&  <p className='text-[18px] text-[#E00409] max-xl:text-[16px] max-lg:text-[11px] max-sm:text-[10px] max-[550px]:text-[8px] ' >-{props.promotion}%</p> }
       { !dir &&  <p className='text-[18px] text-[#E00409] max-xl:text-[16px] max-lg:text-[11px] max-sm:text-[10px] max-[550px]:text-[8px] ' >%{props.promotion}-</p>} 
            </div>
         </div>
       { props.frais_livraison &&  <div className='flex my-3 mt-2 place-content-center bg-[rgba(11,255,6,0.3)] w-[14vw] min-w-max px-2 rounded-[10px] 
       max-lg:rounded-[5px] max-sm:my-1 '>
           <p className=' text-[rgba(2,206,22,1)] font-[600] text-[18px] max-xl:text-[14px] max-lg:text-[12px] max-sm:text-[10px] max-[550px]:text-[8px]' >{Lang.Free}</p> 
         </div>}
         { !props.frais_livraison &&  <div className='flex my-3 mt-2 place-content-center bg-[rgba(255,170,6,0.3)] w-[14vw] px-2
          min-w-max rounded-[10px] max-lg:rounded-[5px] max-sm:my-1  '>
           <p className=' text-[#CE8902] font-[600] text-[18px] max-xl:text-[14px] max-lg:text-[12px] max-sm:text-[10px] max-[550px]:text-[8px]' >{Lang.NotFree}</p> 
         </div>}

         <span className='flex items-center text-[20px] gap-4 max-lg:text-[17px] max-sm:text-[14px] max-[550px]:text-[12px]  '>     <h1  className=' text-[rgba(77,77,129,1)]  font-bold  '>{props.price} {currency} </h1>      
        { +props.promotion!=0 &&  <h1  className=' text-[rgba(77,77,129,0.6)] translate-y-[10%] font-[600] line-through '>{newprice} {currency} </h1> }
         </span>
       
        </div>
        
        </div>
        </Link>
     );
}
 
export default Card;