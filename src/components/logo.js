/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';

import LogoSvg from 'assets/images/logo';

export default function Logo({ isWhite, ...props }) {
  return (
    <Link path="/" sx={styles.logo} {...props}>
      <LogoSvg isWhite={isWhite} />
    </Link>
  );
}
const styles = {
  logo: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'inline-flex',
    svg: {
      height: 'auto',
      width: [150, null, '100%'],
    },
  },
};

