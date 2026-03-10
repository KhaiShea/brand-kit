/**
 * UniQ Te Herenga Waka - Brand Identity System
 * Script: main.js
 *
 * Author:      UniQ Design Team
 * Version:     1.0.0
 * Repository:  Private - UniQ Committee access only
 * Licence:     © Copyright Khai Dye-Brinkman and The Queer Students Association of Te Herenga Waka Victoria University of Wellington Incorporated, 2026. All Rights Reserved.
 *
 * Responsibilities
 * ----------------
 *  - Active nav item highlighting via IntersectionObserver
 *  - Scroll-triggered fade-in animations for section elements
 */

const secs = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-item');
const obs = new IntersectionObserver(e => {
  e.forEach(en => {
    if (en.isIntersecting) {
      navItems.forEach(l => l.classList.remove('active'));
      const a = document.querySelector('.nav-item[href="#' + en.target.id + '"]');
      if (a) a.classList.add('active');
    }
  });
}, { threshold: 0.25 });
secs.forEach(s => obs.observe(s));

const fis = document.querySelectorAll('.fi');
const fadeObs = new IntersectionObserver(e => {
  e.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add('in'); fadeObs.unobserve(en.target); }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
fis.forEach(el => fadeObs.observe(el));
document.querySelectorAll('.cover .fi').forEach(el => setTimeout(() => el.classList.add('in'), 120));