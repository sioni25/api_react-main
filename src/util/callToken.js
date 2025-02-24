/* 이 파일은 토큰을 가져오거나 갱신하는 함수를 정의
  주로 API 인증을 위한 액세스 토큰 관리에 사용된다. */

/* 
[코드 동작 흐름]
 1. 로컬 스토리지에서 accessToken 확인
    ㄴ 존재하면 해당 토큰 반환하고 끝
    ㄴ 존재하지 않으면 새로운 API요청으로 새 토큰을 요청
 2. 새 토큰 요청(토큰이 없는 경우)
    ㄴ /auth API 엔드포인트에 POST 요청을 보내고, 응답으로 받은 accessToken을 로컬 스토리지에 저장  
 3. 인증 실패 시 
    ㄴ 서버가 401 or 403 에러 반환 => 사용자에게 경고창 띄움
*/

import axios from "axios"; // axios 라이브러리 import => API 요청을 보낼 때 사용된다.

const callToken = () => {
  const accessToken = localStorage.getItem("accessToken");
  // 로컬스토리지에서 accessToken 토큰을 가져온다.
  // localStorage는 브라우저에 데이터를 저장하는 방식 중 하나이다.

  // 토큰 잘 가져왔는지 확인. console.log("accessToken:" + accessToken);

  // 토큰이 없는 경우
  if (!accessToken) {
    // /auth 엔드포인트로 POST 요청을 보냄
    axios
      .post("/auth", {
        // 요청 본문에는 클라이언트 ID와 클라이언트 시크릿이 포함 (OAuth 인증 방식에서 주로 사용됨)
        client_id: "client_id",
        client_secret: "client_secret",
      })
      // 서버에서 토큰을 응답하면 (API 호출 성공 시 )
      .then((response) => {
        console.log(response);
        localStorage.setItem("accessToken", response.data.accessToken); // 로컬 스토리지에 추가(저장)

        // 인증 실패 시
        if (response.status === 401 || response.status === 403) {
          // 알림 표시
          alert("인증 정보가 올바르지 않습니다.");
        }
      });

    // 토큰이 있는 경우
  } else {
    return accessToken; // accessToken 토큰 반환  => 기존 토큰 사용. 새로운 API 요청X
  }
};

export default callToken;
