import React from 'react';
import { Link } from 'gatsby';

import Layout from '@common/Layout';
import { Container } from '@components/global';

const Vision = () => (
  <Layout>
    <Container>
      <br />
      <br />
      <p>
        Half a decade ago I watched a documentary that changed the way I see the
        world. Inside Job managed to articulate the complex phenomena of the
        Financial Crisis while keeping the film entertaining.
      </p>
      <br />

      <p>
        Shocked and puzzled by the film, I was eager to learn more — and become
        more and more convinced that something was seriously wrong. Financial
        institutions, I was shocked to discover, weren’t actually doing good for
        society. And the government, to my dismay, was strongly tied with the
        corrupt financial institutions.
      </p>
      <br />

      <p>
        Ever since then, I was determined that I need to spend my life working
        to fix the shocking brokenness I’d discovered. And the best way to do
        that, I concluded, was to try to build a different financial system from
        scratch.
      </p>
      <br />

      <p>
        But how do we transform the financial system? We need to build a new
        system that is so attractive that people want to join.
      </p>
      <br />

      <p>
        This is a call for revolution — a revolution to reduce opaqueness in a
        financial system, to align incentives of players well in the system, and
        split them into manageable modules.
      </p>
      <br />

      <p>
        We are going to build infrastructure for new financial economy. Join us
        for the financial reformation.
      </p>
      <br />
      <br />
      <Link to="/">Go back to the homepage</Link>
    </Container>
  </Layout>
);

export default Vision;
