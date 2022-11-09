const initialState = {
  products: [
    {
      category: 'PIES',
      name: 'Chicken Pot Pie',
      description: 'Filled with potassium',
      price: 50,
      inventory_count: 1
    },
    {
      category: 'LIES',
      name: 'Little White (lie)',
      description: 'Never hurt anyone',
      price: 0,
      inventory_count: 9999
    },
    {
      category: 'SPIES',
      name: 'James Bond',
      description: 'License to Kill',
      price: 10000,
      inventory_count: 5
    },
    {
      category: 'SPIES',
      name: 'Austin Powers',
      description: 'Yeah, Baby!',
      price: 1000000,
      inventory_count: 1
    }
  ],
}

export const filterProduct = (payload) =>
{
  return {
    type: 'PRODUCT',
    // will update category-select from be a dropdown menu of hard-coded categories, so there will be no misspellings
    payload: payload, // 'Chicken Pot Pie', 'Little White (lie)', 'Austin Powers'
  };
};
const productReducer = (state = initialState, action) => 
{
  switch (action.type)
  {
    case 'FILTER_PRODUCTS':
      return {
        ...state,
        products: state.products.filter(product => product.category === action.payload)
      };
    // case to decrement product inventory when item is added to cart
    case 'ADD_TO_CART':
      return {
        ...state,
        
      }
    default:
      return state;
  };
};

export default productReducer;
