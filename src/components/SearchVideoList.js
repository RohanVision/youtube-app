import React, { useEffect, useState } from "react";
import { GOOGLE_API_KEY, SERACH_VIDEO } from "../utils/constants";
import { Link, useSearchParams } from "react-router-dom";
import SearchVideoCard from "./SearchVideoCard";

const SearchVideoList = () => {
    const [searchParam] = useSearchParams();
    const [searchVideos, setSearchVideos] = useState([]);
    const query = searchParam.get("q"); // Get the query from the URL

    useEffect(() => {
        console.log("SearchVideoList rendered with query:", query);
        if (query) {
            getSearchVideos();
        }
    }, [query]); // Re-run when query changes

    const getSearchVideos = async () => {
        const data = await fetch(`${SERACH_VIDEO}${query}&key=${GOOGLE_API_KEY}`);
        const json = await data.json();
        setSearchVideos(json.items);
        console.log(json.items);
    };

    return (
        <div className="flex flex-col justify-self-center w-1/2 items-center relative top-24 h-[calc(100vh-56px)]">
            <h1 className="text-2xl font-bold mb-4">Results for "{query}"</h1>
            <div className="flex flex-col gap-4 w-full px-4">
                {searchVideos.map((video) => {
                    return <Link key={video.etag} to={"/watch?v=" + video.id.videoId}>
                        <SearchVideoCard info={video} />
                    </Link>
                })
                }
            </div>
        </div>
    );

};

export default SearchVideoList;
