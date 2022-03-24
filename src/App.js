import './App.css';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import { useLocation } from 'react-router-dom'

function App() {

  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
}


const Header = () => {

  return <ul>
    <li>
      <Link to="/">
        首页
      </Link>
    </li>
    <li>
      <Link to="/about">
        关于
      </Link>
    </li>
    <li>
      <Link to="/dashboard">
        仪表盘
      </Link>
    </li>

  </ul>

}

const Home = () => {
  return <>
    <Header />
    <div>这是卡拉云的首页</div>
  </>

}

const About = () => {
  // 使用 hook，获得 location 对象
  const location = useLocation();
  // location 对象中含有 pathname，即为当前路径(仅路径部分 不含域名)
  const { pathname } = location

  return <>
    <Header />
    <div>这里是卡拉云的网站，你当前在 {pathname}</div>
  </>
}

const Dashboard = () => {
  return <>
    <Header />
    <div>今日活跃用户: 42</div>
  </>
}

const NotFound = () => {
  return <>
    <Header />
    <div>

      你来到了没有知识的荒原
    </div>
  </>
}

export default App;
