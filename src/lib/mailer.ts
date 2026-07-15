import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendOrderConfirmation(customerEmail: string, orderId: string, quantity: number) {
  const mailOptions = {
    from: `"Indian Grocery Mall" <${process.env.SMTP_USER}>`,
    to: customerEmail,
    subject: `Order Confirmation: Onam Sadhya 2026 (#${orderId})`,
    html: `
      <div style="font-family: sans-serif; max-w: 600px; margin: 0 auto;">
        <h2 style="color: #047857;">Thank you for your pre-order!</h2>
        <p>We have successfully reserved your Flavournest Onam Sadhya boxes.</p>
        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Order ID:</strong> #${orderId}</p>
          <p><strong>Quantity:</strong> ${quantity} Box(es)</p>
          <p><strong>Total Price:</strong> ${quantity * 470} SEK</p>
        </div>
        <p>Please verify with your Bank to ensure the payment is finalized. Item Delivery date will be communicated before we receive the shipment.</p>
        <p>Details will be communicated via WhatsApp Groups and email. Please contact us on +46 76 09 55 565 (Call/WA/SMS) for any questions. </p>
        <p>Best regards,<br>Indian Grocery Mall Team</p>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Confirmation email sent:', info.messageId);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
}