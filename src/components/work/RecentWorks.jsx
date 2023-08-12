import React from "react";
import "./Work.css";
import work1 from "../../assets/work1.jpg";
import work2 from "../../assets/work2.jpg";
import work3 from "../../assets/work3.png";
import work4 from "../../assets/work4.jpg";
const RecentWorks = () => {
  const works = [
    { image: work1, demoLink: "https://animax-2b3f1.web.app/Home" },
    { image: work2, demoLink: "https://otakuhub-232ae.web.app/Home" },
    { image: work3, demoLink: "https://github.com/R4V3NSH4D0W/banquet-house" },
    { image: work4, demoLink: "https://example.com/demo4" },
  ];

  return (
    <div className="recent-works">
      {works.map((work, index) => (
        <div className="work-item" key={index}>
          <img src={work.image} alt={`Work ${index}`} />
          <div className="demo-box">
            <a href={work.demoLink} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentWorks;
