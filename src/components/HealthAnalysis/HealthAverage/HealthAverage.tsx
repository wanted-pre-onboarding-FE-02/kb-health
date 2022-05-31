import HEALTH_DATA from '../../../data/healthData.json';
import TwoScoreChart from '../../TwoScoreChart/TwoScoreChart';

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
  const { switchText, switchClass } = convertCase(Number(wHscore) - Number(average));
  return (
    <section className={styles.averageWrapper}>
      <div className={styles.averageInner}>
        <dl>
          <dd>
            <p>
              30대 남성 평균점수보다
              <br />
              <mark className={cx(styles.highlightTxt, styles[switchClass])}>{switchText}</mark>
            </p>
          </dd>
          <dd className={styles.percentage}>상위 {hscorePercent}%</dd>
        </dl>
        <TwoScoreChart data={data} />
      </div>
    </section>
  );
};

export default HealthAverage;
