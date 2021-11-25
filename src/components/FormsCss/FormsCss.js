import React from 'react'
import s from './FormsCss.module.scss'
const FormsCss =()=>{
  return(
    <div>
      <form className={s.form} action="">
        <input type="text"/>
        <input type="text"/>
        <button>Submit</button>
      </form>
    </div>
  )
}
export default FormsCss;