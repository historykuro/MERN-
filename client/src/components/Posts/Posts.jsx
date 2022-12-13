import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postsState } from "../../redux/selector/index";
import Post from "./Post/Post";
import { getPosts } from "../../redux/actions/posts";

const Posts = ({ currentId, setCurrentId }) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  const posts = useSelector(postsState);

  return (
    <div className="flex  flex-wrap w-full gap-8  text-black  ">
      {!posts.length ? (
        <h1>no data</h1>
      ) : (
        posts.map((post) => (
          <div key={post._id} className="flex  rounded-md mt-4  basis-[48%] ">
            <Post
              post={post}
              currentId={currentId}
              setCurrentId={setCurrentId}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default Posts;
