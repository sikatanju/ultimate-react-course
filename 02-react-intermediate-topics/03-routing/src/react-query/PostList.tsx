import { useState } from "react";
import usePosts from "./hooks/usePosts";
import React from "react";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const PostList = () => {
  const [pageSize, setPageSize] = useState(10);
  const {
    data: posts,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
  } = usePosts({ pageSize: pageSize });

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <select
        value={pageSize}
        onChange={(event) => setPageSize(parseInt(event.target.value))}
        className="form-select mb-3"
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
      <ul className="list-group">
        {posts.pages.map((posts, index) => (
          <React.Fragment key={index}>
            {posts.map((post) => (
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
      <button
        // disabled={page === 1}
        onClick={() => fetchNextPage()}
        className="btn btn-primary"
      >
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </button>
    </>
  );
};

export default PostList;
