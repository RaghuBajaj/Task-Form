import './Page1.css';

function Page1() {
  return (
    <div className='full_pg1'>
        <h2 className='h2_pg1'>Choose your plan</h2>
        <p className='p1_pg1'>Hello Anisha,</p>
        <p className='p1_pg1'>Increase yours and your family's health insurance cover by <strong>$20 lakhs</strong> with Super top-up!</p>
        <div className='plan_pg1'>
            <div className='head_pg1'>Plan details</div>
            <div className='part_pg1' >
                <p className='title_pg1'>Your plan type</p>
                <input type='text' placeholder='Select your plan' className='input_pg1'/>
            </div>
        </div>
        <div className='plan_pg1'>
            <div className='head_pg1'>Basic details</div>
            <div className='infoBox_pg1'>
                <div className='sec_pg1'>
                    <div className='part_pg1'>
                        <p className='title_pg1'>Personal email address</p>
                        <input type='text' placeholder='Enter' className='input_pg1'/>
                    </div>
                    <div className='part_pg1'>
                        <p className='title_pg1'>Mobile number</p>
                        <input type='text' placeholder='Enter' className='input_pg1'/>
                    </div>
                </div>
                <div className='sec_pg1'>
                    <div className='part_pg1'>
                        <p className='title_pg1'>Address line 01</p>
                        <input type='text' placeholder='Enter' className='input_pg1'/>
                    </div>
                    <div className='part_pg1'>
                        <p className='title_pg1'>Address line 01</p>
                        <input type='text' placeholder='Enter' className='input_pg1'/>
                    </div>
                </div>
                <div className='sec_pg1'>
                    <div className='part_pg1'>
                        <p className='title_pg1'>Pincode</p>
                        <input type='text' placeholder='Enter' className='input_pg1'/>
                    </div>
                    <div className='part_pg1'>
                        <p className='title_pg1'>State</p>
                        <input type='text' placeholder='Enter' className='input_pg1'/>
                    </div>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Page1
