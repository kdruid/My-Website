import "./App.css"
import { useState } from 'react'
import botImage from '../images/bun.png'
import myImage from '../images/portfolioE.jpeg'

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
      <h2>Salutations and Welcome</h2>
       <main>
        <div className="content">
          <h3>My name is Karo. <br /></h3>
        </div>
        <div className="content">
          I am a Third year Computer Engineering student studying at the University of Alberta. 
          I have been acutely interested in web development, software development, system and 
          hardware automation, and game development.
          <br />
          Outside of these I have a variety of hobbies such as 
          <li>
            <ul>Playing volleyball.</ul>
            <ul>Making websites.</ul>
            <ul>Working out.</ul>
            <ul>Meeting new individuals.</ul>
          </li>
          <br />
        </div>
        <img src={myImage} alt="image of me" /> <br />

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
          className='collapsible'>Technical skills</button> <br />   

        {tab =="projects" && (
        <div className="p_box"> 
          <h3>Website: </h3> Generated this website to display
          my details. 
          <h3>Hacksters: </h3> Acted as a front-end developer 
          for an interview bot my team and I created for HackED 2026. <br />
          <img src={botImage} alt="image of our bot" className="images"/>
        </div>
        )}

        {tab =="skills" && (
        <div className="s_box"> 
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
        <div className="w_box"> 
          <h3> Assisstant Crew Leader</h3>
        </div>
        )}

        {tab =="leadership" && (
        <div className="l_box"> 
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