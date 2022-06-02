import React from 'react'
import { useSelector } from 'react-redux'
import   {useParams} from 'react-router-dom';

const UserInfo = () => {

  const {id } = useParams()

  const {users } = useSelector((state)=>state.data)
  const singleValue = users.find((user) => user.id === Number(id));
  console.log('singleValue===>+++',users,singleValue);
  return (
    <div style={{marginTop:"100px"}}>
     
      <div style={{margin:'auto',maxWidth:'450px',padding:'15px',alignContent: 'center' }}  className="row">
         <div className='col-md-12 fs-3'>
           <p>User Details</p><hr/>
           <p className='col-md-6 fw-bold'>ID:</p>
           <p className='col-md-6'>{id}</p>

           <p className='col-md-6 fw-bold'>Name:</p>
           <p className='col-md-6'>{singleValue.name}</p>

           <p className='col-md-6 fw-bold'>ID:</p>
           <p className='col-md-6'>{singleValue.email}</p>

         </div>
      </div>
      </div>
  )
}

export default UserInfo