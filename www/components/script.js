// This is a JavaScript file

window.onload = function(){
  document.querySelector('#exibir').addEventListener('click', function(){
     cordova.plugins.barcodeScanner.scan(
      function (result) {
       if(result.text == '1234'){
          document.querySelector('#texto').innerHTML = "<h2>Informações</h2>";
          document.querySelector('#info').textContent = "Motorola";
            document.querySelector('#img').src = 'lib/cel1.jpg';
       }

        if(result.text == '12345'){
          document.querySelector('#texto').innerHTML = "<h2>Informações 2</h2>";
          document.querySelector('#info').textContent = "Motorola 2";
            document.querySelector('#img').src = 'lib/cel2.jpg';
       }
         
      },
      function (error) {
          alert("Scanning failed: " + error);
      },
      {
          preferFrontCamera : true, // iOS and Android
          showFlipCameraButton : true, // iOS and Android
          showTorchButton : true, // iOS and Android
          torchOn: true, // Android, launch with the torch switched on (if available)
          saveHistory: true, // Android, save scan history (default false)
          prompt : "Place a barcode inside the scan area", // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats : "QR_CODE,PDF_417, CODE_39", // default: all but PDF_417 and RSS_EXPANDED
          orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations : true, // iOS
          disableSuccessBeep: false // iOS and Android
      }
   );



      
  });
}