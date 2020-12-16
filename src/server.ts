import { ApolloServer } from "apollo-server-express";
import * as Express from "express";
import "reflect-metadata";
import * as Mongoose from "mongoose";
import { context } from './context';
import { resolvers } from './resolvers';
import { buildSchema } from "type-graphql";

async function startServer() {
  require("dotenv").config(__dirname + ".env");

  const schema = await buildSchema({
    resolvers,
    emitSchemaFile: true,
    nullableByDefault: true,
  })

  const app = Express();

  Mongoose.connect(
    `mongodb://127.0.0.1:27017/organstat?readPreference=primary&gssapiServiceName=mongodb&appname=MongoDB%20Compass&ssl=false`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
    .then((res) => {
      console.log("Mongodb is connected successfully");

      const server = new ApolloServer({
        schema,
        context,
      });

      server.applyMiddleware({ app });
      const PORT = process.env.PORT || 3000;
      app.listen(PORT, () => {
        console.log(`server is running on PORT ${PORT}`);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

startServer();
