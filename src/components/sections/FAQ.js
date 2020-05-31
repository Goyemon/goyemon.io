import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';

const FAQS = [
  {
    title: 'What are backup words?',
    content: () => (
      <>
        Backup words are the crypto equivalent of passwords in your bank. They
        are the only way to access your funds. You lose your assets if you lose
        the backup words. Beware that you cannot regenerate your backup words if
        you lose them.
      </>
    )
  },
  {
    title: 'Where is a private key stored?',
    content: () => (
      <>It is stored only in your device. We have no access to it.</>
    )
  },
  {
    title: 'What is a network fee?',
    content: () => (
      <>
        It is the fee that you pay for computation in the Ethereum network. It
        is collected by miners and we don't take any cut from it.
      </>
    )
  },
  // {
  //   title: 'What is a goyemon signature?',
  //   content: () => (
  //     <>
  //       As we build a product without charging anything to our customers, it is
  //       our challenge to grow without spending too much money on fancy
  //       marketing. Currently, all the transactions sent from Goyemon have the
  //       "Sent from Goyemon" signature to spread the words(as you can see in
  //       Etherscan). This costs only 0.00000408 which is about which is 0.00082
  //       USD(as of May 16, 2020).
  //     </>
  //   )
  // },
  {
    title: 'What is a slippage?',
    content: () => (
      <>
        A slippage protects you from volatility when you exchange currencies. By
        specifying how many percentage you are willing to tolerate, you can
        specify the minimum amount you get from a transaction. In case you
        cannot get the minimum amount, your transaction will fail.
      </>
    )
  },
  {
    title: 'How is yearly interest rate calculated in the Compound?',
    content: () => (
      <>
        The interest rate in the Compound changes every 15 seconds. Thus, we
        cannot accurately predict the yearly interest rate. We predict the
        interest rate from historical data.
      </>
    )
  }
];

const Faq = () => (
  <Section id="faq">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Frequently Asked Questions</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
