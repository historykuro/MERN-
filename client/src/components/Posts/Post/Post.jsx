import React from "react";
import icons from "../../../ultis/icon";
import { useDispatch } from "react-redux";
import { showModalUpdate } from "../../../redux/actions";
import { deletePost } from "../../../redux/actions/posts";
import UpdatePostModal from "../../UpdatePostModal/UpdatePostModal";
import { Link } from "react-router-dom";

const { BsTrash } = icons;

const Post = ({ post, setCurrentId, currentId }) => {
  const dispatch = useDispatch();

  const showUpdateModal = React.useCallback(() => {
    dispatch(showModalUpdate());
    setCurrentId(post._id);
  }, [dispatch, setCurrentId, post]);

  // Delete Product
  const onDeleteClick = React.useCallback(() => {
    dispatch(deletePost(post._id));
  }, [dispatch, post]);

  return (
    <div class="w-[382px] bg-white border relative border-gray-200 rounded-lg shadow-md  dark:bg-gray-800 dark:border-gray-700">
      <div className="">
        <img
          class="rounded-t-lg object-cover w-full h-[300px] "
          src={post.selectedFile}
          alt=""
          required
        />
      </div>
      <div class="p-5">
        <Link>
          <div className="line-clamp-3 w-48 text-ellipsis mb-2">
            <h5
              class=" text-2xl font-bold tracking-tight  text-gray-900 dark:text-white  "
              required>
              {post.title}
            </h5>
          </div>
        </Link>
        <div className="line-clamp-3 w-64 text-ellipsis mb-3">
          <p class=" font-normal text-gray-700  dark:text-gray-400 ">
            {post.content}
          </p>
        </div>
        <div className="flex justify-between ">
          <UpdatePostModal currentId={currentId} setCurrentId={setCurrentId} />
          <button
            onClick={showUpdateModal}
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <span>UPDATE</span>
          </button>
          <button
            onClick={onDeleteClick}
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <BsTrash className="mr-1" />
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
