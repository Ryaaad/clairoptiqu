import React, { useState } from 'react'
import CheckoutCard from './checkoutCard';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import axios from 'axios';

interface props{
    id: number,
    nom: String,
    prix: number,
    img: String,
    promotion: number,
    frais_livraison: number,
    Qte: number
  }
  
interface article{
    nom_produit:String,
    prix:String,
    produit:number,
    quantite: number
}
const checkOut=()=> {
    const direction=useSelector((state:any)=>state.main.dir)
    const [nom,setNom]=useState("")
    const [prenom,setPrenom]=useState("")
    const [adresse,setAdresse]=useState("")
    const [tel,setTel]=useState("")
    let articles:article[]=[];
    let article:article={
                    nom_produit: "az eeeeeeee",
                    prix: "2000.00",
                    produit: 1,
                    quantite: 2
                }
    const submit=()=>{
        if(nom && prenom && adresse && tel){
            Shpoped.map((item,id)=>{
                if(item.id != -1){
                    article.nom_produit = item.nom
                   article.prix =item.prix.toString()
                   article.quantite=item.Qte
                   article.produit=item.id
                   articles.push(article)
                }
                   
            })
            console.log(articles)
            axios.post("http://localhost:8000/api/v1/checkout",
            {prenom:prenom,
            nom:nom,
            address:adresse,
            wilaya:"22",
            phone:tel,
            articles: articles,
        }).then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        }
    }
    const Translation=useSelector((state:any)=>state.main.Lang.Checkout)
    const TranslationTotal=useSelector((state:any)=>state.main.Lang.Pannier.Total)
    const Shpoped:props[]=useSelector((state:any)=>state.Shop.ShopedItems)
    const Total=useSelector((state:any)=>state.Shop.Total)
    const currency=useSelector((state:any)=>state.main.Lang.Money)
  return (
    <div className={`bg-[#FDFDFD] mb-2 `} >
    <h1 className="text-[#E00409] text-[32px] font-semibold text-center p-4">{Translation.Title}</h1>
    <div className={`flex flex-col-reverse  md:flex-row  gap-5  bg-white p-2 md:p-4 lg:p-10`}>
        <div className="flex basis-[45%] flex-col gap-4 items-center justify-center p-2">
            <h3 className="self-start font-bold text-[20px] lg:text-[30px] text-[#4D4D81] pb-3" onClick={()=>{console.log(Shpoped)}}>{Translation.Détails}</h3>
            <form action="" className="flex w-full  flex-col gap-10">
                <input className="w-full py-1 text-[#4D4D81C9] border-b-[1px] border-b-[#4D4D81] outline-none" type="text" placeholder={Translation.Nom} name ="Nom" onChange={(e)=>{setNom(e.target.value)}}/>
                <input className="w-full py-1 text-[#4D4D81C9] border-b-[1px] border-b-[#4D4D81] outline-none " type="text" placeholder={Translation.Prenom}  name="Prénom" onChange={(e)=>{setPrenom(e.target.value)}}/>
                <input className="w-full py-1 text-[#4D4D81C9] border-b-[1px] border-b-[#4D4D81] outline-none " type="text" placeholder={Translation.Adresse} name="Adresse" onChange={(e)=>{setAdresse(e.target.value)}}/>
                <input className="w-full py-1 text-[#4D4D81C9] border-b-[1px] border-b-[#4D4D81] outline-none " type="text" placeholder={Translation.Phone} name="Numéro de téléphone" onChange={(e)=>{setTel(e.target.value)}}/>
                
            </form>
            <div className="pl-2 pt-5 flex gap-4 font-semibold text-[15px] lg:text-[22px]">
                   <Link href="http://localhost:3000"> <button className="text-[#4D4D81] border-2 px-4 py-2 lg:py-3 border-[#4D4D81] outline-none rounded-md">{Translation.Return}</button></Link>
                    <button className="text-white bg-[#4D4D81] px-[3px] py-2 lg:px-3 sm:py-2 border-2 border-[#4D4D81] outline-none rounded-md" onClick={()=>submit()}>{Translation.ConfirmBTN} {Total}</button>
            </div>
        </div>
        <div className="rounded-lg flex flex-col items-center gap-5 bg-[#4D4D81] p-2 w-full sm:p-4 sm:basis-[56%]">
                <div className={`flex flex-col items-center ${Shpoped.length>4 && 'overflow-y-scroll' }  h-[500px]  gap-5 w-full`}>
                    {Shpoped.map((Shpoped)=>{
                        return Shpoped.id!=-1 && <CheckoutCard  nom={Shpoped.nom} frais_livraison={Shpoped.frais_livraison} Qte={Shpoped.Qte} id={Shpoped.id} prix={Shpoped.prix} img={Shpoped.img} promotion={Shpoped.promotion}  />
                    })}
                </div>
                <h3 className=' text-white  lg:text-[36px] font-bold self-end'>{TranslationTotal} {Total} {currency}</h3>
        </div>   
     </div>
</div>
  )
}
export default checkOut