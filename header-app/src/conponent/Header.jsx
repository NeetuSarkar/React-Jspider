import React from "react";
import "../Styles/Header.css";

const Header = (props) => {
  console.log(props);
  return (
    <div className="header-div">
      <h1>Sample Heading</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur odio
        quia natus quo, ut nisi. Molestiae suscipit deleniti dignissimos non nam
        libero eius debitis voluptates sequi, id velit veniam, alias culpa
        incidunt deserunt iure aliquid fugit saepe cum architecto quisquam.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
        molestias accusantium distinctio at quo, rerum voluptas cupiditate ea
        eos nostrum obcaecati, reprehenderit fugiat amet unde ut nisi non,
        reiciendis magnam voluptatem qui ex ipsam error. Ratione molestias
        provident saepe quae.
      </p>
      <button>Register Now</button>
    </div>
  );
};

export default Header;
