// API Keys, Authorization, Credentials, Content-Security-Policy

export function getData() {
  //What is an API Key
  //Where can we pass it to the server - querystring, headers, cookies
  //controlling when cookies and credentials are passed to a server
  //CSP meta tags and headers

  let str = "http://127.0.1:3000/?name=value&steve=griffith";
  let url = new URL(str);
  let sp = url.searchParams;
  sp.append("hello", "world");
  sp.append("api-key", "ashdadshalshdlahd");

  let h = new Headers();
  h.append("x-api-key", "hasdhalshda"); //API key
  h.append("Authorization", "Bearer ashdahdhashdahdh"); //JWT

  let request = new Request(url, {
    method: "POST",
    headers: h,
    cache: "default",
    credentials: "omit",
  });

  fetch(request)
    .then((response) => {
      if (!response.ok) throw new Error("invalid");
      return response.text();
    })
    .then((txt) => {
      console.log(txt);
    })
    .catch((error) => console.error(error.message));
}
