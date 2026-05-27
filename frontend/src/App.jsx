import "./App.css"
import { useState, useContext, useRef } from 'react'
import botImage from '../images/bun.png'
import myImage from '../images/portfolioE.jpeg'

function GameSlide() {
    const images= [
        '/Screenshot 2026-05-20 222616.png',
        '/Screenshot 2026-05-20 223805.png',
        '/Screenshot 2026-05-20 223821.png',
        '/Screenshot 2026-05-20 223836.png',
        '/Screenshot 2026-05-20 223851.png',
        '/Screenshot 2026-05-20 223903.png',
        '/Screenshot 2026-05-20 223917.png',
        '/Screenshot 2026-05-20 223953.png',
        '/Screenshot 2026-05-20 224148.png',
        '/Screenshot 2026-05-20 224303.png',
        '/Screenshot 2026-05-20 224348.png',
        '/Screenshot 2026-05-20 224402.png',
        '/Screenshot 2026-05-20 224417.png'
    ]
    const [currentIndex, setCurrentIndex] = useState(0)

    return(
      <div >
        <img className="images" src={images[currentIndex]} alt="image of video game" /> <br />
        <button  
          onClick={() => currentIndex == images.length-1? setCurrentIndex(0) : setCurrentIndex(currentIndex+1)}
        className="swap" id="next"> Next </button>
        <button 
        onClick={() => currentIndex == 0? setCurrentIndex(images.length-1) : setCurrentIndex(currentIndex-1)}
        className="swap" id="prev"> Previous </button>
      </div>
    )
}

function App() {
  const [tab, setTab] = useState(null);
  const [open, setOpen] = useState(false)
  const [display, setDisplay] = useState(false)
  //const Dot = () => <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#333', margin: '2px 0', top:"20px", right:"20px"   }} />;

  return (
    <div className="App">
      <header>
        <div className="head_l">
          <img src={myImage} alt="logo" className="logo"/>
          <h3> Divine's Vyne</h3>
          <button onClick={() => setOpen(!open)} id="dropDown">
              <div className="hamburger-line" />
              <div className="hamburger-line" />
              <div className="hamburger-line" />
          </button>
        </div>

        {open && <div className="overlay" onClick={() => setOpen(false)}>
        <div className="dropdown_menu">
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
          </div>
        </div>
       }
    
        </header>
        <main>

          <div className="content">
          <span>
            <h3>Welcome</h3>
            <h2>My name is Karo. <br /></h2>
            I am a Third year Computer Engineering student studying at the University of Alberta. 
            I have interests in: 
            <ul>
              <li>Web development</li>
              <li>Software development</li>
              <li>System and hardware automation</li>
              <li>Game development</li>
            </ul>
            <br />
            Outside of these I have a variety of hobbies such as 
            <ul>
              <li>Playing volleyball.</li>
              <li>Making websites.</li>
              <li>Working out.</li>
              <li>Meeting new individuals.</li>
            </ul>
          </span>
        <img src="20250617_124210.jpg" alt="image of me" /> <br />
        </div>

        {tab =="projects" && (
        <div className="p_box"> 
          <h3>Website developer: </h3> 
          <ul>
            <li>Generated this portfolio.</li>
            <li>Creating unique portfolios for others to strengthen my skillset</li>
            <li>Learning Backend tools like Nodejs to become a Full-stack dev</li>
          </ul>
          <h3>Hacksters: </h3> 
          <ul>
            <li>Acted as a front-end developer working mainly with CSS.</li>
            <li>Worked on the webpage flow to allow the user a simple interface to work with</li>
            <li> Created an interview bot that utilized MediaPipe to check engagement via posture and eye tracking.</li>
          </ul>
          <img src={botImage} alt="image of our bot" className="images"/>

          <h3>Video game creation</h3>
          <ul>
            <li>Dedicated over 50 hours of learning, designing and creating this maze type game using Godot Engine. </li>
            <li>Utilizes storyline, multiple free non-comprehensive assets, multiple transitions </li> 
            <li>Created authentic pixel art using piskel. </li> 
          </ul>
          <GameSlide />
        </div>
        )}

        {tab =="skills" && (
        <div className="s_box"> 
          <div className="s_col">
            <h3>Soft skills</h3>
            <ul>
              <li>Curiosity</li>
              <li>Leadership</li>
              <li>Adaptability</li>
              <li>Communication</li>
              <li>Human relations</li>
              <li>Problem solving</li>
              <li>Self learning</li>
            </ul>
          </div>

          <div className="s_col">
            <h3>Hard skills</h3>
            <ul>
              <li>Python</li>
              <li>CSS</li>
              <li>Microsoft tools</li>
              <li>Frontend</li>
              <li>Git&itHub</li>
              <li>C & C++</li>
              <li>Godot</li>
              <li>Debugging</li>
            </ul>
          </div>
        </div>
        )}

        {tab =="work" && (
        <div className="w_box"> 
          <h3> Web developer and designer</h3>
            <ul>
              <li>Working as a freelance website developer.</li>
              <li>Creating personal portfolios</li>
              <li className="itals"> Hoping to expand to creating small business webapps. </li>
            </ul>
          <h3> Assisstant Crew Leader</h3>
            <ul>
              <li>Managed and prioritized tasks across multiple job sites with high attention to detail and quality standards.</li>
              <li>Demonstrated strong problem-solving skills in changing environments. </li>
              <li>Worked effectively in a team to complete projects on schedule. </li>
            </ul>
        </div>
        )}

        {tab =="leadership" && (
        <div className="l_box"> 
          <h3> Computer Engineering Senior External Executive </h3>
            <ul>
              <li>Acting as the face of the club to companies and other groups</li>
              <li>Planning Aether 2026 for the club. </li>
              <li>Aided in the club movie production, and other events like HackED and HackED BETA </li>
            </ul>          
          <h3> Electrical Engineering Junior Executive of Clubroom and Events Coordination</h3>
            <ul>
              <li> Managed sales in the clubroom.</li>
              <li> Ensured that merch and goods were accounted for. </li>
            </ul>
          <h3> ESS Funding Coordinator </h3>
            <ul>
              <li>Managed spreadsheets and prices for the club.</li>
              <li>Contributed in meetings and took minutes </li>
            </ul>

        </div>
        )}        
      </main>

      <footer>
        <div className="footer_container">
          <h1>Contact Me</h1>
          <a href="mailto:oghenekaroegbevurie@gmail.com">Email: oghenekaroegbevurie@gmail.com</a>
        </div>
      </footer>
    </div>
  );
}

export default App;