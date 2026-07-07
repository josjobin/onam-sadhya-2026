"use server";

import { pool } from "@/lib/db";
import { ResultSetHeader } from "mysql2";

export async function submitOrder(prevState: any, formData: FormData) {
  try {
    const customerType = formData.get("customerType") as string;
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const city = formData.get("city") as string;
    const quantity = parseInt(formData.get("quantity") as string, 10);
    
    const companyName = formData.get("companyName") as string | null;
    const orgNumber = formData.get("orgNumber") as string | null;
    const vatId = formData.get("vatId") as string | null;
    
    // Validation
    if (customerType === "wholesale") {
      if (!companyName || !orgNumber || !vatId) {
        return { success: false, error: "Wholesale orders require Company Name, Org Number, and VAT ID." };
      }
      if (quantity < 10) {
        return { success: false, error: "Wholesale orders require a minimum quantity of 10 boxes." };
      }
    } else {
      if (quantity < 1) {
        return { success: false, error: "Retail orders require a minimum quantity of 1 box." };
      }
    }

    if (!firstName || !lastName || !email || !phone || !city) {
      return { success: false, error: "Missing required contact details." };
    }

    const contactName = `${firstName} ${lastName}`.trim();

    // Insert into DB
    const [result] = await pool.execute<ResultSetHeader>(
      `INSERT INTO orders (
        customer_type, contact_name, email, phone, city, quantity, 
        company_name, org_number, vat_id, payment_method, payment_status
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        customerType, contactName, email, phone, city, quantity,
        companyName || null, orgNumber || null, vatId || null, 
        "unspecified", "pending"
      ]
    );

    return { success: true, orderId: result.insertId };
  } catch (error: any) {
    console.error("Order submission error:", error);
    return { success: false, error: "An unexpected error occurred while processing your order. Please try again later." };
  }
}
