import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";

const TextEditor = ({ getText }) => {
  const editorRef = useRef(null);

  const handleGetContent = () => {
    if (editorRef.current) {
      const content = editorRef.current.getContent(); // گرفتن مقدار به‌صورت HTML
      console.log("Content:", content);
    }
  };

  return (
    <>
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
              font-size: 14px;
              direction: rtl;
              text-align: right;
            }
            .tox-toolbar { justify-content: flex-end; }
          `,
        }}
      />
      {/* دکمه برای گرفتن مقدار */}
      <button
        onClick={handleGetContent}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        گرفتن مقدار
      </button>
    </>
  );
};

export default TextEditor;
