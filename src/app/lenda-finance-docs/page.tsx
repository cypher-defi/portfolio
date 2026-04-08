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

import {
  SecurityIcon,
  TestIcon,
  BankIcon,
  LendingIcon,
  CodeIcon,
  ArchitectureIcon
} from "@/components/icons"

export default function LendaFinanceDocs() {
  return (
    <>
      <Navigation
        variant='docs'
        protocolName='Lenda Finance'
        protocolIcon={<LendingIcon />}
        githubLink='https://github.com/Enricrypto/lenda_finance'
        liveUrl='https://lenda-finance.vercel.app/'
        navItems={[
          { label: "Overview", href: "#overview" },
          { label: "Architecture", href: "#architecture" },
          { label: "API", href: "#api" },
          { label: "Data Model", href: "#data-model" },
          { label: "Deployment", href: "#deployment" }
        ]}
      />

      <DocsLayout>
        <header className='space-y-4 pt-6 pb-16 border-t border-white/5'>
          <div className='flex items-center gap-4 flex-wrap'>
            <Heading
              level='display-lg'
              color='accent-green'
              className='mb-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl'
            >
              Lenda Finance
            </Heading>
            <span className='px-3 py-1 bg-[rgba(107,255,149,0.1)] border border-[rgba(107,255,149,0.3)] rounded-full text-sm text-[#6BFF95]'>
              Full Stack
            </span>
            <span className='px-3 py-1 bg-[rgba(107,255,149,0.1)] border border-[rgba(107,255,149,0.3)] rounded-full text-sm text-[#6BFF95]'>
              Live on Vercel
            </span>
          </div>
          <p className='text-lg leading-relaxed max-w-4xl text-[#E5E5E5]'>
            A full-stack lending platform where users deposit real-world
            collateral (property, crypto, vehicles), borrow credit against it,
            and track their financial position in real time. Built with a
            FastAPI backend on PostgreSQL/AWS RDS and a Next.js 16 dashboard
            with TanStack Query and NextAuth.js.
          </p>

          <div className='flex flex-wrap gap-2 pt-4'>
            <a
              href='#'
              className='px-3 py-1 bg-[rgba(107,255,149,0.1)] border border-[rgba(107,255,149,0.3)] rounded-full text-sm text-[#6BFF95] hover:bg-[rgba(107,255,149,0.2)] transition'
            >
              FastAPI
            </a>
            <a
              href='#'
              className='px-3 py-1 bg-[rgba(167,200,255,0.1)] border border-[rgba(167,200,255,0.3)] rounded-full text-sm text-[#A7C8FF] hover:bg-[rgba(167,200,255,0.2)] transition'
            >
              Next.js 16
            </a>
            <a
              href='#'
              className='px-3 py-1 bg-[rgba(167,200,255,0.1)] border border-[rgba(167,200,255,0.3)] rounded-full text-sm text-[#A7C8FF] hover:bg-[rgba(167,200,255,0.2)] transition'
            >
              TypeScript
            </a>
            <a
              href='#'
              className='px-3 py-1 bg-[rgba(107,255,149,0.1)] border border-[rgba(107,255,149,0.3)] rounded-full text-sm text-[#6BFF95] hover:bg-[rgba(107,255,149,0.2)] transition'
            >
              PostgreSQL / AWS RDS
            </a>
            <a
              href='#'
              className='px-3 py-1 bg-[rgba(195,166,255,0.1)] border border-[rgba(195,166,255,0.3)] rounded-full text-sm text-[#C3A6FF] hover:bg-[rgba(195,166,255,0.2)] transition'
            >
              TanStack Query
            </a>
            <a
              href='#'
              className='px-3 py-1 bg-[rgba(195,166,255,0.1)] border border-[rgba(195,166,255,0.3)] rounded-full text-sm text-[#C3A6FF] hover:bg-[rgba(195,166,255,0.2)] transition'
            >
              NextAuth.js
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
            color='accent-green'
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
              <Card glow='green' className='h-full'>
                <Heading level='h4' color='accent-green' className='mb-3'>
                  Real-World Collateral
                </Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  Users deposit property, crypto, or vehicles as collateral.
                  Each asset type carries its own depreciation rate: property
                  1%, crypto 5%, car 10%.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }} className='h-full'>
              <Card glow='blue' className='h-full'>
                <Heading level='h4' color='accent-blue' className='mb-3'>
                  Credit Against Collateral
                </Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  Available credit equals total deposited assets minus
                  outstanding loans. Users can only borrow up to their
                  available credit. Default interest rate: 5%.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }} className='h-full'>
              <Card glow='purple' className='h-full'>
                <Heading level='h4' color='accent-purple' className='mb-3'>
                  Financial Position Tracking
                </Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  Real-time dashboard tracks each user&apos;s position : 
                  collateral value, outstanding debt, available credit, and
                  repayment history across all loans.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }} className='h-full'>
              <Card glow='green' className='h-full'>
                <Heading level='h4' color='accent-green' className='mb-3'>
                  Loan Lifecycle Management
                </Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  Full loan lifecycle: pending → approved → repaid. Supports
                  partial and full repayments, plus batch repayment across
                  multiple loans in a single request.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }} className='h-full'>
              <Card glow='blue' className='h-full'>
                <Heading level='h4' color='accent-blue' className='mb-3'>
                  Layered Architecture
                </Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  Clean separation of concerns: Controller (endpoints) →
                  Service (business logic) → Repository (DB queries). Pydantic
                  schemas enforce request/response validation throughout.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }} className='h-full'>
              <Card glow='purple' className='h-full'>
                <Heading level='h4' color='accent-purple' className='mb-3'>
                  Secure Authentication
                </Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  NextAuth.js v4 with Credentials provider and JWT sessions.
                  Passwords hashed with Passlib + bcrypt. Auth-protected
                  dashboard route group via Next.js middleware.
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </section>

        {/* ARCHITECTURE */}
        <section id='architecture' className='py-20 border-t border-white/5'>
          <Heading
            level='h2'
            color='accent-blue'
            className='mb-4 flex items-center gap-3'
          >
            <ArchitectureIcon /> Architecture
          </Heading>
          <p className='max-w-4xl mb-8 text-[#E5E5E5]'>
            The system is split into two independently deployable services: a
            FastAPI REST API handling all business logic and persistence, and a
            Next.js 16 dashboard that consumes the API via an Axios service
            layer and TanStack Query for server state management.
          </p>

          <motion.div
            variants={staggerContainer}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-10'
          >
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='green'>
                <Heading level='h4' color='accent-green' className='mb-3'>
                  Backend: FastAPI
                </Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li><code className='text-[#6BFF95]'>main.py</code>: Controller layer (all endpoints)</li>
                  <li><code className='text-[#6BFF95]'>service.py</code>: Business logic</li>
                  <li><code className='text-[#6BFF95]'>repository.py</code>: Database queries</li>
                  <li><code className='text-[#6BFF95]'>models.py</code>: SQLAlchemy ORM models</li>
                  <li><code className='text-[#6BFF95]'>schemas.py</code>: Pydantic request/response schemas</li>
                  <li><code className='text-[#6BFF95]'>rules.py</code>: Business rules (asset types, statuses)</li>
                  <li>Alembic for database migrations</li>
                  <li>Pytest test suite</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='blue'>
                <Heading level='h4' color='accent-blue' className='mb-3'>
                  Frontend: Next.js 16
                </Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>Auth-protected <code className='text-[#A7C8FF]'>(dashboard)</code> route group</li>
                  <li>Pages: Overview, Users, Assets, Loans, Settings</li>
                  <li>TanStack Query hooks for server state</li>
                  <li>Axios service layer for all API calls</li>
                  <li>Recharts for data visualizations</li>
                  <li>Tailwind CSS v4 + Solar icons (Iconify)</li>
                  <li>Sonner toast notifications</li>
                  <li>NextAuth middleware proxy for route protection</li>
                </ul>
              </Card>
            </motion.div>
          </motion.div>

          <Heading level='h4' color='accent-green' className='mb-4'>
            Tech Stack
          </Heading>
          <div className='overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0'>
            <Table>
              <THead>
                <Tr isHeader={true}>
                  <Th>Layer</Th>
                  <Th>Technology</Th>
                </Tr>
              </THead>
              <TBody>
                <Tr>
                  <Td className='font-medium text-[#6BFF95]'>API Framework</Td>
                  <Td>FastAPI</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#6BFF95]'>ORM</Td>
                  <Td>SQLAlchemy + Alembic migrations</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#6BFF95]'>Validation</Td>
                  <Td>Pydantic (request/response + settings)</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#6BFF95]'>Database</Td>
                  <Td>PostgreSQL on AWS RDS</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#6BFF95]'>Auth (backend)</Td>
                  <Td>Passlib + bcrypt (password hashing)</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#A7C8FF]'>Frontend Framework</Td>
                  <Td>Next.js 16: App Router</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#A7C8FF]'>Language</Td>
                  <Td>TypeScript</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#A7C8FF]'>Styling</Td>
                  <Td>Tailwind CSS v4</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#A7C8FF]'>State Management</Td>
                  <Td>TanStack Query (server state)</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#A7C8FF]'>Auth (frontend)</Td>
                  <Td>NextAuth.js v4: Credentials + JWT</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#A7C8FF]'>Charts</Td>
                  <Td>Recharts</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#A7C8FF]'>HTTP Client</Td>
                  <Td>Axios</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#A7C8FF]'>Deployment</Td>
                  <Td>Vercel (frontend)</Td>
                </Tr>
              </TBody>
            </Table>
          </div>
        </section>

        {/* API */}
        <section id='api' className='py-20 border-t border-white/5'>
          <Heading
            level='h2'
            color='accent-purple'
            className='mb-4 flex items-center gap-3'
          >
            <CodeIcon /> API Reference
          </Heading>
          <p className='max-w-4xl mb-8 text-[#E5E5E5]'>
            All endpoints are defined in the FastAPI backend. Authentication
            uses a POST to <code className='text-[#A7C8FF]'>/auth/login</code>{" "}
            which returns a token used for protected routes.
          </p>

          <div className='overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0'>
            <Table>
              <THead>
                <Tr isHeader={true}>
                  <Th>Method</Th>
                  <Th>Endpoint</Th>
                  <Th>Description</Th>
                </Tr>
              </THead>
              <TBody>
                <Tr>
                  <Td className='text-[#FFC36B]'>POST</Td>
                  <Td className='font-mono text-xs text-[#A7C8FF]'>/auth/login</Td>
                  <Td>Authenticate user (email + password)</Td>
                </Tr>
                <Tr>
                  <Td className='text-[#6BFF95]'>POST</Td>
                  <Td className='font-mono text-xs text-[#A7C8FF]'>/users</Td>
                  <Td>Register a new user</Td>
                </Tr>
                <Tr>
                  <Td className='text-[#A7C8FF]'>GET</Td>
                  <Td className='font-mono text-xs text-[#A7C8FF]'>/users</Td>
                  <Td>List all users</Td>
                </Tr>
                <Tr>
                  <Td className='text-[#A7C8FF]'>GET</Td>
                  <Td className='font-mono text-xs text-[#A7C8FF]'>/users/{`{user_id}`}</Td>
                  <Td>Get user by ID</Td>
                </Tr>
                <Tr>
                  <Td className='text-[#6BFF95]'>POST</Td>
                  <Td className='font-mono text-xs text-[#A7C8FF]'>/assets</Td>
                  <Td>Deposit a new asset</Td>
                </Tr>
                <Tr>
                  <Td className='text-[#A7C8FF]'>GET</Td>
                  <Td className='font-mono text-xs text-[#A7C8FF]'>/assets</Td>
                  <Td>List all assets</Td>
                </Tr>
                <Tr>
                  <Td className='text-[#6BFF95]'>POST</Td>
                  <Td className='font-mono text-xs text-[#A7C8FF]'>/borrow</Td>
                  <Td>Request a loan against available credit</Td>
                </Tr>
                <Tr>
                  <Td className='text-[#A7C8FF]'>GET</Td>
                  <Td className='font-mono text-xs text-[#A7C8FF]'>/loans</Td>
                  <Td>List all loans</Td>
                </Tr>
                <Tr>
                  <Td className='text-[#6BFF95]'>POST</Td>
                  <Td className='font-mono text-xs text-[#A7C8FF]'>/repay/{`{loan_id}`}</Td>
                  <Td>Repay a loan (partial or full)</Td>
                </Tr>
                <Tr>
                  <Td className='text-[#6BFF95]'>POST</Td>
                  <Td className='font-mono text-xs text-[#A7C8FF]'>/repay/batch</Td>
                  <Td>Batch repay multiple loans</Td>
                </Tr>
                <Tr>
                  <Td className='text-[#A7C8FF]'>GET</Td>
                  <Td className='font-mono text-xs text-[#A7C8FF]'>/positions/{`{user_id}`}</Td>
                  <Td>Get user&apos;s full financial position</Td>
                </Tr>
              </TBody>
            </Table>
          </div>
        </section>

        {/* DATA MODEL */}
        <section id='data-model' className='py-20 border-t border-white/5'>
          <Heading
            level='h2'
            color='accent-green'
            className='mb-4 flex items-center gap-3'
          >
            <TestIcon /> Data Model
          </Heading>
          <p className='max-w-4xl mb-8 text-[#E5E5E5]'>
            Three core tables managed by SQLAlchemy ORM with Alembic
            migrations. All relationships are enforced at the database level
            with foreign key constraints.
          </p>

          <motion.div
            variants={staggerContainer}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-10'
          >
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='green'>
                <Heading level='h4' color='accent-green' className='mb-3'>
                  users
                </Heading>
                <ul className='space-y-1 text-sm text-[#E5E5E5]'>
                  <li><code className='text-[#6BFF95]'>id</code>: Primary key</li>
                  <li><code className='text-[#6BFF95]'>name</code>: Full name</li>
                  <li><code className='text-[#6BFF95]'>email</code>: Unique identifier</li>
                  <li><code className='text-[#6BFF95]'>password_hash</code>: bcrypt hash</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='blue'>
                <Heading level='h4' color='accent-blue' className='mb-3'>
                  assets
                </Heading>
                <ul className='space-y-1 text-sm text-[#E5E5E5]'>
                  <li><code className='text-[#A7C8FF]'>id</code>: Primary key</li>
                  <li><code className='text-[#A7C8FF]'>user_id</code>: FK → users</li>
                  <li><code className='text-[#A7C8FF]'>type</code>: property | crypto | car</li>
                  <li><code className='text-[#A7C8FF]'>value</code>: Deposited value</li>
                  <li><code className='text-[#A7C8FF]'>created_at</code>: Timestamp</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='purple'>
                <Heading level='h4' color='accent-purple' className='mb-3'>
                  loans
                </Heading>
                <ul className='space-y-1 text-sm text-[#E5E5E5]'>
                  <li><code className='text-[#C3A6FF]'>id</code>: Primary key</li>
                  <li><code className='text-[#C3A6FF]'>user_id</code>: FK → users</li>
                  <li><code className='text-[#C3A6FF]'>amount</code>: Loan principal</li>
                  <li><code className='text-[#C3A6FF]'>amount_repaid</code>: Running repayment</li>
                  <li><code className='text-[#C3A6FF]'>interest_rate</code>: Default 5%</li>
                  <li><code className='text-[#C3A6FF]'>status</code>: pending | approved | repaid</li>
                  <li><code className='text-[#C3A6FF]'>created_at</code>: Timestamp</li>
                </ul>
              </Card>
            </motion.div>
          </motion.div>

          <Heading level='h4' color='accent-blue' className='mb-4'>
            Business Rules
          </Heading>
          <div className='overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0'>
            <Table>
              <THead>
                <Tr isHeader={true}>
                  <Th>Rule</Th>
                  <Th>Detail</Th>
                </Tr>
              </THead>
              <TBody>
                <Tr>
                  <Td className='font-medium text-[#6BFF95]'>Allowed asset types</Td>
                  <Td>property, crypto, car</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#A7C8FF]'>Depreciation: property</Td>
                  <Td>1% per period</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#A7C8FF]'>Depreciation: crypto</Td>
                  <Td>5% per period</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#A7C8FF]'>Depreciation: car</Td>
                  <Td>10% per period</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#FFC36B]'>Default interest rate</Td>
                  <Td>5%</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#C3A6FF]'>Available credit formula</Td>
                  <Td>Total deposited assets − total outstanding loans</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#FF6B6B]'>Borrow limit</Td>
                  <Td>Users cannot borrow beyond their available credit</Td>
                </Tr>
              </TBody>
            </Table>
          </div>
        </section>

        {/* DEPLOYMENT */}
        <section id='deployment' className='py-20'>
          <Heading
            level='h2'
            color='accent-green'
            className='mb-6 flex items-center gap-3'
          >
            <SecurityIcon /> Deployment
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
                  Frontend
                </Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>Deployed on Vercel (auto-deploy on push)</li>
                  <li>
                    Live at{" "}
                    <a
                      href='https://lenda-finance.vercel.app/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-[#6BFF95] hover:underline'
                    >
                      lenda-finance.vercel.app
                    </a>
                  </li>
                  <li>Next.js 16 App Router + Turbopack</li>
                  <li>Environment: NEXT_PUBLIC_API_URL, NEXTAUTH_URL, NEXTAUTH_SECRET</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='blue'>
                <Heading level='h4' color='accent-blue' className='mb-3'>
                  Backend & Database
                </Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>FastAPI served via Uvicorn</li>
                  <li>PostgreSQL on AWS RDS</li>
                  <li>Alembic migrations for schema management</li>
                  <li>Environment: DATABASE_URL, SECRET_KEY, FRONTEND_URL</li>
                </ul>
              </Card>
            </motion.div>
          </motion.div>
        </section>
      </DocsLayout>
    </>
  )
}
