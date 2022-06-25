function kth() {
document.getElementById("k").innerHTML="<a>hello</a>";
document.getElementById("q").value="work";
}

    function getParameters() {

        const searchParams = new URLSearchParams(window.location.search);
document.getElementById("q").value=searchParams.get("q");

    }


    function fallbackToStore() {
  window.location.replace('https://play.google.com/store/apps/details?id=com.github.android');
};
function openApp() {
  window.location.replace('intent://app/MainActivity#Intent;scheme=tta;package=com.tta.qr;end');
};
function triggerAppOpen() {
  openApp();
  setTimeout(fallbackToStore, 700);
};