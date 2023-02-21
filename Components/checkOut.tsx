import React, { useEffect, useRef, useState } from 'react'
import CheckoutCard from './checkoutCard';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import {AiOutlineCheck} from 'react-icons/Ai'
import {BiError} from 'react-icons/bi'
import { useRouter } from 'next/router'
import {ChangeRouter} from '../feature/main/mainSlice'
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
    const [submited,setSubmited]=useState(false)
    const dispatch=useDispatch()
    const Translation=useSelector((state:any)=>state.main.Lang.Checkout)
    const TranslationTotal=useSelector((state:any)=>state.main.Lang.Pannier.Total)
    const Shpoped:props[]=useSelector((state:any)=>state.Shop.ShopedItems)
    const Total=useSelector((state:any)=>state.Shop.Total)
    const currency=useSelector((state:any)=>state.main.Lang.Money)
    const [wilayaa, setWilayaa] = useState<any>(1);

    const [wilayas,setWilayas] = useState([
        {
            id : 1,
            name : "Adrar ",
            tarif: 1400
        },
        {
          id : 2,
          name : "Chlef ",
          tarif: 900
        },
        {
          id : 3,
          name : "Laghouat ",
            tarif: 1050
      },
      {
        id : 4,
        name : "Oum El Bouaghi ",
          tarif: 900
      },
      {
        id : 5,
        name : "Batna ",
          tarif: 900
      },
      {
        id : 6,
        name : "Béjaïa ",
          tarif: 900
      },
      {
        id : 7,
        name : "Biskra ",
          tarif: 1050
      },
      {
        id : 8,
        name : "Béchar ",
          tarif: 1400
      },
      {
        id : 9,
        name : "Blida ",
          tarif: 750
      },
      {
        id : 10,
        name : "Bouira ",
          tarif: 750
      },
      {
        id : 11,
        name : "Tamanrasset ",
          tarif: 1600
      },
      {
        id : 12,
        name : "Tébessa ",
          tarif: 1050
      },
      {
        id : 13,
        name : "Tlemcen ",
          tarif: 900
      },
      {
        id : 14,
        name : "Tiaret ",
          tarif: 750
      },
      {
        id : 15,
        name : "Tizi Ouzou ",
          tarif: 900
      },
      {
        id : 16,
        name : "Alger ",
          tarif: 750
      },
      {
        id : 17,
        name : "Djelfa ",
          tarif: 900
      },
      {
        id : 18,
        name : "Jijel ",
          tarif: 900
      },
      {
        id : 19,
        name : "Sétif ",
          tarif: 900
      },
      {
        id : 20,
        name : "Saïda ",
          tarif: 900
      },
      {
        id : 21,
        name : "Skikda ",
          tarif: 900
      },
      {
        id : 22,
        name : "Sidi Bel Abbès ",
          tarif: 900
      },
      {
        id : 23,
        name : "Annaba ",
          tarif: 900
      },
      {
        id : 24,
        name : "Guelma ",
          tarif: 900
      },
      {
        id : 25,
        name : "Constantine ",
          tarif: 900
      },
      {
        id : 26,
        name : "Médéa ",
          tarif: 500
      },
      {
        id : 27,
        name : "Mostaganem ",
          tarif: 900
      },
      {
        id : 28,
        name : "M'Sila ",
          tarif: 750
      },
      {
        id : 29,
        name : "Mascara ",
          tarif: 900
      },
      {
        id : 30,
        name : "Ouargla ",
          tarif: 1050
      },
      {
        id : 31,
        name : "Oran ",
          tarif: 900
      },
      {
        id : 32,
        name : "El Bayadh ",
          tarif: 1050
      },
      {
        id : 33,
        name : "Illizi * ",
          tarif: 1800
      },
      {
        id : 34,
        name : "Bordj Bou Arreridj ",
          tarif: 900
      },
      {
        id : 35,
        name : "Boumerdès ",
          tarif: 900
      },
      {
        id : 36,
        name : "El Tarf ",
          tarif: 900
      },
      {
        id : 37,
        name : "Tindouf ",
          tarif: 1600
      },
      
      {
        id : 38,
        name : "Tissemsilt ",
          tarif: 750
      },
      {
        id : 39,
        name : "El Oued * ",
          tarif: 1050
      },
      {
        id : 40,
        name : "Khenchela ",
          tarif: 900
      },
      {
        id : 41,
        name : "Souk Ahras ",
          tarif: 900
      },
      {
        id : 42,
        name : "Tipaza ",
          tarif: 900
      },
      {
        id : 43,
        name : "Mila ",
          tarif: 900
      },
      {
        id : 44,
        name : "Aïn Defla ",
          tarif: 900
      },
      {
        id : 45,
        name : "Naâma ",
          tarif: 1400
      },
      {
        id : 46,
        name : "Aïn Témouchent ",
          tarif: 900
      },
      {
        id : 47,
        name : "Ghardaïa ",
          tarif: 1050
      },
      {
        id : 48,
        name : "Relizane ",
          tarif: 900
      }
      
      
      ])
      
      const handleWilayaSelect = (event:any) => {
    const w:any = wilayas.find(wilayas => wilayas.id === parseInt(event.target.value));
    setWilayaa(w.id);
  };
   const [free,setFree]=useState(true)
   const [payment,setPayment]=useState<any>(0)
    const madina = wilayas.map(wilaya =>
        <option key={wilaya.id} value={wilaya.id} >{wilaya.name}</option>)
        const firstUpdate = useRef(true);
        useEffect(()=>{
            if (firstUpdate.current) {
                firstUpdate.current = false;
            Shpoped.map((item,id)=>{
                if(item.id != -1 && (!item.frais_livraison || item.frais_livraison == 'false') ){
                    setFree(false)
                   
                }
                if(!free){
                    setPayment(wilayas[wilayaa - 1].tarif)
                    console.log(payment)
                    console.log(wilayaa)
                }
                   
            })}
        },[])
        useEffect(()=>{
            if(!free){
                setPayment(wilayas[wilayaa - 1].tarif)
                console.log(payment)
                    console.log(wilayaa)
            }
        },[wilayaa])
        let router= useRouter()       
        const [postErr,setPostErr]=useState(false)
        const submit=(e:any)=>{
            if(nom && prenom && adresse && tel){
                e.preventDefault()
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
                axios.post("https://api.clairopticdz.com/api/v1/checkout/",
                {prenom:prenom,
                nom:nom,
                address:adresse,
                wilaya:wilayaa.toString(),
                phone:tel,
                articles: articles,
                tarif_livraison:payment,
                prix_total:Total + payment ,
            }).then(function (response) {
                setSubmited(true)
                setTimeout(()=>{ setSubmited(false)} ,1000)
                router.push('/')
                console.log(response);
              })
              .catch(function (error) {
                setSubmited(false)
                setPostErr(true)
                console.log(error);
              });
              
            }
        }
        const handleError=()=>{
            setPostErr(false)
        }
  return (
    <div className={`bg-[#FDFDFD] mb-2 relative overflow-hidden`} >
    <h1 className="text-[rgb(224,4,9)] text-[32px] font-semibold text-center p-4">{Translation.Title}</h1>
    <div className={`flex flex-col-reverse md:flex-row gap-5 bg-white p-2 md:p-4 lg:p-10`}>
        <div className="flex basis-[45%] flex-col gap-4 items-center justify-center p-2">
            <h3 className="self-start font-bold text-[20px] lg:text-[30px] text-[#4D4D81] pb-3" >{Translation.Détails}</h3>
            <form action="" className="flex w-full  flex-col gap-10">
                <input className="w-full py-1 text-[#4D4D81C9] border-b-[1px] border-b-[#4D4D81] outline-none" required type="text" placeholder={Translation.Nom} name ="Nom" onChange={(e)=>{setNom(e.target.value)}}/>
                <input className="w-full py-1 text-[#4D4D81C9] border-b-[1px] border-b-[#4D4D81] outline-none " required type="text" placeholder={Translation.Prenom}  name="Prénom" onChange={(e)=>{setPrenom(e.target.value)}}/>
                <input className="w-full py-1 text-[#4D4D81C9] border-b-[1px] border-b-[#4D4D81] outline-none " required type="text" placeholder={Translation.Adresse} name="Adresse" onChange={(e)=>{setAdresse(e.target.value)}}/>
                <select required name="ville" className='outline-none w-full py-1 text-[#4D4D81C9] border-b-[1px] border-b-[#4D4D81]' value={wilayaa? wilayaa.id : ''} placeholder='Nom' onChange={handleWilayaSelect}>
                                {
                                    madina
                                }

                            </select>
                <input className="w-full py-1 text-[#4D4D81C9] border-b-[1px] border-b-[#4D4D81] outline-none " required type="text" placeholder={Translation.Phone} name="Numéro de téléphone" onChange={(e)=>{setTel(e.target.value)}}/>
                <div className="pl-2 pt-5 flex gap-4 self-end font-semibold text-[14px] lg:text-[22px]" onClick={()=>dispatch(ChangeRouter('Home'))}>
                   <Link href="/"  > <button type="button" className="text-[#4D4D81] border-2 px-4 py-2 lg:py-3 border-[#4D4D81] outline-none rounded-md">{Translation.Return}</button></Link>
                    {free && <button className="text-white bg-[#4D4D81] px-[3px] py-2 lg:px-3 sm:py-2 border-2 border-[#4D4D81] outline-none rounded-md" onClick={(e)=>{submit(e)}}>{Translation.ConfirmBTN} {Total} {currency}</button>}
                    {!free && <button className="text-white bg-[#4D4D81] px-[3px] py-2 lg:px-3 sm:py-2 border-2 border-[#4D4D81] outline-none rounded-md" onClick={(e)=>{submit(e)}}>{Translation.ConfirmBTN} {Total+payment} {currency}</button>}
                </div>
            </form>
        </div>
        <div className="rounded-lg flex flex-col items-center gap-5 bg-[#4D4D81] p-2 w-full sm:p-4 sm:basis-[56%]">
                <div className={`flex flex-col items-center ${Shpoped.length>3 && 'overflow-y-scroll' }  h-[500px]  gap-5 w-full px-2`}>
                    {Shpoped.map((Shpoped)=>{
                        return Shpoped.id!=-1 && <CheckoutCard  nom={Shpoped.nom} frais_livraison={Shpoped.frais_livraison} Qte={Shpoped.Qte} id={Shpoped.id} prix={Shpoped.prix} img={Shpoped.img} promotion={Shpoped.promotion}  />
                    })}
                </div>
               { free && <h3 className=' text-white  lg:text-[36px] font-bold self-end'>
                {TranslationTotal} 
                {Total} {currency}</h3>}
                { !free && payment ==0 && <h3 className=' text-white  lg:text-[36px] font-bold self-end'>
                {TranslationTotal} 
               {Total}{currency}</h3>}
                { !free && payment>0 && <h3 className=' text-white  lg:text-[36px] font-bold self-end'>
                {TranslationTotal} 
               {Total} + {payment} {currency}</h3>}
        </div>   
     </div>
    { submited && 
    <div className="absolute w-[99vw] h-[200vh] bg-[#00000058] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
    <div className="absolute w-[50%] h-[200px] p-2 bg-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-md flex flex-col items-center justify-center border-[1px] border-[#818181]">
        <div className='grid relative justify-center w-[100px] h-[100px] rounded-full border-2 border-[#A5DC86]'>
        <AiOutlineCheck className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] items-center justify-center text-[60px] text-[#A5DC86]'/>
        </div>
        <h2 className='text-[30px] text-bold text-[#316d55]  pt-2'>{Translation.Valide_Cmd}</h2>
        {/* <Link href="/"><button className='p-2 outline-none font-semibold text-[#316d55] bg-[#cfffe5] rounded-md' onClick={()=>{handleError()}}>okey</button></Link> */}
        </div>
    </div>
        }
        { postErr && 
    <div className="absolute w-[99vw] h-[200vh] bg-[#00000058] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
    <div className="absolute w-[50%] h-[200px] bg-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-2 rounded-lg flex flex-col items-center justify-center border-[1px] border-[#818181]">
        <div className='grid relative justify-center w-[100px] h-[100px] rounded-full border-2 border-[#ffe6ef]'>
        <BiError className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] items-center justify-center text-[60px] text-[#ffcfe1]'/>
        </div>
        <h2 className='text-[30px] font-bold text-[#7f193B] pt-2'>{Translation.Err}</h2>
        <button className='p-2 outline-none font-semibold text-[#7f193B] bg-[#ffcfe1] rounded-md' onClick={()=>{handleError()}}>{Translation.réessayer}</button>
        </div>
    </div>
        }
</div>
  )
}
export default checkOut

