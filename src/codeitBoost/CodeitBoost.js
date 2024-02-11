import './CodeitBoost.css';
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'

function CodeitBoost() {
  return (
    <>
      <div className="codeitBoost">
        코드잇 부스트
      </div>
      <br/>
      <div>
        | 국내 최초 부트캠프형 동아리
      </div>
      <img src={image2} alt="이미지 2" width={200}/>
      <img src={image1} alt="이미지 1" width={300}/>
    </>
  );
}

export default CodeitBoost;
