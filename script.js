let ussd = "*#*#7780#*#*";
let encoded = encodeURIComponent(ussd);
window.location.href = "tel:"+encoded;
