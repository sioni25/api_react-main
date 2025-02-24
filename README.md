# API 연동 실습(리액트)

## B/E는 api_spring

- 리액트를 사용한 답변 게시판 F/E 개발
- B/E는 SpringBoot 연동

[요약]
게시판 기능을 포함한 React 애플리케이션이며,
board 폴더에 게시판 관련 컴포넌트들이 정리되어 있고, API 호출 관련 유틸 함수가 util 폴더에 따로 관리되고 있다.

[폴더 구조 파악]

- component (컴포넌트 폴더)
  ㄴ board (게시판 관련 컴포넌트)
  BoardList.js → 게시판 목록 표시
  BoardTr.js → 게시판의 한 행 (테이블 로우) 구성
  CommentTr.js → 댓글 목록을 위한 컴포넌트
  Edit.js → 게시글 수정 화면
  Regist.js → 게시글 등록 화면
  Reply.js → 댓글 입력 및 표시 기능
  View.js → 게시글 상세 보기

  ㄴ Main.js → 게시판의 메인 컴포넌트

- util (유틸리티 함수 폴더)  
   ㄴ callToken.js → API 요청 시 토큰을 다루는 유틸 함수
