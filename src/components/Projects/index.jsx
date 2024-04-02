import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectStyle.js'
import ProjectCard from '../Cards/ProjectCard.jsx'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
        Discover a curated collection of my projects, showcasing my versatile skill set and passion for innovation.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'java app' ?
            <ToggleButton active value="java app" onClick={() => setToggle('java app')}>Java APP'S</ToggleButton>
            :
            <ToggleButton value="java app" onClick={() => setToggle('java app')}>Java APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'data science app' ?
            <ToggleButton active value="data science app" onClick={() => setToggle('data science app')}>Data Science</ToggleButton>
            :
            <ToggleButton value="data science app" onClick={() => setToggle('data science app')}>Data Science</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project,idx) => (
              <ProjectCard key={idx} project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project,idx) => (
              <ProjectCard key={idx} project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects