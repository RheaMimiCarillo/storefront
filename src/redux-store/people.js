import { createSlice } from '@reduxjs/toolkit'


// "the slice is going to create actions for us"
const peopleSlice = createSlice({
  name: 'people',

  // `initialState` is not banana in redux toolkit
  initialState: [
    { name: 'Rhea', age: 30 },
    { name: 'Bernie', age: 79 },
    { name: 'Santa', age: 609 }
  ],

  // 'what sort of reducer actions do you plan on running?'
  // don't have to return an action!
  // this is a single reducer where we can specify the options instead of a switch with cases
  // this can be easier, but also harder for somethings
  // for example, we can't have multiple things run from a single 'case' like in vanilla redux. we'd have to make and run another reducer
  // the reducer also has an action:
  // ex: peopleSlice.actions
  reducer: {
    // this `ACTION` looks like: `people/add`
    add(state, action)
    {
      console.log(action);
      state.push(action.payload);
    }
  }
})

// can use `createAction` to create custom actions where we can multiple reducers trigger from one action type
// instead of just letting the `reducer` above generate an action

export default peopleSlice;



/*  vanilla redux
const initialState = [
  {name: 'Rhea', age: 30},
  {name: 'Bernie', age: 79}, 
  {name: 'Santa', age: 609}
]

export const addPerson = (person) =>{
  return {
    type: 'ADD_PERSON',
    payload: person
  }
}

const peopleReducer = (state = initialState, action)=>
{
  switch(action.type)
  {
    case 'ADD_PERSON':
      return [...state, action.payload]
    default:
      return state;
  }
}

export default peopleReducer;
*/
