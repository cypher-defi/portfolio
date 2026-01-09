"use client"

import { Heading } from "@/components/atoms/Heading"
import { Navigation } from "@/components/navigation/Navigation"
import { Footer } from "@/components/navigation/Footer"
import { useState } from "react"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/components/animations/variants"

export default function ContactPage() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message })
      })

      if (response.ok) {
        setSubmitted(true)
        setEmail("")
        setMessage("")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className='bg-[#121214] text-[#E5E5E5] min-h-screen relative'>
      {/* Background effects matching homepage */}
      <div className='fixed inset-0 pointer-events-none z-0 overflow-hidden' style={{ transform: 'translate3d(0,0,0)' }}>
        <div
          className='absolute inset-0 opacity-[0.03] contrast-150 brightness-100 z-50'
          style={{
            backgroundImage: `url("/noise.svg")`,
            willChange: 'opacity',
            transform: 'translate3d(0,0,0)'
          }}
        />
      </div>

      {/* Content Layer */}
      <div className='relative z-10'>
        <Navigation />

        {/* Contact Form Section */}
        <section className='max-w-2xl mx-auto px-6 py-32 min-h-[80vh]'>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className='space-y-12'
          >
            {/* Header */}
            <motion.div variants={fadeInUp} className='space-y-4 border-b border-white/5 pb-8'>
              <Heading level='display-lg' color='primary' className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>
                Get In Touch
              </Heading>
              <p className='text-[#8A8A8A] text-lg font-light leading-relaxed'>
                Have a project in mind? Let's discuss how we can build something exceptional together.
              </p>
            </motion.div>

            {/* Form or Success Message */}
            {submitted ? (
              <motion.div
                variants={fadeInUp}
                className='p-6 bg-[rgba(107,255,149,0.05)] border border-[rgba(107,255,149,0.2)] rounded-lg'
              >
                <p className='text-[#6BFF95] font-light text-lg'>
                  ✓ Thanks for reaching out! I'll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <motion.form
                variants={fadeInUp}
                onSubmit={handleSubmit}
                className='space-y-6'
              >
                {/* Email Field */}
                <div>
                  <label className='block text-sm font-light text-[#E5E5E5] mb-2 uppercase tracking-wider'>
                    Email Address
                  </label>
                  <input
                    type='email'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='your@email.com'
                    className='w-full px-4 py-3 bg-[#1A1B1E] border border-white/5 rounded-sm text-[#E5E5E5] placeholder-[#8A8A8A] focus:outline-none focus:border-white/10 transition font-light'
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className='block text-sm font-light text-[#E5E5E5] mb-2 uppercase tracking-wider'>
                    Message
                  </label>
                  <textarea
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder='Tell me about your project...'
                    rows={8}
                    className='w-full px-4 py-3 bg-[#1A1B1E] border border-white/5 rounded-sm text-[#E5E5E5] placeholder-[#8A8A8A] focus:outline-none focus:border-white/10 transition resize-none font-light'
                  />
                </div>

                {/* Submit Button */}
                <button
                  type='submit'
                  disabled={isLoading}
                  className='w-full px-8 py-3.5 rounded-sm bg-[#1a1a1c] text-[#E5E5E5] text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-[#252527] transition-all duration-300 border border-white/5 disabled:opacity-50 disabled:cursor-not-allowed'
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </button>
              </motion.form>
            )}
          </motion.div>
        </section>

        <Footer />
      </div>
    </main>
  )
}
