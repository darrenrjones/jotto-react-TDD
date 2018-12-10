import React from 'react';
import { connect } from 'react-redux';

import { guessWord } from './actions';

export class Input extends React.Component {
  constructor(props) {
    super(props);

    this.inputBox  = React.createRef();
    this.submitGuessedWord = this.submitGuessedWord.bind(this);
  }

  submitGuessedWord(event) {
    event.preventDefault();
    const guessedWord = this.inputBox.current.value;
    if(guessWord && guessWord.length > 0) {
      this.props.guessWord(guessedWord);
    }
  }
  render() {
    const contents = this.props.success
      ? null
      : (
        <form className='form-inline'>
          <input
            data-test='input-box'
            ref={this.inputBox}
            className='mb-2 mx-sm-3'
            id='word-guess'
            type='text'
            placeholder='enter guess' />
          <button
            data-test='submit-button'
            className='btn btn-primary mb-2'
            type='submit'
            onClick={this.submitGuessedWord}
          >
            Submit
        </button>
        </form>
      )

    return (
      <div data-test='comp-input'>
        {contents}
      </div>
    )
  }
};

const mapStateToProps = ({ success }) => {
  return { success };
}
export default connect(mapStateToProps, { guessWord })(Input);
//don't need mapStateToDispatch just want to ensure guessWord is passed as prop to component















// components/Input/Input.js

// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { guessWord } from '../../actions';
 
// export class Input extends Component {
//   state = {
//     value: '',
//   };
 
//   handleChange = ({ target: { value } }) => this.setState({ value });
 
//   handleSubmit = e => {
//     e.preventDefault();
//     const { value } = this.state;
//     if (!value) return;
//     this.setState({ value: '' }, () => {
//       this.props.guessWord(value);
//     });
//   };
 
//   render = () =>
//     !this.props.success ? (
//       <form
//         onSubmit={this.handleSubmit}
//         data-test="component-input"
//         className="form-inline"
//       >
//         <input
//           data-test="input-box"
//           className="mb-2 mx-sm-3"
//           type="text"
//           placeholder="Enter Guess"
//           value={this.state.value}
//         />
//         <button
//           data-test="submit-button"
//           className="btn btn-primary mb-2"
//           type="submit"
//         >
//           Submit
//         </button>
//       </form>
//     ) : null;
// }
 
// export default connect(
//   state => ({
//     success: state.success,
//   }),
//   { guessWord },
// )(Input);
 
// Input.propTypes = {
//   success: PropTypes.bool.isRequired,
//   guessWord: PropTypes.func.isRequired,
// };


// components/Input/Input.test.js

// describe('ConnectedInput component', () => { ... } // similar tests as in the video
 
 
// /**
//  * Factory function to create a ShallowWrapper for the (unconnected) Input component
//  * @function inputSetup
//  * @param {node} Component - Component to be shallowed
//  * @param {object} props - Component props specific to this setup.
//  * @param {object} state - initial state for setup.
//  * @returns {ShallowWrapper}
//  */
// const inputSetup = (Component, props = {}, state = null) => {
//   const wrapper = shallow(<Component {...props} />);
//   if (state) wrapper.setState(state);
//   return wrapper;
// };
 
// describe('Input component', () => {
//   const initialState = { value: 'train' }; // initial component state
//   const guessWordMock = jest.fn(); // mock redux guessWord action creator
//   const defaultProps = { success: false, guessWord: guessWordMock }; // default component props
//   const fakeEvent = { preventDefault: () => null }; // intercept event function call in handleSubmit
 
//   let wrapper;
//   let componentInput;
//   let getInputBox;
//   beforeEach(() => {
//     wrapper = inputSetup(Input, defaultProps, initialState); // initialize component with defaultProps and initialState
//     componentInput = findByTestAttr(wrapper, 'component-input'); // get form element
//     getInputBox = () => findByTestAttr(wrapper, 'input-box').prop('value'); // function to get input element's prop value
//   });
 
//   it('contains the correct input value supplied by state', () => {
//     const inputBox = getInputBox(); // get current input DOM element value
//     expect(inputBox).toBe(initialState.value); // expect it to be the same state as initialState ("train")
//   });
 
//   it('calls `guessWord` with the correct input value when submit button is clicked', () => {
//     componentInput.simulate('submit', fakeEvent); // simulate a form submit
//     const guessWordMockCalls = guessWordMock.mock.calls; // get current guessWordMock calls state
//     expect(guessWordMockCalls[0][0]).toBe(initialState.value); // expect it to be called with initialState.value ("train")
//   });
 
//   it('clears input box on submit', () => {
//     componentInput.simulate('submit', fakeEvent); // simulate a form submit
//     wrapper.update(); // update wrapper state
//     const inputBox = getInputBox(); // get current input value
//     expect(inputBox).toBe(''); // expect the input to be an empty string
//   });
// });