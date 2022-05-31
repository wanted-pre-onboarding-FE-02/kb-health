import HealthMain from '../components/HealthCareMain/HealthMain';
import BasicInfo from '../components/BasicInfo/BasicInfo';
import HealthAnalysis from '../components/HealthAnalysis';
import HealthPredict from '../components/HealthPredict/HealthPredict';
import MedicalExpenses from '../components/MedicalExpenses/MedicalExpenses';
import HealthCareTitle from '../components/HealthCareTitle/HealthCareTitle';
import HealthCareList from '../components/HeathCareList/HealthCareList';
import IphoneModel from '../components/IphoneModel/IphoneModel';

import styles from './healthPage.module.scss';

const HealthPage = () => {
  return (
    <div className={styles.app}>
      <IphoneModel>
        <header>
          <h1>마이헬스</h1>
        </header>
        <div className={styles.inner}>
          <HealthMain />
          <BasicInfo />
          <HealthAnalysis />
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
