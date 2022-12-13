import React from "react";
import { useDispatch } from "react-redux";

import { showModal } from "../redux/actions";
import { getPosts } from "../redux/actions/posts";
import Header from "../components/Header/Header";
import Posts from "../components/Posts/Posts";
import icons from "../ultis/icon";
import CreatePostModal from "../components/CreatePostModal/CreatePostModal";

const { IoMdAdd } = icons;

const Homepage = () => {
  const dispatch = useDispatch();

  const [currentId, setCurrentId] = React.useState(0);

  React.useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  const openCreatePostModal = React.useCallback(() => {
    dispatch(showModal());
  }, [dispatch]);
  return (
    <div className="bg-gray-900 h-[100vh]">
      <div className="w-full relative h-auto bg-gray-900  ">
        <Header />
        <div className="px-[20%] bg-gray-900  h-auto">
          <Posts currentId={currentId} setCurrentId={setCurrentId} />
          <CreatePostModal />
          <button
            onClick={openCreatePostModal}
            className=" w-8 h-8 bg-white flex items-center justify-center shadow-sm  rounded-[50%] right-0 mr-8 bottom-5  fixed">
            <IoMdAdd className="text-black " />
          </button>
        </div>
        <div className="flex justify-center text-white py-14"></div>
      </div>
    </div>
  );
};

export default Homepage;
