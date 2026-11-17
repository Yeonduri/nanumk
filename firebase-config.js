// ─────────────────────────────────────────────────────────────
// 나눔장터 설정 파일
// Firebase 콘솔 → 프로젝트 설정(톱니바퀴) → 내 앱 → 'SDK 설정 및 구성'에서
// 'Config(구성)'를 고르면 나오는 const firebaseConfig = { ... }; 를
// 아래 ▼▼ 와 ▲▲ 사이에 통째로 바꿔 붙여넣으세요.
// ─────────────────────────────────────────────────────────────

// ▼▼ 여기부터 바꾸기 ▼▼
const firebaseConfig = {
  apiKey: "AIzaSyAq4r63FWJpXiQpqQOD6KjvtTdNYu1VmnQ",
  authDomain: "nanum-market.firebaseapp.com",
  projectId: "nanum-market",
  storageBucket: "nanum-market.firebasestorage.app",
  messagingSenderId: "861530411752",
  appId: "1:861530411752:web:713ebc32989ed75560ef5d"
};
// ▲▲ 여기까지 바꾸기 ▲▲

// 장터 이름과 한 줄 소개 (화면 맨 위에 보여요)
const MARKET_NAME = "나눔장터";
const MARKET_SUB = "회사에서 주고받는 나눔·중고 장터";

export { firebaseConfig, MARKET_NAME, MARKET_SUB };
