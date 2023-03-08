import {useEffect,useState} from "react"
import "../style/get.css"
import axios from  'axios'

export default function Delete()
{
    const[data,setData] = useState([]);
    const handleDelete=(custId)=>
    {
        axios.delete(`http://localhost:8080/flower/${custId}`)
        .then(res=>setData(res.data))
    }
    useEffect(()=>
    {
        fetch("http://localhost:8080/flower")
        .then(res=>res.json())
        .then(res=>setData(res))
    })
    return (
        <div className="App">
            <table>
            <tr style={{color:' rgb(0,0,255)'}}>
                <th>Customer Id</th>
                <th>Flower Name1</th>
                <th>Flower Name2</th>
                <th>Purpose</th>
                <th>Order Date</th>
                <th>Delivery Date</th>
                <th>Cost</th>
                <th>Discount</th>
                <th>Delete</th>
            </tr>
            {data.map(u=>(
                <tr>
                    <th>{u.custId}</th>
                    <th>{u.flowerName1}</th>
                    <th>{u.flowerName2}</th>
                    <th>{u.purpose}</th>
                    <th>{u.orderDate}</th>
                    <th>{u.deliveryDate}</th>
                    <th>{u.cost}</th>
                    <th>{u.discount}</th>
                    <th>
                        <button className="delete" type="button" onClick={()=>handleDelete(u.custId)}>Delete</button>
                    </th>
                </tr>
            ))}
            </table>
        </div>
    );
}