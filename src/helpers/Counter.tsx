'use client'

import { useEffect, useState, useRef } from 'react'

interface CounterProps {
	end: number
	duration?: number
}

export const Counter = ({ end, duration = 2000 }: CounterProps) => {
	const [count, setCount] = useState(0)
	const [visible, setVisible] = useState(false)
	const ref = useRef<HTMLSpanElement>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true)
				}
			},
			{ threshold: 0.3 }
		)
		if (ref.current) {
			observer.observe(ref.current)
		}

		return () => observer.disconnect()
	}, [])

	useEffect(() => {
		if (!visible) return
		let start = 0
		const incrementTime = 16
		const totalSteps = duration / incrementTime
		const step = end / totalSteps

		const counter = setInterval(() => {
			start += step
			if (start >= end) {
				start = end
				clearInterval(counter)
			}
			setCount(Math.floor(start))
		}, incrementTime)

		return () => clearInterval(counter)
	}, [visible, end, duration])

	return <span ref={ref}>{count.toLocaleString()}</span>
}
