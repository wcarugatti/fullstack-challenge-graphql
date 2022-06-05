export interface ISubscription {
  id: string;
  customerId: string;
  planId: string;
  paymentGatewayId: string;
  createdAt: Date;
  updatedAt: Date;
  endsAt: Date;
  deletedAt: Date;
}
