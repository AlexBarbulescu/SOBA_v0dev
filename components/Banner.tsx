import Image from 'next/image'
import Link from 'next/link'

export default function Banner() {
  return (
    <div className="banner">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="banner-content">
              <h1 className="text-uppercase mb-4">Welcome to SOLBastard</h1>
              <p className="mb-4">$SOBA is a memecoin made for bastards.</p>
              <div className="banner-btn d-flex align-items-center gap-3">
                <Link href="https://magiceden.io/marketplace/solbastard" target="_blank" className="btn btn-primary">
                  SOBA NFTs
                </Link>
                <Link href="https://jup.ag/swap/SOL-SOBA" target="_blank" className="btn btn-outline-primary">
                  Buy $SOBA
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="banner-image">
              <Image 
                src="/images/soba-hero.png" 
                alt="SOBA Hero Image" 
                width={500} 
                height={500}
                layout="responsive"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

