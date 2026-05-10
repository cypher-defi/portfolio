"use client"

import { Button } from "@/components/atoms/Button"
import { useState } from "react"

export const ContactSection = () => {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message })
      })
      if (res.ok) {
        setStatus("success")
        setEmail("")
        setMessage("")
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id='contact' className='bg-[#F7F7F8] border-t border-black/6'>
      <div className='max-w-2xl mx-auto px-6 py-24 text-center'>
        <span className='font-mono text-[10px] text-black/30 uppercase tracking-[0.5em] mb-6 block'>
          / Contact
        </span>
        <h2 className='text-4xl md:text-5xl font-extralight tracking-tighter text-[#111111] mb-6'>
          Let's build something together.
        </h2>
        <p className='text-[#555555] mb-10'>
          Building a production app and need a backend-focused engineer? Open to full-stack and backend roles. Let's talk.
        </p>

        {status === "success" ? (
          <p className='text-[#4353ff] font-light'>
            ✓ Message sent — I'll be in touch soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className='flex flex-col gap-3 text-left'>
            <input
              type='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder='your@email.com'
              required
              className='px-4 py-3 bg-white border border-black/10 rounded-lg text-[#111111] placeholder-[#AAAAAA] focus:outline-none focus:border-[#4353ff] focus:shadow-[0_0_0_3px_rgba(67,83,255,0.1)] transition'
            />
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder='Tell me about your project...'
              required
              rows={4}
              className='px-4 py-3 bg-white border border-black/10 rounded-lg text-[#111111] placeholder-[#AAAAAA] focus:outline-none focus:border-[#4353ff] focus:shadow-[0_0_0_3px_rgba(67,83,255,0.1)] transition resize-none'
            />
            {status === "error" && (
              <p className='text-red-500 text-sm text-center'>
                Something went wrong — please try again.
              </p>
            )}
            <Button
              variant='primary'
              size='lg'
              type='submit'
              disabled={status === "loading"}
              className='self-center sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed'
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
