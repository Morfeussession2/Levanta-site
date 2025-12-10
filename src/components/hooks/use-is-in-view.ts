"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"

export interface UseIsInViewOptions {
  inView?: boolean
  inViewOnce?: boolean
  inViewMargin?: string
}

export function useIsInView(externalRef?: React.Ref<HTMLElement>, options: UseIsInViewOptions = {}) {
  const { inView = false, inViewOnce = true, inViewMargin = "0px" } = options
  const localRef = useRef<HTMLElement>(null)
  const [isInView, setIsInView] = useState(!inView)

  useEffect(() => {
    if (!inView) {
      setIsInView(true)
      return
    }

    const element = localRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (inViewOnce) {
            observer.disconnect()
          }
        } else if (!inViewOnce) {
          setIsInView(false)
        }
      },
      {
        rootMargin: inViewMargin,
      },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [inView, inViewOnce, inViewMargin])

  return { ref: localRef, isInView }
}
