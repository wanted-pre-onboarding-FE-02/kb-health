import styles from './healthAnalysis.module.scss';

const HealthAnalysis = () => {
  return (
    <div className={styles.wrapper}>
      <h3>건강 점수 분석 결과</h3>
      <button type='button'>결과 자세히 보기 &gt;</button>
    </div>
  );
};
export default HealthAnalysis;
