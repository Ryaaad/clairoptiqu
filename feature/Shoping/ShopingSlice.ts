import { createSlice, PayloadAction } from '@reduxjs/toolkit';

let All:any;

const initialState = {
ShopedItems:[ {
    id: -1,
    nom: '',
    prix: 0,
    img: '',
    promotion:0,
    frais_livraison: false,
    Qte: 0
}],
Allproduct:[
    {
      id: 1,
      nom: "Homme",
      promotion: 36,
      prix: 3455,
      frais_livraison: 0,
      description: "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi",
      get_absolute_url:"Homme",
      get_image: "http://127.0.0.1:8000/media/uploads/lunn_e2bnYzQ.jpg",
      get_image2: "",
      get_thumbnail: "http://127.0.0.1:8000/media/uploads/lunn_fgDyfxG.jpg",
      brand:"",
      etoiles:4
    },
    {
      id: 2,
      nom: "Homme",
      promotion: 84,
      prix: 6568,
      frais_livraison: 200,
      description: "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
      get_absolute_url:"Homme",
      get_image: "http://127.0.0.1:8000/media/uploads/lunn_e2bnYzQ.jpg",
      get_image2: "",
      get_thumbnail: "http://127.0.0.1:8000/media/uploads/lunn_fgDyfxG.jpg",
      brand:"",
      etoiles:5
  }
  ],
Latest:All,
  Total:0,
};

const ShopSlice = createSlice({
    name: 'Shop',
    initialState,
    reducers: {
      SetAllProduct:(state, action: PayloadAction<any>)=>{
        state.Allproduct=action.payload
      },
      SetLatest:(state, action: PayloadAction<any>)=>{
        state.Latest=action.payload
      },
      // ShopedItems actions
      AddQte:(state, action: PayloadAction<number>)=>{  
        for (let index = 0; index < state.ShopedItems.length; index++) {
           if(state.ShopedItems[index].id==action.payload)
              { state.ShopedItems[index].Qte=state.ShopedItems[index].Qte + 1 ; index=state.ShopedItems.length}
           state.Total=0
           state.ShopedItems.forEach((element:any) => {
               state.Total+=element.prix*element.Qte
           });
        }
         }, 
      MinusQte:(state, action: PayloadAction<number>)=>{  
            for (let index = 0; index < state.ShopedItems.length; index++) {
                if(state.ShopedItems[index].id==action.payload)   { 
                    if(state.ShopedItems[index].Qte>1 )
                    state.ShopedItems[index].Qte=state.ShopedItems[index].Qte - 1
                    else 
                    state.ShopedItems=   state.ShopedItems.filter(item=> item.id!=action.payload ) ; 
                    index=state.ShopedItems.length}
                 
             }
             state.Total=0
             state.ShopedItems.forEach((element:any) => {
                 state.Total+=element.prix*element.Qte
             });
           }, 
      Delete:(state, action: PayloadAction<number>)=>{ 
        state.ShopedItems=  state.ShopedItems.filter(item=> item.id!=action.payload ) 
        state.Total=0
        state.ShopedItems.forEach((element:any) => {
        state.Total+=element.prix*element.Qte
            });
           },  
      GetTotal:(state)=>{
       if( state.ShopedItems.length>1 ) {  state.Total=0;
        state.ShopedItems.forEach((element:any) => {
        state.Total+=element.prix*element.Qte
            });}
      },
       AddItem:(state, action: PayloadAction<{ id:number;nom: string; prix: number; img: string; promotion:number; frais_livraison: boolean; Qte: number; }>)=>{ 

        let index=state.ShopedItems.length-1
        let exist=false
        while (index>=0 && !exist)  state.ShopedItems[index].id==action.payload.id ? exist=true : index-- ;
         
        exist ?  state.ShopedItems[index].Qte=state.ShopedItems[index].Qte+action.payload.Qte
        :   state.ShopedItems.push({...action.payload}) 
        // state.ShopedItems[index].Qte=state.ShopedItems[index].Qte+1 
        // state.ShopedItems[index].Qte=state.ShopedItems[index].Qte-1
        !exist && console.log(action.payload.Qte*action.payload.prix);
        
     !exist ?  state.Total=state.Total+action.payload.Qte*action.payload.prix : "";
     
      },  
      
    }
});


export const {MinusQte,AddQte,Delete,AddItem,GetTotal,SetAllProduct,SetLatest}= ShopSlice.actions
export default ShopSlice.reducer;