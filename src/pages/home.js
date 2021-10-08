
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
        <h1>Home</h1>

        
    </Layout>
    )
}

export default IndexPage