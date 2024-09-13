import React from 'react'
import { CONTACT } from '../constants'

const Contact = () => {
    return (
        <div className='border-b border-neutral-900 pb-20'>
            <h1 className='my-10 mb-5 text-purple-500 text-center text-4xl font-thin'>Get In Touch</h1>
            <div className='text-center tracking-tighter'>
                <p className='my-4 font-thin'>
                        {CONTACT.address}
                </p>
                <p className='font-thin'>{CONTACT.phoneNo}</p>
                <a href='' className='border-b border-blue-400 font-thin text-blue-400'>{CONTACT.email}</a>
            </div>
        </div>
    )
}

export default Contact
