import "./App.css"
import { useState } from 'react'
import botImage from '../images/bun.png'

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
        <a href="/" className="home_link">Divine's vyne</a>
      </header>
      <h1>Welcome!!</h1>
       <main>
        <p>
          My name is Karo.
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
        <div className="box"> 
          <h3>Website: </h3> Generated this website to display
          my details. 
          <h3>Hacksters: </h3> Acted as a front-end developer 
          for an interview bot my team and I created for HackED 2026. <br />
          <img src={botImage} alt="image of our bot" className="images"/>
        </div>
        )}

        {tab =="skills" && (
        <div className="box"> 
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
        </div>
        )}

        {tab =="work" && (
        <div className="box"> 
          <h3> Assisstant Crew Leader</h3>
        </div>
        )}

        {tab =="leadership" && (
        <div className="box"> 
          <h3> ESS Funding Coordinator </h3>
          <h3> Electrical Engineering Junior Executive of Clubroom and Events Coordination</h3>
          <h3> Computer Engineering Senior External Executive </h3>
        </div>
        )}        
        
        <div className="footer">
          <div className="footer_container">
                <h1>Contact Me</h1>
                <a href="mailto:oghenekaroegbevurie@gmail.com">Email: oghenekaroegbevurie@gmail.com</a>
          </div>
        </div>
       </main>
    </div>
  );
}

export default App;