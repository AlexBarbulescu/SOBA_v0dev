'use client';
import { useState } from 'react';

const tokenomicsData = [
  { label: "Tax", value: "0%" },
  { label: "Total Supply", value: "1 BILLION" },
  { label: "Mint", value: "REVOKED" },
  { label: "Freeze", value: "REVOKED" },
  { label: "All Supply", value: "IN CIRCULATION" },
  { label: "Token Symbol", value: "$SOBA" },
];

export default function Tokenomics() {
  const [copied, setCopied] = useState(false);
  const contractAddress = "25p2BoNp6qrJH5As6ek6H7Ei495oSkyZd3tGb97sqFmH";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="tokenomics common-padding pb-0">
      <div className="container">
        <div className="justify-content-center row">
          <div className="col-lg-9 col-md-10 col-12">
            <h2 className="text-center mb-5">Tokenomics</h2>
          </div>
        </div>
        <div className="common-row row">
          {tokenomicsData.map((item, index) => (
            <div key={index} className="d-flex col-lg-4 col-md-6 col-12">
              <div className="tokenomics-item w-100 p-4">
                <span className="d-block mb-2 mb-md-3 text-uppercase">{item.label}</span>
                <h2 className="mb-0 lh-base text-uppercase">{item.value}</h2>
              </div>
            </div>
          ))}
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <div className="tokenomics-item p-4">
              <div className="token d-flex flex-wrap justify-content-between align-items-center">
                <div>
                  <span className="d-block mb-3">CONTRACT ADDRESS</span>
                  <p className="text-uppercase lh-base">{contractAddress}</p>
                </div>
                <button 
                  className="bg-primary text-white border-0 p-2 rounded"
                  onClick={copyToClipboard}
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

