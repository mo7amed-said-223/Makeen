//filter
let tabsDetails = document.querySelectorAll(".course-sec .tablist .nav-tab");
let cardDetails = document.querySelectorAll(
    ".course-sec .tab-content .card_details .card"
);
tabsDetails.forEach(function (tab) {
    tab.addEventListener(`click`, function (ele) {
        tabsDetails.forEach(function (t) {
            t.classList.remove(`active`);
        });
        ele.target.classList.add(`active`);
        cardDetails.forEach(function (card) {
            console.log(card.dataset.card);
            console.log(ele.target.dataset.category);
             if (card.dataset.card == ele.target.dataset.category)
                 card.classList.add(`show`);
             else card.classList.remove(`show`);
        });
    });
});
tabsDetails[0].classList.add("active");
