import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

interface SubmissionResult {
  success: boolean;
  message: string;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required fields (Name, Email, Message).",
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email format." },
        { status: 400 }
      );
    }

    // Ensure environment variables are set
    if (
      !process.env.EMAIL_USER ||
      !process.env.EMAIL_APP_PASSWORD ||
      !process.env.EMAIL_TO
    ) {
      console.error("Email environment variables are not set.");
      return NextResponse.json(
        {
          success: false,
          message: "Server configuration error. Please try again later.",
        },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // Or your email provider
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `Website Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #090c9b; color: white; padding: 20px; text-align: center;">
            <h2 style="margin: 0;">New Contact Form Submission</h2>
          </div>
          <div style="padding: 20px;">
            <p style="margin-bottom: 10px;"><strong>Name:</strong> ${name}</p>
            <p style="margin-bottom: 10px;"><strong>Email:</strong> ${email}</p>
            <p style="margin-bottom: 20px;"><strong>Phone:</strong> ${
              phone || "No phone provided"
            }</p>
            <div style="margin-top: 20px;">
              <strong style="color: #090c9b;">Message:</strong>
              <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; padding: 15px; border-radius: 5px; margin-top: 10px; white-space: pre-wrap;">
                ${message.replace(/\n/g, "<br>")}
              </div>
            </div>
          </div>
          <div style="background-color: #f1f5f9; color: #64748b; font-size: 12px; text-align: center; padding: 15px;">
            This email was sent from your website contact form.
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone || "No phone provided"}
        
        Message:
        ${message}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Thank you! Your message has been sent successfully.",
    });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to send email. Please try again later or contact us directly.",
      },
      { status: 500 }
    );
  }
}
