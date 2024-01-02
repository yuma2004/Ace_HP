function switchSectionHeader() {
    var section1 = document.getElementById('section1');
    var section2 = document.getElementById('section2');
    var section3 = document.getElementById('section3');
    
    if (section1.style.display === 'none') {
        section1.style.display = 'block';
        section2.style.display = 'none';
    } else {
        section1.style.display = 'none';
        section2.style.display = 'block';
    }
}

function switchSectionStoreInformation() {
    var section1 = document.getElementById('section1');
    var section2 = document.getElementById('section2');
    
    if (section1.style.display === 'none') {
        section1.style.display = 'block';
        section2.style.display = 'none';
    } else {
        section1.style.display = 'none';
        section2.style.display = 'block';
    }

    // ID 'StoreInformation' を持つ要素を取得
    var element = document.getElementById("StoreInformation");

    // その要素へスクロール
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function switchSectionDetailedInformation() {
    var section1 = document.getElementById('section1');
    var section2 = document.getElementById('section2');
    
    if (section1.style.display === 'none') {
        section1.style.display = 'block';
        section2.style.display = 'none';
    } else {
        section1.style.display = 'none';
        section2.style.display = 'block';
    }

    // ID 'StoreInformation' を持つ要素を取得
    var element = document.getElementById("DetailedInformation");

    // その要素へスクロール
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function switchSectionCouse() {
    var section1 = document.getElementById('section1');
    var section3 = document.getElementById('section3');

    if (section3.style.display === 'none') {
        section3.style.display = 'block';
    } else {
        section3.style.display = 'none';
    }
}