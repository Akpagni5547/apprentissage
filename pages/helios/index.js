import styles from '../../styles/helios.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { helios: data }
  }
}

const Helios = ({ helios }) => {
  // console.log(helios)

  return (
    <div>
      <h1>All Helios</h1>
      {helios.map(helios => (
        <Link href={'/helios/' + helios.id} key={helios.id}>
          <a className={styles.single}>
            <h3>{ helios.name }</h3>
          </a>
        </Link>
      ))}
    </div>
  );
}
 
export default Helios;