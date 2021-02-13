const StartBtn = ({ onClick }) => {
    const handleBtnClick = () => {
        onClick();
    }

    return (
        <button onClick={handleBtnClick}>Start</button>
    )
};

export default StartBtn;