document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('open-btn');
  const introOverlay = document.getElementById('intro-overlay');
  const bismillahScreen = document.getElementById('bismillah-screen');
  const mainContent = document.getElementById('main-content');
  const bgMusic = document.getElementById('bg-music');
  const bismillahText = document.querySelector('.bismillah-text');

  openBtn.addEventListener('click', () => {
    // Attempt to play music
    bgMusic.play().catch(e => console.log("Audio play failed:", e));

    // Master Timeline
    const tl = gsap.timeline();

    // 1. Fade out the envelope/intro overlay
    tl.to(introOverlay, {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        introOverlay.style.display = 'none';
        bismillahScreen.style.display = 'flex';
      }
    })
    
    // 2. Fade in Bismillah text
    .to(bismillahText, {
      opacity: 1,
      y: -20,
      duration: 1.5,
      ease: "power2.out"
    })
    
    // 3. Hold for a moment, then fade out Bismillah screen
    .to(bismillahText, {
      opacity: 0,
      y: -40,
      duration: 1.5,
      delay: 1.5,
      ease: "power2.in",
      onComplete: () => {
        bismillahScreen.style.display = 'none';
        mainContent.style.display = 'flex';
      }
    })
    
    // 4. Staggered fade in of main content elements
    .to(".stagger-item", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    });
  });
});
