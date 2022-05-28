import heathData from '../data/healthData.json';

import HealthMain from '../components/HealthCareMain/HealthMain';

import HealthScoreYearOnYear from '../components/HealthScoreYearOnYear/healthScoreYearOnYear';
import HealthPredict from '../components/HealthPredict/HealthPredict';
import styles from './healthPage.module.scss';
import MedicalExpenses from '../components/MedicalExpenses/MedicalExpenses';
import HealthCareTitle from '../components/HealthCareTitle/HealthCareTitle';
import HealthCareList from '../components/HeathCareList/HealthCareList';
import BasicInfo from '../components/BasicInfo/BasicInfo';
import HealthAnalysis from '../components/HealthAnalysis/HealthAnalysis';
import IphoneModel from '../components/IphoneModel/IphoneModel';

const { sex, resHeight, age } = heathData.wxcResultMap.paramMap;

const HealthPage = () => {
  return (
    <div className={styles.app}>
      <IphoneModel>
        <header>
          <h1>마이헬스</h1>
        </header>
        <div className={styles.inner}>
          <HealthMain />
          <BasicInfo sex={sex} resHeight={resHeight} age={age} />
          <HealthAnalysis />
          <HealthScoreYearOnYear />
          <HealthPredict />
          <MedicalExpenses />
          <HealthCareTitle />
          <HealthCareList />
        </div>
      </IphoneModel>
    </div>
  );
};

export default HealthPage;
