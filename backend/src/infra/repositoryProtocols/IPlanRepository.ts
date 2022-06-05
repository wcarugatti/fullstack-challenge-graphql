import { IPlan } from "../../entities/IPlan";
export interface IPlanRepository {
  findAllPlans(): Promise<IPlan[]>;
}
