'use client'
import { useTheme } from 'next-themes'
import { Switch } from './switch'

export default function ThemeSwitch() {
    const { setTheme, resolvedTheme } = useTheme()
    const toggleTheme = () => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
    }
    return (
        <Switch onClick={toggleTheme} className='!bg-foreground duration-500' />
    )
}