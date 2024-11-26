import Link from 'next/link'

export default function CTA() {
  return (
    <div className="cta common-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="cta-wrap text-center">
              <h3 className="mb-4 pb-md-2 pb-lg-3 text-uppercase">
                Want to find out more?
              </h3>
              <Link 
                href="https://solbastard.com/docs/soba_whitepaper.pdf" 
                target="_blank" 
                className="base-btn d-inline-flex align-items-center"
              >
                Whitepaper
                <svg 
                  width="35" 
                  height="35" 
                  viewBox="0 0 35 35" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2"
                >
                  <rect x="0.674805" y="0.894531" width="33.65" height="34" rx="16.825" fill="white"/>
                  <path d="M18.0248 10.8945L24.3248 17.1945L18.0248 23.4945M23.4498 17.1945H10.6748" stroke="black" strokeWidth="2.1875" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

