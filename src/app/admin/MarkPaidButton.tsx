"use client";

import { useTransition } from "react";
import { markOrderPaid } from "@/app/actions/admin";

export default function MarkPaidButton({ orderId }: { orderId: number }) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      onClick={() => {
        startTransition(async () => {
          await markOrderPaid(orderId);
        });
      }}
      disabled={isPending}
      className="inline-flex items-center justify-center px-4 py-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors shadow-sm"
    >
      {isPending ? "Updating..." : "Mark Paid"}
    </button>
  );
}
