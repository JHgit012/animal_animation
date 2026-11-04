/**
 * ANIMAL MOTION STUDY - Interactive Script
 * 목도리도마뱀 반응 동작 제어
 */
document.addEventListener("DOMContentLoaded", () => {
  // 1. 필요한 DOM 요소 참조 가져오기
  const triangleTarget = document.getElementById("triangleTarget");
  const motionWrapper = document.getElementById("motionWrapper");
  const circleLeft = document.getElementById("circleLeft");
  const circleRight = document.getElementById("circleRight");

  // 인터랙션 중복 실행 방지 변수
  let isInteracting = false;

  // 2. 역삼각형 클릭 이벤트 핸들러
  triangleTarget.addEventListener("click", () => {
    if (isInteracting) return;
    isInteracting = true;

    // [Step A] 기본 좌우 운동 즉각 멈춤 (animation-play-state: paused)
    motionWrapper.classList.add("paused");

    // [Step B] 이전 애니메이션 클래스 제거 및 reflow를 통한 애니메이션 리셋
    circleLeft.classList.remove("active-shake");
    circleRight.classList.remove("active-shake");
    void circleLeft.offsetWidth;
    void circleRight.offsetWidth;

    // [Step C] 숨겨진 큰 원 2개 등장 및 10:10 ~ 4:40 방향 5회 진동 애니메이션 시작
    circleLeft.classList.add("active-shake");
    circleRight.classList.add("active-shake");

    // [Step D] 애니메이션 끝난 후 (1.2초) 원 다시 숨김 및 원래 이동 재개
    setTimeout(() => {
      circleLeft.classList.remove("active-shake");
      circleRight.classList.remove("active-shake");
      motionWrapper.classList.remove("paused");
      isInteracting = false;
    }, 1200);
  });
});
