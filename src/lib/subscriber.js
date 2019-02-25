import io from 'socket.io-client';
import util from 'util';

const REACT_APP_Q_SERVER = 'https://fl-40-q-server.herokuapp.com';

class Q {
  constructor(namespace){
    // ~~~ connect to namespace ~~~
    this.namespace = namespace;
    this.serverConnection = io.connect(`${REACT_APP_Q_SERVER}/${namespace}`);
    this.subArr = [];
  }

  subscribe(room, cb){
    console.log(`subscriber: ${room}, ${this.namespace}`);
    // ~~~ connect to room ~~~
    this.serverConnection.emit('join', room);
    
    // push room to subArr (if not already there)
    this.subArr.push(room);

    this.serverConnection.on(room, (payload)=>{
      cb(payload);
    });
  }

  subscriptions(){
    return this.subArr;
  }
}

export default Q;
