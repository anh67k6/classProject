class LoginScreen extends HTMLElement{
    constructor(){
        super()
        this._shadowRoot = this.attachShadow({mode : 'open'});
        this._shadowRoot.innerHTML = `
    <style>
        #container{
          height: 100vh;
        }

        #login-form{
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

    <div id="container">
        <form id='login-form'>
            <div class="title">Login</div>
            <input-wrapper type='mail' placeholder='Email' id="email"></input-wrapper>
            <input-wrapper type='password' placeholder='password' id='pwd'></input-wrapper>
            <button class='btn'>Login</button>
            <div>Don't have any account? Register</div>
        </form>
    </div>`
        this._shadowRoot.getElementById('login-form').onsubmit = (e) => {
            e.preventDefault();
            console.log(e);

            const email = this._shadowRoot.getElementById('email').getValue();
            const pwd = this._shadowRoot.getElementById('pwd').getValue();

            firebase.auth().signInWithEmailAndPassword(email, pwd)
            .then(res => {
                alert("Đăng nhập thành công");
                this._shadowRoot.getElementById('email').clearValue();
                this._shadowRoot.getElementById('pwd').clearValue();
            })
            .catch( err => {
                alert(`Failed ${err.message}`);
            })

        }
    }

}

window.customElements.define('login-screen', LoginScreen);