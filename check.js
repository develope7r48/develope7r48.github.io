

    function getParameters() {
        const searchParams = new URLSearchParams(window.location.search);
        var productId=searchParams.get("product");
        var url="intent://theinqr.com/?product=samsung#Intent;scheme=tta;package=com.tta.qr;end";
        document.getElementById("q").value=productId;
          window.location.replace(url);
         setTimeout(fallbackToStore, 700);

    }


    function fallbackToStore() {
  window.location.replace('https://play.google.com/store/apps/details?id=com.github.android');
};
