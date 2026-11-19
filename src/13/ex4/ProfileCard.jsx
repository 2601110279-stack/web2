import React from "react";
import Card from "./Card";

const profiles = [
    {
        id: 1,
        title: "Inje Lee",
        backgroundColor: "white",
        messages: [
            "안녕하세요, 소플입니다.",
            "저는 리액트를 사용해서 개발하고 있습니다."
        ]
    },
    {
        id: 2,
        title: "qwer",
        backgroundColor: "white",
        messages: [
            "안녕하세요.",
            "반가워요."
        ]
    },
    {
        id: 3,
        title: "asdf",
        backgroundColor: "white",
        messages: [
            "안녕하세요.",
            "집이 너무 좋아 보여요.^^"
        ]
    }
];

function ProfileCard(props) {
    return (
        <>
            {profiles.map((profile) => (
                <Card
                    key={profile.id}
                    title={profile.title}
                    backgroundColor={profile.backgroundColor}
                >
                    {profile.messages.map((msg, index) => (
                        <p key={index}>{msg}</p>
                    ))}
                </Card>
            ))}
        </>
    );
}

export default ProfileCard;