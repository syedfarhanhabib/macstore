'use client'
import { useTheme } from 'next-themes'
import { useEffect } from 'react'

export default function ThemeSwitch({ defaultTheme = 'light' }: { defaultTheme?: 'light' | 'dark' }) {
    const { theme, setTheme } = useTheme()

    useEffect(() => {   
        setTheme(defaultTheme)
    }, [defaultTheme, setTheme, theme])

    return null  // No toggle switch is rendered, making the theme non-changeable.
}
