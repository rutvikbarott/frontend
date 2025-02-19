import React from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { QuerySnapshot, Timestamp, addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';
import { useState } from 'react';




function Table() {

    const[car , setcar]=useState({
        name:"",
        price:"",
        model:"",
        color:"",
        date: new Date().toLocaleString(
            "en-US",
            {
                month: "short",
                day: "2-digit",
                year: "numeric",
            })
    })

    // add car
    const addcar=async()=>{
        const carref = collection(firedb,"items")

        try {
            await addDoc(carref,car);
            
            alert("products added successfully");
            setTimeout(()=>{
                window.location.href = "/"
            },800)
            setcar("");
            
        } catch (error) {
            setTimeout(()=>{
                window.location.href = "/"
            },800)
            setcar("");
        }

    }
  return (  
    <div>
          <MDBTable>
      <MDBTableHead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Car name</th>
          <th scope='col'>price</th>
          <th scope='col'>model</th>
          <th scope='col'>color</th>
          <th scope='col'>Action</th>


        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <th scope='row'>1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>black</td>

        </tr>
        <tr>
          <th scope='row'>2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope='row'>3</th>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
    </div>
  )
}

export default Table
