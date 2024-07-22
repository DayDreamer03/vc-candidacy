function scrollToStartups() {
  const startupsSection = document.getElementById("startups");
  if (startupsSection) {
    startupsSection.scrollIntoView({ behavior: "smooth" });
  }
}
