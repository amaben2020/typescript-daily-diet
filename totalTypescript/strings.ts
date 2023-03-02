const filterOutboundInternalLinks = (() => {
  const INTERNAL_HOST = "dodonut";
  const url = new URL("https://dodonut/jbsjaj.com");

  return url.hostname === INTERNAL_HOST
    ? "noopener"
    : "nofollow noopener noreferrer";
})();

console.log(filterOutboundInternalLinks);
