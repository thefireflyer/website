
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

    #run h1 {
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
                
            }}>

            </Script>

            <Script name={`coordinate-system-calculator`} callback={() => {
                
            }}>

            </Script>

            <Script name={`triangle-solver`} callback={() => {

            }}>
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

            <Script name={`token-generator`} callback={() => {
                let scriptDiv = document.getElementById("token-generator")
                let input = scriptDiv.querySelector("#input").value
                let output = scriptDiv.querySelector("#output")
                let res = ""
                const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789/!@#$%^&*()-_=+{}[];:,.<>/?".split("");

                for ( var i = 0; i < input; i++ ) {
                    res += characters[Math.floor(Math.random() * characters.length)];
                }
                output.innerHTML = res
            }}>
                <input type={`number`} min={0} id='input' placeholder='length'></input>
            </Script>

            {/*<Script name={`test-demo-2`} callback={() => {
                let scriptDiv = document.getElementById("test-demo-2")
                let input = scriptDiv.querySelector("#input")
                let output = scriptDiv.querySelector("#output")
                output.innerHTML = input.value
            }}>
                <input id="input" type={`text`} placeholder='demo text'></input>
            </Script>*/}

            <Script name={`word-searcher`} callback={() => {
                
                //----------------------------------------
                let scriptDiv = document.getElementById("word-searcher")
                let input = scriptDiv.querySelector("#input").value.toLowerCase()
                let words = scriptDiv.querySelector("#words").value.toLowerCase()
                let output = scriptDiv.querySelector("#output")
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

        </BackgroundCover>
    </>
    )

}

export default ScriptsPage