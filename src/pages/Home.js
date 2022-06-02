import { MDBBtn, MDBIcon, MDBSpinner, MDBTable, MDBTableBody, MDBTableHead, MDBTooltip } from 'mdb-react-ui-kit';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { toast } from 'react-toastify';
import { deleteUserStart, loadUserStart } from '../redux/actions';

const Home = () => {
  
  const dispatch = useDispatch();
  const {users,loading,error} = useSelector(state=>state.data);
  
  useEffect(()=>{
    if(error){
      toast.error(error)
    }
  },[error])

   const handleDelete= (id) => {
      try {
        dispatch(deleteUserStart(id))
        toast.success("UserInfo deleted successfully")
        window.location.reload()
      } catch (e){
        console.error('deleteUser',e)
      }
     

   }
  useEffect(()=>{
    console.log('========>',users.map((user)=>{return user.name }));
    dispatch(loadUserStart());
  },[])

  if(loading){
    return (
      <>
      <MDBSpinner style={{marginTop:"10px"}}>
          
      </MDBSpinner>
       <p style={{marginRight:'20px'}}>Loading...</p></>
    )
  }

  return (
    <div className="container" style={{marginTop:'150px'}}>
       <MDBTable>
         <MDBTableHead dark>
                <tr>
                  <th scope='col'>No</th>
                  <th scope='col'>Name</th>
                  <th scope='col'>Email</th>
                  <th scope='col'>Phone</th>
                  <th scope='col'>Adress</th>
                  <th scope='col'>Action</th>
                </tr>
         </MDBTableHead>
         {
           users?.map((user,index)=>{return(
             <MDBTableBody key={index}>
                 <tr>
                   <th scope='row'>{index+1}</th>
                   <td>{user.name}</td>
                   <td>{user.email}</td>
                   <td>{user.phone}</td>
                   <td>{user.address}</td>
                   <td>
                     <MDBBtn color="none" onClick={()=>handleDelete(user.id)} style={{border:'none'}}>
                            <MDBTooltip title="Delete" tag='a'>
                              <MDBIcon fas icon='trash' style={{color:'#dd4b39',border:'none',size:'small'}}/>
                            </MDBTooltip>
                     </MDBBtn>
                     <Link to={`/edituser/${user.id}`}>
                     <MDBTooltip title="Edit" tag='a'>
                              <MDBIcon fas icon='pen' style={{color:'green',border:'none',size:'small'
                              ,marginLeft:'10px'}}/>
                            </MDBTooltip>
                     </Link>
                     <Link to={`/userInfo/${user.id}`}>
                     <MDBTooltip title="Veiw" tag='a'>
                              <MDBIcon fas icon='eye' style={{color:'yellow',border:'none',size:'small'
                              ,marginLeft:'10px'}}/>
                            </MDBTooltip>
                     </Link>
                   </td>


                 </tr>
             </MDBTableBody>
           )})
         }
       </MDBTable>
    </div>
  )
}

export default Home