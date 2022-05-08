import Logo from '@/components/Logo';
import { CSSProperties } from '@/interfaces/common';

import styles from './index.less';

interface Props {
  upper?: React.ReactNode;
  lower?: React.ReactNode;
  style?: CSSProperties<'--margin-top' | '--margin-bottom'>;
}

const HomeLayout: React.FC<Props> = ({ upper, lower, style }) => (
  <>
    <div className={styles.container} style={style}>
      <div className={styles.upper}>{upper ? upper : <Logo />}</div>
      <div className={styles.lower}>{lower}</div>
    </div>
  </>
);

export default HomeLayout;
