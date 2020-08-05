
alert("sdfasd")

if('serviceWorker' in navigator){
  console.log("serviceworker")
  alert("service worker entro en el if ")
    try {
      navigator.serviceWorker.register('/js/serviceWorker.js');
      console.log("Service Worker Registered");
      alert("serviceworker");
    } catch (error) {
      console.log("Service Worker Registration Failed");
      alert("no registrado")
    }
  } 