export default function Register (){
    
    return <>
    
          <div id="login-modal1" className="modal1">
        <div className="modal1-content">
          <span className="close-btn1" >&times;</span>


          <div id="login-form1">
            <h2>Login</h2>
            <input type="text" id="login-username" placeholder="Nome de usuário" />
            <input type="password" id="login-password" placeholder="Senha" />
            <button >Entrar</button>
            <p>Ainda não tem conta? <a href="#" >Cadastre-se</a></p>
          </div>

  
          <div id="register-form1" style={{display: "none"}}>
            <h2>Cadastro</h2>
            <input type="text" id="register-username" placeholder="Usuário" required/>
              <input type="password" id="register-password" placeholder="Senha" required/>
                <button >Cadastrar</button>
                <p>Já tem conta? <a href="#" >Fazer login</a></p>
              
                <div id="register-message" style={{display:"none", marginTop:"10px", color: "green", fontWeight: "bold"}}></div>

                <div id="register-loader" style={{display:"none", marginTop:"10px", textAlign:"center"}}>
                  <div className="loader"></div>
                </div>
              </div>
          </div>
        </div>
    
    </>

}