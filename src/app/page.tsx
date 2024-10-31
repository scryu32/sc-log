import "./mainpage.css"

export default function Home() {
  return (
    <div className="main-page">
      <div className="instruction-text">
        <h4>Private Site for <span className="gradiention-text">Scryu</span></h4>
      </div>
      <div className="card-container">
        <a href="/code" className="card">
          <h4>Code</h4>
          <p>코딩하면서 배우게된 새로운 지식이나 신기한 내용들을 소개하는 곳</p>
          <i className="fa-solid fa-code"></i>
        </a>
        <a href="/projects" className="card">
          <h4>Projects</h4>
          <p>코딩을하며 완성한 프로젝트들을 전시하는 곳</p>
          <i className="fa-solid fa-folder"></i>
        </a>
        <a href="/blog" className="card">
          <h4>Blog</h4>
          <p>일상생활과 코딩생활을 공유하는 블로그</p>
          <i className="fa-solid fa-lock"></i>
        </a>
      </div>
    </div>
  );
}
