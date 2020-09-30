import { Link } from 'gatsby';
import React from 'react';

import tw, { css } from 'twin.macro';

function NavLink(props) {
  const [current, setCurrent] = React.useState(false);
  const isLinkCurrent = ({ isCurrent }) => {
    if (isCurrent !== current) {
      setCurrent(isCurrent);
    }
  };

  return (
    <Link
      {...props}
      css={css`
        ${tw`p-1 hover:text-red-700`}
        ${current && tw`border-b-2 border-gray-700 hover:text-gray-700`}
      `}
      getProps={isLinkCurrent}
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
        <NavLink to="/">Follow Me</NavLink>
      </li>
    </ul>
  );
}

function Header() {
  return (
    <header css={tw`h-32 flex justify-between items-center`}>
      <div css={tw`px-8`}>
        <Link
          css={tw`font-thin text-4xl border-b-2 border-red-700 py-1 tracking-wide`}
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
