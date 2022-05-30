import HEALTH_DATA from '../../data/healthData.json';
import ScoreChart from './ScoreChart';
import convertCase from '../../utils/convertCase';
import { cx } from '../../styles';
import styles from './healthPredict.module.scss';

const HealthPredict = () => {
  const { wHscore, wHscoreDy } = HEALTH_DATA.wxcResultMap;
  const LAST_INDEX = wHscoreDy.length - 1;
  const interval = +wHscoreDy[LAST_INDEX] - +wHscore;
  const data = [
    { status: '나', score: +wHscore },
    { status: '10년 후', score: +wHscoreDy[LAST_INDEX] },
  ];

  const { switchText, switchClass, frontText } = convertCase(interval);

  return (
    <section className={styles.predictWrapper}>
      <div className={styles.predictInner}>
        <h3>나의 10년 후 건강 예측</h3>
        <dl>
          <dt>예상 건강 점수</dt>
          <dd>
            <p>
              10년 후 예상 건강 점수는
              <br />
              {frontText}
              <mark className={cx(styles.highlightTxt, styles[switchClass])}>{switchText}</mark>
            </p>
          </dd>
        </dl>
        <ScoreChart data={data} />
      </div>
    </section>
  );
};

export default HealthPredict;
