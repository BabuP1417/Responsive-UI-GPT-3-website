import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Enhanced efficiency and automation',
    text: 'OpenAI’s models can automate repetitive tasks, freeing employees to focus on more strategic and creative endeavors. This leads to increased productivity and reduced operational costs.',
  },
  {
    title: 'Improved decision making',
    text: 'OpenAI’s data analysis capabilities can process vast information, uncovering patterns and insights that humans might miss. This data-driven approach enables companies to make more informed decisions and identify new opportunities.',
  },
  {
    title: 'Innovative product development',
    text: 'Their models can generate new product or service ideas, analyze market trends, and even create prototypes. This accelerates innovation and helps companies stay ahead of the competition.',
  },
  {
    title: 'Cost reduction',
    text: 'By automating tasks, improving decision-making, and optimizing processes, OpenAI can help companies reduce costs across various departments. This can lead to increased profitability and a stronger bottom line.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
