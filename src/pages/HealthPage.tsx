import heathData from '../data/healthData.json';

import BasicInfo from '../components/BasicInfo/BasicInfo';
import HealthMain from '../components/HealthCareMain/HealthMain';

import HealthScoreYearOnYear from '../components/HealthScoreYearOnYear/healthScoreYearOnYear';
import HealthPredict from '../components/HealthPredict/HealthPredict';
import styles from './healthPage.module.scss';

const { sex, resHeight, age } = heathData.wxcResultMap.paramMap;

const HealthPage = () => {
  return (
    <div className={styles.app}>
      <div className={styles.inner}>
        <HealthMain />
        <BasicInfo sex={sex} resHeight={resHeight} age={age} />
        <HealthScoreYearOnYear />
        <HealthPredict />
      </div>
    </div>
  );
};

export default HealthPage;
