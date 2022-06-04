import "dotenv/config";
import { app } from "./main/express/app";
import "reflect-metadata";
import { sequelize } from "./infra/postgres/helper";
import { ApolloServerHandler } from "./main/graphql/ApolloServerHandler";
import typeDefs from "./main/graphql/typeDefs";
import resolvers from "./main/graphql/resolvers";

(async () => {
  await sequelize.authenticate();
  const apolloServer = new ApolloServerHandler(app);
  const PORT = +process.env.PORT || 5000;
  await apolloServer.setupServer(typeDefs, resolvers, PORT);
})();
