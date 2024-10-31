import "./mainpage.css"

export default function Home() {
  return (
    <div className="main-page">
      <div className="instruction-text">
        <h4>Private Site for <span className="gradiention-text">Scryu</span></h4>
      </div>
      <div className="card-container">
        <div className="card">
          <h4>Blog</h4>
          <p>코딩하면서 배우게된 새로운 지식이나 신기한 내용들을 소개하는 곳</p>
          <i className="fa-solid fa-image"></i>
        </div>
        <div className="card">
          <h4>Project</h4>
          <p>코딩을하며 완성한 프로젝트들을 전시하는 곳</p>
          <i className="fa-solid fa-folder"></i>
        </div>
        <div className="card">
          <h4>Private-Blog</h4>
          <p>개인 일상용 블로그</p>
          <i className="fa-solid fa-lock"></i>
        </div>
      </div>
    </div>
  );
}
