//const template = document.createElement('template');
//template.innerHTML = '
//    ';


class ButtonCount extends HTMLElement{
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'closed'});

        let tC = 0;
        let btn = document.createElement('button');
        btn.innerHTML = `Times Clicked: ${tC}`;
        btn.addEventListener('click', function (){
            tC += 1;
            btn.innerHTML = `Times Clicked: ${tC}`;
        });

        shadow.append(btn);
    }
}
customElements.define('button-count', ButtonCount);