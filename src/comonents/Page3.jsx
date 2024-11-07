import { useContext } from 'react';
import './Page3.css';
import { PlanContext } from '../context';

function Page3() {
  const {page,setPage} = useContext(PlanContext);
  const handleReverse=()=>{
    setPage(page - 1);
  };
  return (
    <div className='full_pg3'>
      <div className='part1_pg3'>
        <div className='btn_part_pg3' onClick={()=>{handleReverse()}}>&lt;</div>
      </div>
      <div className='part2_pg3'>
        <h2>Declaration</h2>
        <div className='chek_pg3'>
          <input type='checkbox' className='check_box_pg3'/>
          <p className='p_pg3'>I hereby declare that none of the proposed members are habitual consumers of alcohol, tobacco, gutka or any recreational drugs.</p>
        </div>
        <div className='chek_pg3'>
          <input type='checkbox' className='check_box_pg3'/>
          <p className='p_pg3'>I hereby declare that all proposed members are in good health and entirely free any mental pf physical impairements or deformities, disease/condition.</p>
        </div>
        <div className='chek_pg3'>
          <input type='checkbox' className='check_box_pg3'/>
          <p className='p_pg3'>I have understood that there is 30 days waiting period for all diseases and 2 years on named ailments.(list of named ailements)</p>
        </div>
        <div className='chek_pg3'>
          <input type='checkbox' className='check_box_pg3'/>
          <p className='p_pg3'>I understand that this policy dosen't cover Pre-existing diseases.</p>
        </div>
      </div>
    </div>
  )
}

export default Page3
