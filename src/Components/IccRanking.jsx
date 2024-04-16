import axios from "axios"
import { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./IccRanking.css"

function IccRanking() {

    let [rank, setRank] = useState([])
    let [check, setCheck] = useState(false)
    let [iccrank, seticcrank] = useState("")

    let setData = (index)=>{
        for (var i in rank){
            rank[i]["check"] = false
        }
        rank[index]["check"] = true
        setRank(rank)
        setCheck(true)
        seticcrank(rank[index]["name"])
        // console.log(index);
    }

    let checkRank = (index)=>{
        console.log(iccrank);
        console.log(rank[0]["option"][index]);
    } 

    useEffect(() => {
        setRank([{
            "name": "batsmen",
            "check"  : true ,
            "option": ["odis", "tests", "t20s"]
        }
            , {
            "name": "bowlers",
            "check"  : true ,
            "option": ["odis", "tests", "t20s"]
        }, {
            "name": "all-rounders",
            "check"  : true ,
            "option": ["odis", "tests", "t20s"]
        }, {
            "name": "teams",
            "check"  : true ,
            "option": ["odis", "tests", "t20s"]
        }
            ,])


    }, [])

    return (

        <>
            <div className="container-fluid bg-success">
                <div className="container pt-2">
                    <div className="row text-center">
                    <div className="col">

                        {
                            rank.map((v, i) => {
                                return (
                                   <button key={i} disabled = {v.check?false:true} onClick={()=>setData(i)} className="btn btn-primary m-2 uppercae">{v.name}</button>
                                )
                            })
                        }

                        <br />
                        {
                            check ?
                            rank[0].option.map((v, i) => {
                                return (
                                   <button key={i} onClick={()=>checkRank(i)} className="btn btn-warning m-2 uppercae">{v}</button>
                                )
                            })
                            :
                            ""
                        }


                </div>
                    </div>
            </div>
            </div>
        </>

    )

}

export default IccRanking