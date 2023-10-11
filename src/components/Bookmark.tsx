import './bar.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export const Bookmark = ({showBook}) => {

  
    return(
      <div className={showBook? 'bookmark active' : 'bookmark'}>
              <h2 className='pt-4'>Bookmark Movie</h2>  
              <button className='btn bookFooter'>Save</button> 
      </div>
    )
}