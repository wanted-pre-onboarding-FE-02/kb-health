import heathData from '../data/healthData.json';

import BasicInfo from '../components/BasicInfo/BasicInfo';

import styles from './healthPage.module.scss';

const { sex, resHeight, age } = heathData.wxcResultMap.paramMap;

const HealthPage = () => {
  return (
    <div className={styles.app}>
      <div className={styles.inner}>
        <BasicInfo sex={sex} resHeight={resHeight} age={age} />
      </div>
    </div>
  );
};

export default HealthPage;
