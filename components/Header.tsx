import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="heading">
      <div className="d-flex align-items-center justify-content-between container">
        <Link href="/" className="d-block logo">
          <Image src="/logo.png" alt="site-logo" width={150} height={50} />
        </Link>
        <nav className="heading-menu">
          {/* Navigation menu items */}
        </nav>
        <div className="heading-actions d-flex align-items-center flex-wrap">
          {/* Social links and mobile menu toggle */}
        </div>
      </div>
    </header>
  )
}

