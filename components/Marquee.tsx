import Image from 'next/image';
import Link from 'next/link';

const marqueeItems = [
  { href: "https://coinmarketcap.com/currencies/sol-bastard/", imgSrc: "/2.png" },
  { href: "https://www.coingecko.com/en/coins/sol-bastard", imgSrc: "/3.png" },
  { href: "https://www.dextools.io/app/en/solana/pair-explorer/2zjiSTrub1KPtuJzDoRyXcUHFLLC5doUsmStyBi5SjXG?t=1717700292610", imgSrc: "/1.png" },
  { href: "https://dexscreener.com/solana/25p2bonp6qrjh5as6ek6h7ei495oskyzd3tgb97sqfmh", imgSrc: "/dexscreener.png" },
  { href: "https://x.com/SolBastardSoba", imgSrc: "/twitter.png" },
  { href: "https://t.me/SolBastardSOBA", imgSrc: "/telegram.png" },
  { href: "https://www.toobit.com/en-US/spot/SOBA_USDT", imgSrc: "/7.png" },
  { href: "https://coinpaprika.com/coin/soba-sol-bastard/", imgSrc: "/8.png" },
  { href: "https://coinranking.com/coin/iMJ1R3ZjI+solbastard-soba", imgSrc: "/9.png" },
];

export default function Marquee() {
  return (
    <div className="marquee-container">
      <div className="marquee">
        {marqueeItems.map((item, index) => (
          <Link key={index} href={item.href} target="_blank" className="marquee-item">
            <Image src={item.imgSrc} alt="" width={100} height={40} />
          </Link>
        ))}
      </div>
      <div className="marquee" aria-hidden="true">
        {marqueeItems.map((item, index) => (
          <Link key={index} href={item.href} target="_blank" className="marquee-item">
            <Image src={item.imgSrc} alt="" width={100} height={40} />
          </Link>
        ))}
      </div>
    </div>
  );
}

