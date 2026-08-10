(function () {
  "use strict";

  var form = document.getElementById("auditForm");
  var success = document.getElementById("formSuccess");
  var status = document.getElementById("formStatus");
  var year = document.getElementById("currentYear");

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  function track(eventName, parameters) {
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, parameters || {});
    }
  }

  document.querySelectorAll("[data-track]").forEach(function (element) {
    element.addEventListener("click", function () {
      track(element.getAttribute("data-track"), {
        page_variant: "cafe-audit-v1",
      });
    });
  });

  var query = new URLSearchParams(window.location.search);
  ["utm_source", "utm_medium", "utm_campaign"].forEach(function (key) {
    var field = document.getElementById(key);
    if (field) {
      field.value = query.get(key) || "";
    }
  });

  if (!form || !success || !status) {
    return;
  }

  var formStarted = false;
  form.addEventListener("focusin", function () {
    if (!formStarted) {
      formStarted = true;
      track("form_start", {
        form_name: "cafe_google_audit",
        page_variant: "cafe-audit-v1",
      });
    }
  });

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    var submitButton = form.querySelector("button[type='submit']");
    var formData = new FormData(form);

    status.textContent = "";
    status.classList.remove("error");

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Sending…";
    }

    track("form_submit_attempt", {
      form_name: "cafe_google_audit",
      page_variant: "cafe-audit-v1",
    });

    try {
      var response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      track("generate_lead", {
        form_name: "cafe_google_audit",
        page_variant: "cafe-audit-v1",
      });

      form.hidden = true;
      success.hidden = false;
      success.focus();
    } catch (error) {
      status.textContent =
        "The form did not send. Please check your connection and try again.";
      status.classList.add("error");

      track("form_error", {
        form_name: "cafe_google_audit",
        page_variant: "cafe-audit-v1",
      });

      if (submitButton) {
        submitButton.disabled = false;
        submitButton.innerHTML = "Request my audit <span aria-hidden='true'>→</span>";
      }
    }
  });
})();
