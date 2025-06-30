let ussd = "*2767*38855#";
let encoded = encodeURIComponent(ussd);
window.location.href = "tel:"+encoded;
