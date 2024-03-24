import Link from 'next/link';

const links = [
  { href: '/chat', label: 'chat Section' },
  { href: '/tours', label: 'find tours' },
  { href: '/tours/new-tour', label: 'Generate new tour' },
  { href: '/profile', label: 'My profile' },
];

const NavLinks = () => {
  return (
    <ul className='menu text-base-content'>
      {links.map((link) => {
        return (
          <li key={link.href}>
            <Link href={link.href} className='capitalize mt-2'>
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default NavLinks;
