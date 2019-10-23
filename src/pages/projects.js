import React from 'react'
import { Layout, SEO, ProjectItem } from '../components'
import projects from '../data/projects';

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>Projects</h1>
    {projects.map(props => <ProjectItem key={props.name} { ...props }/>)}
  </Layout>
)

export default ProjectsPage
