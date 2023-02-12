import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import ShopedItems from '../../ShopedItems';
const initialState = {
  ShopedItems:[ {
    id: -1,
    nom: '',
    prix: 0,
    img: '',
    promotion:0,
    frais_livraison: 0,
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
               state.Total+=element.prix*element.Qte
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
       AddItem:(state, action: PayloadAction<{ id:number;nom: string; prix: number; img: string; promotion:number; frais_livraison: number; Qte: number; }>)=>{ 
        let index=state.ShopedItems.length-1
        let exist=false
        while (index>=0 && !exist) {
          console.log('id:',action.payload.id);
          
          state.ShopedItems[index].id==action.payload.id ? exist=true : index-- ;
         
          
        }
        exist ?  state.ShopedItems[index].Qte=state.ShopedItems[index].Qte+action.payload.Qte
        :   state.ShopedItems.push({...action.payload}) 
          
               },  
    }
});


export const {MinusQte,AddQte,Delete,AddItem}= ShopSlice.actions
export default ShopSlice.reducer;