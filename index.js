const { GraphQLServer } = require("graphql-yoga");

const server = new GraphQLServer({});

server.start(() => console.log("Server is Running!🚀"));