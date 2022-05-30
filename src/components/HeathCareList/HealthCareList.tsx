import { Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7, Icon8 } from '../../assets';
import { useHealth } from '../../hooks/useHealth';
import {
  bbl,
  bbmi,
  cholesterol,
  drnk,
  exerci,
  fasting,
  GFR,
  resBloodPressure,
  resBMI,
  resFastingBloodSuger,
  resGFR,
  resTotalCholesterol,
  smoke,
} from '../../utils/healthVal';
import HealthCareCard from '../HealthCareCard/HealthCareCard';

const HealthCareList = () => {
  const { tagList: bbmiTag, bordText: bbmiBord, tipListText: bbmiTip } = useHealth(bbmi, 'resBMI');
  const { tagList: bblTag, bordText: bblBord, tipListText: bblTip } = useHealth(bbl, 'resBloodPressure');
  const { tagList: cholTag, bordText: cholBord, tipListText: cholTip } = useHealth(cholesterol, 'resHDLCholesterol');
  const { tagList: smkTag, bordText: smkBord, tipListText: smkTip } = useHealth(smoke, 'resHDLCholesterol');
  const {
    tagList: fastingTag,
    bordText: fastingBord,
    tipListText: fastingTip,
  } = useHealth(fasting, 'resFastingBloodSuger');
  const { tagList: drnkTag, bordText: drnkBord, tipListText: drnkTip } = useHealth(drnk, 'drnkQty');
  const { tagList: GFRTag, bordText: GFRBord, tipListText: GFRTip } = useHealth(GFR, 'resGFR');
  const { tagList: exerciTag, bordText: exerciBord, tipListText: exerciTip } = useHealth(exerci, 'exerciQty');

  return (
    <>
      <HealthCareCard
        tagText={bbmiTag[0]}
        cardNum='01'
        icon={<Icon1 />}
        title='체질량 지수'
        desc={`체질량 지수는 ${resBMI}kg/m로 입니다.`}
        bordText={bbmiBord[0]}
        healthState='정상 : 20 ~ 22kg m&sup2;'
        tipList={bbmiTip}
        textColor='color1'
      />
      <HealthCareCard
        tagText={bblTag[0]}
        cardNum='02'
        icon={<Icon2 />}
        title='혈압'
        desc={`혈압은 ${resBloodPressure}mmHg로 입니다.`}
        bordText={bblBord[0]}
        healthState='정상 : 이완 60~80 / 수축 90~120 mmHg'
        tipList={bblTip}
        textColor='color2'
      />
      <HealthCareCard
        tagText={cholTag[0]}
        cardNum='03'
        icon={<Icon3 />}
        title='총 콜레스테롤'
        desc={`총 콜레스테롤은 ${resTotalCholesterol}mg/dL로 입니다.`}
        bordText={cholBord[0]}
        healthState='정상 : 200 mg/dL 이하'
        tipList={cholTip}
        textColor='color3'
      />
      <HealthCareCard
        tagText={smkTag[0]}
        cardNum='04'
        icon={<Icon4 />}
        title='흡연'
        desc={`${smkBord} 중입니다.`}
        tipList={smkTip}
        textColor='color4'
      />
      <HealthCareCard
        tagText={fastingTag[0]}
        cardNum='05'
        icon={<Icon5 />}
        title='식전혈당'
        desc={`식전혈당은 ${resFastingBloodSuger}mg/dL로 입니다.`}
        bordText={fastingBord[0]}
        healthState='정상 : 69~100 mg/dL'
        tipList={fastingTip}
        textColor='color5'
      />
      <HealthCareCard
        tagText={drnkTag[0]}
        cardNum='06'
        icon={<Icon6 />}
        title='음주'
        desc={`${drnkBord} 입니다.`}
        tipList={drnkTip}
        textColor='color6'
      />

      <HealthCareCard
        tagText={GFRTag[0]}
        cardNum='07'
        icon={<Icon7 />}
        title='신사구체여과물'
        desc={`신사구체여과율은 ${resGFR}mL/min로 입니다.`}
        bordText={GFRBord[0]}
        healthState='정상 : 60 mL/min 이상'
        tipList={GFRTip}
        textColor='color7'
      />

      <HealthCareCard
        tagText={exerciTag[0]}
        cardNum='08'
        icon={<Icon8 />}
        title='운동량'
        desc={`${exerciBord}을 하고 있습니다.`}
        tipList={exerciTip}
        textColor='color8'
      />
    </>
  );
};

export default HealthCareList;
