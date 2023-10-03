import './App.css'
import { useQuery } from '@apollo/client';
import { GET_LOCATIONS } from './graphql/queries';

function App() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log(data)

  return (
    <>
      <h2>Continents</h2>
      {data.continents.map((continent: any) =>(
        <div key={continent.code}>
          <h3>{continent.name}</h3>
          <p>{continent.code}</p>
        </div>
      ))}

    </>
  )
}

export default App
