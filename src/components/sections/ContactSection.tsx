"use client"

import { Heading } from "@/components/atoms/Heading"
import { Text } from "@/components/atoms/Text"
import { Button } from "@/components/atoms/Button"
import { useState } from "react"

export const ContactSection = () => {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{
    type: "success" | "error"
    text: string
  } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      })

      const data = await response.json()

      if (response.ok) {
        setMessage({
          type: "success",
          text: `Thanks for reaching out! I'll get back to you soon.`
        })
        setEmail("")
      } else {
        setMessage({
          type: "error",
          text: data.error || "Something went wrong. Please try again."
        })
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "Something went wrong. Please try again."
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section
      id='contact'
      className='max-w-2xl mx-auto px-6 py-24 border-t border-[#2A2A2E] text-center'
    >
      <Heading level='h2' className='mb-4'>
        Let's build something together.
      </Heading>
      <Text color='secondary' className='mb-8'>
        Interested in DeFi infrastructure? Have a protocol in mind? Let's talk.
      </Text>

      {/* Email Form */}
      <form
        onSubmit={handleSubmit}
        className='flex gap-3 mb-8 flex-col sm:flex-row'
      >
        <input
          type='email'
          placeholder='your@email.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
          required
          className='flex-1 px-4 py-3 bg-[#1A1B1E] border border-[#2A2A2E] rounded-lg text-white placeholder-[#8A8A8A] focus:outline-none focus:border-[#A7C8FF] focus:shadow-[0_0_20px_rgba(167,200,255,0.3)] transition disabled:opacity-50'
        />
        <Button
          variant='primary'
          size='lg'
          className='sm:w-auto'
          type='submit'
          disabled={isLoading || !email}
        >
          {isLoading ? "Sending..." : "Send"}
        </Button>
      </form>

      {/* Status Message */}
      {message && (
        <div
          className={`mb-8 px-4 py-3 rounded-lg text-sm font-medium ${
            message.type === "success"
              ? "bg-[rgba(107,255,149,0.1)] text-[#6BFF95] border border-[rgba(107,255,149,0.3)]"
              : "bg-[rgba(255,107,107,0.1)] text-[#FF6B6B] border border-[rgba(255,107,107,0.3)]"
          }`}
        >
          {message.text}
        </div>
      )}

      {/* Social Links */}
      <div className='border-t border-[#2A2A2E] pt-8'>
        <div className='flex justify-center gap-6'>
          <a
            href='https://github.com/Enricrypto'
            target='_blank'
            rel='noopener noreferrer'
            className='text-[#8A8A8A] hover:text-[#A7C8FF] transition font-medium'
          >
            GitHub
          </a>
          <a
            href='https://twitter.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-[#8A8A8A] hover:text-[#A7C8FF] transition font-medium'
          >
            Twitter
          </a>
          <a
            href='https://linkedin.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-[#8A8A8A] hover:text-[#A7C8FF] transition font-medium'
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
