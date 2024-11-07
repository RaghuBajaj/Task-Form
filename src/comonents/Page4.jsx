import { useContext } from 'react';
import './Page4.css';
import { PlanContext } from '../context';

function Page4() {
  const {page,setPage,user} = useContext(PlanContext);
  const handleReverse=()=>{
    setPage(page - 1);
  };
  return (
    <div className='full_pg4'>
      {page < 5 ? (
         <div className='part1_pg4'>
            <div className='btn_part_pg4' onClick={()=>{handleReverse()}}>&lt;</div>
            <h2 className='h2_pg4'>Review and confirm payment</h2>
       </div>
      ):(
        <div className='part1_pg4'>
          <h2 className='h2_pg4'>Congratulations!</h2>
        </div>
      )}
      <div className='box_pg4'>
        <div className='sec_pg4'>
          <p className='title_pg4'>Plan selected</p>
          <p className='ans_pg4'>{user.your_plan}</p>
        </div>
        <div className='sec_pg4'>
          <p className='title_pg4'>Mobile number</p>
          <p className='ans_pg4'>{user.mobile}</p>
        </div>
        <div className='sec_pg4'>
          <p className='title_pg4'>Address line 01</p>
          <p className='ans_pg4'>{user.address1}</p>
        </div>
        <div className='sec_pg4'>
          <p className='title_pg4'>Pincode</p>
          <p className='ans_pg4'>{user.pincode}</p>
        </div>
        <div className='sec_pg4'>
          <p className='title_pg4'>State</p>
          <p className='ans_pg4'>{user.state}</p>
        </div>
      </div>
    </div>
  )
}

export default Page4
