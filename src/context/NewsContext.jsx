import React, { createContext, useContext, useState, useEffect } from 'react';
import { axiosInstance } from '../../../server/src/utils/axios.js';

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchAllAssets = async () => {
            try {
                const response = await axiosInstance.get(
                    `/asset/getallassets`
                );

                console.log("response: ", response.data);
                setNews(response.data);

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
