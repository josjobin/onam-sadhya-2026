"use server";

import { pool } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function markOrderPaid(orderId: number) {
  try {
    await pool.execute(
      "UPDATE orders SET payment_status = 'paid' WHERE id = ?",
      [orderId]
    );
    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.error("Error marking order as paid:", error);
    return { success: false, error: "Failed to update payment status." };
  }
}
