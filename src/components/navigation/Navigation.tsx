import { Logo } from "@/components/atoms/Logo"

export const Navigation = () => (
  <nav className='sticky top-0 z-50 backdrop-blur-md bg-[#0C0C0E]/80 border-b border-[#2A2A2E]'>
    <div className='mx-auto px-6 py-4 flex items-center justify-between w-full'>
      <div className='flex items-center gap-3'>
        <Logo />
        <span className='text-[#A7C8FF] font-bold text-lg'>CYPHER</span>
      </div>
      <nav className='flex gap-6'>
        <a
          href='#work'
          className='text-[#8A8A8A] hover:text-[#A7C8FF] transition'
        >
          Work
        </a>
        <a
          href='#expertise'
          className='text-[#8A8A8A] hover:text-[#A7C8FF] transition'
        >
          Expertise
        </a>
        <a
          href='#contact'
          className='text-[#8A8A8A] hover:text-[#A7C8FF] transition'
        >
          Contact
        </a>
      </nav>
    </div>
  </nav>
)
