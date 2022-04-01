import "./index.css"

const QuestionItem=(props)=>{
    const{questiondata,changeradio}=props
    const{SNo,Question,Option1,Option2,Option3,Option4,Answer}=questiondata
    return(
        <div className="item-container">
            <h1 className="item-head">{SNo}.{Question}</h1>
            <div className="option-container" onChange={changeradio} >
                <label><input type="radio" id={Option1} value={Answer} name={SNo} className="inputE" />{Option1}</label>
                <label><input type="radio"  id={Option2}  value={Answer} name={SNo} className="inputE" />{Option2}</label>
                <label><input type="radio"  id={Option3}  value={Answer} name={SNo} className="inputE" />{Option3}</label>
                <label><input type="radio"  id={Option4} value={Answer}  name={SNo} className="inputE" />{Option4}</label>
            </div>
        </div>
    )
}

export default QuestionItem;
