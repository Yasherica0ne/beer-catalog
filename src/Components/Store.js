import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import RequestObject from './RequestObject';

function CloneObject(item) {
  const clone = Object.assign({}, item);
  return clone;
}

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
  page: (state = 1, action) => {
    if (action.type === 'NEXT_PAGE') {
      return state + 1;
    }
    else if (action.type === 'PREV_PAGE') {
      return state - 1;
    }
    else if (action.type === 'RESET_PAGE_NUMBER') {
      return 1;
    }

    else return state;
  },
  requestObject: (state = new RequestObject(), action) => {
    switch (action.type) {
      case 'CHANGE_ABV_VALUE': {
        state.ABV.value = action.value;
        return CloneObject(state);
      }
      case 'CHANGE_IBU_VALUE': {
        state.IBU.value = action.value;
        return CloneObject(state);
      }
      case 'CHANGE_EBC_VALUE': {
        state.EBC.value = action.value;
        return CloneObject(state);
      }
      case 'CHANGE_ABV_OPTION': {
        state.ABV.added = action.added;
        return CloneObject(state);
      }
      case 'CHANGE_IBU_OPTION': {
        state.IBU.added = action.added;
        return CloneObject(state);
      }
      case 'CHANGE_EBC_OPTION': {
        state.EBC.added = action.added;
        return CloneObject(state);
      }
      case 'CHANGE_BREWED_OPTION': {
        state.brewed.added = action.added;
        return CloneObject(state);
      }
      case 'CHANGE_BEER_NAME': {
        state.beerName.value = action.value;
        return CloneObject(state);
      }
      case 'CHANGE_YEAST': {
        state.yeast.value = action.value;
        return CloneObject(state);
      }
      case 'CHANGE_BREWED_DATE': {
        state.brewed.value = action.value;
        return CloneObject(state);
      }
      case 'CHANGE_HOPS': {
        state.hops.value = action.value;
        return CloneObject(state);
      }
      case 'CHANGE_MALT': {
        state.malt.value = action.value;
        return CloneObject(state);
      }
      case 'CHANGE_FOOD': {
        state.food.value = action.value;
        return CloneObject(state);
      }

      default: return state;
    }
  }
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
