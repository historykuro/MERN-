import React from "react";
import Modal from "react-modal";
import FileBase64 from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";

import { hideModal } from "../../redux/actions";
import { modalState } from "../../redux/selector";
import icons from "../../ultis/icon";
import { createPost } from "../../redux/actions/posts";

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

const CreatePostModal = () => {
  const dispatch = useDispatch();

  const [data, setData] = React.useState({
    title: "",
    content: "",
    selectedFile: "",
  });

  const { isShow } = useSelector(modalState);
  const onClose = React.useCallback(() => {
    dispatch(hideModal());
  }, [dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createPost(data));

    onClose();
    setData({
      title: "",
      content: "",
      selectedFile: "",
    });
  };

  const create = (
    <div>
      <div className="flex justify-between">
        <h2 className="text-xl mb-1">Create Post</h2>
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

      <FileBase64
        accept="image/*"
        multiple={false}
        type="file"
        value={data.selectedFile}
        onDone={({ base64 }) => setData({ ...data, selectedFile: base64 })}
      />

      <button
        onClick={onSubmit}
        className="w-full bg-slate-800 text-center py-1 mt-3 rounded-lg cursor-pointer">
        <div className="text-white ">Create</div>
      </button>
    </div>
  );
  return (
    <Modal
      // isShow
      isOpen={isShow}
      // onAfterOpen={afterOpenModal}
      onRequestClose={onClose}
      style={customStyles}>
      {/* {currentId ? update : create} */}
      {create}
    </Modal>
  );
};

export default CreatePostModal;
