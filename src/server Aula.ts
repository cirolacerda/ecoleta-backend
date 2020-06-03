import express, { request, response } from 'express';

const app = express();

app.use(express.json());

const users = [
    'Ciro',
    'Dida',
    'Lá',
    'Daniel',
    'Lara'
];

app.get('/users', (request, response) => {
    console.log('Listagem de usuários');
    const search =  String(request.query.search);

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    console.log(search);


      return response.json(filteredUsers);
});

app.get('/users/:id', (request, response)  => {
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);

});

app.post('/users',(request, response) => {
    const data = request.body;

    const user = {
        name: data.name,
        email: data.email,
    };

    response.json(user);

});

app.listen(3333);