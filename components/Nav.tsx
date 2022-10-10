import Link from 'next/link';
import navLinks from '../data/navlinks';

const Nav = () => {
  return (
    <nav>
      {navLinks.map(nav => (
        <Link href={nav.link} key={nav.title}>
          <a className={'mr-5'}>{nav.title}</a>
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
