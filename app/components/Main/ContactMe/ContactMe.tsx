"use client"
import { validateEmail } from '@/app/utils/validEmail'
import React, { useState } from 'react'
import { Fade } from 'react-awesome-reveal'

const ContactMe = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    comment: ""
  })

  const getIsFormValid = () => {
    return (
      form.name &&
      validateEmail(form.email)
    )


  }

  const clearInput = () => {
    setForm({
      name: "",
      email: "",
      comment: ""
    })
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert("Your message was sent successfully");
    console.log("submit")
    clearInput()
  }

  return (
    <div className='pt-32 mx-8' id='contact'>
      <h1 className='text-4xl sm:text-5xl  text-center'>Contact Me</h1>
      <Fade cascade direction='up'>
      <form onSubmit={(e) => handleSubmit(e)} className='flex justify-center flex-col '>
        {/* <Fade cascade direction='up'> */}
          <div className='self-center mt-5 w-5/6'>
            <label className='p-5 text-xl'>Name  <sup>*</sup></label>
            <input type='text' value={form.name} name='name' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, name: e.target.value })} placeholder='enter your name' className="form-input px-4 py-3 rounded-full dark:bg-gray-700 w-full" /></div>
          <div className='self-center mt-5 w-5/6 '>
          <label className='p-5 text-xl'>Email  <sup>*</sup></label>
            <input type='email' value={form.email} name='email' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, email: e.target.value })} placeholder='enter your email address' className="form-input px-4 py-3 rounded-full dark:bg-gray-700 w-full" /></div>
            <div className="self-center mt-5 w-5/6">
            <label className='p-5 text-xl'>
              Role <sup>*</sup>
            </label><br/>
            <select 
            className="form-input px-4 py-3 rounded-tr-lg dark:bg-gray-700 w-full"
            // onChange={(e)=> setRole(e.target.value)}
            >
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>

          <div className='self-center mt-5 w-5/6' >
          <label className='p-5 text-xl'>Message  <sup>*</sup></label>
            <textarea placeholder='your message' value={form.comment} name='comment' onChange={(e: any) => setForm({ ...form, comment: e.target.value })} className="form-input px-4 py-3  dark:bg-gray-700  w-full h-48"
          /></div>
          <div className='self-center '>
            <button type='submit'
              disabled={!getIsFormValid()}
              className='transition ease-in-out delay-150 bg-emerald-700 dark:bg-emerald-400 enabled:hover:-translate-y-1 enabled:hover:scale-110 enabled:hover:bg-sky-700 dark:hover:bg-sky-400 duration-300 m-5 p-2 rounded-lg text-white disabled:opacity-75'>
              Send message
            </button>
        </div>
        {/* </Fade> */}
      </form>
      </Fade>
    </div>
  )
}

export default ContactMe
