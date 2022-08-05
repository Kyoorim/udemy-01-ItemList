import "./Chart.css";

import ChartBar from "./ChartBar";

const Chart = (props) => {
  // chartDataPoints 객체의 value만 받아오는 변수 선언 => 결과: 숫자들로만 구성된 새로운 배열 return
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  // ...dataPointValues는 dataPointValues를 스프레드 연산자로 배열 안에 요소들을 하나씩 풀어놓은 것
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
