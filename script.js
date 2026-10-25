(function () {
  'use strict';

  /* ---------- Helpers ---------- */
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var grads = [
    'linear-gradient(135deg,#8fa3b8,#4c5f78)', 'linear-gradient(135deg,#b7c4cf,#6d8296)',
    'linear-gradient(135deg,#c9b99a,#8a7658)', 'linear-gradient(135deg,#9db8a6,#587a64)'
  ];
  // Uses the image if the file exists, otherwise the gradient shows (no broken icons / errors)
  function bg(el, src, i) {
    el.style.backgroundImage = 'url("' + src + '"), ' + grads[(i || 0) % grads.length];
  }

  /* ---------- Data ---------- */
  var heroData = [
    { t: 'Building for Tomorrow', s: 'Building Tomorrow, Today \u2013 Where Quality Meets Craftsmanship.', img: 'images/hero1.jpg' },
    { t: 'Building Perfection', s: 'Innovation in Every Beam, Precision in Every Joint.', img: 'images/hero2.jpg' }
  ];
  var logos = [
    ['images/logo-pdoha.jpg', 'Pakistan Defence Officers Housing Authority'],
    ['images/logo-pec.jpg', 'Pakistan Engineering Council'],
    ['images/logo-secp.jpg', 'SECP'],
    ['images/logo-fbr.jpg', 'FBR Pakistan'],
    ['images/logo-pdoha.jpg', 'Pakistan Defence Officers Housing Authority'],
    ['images/logo-pec.jpg', 'Pakistan Engineering Council'],
    ['images/logo-secp.jpg', 'SECP'],
    ['images/logo-fbr.jpg', 'FBR Pakistan']
  ];
  var services = [
    ['Residential Construction', "Let us, build your 'Dream Home' The most perfect way you always wanted it to be By Our Expert Team ...", 'service1.jpg'],
    ['Commercial Construction', "Let us, build your 'Business space' By Hassle-Free Execution With Our Expert Team ...", 'service2.jpg'],
    ['Architect', 'Our architects craft visionary designs that bring your aspirations to life, creating spaces ...', 'service3.jpg'],
    ['Real Estate', 'Trust our seasoned real estate professionals to guide you through the market, providing insights and opportunities ...', 'service4.jpg'],
    ['Interior Designs', 'Gets Beautiful space plan & execution of high quality Customized Homes ...', 'service5.jpg'],
    ['Renovations', "Improve your existing space By Our Team of Experts To deliver you're 'Project' ...", 'service6.jpg']
  ];
  var sets = {
    construction: ['Residential', 'Rent-house', 'Luxury Villa', 'Duplex/Bungalows', 'Independent house', 'Floor-Addition', 'Farm house', 'Commercial'],
    architect: ['2D / 3D Floor Plans & Elevations', 'Building Floor Plan Architect', 'Commercial Floor Plans', 'Duplex House Floor Plans', 'Desperate House Plans', 'Villa Floor Plan Designer', 'Kitchen & Bath Designers', 'Landscape Architects'],
    interior: ['Living Room Interiors', 'Kitchen Interiors', 'Bedroom Interiors', 'Bathroom Interiors', 'Commercial Interiors', 'Home Decoration', 'Interior Decoration', 'Office Interiors'],
    renovation: ['Full Home Renovation', 'Bathroom Renovation', 'Kitchen Renovation', 'Commercial Renovation', 'Extension of Areas', 'Restaurant Renovation', 'Compound wall construction', 'Living Room Renovation']
  };
  var features = [
    ['fa-gears', 'End to End turn-Key Solutions with Tailor fit Packages', 'We provide an Excellent Designing, Planning & Execution Team under One Roof, from Estimate, Plan to handover'],
    ['fa-briefcase', 'Professional Service', 'Our Professionals verified in 2-tier background authentication process with skilled & trained Professionals'],
    ['fa-magnifying-glass', 'Huge Vendor Base', 'We will always be able to provide multiple material options for your needs.'],
    ['fa-square-check', 'Quality Assurance', 'list of QMS 400+ quality checks each stage of project'],
    ['fa-file-lines', 'Project Tracking & Process', 'digitally track your progress at every stage of your work site'],
    ['fa-box-open', 'Packages & cost', 'Providing diversified quotations based on the material of specification to choose the best from according to your budget & Lifestyle'],
    ['fa-clock', 'No Delay', 'Quick Start and on time delivery, with penalty for delay to contractors, no more cost overrun due to delay in home construction'],
    ['fa-eye', 'Transparency', 'Clear and detailed specification with quotation, Pre-agreed transparent at every level (budget, brands, materials purchase, progress, payment)'],
    ['fa-check', 'Warranty', 'On structure & Finishes']
  ];

  function slug(s) { return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }

  /* ---------- Build sections ---------- */
  // Hero slides
  var slidesBox = $('#slides');
  heroData.forEach(function (d, i) {
    var s = document.createElement('div');
    s.className = 'slide' + (i === 0 ? ' active' : '');
    s.innerHTML = '<div class="container"><h1>' + d.t + '</h1><p class="sub-text">' + d.s +
      '</p><div class="hero-btns"><a href="#about" class="btn">View More <i class="fa-solid fa-angle-right"></i></a>' +
      '<a href="#contact" class="btn red">Book Now <i class="fa-solid fa-angle-right"></i></a></div></div>';
    bg(s, d.img, i);
    slidesBox.appendChild(s);
  });

  // Logo carousel
  var track = $('#logoTrack');
  logos.forEach(function (l, i) {
    var c = document.createElement('div');
    c.className = 'logo-card';
    c.innerHTML = '<div role="img" aria-label="' + l[1] + '"></div>';
    c.firstChild.style.backgroundImage = 'url("' + l[0] + '")';
    track.appendChild(c);
  });

  // Services
  var svcGrid = $('#svcGrid');
  services.forEach(function (s, i) {
    var d = document.createElement('div');
    d.className = 'svc';
    d.innerHTML = '<h3>' + s[0] + '</h3><p>' + s[1] + '</p><a href="#contact">Read More</a>';
    bg(d, 'images/' + s[2], i);
    svcGrid.appendChild(d);
  });

  // Galleries
  $$('.grid[data-set]').forEach(function (g) {
    var key = g.getAttribute('data-set');
    sets[key].forEach(function (name, i) {
      var it = document.createElement('div');
      it.className = 'item';
      it.innerHTML = '<div class="img"></div><p>' + name.replace(/&/g, '&amp;') + '</p>';
      bg($('.img', it), 'images/' + key + '-' + slug(name) + '.jpg', i);
      g.appendChild(it);
    });
  });

  // Features
  var fg = $('#featGrid');
  features.forEach(function (f) {
    var d = document.createElement('div');
    d.className = 'feat';
    d.innerHTML = '<i class="fa-solid ' + f[0] + '"></i><h3>' + f[1] + '</h3><p>' + f[2] + '</p>';
    fg.appendChild(d);
  });

  // Contact person image
  var person = $('.person');
  if (person) person.style.backgroundImage = 'url("' + person.getAttribute('data-img') + '")';

  /* ---------- Hero slider ---------- */
  var slides = $$('.slide'), cur = 0, timer;
  function show(n) {
    slides[cur].classList.remove('active');
    cur = (n + slides.length) % slides.length;
    slides[cur].classList.add('active');
  }
  function auto() { clearInterval(timer); timer = setInterval(function () { show(cur + 1); }, 5000); }
  $('#next').addEventListener('click', function () { show(cur + 1); auto(); });
  $('#prev').addEventListener('click', function () { show(cur - 1); auto(); });
  auto();

  /* ---------- Logo carousel ---------- */
  var dotsBox = $('#logoDots'), pos = 0, lTimer;
  function perView() {
    var w = window.innerWidth;
    return w <= 575 ? 1 : w <= 991 ? 3 : w <= 1199 ? 4 : 5;
  }
  function maxPos() { return logos.length - perView(); }
  function buildDots() {
    dotsBox.innerHTML = '';
    var n = Math.min(4, maxPos() + 1);
    for (var i = 0; i < n; i++) {
      var b = document.createElement('button');
      b.setAttribute('aria-label', 'Slide ' + (i + 1));
      (function (i) { b.addEventListener('click', function () { move(Math.round(i * maxPos() / Math.max(n - 1, 1))); autoLogo(); }); })(i);
      dotsBox.appendChild(b);
    }
  }
  function move(p) {
    pos = Math.max(0, Math.min(p, maxPos()));
    track.style.transform = 'translateX(-' + (pos * (100 / perView())) + '%)';
    var ds = $$('button', dotsBox);
    var idx = Math.round(pos * (ds.length - 1) / Math.max(maxPos(), 1));
    ds.forEach(function (d, i) { d.classList.toggle('on', i === idx); });
  }
  function autoLogo() {
    clearInterval(lTimer);
    lTimer = setInterval(function () { move(pos >= maxPos() ? 0 : pos + 1); }, 3500);
  }
  buildDots(); move(0); autoLogo();
  window.addEventListener('resize', function () { buildDots(); move(0); });

  /* ---------- Mobile menu ---------- */
  var menu = $('#menu');
  $('#burger').addEventListener('click', function () { menu.classList.toggle('open'); });
  $$('.has-sub > a').forEach(function (a) {
    a.addEventListener('click', function (e) {
      if (window.innerWidth <= 991) { e.preventDefault(); a.parentNode.classList.toggle('open'); }
    });
  });
  $$('.menu a').forEach(function (a) {
    a.addEventListener('click', function () {
      if (!a.parentNode.classList.contains('has-sub')) menu.classList.remove('open');
    });
  });

  /* ---------- Back to top ---------- */
  var top = $('#totop');
  window.addEventListener('scroll', function () {
    top.classList.toggle('show', window.pageYOffset > 400);
  });
  top.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });

  /* ---------- Contact form ---------- */
  var form = $('#form'), msg = $('#formMsg');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = $('#name').value.trim(), phone = $('#phone').value.trim(), email = $('#email').value.trim();
    msg.className = 'msg err';
    if (!name) { msg.textContent = 'Please enter your name.'; return; }
    if (!/^[0-9+\-\s]{7,15}$/.test(phone)) { msg.textContent = 'Please enter a valid mobile number.'; return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { msg.textContent = 'Please enter a valid email address.'; return; }
    msg.className = 'msg ok';
    msg.textContent = 'Thank you! Your request has been sent.';
    form.reset();
  });
})();