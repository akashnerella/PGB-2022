import "./index.css"
import { useNavigate} from "react-router-dom"
const Scorebaord=(props)=>{
    const{count,subject,address}=props
    const History=useNavigate()
    const a=count<7 ? "spanE":"spanE1"
    
    const renderlevel=()=>{
        if(subject==="java"){
            History("/Java2")
            window.location.reload()
        }else if(subject==="javascript"){
            History("/JavaScript2")
            window.location.reload()
        }else{
            History("/Python2")
            window.location.reload()
        }       
    }
    
    return(
        <div className="score-main-container">
            <div className="score-container">
                <h1 className="score-head">Score is : <span className={a}>{count}</span></h1>
                {count<7?(
                    <>
                    <span className="emojiE">&#128528;</span>
                    <p className="score-para">Better Luck Next Time!</p>
                    </>):
                    (address==="/Java" || address==="/Python" || address=== "/JavaScript")? (
                    <>
                    <img src="https://www.livelimitless.net/wp-content/uploads/2011/01/congrats.jpg" alt="congratulations" className="imageE"/>
                    <button type="button" className="level-button" onClick={renderlevel}>Click for next level</button>
                    </>
                ):
                (
                <>
                <img src="https://thumbs.gfycat.com/PalatableFoolishDormouse-small.gif" alt="congratulations" className="imageE"/>
                <h3 className="score-bottom">Successfully Completed The Levels</h3>
                </>
                )
                }
            </div>
        </div>
    )
}

export default Scorebaord;
