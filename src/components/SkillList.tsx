import * as React from "react";
import { Rating } from "@mantine/core";
const skillTags = [
  {
    label: "React",
    level: 2,
  },
  {
    label: "Next.js",
    level: 2,
  },
  {
    label: "TypeScript",
    level: 2,
  },
  {
    label: "Astro",
    level: 1,
  },
];

const SkillList = () => {
  return (
    <>
      <div>
        <span style={{ marginLeft: "20px" }}>スキルタグ</span>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            height: "fit-content",
          }}
        >
          {skillTags.map((skillTag) => (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "50px",
                marginLeft: "20px",
              }}
            >
              {skillTag.label}
              <Rating value={skillTag.level} fractions={2} readOnly />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SkillList;
