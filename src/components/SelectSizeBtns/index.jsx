const SelectSizeBtns = ({ onClick }) => {
    const handleBtnClick = (e) => {
        onClick(e.target.innerText);
    }

    return (
        <div>
            <button onClick={handleBtnClick}>5x5</button>
            <button onClick={handleBtnClick}>7x7</button>
            <button onClick={handleBtnClick}>10x10</button>
        </div>
    )
};

export default SelectSizeBtns;