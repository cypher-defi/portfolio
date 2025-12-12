"use client"

import { Heading } from "@/components/atoms/Heading"
import { Text } from "@/components/atoms/Text"
import { Button } from "@/components/atoms/Button"
import { useState } from "react"
import Link from "next/link"

export default function ContactPage() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Add your email service integration here (SendGrid, Resend, etc.)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubmitted(true)
      setEmail("")
      setMessage("")
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className='bg-[#0C0C0E] text-white min-h-screen'>
      {/* Navigation Back Link */}
      <nav className='sticky top-0 z-50 backdrop-blur-md bg-[#0C0C0E]/80 border-b border-[#2A2A2E]'>
        <div className='max-w-6xl mx-auto px-6 py-4'>
          <Link
            href='/'
            className='text-[#A7C8FF] hover:text-[#6BFF95] transition font-medium'
          >
            ← Back
          </Link>
        </div>
      </nav>

      {/* Contact Form */}
      <section className='max-w-2xl mx-auto px-6 py-24'>
        <div className='mb-12'>
          <Heading level='h1' className='mb-4'>
            Get In Touch
          </Heading>
          <Text color='secondary' className='text-lg'>
            Have a project in mind? Let's talk about building something great
            together.
          </Text>
        </div>

        {submitted ? (
          <div className='p-6 bg-[rgba(107,255,149,0.1)] border border-[rgba(107,255,149,0.3)] rounded-lg'>
            <Text className='text-[#6BFF95] font-medium text-lg'>
              ✓ Thanks for reaching out! I'll get back to you soon.
            </Text>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className='space-y-6'>
            {/* Email Field */}
            <div>
              <label className='block text-sm font-medium text-[#A7C8FF] mb-2'>
                Email Address
              </label>
              <input
                type='email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='your@email.com'
                className='w-full px-4 py-3 bg-[#1A1B1E] border border-[#2A2A2E] rounded-lg text-white placeholder-[#8A8A8A] focus:outline-none focus:border-[#A7C8FF] focus:shadow-[0_0_20px_rgba(167,200,255,0.3)] transition'
              />
            </div>

            {/* Message Field */}
            <div>
              <label className='block text-sm font-medium text-[#A7C8FF] mb-2'>
                Message
              </label>
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder='Tell me about your project...'
                rows={6}
                className='w-full px-4 py-3 bg-[#1A1B1E] border border-[#2A2A2E] rounded-lg text-white placeholder-[#8A8A8A] focus:outline-none focus:border-[#A7C8FF] focus:shadow-[0_0_20px_rgba(167,200,255,0.3)] transition resize-none'
              />
            </div>

            {/* Submit Button */}
            <Button
              variant='primary'
              size='lg'
              type='submit'
              disabled={isLoading}
              className='w-full'
            >
              {isLoading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        )}
      </section>
    </main>
  )
}
