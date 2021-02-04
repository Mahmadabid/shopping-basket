import { createSlice } from '@reduxjs/toolkit';
import { ProductItem } from '../Global/Types';
import blueshirt from '../Components/images/blue-tshirt.png'
import redshirt from '../Components/images/red-tshirt.png'
import yellowshirt from '../Components/images/yellow-tshirt.png'

const initialState: ProductItem[] = [
  {
    id: '123',
    title: 'Blue t-shirt',
    description: 'No fancy sizing charts here, one t-shirt size to rule them all',
    imageUrl: blueshirt,
    price: 399,
    amount: 0
  },
  {
    id: '456',
    title: 'Yellow t-shirt',
    description:
      'This unique t-shirt is guaranteed to fit nobody, not even new born babies',
    imageUrl: yellowshirt,
    price: 499,
    amount: 0
  },
  {
    id: '789',
    title: 'Red t-shirt',
    description: 'The only product on our site that might actually be worth buying',
    imageUrl: redshirt,
    price: 799,
    amount: 0
  }
];

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
      add: (state, action) => {
        return state.map((item) => {
          if (item.id !== action.payload[0].id) {
            return item
          }
  
          return {
            ...item,
            amount: action.payload[1],
            added: true
          }
        })
      },
      remove: (state, action) => {
        return state.map(item => {
          if (item.id !== action.payload.id) {
            return item
          }
  
          return {
            ...item,
            added: false
          }
        })
      }
    }
  })
  
export const { add, remove } = basketSlice.actions;
export default basketSlice.reducer;