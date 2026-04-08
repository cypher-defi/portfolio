"use client"

import { Icon } from "@iconify/react"

interface TechItem {
  name: string
  iconifyIcon?: string
  customSvg?: React.ReactNode
}

const ROW_ONE: TechItem[] = [
  { name: "Solidity", iconifyIcon: "simple-icons:solidity" },
  { name: "Rust", iconifyIcon: "simple-icons:rust" },
  { name: "TypeScript", iconifyIcon: "simple-icons:typescript" },
  { name: "React", iconifyIcon: "simple-icons:react" },
  { name: "Next.js", iconifyIcon: "simple-icons:nextdotjs" },
  { name: "Tailwind CSS", iconifyIcon: "simple-icons:tailwindcss" },
  { name: "Python", iconifyIcon: "simple-icons:python" },
  { name: "Node.js", iconifyIcon: "simple-icons:nodedotjs" },
  { name: "FastAPI", iconifyIcon: "simple-icons:fastapi" },
]

const ROW_TWO: TechItem[] = [
  { name: "PostgreSQL", iconifyIcon: "simple-icons:postgresql" },
  { name: "AWS", iconifyIcon: "simple-icons:amazonwebservices" },
  { name: "Supabase", iconifyIcon: "simple-icons:supabase" },
  { name: "Streamlit", iconifyIcon: "simple-icons:streamlit" },
  { name: "Wagmi", iconifyIcon: "simple-icons:web3dotjs" },
  { name: "Ethers.js", iconifyIcon: "simple-icons:ethereum" },
  {
    name: "Viem",
    customSvg: (
      <svg viewBox="0 0 160 224" fill="currentColor" className="w-full h-full">
        <path d="M83.3 220.4L135.66 96.98C142.8 79.64 145.52 77.94 160.14 77.94V70.8H107.1V77.94C120.7 77.94 127.16 78.62 127.16 85.76C127.16 88.48 126.48 91.88 124.44 96.98L94.18 172.46L61.54 95.96C59.84 91.2 58.82 87.8 58.82 85.42C58.82 78.62 65.28 77.94 76.84 77.94V70.8H1.02V77.94C14.96 77.94 17 80.66 23.8 95.62L81.26 220.4H83.3Z" />
      </svg>
    )
  },
  {
    name: "Foundry",
    customSvg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M18 2H6C4.9 2 4 2.9 4 4V8H2V10H4V14H2V16H4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V16H22V14H20V10H22V8H20V4C20 2.9 19.1 2 18 2M18 20H6V4H18V20M16 6H8V8H10V18H14V8H16V6Z" />
      </svg>
    )
  },
  {
    name: "Anchor",
    customSvg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12 2C10.07 2 8.5 3.57 8.5 5.5C8.5 6.5 8.93 7.4 9.64 8.03L7 15H9.5L10.25 13H13.75L14.5 15H17L14.36 8.03C15.07 7.4 15.5 6.5 15.5 5.5C15.5 3.57 13.93 2 12 2M12 4C12.83 4 13.5 4.67 13.5 5.5C13.5 6.33 12.83 7 12 7C11.17 7 10.5 6.33 10.5 5.5C10.5 4.67 11.17 4 12 4M11 9H13L12 11.5L11 9M5 17V22H19V17H5Z" />
      </svg>
    )
  },
]

const TechItem = ({ item }: { item: TechItem }) => (
  <div className="flex items-center gap-3 px-6 select-none">
    <div className="w-5 h-5 opacity-40 shrink-0 text-[#111111]">
      {item.customSvg ? (
        <div className="w-5 h-5">{item.customSvg}</div>
      ) : item.iconifyIcon ? (
        <Icon icon={item.iconifyIcon} className="w-5 h-5" />
      ) : null}
    </div>
    <span className="text-[11px] uppercase tracking-[0.18em] text-[#555555] whitespace-nowrap font-light">
      {item.name}
    </span>
    <span className="text-black/10 ml-4">·</span>
  </div>
)

const MarqueeRow = ({
  items,
  direction = "left",
  duration = "35s"
}: {
  items: TechItem[]
  direction?: "left" | "right"
  duration?: string
}) => {
  const doubled = [...items, ...items]
  const animClass = direction === "left" ? "marquee-left" : "marquee-right"

  return (
    <div
      className="overflow-hidden py-3"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)"
      }}
    >
      <div
        className={`flex w-max ${animClass}`}
        style={{ animationDuration: duration }}
      >
        {doubled.map((item, i) => (
          <TechItem key={i} item={item} />
        ))}
      </div>
    </div>
  )
}

export const TechStackSection = () => {
  return (
    <section className="relative py-16 bg-[#F7F7F8] border-t border-black/6 overflow-hidden">
      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-left  { animation: marquee-left  linear infinite; }
        .marquee-right { animation: marquee-right linear infinite; }
        .marquee-left:hover,
        .marquee-right:hover { animation-play-state: paused; }
      `}</style>

      {/* Section Header */}
      <div className="text-center mb-10 px-4">
        <span className="font-mono text-[10px] text-black/30 uppercase tracking-[0.5em] mb-4 block">
          / Technology Stack
        </span>
        <h2 className="text-4xl md:text-5xl font-extralight tracking-tighter text-[#111111]">
          Built with Modern Tools
        </h2>
      </div>

      {/* Marquee rows */}
      <div className="space-y-2">
        <MarqueeRow items={ROW_ONE} direction="left" duration="38s" />
        <MarqueeRow items={ROW_TWO} direction="right" duration="30s" />
      </div>
    </section>
  )
}
