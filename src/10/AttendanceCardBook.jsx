import React from "react";
import img01 from "./imgs/01.jpg";
import "./AttendanceCard.css";

const students = [
    {
        id: 1,
        name : "Inje",
        grade : 1,
        major : "인공지능 소프트웨어",
        avatar : img01
    },
    {
        id: 2,
        name : "Steve",
        grade : 1,
        major : "인공지능 소프트웨어",
        avatar : "https://randomuser.me/portraits/women/2.jpg"
    },
    {
        id: 3,
        name : "Bill",
        grade : 1,
        major : "인공지능 소프트웨어",
        avatar : "https://randomuser.me/portraits/women/3.jpg"
    },
    {
        id: 4,
        name : "jeff",
        grade : 1,
        major : "인공지능 소프트웨어",
        avatar : "https://randomuser.me/portraits/women/4.jpg"
    },
];

function AttendanceCard(props) {
    return (
        <div className="attendance-container">
            <h2 className="title">학생 출석부</h2>
            <div className="card-list">
                {students.map(student => (
                    <div key={student.id} className="student-card">
                        <img src={student.avatar} alt={`${student.name}의 프로필`} className="avatar" />
                        <div className="student-info">
                            <h3>{student.name}</h3>
                            <p>{student.grade}학년 | {student.major}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AttendanceCard;