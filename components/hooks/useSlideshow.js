'use client'

import { useState, useEffect, useCallback } from 'react'

export function useSlideshow(images, interval = 3000) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(false)

    const getRandomNextIndex = useCallback((current, total) => {
        let next
        do {
            next = Math.floor(Math.random() * total)
        } while (next === current && total > 1)
        return next
    }, [])

    useEffect(() => {
        if (!images || images.length === 0) return

        const timer = setInterval(() => {
            setIsTransitioning(true)
            setTimeout(() => {
                setCurrentIndex(prev => getRandomNextIndex(prev, images.length))
                setIsTransitioning(false)
            }, 300)
        }, interval)

        return () => clearInterval(timer)
    }, [images, interval, getRandomNextIndex])

    return {
        currentImage: images?.[currentIndex] ?? null,
        currentIndex,
        isTransitioning
    }
}
