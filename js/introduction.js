const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');

const colorBg = () => {
    document.body.style.backgroundColor = color.value;
}

// color.value = '#85eb8e';

colorBg();//いらないと思うけど
color.addEventListener('input', colorBg);