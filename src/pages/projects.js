import React from "react"
import styled from "styled-components"
import { Layout, SEO } from "../components"
import projects from '../data/projects';

const Item = styled.div`
  border-bottom: 1px solid #333333;
  margin: 1rem 0;
`

const Title = styled.h3``

const Description = styled.p``;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.45rem;
  font-size: .9rem;
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

const ProjectItem = ({name, url, githubUrl, date, clientName, description, tech, video }) => <Item>
    <Title>{name} - {date}</Title>
    <TechList>
          {tech.map(name => <TechItem key={name}>
            {name}
          </TechItem>)}
    </TechList>
    <Description>
      {description}
    </Description>
    <Details>
      <div className='project-url'>
        <b></b>URL: {url && <a href={url}>{url}</a>}
        {!url && 'Internal Project'}
      </div>
      {!!githubUrl && <div className='github-url'>
        Github: <a href={githubUrl}>{githubUrl}</a>
      </div>}

      {clientName &&
        <span className='client-name'>
          Client: {clientName}
        </span>}
    </Details>
</Item>

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>Projects</h1>
    {projects.map(props => <ProjectItem key={props.name} { ...props }/>)}
  </Layout>
)

export default ProjectsPage
