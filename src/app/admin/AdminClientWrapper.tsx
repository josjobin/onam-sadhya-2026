"use client";

import { useState } from "react";
import MarkPaidButton from "./MarkPaidButton";

export type AdminOrder = {
  id: number;
  customer_type: string;
  contact_name: string;
  email: string;
  phone: string;
  city: string;
  quantity: number;
  company_name: string | null;
  org_number: string | null;
  vat_id: string | null;
  payment_method: string;
  payment_status: string;
};

const CITIES = ["Gothenburg", "Halmstad", "Jönköping", "Borås", "Helsingborg", "Trollhättan"];

export default function AdminClientWrapper({ orders }: { orders: AdminOrder[] }) {
  const [filterCity, setFilterCity] = useState<string>("All");

  const filteredOrders = filterCity === "All" 
    ? orders 
    : orders.filter(o => o.city === filterCity);

  // Calculate metrics based on ALL orders, regardless of the active filter
  let totalPaidQuantity = 0;
  orders.forEach(o => {
    if (o.payment_status === 'paid') {
      totalPaidQuantity += o.quantity;
    }
  });
  const totalCBM = (totalPaidQuantity * 0.0173).toFixed(4);

  // State for per-order delivery datetime values
  const [deliveryTimes, setDeliveryTimes] = useState<Record<number, string>>({});

  // Function to send email notification via mailto link
  const handleNotify = (orderId: number) => {
    const dt = deliveryTimes[orderId];
    if (!dt) return;
    const order = filteredOrders.find(o => o.id === orderId);
    if (!order) return;
    const formatted = new Date(dt).toLocaleString();
    const subject = encodeURIComponent(`Delivery Notification for Order #${orderId}`);
    const body = encodeURIComponent(`Dear ${order.contact_name},\nYour order #${orderId} is scheduled for delivery on ${formatted}.\nThank you.`);
    window.location.href = `mailto:${order.email}?subject=${subject}&body=${body}`;
  };
  const handleExportCSV = () => {
    const headers = [
      "Order ID", "Customer Name", "Email", "Phone", "City", 
      "Quantity", "Total Amount", "Payment Status"
    ];
    
    const rows = filteredOrders.map(order => [
      order.id,
      `"${order.contact_name}"`, // Quote strings to prevent comma disruption
      `"${order.email}"`,
      `"${order.phone}"`,
      `"${order.city}"`,
      order.quantity,
      order.quantity * 850, // 850 SEK per pack
      order.payment_status
    ]);
    
    const csvContent = [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    // Add BOM for UTF-8 (Excel compatibility with Swedish chars ö, å, ä)
    const blob = new Blob(["\uFEFF" + csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `Onam_Sadhya_Orders_${filterCity}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <header className="flex flex-col md:flex-row md:justify-between md:items-end space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Admin Dashboard</h1>
          <p className="text-gray-500 mt-1">Manage Onam Sadhya orders and reconcile payments.</p>
        </div>
        <button 
          onClick={handleExportCSV}
          className="inline-flex items-center px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white text-sm font-bold rounded-xl shadow-md transition-all active:scale-95"
        >
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Export to CSV
        </button>
      </header>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Total Confirmed CBM</p>
          <p className="text-4xl font-extrabold text-emerald-600 tabular-nums">{totalCBM} <span className="text-xl font-semibold text-emerald-500">m³</span></p>
          <p className="text-xs font-medium text-gray-500 mt-2">Based on {totalPaidQuantity} paid boxes (0.0173 CBM/box)</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Total Orders</p>
          <p className="text-4xl font-extrabold text-gray-900 tabular-nums">{orders.length}</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Pending Reconciliations</p>
          <p className="text-4xl font-extrabold text-amber-500 tabular-nums">
            {orders.filter(o => o.payment_status === 'pending').length}
          </p>
        </div>
      </div>

      {/* Filter and Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        
        {/* Table Toolbar */}
        <div className="p-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <label className="text-sm font-semibold text-gray-700">Filter by City:</label>
            <select 
              value={filterCity}
              onChange={(e) => setFilterCity(e.target.value)}
              className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:ring-emerald-500 focus:border-emerald-500 outline-none"
            >
              <option value="All">All Cities</option>
              {CITIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div className="text-sm text-gray-500 font-medium">
            Showing {filteredOrders.length} order(s)
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse whitespace-nowrap">
            <thead>
              <tr className="bg-white border-b border-gray-200 text-xs font-bold text-gray-500 uppercase tracking-widest">
                <th className="px-6 py-4">Order ID</th>
                <th className="px-6 py-4">Customer Details</th>
                <th className="px-6 py-4">City</th>
                <th className="px-6 py-4 text-right">Qty</th>
                <th className="px-6 py-4 text-right">Total Amount</th>
                <th className="px-6 py-4 text-center">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredOrders.map(order => (
                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-bold text-gray-900">#{order.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <div className="font-semibold text-gray-900">{order.contact_name}</div>
                    <div className="text-xs mt-0.5">{order.email}</div>
                    <div className="text-xs">{order.phone}</div>
                    {order.customer_type === 'wholesale' && (
                      <span className="inline-flex mt-2 px-2.5 py-0.5 bg-blue-100 text-blue-800 text-xs rounded-md font-bold">
                        Wholesale: {order.company_name}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-600">{order.city}</td>
                  <td className="px-6 py-4 text-sm text-gray-900 text-right font-bold">{order.quantity}</td>
                  <td className="px-6 py-4 text-sm text-gray-900 text-right font-bold">{order.quantity * 850} SEK</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest ${
                      order.payment_status === 'paid' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {order.payment_status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                      {order.payment_status === 'pending' ? (
                        <MarkPaidButton orderId={order.id} />
                      ) : (
                        <>
                          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Reconciled</span>
                          <div className="mt-2 flex items-center space-x-2">
                            <input
                              type="datetime-local"
                              value={deliveryTimes[order.id] || ''}
                              onChange={(e) => setDeliveryTimes(prev => ({ ...prev, [order.id]: e.target.value }))}
                              className="rounded-md border border-gray-300 p-1 text-sm"
                            />
                            <button
                              onClick={() => handleNotify(order.id)}
                              className="inline-flex items-center px-3 py-1 bg-emerald-600 text-white text-xs font-semibold rounded-md hover:bg-emerald-700 transition-colors"
                            >
                              Send Notification
                            </button>
                          </div>
                        </>
                      )}
                    </td>
                </tr>
              ))}
              {filteredOrders.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-6 py-16 text-center text-gray-400 font-medium">No orders found matching the filter.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
