// 通用导航栏组件 - 所有页面共享
const CommonNavigation = ({ currentPage }) => {
    const { useState } = React;
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const courses = [
        { id: 'home', title: '首页', icon: 'Home', link: 'index.html' },
        { id: 'hardware', title: '计算机硬件', icon: 'Cpu', link: '计算机硬件.html' },
        { id: 'software', title: '软件与工具', icon: 'Code', link: '软件.html' },
        { id: 'network', title: '计算机网络', icon: 'Network', link: '网络.html' },
        { id: 'llm', title: '大语言模型', icon: 'Brain', link: 'LLM.html' },
        { id: 'os', title: '操作系统', icon: 'Terminal', link: 'os.html' }
    ];

    const Icons = {
        Menu: () => (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
        ),
        Close: () => (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
        ),
        Home: () => (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
        ),
        Cpu: () => (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="4" y="4" width="16" height="16" rx="2"/>
                <rect x="9" y="9" width="6" height="6"/>
                <line x1="9" y1="1" x2="9" y2="4"/>
                <line x1="15" y1="1" x2="15" y2="4"/>
                <line x1="9" y1="20" x2="9" y2="23"/>
                <line x1="15" y1="20" x2="15" y2="23"/>
                <line x1="20" y1="9" x2="23" y2="9"/>
                <line x1="20" y1="14" x2="23" y2="14"/>
                <line x1="1" y1="9" x2="4" y2="9"/>
                <line x1="1" y1="14" x2="4" y2="14"/>
            </svg>
        ),
        Code: () => (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16 18 22 12 16 6"/>
                <polyline points="8 6 2 12 8 18"/>
            </svg>
        ),
        Network: () => (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="16" y="16" width="6" height="6" rx="1"/>
                <rect x="2" y="16" width="6" height="6" rx="1"/>
                <rect x="9" y="2" width="6" height="6" rx="1"/>
                <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/>
                <path d="M12 12V8"/>
            </svg>
        ),
        Brain: () => (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/>
                <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>
            </svg>
        ),
        Terminal: () => (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="4 17 10 11 4 5"/>
                <line x1="12" y1="19" x2="20" y2="19"/>
            </svg>
        ),
    };

    return (
        <>
            {/* 汉堡菜单按钮 */}
            <button 
                className="hamburger-nav"
                style={{
                    position: 'fixed',
                    top: '20px',
                    left: sidebarOpen ? '260px' : '20px',
                    zIndex: 1001,
                    cursor: 'pointer',
                    background: 'rgba(15, 23, 42, 0.95)',
                    backdropFilter: 'blur(10px)',
                    padding: '12px',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease',
                    color: '#e2e8f0'
                }}
                onClick={() => setSidebarOpen(!sidebarOpen)}
            >
                {sidebarOpen ? <Icons.Close /> : <Icons.Menu />}
            </button>

            {/* 侧边导航栏 */}
            <aside 
                className="common-sidebar"
                style={{
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    height: '100vh',
                    width: '240px',
                    background: 'rgba(15, 23, 42, 0.98)',
                    backdropFilter: 'blur(10px)',
                    borderRight: '1px solid rgba(255, 255, 255, 0.1)',
                    transform: sidebarOpen ? 'translateX(0)' : 'translateX(-240px)',
                    transition: 'transform 0.3s ease',
                    zIndex: 1000,
                    overflowY: 'auto',
                    fontFamily: "'Noto Sans SC', sans-serif"
                }}
            >
                <div style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <h2 style={{ 
                        fontSize: '1.25rem', 
                        fontWeight: 'bold',
                        background: 'linear-gradient(to right, #38bdf8, #818cf8)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginBottom: '8px'
                    }}>
                        CS 入门科普
                    </h2>
                    <p style={{ fontSize: '0.875rem', color: '#94a3b8' }}>交互式学习平台</p>
                </div>

                <nav style={{ padding: '16px' }}>
                    {courses.map(course => {
                        const IconComponent = Icons[course.icon];
                        const isActive = course.id === currentPage;
                        return (
                            <a
                                key={course.id}
                                href={course.link}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    padding: '12px',
                                    marginBottom: '8px',
                                    borderRadius: '8px',
                                    textDecoration: 'none',
                                    color: isActive ? '#38bdf8' : '#e2e8f0',
                                    background: isActive ? 'rgba(56, 189, 248, 0.1)' : 'transparent',
                                    borderLeft: isActive ? '4px solid #38bdf8' : '4px solid transparent',
                                    transition: 'all 0.2s ease'
                                }}
                                onMouseEnter={(e) => {
                                    if (!isActive) {
                                        e.currentTarget.style.background = 'rgba(56, 189, 248, 0.05)';
                                        e.currentTarget.style.borderLeftColor = '#38bdf8';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (!isActive) {
                                        e.currentTarget.style.background = 'transparent';
                                        e.currentTarget.style.borderLeftColor = 'transparent';
                                    }
                                }}
                            >
                                <IconComponent />
                                <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>{course.title}</span>
                            </a>
                        );
                    })}
                </nav>

                <div style={{ 
                    position: 'absolute', 
                    bottom: 0, 
                    width: '100%', 
                    padding: '16px', 
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    background: 'rgba(15, 23, 42, 0.9)'
                }}>
                    <p style={{ fontSize: '0.75rem', color: '#64748b', textAlign: 'center' }}>
                        © 2025 CS Learning
                    </p>
                </div>
            </aside>

            {/* 主内容区域的左边距调整样式 */}
            <style>{`
                body {
                    margin-left: ${sidebarOpen ? '240px' : '0'};
                    transition: margin-left 0.3s ease;
                }
                .hamburger-nav:hover {
                    background: rgba(30, 41, 59, 0.95) !important;
                    borderColor: #38bdf8 !important;
                }
                .common-sidebar::-webkit-scrollbar {
                    width: 6px;
                }
                .common-sidebar::-webkit-scrollbar-track {
                    background: #0f172a;
                }
                .common-sidebar::-webkit-scrollbar-thumb {
                    background: #475569;
                    border-radius: 3px;
                }
            `}</style>
        </>
    );
};
