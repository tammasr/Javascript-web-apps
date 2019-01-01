var clickedTarget = '';
var tabs = document.querySelector('.tabs');
    tabs.addEventListener('click', function (event) {
        clickedTarget = event.target.dataset.target;
        var panels = document.querySelectorAll('.panel');
        panels.forEach(function (panel) {
            if('#' + panel.id === clickedTarget) {
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        })
    });


