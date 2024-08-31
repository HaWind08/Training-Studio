
// classes
const trainOne = document.querySelector('#train-one');
const trainTwo = document.querySelector('#train-two');
const trainThree = document.querySelector('#train-three');
const trainFour = document.querySelector('#train-four');

const firstTrain = document.querySelector('#first-train');
const secondTrain = document.querySelector('#second-train');
const thirdTrain = document.querySelector('#third-train');
const fourTrain = document.querySelector('#four-train');


firstTrain.addEventListener('click', function (e) {
    e.preventDefault()
    trainOne.classList.remove('classes-hidden');
    trainTwo.classList.remove('classes-show');
    trainThree.classList.remove('classes-show');
    trainFour.classList.remove('classes-show');
    firstTrain.classList.add('active');
    secondTrain.classList.remove('active');
    thirdTrain.classList.remove('active');
    fourTrain.classList.remove('active');
})

secondTrain.addEventListener('click', function (e) {
    e.preventDefault();
    trainTwo.classList.add('classes-show');
    trainOne.classList.add('classes-hidden');
    trainThree.classList.remove('classes-show');
    trainFour.classList.remove('classes-show');
    secondTrain.classList.add('active');
    firstTrain.classList.remove('active');
    thirdTrain.classList.remove('active');
    fourTrain.classList.remove('active');
})

thirdTrain.addEventListener('click', function (e) {
    e.preventDefault();
    trainOne.classList.add('classes-hidden');
    trainTwo.classList.remove('classes-show');
    trainThree.classList.add('classes-show');
    trainFour.classList.remove('classes-show');
    firstTrain.classList.remove('active');
    secondTrain.classList.remove('active');
    thirdTrain.classList.add('active');
    fourTrain.classList.remove('active');
})

fourTrain.addEventListener('click', function (e) {
    e.preventDefault();
    trainOne.classList.add('classes-hidden');
    trainTwo.classList.remove('classes-show');
    trainThree.classList.remove('classes-show');
    trainFour.classList.add('classes-show');
    firstTrain.classList.remove('active');
    secondTrain.classList.remove('active');
    thirdTrain.classList.remove('active');
    fourTrain.classList.add('active');
})

// End classes


// Table
const filMon = document.querySelector('#fil-mon');
const filTue = document.querySelector('#fil-tue');
const filWed = document.querySelector('#fil-wed');
const filThu = document.querySelector('#fil-thu');
const filFri = document.querySelector('#fil-fri');

const monDay = document.querySelectorAll('.monday');
const tueDay = document.querySelectorAll('.tuesday');
const wedDay = document.querySelectorAll('.wednesday');
const thuDay = document.querySelectorAll('.thursday');
const friDay = document.querySelectorAll('.friday');

filMon.addEventListener('click', function () {
    filMon.classList.add('active');
    filTue.classList.remove('active');
    filWed.classList.remove('active');
    filThu.classList.remove('active');
    filFri.classList.remove('active');

    [...monDay].forEach((item) => {
        item.classList.remove('table-hidden');
    });

    [...tueDay].forEach((item) => {
        item.classList.add('table-hidden')
    });

    [...wedDay].forEach((item) => {
        item.classList.add('table-hidden')
    });

    [...thuDay].forEach((item) => {
        item.classList.add('table-hidden');
    });

    [...friDay].forEach((item) => {
        item.classList.add('table-hidden');
    });
})

filTue.addEventListener('click', function () {
    filTue.classList.add('active');
    filMon.classList.remove('active');
    filWed.classList.remove('active');
    filThu.classList.remove('active');
    filFri.classList.remove('active');

    [...tueDay].forEach((item) => {
        item.classList.remove('table-hidden')
    });

    [...monDay].forEach((item) => {
        item.classList.add('table-hidden');
    });

    [...wedDay].forEach((item) => {
        item.classList.add('table-hidden');
    });

    [...thuDay].forEach((item) => {
        item.classList.add('table-hidden');
    });

    [...friDay].forEach((item) => {
        item.classList.add('table-hidden');
    });
})

filWed.addEventListener('click', function () {
    filWed.classList.add('active');
    filTue.classList.remove('active');
    filMon.classList.remove('active');
    filThu.classList.remove('active');
    filFri.classList.remove('active');

    [...wedDay].forEach((item) => {
        item.classList.remove('table-hidden');
    });

    [...monDay].forEach((item) => {
        item.classList.add('table-hidden')
    });

    [...tueDay].forEach((item) => {
        item.classList.add('table-hidden')
    });

    [...thuDay].forEach((item) => {
        item.classList.add('table-hidden');
    });

    [...friDay].forEach((item) => {
        item.classList.add('table-hidden');
    });
})

filThu.addEventListener('click', function () {
    filThu.classList.add('active');
    filTue.classList.remove('active');
    filWed.classList.remove('active');
    filMon.classList.remove('active');
    filFri.classList.remove('active');

    [...thuDay].forEach((item) => {
        item.classList.remove('table-hidden');
    });

    [...monDay].forEach((item) => {
        item.classList.add('table-hidden')
    });

    [...tueDay].forEach((item) => {
        item.classList.add('table-hidden')
    });

    [...wedDay].forEach((item) => {
        item.classList.add('table-hidden')
    });

    [...friDay].forEach((item) => {
        item.classList.add('table-hidden');
    });
})

filFri.addEventListener('click', function () {
    filFri.classList.add('active');
    filTue.classList.remove('active');
    filWed.classList.remove('active');
    filThu.classList.remove('active');
    filMon.classList.remove('active');

    [...friDay].forEach((item) => {
        item.classList.remove('table-hidden');
    });

    [...monDay].forEach((item) => {
        item.classList.add('table-hidden')
    });

    [...tueDay].forEach((item) => {
        item.classList.add('table-hidden')
    });

    [...wedDay].forEach((item) => {
        item.classList.add('table-hidden')
    });

    [...thuDay].forEach((item) => {
        item.classList.add('table-hidden');
    });
})



// End table