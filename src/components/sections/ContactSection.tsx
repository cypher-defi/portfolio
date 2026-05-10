"use client"

import { Button } from "@/components/atoms/Button"

export const ContactSection = () => {
  return (
    <section
      id='contact'
      className='bg-[#F7F7F8] border-t border-black/6'
    >
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

        <form
          action='https://formsubmit.co/eibarraf@gmail.com'
          method='POST'
          className='flex gap-3 flex-col sm:flex-row'
        >
          <input
            type='email'
            name='email'
            placeholder='your@email.com'
            required
            className='flex-1 px-4 py-3 bg-white border border-black/10 rounded-lg text-[#111111] placeholder-[#AAAAAA] focus:outline-none focus:border-[#4353ff] focus:shadow-[0_0_0_3px_rgba(67,83,255,0.1)] transition'
          />
          <Button variant='primary' size='lg' className='sm:w-auto' type='submit'>
            Send
          </Button>
        </form>
      </div>
    </section>
  )
}
