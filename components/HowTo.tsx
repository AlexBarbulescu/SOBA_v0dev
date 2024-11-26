import Image from 'next/image';

const steps = [
  {
    title: "Create a wallet",
    description: "Download Phantom wallet or your wallet of choice from the app store for free. Desktop users, download the Google Chrome extension by going to the Phantom app.",
    image: "/1.png"
  },
  {
    title: "Get some sol",
    description: "Have SOL in your wallet to switch to $SOBA. If you don't have any SOL, you can buy directly on Phantom, transfer from another wallet, or buy on another exchange and add it to your wallet.",
    image: "/2.png"
  },
  {
    title: "Go to Raydium",
    description: "Connect to Raydium or Jupiter. Go to raydium.io or jup.ag inside your Phantom app. Connect your wallet. Paste the $SOBA token address into Raydium or Jupiter, select the pair, and confirm.",
    image: "/3.png"
  },
  {
    title: "Swap SOl for SOBA",
    description: "Swap your SOL for $SOBA on Raydium or Jupiter. Ensure you have enough SOL to cover transaction fees. Confirm the transaction to complete the swap.",
    image: "/4.png"
  }
];

export default function HowTo() {
  return (
    <div className="howTo common-padding pb-0">
      <div className="container">
        <div className="justify-content-center row">
          <div className="col-lg-9 col-md-10 col-12">
            <h2 className="text-center mb-5">How To Buy</h2>
          </div>
        </div>
        <div className="common-row row">
          {steps.map((step, index) => (
            <div key={index} className="d-flex col-lg-3 col-md-6 col-12">
              <div className="howTo-item w-100">
                <div className="howTo-count fs-6 bg-primary text-white mb-3 mb-md-4 d-flex align-items-center justify-content-center">
                  {index + 1}
                </div>
                <h4 className="mb-2 pb-1 mb-md-3 pb-md-0">{step.title}</h4>
                <p>{step.description}</p>
                <Image src={step.image} alt={step.title} width={200} height={200} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

