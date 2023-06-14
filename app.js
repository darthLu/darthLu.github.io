/* Contact Me Form Submission */
window.addEventListener("load", function () {
   const form = document.getElementById('contactMe');
   form.addEventListener("submit", function (e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
         method: 'POST',
         body: data,
      })
         .then(() => {
            alert("Success!");
            window.location.replace("https://www.lindseywade.me")
         })
   });
});

