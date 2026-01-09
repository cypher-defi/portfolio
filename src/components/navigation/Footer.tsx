import { Icon } from "@iconify/react"

export const Footer = () => (
  <footer className='border-t border-white/5 py-12 px-6'>
    <div className='max-w-6xl mx-auto'>
      {/* Social Links */}
      <div className='flex justify-center gap-6 mb-6'>
        <a
          href='https://github.com/Enricrypto'
          target='_blank'
          rel='noopener noreferrer'
          className='text-[#A8A8A8] hover:text-[#A7C8FF] transition-all duration-300 group'
          aria-label='GitHub'
        >
          <Icon icon="simple-icons:github" className='w-5 h-5 group-hover:scale-110 transition-transform duration-300' />
        </a>
        <a
          href='https://x.com/Enricrypto'
          target='_blank'
          rel='noopener noreferrer'
          className='text-[#A8A8A8] hover:text-[#A7C8FF] transition-all duration-300 group'
          aria-label='X (Twitter)'
        >
          <Icon icon="simple-icons:x" className='w-5 h-5 group-hover:scale-110 transition-transform duration-300' />
        </a>
        <a
          href='https://linkedin.com/in/enrique-ibarra'
          target='_blank'
          rel='noopener noreferrer'
          className='text-[#A8A8A8] hover:text-[#A7C8FF] transition-all duration-300 group'
          aria-label='LinkedIn'
        >
          <Icon icon="simple-icons:linkedin" className='w-5 h-5 group-hover:scale-110 transition-transform duration-300' />
        </a>
      </div>

      {/* Copyright */}
      <p className='text-center text-[#A8A8A8] text-xs font-light'>
        © 2025 CYPHER — Institutional-grade DeFi infrastructure and smart contract development.
        <br className='sm:hidden' />
        <span className='hidden sm:inline'> </span>
        Built by Enrique Ibarra, Smart Contract Engineer.
      </p>
    </div>
  </footer>
)
