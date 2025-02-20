import TastytradeHttpClient from "./tastytrade-http-client.js";
import type { Order, OrderDryRun, ComplexOrder, ReplacementOrderDryRun, OrderReconfirmation } from "../types/orders.js";
export default class OrderService {
    private httpClient;
    constructor(httpClient: TastytradeHttpClient);
    postReconfirmOrder(accountNumber: string, orderId: number): Promise<OrderReconfirmation>;
    replacementOrderDryRun(accountNumber: string, orderId: number, replacementOrder: Partial<Order>): Promise<ReplacementOrderDryRun>;
    getOrder(accountNumber: string, orderId: number): Promise<Order>;
    cancelOrder(accountNumber: string, orderId: number): Promise<Order>;
    cancelComplexOrder(accountNumber: string, orderId: number): Promise<ComplexOrder>;
    replaceOrder(accountNumber: string, orderId: number, replacementOrder: Partial<Order>): Promise<Order>;
    editOrder(accountNumber: string, orderId: number, order: Partial<Order>): Promise<Order>;
    getLiveOrders(accountNumber: string): Promise<Order[]>;
    getOrders(accountNumber: string, queryParams?: {}): Promise<Order[]>;
    createOrder(accountNumber: string, order: Partial<Order>): Promise<Order>;
    createComplexOrder(accountNumber: string, order: Partial<ComplexOrder>): Promise<ComplexOrder>;
    postOrderDryRun(accountNumber: string, order: Partial<Order>): Promise<OrderDryRun>;
    getLiveOrdersForCustomer(customerId: string): Promise<Order[]>;
    getCustomerOrders(customerId: string, queryParams?: {}): Promise<Order[]>;
}
//# sourceMappingURL=orders-service.d.ts.map