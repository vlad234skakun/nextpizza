"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { categories } from '../../lib/categories'
import { cn } from '../../lib/utils'

const Categories = () => {
const pathname = usePathname()
console.log(pathname)

	const element = categories.map((item) => (
		<li key={item.id}  >
			<Link href={item.href} className={cn('py-[16px] px-[10px] rounded-2xl transition-all duration-300',
      pathname === item.href ? "bg-white text-[var(--orange-color)] shadow" : "",
      'hover:shadow hover:bg-white')}>
			{item.name}
			</Link>
		</li>
	))

	return ( 
		<div className='my-[40px] mx-[64px]' >
		<h1 className='font-extrabold' >Все Пицци</h1>
		<div className='flex bg-[var(--gray-color)] py-[19px] px-[29px]'>
			<ul className='flex gap-[20px]' >
				{element}
			</ul>
		</div>
		</div>
	)
}

export default Categories