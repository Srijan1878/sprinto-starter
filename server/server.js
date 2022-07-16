const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require('./schemas/typeDefs.js');
const { resolvers } = require('./schemas/resolvers.js');
require('dotenv').config();

const app = express()

//database connection
require('./config/database.js')

let apolloServer

async function startServer() {
    apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
}
startServer();


app.listen(5500, () => {
    console.log('Server is running on port 5500')
})