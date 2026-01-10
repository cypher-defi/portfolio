"use client"

import { Button } from "@/components/atoms/Button"

export const ContactSection = () => {
  return (
    <section
      id='contact'
      className='max-w-2xl mx-auto px-6 py-24 border-t border-[#2A2A2E] text-center'
    >
      <span className='text-[10px] text-white/30 uppercase tracking-[0.5em] mb-4 block'>
        / Contact
      </span>
      <h2 className='text-4xl md:text-5xl font-extralight tracking-tighter text-[#E5E5E5] mb-6'>
        Let's build something together.
      </h2>
      <p className='text-[#A8A8A8] mb-8'>
        Interested in DeFi infrastructure? Have a protocol in mind? Let's talk.
      </p>

      {/* Email Form */}
      <form
        action='https://formsubmit.co/eibarraf@gmail.com'
        method='POST'
        className='flex gap-3 mb-8 flex-col sm:flex-row'
      >
        <input
          type='email'
          name='email'
          placeholder='your@email.com'
          required
          className='flex-1 px-4 py-3 bg-[#1A1B1E] border border-[#2A2A2E] rounded-lg text-white placeholder-[#8A8A8A] focus:outline-none focus:border-[#A7C8FF] focus:shadow-[0_0_20px_rgba(167,200,255,0.3)] transition'
        />
        <Button variant='primary' size='lg' className='sm:w-auto' type='submit'>
          Send
        </Button>
      </form>
    </section>
  )
}
