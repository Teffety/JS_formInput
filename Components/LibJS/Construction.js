'use strict';

import Component from './Component.js';

let com = new Component();

export default class Construction {
  //Create Navbar with buttons
  Navbar(arr) {
    let nav = com.div('div');
    let navb = document.createElement('nav');
    for (let i = 0; i < arr.length; i++) {

      if (arr[i] == window.location.href) {

        let sub = com.a('sumbitNav active', (arr[i].paramt /*+ ".php"*/ ), (arr[i].name + " " + i), arr[i].name);
        let subs = sub.cloneNode(true);
        navb.appendChild(subs);

      } else {
        let sub = com.a('sumbitNav ', (arr[i].paramt /*+  ".php"*/ ), (arr[i].name + " " + i), arr[i].name);
        let subs = sub.cloneNode(true);
        navb.appendChild(subs);
      }
    }

    return nav.appendChild(navb);
  }


  Footer(footArr) {

    let footer = com.div('div');
    let foot = document.createElement('footer');
    footer.className = "footer";
    for (let i = 0; i < footArr.length; i++) {
      let a = com.a(null, ("#" + footArr[i].paramt), (footArr[i].name + " " + i), footArr[i].name);
      let as = a.cloneNode(true);
      foot.appendChild(as);
    }

    return footer.appendChild(foot);
  }

  Carusel(image) {
    let n = null;
    let index = 1;
    let path = 'img/';
    let div = com.div('');
    let carusel = com.div('carusel');
    let blocks = com.div('blocks');
    let prev = com.a('prev', n, n, '&#10094;');
    let next = com.a('next', n, n, '&#10095;');
    let i = image.length;
    let img = com.Img(path + image[i - 1]);
    carusel.appendChild(prev);
    blocks.appendChild(img);
    next.addEventListener('click', () => {
      (i < image.length) ? (i = i + 1) : (i = 1);

      img.className = "image fade";
      img.src = path + image[i - 1];
      blocks.appendChild(img);
    });

    prev.addEventListener('click', () => {
      (i < image.length + 1 && i > 1) ? (i = i - 1) : (i = image.length);
      img.className = "image fade";
      img.src = path + image[i - 1];
      blocks.appendChild(img);
    });
    carusel.appendChild(blocks);
    carusel.appendChild(next);
    return div.appendChild(carusel);
  }

  /*  Table() {

  }*/

  Card(arr) {
    let div = com.div('');
    let card = com.div('card');
    let n = null;
    let pathDoc = 'document/';

    for (let i = 0; i < arr.length; i++) {

      let divId = com.div('card ' + arr[i].id);
      let divFil = com.div('divFil');
      let divImg = com.div('divImg');
      let a1 = com.a(n, arr[i].image, n, n);
      let h2 = com.h2(arr[i].name);
      let span = com.span(arr[i].text);
      let p1 = com.p(arr[i].author);
      let p2 = com.p(arr[i].time);
      divId.appendChild(h2);
      if (arr[i].image != null) {
        let img = com.Img(arr[i].image);
        img.className = "imageCard";
        a1.appendChild(img);
        divImg.appendChild(a1);

      };

      if (arr[i].doc != null) {

        if (arr[i].doc instanceof Array) {

          let arrDoc = arr[i].doc;
          let imForDoc = 'icon4Doc.png';
          arrDoc.forEach(function(item, i, arrDoc) {

            let span = com.span(item);
            let a2 = com.a(null, pathDoc + item);
            let img2 = com.Img(imForDoc);
            img2.className = "imForDoc";
            a2.appendChild(span);
            a2.appendChild(img2);
            let a3 = a2.cloneNode(true)
            divFil.appendChild(a3);

          });

        } else {

          let span = com.span(arr[i].doc);
          let a2 = com.a(null, pathDoc + arr[i].doc);
          let img2 = com.Img( imForDoc);
          img2.className = "imForDoc";
          a2.appendChild(span);
          a2.appendChild(img2);
          divFil.appendChild(a2);
        }
      };

      divId.appendChild(divFil);
      divId.appendChild(divImg);
      divId.appendChild(span);
      divId.appendChild(p1);
      divId.appendChild(p2);
      card.appendChild(divId);

    };
    return div.appendChild(card);
  }


  Form(index) {

    let div = com.div('');
    let form = com.form('form');
    let docum = com.div('docum');
    for (let i = 0; i < index.length; i++) {
      form.innerHTML = index[0].name;
  form.id = index[0].name;
      if (index[i].nInput != null) {

        if (index[i].nInput instanceof Array) {

          for (let key in index[i].nInput) {
            let divLabel = com.div('');
            let input = com.input(index[i].nInput[key], null, 'label ' + key, null, 'text');
            let label = com.label(index[i].nInput[key], 'label ' + key);
            divLabel.appendChild(label);
            divLabel.appendChild(input);
            let divLabels = divLabel.cloneNode(true);
            docum.appendChild(divLabels);
          }

        } else {
          let divLabel = com.div('');
          let input = com.input(index[i].nInput, null, 'label', null, 'text');
          let label = com.label(index[i].nInput, 'label')
          divLabel.appendChild(label);
          divLabel.appendChild(input);
          docum.appendChild(divLabel);
        }

      }
      let button = com.button(index[i].button, null, null, index[i].button);
      let ckeckbox = com.checkbox(index[i].checkbox);
      let radio = com.radio(index[i].radio);
      form.appendChild(docum)
      form.appendChild(button);
      form.appendChild(ckeckbox);
      form.appendChild(radio);
    }
    return div.appendChild(form);
  }

  Tablo(arr) {
    let div = com.div('');
    let table = com.table();


    for (let i = 0; i < arr.length; i++) {
    let tz = com.tr();
    if(arr[i].th != undefined){
     for(let key in arr[i].th){

        let th = com.th(arr[i].th[key]);
        tz.id = 'th-head';
        let a3 = th.cloneNode(true)
        tz.appendChild(a3);
table.appendChild(tz);
}
}
let tr = com.tr();
for(let key in arr[i].td){

          let td = com.td(arr[i].td[key]);
          let ts = td.cloneNode(true);
          tr.appendChild(ts);

          table.appendChild(tr);
        };



    };
    return div.appendChild(table);
  }
  Tab(arr){


    let tabs = com.div('tabs');
    let tab = com.div('tab');

    let tablink = com.button('tablinks');




    tab.appendChild(tablink);

    return div.appendChild(tabs);
  }




}
