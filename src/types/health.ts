export interface IHealthData {
  userInfo: IUserInfo;
  wxcResultMap: IWxcResultMap;
  healthScoreList: IHealthScoreList[];
  healthTagList: IHealthTagList[];
}

export interface IUserInfo {
  healthScript: string;
  healthScore: string | number;
  healthDate: string;
}

export interface IWxcResultMap {
  wMymaxHscoreDy: number[];
  paramMap: IParamMap;
  hscorePercent: string | number;
  wHscore: string | number;
  hscore_peer: string | number;
  wHscoreDy: number[];
  mediDy: number[];
  medi: string | number;
}

export interface IParamMaps {
  sex: string | number;
  resHeight: string | number;
  age: string | number;
  wMymaxHscoreDy: number[];
  paramMap: IParamMap;
  hscorePercent: string | number;
  wHscore: string | number;
  hscore_peer: string | number;
  wHscoreDy: number[];
  mediDy: number[];
  medi: string | number;
  boj: IBoj;
}

export interface IBoj {
  resHDLCholesterol: string;
  resBMI: string;
  resUrinaryProtein: string;
  resBloodPressure: string;
  resTotalCholesterol: string;
  smkQty: string;
  resFastingBloodSuger: string;
  drnkQty: string;
  resGFR: string;
  exerciQty: string;
  resLDLCholesterol: string;
}

export interface IParamMap {
  sex: string | number;
  resHeight: string | number;
  age: string | number;
  resBMI?: string;
  resBloodPressure?: string | number;
  resTotalCholesterol?: string | number;
  resFastingBloodSuger?: string | number;
  resGFR?: string | number;
}

export interface IHealthScoreList {
  SCORE: string | number;
  TYPE_CD: string;
  SUBMIT_DATE: string;
  CNTNS: string;
}

export interface IHealthTagList {
  tagId: string;
  tag1: string;
  tag2: string;
  tag3: string;
}

export interface IMedicalExpenseChartData {
  x: string;
  y: number;
}
