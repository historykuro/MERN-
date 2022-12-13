import React from "react";
import Modal from "react-modal";
import FileBase64 from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";

import { hideModalUpdate } from "../../redux/actions";
import { modalStateUpdate } from "../../redux/selector";
import icons from "../../ultis/icon";
import { updatePost } from "../../redux/actions/posts";
import { GrSubtractCircle } from "react-icons/gr";

const { GrClose } = icons;
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement(document.getElementById("root"));

const UpdatePostModal = ({ currentId, setCurrentId }) => {
  const dispatch = useDispatch();

  const [data, setData] = React.useState({
    title: "",
    content: "",
    selectedFile: "",
  });
  const post = useSelector((state) =>
    currentId ? state.posts.find((message) => message._id === currentId) : null
  );
  const afterOpenModal = () => {};
  React.useEffect(() => {
    if (post) setData(post);
  }, [post]);
  const { isShowUpdate } = useSelector(modalStateUpdate);
  const onClose = React.useCallback(() => {
    setCurrentId(0);
    dispatch(hideModalUpdate());
  }, [dispatch, setCurrentId]);

  const onUpdate = (e) => {
    e.preventDefault();

    dispatch(updatePost(currentId, data));
    onClose();
    setData({
      title: "",
      message: "",
      selectedFile: "",
    });
  };

  const update = (
    <div>
      <div className="flex justify-between">
        <h2 className="text-xl mb-1">Update Post</h2>
        <button onClick={onClose}>
          <GrClose />
        </button>
      </div>

      <form>
        <div>
          <input
            type="text"
            className="w-full outline-none border-none"
            placeholder="Title *"
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
          />
        </div>
        <div className="border solid border-neutral-800 w-full"></div>
        <div className="mt-1">
          <textarea
            name="w3review"
            rows="4"
            cols="50"
            placeholder="Content..."
            onChange={(e) => setData({ ...data, content: e.target.value })}
            value={data.content}></textarea>
        </div>
      </form>

      <div className="my-2">
        <FileBase64
          accept="image/*"
          multiple={false}
          type="file"
          value={data.attachment}
          onDone={({ base64 }) => setData({ ...data, selectedFile: base64 })}
        />
      </div>

      <div className="w-full bg-slate-800 text-center py-1 rounded-lg cursor-pointer">
        <button className="text-white " onClick={onUpdate}>
          Update
        </button>
      </div>
    </div>
  );

  return (
    <Modal
      isOpen={isShowUpdate}
      onAfterOpen={afterOpenModal}
      onRequestClose={onClose}
      style={customStyles}>
      {update}
    </Modal>
  );
};

export default UpdatePostModal;
