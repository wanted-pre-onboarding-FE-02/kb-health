import styles from './medicalExpenses.module.scss';
import healthData from '../../data/healthData.json';
import { useMemo } from 'react';
import ScoreChart from '../HealthPredict/ScoreChart';

interface IDataSet {
  status: string;
  score: number;
}

const MedicalExpenses = () => {
  const { mediDy } = healthData.wxcResultMap;
  const currentExpenses = +healthData.wxcResultMap.medi;
  const afterTenYearExpenses = mediDy[mediDy.length - 1];
  const cost = afterTenYearExpenses - currentExpenses;
  const chartData: IDataSet[] = [
    { status: '나', score: currentExpenses },
    { status: '10년 후', score: afterTenYearExpenses },
  ];

  const mentComponent = useMemo(() => {
    if (cost === 0) return <p>현재와 같아요</p>;
    return cost > 0 ? (
      <p>
        현재보다 <strong className={styles.over}>{cost.toLocaleString('ko-KR')}원 많아요</strong>
      </p>
    ) : (
      <p>
        현재보다 <strong className={styles.under}>{Math.abs(cost).toLocaleString('ko-KR')}원 적어요</strong>
      </p>
    );
  }, [cost]);

  return (
    <section className={styles.wrapper}>
      <div className={styles.medicalExpensesInner}>
        <div className={styles.textContent}>
          <p>10년 후 예상 의료비는</p>
          {mentComponent}
        </div>

        <ScoreChart data={chartData} unit={false} />
      </div>
    </section>
  );
};

export default MedicalExpenses;
