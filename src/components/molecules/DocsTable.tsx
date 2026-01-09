"use client"

import React from "react"

export const Table: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className='overflow-x-auto my-6'>
    <table className='min-w-full divide-y divide-white/5 border border-white/5 rounded-lg'>
      {children}
    </table>
  </div>
)

export const THead: React.FC<React.PropsWithChildren> = ({ children }) => (
  <thead>{children}</thead>
)

export const Th: React.FC<React.PropsWithChildren> = ({ children }) => (
  <th className='px-6 py-3 text-left text-xs font-light uppercase tracking-wider text-[#A7C8FF] bg-[#1A1B1E]'>
    {children}
  </th>
)

export const TBody: React.FC<React.PropsWithChildren> = ({ children }) => (
  <tbody className='divide-y divide-white/5'>{children}</tbody>
)

interface TrProps {
  isHeader?: boolean
}

export const Tr: React.FC<React.PropsWithChildren<TrProps>> = ({
  children,
  isHeader = false
}) => {
  const rowClasses = isHeader
    ? "bg-[#1A1B1E]"
    : "hover:bg-white/[0.02] transition-colors duration-200"

  return <tr className={rowClasses}>{children}</tr>
}

interface TdProps {
  className?: string
}

export const Td: React.FC<React.PropsWithChildren<TdProps>> = ({
  children,
  className = ""
}) => (
  <td
    className={`px-6 py-4 whitespace-nowrap text-sm text-[#E5E5E5] font-light ${className}`}
  >
    {children}
  </td>
)
