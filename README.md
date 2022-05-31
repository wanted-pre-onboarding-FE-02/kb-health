### 소개
사용자의 건강 데이터를 분석하여 보여주는 App
- 팀원 : 안주환 조윤지 지창근 박혜민 민경미 김보현 김준엽 김항래 최민정 최덕희(10명)
- 배포 : https://team2-kb-health-care.netlify.app/

### 폴더 구조   
````
├─assets   
├─components   
│  ├─BasicInfo   
│  ├─HealthAnalysis   
│  │  ├─HealthAverage   
│  │  └─HealthScoreYearOnYear   
│  ├─HealthCareCard   
│  ├─HealthCareMain   
│  ├─HealthCareTitle   
│  ├─HealthPredict   
│  ├─HeathCareList   
│  ├─IphoneModel   
│  ├─MedicalExpenses   
│  ├─TagCard   
│  └─TwoScoreChart   
├─data   
├─pages   
├─styles     
├─types   
└─utils   
````   

### 기술스택   
- typescript   
- react   
- scss   

### 라이브러리   
- victory : 차트 그리기
- classnames : 조건부 클래스네임 지정   


### 기능
1. 사용자의 기본정보 표시 , 
2. 건강점수는 victory.js 차트를 이용하여 1000점을 기준으로 사용자의 점수를 시각화
3. JSON 데이터 연도를 기준으로 오름차순 정렬하여 최근 4개년의 사용자 건강점수를 비교 및 이전년도 대비 증감률을 퍼센트로 표시 
4. json에 있는 데이터를 이용하여 건강점수 , 10년 후 예상 건강등 그래프를 통해 값 표현
   (오차범위 등) 텍스트로 시각적으로 표시
   (막대그래프의 data값만 받아와 컴포넌트로 재활용)
5. json에 있는 데이터를 활용하여 맞춤 건강관리 안내 카드를 표시
   (컴포넌트로 재활용)   

### Picture 
![화면 캡처 2022-05-31 112808](https://user-images.githubusercontent.com/88841429/171081317-dd5bd607-3723-4f94-a525-5959311bb28c.jpg)
![화면 캡처 2022-05-31 112851](https://user-images.githubusercontent.com/88841429/171081412-b91cf1a9-1876-423e-9f92-b3ccf95baeb2.jpg)
![화면 캡처 2022-05-31 112909](https://user-images.githubusercontent.com/88841429/171081448-700dbe33-9cc1-4af6-bf8f-974144b4c431.jpg)
