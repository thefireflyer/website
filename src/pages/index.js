
// Step 1: Import React
import * as React from 'react'
import { withPrefix ,Link } from 'gatsby'

import "../styles/main.scss"
import Layout from '../components/layout';
import Seo from '../components/seo';

const IndexPage = () => {
    return (
    <Layout>
        <Seo title="Home" />
        <h1>Index</h1>

        <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/test2">More random tests</Link></li>
        </ul>
        
    </Layout>
    )
}

export default IndexPage