import styles from './healthPage.module.scss';
import HealthCareTitle from '../components/HealthCareTitle/HealthCareTitle';

import HealthCareList from '../components/HeathCareList/HealthCareList';

const HealthPage = () => {
  return (
    <div className={styles.app}>
      <HealthCareTitle />
      <HealthCareList />
    </div>
  );
};

export default HealthPage;
