import React, {useContext, useState} from 'react'
import { AppContext } from '../contexts/context';
import UseHttpRequest from '../components/use-http-request';
import _ from 'lodash'
import CustomTable from '../components/custom-table';
import type { Order, OrderLeg } from '../../lib/types/orders';

export default function Orders() {
    const context = useContext(AppContext);
    const [orderForm, setOrderForm] = useState<Partial<Order>>({
      'time-in-force': 'Day',
      'order-type': 'Limit',
      'price': 0,
      'price-effect': 'Debit',
      legs: [{
        'instrument-type': 'Equity',
        'symbol': '',
        'quantity': 1,
        'action': 'Buy to Open'
      }]
    });

    const { isLoading, errorMessage, executeRequest, responseData } = UseHttpRequest(async () => (
        context.tastytradeApi.orderService.getLiveOrders(context.accountNumbers![0])
      ), true)
    
    if (isLoading) {
      return <div>Loading...</div>
    }

    const liveOrders = responseData

    if (_.isNil(context.accountNumbers)) {
      return <p>Loading...</p>
    }

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        await context.tastytradeApi.orderService.createOrder(context.accountNumbers![0], orderForm);
        executeRequest(); // Refresh orders list
      } catch (error) {
        console.error('Failed to place order:', error);
      }
    };

    const updateLeg = (index: number, field: keyof OrderLeg, value: any) => {
      const newLegs = [...(orderForm.legs || [])];
      newLegs[index] = { ...newLegs[index], [field]: value };
      setOrderForm({ ...orderForm, legs: newLegs });
    };

    const renderOrderForm = () => (
      <form onSubmit={handleSubmit} className="mb-8 p-4 border rounded">
        <h2 className="text-xl font-bold mb-4">Place New Order</h2>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-1">Time in Force</label>
            <select 
              value={orderForm['time-in-force']} 
              onChange={e => setOrderForm({...orderForm, 'time-in-force': e.target.value as Order['time-in-force']})}
              className="w-full p-2 border rounded"
            >
              <option value="Day">Day</option>
              <option value="GTC">GTC</option>
              <option value="GTD">GTD</option>
            </select>
          </div>

          <div>
            <label className="block mb-1">Order Type</label>
            <select 
              value={orderForm['order-type']} 
              onChange={e => setOrderForm({...orderForm, 'order-type': e.target.value as Order['order-type']})}
              className="w-full p-2 border rounded"
            >
              <option value="Limit">Limit</option>
              <option value="Market">Market</option>
              <option value="Stop">Stop</option>
              <option value="Stop Limit">Stop Limit</option>
              <option value="Notional Market">Notional Market</option>
            </select>
          </div>

          {(orderForm['order-type'] === 'Limit' || orderForm['order-type'] === 'Stop Limit') && (
            <>
              <div>
                <label className="block mb-1">Price</label>
                <input 
                  type="number" 
                  value={orderForm.price} 
                  onChange={e => setOrderForm({...orderForm, price: parseFloat(e.target.value)})}
                  step="0.01"
                  className="w-full p-2 border rounded"
                />
              </div>

              <div>
                <label className="block mb-1">Price Effect</label>
                <select 
                  value={orderForm['price-effect']} 
                  onChange={e => setOrderForm({...orderForm, 'price-effect': e.target.value as 'Credit' | 'Debit'})}
                  className="w-full p-2 border rounded"
                >
                  <option value="Credit">Credit</option>
                  <option value="Debit">Debit</option>
                </select>
              </div>
            </>
          )}
        </div>

        <div className="mb-4">
          <h3 className="font-bold mb-2">Order Leg</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">Instrument Type</label>
              <select 
                value={orderForm.legs?.[0]?.['instrument-type']} 
                onChange={e => updateLeg(0, 'instrument-type', e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="Equity">Equity</option>
                <option value="Equity Option">Equity Option</option>
                <option value="Future">Future</option>
                <option value="Future Option">Future Option</option>
                <option value="Cryptocurrency">Cryptocurrency</option>
              </select>
            </div>

            <div>
              <label className="block mb-1">Symbol</label>
              <input 
                type="text" 
                value={orderForm.legs?.[0]?.symbol} 
                onChange={e => updateLeg(0, 'symbol', e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="e.g. AAPL"
              />
            </div>

            <div>
              <label className="block mb-1">Quantity</label>
              <input 
                type="number" 
                value={orderForm.legs?.[0]?.quantity} 
                onChange={e => updateLeg(0, 'quantity', parseInt(e.target.value))}
                min="1"
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="block mb-1">Action</label>
              <select 
                value={orderForm.legs?.[0]?.action} 
                onChange={e => updateLeg(0, 'action', e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="Buy to Open">Buy to Open</option>
                <option value="Buy to Close">Buy to Close</option>
                <option value="Sell to Open">Sell to Open</option>
                <option value="Sell to Close">Sell to Close</option>
              </select>
            </div>
          </div>
        </div>

        <button 
          type="submit" 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Place Order
        </button>
      </form>
    );

    const renderEmpty = () => {
      return <div>No live Orders</div>
    }

    const renderOrderRow = (order: Order) => {
      return (
        <div className="p-4 border-b">
          <div className="font-bold mb-2">
            {order['order-type']} Order - {order['time-in-force']}
            {order.price && ` - ${order.price} ${order['price-effect']}`}
          </div>
          {order.legs.map((leg, index) => (
            <div key={index} className="ml-4">
              {leg.action} {leg.quantity} {leg.symbol} ({leg['instrument-type']})
            </div>
          ))}
        </div>
      )
    }

    const renderOrders = () => {
      if (_.isEmpty(liveOrders)) {
        return renderEmpty()
      }

      return <CustomTable rows={liveOrders} renderItem={renderOrderRow}/>
    }
    
    return (
      <div className="p-4">
        <div className='text-lg font-bold mb-4'>Live Orders for {context.accountNumbers[0]}</div>
        {renderOrderForm()}
        {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Current Orders</h2>
          {renderOrders()}
        </div>
      </div>
    );
}
