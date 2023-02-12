import Head from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <title>Tugas cv</title>

      <header className="header">
        <h2 className="logo">
          <b>Mika</b>
        </h2>
        <a href="">
          <div className="toggle">
            <img src="/menu.png"></img>
          </div>
        </a>
        <nav className="navbar">
          <a href="#about">
            <span>
              <b>About</b>
            </span>
          </a>
          <a href="#project">
            <b>Project</b>
          </a>
          <a href="#skill">
            <b>Skill</b>
          </a>
          <a href="#skill">
            <b>Resume</b>
          </a>
        </nav>
      </header>

      <section className="banner">
        <div className="container">
          <div className="warp">
            <div className="tittle">
              <h1>Hi, I'm</h1>
              <h4>
                Dewa<span> Mika</span>
              </h4>
              <p>Newbie Front End Developer and UI/UX Designer</p>
              <a href="#about" className="btn">
                <b> More </b>
              </a>
              <a href="#about" className="btn2">
                <b> View </b>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="container">
          <div className="about-me">
            <div className="about-img"></div>
            <div className="about-text">
              <h2>
                <b>
                  About <span> Me</span>
                </b>
              </h2>
              <h5>
                <b>Dewa Gede Widiatmika</b>
              </h5>
              <p>
                I'm from Indonesia and I have been study at SMK TI Global Badung About 1 year. Besides that i'm a newbie <i>front end developer</i> and <i>ui/ux designer</i>, i've designed several websites especially for mobile on figma.
              </p>
              <a href="https://instagram.com/dewaawidhi_?igshid=NDk5N2NlZjQ=" className="btn3">
                <b> Contact me </b>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="projek" id="project">
        <div className="container">
          <div className="tittle">
            <p> My Project </p>
          </div>

          <div className="card-content">
            <div className="ui-card">
              <img src="/post bold throne.jpg" />
              <div className="desc">
                <h3>Bold Throne</h3>
                <p>
                  This website contains how to <br></br> order an internet cafe room
                </p>
              </div>
            </div>
            <div className="ui-card">
              <img src="/post fth.jpg" />
              <div className="desc">
                <h3>Faith Industries</h3>
                <p>
                  This website contains ways to <br></br> order Faith Industries clothes
                </p>
              </div>
            </div>
            <div className="ui-card">
              <img src="post e kantin.jpg" />
              <div className="desc">
                <h3>Electronic kantin</h3>
                <p>
                  This website contains ways to order <br></br> food and drinks in the cafeteria digitally
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skill" id="skill">
        <div className="inner">
          <div className="judul">
            <h3>
              <b>Skill and Resume</b>
            </h3>
          </div>

          <div className="container">
            <div className="skill-box">
              <div className="skill-tittle">
                <div className="img">
                  <img src="/html.png" className="skill-icon"></img>
                </div>
                <h3>HTML</h3>
              </div>
              <p className="skill-p">I've used HTML to create some designs for my website</p>
            </div>
            <div className="skill-box">
              <div className="skill-tittle">
                <div className="img">
                  <img src="/css.png" className="skill-icon"></img>
                </div>
                <h3>CSS</h3>
              </div>
              <p className="skill-p">I've used CSS to create some designs for my website</p>
            </div>
            <div className="skill-box">
              <div className="skill-tittle">
                <div className="img">
                  <img src="/bootstrap.png" className="skill-icon"></img>
                </div>
                <h3>Bootstrap</h3>
              </div>
              <p className="skill-p">I've used Bootstrap to create some designs for my website</p>
            </div>
            <div className="skill-box">
              <div className="skill-tittle">
                <div className="img">
                  <img src="/sd.jpg" className="skill-icon"></img>
                </div>
                <h3>Sekolah Dasar</h3>
              </div>
              <p className="skill-p">When I was in primary school at SDN 12 Padang Sambian for 6 years, from 2012 to 20018</p>
            </div>
            <div className="skill-box">
              <div className="skill-tittle">
                <div className="img">
                  <img src="/smp.png" className="skill-icon"></img>
                </div>
                <h3>Sekolah Menengah Pertama</h3>
              </div>
              <p className="skill-p">When I was in junior high school at SMP PGRI 5 Denpasar for 3 years, from 2018 to 2021</p>
            </div>
            <div className="skill-box">
              <div className="skill-tittle">
                <div className="img">
                  <img src="/smk ti.png" className="skill-icon"></img>
                </div>
                <h3>Sekolah menengah atas</h3>
              </div>
              <p className="skill-p">When I was in high school, I went to SMK TI Bali Global Badung for about 1 year, from 2021 until now</p>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="footer-cnt">
          <h2>
            <b>Contact</b>
          </h2>
          <p>you can contact me with</p>

          <div className="footer-icon">
            <a href="">
              <img src="/wa.png"></img>
            </a>
            <a href="https://instagram.com/dewaawidhi_?igshid=NDk5N2NlZjQ=x">
              <img src="/ig.png"></img>
            </a>
            <a href="">
              <img src="/twt.png"></img>
            </a>
          </div>
        </div>
      </footer>

      <a className="gotop" href="#">
        <img src="/up.png"></img>
      </a>
    </>
  );
}
