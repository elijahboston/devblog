import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const projects = [
  {
    name: 'Mobile App Testing Widget',
    date: 'August 2019',
    clientName: 'CMG',
    tech: ['React', 'Babel', 'Axios', 'S3', 'Jenkins'],
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

const Item = styled.div``

const Title = styled.h3``

const Description = styled.p``;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.45rem;

  background: ${props => props.theme.tagBgColor};
  border-radius: .3rem;
  font-size: .9rem;
  padding: .4rem;
`

const TechList = styled.ul`
  margin: 0;
  padding: 0;
  display: inline-block;
  margin-bottom: 1.45rem;
`

const TechItem = styled.li`
  display: inline-block;
  margin: .2rem .2rem 0 0;
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

const ProjectItem = ({name, url, date, clientName, description, tech, video }) => <Item>
    <Title>{name}</Title>
    <Details>
      <span className='project-time'>
        <time>{date}</time>
      </span>

      <span className='project-url'>
        {url && <a href={url}>{url}</a>}
        {!url && 'Internal Project'}
      </span>

      {clientName &&
        <span className='client-name'>
          {clientName}
        </span>}
    </Details>
    <TechList>
          {tech.map(name => <TechItem key={name}>
            {name}
          </TechItem>)}
    </TechList>
    <Description>
      {description}
    </Description>
</Item>

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>Projects</h1>
    {projects.map(props => <ProjectItem key={props.name} { ...props }/>)}
  </Layout>
)

export default ProjectsPage
