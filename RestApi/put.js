import * as React from 'react';
import { useState} from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';

export default function Update()
{
    const[custId,setCustId]=useState('');
    const[flowerName1,setFlowerName1]=useState("");
    const[flowerName2,setFlowerName2]=useState("");
    const[purpose,setPurpose]=useState("");
    const[orderDate,setOrderDate]=useState("");
    const[deliveryDate,setDeliveryDate]=useState("");
    const[cost,setCost]=useState('');
    const[discount,setDiscount]=useState('');

    async function save(event) 
    {
        event.preventDefault();
        try 
        {
            await axios.put("http://localhost:8080/flower/put",
                {  
                    custId:custId,
                    flowerName1:flowerName1,
                    flowerName2:flowerName2,
                    purpose:purpose,
                    orderDate:orderDate,
                    deliveryDate:deliveryDate,
                    cost:cost,
                    discount:discount,
                });
            alert("Customer Details are successfully updated!!");
            setCustId("");
            setFlowerName1("");
            setFlowerName2("");
            setPurpose("");
            setOrderDate("");
            setDeliveryDate("");
            setCost("");
            setDiscount("");
        }
        catch (err) 
        {
            alert("Failed:(");
        }
    }
    return (
        <div className='container'>
            <h2 style={{textAlign:"center",
                        color:"black"}}>
                UPDATE THE CUSTOMER!!!
            </h2>
            <form>
                <center> 
                    <TextField 
                        required 
                        id="outlined-basic"
                        label="custId" 
                        variant="outlined"
                        onChange={(event)=>setCustId(event.target.value)}/> 
                    <br></br><br></br>
                    <TextField 
                        required 
                        id="outlined-basic"
                        label="flowerName1" 
                        variant="outlined"
                        onChange={(event)=>setFlowerName1(event.target.value)}/> 
                    <br></br><br></br>
                    <TextField
                        required 
                        id="outlined-basic"
                        label="flowerName2" 
                        variant="outlined"
                        onChange={(event)=>setFlowerName2(event.target.value)}/> 
                    <br></br><br></br>
                    <TextField 
                        required 
                        id="outlined-basic" 
                        label="purpose" 
                        variant="outlined" 
                        onChange={(event)=>setPurpose(event.target.value)}/>
                    <br></br><br></br>
                    <TextField 
                        required 
                        id="outlined-basic" 
                        label="orderDate" 
                        variant="outlined" 
                        onChange={(event)=>setOrderDate(event.target.value)}/>
                    <br></br><br></br>
                    <TextField 
                        required 
                        id="outlined-basic" 
                        label="deliveryDate" 
                        variant="outlined" 
                        onChange={(event)=>setDeliveryDate(event.target.value)}/>
                    <br></br><br></br>
                    <TextField 
                        required 
                        id="outlined-basic" 
                        label="cost" 
                        variant="outlined" 
                        onChange={(event)=>setCost(event.target.value)}/>
                    <br></br><br></br>
                    <TextField 
                        required 
                        id="outlined-basic" 
                        label="discount" 
                        variant="outlined" 
                        onChange={(event)=>setDiscount(event.target.value)}/>
                    <br></br><br></br>
                </center>
        <div/>
        <center>
               <center> 
                    <button type="submit" class="btn btn-primary" onClick={save}>Update</button></center>
                </center>
        <div/>   
            </form>
        </div>
    );
}