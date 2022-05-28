import ScoreChart from '../../HealthPredict/ScoreChart';

import styles from './healthAverage.module.scss';
import convertCase from '../../../utils/convertCase';
import HEALTH_DATA from '../../../data/healthData.json';
import { cx } from '../../../styles';

const HealthAverage = () => {
  const { wHscore, hscorePercent } = HEALTH_DATA.wxcResultMap;
  const average = HEALTH_DATA.wxcResultMap.hscore_peer;
  const data = [
    { status: '나', score: Number(wHscore) },
    { status: '30대 남성', score: Number(average) },
  ];
  const { switchText, switchClass, frontText } = convertCase(Number(wHscore) - Number(average));
  return (
    <section className={styles.averageWrapper}>
      <div className={styles.averageInner}>
        <dl>
          <dd>
            <p>
              10년 후 예상 건강 점수는
              <br />
              {frontText}
              <strong className={cx(styles.highlightTxt, styles[switchClass])}>{switchText}</strong>
            </p>
          </dd>
          <dd className={styles.percentage}>{hscorePercent}%</dd>
        </dl>
        <ScoreChart data={data} />
      </div>
    </section>
  );
};

export default HealthAverage;
