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
        navItems={[
          { label: "Overview", href: "#overview" },
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
          </div>
          <p className='text-lg leading-relaxed max-w-4xl text-[#E5E5E5]'>
            A production-ready DeFi lending protocol built with Solidity 0.8.30
            and Foundry, featuring UUPS upgradeable contracts, multi-sig
            governance with Timelock, and comprehensive decimal normalization.
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
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='blue'>
                <Heading level='h4' color='accent-blue' className='mb-3'>
                  Multi-Collateral Support
                </Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  Whitelisted ERC20 tokens as collateral with health factor-based
                  system preventing over-leveraging.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='green'>
                <Heading level='h4' color='accent-green' className='mb-3'>
                  Jump Rate Model
                </Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  Dynamic interest rates (2%-60% APR) based on utilization with
                  10% protocol fee on interest revenue.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='purple'>
                <Heading level='h4' color='accent-purple' className='mb-3'>
                  Automated Liquidations
                </Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  5% liquidation bonus protects lenders with bad debt tracking
                  and systematic management.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='blue'>
                <Heading level='h4' color='accent-blue' className='mb-3'>
                  ERC-4626 Vaults
                </Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  Compliant vault tokens for standardized yield bearing with
                  strategy integration for idle capital optimization.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='green'>
                <Heading level='h4' color='accent-green' className='mb-3'>
                  Chainlink Oracles
                </Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  Price feed integration with staleness validation and
                  18-decimal internal accounting.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='purple'>
                <Heading level='h4' color='accent-purple' className='mb-3'>
                  Gas Optimized
                </Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  ~140k gas per operation with complete event coverage and
                  custom errors for efficient handling.
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </section>

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
            className='grid grid-cols-1 md:grid-cols-2 gap-6'
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
                  <li>OpenZeppelin contracts integration</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='blue'>
                <Heading level='h4' color='accent-blue' className='mb-3'>
                  Timelock Governance
                </Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>TimelockController with 2-day delay</li>
                  <li>Emergency Guardian for instant pause</li>
                  <li>Multi-sig ready (Gnosis Safe compatible)</li>
                  <li>Borrow-only pause capability</li>
                </ul>
              </Card>
            </motion.div>
          </motion.div>
        </section>

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
            Mainnet deployment coming after security audit.
          </p>

          <div className='overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0 mb-8'>
            <Table>
              <THead>
                <Tr isHeader={true}>
                  <Th>Contract</Th>
                  <Th>Address</Th>
                </Tr>
              </THead>
              <TBody>
                <Tr>
                  <Td className='font-medium text-[#A7C8FF]'>Market</Td>
                  <Td className='font-mono text-xs'>0xB44dA96f11c429A89EA75BF820255d8698b86daF</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#6BFF95]'>Vault</Td>
                  <Td className='font-mono text-xs'>0x61048f410a148cfd999C078315e430925D45D27F</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#FFC36B]'>PriceOracle</Td>
                  <Td className='font-mono text-xs'>0x931C0e524c51518fC0B46B0c941996f6E612Ce76</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#C3A6FF]'>InterestRateModel</Td>
                  <Td className='font-mono text-xs'>0xaD00C98eEDfb769e1ae4c41c55a8B06178F2D650</Td>
                </Tr>
              </TBody>
            </Table>
          </div>

          <Heading level='h4' color='accent-blue' className='mb-4'>
            Test Assets (Mock)
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
                  <li>Emergency Guardian for instant borrowing pause</li>
                  <li>Borrow-only pause (other operations remain functional)</li>
                  <li>Chainlink staleness validation on price feeds</li>
                  <li>18-decimal internal accounting prevents rounding</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='red'>
                <Heading level='h4' color='accent-red' className='mb-3'>
                  Risk Mitigation
                </Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>Health factor prevents over-leveraging</li>
                  <li>5% liquidation bonus protects lenders</li>
                  <li>Bad debt systematic tracking and management</li>
                  <li>2-day Timelock on governance actions</li>
                </ul>
              </Card>
            </motion.div>
          </motion.div>
        </section>

        <section id='testing' className='py-20'>
          <Heading
            level='h2'
            color='accent-green'
            className='mb-6 flex items-center gap-3'
          >
            <TestIcon /> Testing & Validation
          </Heading>

          <p className='max-w-4xl mb-8 text-[#E5E5E5]'>
            91 passing tests across unit, integration, governance, and upgrade
            scenarios. Complete NatSpec documentation throughout.
          </p>

          <div className='overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0'>
            <Table>
              <THead>
                <Tr isHeader={true}>
                  <Th>Test Category</Th>
                  <Th>Count</Th>
                  <Th>Coverage</Th>
                </Tr>
              </THead>
              <TBody>
                <Tr>
                  <Td className='font-medium text-[#FFC36B]'>Market Unit Tests</Td>
                  <Td>24</Td>
                  <Td>Core market functionality</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#A7C8FF]'>Vault / ERC-4626</Td>
                  <Td>23</Td>
                  <Td>Vault compliance and operations</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#6BFF95]'>Proxy & Upgrades</Td>
                  <Td>20</Td>
                  <Td>UUPS proxy and upgrade mechanisms</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#C3A6FF]'>Governance</Td>
                  <Td>12</Td>
                  <Td>Timelock and guardian tests</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#FF6B6B]'>Integration</Td>
                  <Td>7</Td>
                  <Td>End-to-end scenarios</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#FFC36B]'>Upgrade Simulation</Td>
                  <Td>5</Td>
                  <Td>Upgrade safety validation</Td>
                </Tr>
              </TBody>
            </Table>
          </div>
        </section>
      </DocsLayout>
    </>
  )
}
