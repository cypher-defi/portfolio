/**
 * Centralized Icon Library for Protocol Documentation
 *
 * All SVG icons used across documentation pages are defined here
 * for consistency, maintainability, and code reuse.
 *
 * Import usage:
 * import { DocsIcon, GitHubIcon, BankIcon, ... } from '@/components/icons'
 */

// --- UTILITY ICONS (Common across all docs) ---

export const DocsIcon = () => (
  <svg
    viewBox='0 0 24 24'
    width='18'
    height='18'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
  >
    <path d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
  </svg>
)

export const GitHubIcon = () => (
  <svg viewBox='0 0 24 24' width='18' height='18' fill='currentColor'>
    <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
  </svg>
)

export const CodeIcon = () => (
  <svg
    viewBox='0 0 24 24'
    width='18'
    height='18'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
  >
    <path d='M16 18l4-4-4-4M8 6l-4 4 4 4' />
    <path d='M14 4l-4 16' />
  </svg>
)

export const SecurityIcon = () => (
  <svg
    viewBox='0 0 24 24'
    width='32'
    height='32'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
  >
    <path d='M12 2L4 5V11C4 16 12 21 12 21C12 21 20 16 20 11V5L12 2Z' />
    <path d='M9 12L11 14L15 10' />
  </svg>
)

export const TestIcon = () => (
  <svg
    viewBox='0 0 24 24'
    width='32'
    height='32'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
  >
    <path d='M10.25 10.25l3.5 3.5m-3.5 0l3.5-3.5' />
    <rect x='3' y='3' width='18' height='18' rx='2' ry='2'></rect>
  </svg>
)

// --- PROTOCOL-SPECIFIC ICONS ---

// Meridian Vault Icons
export const VaultIcon = () => (
  <svg
    viewBox='0 0 24 24'
    width='32'
    height='32'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <rect x='3' y='11' width='18' height='11' rx='2' ry='2'></rect>
    <path d='M7 11V7a2 2 0 012-2h6a2 2 0 012 2v4'></path>
    <circle cx='12' cy='16' r='1'></circle>
  </svg>
)

export const YieldIcon = () => (
  <svg
    viewBox='0 0 24 24'
    width='32'
    height='32'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <polyline points='23 6 13.5 15.5 8.5 10.5 1 18'></polyline>
    <polyline points='17 6 23 6 23 12'></polyline>
  </svg>
)

// LendCore Icons
export const BankIcon = () => (
  <svg
    viewBox='0 0 24 24'
    width='32'
    height='32'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
  >
    <path d='M3 6l9-4 9 4v14H3V6z' />
    <path d='M3 10h18M9 14h6M9 18h6' />
  </svg>
)

export const LendingIcon = () => (
  <svg
    viewBox='0 0 24 24'
    width='32'
    height='32'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <circle cx='12' cy='12' r='10'></circle>
    <path d='M12 6v6l4 2'></path>
  </svg>
)

// NFT Marketplace Icons
export const MarketplaceIcon = () => (
  <svg
    viewBox='0 0 24 24'
    width='32'
    height='32'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <rect x='3' y='3' width='7' height='7'></rect>
    <rect x='14' y='3' width='7' height='7'></rect>
    <rect x='14' y='14' width='7' height='7'></rect>
    <rect x='3' y='14' width='7' height='7'></rect>
  </svg>
)

export const AuctionIcon = () => (
  <svg
    viewBox='0 0 24 24'
    width='32'
    height='32'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z'></path>
    <path d='M13 2v7h7'></path>
    <path d='M17 14h-6'></path>
    <path d='M17 18h-6'></path>
  </svg>
)

export const RoyaltyIcon = () => (
  <svg
    viewBox='0 0 24 24'
    width='32'
    height='32'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M12 2L15 10H24L17 15L19 23L12 18L5 23L7 15L0 10H9L12 2Z'></path>
  </svg>
)

// RWA Stablecoin Icons
export const PropertyIcon = () => (
  <svg
    viewBox='0 0 24 24'
    width='32'
    height='32'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M12 2L3 8V21H21V8L12 2Z'></path>
    <path d='M9 15H15V21H9V15Z'></path>
    <path d='M12 11L12 15'></path>
  </svg>
)

export const CollateralIcon = () => (
  <svg
    viewBox='0 0 24 24'
    width='32'
    height='32'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <rect x='2' y='7' width='20' height='14' rx='2' ry='2'></rect>
    <path d='M16 4H8'></path>
  </svg>
)

