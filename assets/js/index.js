const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

function copyCont() {
    const copyBtns = document.querySelectorAll('.btn-copy')
    copyBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const copyCont = this.closest('.a-item').querySelector('.copy-cont');
            const copyText = copyCont?.textContent.trim();

            if (!copyText) {
                alert('복사할 내용이 없습니다.');
                return;
            }

            navigator.clipboard.writeText(copyText)
                .then(() => {
                    alert('복사되었습니다: ' + copyText);
                })
                .catch(err => {
                    alert('복사 실패: ' + err);
                });
        });
    });
}
function slideToggle() {
    const triggers = document.querySelectorAll('.t-trigger');
    triggers.forEach(function (trigger) {
        trigger.addEventListener('click', function () {
            const item = this.closest('.t-item');
            const cont = item.querySelector('.t-cont');
            
            if (cont.classList.contains('expand')) {
                cont.classList.remove('expand');
            } else {
                cont.classList.add('expand');
            }

            this.classList.toggle('active');
        });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    slideToggle();
    copyCont();
});