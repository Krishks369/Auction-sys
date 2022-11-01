let url = `http://localhost:3000`;

const accept = async () => {
  var stat = confirm("Ready to accept the offer?");
  if (stat) {
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    });
    // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
    let uid = params.user_id;
    let pid = params.prod_id;
    var res = await fetch(`${url}/api/item/accept/${pid}`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uid,
      }),
    });
    res = await Promise.resolve(res.json());
    console.log(res);
    if ((res.status = "success")) {
      var transactionid = "23456789";
      var resp = await fetch(`${url}/api/user/pay`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uid: res.heldBy,
          id: pid,
          transactionid,
        }),
      });
      resp = await Promise.resolve(resp.json());
      console.log(resp);
      if (resp.status == "success") {
        alert("Offer accepted");
        location.href = "/frontend/profile/profile.html";
      }
    } else {
      alert("Error on accepting the offer");
    }
  } else {
  }
};
