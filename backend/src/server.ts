import "dotenv/config";
import { app } from "./app";
import "reflect-metadata";
import { sequelize } from "./infra/postgres/helper";

(async () => {
  await sequelize.authenticate();
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Running on port ${PORT}`));
})();
