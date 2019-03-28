'use strict';

import Component from './LibJS/Component.js';


let com = new Component();

let dlina = 5;




window.onload = function() {
  document.getElementById("hideAll").style.display = "none";

  (function() {
    let div = com.div('wrapper');
    let head = addHeader();
    let main = addMain();
    let footer = addFooter();

    div.appendChild(head);
    div.appendChild(main);
    div.appendChild(footer);
    document.body.appendChild(div);

    addListner();
  }());
}

const addHeader = () => {
  let div = com.div();
  let head = com.header();
  let h2 = com.h2('В данном задании в качестве сетки использовался css-grid с выравниваем по центру');
  let span = com.span('в index.js можно изменить кол-во input, так же файлы можно перетащить в input,\
    так же использовалась личная мини-библиотека');

  head.appendChild(h2);
  head.appendChild(span);
  return div.appendChild(head);
}

const addMain = () => {
  let div = com.div();
  let main = com.main();
  let divMain = com.div('main');
  let div2 = com.div('divForSpan');
  let span = com.span('Для подтвержения нужно загрузить фотографии/сканы ваши документов');
  div2.appendChild(span);
  let cards = card(dlina);
  divMain.appendChild(div2);
  divMain.appendChild(cards);

  main.appendChild(divMain);
  return div.appendChild(main);
}

const addFooter = () => {
  let div = com.div();
  let footer = com.footer();
  let span2 = com.span('This is Future Footer');
  footer.appendChild(span2);
  return div.appendChild(footer);
}


const card = (len) => {
  let div = com.div();
  let form = com.div("form");
  let i;
  for (i = 1; i <= len; i++) {
    let elem = com.div('elem');
    let img = com.img('Components/upload.svg');
    img.id = 'img' + i;
    let input = com.input('load ' + [i], null, 'id ' + i, null, 'file');
    let label = com.label('Загрузить', input);
    label.id = 'label' + i;
    let p = com.p('Размер не более 5 кБ');
    p.id = 'p' + i;
    let span = com.span('');
    span.className = 'spanelem';
    span.id = 'span' + i;

    elem.appendChild(img);
    elem.appendChild(label);
    elem.appendChild(p);
    elem.appendChild(span);
    elem.appendChild(input);

    let elems = elem.cloneNode(true);

    form.appendChild(elems);

  }


  return div.appendChild(form);
}

const addListner = () => {

  let input = document.querySelectorAll('input[type="file"]');
  let p = document.querySelectorAll('p');
  let img = document.querySelectorAll('img');
  let span = document.querySelectorAll('span[class="spanelem"]');
  let label = document.querySelectorAll('label');



  for (let i = 0; i < dlina; i++) {
    if (dlina == 1) {
      console.log(dlina);
      input[i].addEventListener("change", (e) => {

        checkFile(input[i].files, p[i].id, img[i].id, span[i].id, label[i].id);

      }, true);

      document.addEventListener("dragover", (e) => {
        e.preventDefault();
        e.stopPropagation();
      }, true);
      document.addEventListener("drop", (e) => {
        e.preventDefault();
        e.stopPropagation();
        checkFile(e.dataTransfer.files, p[i].id, img[i].id, span[i].id, label[i].id);

      }, true);
    }

    input[i].addEventListener("change", (e) => {

      checkFile(input[i].files, p[i].id, img[i].id, span[i].id, label[i].id);

    }, true);

  }

}


const checkFile = (input, p, img, span, label) => {

  let target = ['.jpg', '.png', '.jpeg', '.webp', '.gif', '.tiff', '.pjpeg', '.pdf'];
  let targetLen = target.length;
  let pos = 0;
  let elemP = document.getElementById(p);
  let elemSpan = document.getElementById(span);
  let elemImg = document.getElementById(img);
  let elemLabel = document.getElementById(label);


  for (let j = 0; j < targetLen; j++) {


    while (true) {
      let foundPos = input[0].name.toLowerCase().indexOf(target[j], pos);

      if (foundPos < 0) {
        break;
      } else if (input[0].size >= 500000) {

        elemP.innerHTML = input[0].name.toLowerCase() + " размер больше 5 кБ";
        elemSpan.innerHTML = "Отклонено";
        elemLabel.innerHTML = "Загрузка отменена";
        elemSpan.style = "color: red";




        break;
      } else {
        let rand = Math.random(1, 100) * 100;

        elemSpan.innerHTML = "Идет проверка";
        elemLabel.innerHTML = "Файл загружается";
        elemSpan.style = "color: rgba(0, 0, 0, 0.5)"
        elemP.innerHTML = input[0].name.toLowerCase() + " (" + ((input[0].size) / 1000).toFixed(0) + ' Кб' + ")";
        elemImg.src = ('Components/wait.svg');

        if (rand < 50) {
          setTimeout(() => {
            elemSpan.innerHTML = "Проверено";
            elemLabel.innerHTML = "Файл загружен";
            elemSpan.style = "color: green"
            elemP.innerHTML = input[0].name.toLowerCase() + " (" + ((input[0].size) / 1000).toFixed(0) + ' Кб' + ")";
            elemImg.src = ('Components/ok.svg');
          }, 100 * rand);
        } else if (rand > 50) {
          setTimeout(() => {
            elemP.innerHTML = input[0].name.toLowerCase() + " ошибка заргузки";
            elemSpan.innerHTML = "Отклонено";
            elemLabel.innerHTML = "Загрузка отменена";
            elemSpan.style = "color: red";
            elemImg.src = ('Components/upload.svg');
          }, 100 * rand);
        }

        pos = foundPos + 1;
      }
    }
  }

}
const timerFunc = () => {
  setTimeout(() => {
    Math.random(1, 100) * 100;
  }, 2000);

}
