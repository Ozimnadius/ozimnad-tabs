class Tabs {
    constructor() {
        this.tabs = document.querySelector(".jsTabs");
        if (this.tabs) {
            this.btnsList = this.tabs.querySelectorAll(".jsTabs__btn");
            this.tabsList = this.tabs.querySelectorAll(".jsTabs__tab");
            this.activeIndex = 0;
            this.init();
        } else {
            console.log("Табы не найдены!");
        }
    }

    init() {
        this.activate();
        this.btnsList.forEach((i) => i.addEventListener("click", this.click));
    }

    click = (e) => {
        this.deactivate();
        this.activeIndex = Array.from(this.btnsList).indexOf(e.currentTarget);
        this.activate();
    };

    deactivate() {
        this.btnsList[this.activeIndex].classList.remove("active");
        this.tabsList[this.activeIndex].classList.remove("active");
    }

    activate() {
        this.btnsList[this.activeIndex].classList.add("active");
        this.tabsList[this.activeIndex].classList.add("active");
    }
}