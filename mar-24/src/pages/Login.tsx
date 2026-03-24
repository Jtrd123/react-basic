// import React, { useState } from "react"
// import Button from "../components/Button"
import { useForm } from "react-hook-form"

interface RegisterForm {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
  firstNmae: string;
  lastname: string;
}

const Login = () => {
  const { register, handleSubmit } = useForm<RegisterForm>();
  const onSubmit = (data: RegisterForm) => {
    console.log(data)
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('username')} type="text" id="username" />
        <input {...register('email', {required: "Email is required"})} type="email" id="email" />
        <input {...register('firstNmae')} type="text" id="firstName" />
        <input {...register('lastname')} type="text" id="lastName" />
        <input {...register('password')} type="password" id="password" />
        <input {...register('confirmPassword')} type="password" id="confirmPassword" />

        <input type="submit" value="Login" />
      </form>
      {/* <Button title="Login"></Button> */}
    </div>
  )
}
export default Login