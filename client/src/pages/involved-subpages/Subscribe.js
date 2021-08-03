import React from 'react';
import { useForm } from 'react-hook-form';

import "./involved.css";

export default function Subscribe() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Subscribe for Future Research</h2>
        <hr></hr>
        <select {...register("Title", { required: true })}>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
          <option value="Dr">Dr</option>
        </select>
        <hr></hr>
        <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
        <hr></hr>
        <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
        <hr></hr>
        <input type="text" placeholder="Email" {...register("Email", {required: true})} />
        <hr></hr>
        <textarea placeholder="Optional: leave a note" {...register("Message")} />
        <hr></hr>
        <input type="submit" />
      </form>
    </div>
  );
}