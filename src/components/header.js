import { Link } from 'gatsby';
import React from 'react';
import tw from 'twin.macro';

function NavLink(props) {
  return (
    <Link
      {...props}
      css={tw`p-1 hover:text-red-800`}
      getProps={({ isCurrent }) => {
        if (isCurrent) {
          return {
            style: tw`border-b-2 border-gray-800 hover:text-gray-800`,
          };
        }
      }}
    />
  );
}

function SiteNav() {
  return (
    <ul css={tw`flex space-x-4 list-none`}>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/follow">Follow</NavLink>
      </li>
    </ul>
  );
}

function Header() {
  return (
    <header css={tw`h-32 flex justify-between items-center`}>
      <div css={tw`px-8`}>
        <Link
          css={tw`
            border-b-2
            border-red-800
            font-thin
            py-1
            text-4xl
            tracking-wide
            hover:text-red-800
          `}
          to="/"
        >
          andrew t. poe
        </Link>
      </div>
      <div css={tw`px-8`}>
        <SiteNav />
      </div>
    </header>
  );
}

export default Header;
