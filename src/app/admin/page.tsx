import { pool } from "@/lib/db";
import { RowDataPacket } from "mysql2";
import AdminClientWrapper, { AdminOrder } from "./AdminClientWrapper";

export default async function AdminDashboardPage() {
  const [rows] = await pool.execute<RowDataPacket[]>(
    "SELECT * FROM orders ORDER BY created_at DESC"
  );

  // Map to plain objects to avoid passing complex Date objects to Client Components
  const orders: AdminOrder[] = rows.map(row => ({
    id: row.id,
    customer_type: row.customer_type,
    contact_name: row.contact_name,
    email: row.email,
    phone: row.phone,
    city: row.city,
    quantity: row.quantity,
    company_name: row.company_name,
    org_number: row.org_number,
    vat_id: row.vat_id,
    payment_method: row.payment_method,
    payment_status: row.payment_status,
  }));

  return (
    <main className="min-h-screen bg-gray-50 p-8 font-sans">
      <AdminClientWrapper orders={orders} />
    </main>
  );
}
