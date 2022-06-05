import { IPlan } from "../../../entities/IPlan";
import { IPlanRepository } from "../../repositoryProtocols/IPlanRepository";
import Plan from "./../models/Plan.model";

class PlanRepositoryPostgres implements IPlanRepository {
  async findAllPlans(): Promise<IPlan[]> {
    return await Plan.findAll();
  }
}

export default new PlanRepositoryPostgres();
