import * as actions from '../actions';

const initialState = {
  success: false
}
export default (state = initialState, action) => {

  switch(action.type) {

    case(actions.CORRECT_GUESS):
      return {
        ...state,
        success: true
      }

    default:
    return state;
  }

}