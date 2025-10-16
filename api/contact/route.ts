// app/api/contact/route.ts
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
    }

    console.log("📩 Received contact request from:", name, email);

    // ✅ Configure transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ✅ Compose mail
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `📬 New message from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    };

    // ✅ Send email
    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully");

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error: any) {
    console.error("❌ Email send error:", error.message);
    return new Response(JSON.stringify({ error: "Something went wrong" }), { status: 500 });
  }
}
