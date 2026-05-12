import './App.css'
import { useState } from 'react'

function App() {
  const [ShowProj, SetProj] = useState(false)
  const [ShowLead, SetLead] = useState(false)
  const [ShowExp, SetExp] = useState(false)
  const [ShowSkills, SetSkills] = useState(false)
  const [tab, setTab] = useState(null) 


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
        
        <button onClick={() =>
          setTab(tab === "projects" ? null : "projects")}  
          className='collapsible'>Projects</button>         
        <button onClick={() => 
          setTab(tab === "work" ? null : "work")}  
          className='collapsible'>Work Experiecnce</button>
        <button onClick={() => 
          setTab(tab === "leadership" ? null : "leadership")}  
          className='collapsible'>Leadership</button>
        <button onClick={() => 
          setTab(tab === "skills" ? null : "skills")}  
          className='collapsible'>Technical skills</button>        
          
        {tab =="projects" && (
        <p> I am a student in </p>
        )}
        {tab =="skills" && (
        <p> I sleep a student in </p>
        )}
        {tab =="work" && (
        <p> I live a student in </p>
        )}
        {tab =="leadership" && (
        <p> I eat a student in </p>
        )}        
        


        <div class="footer_container">
          <div class="footer">
            <div class="footer_heading foot_1">
              <h1>Contact Me</h1>
              <a href="tel:+14374320893">Phone: +1 (437)432-0893</a>
              <a href="mailto:oghenekaroegbevurie@gmail.com">Email: oghenekaroegbevurie@gmail.com</a>
            </div>
         </div>
        </div>
       </main>
    </div>
  );
}

export default App;