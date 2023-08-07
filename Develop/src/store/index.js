import { configureStore, combineReducers } from 'redux';
import { categoryReducer } from './reducers/categoryReducer';
import { productReducer } from './reducers/productReducer';
import { tagReducer } from './reducers/tagReducer';

// Combine multiple reducers into a single rootReducer
const rootReducer = combineReducers({
  categories: categoryReducer,
  products: productReducer,
  tags: tagReducer,
});

const store = createStore(rootReducer);

export default store;
