const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('./public'));

app.get('/', (req, res) => res.render('chat'));

const users = [];

/**
 * username
 * socketID
 */

// Tạo kết nối giữa client và server
io.on('connection', socket => {
    // console.log({  socketID: socket.id })
    const { id: socketID } = socket;
    let usernameGl = null;

    socket.on('LOGIN_REQUEST', username => {
        console.log({ username })
        let indexExist = users.findIndex(user => user.username === username);
        if (indexExist >= 0 || !username) return socket.emit('LOGIN_RESP', null);

        socket.username = username;
        usernameGl = username;
       const obj = { username, socketID };

       socket.emit('LOGIN_RESP', { users, socketID });

       users.push(obj);

       socket.broadcast.emit('NEW_USER', obj);
    });

    socket.on('SEND_MESSAGE_CSS', message => {
        const { username } = socket;
        io.emit('NEW_MESSAGE', { message, username, socketID });
    })

    socket.on('INPUTING_CSS', () => {
        // const { username } = socket;
        socket.broadcast.emit('INPUTING_SSC', usernameGl);
    });

    socket.on('STOPPED_INPUT', () => {
        console.log(`STOPPED_INPUT`)
        // const { username } = socket;
        socket.broadcast.emit('STOPPED_INPUT_SSC', null);
    });
    

    socket.on('disconnect', socket => {
        // console.log({ socket });
        const { username } = socket;
        let indexUser = users.findIndex(user => user.username === username);
        users.splice(indexUser, 1);

        io.emit('USER_LOGOUT', { socketID });
    });

});

server.listen(3000, () => console.log({ _: 'server_started_at_3000' }));
