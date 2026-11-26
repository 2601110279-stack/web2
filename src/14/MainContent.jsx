import React, { useContext, useState } from "react";
import ThemeContext from "./ThemeContext";
import "./App.css";


const programs = [
    {
        title: "Chiikawa Timer",
        category: "시간 관리",
        description: "먼작귀 테마의 타이머 프로젝트",
        url: "https://github.com/skgr07/chiikawa_timer_share",
        image: "/images/chiikawa-timer.jpg"
    },
    {
        title: "OhMyChiikawa",
        category: "데스크톱 펫",
        description: "먼작귀 캐릭터 데스크톱 프로그램",
        url: "https://github.com/WayneYe912/OhMyChiikawa",
        image: "/images/ohmychiikawa.jpg"
    },
    {
        title: "Yaha-Pet",
        category: "데스크톱 펫",
        description: "캐릭터와 함께하는 데스크톱 펫",
        url: "https://github.com/gitChara-dot/Yaha-Pet",
        image: "/images/yaha-pet.jpg"
    },
    {
        title: "ChiikawaBest",
        category: "기타 도구",
        description: "먼작귀 관련 팬메이드 프로젝트",
        url: "https://github.com/YrracOwl/ChiikawaBest",
        image: "/images/chiikawa-best.jpg"
    }
];

const categories = [
    { name: "전체", icon: "✨", color: "pink" },
    { name: "데스크톱 펫", icon: "🧸", color: "green" },
    { name: "시간 관리", icon: "⏰", color: "blue" },
    { name: "게임", icon: "🎮", color: "purple" },
    { name: "기타 도구", icon: "🎁", color: "pink" }
];

function MainContent() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [selectedCategory, setSelectedCategory] = useState("전체");

    const filteredPrograms = programs.filter((program) => {
        return (
            selectedCategory === "전체" ||
            program.category === selectedCategory
        );
    });

    return (
        <div className={`site ${theme}`}>
            <header className="header">
                <a href="#home" className="logo">
                    CHIIKAWA LAB
                </a>

                <button
                    className="themeButton"
                    onClick={toggleTheme}
                >
                    {theme === "light" ? "🌙" : "☀️"}
                </button>
            </header>


            <section className="hero" id="home">
                <div className="heroText">
                    <p className="subTitle">
                        CHIIKAWA FAN PROJECT ARCHIVE
                    </p>

                    <h1>
                        작고 귀여운 친구들의
                        <br />
                        특별한 프로그램!
                    </h1>

                    <p className="heroDescription">
                        먼작귀 캐릭터를 활용한 다양한
                        <br />
                        팬메이드 프로그램을 만나보세요.
                    </p>
                </div>

                <div className="heroImage">
                    <img
                        src="/images/main-banner.jpg"
                        alt="Chiikawa Lab 메인 일러스트"
                    />
                </div>
            </section>


            <section className="categorySection">
                <h2>프로그램 카테고리</h2>

                <div className="categoryList">
                    {categories.map((category) => (
                        <button
                            key={category.name}
                            className={`categoryItem ${category.color} ${
                                selectedCategory === category.name ? "active" : ""
                            }`}
                            onClick={() => setSelectedCategory(category.name)}
                        >
                            {category.icon} {category.name}
                        </button>
                    ))}
                </div>
            </section>


            <section className="programSection" id="programs">
                <h2>추천 프로그램</h2>

                <p className="resultCount">
                    총 {filteredPrograms.length}개의 프로그램
                </p>

                <div className="programList">
                    {filteredPrograms.length > 0 ? (
                        filteredPrograms.map((program) => (
                            <div
                                className="programCard"
                                key={program.title}
                            >
                                <div className="programIcon">
                                    <img
                                        src={program.image}
                                        alt={program.title}
                                    />
                                </div>

                                <div className="programInfo">
                                    <h3>{program.title}</h3>

                                    <span className="programCategory">
                                        {program.category}
                                    </span>

                                    <p>{program.description}</p>

                                    <a
                                        href={program.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        GitHub 바로가기 →
                                    </a>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="noResults">
                            <p>🔍 표시할 프로그램이 없습니다.</p>
                            <span>다른 카테고리를 선택해 보세요!</span>
                        </div>
                    )}
                </div>
            </section>

            <footer className="footer" id="about">
                <h3>CHIIKAWA LAB</h3>

                <p>
                    먼작귀 팬메이드 프로그램 아카이브
                </p>

                <small>
                    비공식 팬 프로젝트 소개 사이트입니다.
                </small>
            </footer>
        </div>
    );
}

export default MainContent;