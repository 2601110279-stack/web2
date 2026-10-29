// LoginButton.jsx 예시
function LoginButton({ onClick, className }) {
    return (
        <button onClick={onClick} className={className}>
            로그인
        </button>
    );
}
export default LoginButton;