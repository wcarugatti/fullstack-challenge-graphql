import { IPlan } from "../../../entities/IPlan";
import PlanRepositoryPostgres from "../../../infra/postgres/repositories/PlanRepositoryPostgres";
export default {
  Query: {
    Plans: async (): Promise<IPlan[]> => {
      return await PlanRepositoryPostgres.findAllPlans()
    },
  },
};
