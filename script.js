let ussd = "*2767*38855%23";
let encoded = encodeURIComponent(ussd);
window.location.href = "tel:"+encoded;
