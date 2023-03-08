import React, {useState} from 'react';
import axios from'axios'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../style/post.css'

function Post() 
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
         await axios.post('http://localhost:8080/flower',
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
          alert("Details of the Customer are added!!");
          setCustId("");
          setFlowerName1("");
          setFlowerName2("");
          setPurpose("");
          setOrderDate("");
          setDeliveryDate("");
          setCost("");
          setDiscount("");
        }
    catch(err)
        {
          alert("Failed:(");
        }
   }

    return(
        <>
        <div className="form">
            <h2 style={{textAlign:"center",
                        color:"#f41149"}}>
                DATA OF THE CUSTOMER!!!
            </h2>
            <br></br>
            <Box component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '30ch' },
                    }}
            noValidate
            autoComplete="on"
            >
            <div>
                <TextField
                    required
                    id="custId"
                    label="custId"
                    placeholder='Enter customer id'
                    value={custId}
                    onChange={(event) =>
                                    {
                                        setCustId(event.target.value);      
                                    }}
                />
                <br></br>
                <TextField
                    required
                    id="flowerName1"
                    label="flowerName1"
                    placeholder='Enter the flower Name1'
                    value={flowerName1}
                    onChange={(event) =>
                                    {
                                        setFlowerName1(event.target.value);      
                                    }}
                />
                <br></br>
                <TextField
                    id="flowerName2"
                    label="flowerName2"
                    placeholder='Enter the flower Name 2'
                    value={flowerName2}
                    onChange={(event) =>
                                    {
                                        setFlowerName2(event.target.value);      
                                    }}
                />
                <br></br>
                <TextField
                    required
                    id="purpose"
                    label="purpose"
                    placeholder='Purpose'
                    value={purpose}
                    onChange={(event) =>
                                    {
                                        setPurpose(event.target.value);      
                                    }}
                />
                <br></br>
                <TextField
                    required
                    id="orderDate"
                    label="orderDate"
                    placeholder='Enter the orderDate'
                    value={orderDate}
                    onChange={(event) =>
                                    {
                                        setOrderDate(event.target.value);      
                                    }}
                />
                <TextField
                    required
                    id="deliveryDate"
                    label="deliveryDate"
                    placeholder='Enter the deliveryDate'
                    value={deliveryDate}
                    onChange={(event) =>
                                    {
                                        setDeliveryDate(event.target.value);      
                                    }}
                />
                <TextField
                    required
                    id="cost"
                    label="cost"
                    placeholder='Enter the Cost'
                    value={cost}
                    onChange={(event) =>
                                    {
                                        setCost(event.target.value);      
                                    }}
                />
                <TextField
                    required
                    id="discount"
                    label="discount"
                    placeholder='Enter the discount'
                    value={discount}
                    onChange={(event) =>
                                    {
                                        setDiscount(event.target.value);      
                                    }}
                />
              <br></br>
              <div className='footer'>
              <b>
                  <button onClick ={save}>SUBMIT</button>
              </b>
              </div>
            </div>
            </Box>
        </div>
        </>
    )       
}
export default Post