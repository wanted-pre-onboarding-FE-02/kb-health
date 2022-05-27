import HealthMain from '../components/HealthCareMain/HealthMain';
import styles from './healthPage.module.scss';

const HealthPage = () => {
  return (
    <div className={styles.app}>
      <HealthMain />
    </div>
  );
};

export default HealthPage;
