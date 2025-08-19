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

// ✅ 1. 우클릭 방지
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });

  // ✅ 2. 단축키 방지
  document.addEventListener('keydown', function (e) {
    const key = e.key.toLowerCase();

    // F12
    if (e.key === 'F12') {
      e.preventDefault();
    }

    // Ctrl + Shift + I (검사), Ctrl + Shift + J (콘솔), Ctrl + Shift + C (요소선택)
    if (e.ctrlKey && e.shiftKey && ['i', 'j', 'c'].includes(key)) {
      e.preventDefault();
    }

    // Ctrl + U (소스보기), Ctrl + S (저장), Ctrl + C (복사)
    if (e.ctrlKey && ['u', 's', 'c'].includes(key)) {
      e.preventDefault();
    }
  });

  // ✅ 3. 개발자 도구 감지 시 경고
  setInterval(function () {
    const start = new Date();
    debugger;
    const end = new Date();
    if (end - start > 100) {
      alert("개발자 도구를 사용하지 말아주세요.");
    }
  }, 1000);