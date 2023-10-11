import { useSelector } from 'react-redux';
import './bar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RootState } from '../data/store';


export const Sidebar = ({showSide}) => {
  const {watchList} = useSelector((state: RootState) => state.watchList)
  console.log(watchList.length)
  
    return(
      <div className={showSide? 'sideBar active' : 'sideBar'}>
              <h2 className='pt-4'>Movies Listing</h2> 

              <h2>{watchList.length}</h2>

              {/* <div>
                {watchList.map((movie) => <div key={movie.id}>
                  <h2>{movie.name}</h2>                  
                </div>)}
              </div> */}
              
              <button className='btn sideFooter'>Save</button> 
      </div>
    )
}