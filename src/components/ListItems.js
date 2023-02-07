import React from "react";
import "./ListItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import styled from "styled-components";
// import { useState } from "react";

// const Button = styled.button`
//   background: transparent;
//   border-radius: 3px;
//   border: 2px solid palevioletred;
//   color: palevioletred;
//   cursor: pointer;
//   &:hover {
//     background: palevioletred;
//     color: white;
//   }
// `;

function ListItems(props) {
  const items = props.items;
  //   const [complete, setComplete] = useState(false);

  //   const handleComplete = (id) => {
  //     setComplete(!complete);
  //   };

  const listItems = items.map((item) => {
    return (
      <div className="list" key={item.key}>
        <p>
          <input
            type="text"
            id={item.key}
            value={item.text}
            onChange={(e) => {
              props.setUpdate(e.target.value, item.key);
            }}
          />
          <span>
            <FontAwesomeIcon
              className="faicons"
              onClick={() => {
                props.deleteItem(item.key);
              }}
              icon="trash"
            />
            {/* <Button
              id={item.key}
              className="listButton"
              onClick={() => {
                handleComplete(item.key);
              }}
            >
              Done
            </Button> */}
          </span>
        </p>
      </div>
    );
  });
  return <div>{listItems}</div>;
}

export default ListItems;
