import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
      <Link to="/login"><button style={{backgroundColor: '#2196f3', borderRadius: '20%', width: '100px', height: '50px'}}>LOGIN</button></Link>
    </div>
  )
}

export default Home
