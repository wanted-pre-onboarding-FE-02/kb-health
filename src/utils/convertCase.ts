export default function convertCase(number: number) {
  const absNum = Math.abs(number);
  const numReduce = number / absNum;
  switch (numReduce) {
    case -1:
      return {
        frontText: '현재 보다',
        switchText: ` ${absNum}점 낮아요`,
        switchClass: 'textRed',
      };
    case 1:
      return {
        frontText: '현재 보다',
        switchText: ` ${absNum}점 높아요`,
        switchClass: 'textBlue',
      };
    default:
      return {
        frontText: '',
        switchText: ' 현재와 같아요',
        switchClass: 'textGrey',
      };
  }
}
