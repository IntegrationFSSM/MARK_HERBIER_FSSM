// ===== Navigation Scroll Effect =====
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== Mobile Navigation Toggle =====
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// ===== Active Navigation Link on Scroll =====
const sections = document.querySelectorAll('section[id]');

function activateNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', activateNavLink);

// ===== Smooth Scroll for Navigation Links =====
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Scroll to Top Button =====
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== Intersection Observer for Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
const animatedElements = document.querySelectorAll(
    '.mission-card, .activite-card, .projet-card, .stat-card, .objectif-card, .equipe-card, .publication-item, .timeline-item'
);

animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// ===== Publications Data =====
const publications = [
    {year: 2025, authors: "D'Ambrosio, U., Hassani, O. S., Ait Babahmad, R., Aghraz, A., Aakairi, M., M'Sou, S., ... & Teixidor-Toneu, I.", title: "Conserving and regenerating the High Atlas cultural landscapes: gendered perspectives from the local Amazigh communities.", journal: "Environmental Development, 101313."},
    {year: 2025, authors: "Rankou, H., Ait Babahmad, R., Msou, S., Aghraz, A., Caruso, E., D'Ambrosio, U., ... & Ouhammou, A.", title: "IUCN Red List conservation assessment uncovers a high level of extinction risk to the High Atlas biodiversity hotspots.", journal: "Botanical Journal of the Linnean Society, boae085."},
    {year: 2024, authors: "Soldal, H., Múrcia, C., Ouhammou, A., Hawkins, J. A., Martin, G. J., Puri, R. K., & Teixidor-Toneu, I.", title: "Plant names encode Tašlḥit knowledge of Morocco's high atlas landscapes.", journal: "Human Ecology, 52(2), 369-381."},
    {year: 2023, authors: "Zine, H., Hakkou, R., Elmansour, A., Elgadi, S., Ouhammou, A., & Benzaazoua, M.", title: "Native plant diversity for ecological reclamation in Moroccan open-pit phosphate mines.", journal: "Biodiversity Data Journal, 11, e104592."},
    {year: 2023, authors: "Moujane, A., Outourakhte, A., Gharnit, Y., Ouigmane, A., Boulli, A., & Ouhammou, A.", title: "Geographical distribution of the Thuriferous juniper (Juniperus thurifera L.) and the influencing factors in the Atlas Mountains of Azilal (Central High Atlas, Morocco).", journal: "Geology, Ecology, and Landscapes, 1-12."},
    {year: 2023, authors: "Ben Lekbir, A., Ihitassen, A., Elgadi, S., Hafidi, M., Ouhammou, A., & Alifriqui, M.", title: "Characterization of honeys produced in the center-west of Morocco (Ait Baâmrane of Sidi Ifini) using melissopalynology.", journal: "Applied Ecology & Environmental Research, 21(3)."},
    {year: 2023, authors: "Bernis-Fonteneau, A., Aakairi, M., Saadani-Hassani, O., Castangia, G., Ait Babahmad, R., Colangelo, P., ... & Jarvis, D. I.", title: "Farmers' variety naming and crop varietal diversity of two cereal and three legume species in the Moroccan High Atlas, using DATAR.", journal: "Sustainability, 15(13), 10411."},
    {year: 2022, authors: "Ghanimi, R., Ouhammou, A., Ahouach, A., & Cherkaoui, M.", title: "Ethnobotanical study on wild edible plants traditionally used by Messiwa people, Morocco.", journal: "Journal of Ethnobiology and Ethnomedicine, 18(1), 16."},
    {year: 2022, authors: "Ghanimi, R., Ouhammou, A., El Atki, Y., Bouchari, M. E. H., & Cherkaoui, M.", title: "The antioxidant activities of ethanolic, methanolic, ethyl acetate, and aqueous extracts of the endemic species, Lavandula mairei Humbert (a comparative study between cold and hot extraction).", journal: "Ethiopian journal of health sciences, 32(6)."},
    {year: 2022, authors: "El Berkaoui, M., El Adnani, M., Hakkou, R., Ouhammou, A., Bendaou, N., & Smouni, A.", title: "Assessment of the transfer of trace metals to spontaneous plants on abandoned pyrrhotite mine: potential application for phytostabilization of phosphate wastes.", journal: "Plants, 11(2), 179."},
    {year: 2022, authors: "Ghanimi, R., Ouhammou, A., El Atki, Y., & Cherkaoui, M.", title: "Molecular docking study of the main phytochemicals of some medicinal plants used against COVID-19 by the rural population of Al-Haouz region, Morocco.", journal: "J Pharm Pharmacogn Res, 10(2), 227-238."},
    {year: 2022, authors: "Teixidor-Toneu, I., M'Sou, S., Salamat, H., Baskad, H. A., Illigh, F. A., Atyah, T., ... & D'Ambrosio, U.", title: "Which plants matter? A comparison of academic and community assessments of plant value and conservation status in the Moroccan High Atlas.", journal: "Ambio, 51(3), 799-810."},
    {year: 2022, authors: "Yous, F. Z., Lekbır, A. B., Zıne, H., Alıfrıquı, M., & Ouhammou, A.", title: "Floristic Diversity Analysis of Ait Baâmrane Region‒Sidi Ifni Province, in South-Central Morocco and The Ecological Factors That Control and Influence Its Geographic Distribution.", journal: "Kastamonu University Journal of Forestry Faculty, 22(2), 94-111."},
    {year: 2021, authors: "Ghanimi, R., Ouhammou, A., El Atki, Y., & Cherkaoui, M.", title: "Antioxidant and antibacterial activities of essential oils from three Moroccan species (Lavandula mairei Humbert, Lavandula dentata L. and, Lavandula stoechas L.).", journal: "Lazaroa, 33, 64-71."},
    {year: 2021, authors: "Mghazli, N., Sbabou, L., Hakkou, R., Ouhammou, A., El Adnani, M., & Bruneel, O.", title: "Description of microbial communities of phosphate mine wastes in Morocco, a semi-arid climate, using high-throughput sequencing and functional prediction.", journal: "Frontiers in microbiology, 12, 666936."},
    {year: 2021, authors: "El Alaoui, A., Raklami, A., Bechtaoui, N., El Gharmali, A., Ouhammou, A., Imziln, B., ... & Oufdou, K.", title: "Use of native plants and their associated bacteria rhizobiomes to remediate-restore Draa Sfar and Kettara mining sites, Morocco.", journal: "Environmental monitoring and assessment, 193, 1-14."},
    {year: 2021, authors: "Elgadi, S., Ouhammou, A., Zine, H., Maata, N., Ait Babahmad, R., & El Antari, A.", title: "Comparative oil composition study of the endemic Moroccan olive (Olea europaea subsp. maroccana) and wild olive (var. Sylvestris) in Central West Morocco.", journal: "Journal of Food Quality, 2021(1), 8869060."},
    {year: 2021, authors: "Teixidor-Toneu, I., Elgadi, S., Zine, H., Manzanilla, V., Ouhammou, A., & D'Ambrosio, U.", title: "Medicines in the kitchen: gender roles shape ethnobotanical knowledge in Marrakshi households.", journal: "Foods, 10(10), 2332."},
    {year: 2021, authors: "El Berkaoui, M., El Adnani, M., Hakkou, R., Ouhammou, A., Bendaou, N., & Smouni, A.", title: "Phytostabilization of phosphate mine wastes used as a store-and-release cover to control acid mine drainage in a semiarid climate.", journal: "Plants, 10(5), 900."},
    {year: 2021, authors: "Elgadi, S., Ouhammou, A., Taous, F., Zine, H., Papazoglou, E. G., Elghali, T., ... & El Antari, A.", title: "Combination of stable isotopes and fatty acid composition for geographical origin discrimination of one argan oil vintage.", journal: "Foods, 10(6), 1274."},
    {year: 2021, authors: "Zine, H., Ibrahimi, M., Loqman, S., Papazoglou, E. G., Ouhaddou, S., Elgadi, S., ... & Ouhammou, A.", title: "Chemical composition, antioxidant, and antibacterial activities of essential oil of Atriplex semibaccata R. Br. aerial parts: First assessment against multidrug-resistant bacteria.", journal: "Agronomy, 11(2), 362."},
    {year: 2020, authors: "Zine, H., Midhat, L., Hakkou, R., El Adnani, M., & Ouhammou, A.", title: "Guidelines for a phytomanagement plan by the phytostabilization of mining wastes.", journal: "Scientific African, 10, e00654."},
    {year: 2020, authors: "Zine, H., Elgadi, S., Hakkou, R., Papazoglou, E. G., Midhat, L., & Ouhammou, A.", title: "Wild plants for the phytostabilization of phosphate mine waste in semi-arid environments: a field experiment.", journal: "Minerals, 11(1), 42."}
];

