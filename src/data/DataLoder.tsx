import { useQuery } from '@apollo/client';
import { RICK_MOERTY } from '../graphql/queries';
import { Card } from '../components/Card';
import { Episode } from '../__generated__/graphql';
import 'bootstrap/dist/css/bootstrap.min.css';

function DataLoder() {
    
const { loading, error, data } = useQuery(RICK_MOERTY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log(data)

  return (
    <>
    <div className='container grid grid-4-col pt-5'>
      
       {data?.episodes?.results?.map((episode, index) => (
        <div key={index}>
          <Card episode={episode as Episode} />
        </div>
        
      ))}
    </div>
      
      
    </>
  )
}

export default DataLoder


