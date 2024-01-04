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

document.getElementById("image").addEventListener("mouseover", function () {
    document.getElementById("text").style.transform = "scale(1.5)";
});

document.getElementById("image").addEventListener("mouseout", function () {
    document.getElementById("text").style.transform = "scale(1)";
});