let currentDisplayCount = 5;

function displayPublications(count) {
    const publicationsList = document.getElementById('publicationsList');
    publicationsList.innerHTML = '';
    
    const pubsToShow = publications.slice(0, count);
    
    pubsToShow.forEach(pub => {
        const pubItem = document.createElement('div');
        pubItem.className = 'publication-item';
        pubItem.innerHTML = `
            <div class="pub-year">${pub.year}</div>
            <div class="pub-content">
                <p class="pub-authors">${pub.authors}</p>
                <p class="pub-title">${pub.title}</p>
                <p class="pub-journal">${pub.journal}</p>
            </div>
        `;
        publicationsList.appendChild(pubItem);
    });
    
    // Update button
    const showMoreBtn = document.getElementById('showMorePubs');
    if (count >= publications.length) {
        showMoreBtn.style.display = 'none';
    } else {
        showMoreBtn.style.display = 'inline-block';
        showMoreBtn.textContent = `Voir plus (${publications.length - count} restantes)`;
    }
}

// Initial display
displayPublications(currentDisplayCount);

// Show More button
document.getElementById('showMorePubs').addEventListener('click', () => {
    currentDisplayCount += 5;
    displayPublications(currentDisplayCount);
});

// ===== Counter Animation for Stats =====
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const updateCounter = () => {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start).toLocaleString();
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target.toLocaleString();
        }
    };
    
    updateCounter();
}

