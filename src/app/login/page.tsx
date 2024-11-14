'use client'; // 클라이언트에서 처리할 경우 사용(필요시 서버에서 처리하는 로직으로 수정필요)

import '@/styles/login.scss';

export default function Page() {
    // 2024.11.14[노찬규]: 로그인 이벤트
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // 로그인 제출 로직 추가 가능
        console.log('Form submitted');
    }

    return (
        <div className="container-sm">
            <form onSubmit={onSubmit}>
                <div className="row">
                    <label htmlFor="ID" className="form-label col-sm">ID</label>
                    <input
                        type="email"
                        className="form-control col-sm"
                        id="ID"
                        required
                        placeholder="id"
                    />
                </div>
                <div className="row">
                    <label htmlFor="Password" className="form-label col-sm">Password</label>
                    <input
                        type="password"
                        className="form-control col-sm"
                        id="Password"
                        required
                        placeholder="password"
                    />
                </div>
                <button type="submit" className="btn btn-primary form-button">Login</button>
            </form>
        </div>
    );
}
