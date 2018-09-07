export default function initMenu() {

    const listItems = document.querySelectorAll('#list-menu li a');
    const listContainers = document.querySelectorAll('.content');

    for (var i = 0; i < listItems.length; i++) {
        var listItem = listItems[i];
        listItem.addEventListener('click', function (event) {
            for (var j = 0; j < listItems.length; j++) {
                var item = listItems[j];
                var container = listContainers[j];
                item.classList.remove('active');
                container.style.display = 'none';
            }
            event.currentTarget.classList.add('active');
            var containerId = event.currentTarget.id;
            document.getElementById('container-' + containerId).style.display = "block";
        });
    }
}