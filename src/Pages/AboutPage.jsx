import React from 'react'
import About from '../Components/about/About'
// import { useDispatch } from 'react-redux'
// import { add } from '../redux/Counter/counterSlice'
// import { dec } from '../redux/Counter/counterSlice'

function AboutPage() {

  // const dispatch = useDispatch()

  // function increment() {
  //   dispatch(add('hello'))
  // }
  // function decrement() {
  //   dispatch(dec('hello'))
  // }
  return (
    <div>
      {/* <button onClick={() =>increment()}>Add</button>
      <br /><br />
      <button onClick={() => decrement()}>dec</button> */}
      <About/>
    </div>
  )
}

export default AboutPage
