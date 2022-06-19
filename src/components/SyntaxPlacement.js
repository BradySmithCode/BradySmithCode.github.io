import React from "react";

const SyntaxPlacement = ({ syntaxList }) => {
  return (
    <>
      {syntaxList.map((syntaxItem) => (
        <div>
          {syntaxItem.type == "header" ? (
            <div
              className="divHover"
              style={{
                backgroundColor: `${syntaxItem.backgroundColor}`,
                height: `${syntaxItem.height}`,
                display: "flex",
                alignItems: "center",
                justifyContent: `${syntaxItem.alignment}`,
              }}
            >
              <h1
                style={{
                  color: syntaxItem.color,
                  fontSize: `${syntaxItem.size}`,
                }}
              >
                {syntaxItem.text}
              </h1>
            </div>
          ) : syntaxItem.type == "paragraph" ? (
            <div
              className="divHover"
              style={{
                backgroundColor: `${syntaxItem.backgroundColor}`,
                height: `${syntaxItem.height}`,
                display: "flex",
                alignItems: "center",
                justifyContent: `${syntaxItem.alignment}`,
              }}
            >
              <p
                style={{
                  color: syntaxItem.color,
                  fontSize: `${syntaxItem.size}`,
                }}
              >
                {syntaxItem.text}
              </p>
            </div>
          ) : (
            <div
              style={{
                backgroundColor: `${syntaxItem.backgroundColor}`,
                display: "flex",
                alignItems: "center",
                justifyContent: `${syntaxItem.alignment}`,
              }}
            >
              <img
                src={`${syntaxItem.src}`}
                style={{
                  height: `${syntaxItem.height}`,
                  width: `${syntaxItem.width}`,
                }}
                alt=""
              />
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default SyntaxPlacement;
