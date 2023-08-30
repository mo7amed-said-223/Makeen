//filter
let Tabs = document.querySelectorAll(".featured-courses-tab .tablist .nav-tab");
let cards = document.querySelectorAll(
    ".featured-courses-tab .tab-content .course-card"
);
Tabs.forEach(function (tab) {
    tab.addEventListener(`click`, function (ele) {
        Tabs.forEach(function (t) {
            t.classList.remove(`active`);
        });
        ele.target.classList.add(`active`);
        cards.forEach(function (card) {
            console.log(card.dataset.course);
            console.log(ele.target.dataset.category);
            if (ele.target.dataset.category == "all")
                card.classList.remove(`unshow`);
            else if (card.dataset.course == ele.target.dataset.category)
                card.classList.remove(`unshow`);
            else card.classList.add(`unshow`);
        });
    });
});

