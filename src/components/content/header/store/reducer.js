import {fromJS} from 'immutable'
import * as constants from './contants'
const defaultState=  fromJS({
  isFocus: false
})

const reducer = (state = defaultState, action ) => {
  switch (action.type) {
    case constants.CHANGE_FOCUS:
      return state.set('isFocus', !state.get("isFocus"))
    default:
      return state
  }
}

export default reducer 