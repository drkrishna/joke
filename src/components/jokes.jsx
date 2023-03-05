import react from "react"
function Ajoke(props) {
    return (
        <div style={{ border: "solid 2px red", margin: "1px 1p" }}>
            <p style={{ display: !props.question && "none" }}>Question: {props.question}</p>
            <p style={{ display: !props.punchLine && "none" }} > Answer: {props.punchLine}</p>
        </div >
    );
}
export default Ajoke;