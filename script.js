function goToPage(platform) {
  const urls = {
    vercel: "https://project-vercel-five.vercel.app/",
    railway: "https://holamundopy-production.up.railway.app/",
    digitalocean: "https://hola-mundo-zlywd.ondigitalocean.app/",
    heroku: "https://nodeheroku-68e9898d21c7.herokuapp.com/",
    EC2: "http://54.205.65.51/"
  };

  window.location.href = urls[platform];
}