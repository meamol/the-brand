
/* =================================
    GSAP 
================================= */
  gsap.registerPlugin(ScrollTrigger);


/* =================================
    MOBILE MENU
================================= */
  const toggleBtn = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }


/* =================================
    STICKY HEADER
================================= */
  const header = document.querySelector("header");

  if (header) {
    ScrollTrigger.create({
      start: "top top",
      onUpdate: (self) => {
        if (self.direction === 1) {
          header.classList.add("is-sticky");
          gsap.to(header, {
            y: -10,
            scale: 0.98,
            duration: 0.3,
            ease: "power2.out"
          });
        } else {
          gsap.to(header, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        }
      }
    });
  }


/* =================================
    PAGE SCROLL SMOOTH
================================= */
  const links = document.querySelectorAll(".nav-link");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href"))       // smooth scroll
        .scrollIntoView({ behavior: "smooth" });

      links.forEach(l => l.classList.remove("active"));       // remove active from all

      this.classList.add("active");                           // add active to clicked link
    });
  });


/* =================================
    HERO SLIDER
================================= */
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function animateSlide(slide) {
    if (!slide) return;

    const bg = slide.querySelector(".bg-img");
    const heading = slide.querySelector("h1");
    const text = slide.querySelector("p");
    const images = slide.querySelectorAll(".slide-images img");

    if (bg) {
      gsap.from(bg, {
        scale: 1.1,
        opacity: 0,
        duration: 1.2
      });
    }

    if (heading) {
      gsap.from(heading, {
        y: 40,
        opacity: 0,
        duration: 0.6
      });
    }

    if (text) {
      gsap.from(text, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        delay: 0.2
      });
    }

    if (images.length > 0) {
      gsap.from(images, {
        y: 20,
        opacity: 0,
        stagger: 0.2,
        duration: 0.6,
        delay: 0.3
      });
    }
  }

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
    animateSlide(slides[index]);
  }

  if (slides.length > 0) {
    showSlide(currentSlide);

    setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }, 4500);
  }


/* =================================
    ABOUT SECTION
================================= */
  const aboutSection = document.querySelector(".about-section");

  if (aboutSection) {
    const heading = aboutSection.querySelector(".section-heading");
    const textItems = aboutSection.querySelectorAll(".about-content p, .about-list li");
    const image = aboutSection.querySelector(".about-image img");

    if (heading) {
      gsap.from(heading, {
        scrollTrigger: {
          trigger: aboutSection,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.6
      });
    }

    if (textItems.length > 0) {
      gsap.from(textItems, {
        scrollTrigger: {
          trigger: aboutSection,
          start: "top 80%",
        },
        y: 20,
        opacity: 0,
        stagger: 0.15,
        duration: 0.5
      });
    }

    if (image) {
      gsap.from(image, {
        scrollTrigger: {
          trigger: aboutSection,
          start: "top 80%",
        },
        opacity: 0,
        scale: 0.95,
        duration: 0.6
      });
    }
  }


/* =================================
    CASE STUDY
================================= */

  gsap.from(".case-item", {
    scrollTrigger: {
      trigger: ".case-alt",
      start: "top 80%"
    },
    opacity: 0,
    y: 20,
    duration: 0.5,
    stagger: 0.15,
    ease: "power1.out"
  });


/* =================================
    BLOG
================================= */

  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".blog-card", {
    scrollTrigger: {
      trigger: ".blog-grid",
      start: "top 80%",
    },
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger: 0.12,
    ease: "power2.out"
  });


/* =================================
    TESTIMONIALS
================================= */


/* =================================
    CLIENTS
================================= */

  const track = document.querySelector(".brand-track");

  // Simple continuous left movement
  const move = gsap.to(track, {
    x: "-50%",            // move left
    duration: 15,         // slow smooth speed
    repeat: -1,           // infinite loop
    ease: "none"          // constant motion
  });

  // Pause on hover
  document.querySelector(".brand-wrapper").addEventListener("mouseenter", () => {
    move.pause();
  });

  // Resume when mouse leaves
  document.querySelector(".brand-wrapper").addEventListener("mouseleave", () => {
    move.resume();
  });


/* =================================
    CONTACT FORM VALIDATION
================================= */
  
  document.getElementById("contactForm").addEventListener("submit", function(e){

    let valid = true;

    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("phoneError").innerText = "";
    document.getElementById("messageError").innerText = "";

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if(name === ""){
      document.getElementById("nameError").innerText = "Name is required";
      valid = false;
    }

    if(!email.includes("@")){
      document.getElementById("emailError").innerText = "Enter valid email";
      valid = false;
    }

    if(phone === ""){
      document.getElementById("phoneError").innerText = "Phone is required";
      valid = false;
    }

    if(message === ""){
      document.getElementById("messageError").innerText = "Message is required";
      valid = false;
    }

    if(!valid){
      e.preventDefault(); 
    } else {
      document.getElementById("successMsg").innerText =
        "Message sent successfully! Check your email.";
    }
  });





/* ==================================
   END
================================== */
  