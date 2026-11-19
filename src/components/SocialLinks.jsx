import socials from '../assets/data/socials';
import SmartLink from './SmartLink';

export default function SocialLinks() {
  return (
    <ul>
      {socials.map(({ label, url, Icon }) => (
        <li key={label}>
          <SmartLink href={url} aria-label={label}>
            <Icon />
          </SmartLink>
        </li>
      ))}
    </ul>
  );
}
