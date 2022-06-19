import "./App.css";
import SyntaxPlacement from "./components/SyntaxPlacement";
import prettier from "prettier";
import ReactDOMServer from "react-dom/server";
import { useState, useEffect } from "react";

function App() {
  // useStates for everything
  const [syntaxList, setSyntaxList] = useState([]);
  const [modalHeader, setModalHeader] = useState(false);
  const [modalParagraph, setModalParagraph] = useState(false);
  const [modalImage, setModalImage] = useState(false);

  // Header
  const [headerText, setHeaderText] = useState("");
  const [headerAlign, setHeaderAlign] = useState("");
  const [headerColor, setHeaderColor] = useState("");
  const [headerSize, setHeaderSize] = useState("");
  const [headerBackground, setHeaderBackground] = useState("");
  const [headerHeight, setHeaderHeight] = useState("");

  // Paragraph
  const [paragraphText, setParagraphText] = useState("");
  const [paragraphAlign, setParagraphAlign] = useState("");
  const [paragraphColor, setParagraphColor] = useState("");
  const [paragraphSize, setParagraphSize] = useState("");
  const [paragraphBackground, setParagraphBackground] = useState("");
  const [paragraphHeight, setParagraphHeight] = useState("");

  // Image
  const [imageSrc, setImageSrc] = useState("");
  const [imageAlign, setImageAlign] = useState("");
  const [imageHeight, setImageHeight] = useState("");
  const [imageWidth, setImageWidth] = useState("");
  const [imageBackgroundColor, setImageBackgroundColor] = useState("");

  // IDs
  const [count, setCount] = useState(0);

  // Show/Close Modals
  const modalShowHeader = () => {
    setModalHeader((modalHeader) => !modalHeader);
  };
  const modalShowParagraph = () => {
    setModalParagraph((modalParagraph) => !modalParagraph);
  };
  const modalShowImage = () => {
    setModalImage((modalImage) => !modalImage);
  };

  // Header Change
  const headerTextChange = (event) => {
    setHeaderText(event.target.value);
  };

  const headerAlignChange = (event) => {
    setHeaderAlign(event.target.value);
  };

  const headerColorChange = (event) => {
    setHeaderColor(event.target.value);
  };

  const headerSizeChange = (event) => {
    setHeaderSize(event.target.value);
  };

  const headerBackgroundChange = (event) => {
    setHeaderBackground(event.target.value);
  };

  const headerHeightChange = (event) => {
    setHeaderHeight(event.target.value);
  };

  //Pagragraph Change
  const paragraphTextChange = (event) => {
    setParagraphText(event.target.value);
  };

  const paragraphAlignChange = (event) => {
    setParagraphAlign(event.target.value);
  };

  const paragraphColorChange = (event) => {
    setParagraphColor(event.target.value);
  };

  const paragraphSizeChange = (event) => {
    setParagraphSize(event.target.value);
  };

  const paragraphBackgroundChange = (event) => {
    setParagraphBackground(event.target.value);
  };

  const paragraphHeightChange = (event) => {
    setParagraphHeight(event.target.value);
  };

  // Image Change
  const ImageAlignChange = (event) => {
    setImageAlign(event.target.value);
  };

  const ImageSrcChange = (event) => {
    setImageSrc(event.target.value);
  };

  const ImageHeightChange = (event) => {
    setImageHeight(event.target.value);
  };

  const ImageWidthChange = (event) => {
    setImageWidth(event.target.value);
  };

  const ImageBackgroundChange = (event) => {
    setImageBackgroundColor(event.target.value);
  };

  // Add header to list
  const addHeader = (event) => {
    setCount((count) => count + 1);
    syntaxList.push({
      id: count,
      type: "header",
      text: headerText,
      alignment: headerAlign,
      color: headerColor,
      size: headerSize,
      backgroundColor: headerBackground,
      height: headerHeight,
    });
  };

  // Add Paragraph to list
  const addParagraph = (event) => {
    setCount((count) => count + 1);
    syntaxList.push({
      id: count,
      type: "paragraph",
      text: paragraphText,
      alignment: paragraphAlign,
      color: paragraphColor,
      size: paragraphSize,
      backgroundColor: paragraphBackground,
      height: paragraphHeight,
    });
  };

  const addImage = (event) => {
    setCount((count) => count + 1);
    syntaxList.push({
      id: count,
      type: "image",
      alignment: imageAlign,
      height: imageHeight,
      width: imageWidth,
      src: imageSrc,
      backgroundColor: imageBackgroundColor,
    });
  };

  // Creates the website
  const websiteCreator = () => {
    let htmlPage = `<html lang="en">
    <head>
    \t<meta charSet="utf-8" />
    \t<title>Website Creation</title>
    </head>
    <body style="margin: 0; border-sizing: border-box; padding: 0;">`;
    syntaxList.map((syntax) => {
      {
        syntax.type == "header"
          ? (htmlPage += `\n\t\t<div style="display: flex; align-items: center; justify-content: ${syntax.alignment}; background-color: ${syntax.backgroundColor}; height: ${syntax.height};">\n\t\t\t<h1 style="padding: 0;text-align: ${syntax.alignment}; color: ${syntax.color}; font-size: ${syntax.size};">${syntax.text}</h1>\n\t\t</div>`)
          : syntax.type == "paragraph"
          ? (htmlPage += `\n\t\t<div style="display: flex; align-items: center; justify-content: ${syntax.alignment}; background-color: ${syntax.backgroundColor}; height: ${syntax.height};">\n\t\t\t<p style="margin: 0;text-align: ${syntax.alignment}; color: ${syntax.color}; font-size: ${syntax.size};">${syntax.text}</p>\n\t\t</div>`)
          : (htmlPage += `\n\t\t<div style="display: flex; align-items: center; justify-content: ${syntax.alignment}; background-color: ${syntax.backgroundColor};">\n\t\t\t<img style="height: ${syntax.height}; width: ${syntax.width}" src="${syntax.src}" alt=""</img>\n\t\t</div>`);
      }
    });
    htmlPage += `
    </body>
</html>
    `;
    const element = document.createElement("a");
    const file = new Blob([htmlPage], {
      type: "text/html",
    });
    element.href = URL.createObjectURL(file);
    element.download = "Website.html";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div className="">
      <div className="header">
        <div className="logo">
          <h1>Website Creator</h1>
        </div>
        <div className="buttons">
          <ul>
            <li
              onClick={() => {
                modalShowHeader();
              }}
            >
              Add Header
            </li>
            <li
              onClick={() => {
                modalShowParagraph();
              }}
            >
              Add Paragraph
            </li>
            <li
              onClick={() => {
                modalShowImage();
              }}
            >
              Add Image
            </li>
            <li onClick={websiteCreator}>Create Website</li>
          </ul>
        </div>
      </div>
      {modalHeader ? (
        <div className="modal">
          <div className="modalInfo">
            <form
              onSubmit={() => {
                modalShowHeader();
                addHeader();
              }}
            >
              <div className="TextDiv" onChange={headerTextChange}>
                <label>Header Text:</label>
                <input
                  name="headerText"
                  id="headerText"
                  type="text"
                  required
                ></input>
              </div>
              <div className="DropDownDiv" onChange={headerAlignChange}>
                <label>Text-Alignment:</label>
                <input list="alignments" required />
                <datalist id="alignments">
                  <option value="Left" />
                  <option value="Center" />
                  <option value="Right" />
                </datalist>
              </div>
              <div className="DropDownDiv" onChange={headerColorChange}>
                <label>Text Color:</label>
                <input list="colors" required />
                <datalist id="colors">
                  <option value="black" />
                  <option value="red" />
                  <option value="blue" />
                  <option value="green" />
                  <option value="white" />
                  <option value="orange" />
                  <option value="yellow" />
                </datalist>
              </div>
              <div className="TextDiv" onChange={headerSizeChange}>
                <label>Font Size (include px syntax):</label>
                <input
                  name="headerSize"
                  id="headerSize"
                  type="text"
                  required
                ></input>
              </div>
              <div className="DropDownDiv" onChange={headerBackgroundChange}>
                <label>Background Color:</label>
                <input list="colors" required />
                <datalist id="colors">
                  <option value="black" />
                  <option value="red" />
                  <option value="blue" />
                  <option value="green" />
                  <option value="white" />
                  <option value="orange" />
                  <option value="yellow" />
                </datalist>
              </div>
              <div className="TextDiv" onChange={headerHeightChange}>
                <label>Height (include px syntax):</label>
                <input
                  name="headerHeight"
                  id="headerHeight"
                  type="text"
                  required
                ></input>
              </div>
              <div className="closeModal">
                <input type="submit" value="Submit" />
                <label onClick={modalShowHeader}>Close</label>
              </div>
            </form>
          </div>
        </div>
      ) : null}
      {modalParagraph ? (
        <div className="modal">
          <div className="modalInfo">
            <form
              onSubmit={() => {
                modalShowParagraph();
                addParagraph();
              }}
            >
              <div className="TextDiv" onChange={paragraphTextChange}>
                <label>Paragraph Text:</label>
                <textarea
                  name="paraText"
                  id="paraText"
                  cols="30"
                  rows="10"
                  required
                ></textarea>
              </div>
              <div className="DropDownDiv" onChange={paragraphAlignChange}>
                <label>Text-Alignment:</label>
                <input list="alignments" required />
                <datalist id="alignments">
                  <option value="Left" />
                  <option value="Center" />
                  <option value="Right" />
                </datalist>
              </div>
              <div className="DropDownDiv" onChange={paragraphColorChange}>
                <label>Text Color:</label>
                <input list="colors" required />
                <datalist id="colors">
                  <option value="black" />
                  <option value="red" />
                  <option value="blue" />
                  <option value="green" />
                  <option value="white" />
                  <option value="orange" />
                  <option value="yellow" />
                </datalist>
              </div>
              <div className="TextDiv" onChange={paragraphSizeChange}>
                <label>Font Size (include px syntax):</label>
                <input
                  name="paragraphSize"
                  id="paragraphSize"
                  type="text"
                  required
                ></input>
              </div>
              <div className="DropDownDiv" onChange={paragraphBackgroundChange}>
                <label>Background Color:</label>
                <input list="colors" required />
                <datalist id="colors">
                  <option value="black" />
                  <option value="red" />
                  <option value="blue" />
                  <option value="green" />
                  <option value="white" />
                  <option value="orange" />
                  <option value="yellow" />
                </datalist>
              </div>
              <div className="TextDiv" onChange={paragraphHeightChange}>
                <label>Height (include px syntax):</label>
                <input
                  name="paragraphHeight"
                  id="paragraphHeight"
                  type="text"
                  required
                ></input>
              </div>

              <div className="closeModal">
                <input type="submit" value="Submit" />
                <label onClick={modalShowParagraph}>Close</label>
              </div>
            </form>
          </div>
        </div>
      ) : null}
      {modalImage ? (
        <div className="modal">
          <div className="modalInfo">
            <form
              onSubmit={() => {
                modalShowImage();
                addImage();
              }}
            >
              <div className="TextDiv" onChange={ImageSrcChange}>
                <label>Image Src:</label>
                <input
                  name="ImageSrc"
                  id="ImageSrc"
                  type="text"
                  required
                ></input>
              </div>
              <div className="DropDownDiv" onChange={ImageAlignChange}>
                <label>Image-Alignment:</label>
                <input list="alignments" required />
                <datalist id="alignments">
                  <option value="Left" />
                  <option value="Center" />
                  <option value="Right" />
                </datalist>
              </div>
              <div className="TextDiv" onChange={ImageHeightChange}>
                <label>Height (include px syntax):</label>
                <input
                  name="ImageHeight"
                  id="ImageHeight"
                  type="text"
                  required
                ></input>
              </div>
              <div className="TextDiv" onChange={ImageWidthChange}>
                <label>Width (include px syntax):</label>
                <input
                  name="ImageWidth"
                  id="ImageWidth"
                  type="text"
                  required
                ></input>
              </div>
              <div className="DropDownDiv" onChange={ImageBackgroundChange}>
                <label>Background Color:</label>
                <input list="colors" required />
                <datalist id="colors">
                  <option value="black" />
                  <option value="red" />
                  <option value="blue" />
                  <option value="green" />
                  <option value="white" />
                  <option value="orange" />
                  <option value="yellow" />
                </datalist>
              </div>
              <div className="closeModal">
                <input type="submit" value="Submit" />
                <label onClick={modalShowImage}>Close</label>
              </div>
            </form>
          </div>
        </div>
      ) : null}
      <SyntaxPlacement syntaxList={syntaxList} />
    </div>
  );
}

export default App;
