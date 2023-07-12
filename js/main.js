const nav = document.querySelector('#nav'),
      navBtn = document.querySelector('#nav-btn'),
      navBtnImg = document.querySelector('#nav-btn-img');

      navBtn.addEventListener('click', () => {
        if(nav.classList.toggle('open')) {
            navBtnImg.src = './img/icons/nav-close.svg';
        } else {
            navBtnImg.src = './img/icons/nav-open.svg';
        }
      });

      AOS.init({
        // once: true
        disable: 'phone'
      });