const Row = ({ squaresArr }) => {
    return (
        <div>
            {squaresArr.map((square) => <button>{square}</button>)}
        </div>
    )
};

export default Row;