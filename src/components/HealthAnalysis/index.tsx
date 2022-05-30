import styles from './healthAnalysis.module.scss';
import HealthAverage from './HealthAverage/HealthAverage';
import HealthScoreYearOnYear from './HealthScoreYearOnYear/healthScoreYearOnYear';

const HealthAnalysis = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h3>건강 점수 분석 결과</h3>
        <button type='button'>결과 자세히 보기 &gt;</button>
      </div>
      <HealthScoreYearOnYear />
      <HealthAverage />
    </div>
  );
};
export default HealthAnalysis;
