
// Step 1: Import React
import * as React from 'react'
import { withPrefix ,Link } from 'gatsby'

import Layout from '../components/layout';
import Seo from '../components/seo';

const NotFoundPage = () => {
    return (
    <Layout>
        <Seo title="404" />
        <br></br>
        <center>
            <h1>404</h1>
            <h2>Page not found</h2>
            <Link to="/"><h3>Back to index page</h3></Link>
        </center>
    </Layout>
    )
}

export default NotFoundPage