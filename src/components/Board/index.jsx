import Row from '../Row';
const Board = ({ data }) => {
    return (
        <div>
            {data.map((el) => <Row squaresArr={el} />)}
        </div>
    )
};

export default Board;