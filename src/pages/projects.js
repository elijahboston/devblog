import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const projects = [
  {
    name: 'Mobile App Testing Widget',
    date: 'August 2019',
    clientName: 'CMG',
    tech: ['React', 'Babel', 'Axios', 'S3', 'Jenkins', 'nopkg'],
    description: `
      Our QA analysts needed a way to quickly test new builds. Our existing process required several manual steps that made this task tedious, time consuming, and prone to human error.
      Using React, S3, and some custom scripting, I was able to develop a "widget" that could be added to Jenkins that eliminated the need for any manual process except configuring the test.
    `,
  },
  {
    name: 'Selenium Grid Deployment',
    date: 'July 2019',
    clientName: 'CMG',
    tech: ['AWS', 'EC2'],
    description: `
      Prototyped and profiled different types of swarm deployments on AWS, using both stand-alone EC2 instances, and Amazon's own Elastic Container Service.
    `,
  },
  {
    name: 'Member Center "Hub"',
    url: 'http://hub.ajc.com',
    date: 'January - June 2019',
    clientName: 'CMG',
    tech: ['React', 'Redux', 'Babel'],
    description: `
      Lead development and deployment of a multi-site frontend redesign using React and Redux.
    `,
  }
];

const Item = styled.div`
  padding: 1.45rem 1.45rem 0;
`

const Title = styled.h3``

const Description = styled.p``;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.45rem;
`

const TechList = styled.ul`
  margin: 0;
  padding: 0;
  display: inline-block;
  margin-bottom: 1.45rem;
`

const TechItem = styled.li`
  display: inline-block;
  margin: 0 .2rem;
  list-style-type: none;
  background: ${props => props.theme.tagBgColor};
  color: ${props => props.theme.tagColor};
  padding: .1rem .5rem;
  border-radius: .3rem;
  font-size: .9rem;

  &:first-child {
    margin-left: 0;
  }
`

const DetailSubtitle = styled.div`
  display: inline-block;
  margin-right: .5rem;
  width: 75px;
  font-weight: bold;
`;

const ProjectItem = ({name, url, date, clientName, description, tech }) => <Item>
    <Title>{name}</Title>
    <TechList>
          {tech.map(name => <TechItem key={name}>
            {name}
          </TechItem>)}
    </TechList>
    <Description>
      {description}
    </Description>
    <Details>
      <span className='project-url'>
        <DetailSubtitle>URL:</DetailSubtitle>
        {url && <a href={url}>{url}</a>}
        {!url && 'Internal Project'}
      </span>

      {clientName &&
        <span className='client-name'>
          <DetailSubtitle>Client:</DetailSubtitle>
          {clientName}
        </span>}

      <span className='project-time'>
        <DetailSubtitle>Dates:</DetailSubtitle>
        <time>{date}</time>
      </span>
    </Details>
</Item>

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>/projects</h1>
    {projects.map(props => <ProjectItem key={props.name} { ...props }/>)}
  </Layout>
)

export default ProjectsPage
