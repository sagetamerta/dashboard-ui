import clsx from 'clsx'
import React from 'react'

interface ButtonProps {
  variant?: 'contained' | 'outlined' | 'text-only'
  className?: string
  icon?: React.ReactNode
  iconClassName?: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: ([index]: any) => void
  disabled?: boolean
}

const IconButton: React.FC<ButtonProps> = ({
  variant = 'text-only',
  className,
  icon,
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
        'p-2 rounded-full hover:bg-slate-50 active:bg-slate-100',
        'transition-colors duration-300',
        disabled && [
          'bg-opacity-50 border-opacity-20 text-opacity-50 cursor-not-allowed'
        ],
        className
      )}
    >
      {icon && <span className={clsx(iconClassName)}>{icon}</span>}
    </button>
  )
}

export default IconButton
