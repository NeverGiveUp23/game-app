import { useState } from 'react'
import './App.css'
import Alert from './components/Alert';
import Button from './components/Button';
import ListGroup from './components/ListGroup'

function App() {
  let items = ["New York", "Miami", "Florida", "California"];
  const [alertVisible, setAlertVisible] = useState(false)

  const handleSelectedItem = (item: string) => {
    console.log(item)
  }

  // const handleOnClick = () => {
  //   console.log("Clicked")
  // }



  return (
    <div className="App">
      <ListGroup items={items} heading="Cities" onSelectedItem={handleSelectedItem}  />
      { alertVisible && <Alert onClose={() => setAlertVisible(false)} >My Alert</Alert>}
      <Button  onClick={() => setAlertVisible(true)} >
        My Button
      </Button>
    </div>
  )
}

export default App
