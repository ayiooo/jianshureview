import { fromJS } from 'immutable';
import * as constants from './constants';
// https://github.com/immutable-js/immutable-js
const defaultState = fromJS({
  isFocused: false,
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_INPUT_FOCUSED:
      return state.set('isFocused', !state.get('defaultState'));
    default:
      return state;
  }
};
