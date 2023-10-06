/* 정보입력 */
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TourItem = ({ article }) => {
  const {
    MAIN_TITLE /* 콘텐츠명 */,
    TITLE /* 제목 */,
    SUBTITLE /* 부제목 */,
    GUGUN_NM /* 구군 */,
    HOMEPAGE_URL /* 홈페이지 */,
    MAIN_IMG_NORMAL /* 이미지 URL */,
    ADDR1 /* 주소 */,
    USAGE_DAY_WEEK_AND_TIME /* 운영 및 시간 */,
  } = article;

  useEffect(() => {
    AOS.init();
  });

  return (
    <div
      className="item"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <div className="title">
        <div className="title_top">
        <span>{GUGUN_NM}</span>
        <strong>{MAIN_TITLE}</strong>
        </div>
        <div className="title_bottom">
        <h4>{TITLE}</h4>
        <h5>{SUBTITLE}</h5>
        </div>
      </div>{" "}
      {/* .title end */}
      <img src={MAIN_IMG_NORMAL} alt={TITLE} />
      {/* noreferrer : 해당페이지로 넘어가기 위해 http에게 요청함 */}
      <p>{ADDR1}</p>
      <h6>운영 및 시간 : {USAGE_DAY_WEEK_AND_TIME}</h6>
      {HOMEPAGE_URL && (
        <a href={HOMEPAGE_URL} target="_blank" rel="noreferrer">
          방문하기
        </a>
      )}
    </div> /* .item end */
  );
};

export default TourItem;
