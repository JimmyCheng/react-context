import PropTypes from "prop-types";
import React, { createContext, useReducer, useContext } from "react";
import { reducer, getInitialState } from "./reducers";

export const StateContext = createContext();

export const StateProvider = ({ children, state }) => {
  const initialState = { ...getInitialState(), ...state };
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

StateProvider.propTypes = {
  state: PropTypes.object,
  children: PropTypes.node.isRequired
};

// eslint-disable-next-line react-hooks/rules-of-hooks
export const getState = () => useContext(StateContext);
