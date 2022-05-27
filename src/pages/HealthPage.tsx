import { Icon1 } from '../assets';
import HealthCareCard from '../components/HealthCareCard/HealthCareCard';
import styles from './healthPage.module.scss';

const tipList = [
  '최소한 현 체중보다 증가하지 않도록 하시되 가능하면 일차적으로 현 체중에서 5% 정도를 3-6개월 이내에감량하시면 심뇌혈관 질환 예방에 더욱 도움이 됩니다.',
  '전체적인 에너지 섭취는 줄이되 영양적 적절성은 유지하는 개인별 영양평가에 기반을 둔 식이요법과 하루 30분 이상 주 5회 이상 중등도 강도의 유산소 운동을 기본으로 하되 점진적으로 하루 1시간, 고강도 운동을 포함하는 유산소 운동 및 주 2-3회의 근력운동을 포함하는 운동 요법이 병행되어야 합니다. 또한 음주 습관, 야식, 폭식 등 관련된 행동 습관도 파악하여 조절해야 합니다.',
];
const HealthPage = () => {
  return (
    <div className={styles.app}>
      <HealthCareCard
        tagText={['#현상유지', '#과제충']}
        cardNum='01'
        icon={<Icon1 />}
        title='체질량 지수'
        desc='체질량 지수는 24.8kg/m&sup2;로 입니다.'
        bordText='과체중'
        healthState='정상 : 20 ~ 22kg m&sup2;'
        tipList={tipList}
        textColor='color1'
      />
    </div>
  );
};

export default HealthPage;
