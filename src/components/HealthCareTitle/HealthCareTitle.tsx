import styles from './healthCareTitle.module.scss';
import healthData from '../../data/healthData.json';

const HealthCareTitle = () => {
  const maxHscore = healthData.wxcResultMap.wMymaxHscore;

  return (
    <div className={styles.wrap}>
      <h3 className={styles.title}>맞춤 건강관리</h3>
      <p className={styles.contents}>
        오케어와 함께 건강을 관리해보세요.
        <br />
        건강점수를 <mark className={styles.bold}>최대 {maxHscore}점</mark>까지 올릴 수 있어요.
      </p>
    </div>
  );
};

export default HealthCareTitle;
