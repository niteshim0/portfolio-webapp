import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { education, experiences } from '../../data/constants';
import EducationCard from '../Cards/EducationCard.jsx';
import {TimelineSection,Desc,Title,Container,Wrapper} from './EducationStyle.js'

const Education = () => {
  return (
      <Container id="education">
          <Wrapper>
              <Title>Education</Title>
              <Desc>
                  My education has been a journey of self-discovery and growth. My educational details are as follows.
              </Desc>
              <TimelineSection>
                  <Timeline>
                      {education.map((education,index) => (
                          <TimelineItem key = {index*20} >
                              <TimelineContent sx={{ py: '12px', px: 2 }}>
                                  <EducationCard education={education}/>
                              </TimelineContent>
                              <TimelineSeparator>
                                  <TimelineDot variant="outlined" color="secondary" />
                                  {index !== experiences.length  && <TimelineConnector style={{ background: '#854CE6' }} />}
                              </TimelineSeparator>
                          </TimelineItem>
                      ))}
                  </Timeline>

              </TimelineSection>
          </Wrapper>
      </Container>
  )
}

export default Education