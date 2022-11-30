import { MAX_DEGREE } from "./chartConfig";

// 호를 그릴 때 필요한 값들
interface ArcData {
  x: number;
  y: number;
  radius: number;
  degree: number;
}

// 삼각함수로 시초선에서 n도 벌어진 점의 좌표를 구하는 함수
const getCoordsOnCircle = ({ x, y, radius, degree }: ArcData) => {
  const radian = (degree / 180) * Math.PI;

  return {
    x: x + radius * Math.cos(radian),
    y: y + radius * Math.sin(radian),
  };
};

// x, y를 중심 축으로 하여 degree(θ)만큼 +방향으로 호를 그리는 함수
const getArc = (props: ArcData) => {
  const startCoord = getCoordsOnCircle({ ...props, degree: 0 });
  const finishCoord = getCoordsOnCircle({ ...props });

  const { x, y, radius, degree } = props;
  const isLargeArc = degree > 180 ? 1 : 0;
  const isEnd = degree === MAX_DEGREE;

  const d = `M ${startCoord.x} ${startCoord.y} A ${radius} ${radius} 0 ${isLargeArc} 1 ${finishCoord.x} ${finishCoord.y} L ${x} ${y} ${
    isEnd ? "z" : ""
  }`;
  return d;
};

export default getArc;
