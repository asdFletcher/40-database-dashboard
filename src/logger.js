import React , { Component } from 'react';
import Q from './lib/subscriber.js';
import { connect } from 'react-redux';
import * as actions from './store/actions.js';
import util from 'util'

const mapDispatchToProps = (dispatch) => {
  return {
    destroy: (payload) => {
      return dispatch(actions.destroy(payload));
    },
    update: (payload) => {
      return dispatch(actions.update(payload));
    },
    create: (payload) => {
      return dispatch(actions.create(payload));
    },
  }
}

class Logger extends Component {

  constructor(props){
    super(props);
    this._initiateLogger();
  }

  _initiateLogger(){
    this.db = new Q(this.props.namespace);
    this.db.subscribe(this.props.room, (payload) => {
      this.props[this.props.room](payload);
    });
    console.log(`Subscriber: i am subscribed to: ${this.db.subscriptions()}`);
  }

  render = () => null;
}

export default connect(null, mapDispatchToProps)(Logger);