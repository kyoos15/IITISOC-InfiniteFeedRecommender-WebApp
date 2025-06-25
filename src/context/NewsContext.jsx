import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios'
// import { axiosInstance } from '../../../server/src/utils/axios.js';
export const axiosInstance  = axios.create({ // i think the import of line 3 and this is same, remove this comment if there is some reason for this export.
    baseURL: "http://localhost:4000/api",
    withCredentials: true,
});

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
    let [news, setNews] = useState([]);

    useEffect(() => { // same for this see NewsFeed.jsx
        const fetchAllAssets = async () => {
            try {
                const response = await axiosInstance.get(
                    `/asset/getallassets`
                );

                console.log("response: ", response.data);
                setNews(response.data.data);

            } catch (error) {
                console.log("Error occured: ",error);
            }
        }
        fetchAllAssets();
    }, []);

    return (
        <NewsContext.Provider value={{ news, setNews }}>
            {children}
        </NewsContext.Provider>
    );
};

export const useNews = () => useContext(NewsContext);
