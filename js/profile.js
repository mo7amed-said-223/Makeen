//filter
let viewBtn = document.querySelectorAll(".settings-menu .nav-item");
let widgets = document.querySelectorAll(".widget-view");
viewBtn.forEach(function (tab) {
    tab.addEventListener(`click`, function (ele) {
        viewBtn.forEach(function (t) {
            t.classList.remove(`active`);
            console.log(t);
        });
        ele.target.parentElement.classList.add(`active`);
        widgets.forEach(function (widget) {
             if (widget.dataset.widget == ele.target.dataset.view)
                 widget.classList.add(`show`);
             else widget.classList.remove(`show`);
        });
    });
});

function addContent(widgetNum) {
    widgets.forEach(function (widget) {
        if (widget.dataset.widget == widgetNum) widget.classList.add(`show`);
        else widget.classList.remove(`show`);
    });
}
