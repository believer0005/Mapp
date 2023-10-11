import { Episode} from "../__generated__/graphql"
import { AiFillEye } from "react-icons/ai";
import { FaBookmark } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addTowatchList } from "../data/movieSlice";


export const Card = ({episode}: {episode: Episode}) => {

    console.log(episode)
    const dispatch = useDispatch()

    const handlyWatchList = (movie: Episode) =>{
        dispatch(addTowatchList(movie))
        console.log(movie)
    }

    const bookmark = () =>{
        alert("Add to Bookmark")
    }
    
    return(
    <>
    <div className="Mcard">
        <div className="imgBx">
            this is poster
        </div>
        <div className="content">
            <span className="episode-season">
                <div className="season">
                    {episode.episode}
                </div>
               
            </span>
            <h4>{episode.name}</h4>
            <p>{episode.air_date}</p>
            {/* <p>{episode.episode}</p> */}

            <div className="icon">
                <button onClick={() => handlyWatchList(episode)}><AiFillEye /></button>
                <button onClick={bookmark}><FaBookmark /></button>
            </div>

           

        </div>  
    </div>

    </>
    )
}



{/* <div className="card">
        <div className="imgBx"></div>
        <div className="content">
            <span className="price">
                <a href="#">$252145</a>
            </span>
            

            <ul>
                <li>{episode.name}</li>
                <li>{episode.episode}</li>
                
            </ul>

        </div>  
</div>  */}

{/* <button className="btn" >Watch Listing</button>
                <a href="#">Watch Listing</a> */}