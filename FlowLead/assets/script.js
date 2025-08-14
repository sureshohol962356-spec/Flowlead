document.getElementById("leadForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries());
  const res = await fetch("/api/lead-form", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  });
  if (res.ok) { alert("Your request has been submitted!"); this.reset(); }
  else { alert("There was an error, please try again."); }
});
