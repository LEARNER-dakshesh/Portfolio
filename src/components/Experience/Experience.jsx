import React from "react";
import skills from "../data/skills.json";
import { getImageUrl } from "../../utils";

const Experience = () => {
  return (
    <section id="experience">
      <h2>Professional Experience</h2>
      <div>
        {skills.map((skill, id) => (
          <div key={id}>
            <div>
              <img src={getImageUrl(skill.imagSrc)} alt={skill.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
