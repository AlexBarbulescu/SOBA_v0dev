'use client'

import { useState } from 'react'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

const faqData = [
  {
    question: "Do you have a Roadmap?",
    answer: (
      <ul className="list-disc pl-5">
        <li>Initial fair launch on Pump Fun and Raydium listing</li>
        <li>Marketing</li>
        <li>Coinmarketcap and Coingecko Listing</li>
        <li>Releasing our sexy $SOBA NFTs</li>
        <li>Listing on other Exchanges</li>
      </ul>
    )
  },
  {
    question: "How do I get a $SOBA?",
    answer: "Swap SOL for SOBA."
  },
  {
    question: "When the Token Launched?",
    answer: "We Launched on 13 May 2024"
  },
  {
    question: "Whats the reason?",
    answer: "Even him doesn't know why. Just a bastard!"
  }
]

export default function FAQ() {
  return (
    <div className="faq common-padding pb-0 position-relative">
      <div className="container">
        <div className="justify-content-center row">
          <div className="col-md-10 col-12">
            <div className="common-title gap-4 d-flex align-items-center justify-content-between">
              <h2 className="mb-0 text-uppercase">FAQ</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>
                    {typeof item.answer === 'string' ? <p>{item.answer}</p> : item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}

