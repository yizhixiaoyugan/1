export default function App() {
  // 构建时间会在 CI 中通过环境变量注入，本地开发显示当前时间
  const buildTime = import.meta.env.VITE_BUILD_TIME || new Date().toLocaleString('zh-CN', { 
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit',
    hour12: false
  }).replace(/\//g, '/')

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      backgroundColor: '#f5f5f5',
      padding: '2rem'
    }}>
      <h1 style={{
        color: '#1890ff',
        fontSize: '2.5rem',
        marginBottom: '1.5rem',
        textAlign: 'center'
      }}>
        GitHub CI/CD 实践成功！
      </h1>
      
      <p style={{ fontSize: '1.1rem', color: '#333', marginBottom: '2rem' }}>
        这是通过 GitHub Actions 自动部署的静态页面 🚀
      </p>
      
      <div style={{ textAlign: 'center', lineHeight: '2' }}>
        <p><strong>提交时间：</strong>{buildTime}</p>
        <p><strong>提交姓名：</strong>史嘉怡</p>
        <p><strong>学号：</strong>2022210402019</p>
      </div>
    </div>
  )
}

