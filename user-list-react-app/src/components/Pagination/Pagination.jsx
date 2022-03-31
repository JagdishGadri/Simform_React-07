import React from "react";
import "./Pagination.css";

function Pagination(props) {
  let currentPage = 1;

  const pageOneHandler = () => {
    currentPage !== 1 ? (currentPage -= 1) : (currentPage = 1);
    props.changePage(currentPage);
  };

  const pageTwoHandler = () => {
    currentPage !== 2 ? (currentPage += 1) : (currentPage = 2);
    props.changePage(currentPage);
  };

  return (
    <div>
      <ul className="pagination">
        <li className="page-number">
          <a onClick={pageOneHandler}> &lt;&lt; Prev </a>
        </li>
        <li className="page-number">
          <a onClick={pageOneHandler}>1</a>
        </li>
        <li className="page-number">
          <a onClick={pageTwoHandler}>2</a>
        </li>
        <li className="page-number">
          <a onClick={pageTwoHandler}>Next &gt;&gt;</a>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
