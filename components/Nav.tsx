import React from "react";
import Link from "next/link";

interface LinksType {
  href: string;
  label: string;
  key?: string;
}

const links: LinksType[] = [
  {
    href: "https://github.com/segmentio/create-next-app",
    label: "Github",
    key: ""
  }
].map(link => {
  const props = link;
  props.key = `nav-link-${link.href}-${link.label}`;
  return props;
});

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link prefetch href="/">
          <a>Home</a>
        </Link>
      </li>
      <ul>
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <Link href={href}>
              <a>{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </ul>

    <style jsx>
      {`
        :global(body) {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
        }
        nav {
          text-align: center;
        }
        ul {
          display: flex;
          justify-content: space-between;
        }
        nav > ul {
          padding: 4px 16px;
        }
        li {
          display: flex;
          padding: 6px 8px;
        }
        a {
          color: #067df7;
          text-decoration: none;
          font-size: 13px;
        }
      `}
    </style>
  </nav>
);

export default Nav;
