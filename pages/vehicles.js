import Layout from '../components/MyLayout.js'
import Link from 'next/link'
//fetch api
import fetch from 'isomorphic-unfetch'

//component to list all the vehicles
const Index = (props) => (
  <Layout>
    <h1>Vehicles of Startrek</h1>
    <ul>
      {props.people.results.map(({name}) => (
        <li key={name}>
            {name}
        </li>
      ))}
    </ul>
  </Layout>
)

//fetching api info
Index.getInitialProps = async function() {
  const res = await fetch('https://swapi.dev/api/vehicles/')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    people: data
  }
}

export default Index