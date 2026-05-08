// components/RazorpayButton.js (Simpler version without order API)
"use client";
import { useState } from "react";
import { Loader2, CreditCard } from "lucide-react";

export default function RazorpayButton({ program, onSuccess, onError }) {
  const [loading, setLoading] = useState(false);

  const handlePayment = () => {
    setLoading(true);

    const razorpayKey = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
    
    if (!razorpayKey || razorpayKey === "rzp_test_YOUR_KEY_ID_HERE") {
      alert("Payment configuration error. Please refresh and try again.");
      setLoading(false);
      return;
    }

    // ✅ SIMPLER: Create order directly in options
    var options = {
      key: razorpayKey,
      amount: program.price * 100, // Amount in paise
      currency: "INR",
      name: "Navokta Academy",
      description: program.title,
      image: "https://your-logo-url.com/logo.png",
      prefill: {
        name: "",
        email: "",
        contact: ""
      },
      theme: {
        color: "#6366f1"
      },
      modal: {
        ondismiss: function() {
          setLoading(false);
          onError && onError("Payment cancelled");
        }
      },
      handler: function(response) {
        console.log("Payment successful:", response);
        setLoading(false);
        
        const enrollmentData = {
          programId: program.id,
          programTitle: program.title,
          amount: program.price,
          paymentId: response.razorpay_payment_id,
          timestamp: new Date().toISOString(),
        };
        
        // Save enrollment
        const enrollments = JSON.parse(localStorage.getItem("enrollments") || "[]");
        enrollments.push(enrollmentData);
        localStorage.setItem("enrollments", JSON.stringify(enrollments));
        
        if (onSuccess) {
          onSuccess(enrollmentData);
        }
        
        alert(`✅ Successfully enrolled in ${program.title}!`);
      }
    };

    // Load Razorpay if not already loaded
    if (!window.Razorpay) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        var razorpay = new window.Razorpay(options);
        razorpay.open();
      };
      script.onerror = () => {
        alert("Failed to load payment gateway");
        setLoading(false);
      };
      document.body.appendChild(script);
    } else {
      var razorpay = new window.Razorpay(options);
      razorpay.open();
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition px-6 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 text-white"
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