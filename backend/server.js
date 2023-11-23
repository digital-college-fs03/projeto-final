const server = require('json-server');
const app = server.create();
const router = server.router('db.json');
const middlewares = server.defaults();

app.use(middlewares);
app.use(server.bodyParser);

app.post('/api/v1/login', (request, response) => {
    const { username, password } = request.body;
    const users = router.db.get('users').value();
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        response.status(200).json({ status: 'success', data: user });
        return;
    }
    response.status(401).json({ status: 'error', message: 'Invalid credentials' });
});

app.get('/api/v1/users', (request, response) => {
    const users = router.db.get('users').value();
    response.status(200).json({ status: 'success', data: users });
})

app.use(router);
app.listen(5174, () => {
    console.log('JSON Server is running');
});
