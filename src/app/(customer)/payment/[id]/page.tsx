import { pool } from "@/lib/db";
import { RowDataPacket } from "mysql2";
import { notFound } from "next/navigation";
import { QRCodeSVG } from "qrcode.react";

export default async function PaymentPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; // public order ID
  if (!id) notFound();

  const [rows] = await pool.execute<RowDataPacket[]>(
    "SELECT * FROM orders WHERE public_order_id = ?",
    [id]
  );

  if (rows.length === 0) notFound();

  const order = rows[0];
  const PRICE_PER_PACK = 470;
  const totalAmount = order.quantity * PRICE_PER_PACK;

  // Swish format: C1234285045;{totalAmount};{order.public_order_id};0
  const swishNumber = "1234285045"; // Real swish number
  const swishString = `C${swishNumber};${totalAmount};${order.public_order_id};0`;

  return (
    <main className="min-h-screen bg-neutral-50 flex flex-col items-center justify-center p-6 text-neutral-900">
      <div className="bg-white p-10 rounded-3xl shadow-xl shadow-neutral-200/50 max-w-md w-full flex flex-col items-center text-center relative overflow-hidden">
        {/* Decorative header */}
        <div className="absolute top-0 left-0 w-full h-2 bg-emerald-500"></div>
        
        <h1 className="text-3xl font-bold text-emerald-950 mb-2">Complete Payment</h1>
        <p className="text-neutral-500 font-medium mb-8">Order #{order.public_order_id}</p>

        <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 mb-8 w-full">
          <p className="text-xs font-bold text-emerald-800 uppercase tracking-widest mb-2">Total Amount</p>
          <p className="text-5xl font-extrabold text-emerald-950 tabular-nums">{totalAmount} <span className="text-2xl font-bold text-emerald-700">SEK</span></p>
          <p className="text-sm font-medium text-emerald-600 mt-2">for {order.quantity} pre-booked box(es) of 5.35 kg without rice</p>
        </div>

        <div className="p-4 bg-white border-2 border-neutral-100 rounded-2xl shadow-sm mb-6 inline-block">
          <QRCodeSVG value={swishString} size={220} level="H" includeMargin />
        </div>

        <div className="w-full bg-amber-50 p-5 rounded-xl border border-amber-200 flex items-start space-x-3 text-left">
          <svg className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-amber-800 font-medium text-sm leading-relaxed">
            Scan with your Swish app. Your Order ID is automatically embedded in the payment. 
            <strong className="block mt-2">Do not close this page until you have paid.</strong>
          </p>
        </div>
        
        {order.payment_status === 'paid' && (
          <div className="mt-6 w-full p-4 bg-emerald-100 text-emerald-800 font-bold rounded-xl">
            Payment Confirmed!
          </div>
        )}
      </div>
    </main>
  );
}
