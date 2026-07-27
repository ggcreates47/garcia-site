/* Garcia Handyman Services — site interactions */
(function () {
  "use strict";

  document.documentElement.classList.add("js");

  /* mobile nav */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* scroll reveal */
  var revs = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revs.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    revs.forEach(function (el) { io.observe(el); });
  } else {
    revs.forEach(function (el) { el.classList.add("in"); });
  }

  /* quote / contact form */
  var form = document.getElementById("quote-form");
  if (form) {
    var fileInput = form.querySelector('input[type="file"]');
    var drop = form.querySelector(".filedrop");
    var dropText = drop && drop.querySelector(".fd-text");

    if (drop && fileInput) {
      drop.addEventListener("click", function () { fileInput.click(); });
      fileInput.addEventListener("change", function () {
        if (fileInput.files.length && dropText) {
          dropText.textContent = fileInput.files.length === 1
            ? fileInput.files[0].name
            : fileInput.files.length + " photos selected";
        }
      });
      ["dragover", "dragenter"].forEach(function (ev) {
        drop.addEventListener(ev, function (e) { e.preventDefault(); drop.style.borderColor = "var(--gold)"; });
      });
      ["dragleave", "drop"].forEach(function (ev) {
        drop.addEventListener(ev, function (e) { e.preventDefault(); drop.style.borderColor = "var(--steel-2)"; });
      });
      drop.addEventListener("drop", function (e) {
        if (e.dataTransfer && e.dataTransfer.files.length) {
          fileInput.files = e.dataTransfer.files;
          if (dropText) dropText.textContent = e.dataTransfer.files.length + " photo(s) ready";
        }
      });
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      /* TODO(before launch): wire to real backend / email / scheduling tool. */
      var success = document.getElementById("form-success");
      form.style.display = "none";
      if (success) {
        success.classList.add("show");
        success.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  }

  /* footer year */
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
