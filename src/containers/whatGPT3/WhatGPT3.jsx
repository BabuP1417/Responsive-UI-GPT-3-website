import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="GPT-3, or the third-generation Generative Pre-trained Transformer, is a neural network machine learning model trained using internet data to generate any type of text. Developed by OpenAI, it requires a small amount of input text to generate large volumes of relevant and sophisticated machine-generated text." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text=" ChatGPT is a chatbot and virtual assistant developed by OpenAI and launched on November 30, 2022. Based on large language models, it enables users to refine and steer a conversation towards a desired length, format, style, level of detail, and language." />
      <Feature title="Knowledgebase" text="With this AI tool in knowledge management, users can quickly analyze queries, find the necessary information without spending more time searching vast knowledge bases, and use a prompt to generate accurate responses within a few minutes." />
      <Feature title="Education" text="The introduction of OpenAI’s product for education, in the form of ChatGPT Edu, is enormously important. It helps us protect our student privacy, protect our research output which is our intellectual property, and supports our security requirements." />
    </div>
  </div>
);

export default WhatGPT3;
