import React, { useState } from 'react'
import './Movie.css'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
export default function Movie (props){
    const [refresh,setRefresh]=useState(false);
    const dsplRate=()=>{
        debugger;
        if (props.Movies[props.indxToMovie].rateList.length==0){
            return(
                <h6>this movie has not rated yet</h6>
            )
        }else{
            let counter=0;
            let sum=0;
            for (let i=0;i<props.Movies[props.indxToMovie].rateList.length;i++){
                sum+=props.Movies[props.indxToMovie].rateList[i];
                counter++
            }
            let rateAvg= sum/counter;
            props.updateRate(rateAvg);
            return(
                <h6>{rateAvg}</h6>
            )
        }
    }
    const rateTheMovie=(rateValue)=>{
        debugger
        props.rateFunc(rateValue);
        setRefresh(!refresh)
    }
    return (
        <div className='theMovie'>
            <h5>Movie name : {props.Movies[props.indxToMovie].name}</h5> <br/>
            <div id='movieImage'>{props.Movies[props.indxToMovie].image}</div> <br/>
            <h6>{props.Movies[props.indxToMovie].decr}</h6> <br/>
            {dsplRate()}
            <table>
                <tr>
                    <td> <button value='1' onClick={e=>{rateTheMovie(Number(e.target.value))}}>1</button></td>
                    <td><button value='2' onClick={e=>{rateTheMovie(Number(e.target.value))}}>2</button></td>
                    <td><button value='3' onClick={e=>{rateTheMovie(Number(e.target.value))}}>3</button></td>
                    <td><button value='4' onClick={e=>{rateTheMovie(Number(e.target.value))}}>4</button></td>
                    <td><button value='5' onClick={e=>{rateTheMovie(Number(e.target.value))}}>5</button></td>
                </tr>
            </table>
        </div>
    )
}
