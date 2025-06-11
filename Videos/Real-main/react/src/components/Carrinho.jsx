export default function Carrinho() {
  function logout() {
    console.log("Usuário deslogado");
    // aqui você pode limpar localStorage, redirecionar, etc.
  }

  return (
    <div className="nav-icon-container">
      <a href="carrinho.html">
       <img className="logo2" src="imagens/cartt copy.png" alt="Logo da Shefit" />
      </a>
      <a href="login.html" className="login-button">Login</a>
      <span className="user-name" id="user-name"></span>
    </div>
  );
}