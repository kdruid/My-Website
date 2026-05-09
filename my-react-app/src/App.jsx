import './App.css'
import { useState } from 'react'

function App() {
  const [ShowProj, SetProj] = useState(false)
  const [ShowLead, SetLead] = useState(false)
  const [ShowExp, SetExp] = useState(false)
  const [ShowSkills, SetSkills] = useState(false)



  return (
    <div className="App">
      <header>
        <ul className="home_bar">
            <li className="home_item">
                <a href="/" className="home_button">Divine's vyne</a>
            </li>
        </ul>
      </header>
      <h1>Welcome!!</h1>
       <main>
        <p>
          My name is OgheneKaro Egbevurie.
          I am a Third year Computer Engineering student within the University of Alberta. 
          I am interested in web development, automation, and game development.
          <br />
          Select which route to take
        </p>
        
        
        {ShowProj && (
        <p> I am a student in </p>
        )}
        {ShowSkills && (
        <p> I am a student in </p>
        )}
        {ShowExp && (
        <p> I am a student in </p>
        )}
        {ShowLead && (
        <p> I am a student in </p>
        )}        
        
        <button onClick={() => SetProj(!ShowProj)} className='collapsible'>Projects</button>         

        <button onClick={() => SetExp(!ShowExp)} className='collapsible'>Work Experiecnce</button>

        <button onClick={() => SetLead(!ShowLead)} className='collapsible'>Leadership</button>

        <button onClick={() => SetSkills(!ShowSkills)} className='collapsible'>Technical skills</button>

       </main>
    </div>
  );
}

export default App;