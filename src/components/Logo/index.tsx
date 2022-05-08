import logo from '@/assets/logo/wku-logo.svg';

import styles from './index.less';

const Logo: React.FC = () => (
  <div className={styles.container}>
    <div>
      <object className={styles.logo} data={logo} type="image/svg+xml"></object>
    </div>
    <div className={styles.title}>集中订餐送餐系统</div>
  </div>
);

export default Logo;
