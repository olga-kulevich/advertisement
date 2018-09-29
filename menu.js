export default function initMenu() {

    const listItems = document.querySelectorAll('#list-menu li a');
    const listContainers = document.querySelectorAll('.content');
    const listHeaders = document.querySelectorAll('.text-in-head');

    for (var i = 0; i < listItems.length; i++) {
        var listItem = listItems[i];
        listItem.addEventListener('click', function (event) {
            for (var j = 0; j < listItems.length; j++) {
                var item = listItems[j];
                var container = listContainers[j];
                var head = listHeaders[j];
                item.classList.remove('active');
                container.style.display = 'none';
                head.style.display = 'none';
            }
            event.currentTarget.classList.add('active');
            var containerId = event.currentTarget.id;
            var headId = event.currentTarget.id;
            document.getElementById('container-' + containerId).style.display = "block";
            document.getElementById('header-' + headId).style.display = "block";
        });
    }
    
    function eventFire(el, etype) {
        if (el.fireEvent) {
            el.fireEvent('on' + etype);
        } else {
        var evObj = document.createEvent('Events');
        evObj.initEvent(etype, true, false);
        el.dispatchEvent(evObj);
        }
}
    
    const listLinksMain = document.querySelectorAll('.link-main');
    for (var i = 0; i < listLinksMain.length; i++) {
        var listLinkMain = listLinksMain[i];
        listLinkMain.addEventListener('click', function () {
           eventFire(document.getElementById('main'), 'click');
        });
    }
    
    const listLinksConstructor = document.querySelectorAll('.link-constructor');
     for (var i = 0; i < listLinksConstructor.length; i++) {
        var listLinkConstructor = listLinksConstructor[i];
        listLinkConstructor.addEventListener('click', function () {
           eventFire(document.getElementById('adv'), 'click');
        });
    }
    
    const listLinksFeedback = document.querySelectorAll('.link-contact-us');
     for (var i = 0; i < listLinksFeedback.length; i++) {
        var listLinkFeedback = listLinksFeedback[i];
        listLinkFeedback.addEventListener('click', function () {
           eventFire(document.getElementById('feedback'), 'click');
        });
    }
    
    const listLinksTeam = document.querySelectorAll('.link-team');
     for (var i = 0; i < listLinksTeam.length; i++) {
        var listLinkTeam = listLinksTeam[i];
        listLinkTeam.addEventListener('click', function () {
           eventFire(document.getElementById('team'), 'click');
        });
    }
}