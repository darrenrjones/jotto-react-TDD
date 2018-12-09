// import * as actions from '../actions';

// const initialState = {
//   success: false
// }
// export default (state = initialState, action) => {

//   switch(action.type) {

//     case(actions.CORRECT_GUESS):
//       return {
//         ...state,
//         success: true
//       }

//     default:
//     return state;
//   }

// }

// import * as actions from '../actions';

import { actionTypes } from '../actions';

export default (state = false, action) => {

  switch (action.type) {

    case (actionTypes.CORRECT_GUESS):
      return true;
    default:
      return state;
  }

}