function Transactions() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");

  return (
    <Card
      bgcolor="warning"
      header="Send Money"
      status={status}
      body={
        show ? (
          <TransactionsForm setShow={setShow} setStatus={setStatus} />
        ) : (
          <TransactionsMsg setShow={setShow} setStatus={setStatus} />
        )
      }
    />
  );
}

function TransactionsMsg(props) {
  return (
    <>
      <h5>Success</h5>
      <button
        type="submit"
        className="btn btn-light"
        onClick={() => {
          props.setShow(true);
          props.setStatus("");
        }}
      >
        Deposit again
      </button>
    </>
  );
}

function TransactionsForm(props) {
  const ctx = React.useContext(UserContext);
  const email = ctx.user.email;
  const [balance, setBalance] = React.useState(0);
  const [amount, setAmount] = React.useState("");
  const [reciever, setReciever] = React.useState("");

  fetch(`/account/findOne/${email}`)
    .then((response) => response.text())
    .then((text) => {
      try {
        const data = JSON.parse(text);
        setBalance(data.balance);
        console.log("JSON:", data);
      } catch (err) {
        props.setStatus(text);
        console.log("err:", text);
      }
    });

  function sendmoney() {
    fetch(`/account/update/${email}/-${amount}`)
      .then((response) => response.text())
      .then((text) => {
        try {
          const data = JSON.parse(text);
          //props.setStatus(JSON.stringify(data.value));
          props.setShow(false);
          console.log("JSON:", data);
        } catch (err) {
          props.setStatus("Deposit failed");
          console.log("err:", text);
        }
      });
    fetch(`/account/update/${reciever}/${amount}`)
      .then((response) => response.text())
      .then((text) => {
        try {
          const data = JSON.parse(text);
          //props.setStatus(JSON.stringify(data.value));
          props.setShow(false);
          console.log("JSON:", data);
        } catch (err) {
          props.setStatus("Deposit failed");
          console.log("err:", text);
        }
      });
  }

  return (
    <>
      <h6>Your account balance is ${Number(balance).toFixed(2)}</h6>
      Send money to another account
      <br />
      Send money to email: <br />
      <input
        type="input"
        className="form-control"
        placeholder="Enter email"
        value={reciever}
        onChange={(e) => setReciever(e.currentTarget.value)}
      />
      <br />
      Amount:
      <br />
      <input
        type="number"
        className="form-control"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.currentTarget.value)}
      />
      <br />
      <button type="submit" className="btn btn-light" onClick={sendmoney}>
        Deposit
      </button>
    </>
  );
}
