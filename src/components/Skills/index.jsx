import React from 'react';
import { Container, Wrapper, SkillsContainer, Skill, SkillTitle, SkillList, SkillItem, SkillImage, Title, Desc } from './SkillStyle.js';
import { skills } from '../../data/constants.js';

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>Over the past year, I've diligently honed a diverse array of skills, each representing a significant milestone in my professional journey. Here's a glimpse into the expertise I've cultivated:.</Desc>
        <SkillsContainer>
          {skills.map((skill,idx) => (
            <Skill key={idx}>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item, idx) => (
                  <SkillItem key={idx}>
                    <SkillImage src={item.image} />
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
