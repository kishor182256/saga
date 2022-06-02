import { MDBBtn, MDBInput, MDBValidation } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createUserStart, updateUserStart } from '../redux/actions';
import {toast} from 'react-toastify'
import   {useParams} from 'react-router-dom';



const initialState ={
  name: '',
  email: '',
  phone: '',
  address: '',
}

const AddEditUser = () => {

     const [formvalue ,setFormValue] = useState(initialState);
     const {name, email, phone, address} =formvalue;
     const dispacth = useDispatch();
     const {id} =useParams();
     const {users } = useSelector((state)=>state.data)
     const [editMode,setEditMode] = useState(false);

     const handleSubmit = (e) => {
           e.preventDefault();
         try {  
           if(name && email && phone && address) {  
            if(!editMode){
              dispacth(createUserStart(formvalue)) 
              toast.success("User created successfully")
            }else{
              dispacth(updateUserStart({id,formvalue}))
              setEditMode(false)
              toast.success("User updated successfully")
            }
            
           }

          }catch(e) {
            console.error(e);
            toast.error("Error creating user",e)
          }
           
     }

     const onInputChange = (e) => {
              let {name,value} = e.target;
              setFormValue({...formvalue,[name]:value})
     }

     useEffect(()=>{
         if(id){
           setEditMode(true)
           const singleValue = users.find((user) => user.id === Number(id));
           setFormValue({...singleValue})
     }else{
       setEditMode(false)
       setFormValue({...initialState})
     }
         
     },[id])

  return (
    <MDBValidation className='row g-3' style={{marginTop:'100px'}} noValidate onSubmit={handleSubmit}> 
         <p className='fs-2 fw-bold' style={{alignContent: 'center'}}>{editMode?'Edit User Details':'Add User Details'}</p>
      <div style={{ margin: 'auto', padding: '5px', maxWidth: '400px', alignContent: 'center' }}>
        <MDBInput value={name||''} name="name" type='text'
          onChange={onInputChange} required label="Name" validation="Please Enter Name" invalid />
        <MDBInput value={email||''} name="email" type='email' style={{marginTop:"10px"}}
          onChange={onInputChange} required label="Email" validation="Please Enter Email" invalid />
        <MDBInput value={address||''} name="address" type='text' style={{marginTop:"10px"}}
          onChange={onInputChange} required label="Address" validation="Please Enter Address" invalid />
        <MDBInput value={phone||''} name="phone" type='number' style={{marginTop:"10px"}}
          onChange={onInputChange} required label="Phone" validation="Please Enter Phone" invalid />
          <br />
          <div>
            <MDBBtn type="submit">{editMode?"Update":'Add User'}</MDBBtn>
          </div>
      </div>
    </MDBValidation>
  )
}

export default AddEditUser