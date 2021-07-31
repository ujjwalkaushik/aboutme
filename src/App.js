import portfolioImage from './portfolio.PNG';
import github from './assets/github.svg';
import linkedin from './assets/linkedin.svg';
import twitter from './assets/twitter.svg';
import stackoverflow from './assets/stackoverflow.svg';
import './App.css';

function App() {

  const skillList = ['JavaScript', 'TypeScript', 'Angular', 'ES6', 'React', 'HTML5', 'CSS3', 'RxJS', 'WebPack', 'git',
    'GraphQL', 'ExpressJS', 'NgRX']
  return (
    <>
      <div className="background_1"></div>
      <div className="background_1 background_2"></div>
      <div className="background_1 background_3"></div>

      <div className="container">
        <div className="profile-section">
          <img src={portfolioImage} className="App-logo" alt="logo" />
          <div><span className="profile-text">Ujjwal Kaushik</span></div>
          <div><span className="profile-text">SDE III</span></div>
          <div className="skills-section">
            {skillList.map((skill) => {
              return <div class="chip">
                <div class="chip-content">
                  {skill}
                </div>
              </div>
            })}

          </div>
        </div>

        <div className="link-section">
          <div className="hyperlink">
            <img src={github} className="social-logo" alt="logo" />
            <div>
              <a className="social-link" target="_blank" href="https://github.com/ujjwalkaushik">
                https://github.com/ujjwalkaushik
              </a>
            </div>
          </div>

          <div className="hyperlink">
            <img src={stackoverflow} className="social-logo" alt="logo" />
            <div>
              <a className="social-link" target="_blank" href="https://stackoverflow.com/users/5462976/ujjwal-kaushik">
                https://stackoverflow.com/users/5462976/ujjwal-kaushik
              </a>
            </div>
          </div>

          <div className="hyperlink">
            <img src={linkedin} className="social-logo" alt="logo" />
            <div>
              <a className="social-link" target="_blank" href="https://www.linkedin.com/in/ujjwal-kaushik-065356114/">
                https://www.linkedin.com/in/ujjwal-kaushik-065356114/
              </a>
            </div>
          </div>

          <div className="hyperlink">
            <img src={twitter} className="social-logo" alt="logo" />
            <div>
              <a className="social-link" target="_blank" href="https://twitter.com/ujjawalkaushik">
                https://twitter.com/ujjawalkaushik
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
