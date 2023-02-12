import SideNav from './sideNav';
import { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/Ai';
import ProductCard from './productCard';
import Pagination from './pagination';
import axios from 'axios';

interface props{
    id:Number,
    name:String,
    discount:GLfloat,
    price:GLfloat,
    freeShiping:boolean,
    details:String,
    category:String
}
const Products = () => {
    
    const getProducts = () => {
        axios.get("http://localhost:8000/api/v1/latest-products/").then(data => console.log( data))
          .catch(err => {
              console.log(err);
              return null;
          });
          
          console.log("hiiiiiiiiiiiiiiiii")
      };
      useEffect(() => {
          getProducts()
      }, [])
      
      
      const data=[
          {
            id: 1,
            name: "Homme",
            discount: 36,
            price: 3455,
            freeShiping: true,
            details: "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi",
            category:"Homme"
          },
          {
            id: 2,
            name: "Homme",
            discount: 84,
            price: 6568,
            freeShiping: false,
            details: "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
            category:"Homme"
        },
          {
            id: 3,
            name: "Homme",
            discount: 38,
            price: 9408,
            freeShiping: false,
            details: "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
            category:"Homme"
        },
          {
            id: 4,
            name: "Homme",
            discount: 13,
            price: 3055,
            freeShiping: true,
            details: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
            category:"Homme"
        },
          {
            id: 5,
            name: "Enfant",
            discount: 91,
            price: 7134,
            freeShiping: true,
            details: "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
            category:"Enfant"
        },
          {
            id: 6,
            name: "page1",
            discount: 43,
            price: 7677,
            freeShiping: true,
            details: "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat."
          , category:"Femme"},
          {
            id: 7,
            name: "page1",
            discount: 68,
            price: 1423,
            freeShiping: false,
            details: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus."
            ,category:"Femme"
        },
          {
            id: 8,
            name: "Homme",
            discount: 11,
            price: 4566,
            freeShiping: true,
            details: "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio."
            ,category:"Homme"  
        },
          {
            id: 9,
            name: "Homme",
            discount: 54,
            price: 6639,
            freeShiping: true,
            details: "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
            ,category:"Homme"  
        },
          {
            id: 10,
            name: "page1",
            discount: 54,
            price: 8635,
            freeShiping: false,
            details: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus."
            ,category:"Homme"  
        },
          {
              id: 11,
              name: "page2",
              discount: 36,
              price: 3455,
              freeShiping: true,
              details: "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi"
                ,category:"Enfant"
            },
            {
              id: 12,
              name: "page2",
              discount: 84,
              price: 6568,
              freeShiping: false,
              details: "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat."
                ,category:"Femme"
            },
            {
              id: 13,
              name: "page2",
              discount: 38,
              price: 9408,
              freeShiping: false,
              details: "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo."
                ,category:"Femme"
            },
            {
              id: 14,
              name: "page2",
              discount: 13,
              price: 3055,
              freeShiping: true,
              details: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
                ,category:"Enfant"
            }
        ]
       const [coinsData, setCoinsData] = useState(data);
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
            : card.name.toLowerCase().includes(search)}))
            console.log(coinsData)
            console.log(search)
      }, [search])
      
     const Filter=(e:any)=>{
        setSearch(e.target.value)
        setCoinsData(null)
        setCoinsData(data.filter((card)=>{
            return search.toLowerCase() === ''
            ? card
            : card.name.toLowerCase().includes(search)}))
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
        <h1 className="text-[#E00409] text-[32px] font-semibold text-center p-2">Nos Produits</h1>
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
                    coinsData.map(card=>{
                        return <ProductCard id={card.id} name={card.name} discount={card.discount} price={card.price} freeShiping={card.freeShiping} details={card.details} ></ProductCard>
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
            {currentPosts && <div className='grid-cols-2 grid lg:grid-cols-3 w-full gap-5 gap-y-5 items-center p-2'>
                {currentPosts.map(card=>{
                    return <ProductCard id={card.id} name={card.name} discount={card.discount} price={card.price} freeShiping={card.freeShiping} details={card.details} ></ProductCard>
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