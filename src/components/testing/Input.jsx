import React, { useState, useRef } from 'react'
import './inputStyle.css'

const Input = () => {

    // ini useState buat set text tanpa menggunakan button
    const [textResult, setTextResult] = useState('')
   
    // ini buat useRef, text dikeluarkan dengan menggunakan button
    const input1 = useRef('')
    const [textResult1, setTextResult1] = useState('')
    
    // ini fungsi buat ngehandle useState langsung ngeluarin textnya
    function handleTextChange(event) {
        setTextResult(event.target.value)
    }

    // ini fungsi buat ngehandle text yang memakai button
    function handleTextButton() {
        setTextResult1(input1.current.value)
    }

  return (
    <>
        {/* Ini yang buat keluar langsung namanya tanpa perlu button buat masukin inputnya */}
        <div className='inputUtama'>
            <input type="text" value={textResult} onChange={handleTextChange}/>
            Result: {textResult}
        </div>
        <br />

        {/* ini buat ngeluarin textnya dengan memakai button */}
        <div className='inputButton'>
            <input type="text" ref={input1} />
            <button className='button' onClick={handleTextButton}>Input</button>
        </div>
        Result: {textResult1}
    </>
  )
}

export default Input