document.querySelector("#btn").addEventListener("click", () => {
  const input = document.querySelector("#input").value.split("\n");
  const from = document.querySelector("#from").value;
  const to = document.querySelector("#to").value;

  document.querySelector("#output").value = input
    .filter((item) => item)
    .map((item) => {
      if (from === "type-1") {
        const [ip, port, username, password] = item.split(":");

        if (to === "type-1") {
          return `http://${username}:${password}@${ip}:${port}`;
        }

        if (to === "type-2") {
          return `socks5://${username}:${password}@${ip}:${port}`;
        }
      }

      if (from === "type-2") {
        const [username, password, ip, port] = item.split(":");

        if (to === "type-1") {
          return `http://${username}:${password}@${ip}:${port}`;
        }

        if (to === "type-2") {
          return `socks5://${username}:${password}@${ip}:${port}`;
        }
      }

      return "";
    })
    .join("\n");
});
