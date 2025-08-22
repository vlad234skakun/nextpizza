const SearchInput = ( ) => { 
	return ( 
		<div className='h-11 flex-1' >
		<input
          className="rounded-2xl outline-none h-full w-full bg-gray-50 pl-11"
          type="text"
          placeholder="Найти пиццу..."
        />
		</div>
	)
}

export default SearchInput