import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummeryCard from '../Shared/NewsSummeryCard/NewsSummeryCard';

const Home = () => {
    const allNews = useLoaderData();
    return (
        <div>
            <h3>home page has total: {allNews.length}
                {
                    allNews.map(news => <NewsSummeryCard key={news._id} news={news}></NewsSummeryCard>)
                }

            </h3>
        </div>
    );
};

export default Home;