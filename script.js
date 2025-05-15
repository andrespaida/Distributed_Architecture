function goToPage(platform) {
  const urls = {
    vercel: "https://tu-vercel-app.vercel.app",
    railway: "https://tu-railway-app.up.railway.app",
    digitalocean: "https://tu-digitalocean-app.com",
    heroku: "https://tu-heroku-app.herokuapp.com"
  };

  window.location.href = urls[platform];
}