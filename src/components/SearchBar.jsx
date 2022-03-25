import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ placeholder, data }) => {
	const [filterData, setFilterData] = useState([]);
	const [searchWord, setSearchWord] = useState("");

	const handleChange = (event) => {
		setSearchWord(event.target.value);
		const newFilteredData = data.filter((value) =>
			value.title.toLowerCase().includes(searchWord.toLowerCase())
		);
		setFilterData(newFilteredData);
	};

	return (
		<div className="search">
			<div className="searchInput">
				<input
					type="text"
					placeholder={placeholder}
					value={searchWord}
					onChange={handleChange}
					style={{ borderBottomLeftRadius: searchWord === "" && "7px" }}
				/>
				<div
					className="searchIcon"
					style={{ borderBottomRightRadius: searchWord === "" && "7px" }}
				>
					{searchWord === "" ? (
						<span className="material-icons">search</span>
					) : (
						<span
							className="material-icons"
							onClick={() => {
								setFilterData([]);
								setSearchWord("");
							}}
						>
							close
						</span>
					)}
				</div>
			</div>
			{searchWord !== "" && filterData.length !== 0 && (
				<div className="dataResult">
					{filterData.slice(0, 15).map((item, i) => {
						return (
							<a
								className="link"
								target="_blank"
								rel="noreferrer"
								href={item.link}
							>
								<p key={i} className="result">
									{item.title}
								</p>
							</a>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default SearchBar;
