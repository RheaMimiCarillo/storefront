const initialState = {
  categories: [
    'pies',
    'lies',
    'spies',
  ],
  activeCategory: 'pies'
};

// CATEGORY action
export const chooseCategory = (payload) =>
{
  return {
    type: 'CATEGORY',
    payload: payload, // 'pies', 'lies', 'spies'
  };
};

const categoryReducer = (state = initialState, action) => 
{
  switch(action.type){
    case 'CATEGORY':
      return {
        // map state to return initial state of categories
        categories: state.categories.map((category) =>
        {
          // might do something in here later
          return category
        }),
        activeCategory: action.payload,
      };
    default:
      return state;
  };
};

export default categoryReducer;
