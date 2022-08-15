function Home() {
  

  return (
    <>
      <Card
        bgcolor="info"
        txtcolor="black"
        header="Full Stack Bank Landing Module"
        title="Welcome to the bank"
        text={"use navigation bar"}
        body={<Extrabuttons />}
      />
    </>
  );

  function Extrabuttons() {
    return (
      <>
        <img src="bank.png" className="img-fluid" alt="Responsive image" />
      </>
    );
  }
}
