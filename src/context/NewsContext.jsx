import React, { createContext, useContext, useState, useEffect } from 'react';

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // will have to replace with api call
    const localNews = [
            {
    title: 'RCB wins IPL 2025 trophy',
    summary: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio totam sint, quod accusamus eos doloribus necessitatibus eum in nulla, fugiat animi itaque voluptatem blanditiis sapiente porro quaerat amet nostrum a! Accusantium numquam repellendus sunt excepturi esse deleniti soluta nam dolorem perferendis in voluptatibus harum porro aut, provident laborum iste fugiat non vitae magnam quidem voluptate molestias quis? Repellendus voluptas ut corrupti expedita minima non at repellat qui porro commodi natus enim placeat hic perferendis dignissimos, reprehenderit alias in neque corporis totam? Cupiditate aliquam mollitia, aperiam, animi deserunt possimus quas fuga, veniam voluptatum accusantium repellendus culpa! Distinctio iure numquam unde id?',
    sentiment: 'Positive',
    category: 'sports',
    time: '2h ago'
  },
      {
    title: 'Economic Growth Continues as Markets Reach New Highs',
    summary: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio totam sint, quod accusamus eos doloribus necessitatibus eum in nulla, fugiat animi itaque voluptatem blanditiis sapiente porro quaerat amet nostrum a! Accusantium numquam repellendus sunt excepturi esse deleniti soluta nam dolorem perferendis in voluptatibus harum porro aut, provident laborum iste fugiat non vitae magnam quidem voluptate molestias quis? Repellendus voluptas ut corrupti expedita minima non at repellat qui porro commodi natus enim placeat hic perferendis dignissimos, reprehenderit alias in neque corporis totam? Cupiditate aliquam mollitia, aperiam, animi deserunt possimus quas fuga, veniam voluptatum accusantium repellendus culpa! Distinctio iure numquam unde id?',
    sentiment: 'Positive',
    category: 'Economy',
    time: '2h ago'
  },
  {
    title: 'Local Team Claims Victory in Championship Game',
    summary: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio totam sint, quod accusamus eos doloribus necessitatibus eum in nulla, fugiat animi itaque voluptatem blanditiis sapiente porro quaerat amet nostrum a! Accusantium numquam repellendus sunt excepturi esse deleniti soluta nam dolorem perferendis in voluptatibus harum porro aut, provident laborum iste fugiat non vitae magnam quidem voluptate molestias quis? Repellendus voluptas ut corrupti expedita minima non at repellat qui porro commodi natus enim placeat hic perferendis dignissimos, reprehenderit alias in neque corporis totam? Cupiditate aliquam mollitia, aperiam, animi deserunt possimus quas fuga, veniam voluptatum accusantium repellendus culpa! Distinctio iure numquam unde id?',
    sentiment: 'Positive',
    category: 'Sports',
    time: '3h ago'
  },
  {
    title: 'Government Announces Major New Infrastructure Project',
    summary: 'The government has unveiled a plan for a major new infrastructure project.',
    sentiment: 'Neutral',
    category: 'Economy',
    time: '4h ago'
  },
  {
    title: 'Breakthrough in Renewable Energy Technology',
    summary: 'Scientists developed a renewable energy tech that reduces carbon emissions.',
    sentiment: 'Positive',
    category: 'Tech',
    time: '1h ago'
  },
  {
    title: 'Tensions Rise Amid Diplomatic Talks',
    summary: 'Diplomatic talks between two nations raise concerns about potential conflict.',
    sentiment: 'Negative',
    category: 'World',
    time: '2h ago'
  },
  {
    title: 'New Health Guidelines Released by Experts',
    summary: 'Health experts released new guidelines for improving public health.',
    sentiment: 'Neutral',
    category: 'India',
    time: '3h ago'
  },
  {
    title: 'New Health Guidelines Released by Experts',
    summary: 'Health experts released new guidelines for improving public health.',
    sentiment: 'Neutral',
    category: 'India',
    time: '3h ago'
  },
  {
    title: 'New Health Guidelines Released by Experts',
    summary: 'Health experts released new guidelines for improving public health.',
    sentiment: 'Neutral',
    category: 'India',
    time: '3h ago'
  },
  {
    title: 'New Health Guidelines Released by Experts',
    summary: 'Health experts released new guidelines for improving public health.',
    sentiment: 'Neutral',
    category: 'India',
    time: '3h ago'
  },
    ];
    setNews(localNews);
  }, []);

  return (
    <NewsContext.Provider value={{ news, setNews }}>
      {children}
    </NewsContext.Provider>
  );
};

export const useNews = () => useContext(NewsContext);
