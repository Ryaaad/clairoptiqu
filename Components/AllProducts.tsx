import SideNav from './sideNav';
import { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/Ai';
import ProductCard from './productCard';
import Pagination from './pagination';
import axios from 'axios';
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
// interface props{
//     id:Number,
//     name:String,
//     discount:GLfloat,
//     price:GLfloat,
//     freeShiping:boolean,
//     details:String,
//     category:String
// }

const Products = () => {
  const Lang=useSelector((state:any)=>state.main.Lang.ProduitsPage)
  const Search=useSelector((state:any)=>state.main.Lang.Search)
  
    const getProducts = () => {
        axios.get("http://localhost:8000/api/v1/latest-products/").then(data => console.log( data))
          .catch(err => {
              console.log(err);
              return null;
          });
      };
      useEffect(() => {
          getProducts()
      }, [])
      
      
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
       const [coinsData, setCoinsData] = useState<any>(data);
      const [currentPage, setCurrentPage] = useState(1);
      const [postsPerPage, setPostsPerPage] = useState(9);
  
      
      const lastPostIndex = currentPage * postsPerPage;
      const firstPostIndex = lastPostIndex - postsPerPage;
      const currentPosts = coinsData.slice(firstPostIndex, lastPostIndex);
        
      const [search,setSearch]=useState('')
      useEffect(() => {
        setCoinsData(null)
        setCoinsData(data.filter((card)=>{
            return cat === ''
            ? card
            : card.category === cat}).filter((card)=>{
            return search.toLowerCase() === ''
            ? card
            : card.nom.toLowerCase().includes(search)}))
            console.log(coinsData)
            console.log(search)
      }, [search])
      
     const Filter=(e:any)=>{
        setSearch(e.target.value)
        setCoinsData(null)
        setCoinsData(data.filter((card)=>{
            return search.toLowerCase() === ''
            ? card
            : card.nom.toLowerCase().includes(search)}))
            console.log(coinsData)
            console.log(search)
     }
     const [cat,setCat]=useState('')
     
     useEffect(() => {
      setCoinsData(null)
      setCoinsData(data.filter((card)=>{
          return cat === ''
          ? card
          : card.category=== cat}))
     }, [cat])
     
     const filterCategory=(category:any)=>{
        setCat(category)
        
            console.log(coinsData)
            console.log(cat)
     }

    return ( <>
    <div className='mb-2 bg-[#FDFDFD] p-4'>
        <h1 className="text-[#E00409] text-[32px] font-semibold text-center p-2">{Lang}</h1>
        <div className='sm:hidden'>
            <SideNav category={filterCategory} />
        </div>
            <div className="p-2">
                    <div className="h-[30px] mt-2 sm:h-[50px] bg-[#F3F4F7] text-[#00000050] w-full flex items-center rounded-3xl p-2  sm:p-4 justify-between">
                        <input type="text" className="w-[100%] bg-transparent outline-none " placeholder="search" onChange={(e)=>{Filter(e)}}/>
                        <AiOutlineSearch className="text-[#E00409] h-[21px] w-[21px]"></AiOutlineSearch>
                    </div>
            </div> 
        <div className='sm:hidden'>
                
            <div className='flex flex-col w-full justify-between items-center sm:p-4 lg:p-2  xl:p-4'>
                        {coinsData && <div className='grid-cols-2 grid lg:grid-cols-3 w-full gap-5 gap-y-5 items-center p-2'>
                    {
                    coinsData.map((card:any)=>{
                        return <ProductCard id={card.id} name={card.nom} discount={card.promotion} price={card.prix} freeShiping={card.frais_livraison} details={card.description} ></ProductCard>
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
        <div className='hidden sm:flex gap-4'>
            <SideNav category={filterCategory} />
                
                <div className='flex flex-col w-full justify-between items-center sm:p-4 lg:p-2  xl:p-4'>
            {currentPosts && <div className='grid-cols-2 grid lg:grid-cols-3 w-full gap-5 gap-y-58 items-center p-2'>
                {currentPosts.map((card:any)=>{
                    return <ProductCard id={card.id} name={card.nom} discount={card.promotion} price={card.prix} freeShiping={card.frais_livraison} details={card.description} ></ProductCard>
                })}
            </div>}
           <Pagination 
             totalPosts={coinsData.length}
             postsPerPage={postsPerPage}
             setCurrentPage={setCurrentPage}
             currentPage={currentPage}
           />
        </div>

        </div>
    </div>
    </> );
}
 
export default Products;