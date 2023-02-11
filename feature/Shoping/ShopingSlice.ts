import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import ShopedItems from '../../ShopedItems';
const initialState = {
  ShopedItems:[ {
    id: -1,
    Name: 'string',
    price: 0,
    img: 'string',
    discount:0,
    livraison: false,
    Qte: 0
}],
  Total:0,
};



const ShopSlice = createSlice({
    name: 'Shop',
    initialState,
    reducers: {
      // ShopedItems actions
      AddQte:(state, action: PayloadAction<number>)=>{  
        for (let index = 0; index < state.ShopedItems.length; index++) {
           if(state.ShopedItems[index].id==action.payload)
              { state.ShopedItems[index].Qte=state.ShopedItems[index].Qte + 1 ; index=state.ShopedItems.length}
           state.Total=0
           state.ShopedItems.forEach((element:any) => {
               state.Total+=element.price*element.Qte
           });
        }
    // 
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
                 state.Total+=element.price*element.Qte
             });
           }, 
      Delete:(state, action: PayloadAction<number>)=>{ 
        state.ShopedItems=  state.ShopedItems.filter(item=> item.id!=action.payload ) 
        state.Total=0
        state.ShopedItems.forEach((element:any) => {
        state.Total+=element.price*element.Qte
            });
           },  
       AddItem:(state, action: PayloadAction<{ Name: string; price: number; img: string; discount:number; livraison: boolean; Qte: number; }>)=>{ 
        const index=state.ShopedItems.length
            state.ShopedItems.push({id: index,...action.payload})
               },  
    }
});


export const {MinusQte,AddQte,Delete}= ShopSlice.actions
export default ShopSlice.reducer;