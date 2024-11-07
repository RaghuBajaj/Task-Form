import './Preview.css';

function Preview() {
  return (
    <div className='full_pr'>
        <h2 className='h2_pr'>From preview</h2>
        <div className='box_pr'>
            <p className='p_pr'>Personal email address</p>
            <div className='sec_pr'>
                <p className='p_pr'>Mobile number</p>
                <p className='d_pr'>-</p>
            </div>
            <div className='sec_pr'>
                <p className='p_pr'>Address line 01</p>
                <p className='d_pr'>-</p>
            </div>
            <div className='sec_pr'>
                <p className='p_pr'>Address line 02</p>
                <p className='d_pr'>-</p>
            </div>
            <div className='sec_pr'>
                <p className='p_pr'>Pincode</p>
                <p className='d_pr'>-</p>
            </div>
            <div className='sec_pr'>
                <p className='p_pr'>State</p>
                <p className='d_pr'>-</p>
            </div>
        </div>
      
    </div>
  )
}

export default Preview
