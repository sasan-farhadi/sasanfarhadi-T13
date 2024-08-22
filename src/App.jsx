import { useState } from "react"
import Tab1 from "./Tab1"
import Tab2 from "./Tab2"
import Tab3 from "./Tab3"
import Tab4 from "./Tab4"

const App = () => {
  const [activeTab, setActiveTab] = useState('tab1')
  localStorage.setItem('active', activeTab)
  let [localstorageData, setLocalStorageData] = useState()

  const inputHandler = (event) => {
    setLocalStorageData(localStorage.getItem("active"))
    setActiveTab(event.target.id)
  }

  const tabsHandler = () => {
    switch (activeTab) {
      case 'Tab1':
        return <Tab1></Tab1>
      case 'Tab2':
        return <Tab2></Tab2>
      case 'Tab3':
        return <Tab3></Tab3>
      case 'Tab4':
        return <Tab4></Tab4>

        break;
      default:
        break;
    }
  }
  return (
    <div>
      <div className="container">
        <header>
          <h1>Sasan Farhadi | Tabs Components With React</h1>
          <div className="radio-inputs" onChange={inputHandler}>
            <label className="radio">
              <input type="radio" name="radio" id="Tab1" defaultChecked />
              <span className="name">JavaScript</span>
            </label>
            <label className="radio">
              <input type="radio" name="radio" id="Tab2" />
              <span className="name">ReactJs</span>
            </label>
            <label className="radio">
              <input type="radio" name="radio" id="Tab3" />
              <span className="name">NextJs</span>
            </label>
            <label className="radio">
              <input type="radio" name="radio" id="Tab4" />
              <span className="name">Github</span>
            </label>
          </div>
        </header>
      </div>
      {
        tabsHandler()
      }
    </div>
  )
}
export default App
