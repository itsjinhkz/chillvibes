import React, { useState } from "react";
import Modal from "react-modal";
import ReactPlayer from "react-player";
import { AiFillPlayCircle, AiFillCloseCircle } from "react-icons/ai";

const customStyles = {
  content: {
    top: "40%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(255, 255, 255,0)",
  },
};

export default function CarouselModal({ index }) {
  const [trailer, settrailer] = useState(
    "https://www.youtube.com/watch?v=uqJ9u7GSaYM"
  );
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
    playVideo(index);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = " rgba(0, 0, 0, 0.8)";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const playVideo = (index) => {
    if (index === 0) {
      settrailer("https://www.youtube.com/watch?v=uqJ9u7GSaYM");
    }
    if (index === 1) {
      settrailer("https://www.youtube.com/watch?v=kBY2k3G6LsM");
    }
    if (index === 2) {
      settrailer("https://www.youtube.com/watch?v=NYH2sLid0Zc");
    }
  };
  return (
    <div>
      <button onClick={openModal}>
        <AiFillPlayCircle color="white" size={70} />
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <button onClick={closeModal}>
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}></h2>
            <AiFillCloseCircle size={50} color="black" />
          </button>
          <div>
            <ReactPlayer
              url={trailer}
              className="lg:w-1000 lg:h-500 z-50 relative"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}
