import React from 'react'
import classNames from 'classnames'

import styles from './styles.module.scss'

interface ButtonProps {
  title?: string
  theme?: 'dark' | 'light'
  placeholder?: string
  effect?: '3d' | 'normal'
  variant?: 'text' | 'contained' | 'outlined'
  disabled?: boolean
  link?: string
  color?: 'success' | 'error' | 'normal'
  size?: 'small' | 'medium' | 'large'
  className?: string
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
  size = 'medium',
  color = 'normal',
  className,
  onClick,
}) => {
  const buttonClasses = classNames(styles.button, className, {
    [styles['dark-theme']]: theme === 'dark',
    [styles['light-theme']]: theme === 'light',
    [styles.small]: size === 'small',
    [styles.medium]: size === 'medium',
    [styles.large]: size === 'large',
    [styles.contained]: variant === 'contained',
    [styles.outlined]: variant === 'outlined',
    [styles.text]: variant === 'text',
    [styles.success]: color === 'success',
    [styles.error]: color === 'error',
    [styles.disabled]: disabled,
  })

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