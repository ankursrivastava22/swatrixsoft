// app/api/paytm/initiate/route.js
import { NextResponse } from "next/server";
import PaytmChecksum from "paytmchecksum";

export async function POST(req) {
  try {
    // 1. Parse the incoming request body (orderId, amount, etc.)
    const body = await req.json();
    const { orderId, amount, customerId } = body;

    // 2. Prepare Paytm parameters
    const paytmParams = {
      MID: process.env.NEXT_PUBLIC_PAYTM_MID,
      WEBSITE: process.env.NEXT_PUBLIC_PAYTM_WEBSITE,
      INDUSTRY_TYPE_ID: "Retail", // or your actual industry type
      CHANNEL_ID: "WEB",
      ORDER_ID: orderId,
      CUST_ID: customerId,
      TXN_AMOUNT: amount.toString(),
      CALLBACK_URL: `${process.env.NEXT_PUBLIC_BASE_URL}/api/paytm/callback`, // or your actual callback route
    };

    // 3. Generate the checksum
    const checksum = await PaytmChecksum.generateSignature(
      paytmParams,
      process.env.PAYTM_MERCHANT_KEY
    );

    paytmParams.CHECKSUMHASH = checksum;

    // 4. Return the parameters to the client
    return NextResponse.json({ paytmParams });
  } catch (error) {
    // If something fails, return a 500 response
    return NextResponse.json(
      { error: "Checksum generation failed", details: error.message },
      { status: 500 }
    );
  }
}
