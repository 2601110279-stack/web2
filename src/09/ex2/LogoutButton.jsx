// LoginButton.jsx 예시
function LogoutButton({ onClick, className }) {
    return (
        <button onClick={onClick} className={className}>
            로그아웃
        </button>
    );
}
export default LogoutButton;