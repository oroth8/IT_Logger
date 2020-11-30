import React from "react";

const SearchBar = () => {
  return (
    <div style={{ marginBottom: "30px" }} classNameName="blue">
      <nav>
        <div className="nav-wrapper">
          <form>
            <div className="input-field">
              <input id="search" type="search" required />
              <label className="label-icon" HTMLfor="search">
                <i className="material-icons">search</i>
              </label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
};
export default SearchBar;
