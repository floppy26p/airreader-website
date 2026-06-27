/* 連絡先メールアドレスを静的HTMLに書かない（収集ボット対策）。
   クリックされた時にだけ mailto: リンクを組み立てて開く。 */
(function () {
    var USER = 'floppy26p';
    var DOMAIN = 'gmail.com';
    var SUBJECT = '%5BAirReader%5D%20';

    function mailHref() {
        return 'mailto:' + USER + '@' + DOMAIN + '?subject=' + SUBJECT;
    }

    document.querySelectorAll('[data-email-link]').forEach(function (el) {
        el.addEventListener('click', function () {
            window.location.href = mailHref();
        });
    });
})();
