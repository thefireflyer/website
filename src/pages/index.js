
// Step 1: Import React
import * as React from 'react'
import { withPrefix ,Link } from 'gatsby'

import Layout from '../components/layout';
import Seo from '../components/seo';

const IndexPage = () => {
    return (
    <Layout>
        <Seo title="Index" />
        <h1>Index</h1>

        <ul>
            <li>Pages</li>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/test2">More random tests</Link></li>
            </ul>
            <li>Other websites</li>
            <ul>
                <li><Link to="https://thefireflyer.herokuapp.com/">TheFireFlyer - previous site</Link></li>
                <li><Link to="https://flyingfire.theflyingfire.repl.co/">FlyingFire - first html site</Link></li>
                <li><Link to="https://thefireflyer.wixsite.com/flyingfire">FlyingFire - oldest</Link></li>
                <li><Link to="https://theflyingfire.github.io/webappTests/">HomePortal - pwa tests</Link></li>
            </ul>
            <li>Online presences</li>
            <ul>
                <li><Link to="https://github.com/theflyingfire">Github</Link></li>
                <li><Link to="https://www.youtube.com/channel/UCJBJX_6j1520fVj73qi3RGQ">YouTube</Link></li>
                <li><Link to="https://thefireflyer.itch.io/">Itch.io</Link></li>
            </ul>
        </ul>
        
    </Layout>
    )
}

export default IndexPage