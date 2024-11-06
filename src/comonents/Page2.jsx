import './Page2.css';

function Page2() {
  return (
    <div className='full_pg2'>
      <div className='header_pg2'>
        <div className='btn_part_pg2'>&lt;</div>
        <div className='head_pg2'>
          <h2 className='h2_pg2'>Select your deductible amount</h2>
          <p className='p_pg2'>Select the deductible amount for the policy (or policies) below.</p>
          <p className='p_pg2'>(what is a deductible?)</p>
        </div>
      </div>
      <div className='box_pg2'>
        <div className='box_p_pg2'>
          <h4>Self (Individual)</h4>
          <p>John Doe</p>
        </div>
        <div className='box_p1_pg2'>
          <p>Sum insured of $20,00,000 with a deductible of <strong>$3,00,000</strong> </p>
          <input type='range'/>
        </div>
      </div>
      <div>
        <input type='checkbox'/>
        <p>I understand that this insurance will not be utlized until $3,00,000 (deductible) is enhausted.</p>
      </div>
    </div>
  )
}

export default Page2
