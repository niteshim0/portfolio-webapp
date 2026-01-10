import React from 'react';
import { Container, Wrapper, SkillsContainer, Skill, SkillTitle, SkillList, SkillItem, SkillImage, Title, Desc } from './SkillStyle.js';
import { skills } from '../../data/constants.js';

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc> Over time, I’ve built a diverse skill set through hands-on experience and continuous learning.
        <br/>
        Here’s a snapshot of the expertise I bring to the table.
        </Desc>
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
