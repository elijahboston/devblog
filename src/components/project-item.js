import React from 'react'
import styled from 'styled-components'

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

const TagList = styled.ul`
  margin: 0;
  padding: 0;
  display: inline-block;
  margin-bottom: 1.45rem;
`

const Tag = styled.li`
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

const ProjectItem = ({name, url, githubUrl, date, clientName, description, tags }) =>
  <Item>
      <Title>{name} - {date}</Title>

      <TagList>
        {tags.map(name => <Tag key={name}>
          {name}
        </Tag>)}
      </TagList>
      <Description>
        {description}
      </Description>
      <Details>
        {!!url && <a href={url}>Visit Site</a>}
        {!!githubUrl && <a href={githubUrl}>View Source</a>}
      </Details>
  </Item>

export default ProjectItem;