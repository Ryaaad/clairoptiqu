import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import translationAr from '../../local/Ar.json'
import translationFr from '../../local/Fr.json'
import translationEn from '../../local/En.json'
const initialState = {
  Lang:translationFr,
  Language:'FR',
  dir:true,
  PannierClicked:false,
  
};

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
      ClickerPannier:(state)=>{  
        state.PannierClicked=!state.PannierClicked
      },
      ChangeLang:(state,action: PayloadAction<String>)=>{  
        if(action.payload=='En'){
          state.Lang=translationEn
          state.Language='EN'
          state.dir=true
        }
        if(action.payload=='Ar'){
          state.Lang=translationAr
            state.Language='AR'
          state.dir=false
        }
        if(action.payload=='Fr'){
          state.Lang=translationFr
           state.Language='FR'
          state.dir=true
        }
      },
    }
});



export const {ClickerPannier,ChangeLang}= mainSlice.actions
export default mainSlice.reducer;