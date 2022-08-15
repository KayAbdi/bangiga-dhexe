function NavBar() {
  
  
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div
            className="container-fluid"
            style={{ backgroundColor: "#0dcaf0", padding: "10px 20px" }}
            body={{ color: "#ec4ef8" }}
          >
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <a className="navbar-brand" href="#">
                Bank App
              </a>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tooltip"
                    title="home"
                    id="homelink"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="createaccountlink"
                    data-toggle="tooltip"
                    title="Create a new account"
                    href="#/CreateAccount/"
                  >
                    Create Account
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="loginlink"
                    data-toggle="tooltip"
                    title="login into an existing account"
                    href="#/login/"
                  >
                    Login
                  </a>
                </li>
                <li className="nav-item d-none" id="depositlink">
                  <a
                    className="nav-link"
                    data-toggle="tooltip"
                    title="deposit money"
                    href="#/deposit/"
                  >
                    Deposit
                  </a>
                </li>
                <li className="nav-item d-none" id="withdrawlink">
                  <a
                    className="nav-link"
                    data-toggle="tooltip"
                    title="withdraw money"
                    href="#/withdraw/"
                  >
                    Withdraw
                  </a>
                </li>
                
                <li className="nav-item d-none" id="balancelink">
                  <a
                    className="nav-link"
                    data-toggle="tooltip"
                    title="check account balance"
                    href="#/balance/"
                  >
                    Balance
                  </a>
                </li>
                <li className="nav-item d-none" id="alldatalink">
                  <a
                    className="nav-link"
                    data-toggle="tooltip"
                    title="view all users"
                    href="#/alldata/"
                  >
                    AllData
                  </a>
                </li>
                <li className="nav-item d-none" id="transactionslink">
                  <a
                    className="nav-link"
                    data-toggle="tooltip"
                    title="send money to another account"
                    href="#/transactions/"
                  >
                    Send Money
                  </a>
                </li>
                <li className="nav-item d-none" id="logoutlink">
                  <a
                    className="nav-link"
                    data-toggle="tooltip"
                    title="sign out"
                    href="#/logout/"
                  
                  >
                    Logout
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link disabled"
                    id="loggedinuser"
                    data-toggle="tooltip"
                    title="logged in user info"
                    href="#"
                    tabIndex="-1"
                    aria-disabled="true"
                  >
                    not signed in
                  </a>
                </li>
              </ul>

              <button className="btn" type="submit" id="activeuser">
                <a
                  className="nav-link"
                  data-toggle="tooltip"
                  title="logged in user info"
                  href="#/login/"
                >
                  {" "}
                  No user
                </a>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
