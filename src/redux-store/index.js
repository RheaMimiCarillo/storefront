/* index.js for 'reduxjs toolkit' */
import { configureStore } from '@reduxjs/toolkit'
import peopleSlice from './people';


// have to tell `configureStore` what the default reducer is
// NOTE: spelling is important ('reducer' vs 'reducers')
const store = configureStore({ reducer: peopleSlice.reducer });

export default store;
