//  Requires node.js

const EventEmmitter = require('events');

class Users extends EventEmmitter{
    userLogged(data){
        this.emit('User Logged',data)
    }
}
const users = new Users();

users.once('User Logged', data => {
    console.log(data);
});

users.userLogged({ user: 'Luke Skywalker' });
users.userLogged({ user: 'Han Solo' });