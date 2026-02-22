function closeAnnouncement() {
  const bar = document.getElementById("announcementBar");
  bar.classList.add("opacity-0");

  setTimeout(() => {
    bar.remove();
  }, 300);
}
