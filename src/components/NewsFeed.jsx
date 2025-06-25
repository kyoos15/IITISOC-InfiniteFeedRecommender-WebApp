import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard';
import { axiosInstance, useNews } from '../context/NewsContext';
/* eslint-disable */
const NewsFeed = () => {
    let { news } = useNews();
    const [pageCount, setPageCount] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const viewerId = null // fill this up;
    const viewerType = "Channel"; // change this
    const [result, setResult] = useState(null);

    useEffect(() => {
        const doWork = async () => {
            const response = await axiosInstance.post(`/asset/getQueyResult_Taggs/${viewerId}`, {
                viewerType,
                collectionName: "taggsVectorDBCollection_1",
                resultCounts: Infinity
            });

            setResult(response.data.data);
        };

        doWork();
    }, []);

    if (result) {
        const start = (pageCount - 1) * pageSize;
        const end = start + pageSize;
        let tempArr = [];
        for (let i = start; i < Math.min(end, result["ids"][0].length()); i++) {
            tempArr.push(result["ids"][0][i]);
        }
        let assetArray = [];
        const findAsset = async ({ id }) => {
            const foundedAsset = await axiosInstance.get(`getassetbyid/${id}`);
            assetArray.push(foundedAsset);
        }
        for (const id in tempArr) {
            findAsset({ id });
        }
        news = [...news, ...assetArray];
    }

    const onPageEndReach = async () => {
        setPageCount(prev => prev + 1);
        if (result) {
            const start = (pageCount - 1) * pageSize;
            const end = start + pageSize;
            let tempArr = [];
            for (let i = start; i < Math.min(end, result["ids"][0].length()); i++) {
                tempArr.push(result["ids"][0][i]);
            }
            let assetArray = [];
            const findAsset = async ({ id }) => {
                const foundedAsset = await axiosInstance.get(`getassetbyid/${id}`);
                assetArray.push(foundedAsset);
            }
            for (const id in tempArr) {
                findAsset({ id });
            }
            news = [...news, ...assetArray];
        }
    }


    if (!news || news.length === 0) {
        return (
            <div>Loading ....</div>
        )
    }
    console.log("news is: ", news);

    return (
        // impliment infinite scroll here and run onPageEndReach
        <div className="px-6 py-4 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {news.map((item, idx) => (
                <NewsCard key={idx} {...item} />
            ))}
        </div>
    );
};

export default NewsFeed;
