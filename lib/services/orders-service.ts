import extractResponseData from "../utils/response-util.js";
import TastytradeHttpClient from "./tastytrade-http-client.js";
import type { 
    Order, OrderResponse, OrdersResponse,
    OrderDryRun, OrderDryRunResponse,
    ComplexOrder, ComplexOrderResponse,
    ReplacementOrderDryRun, ReplacementOrderDryRunResponse,
    OrderReconfirmation, OrderReconfirmationResponse
} from "../types/orders.js";

export default class OrderService {
    constructor(private httpClient: TastytradeHttpClient) {
    }

    //Orders: Allows an API client to view, filter, create, cancel and replace orders.
    async postReconfirmOrder(accountNumber: string, orderId: number): Promise<OrderReconfirmation> {
        //Reconfirm an order
        const reconfirmOrder = await this.httpClient.postData(`/accounts/${accountNumber}/orders/${orderId}/reconfirm`, {}, {});
        return extractResponseData<OrderReconfirmationResponse>(reconfirmOrder).data.item;
    }

    async replacementOrderDryRun(accountNumber: string, orderId: number, replacementOrder: Partial<Order>): Promise<ReplacementOrderDryRun> {
        //Runs through preflights for cancel-replace and edit without routing
        const replacementOrderDryRun = await this.httpClient.postData(`/accounts/${accountNumber}/orders/${orderId}/dry-run`, replacementOrder, {});
        return extractResponseData<ReplacementOrderDryRunResponse>(replacementOrderDryRun).data.item;
    }

    async getOrder(accountNumber: string, orderId: number): Promise<Order> {
        //Returns an order based on the orderId
        const order = await this.httpClient.getData(`/accounts/${accountNumber}/orders/${orderId}`, {}, {});
        return extractResponseData<OrderResponse>(order).data.item;
    }

    async cancelOrder(accountNumber: string, orderId: number): Promise<Order> {
        //Requests order cancellation
        const order = await this.httpClient.deleteData(`/accounts/${accountNumber}/orders/${orderId}`, {});
        return extractResponseData<OrderResponse>(order).data.item;
    }

    async cancelComplexOrder(accountNumber: string, orderId: number): Promise<ComplexOrder> {
        //Requests order cancellation
        const order = await this.httpClient.deleteData(`/accounts/${accountNumber}/complex-orders/${orderId}`, {});
        return extractResponseData<ComplexOrderResponse>(order).data.item;
    }

    async replaceOrder(accountNumber: string, orderId: number, replacementOrder: Partial<Order>): Promise<Order> {
        //Replaces a live order with a new one. Subsequent fills of the original order will abort the replacement.
        const order = await this.httpClient.putData(`/accounts/${accountNumber}/orders/${orderId}`, replacementOrder, {});
        return extractResponseData<OrderResponse>(order).data.item;
    }

    async editOrder(accountNumber: string, orderId: number, order: Partial<Order>): Promise<Order> {
        //Edit price and execution properties of a live order by replacement. Subsequent fills of the original order will abort the replacement.
        const orderResponse = await this.httpClient.patchData(`/accounts/${accountNumber}/orders/${orderId}`, order, {});
        return extractResponseData<OrderResponse>(orderResponse).data.item;
    }

    async getLiveOrders(accountNumber: string): Promise<Order[]> {
        //Returns a list of live orders for the resource
        const liveOrders = await this.httpClient.getData(`/accounts/${accountNumber}/orders/live`, {}, {});
        return extractResponseData<OrdersResponse>(liveOrders).data.items;
    }

    async getOrders(accountNumber: string, queryParams = {}): Promise<Order[]> {
        //Returns a paginated list of the customer's orders (as identified by the provided authentication token) based on sort param. If no sort is passed in, it defaults to descending order.
        const orders = await this.httpClient.getData(`/accounts/${accountNumber}/orders`, {}, queryParams);
        return extractResponseData<OrdersResponse>(orders).data.items;
    }

    async createOrder(accountNumber: string, order: Partial<Order>): Promise<Order> {
        //Accepts a json document containing parameters to create an order for the client.
        const orderResponse = await this.httpClient.postData(`/accounts/${accountNumber}/orders`, order, {});
        return extractResponseData<OrderResponse>(orderResponse).data.item;
    }

    async createComplexOrder(accountNumber: string, order: Partial<ComplexOrder>): Promise<ComplexOrder> {
        //Accepts a json document containing parameters to create an order for the client.
        const orderResponse = await this.httpClient.postData(`/accounts/${accountNumber}/complex-orders`, order, {});
        return extractResponseData<ComplexOrderResponse>(orderResponse).data.item;
    }

    async postOrderDryRun(accountNumber: string, order: Partial<Order>): Promise<OrderDryRun> {
        //Accepts a json document containing parameters to create an order and then runs the prefights without placing the order.
        const orderDryRun = await this.httpClient.postData(`/accounts/${accountNumber}/orders/dry-run`, order, {});
        return extractResponseData<OrderDryRunResponse>(orderDryRun).data.item;
    }

    async getLiveOrdersForCustomer(customerId: string): Promise<Order[]> {
        //Returns a list of live orders for the resource
        const liveOrders = await this.httpClient.getData(`/customers/${customerId}/orders/live`, {}, {});
        return extractResponseData<OrdersResponse>(liveOrders).data.items;
    }

    async getCustomerOrders(customerId: string, queryParams = {}): Promise<Order[]> {
        //Returns a paginated list of the customer's orders (as identified by the provided authentication token) based on sort param. If no sort is passed in, it defaults to descending order.
        const orders = await this.httpClient.getData(`/customers/${customerId}/orders`, {}, queryParams);
        return extractResponseData<OrdersResponse>(orders).data.items;
    }
}
