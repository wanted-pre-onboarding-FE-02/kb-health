import HEALTH_DATA from '../../../data/healthData.json';
import ScoreChart from '../../HealthPredict/ScoreChart';

import { cx } from '../../../styles';
import convertCase from '../../../utils/convertCase';
import styles from './healthAverage.module.scss';

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
              <mark className={cx(styles.highlightTxt, styles[switchClass])}>{switchText}</mark>
            </p>
          </dd>
          <dd className={styles.percentage}>상위 {hscorePercent}%</dd>
        </dl>
        <ScoreChart data={data} />
      </div>
    </section>
  );
};

export default HealthAverage;
