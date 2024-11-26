import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Marquee from '@/components/Marquee'
import HowTo from '@/components/HowTo'
import Tokenomics from '@/components/Tokenomics'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <Marquee />
      <HowTo />
      <Tokenomics />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}

