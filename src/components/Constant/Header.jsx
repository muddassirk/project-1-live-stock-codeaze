import React from 'react'
import DraftsIcon from '@mui/icons-material/Drafts';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

const Header = () => {
    return (
        // <div className='container border border-secondary d-flex justify-content-between py-2'>
        <div className='container  d-flex justify-content-between py-2'>
            <div className='d-flex'>
                <div className='mx-2 fw-bold'>
                    <PhoneAndroidIcon />
                    +93958293852943
                </div>
                <div className='mx-2 fw-bold'>
                    <DraftsIcon />
                    admin@admin.com
                </div>
            </div>
            <div className='d-flex '>
                <div className='mx-2 fw-bold'>Register</div>
                <div className='mx-2 fw-bold'>Sign in</div>
            </div>
        </div>
    )
}

export default Header
