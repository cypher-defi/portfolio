"use client"
import React from "react"

export const Logo: React.FC = () => {
  return (
    <svg
      viewBox='0 0 280 280'
      width='40'
      height='40'
      xmlns='http://www.w3.org/2000/svg'
    >
      <defs>
        <linearGradient id='tf' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop offset='0%' stopColor='#A7C8FF' stopOpacity={0.95} />
          <stop offset='100%' stopColor='#BFD9FF' stopOpacity={0.85} />
        </linearGradient>
        <linearGradient id='rf' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop offset='0%' stopColor='#A7C8FF' stopOpacity={0.7} />
          <stop offset='100%' stopColor='#8FB0FF' stopOpacity={0.6} />
        </linearGradient>
        <linearGradient id='lf' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop offset='0%' stopColor='#9BBBFF' stopOpacity={0.8} />
          <stop offset='100%' stopColor='#7FA0FF' stopOpacity={0.7} />
        </linearGradient>
      </defs>
      <g>
        <polygon
          points='80,100 140,70 200,100 140,130'
          fill='url(#tf)'
          stroke='#A7C8FF'
          strokeWidth={2.5}
          strokeLinejoin='round'
        />
        <polygon
          points='200,100 200,180 140,210 140,130'
          fill='url(#rf)'
          stroke='#A7C8FF'
          strokeWidth={2.5}
          strokeLinejoin='round'
        />
        <polygon
          points='80,100 80,180 140,210 140,130'
          fill='url(#lf)'
          stroke='#A7C8FF'
          strokeWidth={2.5}
          strokeLinejoin='round'
        />
      </g>
    </svg>
  )
}
