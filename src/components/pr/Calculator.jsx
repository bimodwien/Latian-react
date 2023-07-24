import {useRef, useState} from 'react'
import './style.css'

export default function Calculator() {

  const input1 = useRef(0)
  const input2 = useRef(0)

  const [counter, setCounter] = useState(0)

  

  function handleTambah() {
    setCounter(Number(input1.current.value) + Number(input2.current.value))
    input1.current.value = 0
    input2.current.value = 0
  }
  
  function handleKurang() {
    setCounter(input1.current.value - input2.current.value)
    input1.current.value = 0
    input2.current.value = 0
  }

  function handleKali() {
    setCounter(input1.current.value * input2.current.value)
    input1.current.value = 0
    input2.current.value = 0
  }

  function handleBagi() {
    setCounter(input1.current.value / input2.current.value)
    input1.current.value = 0
    input2.current.value = 0
  }

  return (
    <>
      <div className='container'>
      <input ref={input1} type="number" />
      <input ref={input2} type="number" />
      <button onClick={handleTambah}>Tambah</button>
      <button onClick={handleKurang}>Kurang</button>
      <button onClick={handleKali}>Kali</button>
      <button onClick={handleBagi}>Bagi</button>
    </div>
    <div>
      Result: {counter}
    </div>
    </>

  )
}
