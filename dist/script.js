const defaultOptions={selector:'[data-tabs="tabs"]',btn:'[data-tabs="btn"]',tab:'[data-tabs="tab"]',activeIndex:0};class OzimnadTabs{constructor(t=defaultOptions){this.options=t,this.tabs=document.querySelector(this.options.selector),this.tabs?(this.btnsList=this.tabs.querySelectorAll(this.options.btn),this.tabsList=this.tabs.querySelectorAll(this.options.tab),this.btnsList.length===this.tabsList.length?(this.activeIndex=this.options.activeIndex,this.init()):console.log("Количество кнопок и табов должно быть равным")):console.log(`Селектор ${this.options.selector} не найден!`)}init(){this.activate(),this.btnsList.forEach((t=>t.addEventListener("click",this.click)))}click=t=>{this.deactivate(),this.activeIndex=Array.from(this.btnsList).indexOf(t.currentTarget),this.activate()};deactivate(){this.btnsList[this.activeIndex].classList.remove("active"),this.tabsList[this.activeIndex].classList.remove("active")}activate(){this.btnsList[this.activeIndex].classList.add("active"),this.tabsList[this.activeIndex].classList.add("active")}}