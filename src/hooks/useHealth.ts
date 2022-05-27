import HEALTH_DATA from '../data/healthData.json';

export const useHealth = (param: string, tagName: string) => {
  const tagList = HEALTH_DATA.healthTagList
    .filter((item) => item.tagId === tagName)
    .map((item) => [item.tag1 && item.tag1, item.tag2 && item.tag2, item.tag3 && item.tag3]);
  const data2List = param.split('- ', 5);
  const bordText = data2List.slice(0, 1);
  const tipListText = data2List.slice(1, 3);

  return { tagList, bordText, tipListText };
};
