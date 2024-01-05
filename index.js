function switchSectionHeader() {
    var section2 = document.getElementById('section2');
    var text1 = document.getElementById('menu-button');
    var text2 = document.getElementById('close-button');

    // Toggle the 'hidden' class to switch the visibility
    text1.classList.toggle('hidden');
    text2.classList.toggle('hidden');

    if (section2.style.display === 'none' || section2.style.display === '') {
        section2.style.display = 'block';
        section2.classList.add('showWithAnimation');
        section2.classList.remove('hideWithAnimation');
    } else {
        section2.classList.remove('showWithAnimation');
        section2.classList.add('hideWithAnimation');
        setTimeout(function () {
            section2.style.display = 'none';
        }, 200); // 0.2秒後にdisplayをnoneに設定
    }
}

function switchSectionMenu() {
    var section2 = document.getElementById('section2');
    var text1 = document.getElementById('menu-button');
    var text2 = document.getElementById('close-button');

    // ハンバーガー変化
    $(".openbtn1").toggleClass('active');

    // Toggle the 'hidden' class to switch the visibility
    text1.classList.toggle('hidden');
    text2.classList.toggle('hidden');

    section2.classList.add('hideWithAnimation');
    setTimeout(function () {
        section2.style.display = 'none';
    }, 200); // 0.2秒後にdisplayをnoneに設定

    // ID 'StoreInformation' を持つ要素を取得
    var element = document.getElementById("メニュー");

    // その要素へスクロール
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

function switchSectionStoreInformation() {
    var section2 = document.getElementById('section2');

    var text1 = document.getElementById('menu-button');
    var text2 = document.getElementById('close-button');

    // ハンバーガー変化
    $(".openbtn1").toggleClass('active');

    // Toggle the 'hidden' class to switch the visibility
    text1.classList.toggle('hidden');
    text2.classList.toggle('hidden');

    section2.classList.add('hideWithAnimation');
    setTimeout(function () {
        section2.style.display = 'none';
    }, 200); // 0.2秒後にdisplayをnoneに設定

    // ID 'StoreInformation' を持つ要素を取得
    var element = document.getElementById("StoreInformation");

    // その要素へスクロール
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

function switchSectionDetailedInformation() {
    var section2 = document.getElementById('section2');
    var text1 = document.getElementById('menu-button');
    var text2 = document.getElementById('close-button');

    // ハンバーガー変化
    $(".openbtn1").toggleClass('active');

    // Toggle the 'hidden' class to switch the visibility
    text1.classList.toggle('hidden');
    text2.classList.toggle('hidden');


    section2.classList.add('hideWithAnimation');
    setTimeout(function () {
        section2.style.display = 'none';
    }, 200); // 0.2秒後にdisplayをnoneに設定

    // ID 'StoreInformation' を持つ要素を取得
    var element = document.getElementById("DetailedInformation");

    // その要素へスクロール
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// コースbutton
function switchSectionCouse() {
    var section3 = document.getElementById('section3');
    var section4 = document.getElementById('section4');

    if (section4.style.display === 'block') {
        section4.style.display = 'none';
    }

    if (section3.style.display === 'none') {
        section3.style.display = 'block';
        section3.classList.add('showWithAnimation');
    } else {
        section3.style.display = 'none';
        section3.classList.remove('showWithAnimation');
    }
}

function switchSectionSingle() {
    var section3 = document.getElementById('section3');
    var section4 = document.getElementById('section4');

    if (section3.style.display === 'block') {
        section3.style.display = 'none';
    }

    if (section4.style.display === 'none') {
        section4.style.display = 'block';
        section4.classList.add('showWithAnimation');
    } else {
        section4.style.display = 'none';
        section4.classList.remove('showWithAnimation');
    }
}



document.addEventListener('DOMContentLoaded', function () {
    // ロゴ要素を正しく取得していることを確認
    var logo = document.getElementById('logo');
    if (!logo) {
        console.error('ロゴ要素が見つかりません。IDを確認してください。');
        return; // ロゴ要素がない場合、ここで処理を終了
    }

    // トランジションが終了したことを検知
    logo.addEventListener('transitionend', function (event) {
        // トランジションが完了したプロパティがfilterであることを確認
        if (event.propertyName === 'filter') {
            // トランジションが完了したらスプラッシュ画面を非表示にする
            var splashScreen = document.getElementById('splash-screen');
            if (splashScreen) {
                splashScreen.style.display = 'none';
            } else {
                console.error('スプラッシュ画面の要素が見つかりません。IDを確認してください。');
            }
        }
    });

    // 一定時間後に彩度を上げる
    setTimeout(function () {
        logo.style.filter = 'saturate(1)';
    }, 1000);
});

$(".openbtn1").click(function () {
    $(this).toggleClass('active');
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    // effect: "coverflow",

    // Speed of the transition animation (in milliseconds)
    speed: 1000,

    // Autoplay
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
    },
});