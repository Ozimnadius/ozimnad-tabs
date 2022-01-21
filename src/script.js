class OzimnadTabs {
    constructor(options) {

        const defaultOptions = {
            selector: '[data-tabs="tabs"]',
            btn: '[data-tabs="btn"]',
            tab: '[data-tabs="tab"]',
            activeIndex: 0
        };

        this.options = Object.assign(defaultOptions,options);
        this.tabs = document.querySelector(this.options.selector);

        console.log(this.options);

        if (!this.tabs) {
            console.log(`Селектор ${this.options.selector} не найден!`);
            return;
        }

        this.btnsList = this.tabs.querySelectorAll(this.options.btn);
        this.tabsList = this.tabs.querySelectorAll(this.options.tab);

        if (this.btnsList.length !== this.tabsList.length){
            console.log("Количество кнопок и табов должно быть равным");
            return;
        }


        this.activeIndex = this.options.activeIndex;
        this.#init();

    }

    #init() {
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