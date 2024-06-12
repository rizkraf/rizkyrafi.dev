import {
  SiGithub,
  SiGmail,
  SiLinkedin,
  SiTelegram
} from '@icons-pack/react-simple-icons';
import type { IconType } from '@icons-pack/react-simple-icons';

export default function Links() {
  const links: { icon: IconType; href: string }[] = [
    {
      icon: SiGmail,
      href: 'mailto:azhararizkyrafi@gmail.com',
    },
    {
      icon: SiGithub,
      href: 'https://github.com/rizkraf',
    },
    {
      icon: SiLinkedin,
      href: 'https://www.linkedin.com/in/rizkraf/',
    },
    {
      icon: SiTelegram,
      href: 'https://t.me/rizkraf',
    },
  ];

  return (
    <div className="mr-auto mt-20 flex w-full flex-wrap items-center gap-10">
      {links.map((link, id) => {
        return (
          <a target="_blank" key={id} href={link.href}>
            <link.icon title={link.href} />
          </a>
        );
      })}
    </div>
  );
}
