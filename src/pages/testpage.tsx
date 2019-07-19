import React from 'react';
import { NextComponentType } from 'next';
import Link from 'next/link';

import Helmet from 'components/Helmet';

const Test: NextComponentType = () => (
  <div className="row">
    <Helmet title="Test" />
    <Link href="/">
      <a className="card">
        <h3>go Home</h3>
        <p>route another page</p>
      </a>
    </Link>
    <Link href="/testpage" shallow>
      <a className="card">
        <h3>go This Page through shallow</h3>
        <p>route this page - could not pass getInitialProps</p>
      </a>
    </Link>
    <Link href="/testpage">
      <a className="card">
        <h3>go This Page default route</h3>
        <p>route this page</p>
      </a>
    </Link>
    <style jsx>
      {`
        .row {
          max-width: 880px;
          margin: 80px auto 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .card {
          padding: 18px 18px 24px;
          width: 220px;
          text-align: left;
          text-decoration: none;
          color: #434343;
          border: 1px solid #9b9b9b;
        }
        .card:hover {
          border-color: #067df7;
        }
        .card h3 {
          margin: 0;
          color: #067df7;
          font-size: 18px;
        }
        .card p {
          margin: 0;
          padding: 12px 0 0;
          font-size: 13px;
          color: #333;
        }
      `}
    </style>
  </div>
);

Test.getInitialProps = context => {
  console.log(context.asPath);
  return {};
};

export default Test;
