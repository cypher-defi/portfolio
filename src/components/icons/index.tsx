/**
 * Centralized Icon Library for Protocol Documentation
 *
 * Using Iconify for consistent, elegant icons across all documentation pages
 *
 * Import usage:
 * import { DocsIcon, GitHubIcon, BankIcon, ... } from '@/components/icons'
 */

import { Icon } from "@iconify/react"

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

// Meridian Vault / VaultForge Icons
export const VaultIcon = () => (
  <Icon icon="mdi:safe" className="w-6 h-6" />
)

export const YieldIcon = () => (
  <Icon icon="mdi:chart-line" className="w-8 h-8" />
)

// LendCore Icons
export const BankIcon = () => (
  <Icon icon="mdi:bank" className="w-6 h-6" />
)

export const LendingIcon = () => (
  <Icon icon="mdi:hand-coin" className="w-8 h-8" />
)

// NFT Marketplace Icons
export const MarketplaceIcon = () => (
  <Icon icon="mdi:grid" className="w-6 h-6" />
)

export const AuctionIcon = () => (
  <Icon icon="mdi:gavel" className="w-6 h-6" />
)

export const RoyaltyIcon = () => (
  <Icon icon="mdi:star" className="w-8 h-8" />
)

// RWA Stablecoin Icons
export const PropertyIcon = () => (
  <Icon icon="mdi:home-city" className="w-6 h-6" />
)

export const CollateralIcon = () => (
  <Icon icon="mdi:wallet" className="w-8 h-8" />
)

export const IncomeIcon = () => (
  <Icon icon="mdi:trending-up" className="w-8 h-8" />
)

export const WhitelistIcon = () => (
  <Icon icon="mdi:check-circle" className="w-8 h-8" />
)

// SwapHub DEX Icons
export const SwapIcon = () => (
  <Icon icon="mdi:swap-horizontal" className="w-6 h-6" />
)

export const PoolIcon = () => (
  <Icon icon="mdi:water" className="w-8 h-8" />
)

export const LiquidityIcon = () => (
  <Icon icon="mdi:water-check" className="w-8 h-8" />
)

export const RouterIcon = () => (
  <Icon icon="mdi:routes" className="w-8 h-8" />
)

// Token Launchpad Icons
export const PriceIcon = () => (
  <Icon icon="mdi:currency-usd" className="w-8 h-8" />
)

export const ClockIcon = () => (
  <Icon icon="mdi:clock-outline" className="w-8 h-8" />
)

export const RefundIcon = () => (
  <Icon icon="mdi:refresh" className="w-8 h-8" />
)

// VaultForge Icons
export const TierIcon = () => (
  <Icon icon="mdi:layers" className="w-8 h-8" />
)

export const GasIcon = () => (
  <Icon icon="mdi:gas-station" className="w-8 h-8" />
)

// ArbWave Icons
export const WaveIcon = () => (
  <Icon icon="mdi:wave" className="w-6 h-6" />
)

export const FlashIcon = () => (
  <Icon icon="mdi:lightning-bolt" className="w-8 h-8" />
)

export const ArchitectureIcon = () => (
  <Icon icon="mdi:sitemap" className="w-8 h-8" />
)

export const StrategyIcon = () => (
  <Icon icon="mdi:strategy" className="w-8 h-8" />
)
