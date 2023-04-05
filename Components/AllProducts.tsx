import SideNav from './sideNav';
import { useState, useEffect, useRef } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import ProductCard from './productCard';
import Pagination from './pagination';
import { useDispatch, useSelector } from 'react-redux';
import {SetAllProduct} from '../feature/Shoping/ShopingSlice'
import { useRouter } from 'next/router';

const Products = () => {
  const Lang=useSelector((state:any)=>state.main.Lang.ProduitsPage)
  const Search=useSelector((state:any)=>state.main.Lang.Search)
  const AllProduct=useSelector((state:any)=>state.Shop.Allproduct)
  const dispatch=useDispatch()


  const [coinsData, setCoinsData] = useState<any>(AllProduct);
  const firstUpdate = useRef(true);
      useEffect(() => {
        if (firstUpdate.current) {
          firstUpdate.current = false;
          // first render
          fetch('https://api.clairopticdz.com/api/v1/products/')
      .then((res) => res.json())
      .then((data1) => {
        dispatch(SetAllProduct(data1))
        setCoinsData(data1)
        
        console.log(coinsData)
      });
        }
        
      }, []) 
      const [currentPage, setCurrentPage] = useState(1);
      const [postsPerPage, setPostsPerPage] = useState(9);
      const lastPostIndex = currentPage * postsPerPage;
      const firstPostIndex = lastPostIndex - postsPerPage;
      const currentPosts = coinsData.slice(firstPostIndex, lastPostIndex);
      const [search,setSearch]=useState('')
      useEffect(() => {
        setCoinsData(null)
        setCoinsData(AllProduct.filter((card:any)=>{
            return cat === ''
            ? card
            : card.get_absolute_url.toString().toLowerCase().includes(cat.toLowerCase()) }).filter((card:any)=>{
            return search.toLowerCase() === ''
            ? card
            : (card.nom.toLowerCase().includes(search.toLowerCase()) || card.brand.toLowerCase().includes(search.toLowerCase()))}))
            console.log(coinsData)
            console.log(search)
      }, [search])
      
     const Filter=(e:any)=>{
        setSearch(e.target.value)
        setCoinsData(null)
        setCoinsData(AllProduct.filter((card:any)=>{
            return search.toLowerCase() === ''
            ? card
            : (card.nom.toLowerCase().includes(search.toLowerCase()) || card.brand.toLowerCase().includes(search.toLowerCase())) }))
            console.log(coinsData)
            console.log(search)
     }
     const [cat,setCat]=useState('')
     
     useEffect(() => {
      setCoinsData(null)
      setCoinsData(AllProduct.filter((card:any)=>{
          return cat === ''
          ? card
          : card.get_absolute_url.toString().toLowerCase().includes(cat.toLowerCase())}))
     }, [cat])
     
     const filterCategory=(category:any)=>{
        setCat(category)
        
            console.log(coinsData)
            console.log(cat)
     }
     const router = useRouter();
     const passedCat = router.query;
     useEffect(() => {
      if(passedCat.cat){setCat(passedCat.cat as string)}
     }, [passedCat.cat])
     
    return ( <>
     <div className=' relative bg-[#FDFDFD] p-4'>
      <h1 className="text-[#E00409] text-[32px] font-semibold text-center p-2">{Lang}</h1>
      <div className='sm:hidden'>
          <SideNav category={filterCategory} />
      </div>
          <div className="p-2">
                  <div className="h-[30px] mt-2 sm:h-[50px] bg-[#F3F4F7] text-[#00000050] w-full flex items-center rounded-3xl p-2 mb-1  sm:p-4 justify-between">
                      <input type="text" className="w-[100%] bg-transparent outline-none px-2" placeholder={Search} onChange={(e)=>{Filter(e)}}/>
                      <AiOutlineSearch className="text-[#E00409] h-[21px] w-[21px]"></AiOutlineSearch>
                  </div>
          </div> 
      <div className='sm:hidden z-[2]'>
              
          <div className='z-[2] flex flex-col w-full justify-between items-center sm:p-4 lg:p-2  xl:p-4'>
                      {currentPosts && <div className='grid-cols-2 grid lg:grid-cols-3 w-full gap-5 gap-y-5 items-center p-2'>
                  {
                  currentPosts.map((card:any)=>{
                      return <ProductCard key={Math.random()} id={card.id} nom={card.nom} promotion={card.promotion} price={card.prix} frais_livraison={card.livraison_gratuit} description={card.description} img={card.get_thumbnail} brand={card.brand} img1={card.get_image} img2={card.get_image2} img3={card.get_image3} rate={card.etoiles} ></ProductCard>
                  })
                  }
              </div>}
          <Pagination 
              totalPosts={coinsData.length}
              postsPerPage={postsPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
          />
          </div>

      </div>
      {currentPosts && <div className='hidden z-[2] sm:flex gap-4'>
          <SideNav category={filterCategory} />
              
              <div className='z-[2] flex flex-col w-full justify-between items-center sm:p-4 lg:p-2  xl:p-4'>
          {currentPosts && <div className='grid-cols-2 z-[4] grid lg:grid-cols-3 w-full gap-5 gap-y-58 items-center p-2'>
              {currentPosts.map((card:any)=>{
                  return <ProductCard key={Math.random()} id={card.id} nom={card.nom} promotion={card.promotion} price={card.prix} frais_livraison={card.livraison_gratuit} description={card.description} img={card.get_thumbnail} brand={card.brand} img1={card.get_image} img2={card.get_image2} img3={card.get_image3} rate={card.etoiles}></ProductCard>
              })}
          </div>}
         <Pagination 
           totalPosts={coinsData.length}
           postsPerPage={postsPerPage}
           setCurrentPage={setCurrentPage}
           currentPage={currentPage}
         />
      </div>

      </div>}
      {/* <div className='w-[300px] sm:w-[500px] md:w-[600px] lg:w-[700px] xl:w-[800px] absolute  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  z-[0]'>
              <img src={bg.src} alt="" className='w-full'/>
      </div> */}
  </div>
    </> );
}
 
export default Products;