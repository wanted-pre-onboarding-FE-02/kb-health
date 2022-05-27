import styles from './medicalExpenses.module.scss'
import healthData from '../../data/healthData.json'
import ExChart from './ExChart/ExChart'
import { IMedicalExpenseChartData } from '../../types/health'
import { useMemo } from 'react'

const MedicalExpenses = () => {
  const { mediDy } = healthData.wxcResultMap
  const currentExpenses = Number(healthData.wxcResultMap.medi)
  const afterTenYearExpenses = mediDy[mediDy.length - 1]
  const cost = afterTenYearExpenses - currentExpenses
  const chartData: IMedicalExpenseChartData[] = [
    { x: '나', y: currentExpenses },
    { x: '10년 후', y: afterTenYearExpenses },
  ]

  const mentComponent = useMemo(() => {
    if (cost === 0) return <p>현재와 같아요</p>
    return cost > 0 ? (
      <p>
        현재보다 <strong className={styles.over}>{cost.toLocaleString('ko-KR')}원 많아요</strong>
      </p>
    ) : (
      <p>
        현재보다 <strong className={styles.under}>{Math.abs(cost).toLocaleString('ko-KR')}원 적어요</strong>
      </p>
    )
  }, [cost])

  return (
    <div className={styles.wrapper}>
      <div className={styles.textContent}>
        <p>10년 후 예상 의료비는</p>
        {mentComponent}
      </div>
      <div className={styles.exChart}>
        <ExChart chartData={chartData} />
      </div>
    </div>
  )
}

export default MedicalExpenses
