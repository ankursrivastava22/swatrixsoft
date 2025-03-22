// app/api/paytm/callback/route.js
import { NextResponse } from "next/server";
import PaytmChecksum from "paytmchecksum";

export async function POST(req) {
  try {
    // Paytm sends the data in a form-encoded manner, so we might do:
    // const formData = await req.formData();
    // Convert formData to an object, etc.
    // Or if you set the gateway to send JSON, you'd do await req.json()

    // For example (if it's form data):
    const formData = await req.formData();
    const receivedData = {};
    for (let pair of formData.entries()) {
      receivedData[pair[0]] = pair[1];
    }

    const checksum = receivedData.CHECKSUMHASH;
    delete receivedData.CHECKSUMHASH;

    // Verify the checksum
    const isValidChecksum = await PaytmChecksum.verifySignature(
      receivedData,
      process.env.PAYTM_MERCHANT_KEY,
      checksum
    );

    if (!isValidChecksum) {
      return NextResponse.json({ error: "Checksum mismatch" }, { status: 400 });
    }

    // Process the transaction details (receivedData)
    // e.g., update order status in your DB

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Callback processing failed", details: error.message },
      { status: 500 }
    );
  }
}
