export default function initMenu() {

    const listItems = document.querySelectorAll('#list-menu li a');
    const listContainers = document.querySelectorAll('.content');
    const listHeaders = document.querySelectorAll('.text-in-head');

    window.onhashchange = function() {
        window.scrollTo({top: 0});
        changePage();
    };

    document.addEventListener('DOMContentLoaded', function() {
        changePage();
    });

    const changePage = function() {
        for (var j = 0; j < listItems.length; j++) {
            var item = listItems[j];
            var container = listContainers[j];
            var head = listHeaders[j];
            item.classList.remove('active');
            container.style.display = 'none';
            head.style.display = 'none';
        }
        const id = window.location.hash.substr(1);
        document.getElementById("link-" + id).classList.add('active');
        document.getElementById('container-' + id).style.display = "block";
        document.getElementById('header-' + id).style.display = "block";
    };
}
