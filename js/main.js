var ele = document.getElementById('tweet');
var sel = window.getSelection();
var share = document.getElementById('share');

function setTweetText(share, selection) {
    let text = selection.toString();
    let href = "https://twitter.com/intent/tweet?text=";

    if(text.length > 140) {
        text = text.slice(0, 137) + "...";
    }

    href = href  + encodeURIComponent(text);

    share.setAttribute("href", href);
}

window.addEventListener('mouseup', function () {
    if (!sel.isCollapsed) {
        var r = sel.getRangeAt(0).getBoundingClientRect();
        ele.style.top = r.top - ele.offsetHeight + window.scrollY + 'px'; 
        ele.style.left = (r.left + r.right) / 2 + 'px'; 
        ele.style.display = 'block';

        setTweetText(share, sel);
    } else {
        ele.style.display = 'none';
    }
});
