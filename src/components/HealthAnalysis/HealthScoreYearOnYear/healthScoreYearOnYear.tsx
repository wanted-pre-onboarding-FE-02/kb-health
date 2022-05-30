import styles from './healthScoreYearOnYear.module.scss';
import healthData from '../../../data/healthData.json';
import { useMemo } from 'react';
import Chart from './ScoreChart';

const HealthScoreYearOnYear = () => {
  const { healthScoreList } = healthData;

  const sortedList = healthScoreList
    .sort((a, b) => Number(a.SUBMIT_DATE.substring(0, 4)) - Number(b.SUBMIT_DATE.substring(0, 4)))
    .slice(-4);

  const chartData = [];
  for (let i = 0; i < sortedList.length; i += 1) {
    chartData.push({
      x: sortedList[i].SUBMIT_DATE.substring(0, 4),
      y: Number(sortedList[i].SCORE),
    });
  }
  const lastIndex = sortedList.length - 1;

  const current = sortedList[lastIndex];
  const currentYear = Number(current.SUBMIT_DATE.substring(0, 4));
  const currentScore = Number(current.SCORE);

  const mentComponent = useMemo(() => {
    if (lastIndex === 0) return <p>{`${currentYear}년 건강점수는 ${currentScore}점입니다.`}</p>;

    const prev = sortedList[lastIndex - 1];
    const prevYear = Number(prev.SUBMIT_DATE.substring(0, 4));
    const PrevScore = Number(prev.SCORE);

    const yearDiff = currentYear - prevYear;
    const scoreDiff = currentScore - PrevScore;

    const now = new Date();
    const prevYearMent = currentYear === now.getFullYear() && yearDiff === 1 ? '지난해' : `${prevYear}년`;
    const scoreMent = `${Math.abs(scoreDiff)}점`;
    const varianceMent = scoreDiff > 0 ? '높아졌어요.' : '낮아졌어요.';

    return (
      <>
        <p>총점이</p>
        <p>
          {prevYearMent}
          {scoreDiff === 0 ? '과 동일해요.' : ' 보다'}
          {scoreDiff !== 0 && (
            <mark className={scoreDiff > 0 ? `${styles.under}` : `${styles.over}`}>
              <span>{scoreMent}</span>
              <span>{varianceMent}</span>
            </mark>
          )}
        </p>
      </>
    );
  }, [currentScore, currentYear, lastIndex, sortedList]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.textContent}>{mentComponent}</div>
      <div className={styles.exChart} />
      <Chart chartData={chartData} lastIndex={lastIndex} />
    </div>
  );
};

export default HealthScoreYearOnYear;
