import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Part from "./Part";
import Curriculum from "./Curriculum";
import QnA from "./QnA";
import Apply from "./Apply";
import "./CodeitBoost.css";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";

function CodeitBoost() {
  return (
    <>
      <br />
      <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/CodeitBoost" activeClassName="activeLink">
              Codeit Boost
            </NavLink>
          </li>
          <li>
            <NavLink to="/part" activeClassName="activeLink">
              Part
            </NavLink>
          </li>
          <li>
            <NavLink to="/curriculum" activeClassName="activeLink">
              Curriculum
            </NavLink>
          </li>
          <li>
            <NavLink to="/qna" activeClassName="activeLink">
              QnA
            </NavLink>
          </li>
          <li>
            <NavLink to="/apply" activeClassName="activeLink">
              Apply
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/CodeitBoost" element={<Part />} />
        <Route path="/part" element={<Part />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/qna" element={<QnA />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>

      <h1>코드잇 부스트</h1>
      <h4>국내최초의 부트캠프형 동아리</h4>

      <img
        src={image2}
        alt="이미지 2"
        width={200}
        style={{ marginLeft: "500px" }}
      />
      <img
        src={image1}
        alt="이미지 1"
        width={300}
        style={{ marginLeft: "100px", marginBottom: "70px" }}
      />
      <img
        src={image3}
        alt="이미지3"
        width={200}
        style={{ marginLeft: "100px", marginBottom: "5px" }}
      />
    </>
  );
}

export default CodeitBoost;
