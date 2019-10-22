const data = [
  {
    name: 'Front-End Demo',
    date: 'October 2019',
    clientName: 'Personal',
    tech: ['React', ,'React Hooks', 'GraphQL', 'Enzyme', 'Storybook', 'Webpack', 'Netlify'],
    url: 'https://gallant-hamilton-ca3fca.netlify.com/',
    githubUrl: 'https://github.com/elijahboston/frontend-test',
    description: `
      This is a demo site that uses Yelp's GraphQL API to fetch restaurant listings and allows you to dynamically filter them based on price, category, or whether they're open.
      I developed this from the ground up (i.e. not using Create React App or any existing frontend framework). Based on wireframes provided by Superformula.
    `,
  },
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

export default data;