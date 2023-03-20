import { useSelector } from "react-redux";
import Link from "next/link";
import { ParsedUrlQueryInput } from "querystring";

interface props{
    id:Number,
    nom:String,
    promotion:number,
    price:GLfloat,
    frais_livraison:Boolean,
    description:String,
    img:String,
    img1:String,
    img2:String,
    img3:String,
    brand:String,
    rate:number,
}

const ProductCard:React.FC<props> = (props) => {
    const direction=useSelector((state:any)=>state.main.dir)
    const currency=useSelector((state:any)=>state.main.Lang.Money)
    const Lang=useSelector((state:any)=>state.main.Lang.Landing.Card.Livraison)
    return ( 
    <div className="flex justify-center z-10">
         <Link href={{
    pathname: `/Produits/${props.id}`,
    query: props as unknown as string | ParsedUrlQueryInput | null | undefined, // the data
  }}>
         {/* state={props} */}
         <div className="hidden sm:block sm:w-[250px] lg:w-[280px] xl:w-[310px] rounded-bl-[20px] rounded-br-[20px] rounded-tl-[20px] rounded-tr-[20px]" style={{boxShadow: "0px 8px 8px 0px rgba(0, 0, 0, 0.25)"}}>
           <div className="w-full h-[200px] ">
             <img src={props.img as string} alt="img"  className="rounded-tl-[20px] rounded-tr-[20px] w-full h-full " />
           </div>
            <div className="text bg-white p-3 py-2 rounded-bl-[20px] rounded-br-[20px]">
                <div className="flex justify-between items-center">
                    <h3 className="text-[#4D4D81] text-xl lg:text-2xl font-bold">{props.nom}</h3>
                    {props.promotion>0 && direction &&<p className={`bg-[#ff343748] flex   text-[#E00409] font-semibold text-[16px] lg:text-lg rounded-lg px-2 py-[1px]`}>- {props.promotion}%</p>}
                    {props.promotion>0 && !direction &&<p className={`bg-[#ff343748] flex   text-[#E00409] font-semibold text-[16px] lg:text-lg rounded-lg px-2 py-[1px]`}>{props.promotion}%-</p>}
                </div>
                <div className="liv flex py-2 text-transparent">
                    {!props.frais_livraison && <p className="bg-[#FFAA064D] text-[#CE8902] font-semibold text-[16px] lg:text-lg rounded-lg px-3 py-[1px]">{Lang.NotFree}</p>}
                    {props.frais_livraison && <p className="bg-[#0BFF064D] text-[#02CE16] font-semibold text-[16px] lg:text-lg rounded-lg px-3 py-[1px]">{Lang.Free}</p>}
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-[#4D4D81] text-xl lg:text-2xl font-bold">{props.price} {currency} </p>
                    {props.promotion>0 && <p className="text-[#4D4D8199] font-semibold text-lg lg:text-xl line-through">{Number((+props.price + (+props.promotion * +props.price) / 100)).toFixed(2)  } {currency} </p>}
                </div>
            </div>
        </div>
         </Link>
        

        <Link href={{
    pathname: `/Produits/${props.id}`,
    query: props as unknown as string | ParsedUrlQueryInput | null | undefined, // the data
  }}>
            <div className="block sm:hidden w-[10rem] rounded-bl-[20px] rounded-br-[20px] rounded-tl-[20px] rounded-tr-[20px]" style={{boxShadow: "0px 8px 8px 0px rgba(0, 0, 0, 0.25)"}}>
            <div className="w-full h-[30vw]">
                <img src={props.img as string } alt=""  className="h-full rounded-tl-[20px] rounded-tr-[20px] w-full object-cover" />
            </div>
                <div className="text bg-white p-2 py-1 rounded-bl-[20px] rounded-br-[20px]">
                    <div className="flex gap-2  justify-between items-center">
                        <h3 className="text-[#4D4D81] text-[16px] font-bold">{props.nom}</h3>
                        {props.promotion>0 && direction &&<p className="bg-[#ff343748] text-[#E00409] font-semibold text-[13px] rounded-sm px-1">-{props.promotion}%</p>}
                        {props.promotion>0 && !direction &&<p className="bg-[#ff343748] text-[#E00409] font-semibold text-[13px] rounded-sm px-1">{props.promotion}%-</p>}
                    </div>
                    <div className="liv flex py-2 text-transparent">
                        {!props.frais_livraison && <p className="bg-[#FFAA064D] text-[#CE8902] font-semibold text-sm rounded-sm px-1">{Lang.NotFree}</p>}
                        {props.frais_livraison && <p className="bg-[#0BFF064D] text-[#02CE16] font-semibold text-sm rounded-sm px-1">{Lang.Free}</p>}
                    </div>
                    <div className="flex  items-center">

                        <p className="text-[#4D4D81] text-sm font-bold w-full">{props.price} {currency}</p>
                        {props.promotion>0 && <p className="w-full text-[#4D4D8199] font-semibold text-[11px] line-through">{Number((+props.price + (+props.promotion * +props.price) / 100)).toFixed(2) } {currency}</p>}

                    </div>
                </div>
            </div>
        </Link>
    </div> );
}
 
export default ProductCard;