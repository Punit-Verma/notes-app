var menuToggle = document.getElementById('menu-toggle')
var menuTimeLine = gsap.timeline({ ease: "none", yoyo: true })
var isOpened = false
menuTimeLine.to(".text-appear", { opacity: '0', duration: "0.4", })
menuTimeLine.to("#menu", { height: '0', margin: '0', width: '0', ease: 'none', duration: "0.2", })
menuTimeLine.to(".floating-menu", { top: "87%", duration: "0.2", }, '<')
menuTimeLine.to(".menu-btn-icon", { rotate: "180", duration: "0.2" })
menuTimeLine.reverse(0)
menuTimeLine.pause()
menuToggle.addEventListener('click', function () {
    isOpened ? menuTimeLine.play() : menuTimeLine.reverse()
    isOpened ? isOpened = false : isOpened = true
})