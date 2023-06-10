import { useState } from 'react'

const InputBox = () => {
  const [inputVal, setInputval] = useState('')

  const handleChange = (e) => {
    setInputval(e.target.value)
  }
  return (
    <div>
      <form>
        <input type='text' onChange={handleChange} name='todo' value={inputVal} placeholder='Hello ' />
      </form>
    </div>
  )
}

export default InputBox
