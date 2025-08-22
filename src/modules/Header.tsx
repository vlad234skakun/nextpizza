import Logo from '@/components/Logo';
import SearchInput from '@/components/SearchInput/SearchInput';
import Button from '@/components/Button/Button';

const Header = () => { 
	return ( 
		<header className='my-11 mx-16 flex items-center' >
			<Logo />
      <SearchInput />
      <Button variant={"outline"} size={"sm"}>Войти</Button>
		</header>
	)
};
export default Header