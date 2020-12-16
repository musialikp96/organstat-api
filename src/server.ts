import { ApolloServer } from "apollo-server-express";
import * as Express from "express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import * as Mongoose from "mongoose";
import SongModel from "./song/SongModel";
import { SongResolver } from "./song/graphql/SongResolver";

async function startServer() {
  require("dotenv").config(__dirname + ".env");

  const schema = await buildSchema({
    resolvers: [SongResolver],
    emitSchemaFile: true,
    nullableByDefault: true,
  });

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
        context: () => ({
          userModel: UserModel,
          songModel: SongModel
        }),
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
