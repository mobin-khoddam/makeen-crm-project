import { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

const DisciplinaryRegulations = () => {
  const [text, setText] = useState("");

  const editorRef = useRef(null);

  const handleGetContent = () => {
    if (editorRef.current) {
      const content = editorRef.current.getContent({ format: "text" });
      setText(content);
      console.log(content);
    }
  };
  return (
    <div className="w-full flex-col items-start ">
      <button
        onClick={handleGetContent}
        className="flex items-center gap-x-2 justify-center bg-[#4318FF] text-white w-[178px] h-[40px] rounded-[10px] active:scale-95 transition-all ease-linear duration-150  mb-8 text-[14px]  "
      >
        {text === "" ? (
          <>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z"
                fill="white"
              />
              <path
                d="M12 16.75C11.59 16.75 11.25 16.41 11.25 16V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V16C12.75 16.41 12.41 16.75 12 16.75Z"
                fill="white"
              />
              <path
                d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
                fill="white"
              />
            </svg>
            افزودن آیین نامه
          </>
        ) : (
          <>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
                fill="white"
              />
              <path
                d="M14.9995 10.2602C14.8095 10.2602 14.6195 10.1902 14.4695 10.0402L11.9995 7.57021L9.52945 10.0402C9.23945 10.3302 8.75945 10.3302 8.46945 10.0402C8.17945 9.75019 8.17945 9.2702 8.46945 8.9802L11.4695 5.9802C11.7595 5.6902 12.2395 5.6902 12.5295 5.9802L15.5295 8.9802C15.8195 9.2702 15.8195 9.75019 15.5295 10.0402C15.3795 10.1902 15.1895 10.2602 14.9995 10.2602Z"
                fill="white"
              />
              <path
                d="M12 15.2598C11.59 15.2598 11.25 14.9198 11.25 14.5098V6.50977C11.25 6.09977 11.59 5.75977 12 5.75977C12.41 5.75977 12.75 6.09977 12.75 6.50977V14.5098C12.75 14.9298 12.41 15.2598 12 15.2598Z"
                fill="white"
              />
              <path
                d="M12.0004 18.2302C9.89044 18.2302 7.77043 17.8902 5.76043 17.2202C5.37043 17.0902 5.16043 16.6602 5.29043 16.2702C5.42043 15.8802 5.85045 15.6602 6.24045 15.8002C9.96045 17.0402 14.0504 17.0402 17.7704 15.8002C18.1604 15.6702 18.5904 15.8802 18.7204 16.2702C18.8504 16.6602 18.6404 17.0902 18.2504 17.2202C16.2304 17.9002 14.1104 18.2302 12.0004 18.2302Z"
                fill="white"
              />
            </svg>
            انتشار
          </>
        )}
      </button>
      <Editor
        apiKey="8qopx3m0ijsbgocdaaytwuq8444nvewp5h9rzsyhr2xwhbsv"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>متن خود را بنویسید ...</p>"
        init={{
          height: 452,
          menubar: false,
          directionality: "rtl",
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "charmap",
            "preview",
          ],
          toolbar: "undo redo | bold italic | alignleft aligncenter alignright",
          content_style: `
            @font-face {
              font-family: 'Vazir';
              src: url('/fonts/Vazir.woff2') format('woff2');
              font-weight: normal;
              font-style: normal;
            }
            body {
              font-family: 'Vazir', sans-serif;
              font-size: 16px;
              direction: rtl;
              text-align: right;
            }
            .tox-toolbar { justify-content: flex-end; }
          `,
        }}
      />
    </div>
  );
};

export default DisciplinaryRegulations;
