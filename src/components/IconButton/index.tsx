import * as React from 'react'
import { cn } from '@/utils/index'

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name: string
  disabled?: boolean
  onClick?: (e?: any) => any
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, name, disabled, onClick, ...props }) => {
    const handleOnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (disabled) return
      onClick && onClick(e)
    }
    return (
      <button
        className={cn('icon', name ? 'icon-' + name : '', disabled ? 'disabled' : '', className)}
        onClick={e => handleOnClick(e)}
        {...props}
      ></button>
    )
  },
)
IconButton.displayName = 'IconButton'

export default IconButton
