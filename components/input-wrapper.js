class InputWrapper extends HTMLElement {
    constructor(){
        super()
        this._shaddowDom = this.attachShadow({mode:'open'})
        this.type = this.getAttribute('type');
        this.placeholder = this.getAttribute('placeholder');
        this._shaddowDom.innerHTML =`
        <div>
            <input type="${this.type}" placeholder="${this.placeholder}">
            <div class='error'></div>
        </div>
        `
    }

    getValue(){
        return this._shaddowDom.querySelector('input').value 
    }

    clearValue(){
        this._shaddowDom.querySelector('input').value =''
    }

}
window.customElements.define('input-wrapper', InputWrapper);