export const IncomeIcon = () => (
  <svg
    viewBox='0 0 24 24'
    width='32'
    height='32'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <circle cx='12' cy='12' r='10'></circle>
    <path d='M12 6V12L16 16'></path>
  </svg>
)

export const WhitelistIcon = () => (
  <svg
    viewBox='0 0 24 24'
    width='32'
    height='32'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M6 9l3 3l6-6'></path>
    <circle cx='12' cy='12' r='10'></circle>
  </svg>
)

// SwapHub DEX Icons
export const SwapIcon = () => (
  <svg
    viewBox='0 0 24 24'
    width='32'
    height='32'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
  >
    <path d='M10 16l-6-6 6-6M4 10h16M14 8l6 6-6 6M20 14H4' />
  </svg>
)

export const PoolIcon = () => (
  <svg
    viewBox='0 0 24 24'
    width='32'
    height='32'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <circle cx='9' cy='9' r='3' />
    <circle cx='15' cy='15' r='3' />
    <path d='M12 12l3-3M12 12l-3 3' />
  </svg>
)

export const LiquidityIcon = () => (
  <svg
    viewBox='0 0 24 24'
    width='32'
    height='32'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M9 12l2 2 4-4M6 3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6a3 3 0 013-3z' />
  </svg>
)

export const RouterIcon = () => (
  <svg
    viewBox='0 0 24 24'
    width='32'
    height='32'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
  </svg>
)

// Dutch Auction Icons
export const PriceIcon = () => (
  <svg
    viewBox='0 0 24 24'
    width='32'
    height='32'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M12 1v22M17 5H7M17 19H7M5 12h14'></path>
  </svg>
)

export const ClockIcon = () => (
  <svg
    viewBox='0 0 24 24'
    width='32'
    height='32'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <circle cx='12' cy='12' r='10'></circle>
    <polyline points='12 6 12 12 16 14'></polyline>
  </svg>
)

export const RefundIcon = () => (
  <svg
    viewBox='0 0 24 24'
    width='32'
    height='32'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M3 12a9 9 0 015-8.2M21 12a9 9 0 01-5 8.2' />
    <polyline points='3 8 3 3 8 3'></polyline>
    <polyline points='21 16 21 21 16 21'></polyline>
  </svg>
)

// VaultForge Icons
export const TierIcon = () => (
  <svg
    viewBox='0 0 24 24'
    width='32'
    height='32'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <rect x='3' y='15' width='18' height='6' rx='1'></rect>
    <rect x='5' y='8' width='14' height='6' rx='1'></rect>
    <rect x='7' y='1' width='10' height='6' rx='1'></rect>
  </svg>
)

export const GasIcon = () => (
  <svg
    viewBox='0 0 24 24'
    width='32'
    height='32'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M9 2v7a4 4 0 004 4h3v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-9a2 2 0 012-2h4z'></path>
    <circle cx='15' cy='6' r='1'></circle>
  </svg>
)

// ArbWave Icons
export const WaveIcon = () => (
  <svg
    viewBox='0 0 24 24'
    width='32'
    height='32'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M2 15s1.5-2 4-2 3.5 2 6 2 4-2 6-2 2 2 2 2M2 9s1.5-2 4-2 3.5 2 6 2 4-2 6-2 2 2 2 2' />
  </svg>
)

export const FlashIcon = () => (
  <svg
    viewBox='0 0 24 24'
    width='32'
    height='32'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M13 2L3 14h9l-1 8 10-12h-9l1-8z'></path>
  </svg>
)

export const ArchitectureIcon = () => (
  <svg
    viewBox='0 0 24 24'
    width='32'
    height='32'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <rect x='3' y='3' width='7' height='7'></rect>
    <rect x='14' y='3' width='7' height='7'></rect>
    <rect x='14' y='14' width='7' height='7'></rect>
    <rect x='3' y='14' width='7' height='7'></rect>
    <path d='M10 6.5h4M10 17.5h4M6.5 10v4M17.5 10v4'></path>
  </svg>
)

export const StrategyIcon = () => (
  <svg
    viewBox='0 0 24 24'
    width='32'
    height='32'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <polyline points='23 6 13.5 15.5 8.5 10.5 1 18'></polyline>
    <polyline points='17 6 23 6 23 12'></polyline>
  </svg>
)
