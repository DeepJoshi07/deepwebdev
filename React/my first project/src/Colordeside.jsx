import "./Colordeside.css"
function Colordeside({colour}){
    let bc = {backgroundColor:colour}
    return <div className="colorclass" style={bc}>
                <h3 > color name : {colour}</h3>
            </div>
}
export default Colordeside;