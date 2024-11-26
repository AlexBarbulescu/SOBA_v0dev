import Image from 'next/image'
import Link from 'next/link'

const socialLinks = [
  { href: "https://t.me/SolBastardSOBA", icon: "telegram" },
  { href: "https://x.com/SolBastardSoba", icon: "twitter" },
  { href: "https://www.tiktok.com/@cryptobastard", icon: "tiktok" },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="justify-content-center row">
          <div className="col-lg-6 col-md-10 col-12">
            <div className="footer-wrap text-center">
              <Link href="/" className="d-block logo mx-auto mb-3 mb-md-4">
                <Image src="/logo.png" alt="site-logo" width={150} height={50} />
              </Link>
              <p className="mb-4">
                This is the dummy bastard who made this coin Accidently, but then ....He 
                decided to share it with a community of pure BASTARDS Now the police is 
                chasing him!!!!
              </p>
              <ul className="social-list d-flex align-items-center flex-wrap gap-2 gap-md-3 justify-content-center">
                {socialLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} target="_blank" className="social-link rounded-pill d-flex align-items-center justify-content-center">
                      <Image src={`/${link.icon}-icon.svg`} alt={link.icon} width={24} height={24} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copy">
        <div className="container">
          <div className="row">
            <div className="d-flex align-items-center justify-content-center justify-content-md-between gap-2 flex-wrap col-12">
              <p className="text-white fw-normal lh-base fs-6">Copyright 2024 contact@solbastard.com</p>
              <p className="text-white fw-normal lh-base fs-6">All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

