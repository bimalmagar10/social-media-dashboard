(() => {
	const bodyElement = document.querySelector("body");
	const modeText = document.querySelector(".dashboard__toggle-mode");
	const tl = gsap.timeline({defaults:{duration:.2}})
	const toggleMode = (e) => {
		let targetElement = e.target;
  		if(targetElement){
  			tl.from(".dashboard__card",{opacity:0,scale:.95,ease:"power1.in",
  				stagger:.001}).from(".dashboard__box",{opacity:0,scale:.95,ease:"power1.in",stagger:.001});
  			bodyElement.classList.toggle("dark");
  			if(bodyElement.classList.contains("dark")){
  				modeText.textContent = "Light Mode";
  			} else {
  				modeText.textContent = "Dark Mode";
  			}
  		}
	};
	document.querySelector(".dashboard__input").addEventListener("change",toggleMode);
})();