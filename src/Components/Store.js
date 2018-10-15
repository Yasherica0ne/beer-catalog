import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import RequestObject from './RequestObject';


const reducers = combineReducers({
  selectedItem: (state = null, action) => {
    if (action.type === 'CHANGE_SELECTED') {
      return action.beer;
    }

    return state;
  },
  beerItems: (state = [], action) => {
    if (action.type === 'ADD_ITEMS') {
      return action.items;
    }

    return state;
  },
  page: (state = 0, action) => {
    if(action.type === 'NEXT_PAGE') {
      return state + 1;
    }
    else if(action.type === 'PREV_PAGE') {
      if(state - 1 < 0) return state;
      return state - 1;
    }

    else return state;
  },
  requestObject: (state = new RequestObject(), action) => {
    switch(action.type) {
      case 'CHANGE_ABV_VALUE': {
        state.ABV.value = action.value;
        return state.CloneObject();
      }
      case 'CHANGE_IBU_VALUE': {
        state.IBU.value = action.value;
        return state.CLoneObject();
      }
      case 'CHANGE_EBC_VALUE': {
        state.EBC.value = action.value;
        return state.CLoneObject();
      }
      case 'CHANGE_BEER_NAME': {
        state.beerName.value = action.value;
        return state.CLoneObject();
      }
      case 'CHANGE_YEAST': {
        state.yeast.value = action.value;
        return state.CLoneObject();
      }
      case 'CHANGE_BREWED_DATE': {
        state.brewed.value = action.value;
        return state.CLoneObject();
      }
      case 'CHANGE_HOPS': {
        state.hops.value = action.value;
        return state.CLoneObject();
      }
      case 'CHANGE_MALT': {
        state.malt.value = action.value;
        return state.CLoneObject();
      }
      case 'CHANGE_FOOD': {
        state.food.value = action.value;
        return state.CLoneObject();
      }

      default: return state;
    }
  }
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

fetch('https://api.punkapi.com/v2/beers')
.then(response => response.json())
.then(data => {
  store.dispatch({ type: 'ADD_ITEMS', items: data })
})

export default store;
