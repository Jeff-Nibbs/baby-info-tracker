import { useEffect } from 'react'
import axios from 'axios'

function TestComponent() {
  useEffect(() => {
    axios
      .get('http://localhost:5001/test')
      .then(res => console.log(res.data))
      .catch(err => console.log('Error: ' + err))
  }, [])

  return <div>Check the console.</div>
}

export default TestComponent
