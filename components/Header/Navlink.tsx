'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavlinkProps {
  href: string
  value: string
}

function Navlink({ href, value }: NavlinkProps) {
  const currentRoute = usePathname()
  const isCurrentRoute = currentRoute === href
  return (
    <div className='relative h-full w-max'>
      <Link href={href} className='font-medium text-black'>
        {value}
      </Link>
      <div
        className='absolute top-[62px] h-1 w-full bg-black'
        style={isCurrentRoute ? { display: 'flex' } : { display: 'none' }}
      />
    </div>
  )
}

export default Navlink
