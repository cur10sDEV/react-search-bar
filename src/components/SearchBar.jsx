import { useState } from "react";
import "./SearchBar.css";
import { Search, ClearIcon } from "@mui/icons-material";

const SearchBar = ({ placeholder, data }) => (
	<div className="search">
		<div className="searchInput">
			<input type="text" />
			<div className="searchIcon">
				<Search />
			</div>
		</div>
		<div className="dataResult">
			<p className="result">New York</p>
			<p className="result">Los Angeles</p>
			<p className="result">Narsinghpur, M.P.</p>
		</div>
	</div>
);

export default SearchBar;
