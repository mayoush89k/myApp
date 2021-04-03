import React from 'react';
import './Movie.css';
export default function SecQues(props){
    const mat =[
        [1,2,3,4,5,6],
        [7,8,9,1,2,3],
        [4,5,6,7,8,9],
        [1,2,3,4,5,6],
        [7,8,9,1,2,3],
        [4,5,6,7,8,9]];

        const minimizeMat=(matx)=>{         
                let sum1=0;
                let sum2=0;
                let sum3=0;
                let sum4=0;
                for (let i=0;i<matx.length/2;i++){
                    for(let j=0;j<matx.length/2;j++){
                        sum1+=matx[i][j]
                    }
                }
                for (let i=0;i<matx.length/2;i++){
                    for(let j=matx.length/2;j<matx.length;j++){
                        sum2+=matx[i][j]
                    }
                }
                for (let i=matx.length/2;i<matx.length;i++){
                    for(let j=0;j<matx.length/2;j++){
                        sum3+=matx[i][j]
                    }
                }
                for (let i=matx.length/2;i<matx.length;i++){
                    for(let j=matx.length/2;j<matx.length;j++){
                        sum4+=matx[i][j]
                    }
                }
                let tempmat=[[sum1,sum2],[sum3],[sum4]];
                return(
                    <div>
                        <table className='table2'>
                        <tr className='table2'>
                            <td className='table2'>{sum1}</td>
                            <td className='table2'>{sum2}</td>
                        </tr>
                        <tr className='table2'>
                            <td className='table2'>{sum3}</td>
                            <td className='table2'>{sum4}</td>
                        </tr>
                    </table>
                    </div>
                    
                )
            


        }
    return (
        <div>
            {minimizeMat(mat)}

        </div>
    )
}