export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    // map data to an array of path objects with params (id)
    const paths = data.map(helios => {
      return {
        params: { id: helios.id.toString() }
      }
    })
  
    return {
      paths,
      fallback: false
    }
  }
  
  export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();
  
    return {
      props: { helios: data }
    }
  }
  
  const Details = ({ helios }) => {
    return (
      <div>
        <h1>{ helios.name }</h1>
        <p>{ helios.email }</p>
        <p>{ helios.website }</p>
        <p>{ helios.address.city }</p>
      </div>
    );
  }
  
  export default Details;