import { useRef, useState, useEffect } from "react";

const ImageUploader = ({ defaultImage }) => {
  const fileSelect = useRef(null);
  const dropbox = useRef();
  const [image, setImage] = useState(defaultImage);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function dragEnter(e) {
      e.stopPropagation();
      e.preventDefault();
    }
  
    function dragOver(e) {
      e.stopPropagation();
      e.preventDefault();
    }
  
    function drop(e) {
      e.stopPropagation();
      e.preventDefault();
  
      const dt = e.dataTransfer;
      const files = dt.files;
  
      handleFiles(files);
    }
    
  
    dropbox.current.addEventListener("dragenter", dragEnter, false);
    dropbox.current.addEventListener("dragover", dragOver, false);
    dropbox.current.addEventListener("drop", drop, false);
  
    return () => {
      dropbox.current.removeEventListener("dragenter", dragEnter);
      dropbox.current.removeEventListener("dragover", dragOver);
      dropbox.current.removeEventListener("drop", drop);
    };
  }, []);

  async function handleImageUpload() {
    if (fileSelect) {
      fileSelect.current.click();
    }
  }

  function handleFiles(files) {
    for (let i = 0; i < files.length; i++) {
      console.log(files[i]);
      uploadFile(files[i]);
    }
  }

  function uploadFile(file) {
      const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUDNAME}/upload`;
      const xhr = new XMLHttpRequest();

      const fd = new FormData();
      xhr.open("POST", url, true);
      xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

      xhr.upload.addEventListener("progress", (e) => {
          setProgress(Math.round((e.loaded * 100.0) / e.total));
      });

      xhr.onreadystatechange = (e) => {
          if (xhr.readyState == 4 && xhr.status == 200) {
              const response = JSON.parse(xhr.responseText);

              setImage(response.secure_url);
              console.log(response.secure_url);
          }
      }; 

      fd.append(
        "upload_preset",
        process.env.NEXT_PUBLIC_CLOUDINARY_PRESET
      );
      fd.append("tags", "browser_upload");
      fd.append("file", file);
      xhr.send(fd);
  }

  return (
    <>
    {image ? (
      <img
        className="object-contain rounded-lg"
        src={image.replace("upload/", "upload/w_600/")}
        style={{ height: 400, width: 600 }}
      />
    ) : (
      <div ref={dropbox}
        className="bg-gray-200 border-4 border-dashed border-gray-400 rounded-lg"
        style={{ height: 400, width: 600 }}
      >
        <form className="flex justify-center items-center h-full">
          {progress === 0 ? (
            <div className="text-gray-700 text-center">
              <button
                className="bg-blue-600 hover:bg-blue-800 text-white font-bold px-4 py-2 rounded block m-auto"
                onClick={handleImageUpload}
                type="button"
              >
                Browse
              </button>
            </div>
          ) : (
            <span className="text-gray-700">{progress}%</span>
          )}

          <input
            ref={fileSelect}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={(e) => handleFiles(e.target.files)}
          />
        </form>
      </div>
    )}
  </>
  );
}

export default ImageUploader;