import HEALTH_DATA from '../data/healthData.json';

// 체질량 지수
export const { resBMI } = HEALTH_DATA.wxcResultMap.paramMap;
export const { resBMI: bbmi } = HEALTH_DATA.wxcResultMap.boj;
// 혈압
export const { resBloodPressure } = HEALTH_DATA.wxcResultMap.paramMap;
export const { resBloodPressure: bbl } = HEALTH_DATA.wxcResultMap.boj;
// 총 콜레스테롤
export const { resTotalCholesterol } = HEALTH_DATA.wxcResultMap.paramMap;
export const { resTotalCholesterol: cholesterol } = HEALTH_DATA.wxcResultMap.boj;
// 흡연
export const { smkQty } = HEALTH_DATA.wxcResultMap.paramMap;
export const { smkQty: smoke } = HEALTH_DATA.wxcResultMap.boj;
// 식전혈당
export const { resFastingBloodSuger } = HEALTH_DATA.wxcResultMap.paramMap;
export const { resFastingBloodSuger: fasting } = HEALTH_DATA.wxcResultMap.boj;
// 음주
export const { drnkQty } = HEALTH_DATA.wxcResultMap.paramMap;
export const { drnkQty: drnk } = HEALTH_DATA.wxcResultMap.boj;

// 신체구체여과물
export const { resGFR } = HEALTH_DATA.wxcResultMap.paramMap;
export const { resGFR: GFR } = HEALTH_DATA.wxcResultMap.boj;

// 운동량
export const { exerciQty } = HEALTH_DATA.wxcResultMap.paramMap;
export const { exerciQty: exerci } = HEALTH_DATA.wxcResultMap.boj;
