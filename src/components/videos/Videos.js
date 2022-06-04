import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import useVideoList from "../hooks/useVideoList";
import Video from "./Video";

export default function Videos() {
  const [page, setPage] = useState(1);
  const { loading, error, videos, hasMore } = useVideoList(page);

  // console.log(videos);
  return (
    <div>
      {videos.length > 0 && (
        <InfiniteScroll
          className="container mt-[60px] grid grid-flow-row grid-cols-3"
          dataLength={videos.length}
          hasMore={hasMore}
          next={() => setPage(page + 8)}
        >
          {videos.map((video) => (
            <Link to="/project" key={video.youtubeID}>
              <Video title={video.title} id={video.youtubeID} noq={video.noq} />
            </Link>
          ))}
        </InfiniteScroll>
      )}
      {!loading && videos.length === 0 && <div>No data found.</div>}
      {error && <div>Error</div>}
      {loading && (
        <div className="flex justify-center text-[30px]">loading...</div>
      )}
    </div>
  );
}
