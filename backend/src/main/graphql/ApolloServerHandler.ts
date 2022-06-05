import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { Express } from "express";
import http from "http";
import { DocumentNode } from "graphql";

export class ApolloServerHandler {
  constructor(private app: Express) {}

  async setupServer(typeDefs: DocumentNode[], resolvers: any[], port: number) {
    const httpServer = http.createServer(this.app);
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      csrfPrevention: true,
      plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });
    await server.start();
    server.applyMiddleware({ app: this.app });
    await new Promise<void>((resolve) =>
      httpServer.listen({ port }, resolve),
    );
    console.log(`Running on port ${port}`);
  }
}
