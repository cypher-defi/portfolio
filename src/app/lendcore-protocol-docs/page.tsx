"use client"

import { Heading } from "@/components/atoms/Heading"
import {
  Table,
  THead,
  TBody,
  Tr,
  Th,
  Td
} from "@/components/molecules/DocsTable"
import { DocsLayout } from "@/components/layout/DocsLayout"
import { Navigation } from "@/components/navigation/Navigation"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/components/animations/variants"
import { Card } from "@/components/molecules/Card"

import { SecurityIcon, TestIcon, BankIcon } from "@/components/icons"

export default function LendCoreDocs() {
  return (
    <>
      <Navigation
        variant='docs'
        protocolName='LendCore'
        protocolIcon={<BankIcon />}
        githubLink='https://github.com/Enricrypto/Isolated-Lending-Market'
        liveUrl='https://frontend-ashen-omega-89.vercel.app/'
        navItems={[
          { label: "Overview", href: "#overview" },
          { label: "Frontend", href: "#frontend" },
          { label: "Indexer", href: "#indexer" },
          { label: "Governance", href: "#governance" },
          { label: "Deployment", href: "#deployment" },
          { label: "Security", href: "#security" },
          { label: "Testing", href: "#testing" }
        ]}
      />

      <DocsLayout>
        <header className='space-y-4 pt-6 pb-16 border-t border-white/5'>
          <div className='flex items-center gap-4 flex-wrap'>
            <Heading
              level='display-lg'
              color='accent-blue'
              className='mb-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl'
            >
              LendCore
            </Heading>
            <span className='px-3 py-1 bg-[rgba(167,200,255,0.1)] border border-[rgba(167,200,255,0.3)] rounded-full text-sm text-[#A7C8FF]'>
              Lending Protocol
            </span>
            <span className='px-3 py-1 bg-[rgba(107,255,149,0.1)] border border-[rgba(107,255,149,0.3)] rounded-full text-sm text-[#6BFF95]'>
              Sepolia Live
            </span>
            <span className='px-3 py-1 bg-[rgba(195,166,255,0.1)] border border-[rgba(195,166,255,0.3)] rounded-full text-sm text-[#C3A6FF]'>
              Next.js Frontend
            </span>
          </div>
          <p className='text-lg leading-relaxed max-w-4xl text-[#E5E5E5]'>
            A decentralized isolated lending protocol built with Solidity 0.8.30
            and Foundry, featuring UUPS upgradeable contracts, multi-sig
            governance with Timelock, health factor-based liquidations,
            ERC-4626 vault integration, and a real-time event-driven indexer
            backed by Supabase with a Next.js monitoring dashboard.
          </p>

          <div className='flex flex-wrap gap-2 pt-4'>
            <a
              href='#'
              className='px-3 py-1 bg-[rgba(167,200,255,0.1)] border border-[rgba(167,200,255,0.3)] rounded-full text-sm text-[#A7C8FF] hover:bg-[rgba(167,200,255,0.2)] transition'
            >
              DeFi
            </a>
            <a
              href='#'
              className='px-3 py-1 bg-[rgba(195,166,255,0.1)] border border-[rgba(195,166,255,0.3)] rounded-full text-sm text-[#C3A6FF] hover:bg-[rgba(195,166,255,0.2)] transition'
            >
              Lending
            </a>
            <a
              href='#'
              className='px-3 py-1 bg-[rgba(255,149,0,0.1)] border border-[rgba(255,149,0,0.3)] rounded-full text-sm text-[#FF9500] hover:bg-[rgba(255,149,0,0.2)] transition'
            >
              UUPS Upgradeable
            </a>
            <a
              href='#'
              className='px-3 py-1 bg-[rgba(107,255,149,0.1)] border border-[rgba(107,255,149,0.3)] rounded-full text-sm text-[#6BFF95] hover:bg-[rgba(107,255,149,0.2)] transition'
            >
              ERC-4626 Vaults
            </a>
            <a
              href='#'
              className='px-3 py-1 bg-[rgba(153,69,255,0.1)] border border-[rgba(153,69,255,0.3)] rounded-full text-sm text-[#C3A6FF] hover:bg-[rgba(153,69,255,0.2)] transition'
            >
              Timelock Governance
            </a>
            <a
              href='#'
              className='px-3 py-1 bg-[rgba(107,255,149,0.1)] border border-[rgba(107,255,149,0.3)] rounded-full text-sm text-[#6BFF95] hover:bg-[rgba(107,255,149,0.2)] transition'
            >
              Event-Driven Indexer
            </a>
            <a
              href='https://getfoundry.sh/'
              target='_blank'
              rel='noopener noreferrer'
              className='px-3 py-1 bg-[rgba(255,107,107,0.1)] border border-[rgba(255,107,107,0.3)] rounded-full text-sm text-[#FF6B6B] hover:bg-[rgba(255,107,107,0.2)] transition'
            >
              Tested With Foundry
            </a>
            <a
              href='https://opensource.org/licenses/MIT'
              target='_blank'
              rel='noopener noreferrer'
              className='px-3 py-1 bg-[rgba(107,255,149,0.1)] border border-[rgba(107,255,149,0.3)] rounded-full text-sm text-[#6BFF95]'
            >
              License: MIT
            </a>
          </div>
        </header>

        {/* OVERVIEW */}
        <section id='overview' className='py-20 border-t border-white/5'>
          <Heading
            level='h2'
            color='accent-blue'
            className='mb-8 flex items-center gap-3'
          >
            <BankIcon /> Core Features
          </Heading>

          <motion.div
            variants={staggerContainer}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
          >
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }} className='h-full'>
              <Card glow='blue' className='h-full'>
                <Heading level='h4' color='accent-blue' className='mb-3'>
                  Multi-Collateral Support
                </Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  Whitelisted ERC20 tokens as collateral with health
                  factor-based system preventing over-leveraging. Isolated
                  markets keep risk contained per market pair.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }} className='h-full'>
              <Card glow='green' className='h-full'>
                <Heading level='h4' color='accent-green' className='mb-3'>
                  Jump Rate Model
                </Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  Dynamic interest rates (2%–60% APR) based on utilization.
                  Base 2% → Optimal 80% kink → Steep 60% slope after kink,
                  with 10% protocol fee on interest revenue.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }} className='h-full'>
              <Card glow='purple' className='h-full'>
                <Heading level='h4' color='accent-purple' className='mb-3'>
                  Automated Liquidations
                </Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  5% liquidation bonus protects lenders. Bad debt is isolated
                  and tracked separately. Underwater positions can be
                  liquidated atomically by any caller.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }} className='h-full'>
              <Card glow='blue' className='h-full'>
                <Heading level='h4' color='accent-blue' className='mb-3'>
                  ERC-4626 Vaults
                </Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  Standard-compliant vault tokens for yield bearing. Each
                  market has its own Vault for lender deposits, with
                  market-controlled borrowing and share-based accounting.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }} className='h-full'>
              <Card glow='green' className='h-full'>
                <Heading level='h4' color='accent-green' className='mb-3'>
                  OracleRouter
                </Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  Chainlink + TWAP price aggregation with staleness checks,
                  confidence scoring, and 18-decimal internal normalization
                  supporting 6/8/18 decimal tokens safely.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }} className='h-full'>
              <Card glow='purple' className='h-full'>
                <Heading level='h4' color='accent-purple' className='mb-3'>
                  Real-Time Monitoring
                </Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  Event-driven indexer (viem polling) writes market snapshots
                  every 60s to Supabase. Next.js dashboard surfaces TVL,
                  utilization, borrow rates, and oracle confidence in real time.
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </section>

        {/* FRONTEND & MONITORING */}
        <section id='frontend' className='py-20 border-t border-white/5'>
          <Heading
            level='h2'
            color='accent-blue'
            className='mb-4 flex items-center gap-3'
          >
            <BankIcon /> Frontend & Monitoring
          </Heading>
          <p className='max-w-4xl mb-8 text-[#E5E5E5]'>
            A Next.js 16 app deployed on Vercel provides a full monitoring and
            interaction layer over the on-chain protocol. All data flows through
            a REST API backed by Prisma + Supabase.
          </p>

          <motion.div
            variants={staggerContainer}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-12'
          >
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='blue'>
                <Heading level='h4' color='accent-blue' className='mb-3'>
                  Dashboard & Deposit UI
                </Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>Market overview: TVL, total borrows, per-market severity</li>
                  <li>Deposit collateral and borrow against it per market</li>
                  <li>Per-user position tracking with live health factors</li>
                  <li>Recent liquidation event feed</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='purple'>
                <Heading level='h4' color='accent-purple' className='mb-3'>
                  Monitoring Sub-Pages
                </Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>/monitoring/liquidity: Liquidity depth ratio over time</li>
                  <li>/monitoring/utilization: Utilization vs. optimal kink</li>
                  <li>/monitoring/rates: Borrow & lending APR history</li>
                  <li>/monitoring/oracle: Oracle confidence & price feeds</li>
                </ul>
              </Card>
            </motion.div>
          </motion.div>

          <Heading level='h4' color='accent-green' className='mb-4'>
            API Reference
          </Heading>
          <div className='overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0'>
            <Table>
              <THead>
                <Tr isHeader={true}>
                  <Th>Endpoint</Th>
                  <Th>Method</Th>
                  <Th>Description</Th>
                </Tr>
              </THead>
              <TBody>
                <Tr>
                  <Td className='font-mono text-xs text-[#A7C8FF]'>/api/vaults</Td>
                  <Td className='text-[#6BFF95]'>GET</Td>
                  <Td>All markets with latest snapshot (TVL, utilization, severity)</Td>
                </Tr>
                <Tr>
                  <Td className='font-mono text-xs text-[#A7C8FF]'>/api/metrics?vault=&lt;addr&gt;</Td>
                  <Td className='text-[#6BFF95]'>GET</Td>
                  <Td>Current metrics for a specific market</Td>
                </Tr>
                <Tr>
                  <Td className='font-mono text-xs text-[#A7C8FF]'>/api/history?signal=&lt;type&gt;&amp;range=&lt;r&gt;</Td>
                  <Td className='text-[#6BFF95]'>GET</Td>
                  <Td>Time-series data. Signals: liquidity, utilization, borrowRate, oracle. Ranges: 24h, 7d, 30d, 90d</Td>
                </Tr>
                <Tr>
                  <Td className='font-mono text-xs text-[#A7C8FF]'>/api/positions?user=&lt;addr&gt;</Td>
                  <Td className='text-[#6BFF95]'>GET</Td>
                  <Td>User positions across all markets (latest per market)</Td>
                </Tr>
                <Tr>
                  <Td className='font-mono text-xs text-[#A7C8FF]'>/api/liquidations?limit=&lt;n&gt;</Td>
                  <Td className='text-[#6BFF95]'>GET</Td>
                  <Td>Recent liquidation events (default 20, max 100)</Td>
                </Tr>
                <Tr>
                  <Td className='font-mono text-xs text-[#A7C8FF]'>/api/indexer</Td>
                  <Td className='text-[#FFC36B]'>GET / POST</Td>
                  <Td>Indexer status; start/stop via POST {`{"action":"start"|"stop"}`}</Td>
                </Tr>
              </TBody>
            </Table>
          </div>
        </section>

        {/* EVENT-DRIVEN INDEXER */}
        <section id='indexer' className='py-20 border-t border-white/5'>
          <Heading
            level='h2'
            color='accent-green'
            className='mb-4 flex items-center gap-3'
          >
            <SecurityIcon /> Event-Driven Indexer
          </Heading>
          <p className='max-w-4xl mb-8 text-[#E5E5E5]'>
            The indexer (<code className='text-[#A7C8FF]'>frontend/src/lib/indexer/</code>) bridges
            on-chain state to the Supabase database via viem event polling at a
            15-second interval. Market snapshots are written every 60 seconds;
            user positions and liquidations update on each relevant event.
          </p>

          <motion.div
            variants={staggerContainer}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-12'
          >
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='green'>
                <Heading level='h4' color='accent-green' className='mb-3'>
                  Event Listener
                </Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>Polls MarketV1 via <code className='text-[#A7C8FF]'>viem.watchContractEvent</code></li>
                  <li>CollateralDeposited / CollateralWithdrawn</li>
                  <li>Borrowed / Repaid / Liquidated</li>
                  <li>GlobalBorrowIndexUpdated</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='blue'>
                <Heading level='h4' color='accent-blue' className='mb-3'>
                  Snapshot Generator
                </Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>Multicall reads on every event or 60s tick</li>
                  <li>Computes liquidityDepthRatio, distanceToKink</li>
                  <li>4-level severity scoring (liquidity, APR, oracle)</li>
                  <li>Writes MarketSnapshot to Supabase</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='purple'>
                <Heading level='h4' color='accent-purple' className='mb-3'>
                  Position & Liquidation Tracker
                </Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>Calls <code className='text-[#A7C8FF]'>getUserPosition(user)</code> on each user event</li>
                  <li>Stores collateral value, debt, health factor, borrowing power</li>
                  <li>Liquidation events upserted idempotently on (txHash, logIndex)</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='green'>
                <Heading level='h4' color='accent-green' className='mb-3'>
                  Database Schema
                </Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li><strong>Market</strong>: static market registry</li>
                  <li><strong>MarketSnapshot</strong>: periodic state (~1 row/market/60s)</li>
                  <li><strong>UserPositionSnapshot</strong>: per-user health factor history</li>
                  <li><strong>LiquidationEvent</strong>: on-chain liquidation records</li>
                </ul>
              </Card>
            </motion.div>
          </motion.div>
        </section>

        {/* GOVERNANCE */}
        <section id='governance' className='py-20 border-t border-white/5'>
          <Heading
            level='h2'
            color='accent-purple'
            className='mb-8 flex items-center gap-3'
          >
            <SecurityIcon /> Upgradeability & Governance
          </Heading>

          <motion.div
            variants={staggerContainer}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-10'
          >
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='purple'>
                <Heading level='h4' color='accent-purple' className='mb-3'>
                  UUPS Proxy Pattern
                </Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>ERC1967 compliant proxy contracts</li>
                  <li>49-slot storage gap for safe future upgrades</li>
                  <li>Separated storage layout (MarketStorageV1)</li>
                  <li>Upgrade authorization enforced in implementation</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='blue'>
                <Heading level='h4' color='accent-blue' className='mb-3'>
                  Timelock Governance
                </Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>TimelockController with 2-day delay on all owner actions</li>
                  <li>Emergency Guardian for instant borrow-only pause</li>
                  <li>Deposits, withdrawals, and repayments unaffected by pause</li>
                  <li>Multi-sig ready (Gnosis Safe compatible)</li>
                </ul>
              </Card>
            </motion.div>
          </motion.div>

          <div className='overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0'>
            <Table>
              <THead>
                <Tr isHeader={true}>
                  <Th>Role</Th>
                  <Th>Capabilities</Th>
                  <Th>Delay</Th>
                </Tr>
              </THead>
              <TBody>
                <Tr>
                  <Td className='font-medium text-[#C3A6FF]'>Owner</Td>
                  <Td>Upgrade contract, set parameters, add collateral</Td>
                  <Td>2 days (via Timelock)</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#6BFF95]'>Guardian</Td>
                  <Td>Pause borrowing only (emergency)</Td>
                  <Td>Instant</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#A7C8FF]'>Timelock</Td>
                  <Td>Holds ownership, enforces delay on all owner actions</Td>
                  <Td>2 days</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#FFC36B]'>Multisig</Td>
                  <Td>Proposes and executes timelock operations</Td>
                  <Td>: </Td>
                </Tr>
              </TBody>
            </Table>
          </div>
        </section>

        {/* DEPLOYMENT */}
        <section id='deployment' className='py-20 border-t border-white/5'>
          <Heading
            level='h2'
            color='accent-green'
            className='mb-6 flex items-center gap-3'
          >
            <BankIcon /> Sepolia Testnet Deployment
          </Heading>

          <p className='max-w-4xl mb-8 text-[#E5E5E5]'>
            All contracts are deployed and verified on Sepolia testnet.
            The monitoring frontend is live on Vercel.
          </p>

          <div className='overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0 mb-10'>
            <Table>
              <THead>
                <Tr isHeader={true}>
                  <Th>Contract</Th>
                  <Th>Address</Th>
                </Tr>
              </THead>
              <TBody>
                <Tr>
                  <Td className='font-medium text-[#A7C8FF]'>MarketV1 (Proxy)</Td>
                  <Td>
                    <a
                      href='https://sepolia.etherscan.io/address/0xC223C0634c6312Cb3Bf23e847f1C21Ae9ee9E907'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='font-mono text-xs text-[#A7C8FF] hover:underline'
                    >
                      0xC223...E907
                    </a>
                  </Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#6BFF95]'>Vault (ERC-4626)</Td>
                  <Td>
                    <a
                      href='https://sepolia.etherscan.io/address/0xE5543F72AF9411936497Dc7816eB4131bB705D3B'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='font-mono text-xs text-[#6BFF95] hover:underline'
                    >
                      0xE554...D3B
                    </a>
                  </Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#C3A6FF]'>OracleRouter</Td>
                  <Td>
                    <a
                      href='https://sepolia.etherscan.io/address/0xaA6B38118a2581fe6659aFEA79cBF3829b848bD7'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='font-mono text-xs text-[#C3A6FF] hover:underline'
                    >
                      0xaA6B...8bD7
                    </a>
                  </Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#FFC36B]'>InterestRateModel</Td>
                  <Td>
                    <a
                      href='https://sepolia.etherscan.io/address/0x9997ACfd06004a2073B46A974258a9EC1066D7E0'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='font-mono text-xs text-[#FFC36B] hover:underline'
                    >
                      0x9997...7E0
                    </a>
                  </Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#FF6B6B]'>MarketTimelock</Td>
                  <Td>
                    <a
                      href='https://sepolia.etherscan.io/address/0xF36B006869bF22c11B1746a7207A250f2ab0D838'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='font-mono text-xs text-[#FF6B6B] hover:underline'
                    >
                      0xF36B...D838
                    </a>
                  </Td>
                </Tr>
              </TBody>
            </Table>
          </div>

          <Heading level='h4' color='accent-blue' className='mb-4'>
            Test Assets (Mock Tokens)
          </Heading>
          <div className='overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0'>
            <Table>
              <THead>
                <Tr isHeader={true}>
                  <Th>Token</Th>
                  <Th>Address</Th>
                </Tr>
              </THead>
              <TBody>
                <Tr>
                  <Td className='font-medium text-[#A7C8FF]'>USDC</Td>
                  <Td className='font-mono text-xs'>0x4949E3c0fBA71d2A0031D9a648A17632E65ae495</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#6BFF95]'>WETH</Td>
                  <Td className='font-mono text-xs'>0x4F61DeD7391d6F7EbEb8002481aFEc2ebd1D535c</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#FFC36B]'>WBTC</Td>
                  <Td className='font-mono text-xs'>0x773269dE75Ec35Bd786337407af9E725e0E32dD5</Td>
                </Tr>
              </TBody>
            </Table>
          </div>
        </section>

        {/* SECURITY */}
        <section id='security' className='py-20 border-t border-white/5'>
          <Heading
            level='h2'
            color='accent-red'
            className='mb-6 flex items-center gap-3'
          >
            <SecurityIcon /> Security Architecture
          </Heading>

          <motion.div
            variants={staggerContainer}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            className='grid grid-cols-1 md:grid-cols-2 gap-6'
          >
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='green'>
                <Heading level='h4' color='accent-green' className='mb-3'>
                  Safety Mechanisms
                </Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>ReentrancyGuard on all state-changing functions</li>
                  <li>Emergency Guardian for instant borrow-only pause</li>
                  <li>Oracle staleness checks prevent stale price exploitation</li>
                  <li>18-decimal internal accounting prevents rounding errors</li>
                  <li>Storage Gaps (49 slots) for safe future upgrades</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='red'>
                <Heading level='h4' color='accent-red' className='mb-3'>
                  Risk Mitigation
                </Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>Health factor prevents over-leveraging (LLTV 85%)</li>
                  <li>5% liquidation bonus protects lenders</li>
                  <li>Bad debt isolated and tracked separately</li>
                  <li>2-day Timelock on all governance actions</li>
                  <li>High utilization drives rates up, discouraging bank runs</li>
                </ul>
              </Card>
            </motion.div>
          </motion.div>
        </section>

        {/* TESTING */}
        <section id='testing' className='py-20'>
          <Heading
            level='h2'
            color='accent-green'
            className='mb-6 flex items-center gap-3'
          >
            <TestIcon /> Testing & Validation
          </Heading>

          <p className='max-w-4xl mb-8 text-[#E5E5E5]'>
            91+ passing Foundry tests across unit, integration, governance, and
            upgrade scenarios. Complete NatSpec documentation throughout.
          </p>

          <div className='overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0'>
            <Table>
              <THead>
                <Tr isHeader={true}>
                  <Th>Test Category</Th>
                  <Th>Focus</Th>
                </Tr>
              </THead>
              <TBody>
                <Tr>
                  <Td className='font-medium text-[#FFC36B]'>Market Unit Tests</Td>
                  <Td>Collateral, borrowing, repayment, liquidations, health factors, emergency pause</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#A7C8FF]'>Vault / ERC-4626</Td>
                  <Td>Standard compliance, market-controlled borrows, share pricing</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#6BFF95]'>Oracle</Td>
                  <Td>Price feed management, staleness checks, decimal normalization</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#C3A6FF]'>Governance</Td>
                  <Td>Timelock delays, guardian pause, role-based access, risk proposals</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#FF6B6B]'>Integration</Td>
                  <Td>Full lending cycles, price crash liquidation, bad debt scenarios</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#FFC36B]'>Upgrade Simulation</Td>
                  <Td>UUPS proxy upgrade safety, storage layout compatibility</Td>
                </Tr>
              </TBody>
            </Table>
          </div>
        </section>
      </DocsLayout>
    </>
  )
}
