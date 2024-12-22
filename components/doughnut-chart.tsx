"use client"

import { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'

interface DoughnutProps {
  data: {
    labels: string[]
    datasets: {
      data: number[]
      backgroundColor: string[]
    }[]
  }
}

export function Doughnut({ data }: DoughnutProps) {
  const chartRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (chartRef.current) {
      const chart = new Chart(chartRef.current, {
        type: 'doughnut',
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'bottom',
            },
          },
        },
      })

      return () => {
        chart.destroy()
      }
    }
  }, [data])

  return <canvas ref={chartRef} />
}

