import { useSelector } from "react-redux";
import img from "../assets/productCard1.jpg"
import Link from "next/link";

interface props{
    id:Number,
    name:String,
    discount:GLfloat,
    price:GLfloat,
    freeShiping:boolean,
    details:String
}

const ProductCard:React.FC<props> = (props) => {
    const currency=useSelector((state:any)=>state.main.Lang.Money)
    const Lang=useSelector((state:any)=>state.main.Lang.Landing.Card.Livraison)
    return ( 
    <div className="flex justify-center">
         <Link href={{
    pathname: `http://localhost:3000/Produits/${props.id}`,
    query: props, // the data
  }}>
         {/* state={props} */}
         <div className="hidden sm:block sm:w-[280px] lg:w-[270px] xl:w-[330px] rounded-bl-[20px] rounded-br-[20px] rounded-tl-[20px] rounded-tr-[20px]" style={{boxShadow: "0px 8px 8px 0px rgba(0, 0, 0, 0.25)"}}>
           <div className="w-full">
             <img src={img.src} alt=""  className="rounded-tl-[20px] rounded-tr-[20px] w-full" />
           </div>
            <div className="text bg-white p-3 py-2 rounded-bl-[20px] rounded-br-[20px]">
                <div className="flex justify-between items-center">
                    <h3 className="text-[#4D4D81] text-xl lg:text-2xl font-bold">{props.name}</h3>
                    {props.discount>0 &&<p className="bg-[#ff343748] text-[#E00409] font-semibold text-[16px] lg:text-lg rounded-lg px-2 py-[1px]">-{props.discount}%</p>}
                </div>
                <div className="liv flex py-2">
                    {!props.freeShiping && <p className="bg-[#FFAA064D] text-[#CE8902] font-semibold text-[16px] lg:text-lg rounded-lg px-3 py-[1px]">{Lang.NotFree}</p>}
                    {props.freeShiping && <p className="bg-[#0BFF064D] text-[#02CE16] font-semibold text-[16px] lg:text-lg rounded-lg px-3 py-[1px]">{Lang.Free}</p>}
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-[#4D4D81] text-xl lg:text-2xl font-bold">{props.price} {currency} </p>
                    {props.discount>0 && <p className="text-[#4D4D8199] font-semibold text-lg lg:text-xl line-through">{(props.price + (props.discount * props.price) / 100).toFixed(2) } {currency} </p>}
                </div>
            </div>
        </div>
         </Link>
        

        <div className="block sm:hidden w-[11rem] rounded-bl-[20px] rounded-br-[20px] rounded-tl-[20px] rounded-tr-[20px]" style={{boxShadow: "0px 8px 8px 0px rgba(0, 0, 0, 0.25)"}}>
           <div className="w-full">
             <img src={img.src} alt=""  className="rounded-tl-[20px] rounded-tr-[20px] w-full" />
           </div>
            <div className="text bg-white p-2 py-1 rounded-bl-[20px] rounded-br-[20px]">
                <div className="flex gap-2  justify-between items-center">
                    <h3 className="text-[#4D4D81] text-lg font-bold">{props.name}</h3>
                    {props.discount>0 &&<p className="bg-[#ff343748] text-[#E00409] font-semibold text-[13px] rounded-sm px-1">-{props.discount}%</p>}
                </div>
                <div className="liv flex py-2">
                    {!props.freeShiping && <p className="bg-[#FFAA064D] text-[#CE8902] font-semibold text-sm rounded-sm px-1">{Lang.NotFree}</p>}
                    {props.freeShiping && <p className="bg-[#0BFF064D] text-[#02CE16] font-semibold text-sm rounded-sm px-1">{Lang.Free}</p>}
                </div>
                <div className="flex gap-1 items-center">

                    <p className="text-[#4D4D81] text-sm font-bold w-full">{props.price} {currency}</p>
                    {props.discount>0 && <p className="w-full text-[#4D4D8199] font-semibold text-[12px] line-through">{(props.price + (props.discount * props.price) / 100).toFixed(2) } {currency}</p>}

                </div>
            </div>
        </div>
    </div> );
}
 
export default ProductCard;