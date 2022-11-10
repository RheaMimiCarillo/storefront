const initialState = {
  categories: [
    {
      normalized: 'PIES',
      display: 'Pies',
      description: 'Every pie I can think of',
      image: '/images/pies/pies_category.jpg'
    },
    {
      normalized: 'LIES',
      display: 'Lies',
      description: 'Real eyes realize real lies',
      image: '/images/lies/lies_category.webp'
    },
    {
      normalized: 'SPIES',
      display: 'Spies',
      description: 'Like pies, but spicier',
      image: '/images/spies/spies_category.jpg'
    },
  ],
  products: [
    {
      category: 'PIES',
      name: 'Chicken Pot Pie',
      description: 'Filled with potassium',
      price: 50,
      inventory_count: 1,
      image: '/images/pies/chicken_pot_pie.jpg'
    },
    {
      category: 'LIES',
      name: 'Little White (lie)',
      description: 'Never hurt anyone',
      price: 0,
      inventory_count: 9999,
      image: '/images/lies/little_white_lie.jpg'
    },
    {
      category: 'SPIES',
      name: 'James Bond',
      description: 'License to Kill',
      price: 10000,
      inventory_count: 5,
      image: '/images/spies/james_bond.jpg'
    },
    {
      category: 'SPIES',
      name: 'Austin Powers',
      description: 'Yeah, Baby!',
      price: 1000000,
      inventory_count: 1,
      image: '/images/spies/austin_powers.jpg'
    }
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
        ...state,
        // // map state to return initial state of categories
        // categories: state.categories.map((category) =>
        // {
        //   // might do something in here later
        //   return category
        // }),
        activeCategory: state.categories.find((category) => category.normalized === action.payload)
      };
    default:
      return state;
  };
};

export default categoryReducer;
