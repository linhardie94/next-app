import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div>
        <Link href="/" style={linkStyle}>Home</Link>
        <Link href="/starships" style={linkStyle}>Starships</Link>
        <Link href="/vehicles" style={linkStyle}>Vehicles</Link>
    </div>
)

export default Header