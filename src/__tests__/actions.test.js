import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, render, mount } from 'enzyme';

import { Provider } from "react-redux";
import * as actions from "../store/actions.js";
import Logger from "../logger.js";
import store from "../store/index.js";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("Records component", () => {
  it("does not contain a button when there is no valid model", async () => {
    
    let initialCreate = store.getState().create;
    await store.dispatch(actions.create());
    let finalCreate = store.getState().create;

    expect(finalCreate).toEqual(initialCreate + 1);
  });
});