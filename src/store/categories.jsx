const initialState = {
  categories: [
    {
      normalized: 'PIES',
      display: 'Pies',
      description: 'Every pie I can think of',
    },
    {
      normalized: 'LIES',
      display: 'Lies',
      description: 'Real eyes realize real lies',
    },
    {
      normalized: 'SPIES',
      display: 'Spies',
      description: 'Like pies, but spicier',
    },
  ],
  activeCategory: {
    normalized: 'PIES',
    display: 'Pies',
    description: 'Every pie I can think of',
  }
};

// CATEGORY action
export const chooseCategory = (payload) =>
{
  return {
    type: 'CATEGORY',
    // will update category-select from be a dropdown menu of hard-coded categories, so there will be no misspellings
    payload: payload.toUpperCase(), // 'pies', 'lies', 'spies'
  };
};

const categoryReducer = (state = initialState, action) => 
{
  switch (action.type)
  {
    case 'CATEGORY':
      return {
        // map state to return initial state of categories
        categories: state.categories.map((category) =>
        {
          // might do something in here later
          return category
        }),
        activeCategory: state.categories.filter((category)=> category.normalized===action.payload)
      };
    default:
      return state;
  };
};

export default categoryReducer;
