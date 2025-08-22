import React from 'react'
import { FC } from 'react';
import { cn } from '../../../lib/utils';

	interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { 
	variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  children: React.ReactNode;
}

const base = 'inline-flex items-center justify-center whitespace-nowrap rounded-md active:translate-y-[1px] text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'

	const variants = { 
		default: 'bg-[var(--orange-color)] text-[var(--background-color)]',
		primary: 'bg-[var(--orange-color)] text-[var(--background-color)] hover:bg-[var(--orange-color)]/90',
		outline: 'bg-transparent border border-[var(--orange-color)] hover:bg-[var(--orange-color)] hover:text-[var(--background-color)]' ,
		secondary: 'bg-transparent border border-[var(--border-color)]'
	} as const

	const sizes = { 
		default: 'h-10 px-4 py-2',
    sm: 'h-9 rounded-md px-3',
    lg: 'h-11 rounded-md px-8',
    icon: 'h-10 w-10',
	} as const

const Button:FC<ButtonProps> = ({variant = 'default' , size = 'default' , children, ...props}) => {
	
	return ( 
		<button {...props} className={cn(base, variants[variant], sizes[size])} >
			{children}
		</button>
	)
};

export default Button;