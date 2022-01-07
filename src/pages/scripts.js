
// Step 1: Import React
import * as React from 'react'
import { withPrefix ,Link, useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout';
import Seo from '../components/seo';
import Gallery from './gallery';
import BackgroundCover from '../components/BackgroundCover';
import Video from '../components/video';
import styled from "styled-components";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const ScriptDiv = styled.div`
    border-radius: 20px;
    //background: linear-gradient(120deg, hsl(300, 100%, 25%), hsl(180, 100%, 25%));
    background-color: black;
    height: fit-content;
    width: 50vw;
    filter: drop-shadow(0 0 1vw black);
    overflow-x: hidden;
    overflow-y: scroll;

    * {
        filter: drop-shadow(0 0 0.5vw black);
    }

    #output {
        word-wrap:break-word;
    }

    #run {
        text-align: center;
        :hover {
            color: orange;
        }
    }

    input, textarea {
        width: 100%;
        height: 5vh;
        margin-bottom: 0.5vh;
        background-color: black;
        border: none;
        color: white;
    }

    textarea {
        height: 16vh;
    }

    @media only screen and (max-width: 900px) {
        width: 90vw;
      }
    
    
`

const Script = ({name, callback, children}) => {
    return (
        <>
            <ScriptDiv id={name}>
                <h2>{name.replaceAll("-", " ")}</h2>
                    {children}
                    <h4 id="output"></h4>
                    <a id="run" onClick={callback}><h2>Run</h2></a>
            </ScriptDiv>
            <div className="contentMargin"></div>
        </>
    )
}

const ScriptsPage = ({data}) => {

    return (
    <>
        <Seo title="Scripts" />
        <BackgroundCover>
            <div className="contentMargin"></div>
 
            <h1>Scripts</h1>


            <Script name={`ideal-rocket-calculator`} callback={() => {
                let scriptDiv = document.getElementById("ideal-rocket-calculator")
                let deltav = scriptDiv.querySelector("#deltav").value
                let dry_mass = scriptDiv.querySelector("#dry-mass").value
                let wet_mass = scriptDiv.querySelector("#wet-mass").value
                let specific_impluse = scriptDiv.querySelector("#specific-impluse").value
                const g0 = 9.80665

                if (specific_impluse == "")
                {
                    specific_impluse = deltav/g0/Math.log(wet_mass/dry_mass)
                }
                let effective_exhaust_velocity = specific_impluse*g0

                if (deltav == "")
                {
                    deltav = effective_exhaust_velocity*Math.log(wet_mass/dry_mass)
                }
                if (dry_mass == "")
                {
                    dry_mass=wet_mass/Math.E**(deltav/effective_exhaust_velocity)
                } 
                if (wet_mass == "")
                {
                    wet_mass=Math.E**(deltav/effective_exhaust_velocity)*dry_mass
                }
                
                scriptDiv.querySelector("#deltav").value = Math.round(deltav*1000)/1000
                scriptDiv.querySelector("#dry-mass").value = Math.round(dry_mass*1000)/1000
                scriptDiv.querySelector("#wet-mass").value = Math.round(wet_mass*1000)/1000
                scriptDiv.querySelector("#specific-impluse").value = Math.round(specific_impluse*1000)/1000

            }}>
                <input id="deltav" type={`number`} placeholder='change in velocity'></input>
                <input id="wet-mass" type={`number`} placeholder='wet mass'></input>
                <input id="dry-mass" type={`number`} placeholder='dry mass'></input>
                <input id="specific-impluse" type={`number`} placeholder='specific impluse (in dimension of time)'></input>
            </Script>
            

            <Script name={`time-dilation-calculator`} callback={() => {
                let scriptDiv = document.getElementById("time-dilation-calculator")
                let period_one = scriptDiv.querySelector("#period1").value
                let period_two = scriptDiv.querySelector("#period2").value
                let output = scriptDiv.querySelector("#output")
                const c = 299792458;
                let short_period = (period_one<period_two)?period_one:period_two;
                let long_period = (period_one>period_two)?period_one:period_two;
                let speed = ((1-(short_period/long_period)**2)*c**2)**(1/2)

                const G = 6.67430 *10**-11
                
                let mass = (1-(short_period/long_period)**2)*c**2/2/G

                output.innerHTML = speed + " m/s relative to the faster clocks frame of reference or " + (speed/c*100)+`% the speed of light <br/>
                <br/>`+mass+` kg compacted into a sphere tangential to the reference point with a radius of one meter`
                
            }}>
                <input id="period1" type={`number`} placeholder='period of first clock'></input>
                <input id="period2" type={`number`} placeholder='period of second clock'></input>
            </Script>

            <Script name={`coordinate-system-calculator`} callback={() => {
                let scriptDiv = document.getElementById("coordinate-system-calculator")
                let angle = scriptDiv.querySelector("#angle").value
                let length = scriptDiv.querySelector("#length").value
                let x = scriptDiv.querySelector("#x").value
                let y = scriptDiv.querySelector("#y").value

                function degrees_to_radians(degrees)
                {
                return degrees * (Math.PI/180);
                }

                if (x == "" || y == "")
                {
                    x = length * Math.cos( degrees_to_radians(angle) )
                    y = length * Math.sin( degrees_to_radians(angle) )
                }

                if (angle == "" || length == "")
                {
                    length = ( x**2 + y**2 )**(1/2)
                    angle = Math.atan(x / y) * (180 / Math.PI);
                }

                scriptDiv.querySelector("#angle").value =  Math.round(angle*1000)/1000
                scriptDiv.querySelector("#length").value =  Math.round(length*1000)/1000
                scriptDiv.querySelector("#x").value = Math.round(x*1000)/1000
                scriptDiv.querySelector("#y").value = Math.round(y*1000)/1000
                
            }}>
            <input id="angle" type={`number`} placeholder='angle°'></input>
            <input id="length" type={`number`} placeholder='length'></input>

            <input id="x" type={`number`} placeholder='x'></input>
            <input id="y" type={`number`} placeholder='y'></input>
            </Script>

            <Script name={`word-searcher`} callback={() => {
                
                //----------------------------------------
                let scriptDiv = document.getElementById("word-searcher")
                let input = scriptDiv.querySelector("#input").value.toLowerCase()
                let words = scriptDiv.querySelector("#words").value.toLowerCase()
                let output = scriptDiv.querySelector("#output")
                input = input.replaceAll(" ", "")
                words = words.replaceAll(" ", "")
                let rows = input.split(`
`)              
                let cols = []
                let diagonals = []
                let foundWords = []
                words = words.split(',')
                console.log(words)
                console.log(rows)
                
                //----------------------------------------
                //remove empty rows

                rows = rows.filter(row => {
                   if (row != "")
                    {
                        return true
                    }
                    else {
                        return false
                    }
                });

                //----------------------------------------
                //search horz
                rows.forEach(row => {
                    let reversed = row.split("").reverse().join("");
                    console.log(reversed)
                    words.forEach(word => {
                         if (row.includes(word))
                         {
                             console.log(word+" found in "+row)
                             foundWords.push({word:word,container:row,start:row.search(word), type:"HORIZONTAL"})
                         }
                         if (reversed.includes(word))
                         {
                             console.log(word+" found in "+reversed + " (REVERSED)")
                             foundWords.push({word:word,container:reversed,start:reversed.search(word), type:"HORIZONTAL-REVERSED"})
                         }
                    })
                });
                
                //----------------------------------------
                //search vert
                for (let i = 0; i < rows.length; i++){
                    rows.forEach(row => {
                        if (cols[i] == null){
                            cols[i] = ""
                        }
                        cols[i] += (row.charAt(i))
                    })
                }

                console.log(cols)
                cols.forEach(cols => {
                    let reversed = cols.split("").reverse().join("");
                    console.log(reversed)
                    words.forEach(word => {
                         if (cols.includes(word))
                         {
                             console.log(word+" found in "+cols)
                             foundWords.push({word:word,container:cols,start:cols.search(word), type:"VERTICAL"})
                        }
                         if (reversed.includes(word))
                         {
                             console.log(word+" found in "+reversed + " (REVERSED)")
                             foundWords.push({word:word,container:reversed,start:reversed.search(word), type:"VERTICAL-REVERSED"})
                        }
                    })
                });

                //----------------------------------------
                //search diagonals
                function getDiagonals(x, y){
                    console.log(x)
                    diagonals[x] = ""
                    for (let i = 0; i < rows.length; i++)
                    {
                        console.log(rows[i+x]?.charAt(i+y)||"row doesnt exist")
                        diagonals[x] += rows[i+x]?.charAt(i+y)||""
                    }
                    console.log("-------------")
                    diagonals[rows.length+x] = ""
                    for (let i = 0; i < rows.length; i++)
                    {
                        console.log(rows[i+x]?.charAt(rows.length-i-1-y)||"row doesnt exist")
                        diagonals[rows.length+x] += rows[i+x]?.charAt(rows.length-i-1-y)||""
                    }
                    console.log("==============")
                }
                for (let x = -rows.length; x < rows.length; x++)
                {
                        getDiagonals(x,0)
                }

                diagonals.forEach(diagonal => {
                    let reversed = diagonal.split("").reverse().join("");
                    //console.log(diagonal)
                    //console.log(reversed)
                    words.forEach(word => {
                         if (diagonal.includes(word))
                         {
                             console.log(word+" found in "+diagonal)
                             foundWords.push({word:word,container:diagonal,start:diagonal.search(word), type:"DIAGONAL"})
                        }
                         if (reversed.includes(word))
                         {
                             console.log(word+" found in "+reversed + " (REVERSED)")
                             foundWords.push({word:word,container:reversed,start:reversed.search(word), type:"DIAGONAL-REVERSED"})
                        }
                    })
                })

                console.log(diagonals)
                //----------------------------------------


                console.log(foundWords)

                let res = ""
                foundWords.forEach(word => {
                    res += word.word + " found in " + word.container + " (" + word.type + ")"
                    res += "<br/>"
                })

                output.innerHTML = res
                
            }}><textarea id="input" placeholder={`crossword
example:
AVOIDDQK
LYMKAENS
NOTATOPy
WZTMSUWH
TAVSRTSW
RBTPEAEN
RNLELTNR
XENSRXZM`} /*value={`
AVOIDDQK
LYMKAENS
NOTATOPy
WZTMSUWH
TAVSRTSW
RBTPEAEN
RNLELTNR
XENSRXZM
        `}*/></textarea>
            <input id="words" type={`text`} placeholder='words,seperated,by,commas'
             /*value={`water,test,slash,potato,purple,avoid,master,sneak`}*/></input>
            </Script>

            <Script name={`token-generator`} callback={() => {
                let scriptDiv = document.getElementById("token-generator")
                let input = scriptDiv.querySelector("#input").value
                let output = scriptDiv.querySelector("#output")
                let res = ""
                const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`~/!@#$%^&*()-_=+{}[];:,.<>/?|'\"".split("");

                for ( var i = 0; i < input; i++ ) {
                    res += characters[Math.floor(Math.random() * characters.length)];
                }
                output.innerHTML = res
            }}>
                <input type={`number`} min={0} id='input' placeholder='length'></input>
            </Script>


        </BackgroundCover>
    </>
    )

}

export default ScriptsPage