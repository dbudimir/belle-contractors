"use server";

import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string; // Changed from company to phone
  message: string;
}

interface SubmissionResult {
  success: boolean;
  message: string;
}

export async function submitContactForm(
  prevState: SubmissionResult | null,
  formData: FormData
): Promise<SubmissionResult> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string | undefined;
  const message = formData.get("message") as string;

  // Validate required fields [^2]
  if (!name || !email || !message) {
    return {
      success: false,
      message: "Missing required fields (Name, Email, Message).",
    };
  }

  // Validate email format [^2]
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, message: "Invalid email format." };
  }

  // Ensure environment variables are set
  if (
    !process.env.EMAIL_USER ||
    !process.env.EMAIL_APP_PASSWORD ||
    !process.env.EMAIL_TO
  ) {
    console.error("Email environment variables are not set.");
    return {
      success: false,
      message: "Server configuration error. Please try again later.",
    };
  }

  // Create transporter [^2]
  const transporter = nodemailer.createTransport({
    service: "gmail", // Or your email provider
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });

  // Email content, adapted from your send-email.ts [^2]
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: `Website Contact Form Submission from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #090c9b; color: white; padding: 20px; text-align: center;"> {/* Darker Blue for email header */}
          <h2 style="margin: 0;">New Contact Form Submission</h2>
        </div>
        <div style="padding: 20px;">
          <p style="margin-bottom: 10px;"><strong>Name:</strong> ${name}</p>
          <p style="margin-bottom: 10px;"><strong>Email:</strong> ${email}</p>
          <p style="margin-bottom: 20px;"><strong>Phone:</strong> ${
            phone || "No phone provided"
          }</p>
          <div style="margin-top: 20px;">
            <strong style="color: #090c9b;">Message:</strong> {/* Darker Blue for email section title */}
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

  try {
    // Send email [^2]
    await transporter.sendMail(mailOptions);
    return {
      success: true,
      message: "Thank you! Your message has been sent successfully.",
    };
  } catch (error) {
    console.error("Email sending error:", error);
    return {
      success: false,
      message:
        "Failed to send email. Please try again later or contact us directly.",
    };
  }
}
