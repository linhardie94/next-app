//about page
import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'

//component to display details. This is where I'm struggling. 
//I keep getting the following error: 
// TypeError: Cannot read properties of undefined (reading 'name')

const Post = (props) => (
    <Layout>
       <h1>{props.show.name}</h1>
       <p>{props.show.model.replace(/<[/]?p>/g, '')}</p>
       <img src={props.show.image.medium}/>
    </Layout>
)

//fetching api info
Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`https://swapi.dev/api/starships/${id}`)
  const show = await res.json()

  console.log(`Fetched show: ${show.id}`)

  return { 
    people: show 
  }
}

export default Post