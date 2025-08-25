"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { categories } from '../../../lib/categories'
import { cn } from '../../../lib/utils'

const Categories = () => {
const pathname = usePathname()
console.log(pathname)

	const element = categories.map((item) => (
		<li key={item.id}  >
			<Link href={item.href} className={cn('py-[16px] px-[10px] rounded-2xl',
      pathname === item.href ? "bg-white shadow" : "",
      'hover:shadow hover:bg-white')}>
			{item.name}
			</Link>
		</li>
	))

	return ( 
		<div className='flex bg-[var(--gray-color)] py-[19px] px-[29px]'>
			<ul className='flex gap-[20px]' >
				{element}
			</ul>
		</div>
		
	)
}

export default Categories