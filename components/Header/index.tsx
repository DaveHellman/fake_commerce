import Link from 'next/link'
import Brand from '../Brand'
import Navlink from './Navlink'

function Header() {
  return (
    <header className='relative flex w-full justify-center border-b-2 border-[#F3F3F3] py-8'>
      <div className='mx-20 flex w-full max-w-screen-2xl items-center justify-between'>
        <Link href='/'>
          <Brand />
        </Link>
        <nav className='flex gap-14'>
          <Navlink href='/electronics' value='Electronics' />
          <Navlink href='/jewelery' value='Jewelery' />
          <Navlink href='/clothing/men' value="Men's clothing" />
          <Navlink href='/clothing/women' value="Women's clothing" />
        </nav>
        <div className='flex w-40'></div>
      </div>
    </header>
  )
}

export default Header
