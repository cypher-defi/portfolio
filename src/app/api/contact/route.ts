import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    // Send email to your inbox
    const data = await resend.emails.send({
      from: "onboarding@resend.dev", // Use this for now (free tier default)
      to: "eibarraf@gmail.com",
      replyTo: email,
      subject: "New contact from your portfolio",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p>They're interested in connecting with you about DeFi infrastructure.</p>
      `
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