// Observe stats section for counter animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                const number = parseInt(text.replace(/[^0-9]/g, ''));
                
                if (!isNaN(number) && number > 0) {
                    stat.textContent = '0';
                    setTimeout(() => {
                        animateCounter(stat, number);
                        // Add back the + or % if it was there
                        setTimeout(() => {
                            if (text.includes('+')) {
                                stat.textContent = stat.textContent + '+';
                            } else if (text.includes('%')) {
                                stat.textContent = stat.textContent + '%';
                            }
                        }, 2000);
                    }, 200);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const collectionSection = document.querySelector('.collection-section');
if (collectionSection) {
    statsObserver.observe(collectionSection);
}

// ===== Parallax Effect for Hero Section =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / 500);
    }
});

// ===== Add hover effect to zone tags =====
const zoneTags = document.querySelectorAll('.zone-tag');
zoneTags.forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// ===== Add hover effect to partenaire tags =====
const partenaireTags = document.querySelectorAll('.partenaire-tag');
partenaireTags.forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05) translateY(-3px)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) translateY(0)';
    });
});

// ===== Loading Animation =====
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===== Prevent default behavior for empty links =====
document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    });
});

// ===== Add active state to current section =====
function updateActiveSection() {
    const fromTop = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');

        if (fromTop >= sectionTop && fromTop < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveSection);

// ===== Initialize on page load =====
document.addEventListener('DOMContentLoaded', () => {
    // Set initial active link
    updateActiveSection();
    
    // Add smooth scroll behavior to all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

// ===== Add print styles trigger =====
window.addEventListener('beforeprint', () => {
    // Expand all collapsed sections before printing
    publicationItems.forEach(item => {
        item.style.display = 'flex';
    });
});

window.addEventListener('afterprint', () => {
    // Restore original state after printing
    if (!showingAllPubs) {
        publicationItems.forEach((item, index) => {
            if (index >= 5) {
                item.style.display = 'none';
            }
        });
    }
});

console.log('Herbier MARK - Site web chargé avec succès! 🌿');
