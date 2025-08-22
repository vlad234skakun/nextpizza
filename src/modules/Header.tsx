import Logo from '@/components/Logo';
import SearchInput from '@/components/SearchInput/SearchInput';
import Button from '@/components/Button/Button';
import CartIcon from '@/components/icons/CartIcon';

const Header = () => { 
	return ( 
		<header className='py-11 px-16 flex items-center justify-between gap-16 border-b border-[var(--border-color)]' >
			<Logo />
      <SearchInput />
			<div className='flex gap-3.5' >
      <Button variant={'outline'} size={"sm"}>Войти</Button>
			<Button variant={'outline'} size={"sm"}><CartIcon /></Button>
			</div>
		</header>
	)
};
export default Header