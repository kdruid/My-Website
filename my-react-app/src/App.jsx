import './App.css'
import { useState } from 'react'

function App() {
  const [tab, setTab] = useState(null) 
  const skills = [ 
    {softSkills: "Leadership", hardSkills: "Python"},
    {softSkills: "Communication", hardSkills: "CSS"},
    {softSkills: "Human relations", hardSkills: "Microsoft tools"},
    {softSkills: "problem solving", hardSkills: "HTML"}
  ];

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
        <p> 
          <h3>Website: </h3> generated this website to display
          my details. 
          <h3>Hacksters: </h3> acted as a front-end developer 
          for an interview bot my team and I created for HackED 2026
          <img src="" alt="image of our bot" />
        </p>
        )}

        {tab =="skills" && (
        <p> 
          <table>
            <thead>
              <tr>
                <th> Soft skills </th>
                <th> Hard skills </th>
              </tr>
            </thead>
            <tbody>
              {skills.map((skill, index) => (
                <tr key={index}>
                  <td>{skill.softSkills}</td>
                  <td>{skill.hardSkills}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </p>
        )}

        {tab =="work" && (
        <p> 
          <h3> Assisstant Crew Leader</h3>
        </p>
        )}

        {tab =="leadership" && (
        <p> 
          <h3> ESS Funding Coordinator </h3>
          <h3> Electrical Engineering Junior Executive of Clubroom and Events Coordination</h3>
          <h3> Computer Engineering Senior External Executive </h3>
        </p>
        )}        
        
        <div class="footer_container">
              <h1>Contact Me</h1>
              <a href="tel:+14374320893">Phone: +1 (437)432-0893</a>
              <a href="mailto:oghenekaroegbevurie@gmail.com">Email: oghenekaroegbevurie@gmail.com</a>
        </div>
       </main>
    </div>
  );
}

export default App;