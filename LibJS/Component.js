'use strict';
const css = document.createElement('link');
const link = 'LibJS/main.css';
css.setAttribute('href', link);
css.rel = 'stylesheet';

document.head.appendChild(css);

export default class Component {

  header(name) {
    let div = document.createElement('div');
    let head = document.createElement('header');
    if (name != undefined) {
      head.id = name;
    }

    return div.appendChild(head);
  }
  nav(name) {
    let div = document.createElement('div');
    let head = document.createElement('nav');
    if (name != undefined) {
      head.id = name;
    }

    return div.appendChild(head);
  }
  main(name) {
    let div = document.createElement('div');
    let main = document.createElement('main');
    if (name != undefined) {
      main.id = name;
    }

    return div.appendChild(main);
  }
  footer(name) {
    let div = document.createElement('div');
    let footer = document.createElement('footer');
    if (name != undefined) {
      footer.id = name;
    }

    return div.appendChild(footer);
  }
  img(image) {
    let div = document.createElement('div');
    let img = document.createElement('img');
    img.className = "image";
    img.src = image;
    return div.appendChild(img);
  }

  h1(name) {
    let div = document.createElement('div');
    let h = document.createElement('h1');
    h.innerHTML = name;
    return div.appendChild(h);
  }

  h2(name) {
    let div = document.createElement('div');
    let h = document.createElement('h2');
    h.innerHTML = name;
    return div.appendChild(h);
  }

  h3(name) {
    let div = document.createElement('div');
    let h = document.createElement('h3');
    h.innerHTML = name;
    return div.appendChild(h);
  }

  h4(name) {
    let div = document.createElement('div');
    let h = document.createElement('h4');
    h.innerHTML = name;
    return div.appendChild(h);
  }

  h5(name) {
    let div = document.createElement('div');
    let h = document.createElement('h5');
    h.innerHTML = name;
    return div.appendChild(h);
  }

  h6(name) {
    let div = document.createElement('div');
    let h = document.createElement('h6');
    h.innerHTML = name;
    return div.appendChild(h);
  }

  div(name) {
    let div = document.createElement('div');
    let div2 = document.createElement('div');
    div2.className = name;
    return div.appendChild(div2);
  }

  a(name, href, id, value) {

    let div = document.createElement('div');
    let a = document.createElement('a');
    if (name != null) {
      a.className = name;
    };
    if (href != null) {
      a.href = href;
    };
    if (id != null) {
      a.id = id;
    };
    if (value != null) {
      a.innerHTML = value;
    };

    return div.appendChild(a);
  }

  button(name, href, id, value) {
    let div = document.createElement('div');
    let button = document.createElement('button');
    if (name != null) {
      button.className = name;
    };
    if (href != null) {
      button.href = href;
    };
    if (id != null) {
      button.id = id;
    };
    if (value != null) {
      button.innerHTML = value;
    };
    return div.appendChild(button);
  }

  span(name) {
    let div = document.createElement('div');
    let span = document.createElement('span');
    span.innerHTML = name;
    return div.appendChild(span);
  }

  p(name) {
    let div = document.createElement('div');
    let p = document.createElement('p');
    p.innerHTML = name;
    return div.appendChild(p);
  }

  input(name, href, id, value, type,typeName) {
    let div = document.createElement('div');
    let input = document.createElement('input');
    if (name != null) {
      input.className = name;
    };
    if (href != null) {
      input.href = href;
    };
    if (id != null) {
      input.id = id;
    };
    if (value != null) {
      input.placeholder = value;
    };
    if (type != null) {
      input.type = type;
    };
    if (typeName != null) {
      input.name = typeName;
    };
    return div.appendChild(input);
  }

  form(name) {
    let div = document.createElement('div');
    let form = document.createElement('form');
    if(name !=undefined) form.action = name ;

    return div.appendChild(form);
  }

  label(name, f4) {
    let div = document.createElement('div');
    let label = document.createElement('label');
    label.innerHTML = name;
    label.setAttribute("for", f4);
    return div.appendChild(label);
  }

  checkbox(name, boolean) {
    let div = document.createElement('div');
    let div2 = document.createElement('div');
    div2.className = 'checkbox';
    let checkbox = document.createElement('input');
    let label = document.createElement('label');
    checkbox.id = name;
    checkbox.type = "checkbox";
    label.setAttribute("for", checkbox);
    label.innerHTML = name;

    div2.appendChild(checkbox);
    div2.appendChild(label);

    return div.appendChild(div2);
  }

  radio(name, boolean) {
    let div = document.createElement('div');
    let div2 = document.createElement('div');
    div2.className = 'radio';
    let radio = document.createElement('input');
    let label = document.createElement('label');
    radio.id = name;
    radio.type = "radio";
    label.setAttribute("for", radio);
    label.innerHTML = name;

    div2.appendChild(radio);
    div2.appendChild(label);

    return div.appendChild(div2);
  }

  table() {
    let div = document.createElement('div');
    const table = document.createElement('table');
    return div.appendChild(table);
  }


  tr() {
    let div = document.createElement('div');
    let tr = document.createElement('tr');
    return div.appendChild(tr);

  }

  th(name) {
    let div = document.createElement('div');
    let tComponent = document.createElement('th');
    tComponent.innerHTML = name;
    return div.appendChild(tComponent);

  }

  td(name) {
    let div = document.createElement('div');
    let tComponent = document.createElement('td');
    tComponent.innerHTML = name;
    return div.appendChild(tComponent);

  }


  select(arr) {
    let div = document.createElement('div');
    let select = document.createElement('select');
    let option = document.createElement('option');
    let arrLen = arr.length;
    let i;
    for (i = 0; i < arrLen; i++) {
      if (i = 0) {
        option.value = arr[i];
        option.innerHTML = arr[i];
        let options = option.cloneNode(true);
        select.appendChild(options);
      } else {

        option.innerHTML = arr[i];

        let options = option.cloneNode(true);
        select.appendChild(options);
      }

      return div.appendChild(select);
    }
  }

  openDoc(name) {

    let div = document.createElement('div');
    let a = document.createElement('a');
    let img = document.createElement('img');
    let span = document.createElement('span');
    img.className = "image";
    img.src = 'scripts/libs/icon4Doc.png';
    img.setAttribute('style', ' height: 25px%; width: 25px;')
    a.href = 'corDoc/' + name;
    let target = ['.jpg', '.docx', '.png', '.pdf', '.doc', '.xlsx', '.xlsm'];
    let pos = 0;

    for (let i = 0; i < target.length; i++) {

      while (true) {
        let foundPos = name.indexOf(target[i], pos);
        if (foundPos == -1) break;
        span.innerHTML = name.slice(0, foundPos); // нашли на этой позиции
        pos = foundPos + 1;

      }
    }
    a.appendChild(img);
    a.appendChild(span);
    return div.appendChild(a);

  }

}
