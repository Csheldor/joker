module.exports = {
  rules: [
    {
      pattern:/\/api\/gethomepbllist.php\?rtype=origin$/,
      respondwith:'./homepbllist.json'
    },
    {
      pattern:/\/api\/gethomepbllist.php\?rtype=more$/,
      respondwith:'./homepbllist-more.json'
    }
  ]
}
