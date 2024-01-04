// 関数switchSectionHeaderの置き換え

// function switchSectionHeader() {
//     var section1 = document.getElementById('section1');
//     var section2 = document.getElementById('section2');
    
//     if (section1.style.display === 'none') {
//         section1.style.display = 'block';
//         section2.style.display = 'none';
//     } else {
//         section1.style.display = 'none';
//         section2.style.display = 'block';
//     }
// }

function switchSectionHeader() {
    var section2 = document.getElementById('section2');

    if (section2.style.display === 'none') {
        section2.style.display = 'block';
        section2.classList.add('showWithAnimation');
    } else {
        section2.style.display = 'none';
        section2.classList.remove('showWithAnimation');
    }
}

// function switchSectionMenu() {
//     var section1 = document.getElementById('section1');
//     var section2 = document.getElementById('section2');
    
//     if (section1.style.display === 'none') {
//         section1.style.display = 'block';
//         section2.style.display = 'none';
//     } else {
//         section1.style.display = 'none';
//         section2.style.display = 'block';
//     }

//     // ID 'StoreInformation' を持つ要素を取得
//     var element = document.getElementById("メニュー");

//     // その要素へスクロール
//     element.scrollIntoView({ behavior: 'smooth', block: 'start' });

//     // スクロール完了後に少し上にオフセット
//     window.setTimeout(function() {
//         window.scrollBy(0, 0);
//     }, 600); // 500ミリ秒後にスクロールを調整
// }

function switchSectionMenu() {
    var section2 = document.getElementById('section2');    
    section2.style.display = 'none';

    // ID 'StoreInformation' を持つ要素を取得
    var element = document.getElementById("メニュー");

    // その要素へスクロール
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // スクロール完了後に少し上にオフセット
    window.setTimeout(function() {
        window.scrollBy(0, 0);
    }, 600); // 500ミリ秒後にスクロールを調整
}


// function switchSectionStoreInformation() {
//     var section1 = document.getElementById('section1');
//     var section2 = document.getElementById('section2');
    
//     if (section1.style.display === 'none') {
//         section1.style.display = 'block';
//         section2.style.display = 'none';
//     } else {
//         section1.style.display = 'none';
//         section2.style.display = 'block';
//     }

//     // ID 'StoreInformation' を持つ要素を取得
//     var element = document.getElementById("StoreInformation");

//     // その要素へスクロール
//     element.scrollIntoView({ behavior: 'smooth', block: 'start' });

//     // スクロール完了後に少し上にオフセット
//     window.setTimeout(function() {
//         window.scrollBy(0, 0);
//     }, 600); // 500ミリ秒後にスクロールを調整
// }

function switchSectionStoreInformation() {
    var section2 = document.getElementById('section2');
    section2.style.display = 'none';
    
    // ID 'StoreInformation' を持つ要素を取得
    var element = document.getElementById("StoreInformation");

    // その要素へスクロール
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // スクロール完了後に少し上にオフセット
    window.setTimeout(function() {
        window.scrollBy(0, 0);
    }, 600); // 500ミリ秒後にスクロールを調整
}

// function switchSectionDetailedInformation() {
//     var section1 = document.getElementById('section1');
//     var section2 = document.getElementById('section2');
    
//     if (section1.style.display === 'none') {
//         section1.style.display = 'block';
//         section2.style.display = 'none';
//     } else {
//         section1.style.display = 'none';
//         section2.style.display = 'block';
//     }

//     // ID 'StoreInformation' を持つ要素を取得
//     var element = document.getElementById("DetailedInformation");

//     // その要素へスクロール
//     element.scrollIntoView({ behavior: 'smooth', block: 'start' });

//     // スクロール完了後に少し上にオフセット
//     window.setTimeout(function() {
//         window.scrollBy(0, 0);
//     }, 600); // 500ミリ秒後にスクロールを調整
// }

function switchSectionDetailedInformation() {
    var section2 = document.getElementById('section2');
    section2.style.display = 'none';

    // ID 'StoreInformation' を持つ要素を取得
    var element = document.getElementById("DetailedInformation");

    // その要素へスクロール
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // スクロール完了後に少し上にオフセット
    window.setTimeout(function() {
        window.scrollBy(0, 0);
    }, 600); // 500ミリ秒後にスクロールを調整
}

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

document.getElementById("image").addEventListener("mouseover", function() {
    document.getElementById("text").style.transform = "scale(1.5)";
});

document.getElementById("image").addEventListener("mouseout", function() {
    document.getElementById("text").style.transform = "scale(1)";
});
