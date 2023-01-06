//home page
import Layout from '../components/MyLayout.js'
import Link from 'next/link'
//fetch api
import fetch from 'isomorphic-unfetch'

//component to list all the startships on home page
const Index = (props) => (
  <Layout>
    <h1>Starships of Startrek</h1>
    <ul>
        <li>
        <Link href="/starships">Starships</Link>
        </li>
        <li>
        <Link href="/vehicles">Vehicles</Link>
        </li>
    </ul>
  </Layout>
)

//fetching api info
Index.getInitialProps = async function() {
  const res = await fetch('https://swapi.dev/api/starships/')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    people: data
  }
}

export default Index