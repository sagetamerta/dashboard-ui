import clsx from 'clsx'
import React from 'react'

interface ButtonProps {
  fullWidth?: boolean
  variant?: 'contained' | 'outlined' | 'text-only'
  className?: string
  children?: React.ReactNode
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  iconClassName?: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: ([index]: any) => void
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
  fullWidth = false,
  variant = 'contained',
  className,
  children,
  startIcon,
  endIcon,
  iconClassName,
  type = 'button',
  onClick,
  disabled,
  ...props
}) => {
  return (
    <button
      {...props}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        fullWidth && 'w-full',
        'px-4 py-2 rounded-md',
        'flex items-center gap-2',
        'text-base font-medium',
        variant === 'contained'
          ? 'text-white bg-primary hover:bg-primary-dark active:bg-blue-700'
          : variant === 'outlined'
          ? 'text-gray bg-white hover:bg-gray-dark border border-border-gray active:bg-slate-100'
          : variant === 'text-only'
          ? 'text-primary hover:text-primary-dark active:text-blue-700'
          : null,
        disabled && [
          'active:border-b-4',
          'bg-opacity-50 border-opacity-20 text-opacity-50 cursor-not-allowed'
        ],
        className
      )}
    >
      {startIcon && <span className={clsx(iconClassName)}>{startIcon}</span>}
      <span>{children}</span>
      {endIcon && <span className={clsx(iconClassName)}>{endIcon}</span>}
    </button>
  )
}

export default Button
