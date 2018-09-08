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
}