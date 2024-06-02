import { Copyright } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='container flex justify-between items-center text-sm py-6'>
        <Link className='hover:text-blue-600 hover:underline flex font-medium tracking-wide' to="/source" target='_blank'>/source</Link>
        <p className='font-medium flex items-center gap-1 tracking-wide'><Copyright size={16} /> 2024 by Heri Riyanto</p>
    </div>
  )
}
