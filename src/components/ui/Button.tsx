import React from 'react'

interface ButtonProps {
  title?: string
  theme?: 'dark' | 'light'
  placeholder?: string
  effect?: '3d' | 'realistic' | 'normal'
  variant?: 'text' | 'contained' | 'outlined'
  disabled?: boolean
  link?: string
  color?: 'success' | 'error' | 'normal'
  onClick: () => void
}

const Button: React.FC<ButtonProps> = ({
  title = '',
  theme = 'light',
  placeholder = '',
  effect = 'normal',
  variant = 'contained',
  disabled = false,
  link,
  color = 'normal',
  onClick,
}) => {
  const buttonClasses = `button 
    ${theme === 'dark' ? 'dark-theme' : 'light-theme'} 
    ${variant === 'contained' ? 'contained' : variant === 'outlined' ? 'outlined' : 'text'} 
    ${color === 'success' ? 'success' : color === 'error' ? 'error' : ''} 
    ${disabled ? 'disabled' : ''}`

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick()
    }
  }

  return (
    <button className={ buttonClasses } onClick={ handleClick } disabled={ disabled }>
      { title || placeholder }
    </button>
  )
}

export default Button