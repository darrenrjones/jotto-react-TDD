import checkPropTypes from 'check-prop-types';

import rootReducer from '../src/reducers';
import { middlewares } from '../src/store';
import { createStore, applyMiddleware } from 'redux';

/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => { //val data-test attr
  return wrapper.find(`[data-test="${val}"]`);
}

export const storeFactory = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(rootReducer, initialState);
}

export const checkProps = (component, conformingProps) => {
  // checkPropTypes will return error warning instead of loggin it so we don't have to mock console.error

  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name
  );
  expect(propError).toBeUndefined();
}