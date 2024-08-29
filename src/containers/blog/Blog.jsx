import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
      <Article imgUrl={blog02} date="Jan 16, 2024" text="OpenAI will release AI citation and image safeguards ahead of 2024 global elections" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog03} date="Jul 29, 2024" text="OpenAI’s fastest model, GPT-4o mini is now available on Azure AI" />
        <Article imgUrl={blog01} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog04} date="Nov 30, 2022" text="OpenAI debuts ChatGPT and GPT-3.5 series as GPT-4 rumors fly" />
        <Article imgUrl={blog05} date="Mar 19, 2023" text="OpenAI Says GPT-4 Is Better in Nearly Every Way. What Matters More Is Millions Will Use It" />
      </div>
    </div>
  </div>
);

export default Blog;
