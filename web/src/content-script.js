if (window.location.hostname.includes("wikipedia.org")) {
  document.querySelectorAll("a").forEach(link => {
    link.style.color = "red";
    link.style.fontWeight = "bold";
  });
}
