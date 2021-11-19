
// Step 1: Import React
import * as React from 'react'
import { withPrefix ,Link } from 'gatsby'

import Layout from '../components/layout';
import Seo from '../components/seo';

const Portal = () => {
    React.useEffect(() => {
        let handle = setInterval(() => {
            
            let imgUrl
            if (!(document.cookie.includes(`{"imgUrl":`))){
                imgUrl = window.prompt("url")
                //window.alert(imgUrl)
            }
            else {
                imgUrl = document.cookie.split(`"`)[3]
            }
            document.body.style.background = "url("+imgUrl+") no-repeat fixed"
            document.body.style.backgroundSize = "cover"
            document.cookie = `{"imgUrl":"`+imgUrl+`"}`
            clearInterval(handle)        
        }, 200);

        return () => {document.body.style.background = "black no-repeat"}
    })

    return (
    <Layout>
        <Seo title="Portal" />
        <h1>Home</h1>   
        
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum quisque non tellus orci ac auctor augue mauris. Arcu felis bibendum ut tristique. Nibh tellus molestie nunc non blandit massa. Quam lacus suspendisse faucibus interdum posuere lorem ipsum. Ultrices gravida dictum fusce ut placerat. Nisl nunc mi ipsum faucibus vitae aliquet nec. Egestas quis ipsum suspendisse ultrices gravida dictum. Tincidunt lobortis feugiat vivamus at augue eget. Mattis enim ut tellus elementum sagittis vitae. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Et magnis dis parturient montes nascetur ridiculus mus mauris vitae. Varius sit amet mattis vulputate enim nulla aliquet. In nibh mauris cursus mattis molestie a iaculis at. Pharetra et ultrices neque ornare aenean. Augue mauris augue neque gravida in fermentum et. In dictum non consectetur a erat. Aenean sed adipiscing diam donec adipiscing.
        </p><p>
        Suscipit tellus mauris a diam maecenas sed enim ut. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Iaculis nunc sed augue lacus. Cursus sit amet dictum sit amet justo donec enim diam. Feugiat pretium nibh ipsum consequat nisl. Turpis egestas integer eget aliquet nibh. Morbi tempus iaculis urna id volutpat lacus. Tincidunt arcu non sodales neque. Enim tortor at auctor urna nunc id cursus. Egestas dui id ornare arcu odio. A erat nam at lectus urna duis convallis convallis. Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna. Et malesuada fames ac turpis egestas integer eget aliquet. Enim neque volutpat ac tincidunt vitae semper quis lectus nulla. Malesuada fames ac turpis egestas maecenas pharetra. Commodo nulla facilisi nullam vehicula ipsum a. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis.
        </p><p>
        Cras semper auctor neque vitae tempus quam. Ipsum dolor sit amet consectetur adipiscing. Convallis tellus id interdum velit laoreet id donec ultrices. Dui sapien eget mi proin sed libero enim. Tempus egestas sed sed risus pretium quam vulputate. Congue mauris rhoncus aenean vel elit scelerisque. Ultrices tincidunt arcu non sodales neque sodales ut. Netus et malesuada fames ac turpis egestas maecenas. Fames ac turpis egestas sed tempus urna et pharetra. In tellus integer feugiat scelerisque varius morbi.
        </p><p>
        Porta lorem mollis aliquam ut porttitor leo a diam sollicitudin. Vitae proin sagittis nisl rhoncus. Malesuada fames ac turpis egestas maecenas pharetra convallis. Arcu dictum varius duis at consectetur lorem donec massa. Convallis posuere morbi leo urna. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Nulla malesuada pellentesque elit eget gravida cum sociis. Etiam erat velit scelerisque in dictum non consectetur a erat. Pellentesque dignissim enim sit amet venenatis urna cursus eget. Faucibus turpis in eu mi bibendum neque egestas. Et tortor consequat id porta nibh venenatis cras sed. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet.
        </p><p>
        Lacus laoreet non curabitur gravida arcu. Gravida cum sociis natoque penatibus et magnis dis. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Nibh ipsum consequat nisl vel pretium lectus quam id leo. Amet commodo nulla facilisi nullam. Ultrices dui sapien eget mi proin sed libero. Ultrices gravida dictum fusce ut placerat. Ullamcorper a lacus vestibulum sed arcu non odio. Faucibus interdum posuere lorem ipsum. Leo integer malesuada nunc vel risus commodo viverra maecenas. Ultrices tincidunt arcu non sodales neque sodales ut. Molestie at elementum eu facilisis sed odio morbi quis. Euismod elementum nisi quis eleifend quam. Congue nisi vitae suscipit tellus mauris a diam maecenas. Donec ultrices tincidunt arcu non. Laoreet non curabitur gravida arcu ac. Gravida neque convallis a cras semper auctor neque vitae tempus. Pharetra convallis posuere morbi leo.
        </p>  
    </Layout>  
    )
}

export default Portal