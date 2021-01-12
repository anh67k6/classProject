class RegisterSreen extends HTMLElement {
    constructor(){
        super()
        this._shadowRoot = this.attachShadow({mode :'open'});
        this._shadowRoot.innerHTML = `  
    <style>
        .container{
            height: 100vh;
        }
        #register-form{
            width: 40%;
            margin: auto;
            text-align: center;
            background-color: pink;
            height: 100%;
        }
        .title{
            font-size: 30px;
            font-weight: 600;
            margin-bottom: 20px;
        }

    </style>  
        
    <div class="container">
        <form id='register-form'>
            <div class="title">Share story</div>
            <input-wrapper id='name' type='text' placeholder='Full Name'></input-wrapper>
            <input-wrapper id='mail' type='email' placeholder='Email'></input-wrapper>
            <input-wrapper id='pwd' type='password' placeholder='Password'></input-wrapper>
            <input-wrapper type='password' placeholder='Confirm password'></input-wrapper>

            <button class='btn'>Register</button>
            <div class='redirect'>Already have an account? Login</div>
        </form>
    </div>`
    

    this._shadowRoot.getElementById('register-form').addEventListener('submit', (e) => {
        e.preventDefault();
        let mail = this._shadowRoot.getElementById('mail').getValue();
        let pwd = this._shadowRoot.getElementById('pwd').getValue();

        firebase.auth().createUserWithEmailAndPassword(mail,pwd);
        })
    }
}


window.customElements.define('register-screen',RegisterSreen);