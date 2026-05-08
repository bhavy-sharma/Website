// components/RazorpayButton.js
"use client";
import { useState } from "react";
import { Loader2, CreditCard } from "lucide-react";

export default function RazorpayButton({ program, onSuccess, onError }) {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    
    // Simulate payment for now
    setTimeout(() => {
      setLoading(false);
      onSuccess({ program });
    }, 1500);
  };

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition px-6 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 text-white"
    >
      {loading ? (
        <>
          <Loader2 className="animate-spin" size={20} />
          Processing...
        </>
      ) : (
        <>
          <CreditCard size={20} />
          Enroll Now - ₹{program.price}
        </>
      )}
    </button>
  );
}