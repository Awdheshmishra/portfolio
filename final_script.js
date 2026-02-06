// ========================================
// PORTFOLIO JAVASCRIPT - Awdhesh Mishra
// Complete functionality for HTML portfolio
// ========================================

// Projects Data
const projects = [
    {
        id: 1,
        title: "Bharat Blood Tracker",
        description: "A blood donation tracking system to help donors and receivers connect easily. Built with Java and HTML with database integration concepts.",
        date: "2025",
        technologies: ["Java", "HTML", "Database Integration"],
        githubUrl: "https://github.com/Awdheshmishra",
        liveUrl: "#",
        imageUrl: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        features: ["Donor Registration", "Blood Request Management", "Location-based Search", "Real-time Notifications"]
    },
    {
        id: 2,
        title: "Fake News Detector",
        description: "Machine learning-based classifier to detect fake vs real news using text preprocessing, NLP basics, and model evaluation techniques.",
        date: "August 2025",
        technologies: ["Python", "Machine Learning", "NLP", "Data Analysis"],
        githubUrl: "https://github.com/Awdheshmishra",
        liveUrl: "#",
        imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        features: ["Text Preprocessing", "ML Classification", "Dataset Handling", "Model Evaluation"]
    },
    {
        id: 3,
        title: "LeetCode Streak Tracker",
        description: "Python script that scrapes daily progress from LeetCode and shows notifications to maintain coding consistency.",
        date: "September 2025",
        technologies: ["Python", "Web Scraping", "BeautifulSoup", "Automation"],
        githubUrl: "https://github.com/Awdheshmishra",
        liveUrl: "#",
        imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        features: ["Progress Tracking", "Web Scraping", "Notifications", "Schedule Management"]
    },
    {
        id: 4,
        title: "Birthday-Themed Responsive Website",
        description: "Fun, interactive responsive website featuring 3D flip animations and modern web technologies for an engaging user experience.",
        date: "August 2025",
        technologies: ["HTML", "CSS", "JavaScript", "3D Animations"],
        githubUrl: "https://github.com/Awdheshmishra",
        liveUrl: "#",
        imageUrl: "https://images.unsplash.com/photo-1530319067432-f2a729c03db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        features: ["Responsive Design", "3D Animations", "Interactive UI", "Modern Styling"]
    }
];

// Global Variables
let currentProjectIndex = 0;

// ========================================
// UTILITY FUNCTIONS
// ========================================

// Show notification
function showNotification(message, type = 'success') {
    const statusDiv = document.getElementById('submitStatus');
    const statusIcon = document.getElementById('statusIcon');
    const statusMessage = document.getElementById('statusMessage');
    
    statusDiv.className = `mb-6 p-4 rounded-lg flex items-center gap-3 ${
        type === 'success' 
            ? 'bg-green-600/20 border border-green-500/30 text-green-400' 
            : 'bg-red-600/20 border border-red-500/30 text-red-400'
    }`;
    
    statusIcon.className = type === 'success' ? 'fas fa-check-circle' : 'fas fa-exclamation-circle';
    statusMessage.textContent = message;
    statusDiv.classList.remove('hidden');
    
    // Hide after 5 seconds
    setTimeout(() => {
        statusDiv.classList.add('hidden');
    }, 5000);
}

// Scroll to top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Toggle mobile menu
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuButton = document.getElementById('menuButton');
    
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        menuButton.innerHTML = '<i class="fas fa-times text-xl"></i>';
    } else {
        mobileMenu.classList.add('hidden');
        menuButton.innerHTML = '<i class="fas fa-bars text-xl"></i>';
    }
}

// ========================================
// PROJECT CAROUSEL FUNCTIONS
// ========================================

function showProject(index) {
    if (!projects[index]) return;
    
    const project = projects[index];
    const featuredProject = document.getElementById('featuredProject');
    
    featuredProject.innerHTML = `
        <div class="grid grid-cols-1 lg:grid-cols-2">
            <div class="relative h-64 lg:h-96">
                <img src="${project.imageUrl}" alt="${project.title}" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-gradient-to-r from-slate-900/20 to-transparent"></div>
            </div>
            <div class="p-8 lg:p-12 flex flex-col justify-between">
                <div>
                    <div class="flex items-center gap-2 text-slate-400 text-sm mb-3">
                        <i class="fas fa-calendar"></i>
                        <span>${project.date}</span>
                    </div>
                    <h3 class="text-2xl lg:text-3xl font-bold text-white mb-4">${project.title}</h3>
                    <p class="text-slate-300 leading-relaxed mb-6">${project.description}</p>
                    
                    <div class="mb-6">
                        <h4 class="text-sm font-semibold text-slate-400 mb-3">Technologies Used</h4>
                        <div class="flex flex-wrap gap-2">
                            ${project.technologies.map(tech => 
                                `<span class="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">${tech}</span>`
                            ).join('')}
                        </div>
                    </div>
                    
                    <div class="mb-8">
                        <h4 class="text-sm font-semibold text-slate-400 mb-3">Key Features</h4>
                        <ul class="space-y-2">
                            ${project.features.map(feature => 
                                `<li class="text-slate-300 text-sm flex items-center gap-2">
                                    <div class="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                                    ${feature}
                                </li>`
                            ).join('')}
                        </ul>
                    </div>
                </div>
                
                <div class="flex gap-4">
                    <a href="${project.githubUrl}" target="_blank" class="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition-colors duration-200">
                        <i class="fab fa-github"></i>
                        <span>Code</span>
                    </a>
                    ${project.liveUrl !== "#" ? 
                        `<a href="${project.liveUrl}" target="_blank" class="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
                            <i class="fas fa-external-link-alt"></i>
                            <span>Live Demo</span>
                        </a>` : ''
                    }
                </div>
            </div>
        </div>
    `;
    
    updateProjectIndicators();
}

function nextProject() {
    currentProjectIndex = (currentProjectIndex + 1) % projects.length;
    showProject(currentProjectIndex);
}

function prevProject() {
    currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
    showProject(currentProjectIndex);
}

function updateProjectIndicators() {
    const indicatorsContainer = document.getElementById('projectIndicators');
    indicatorsContainer.innerHTML = '';
    
    projects.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.className = `project-indicator ${index === currentProjectIndex ? 'active' : ''}`;
        indicator.onclick = () => {
            currentProjectIndex = index;
            showProject(currentProjectIndex);
        };
        indicatorsContainer.appendChild(indicator);
    });
}

function loadProjectsGrid() {
    const projectsGrid = document.getElementById('projectsGrid');
    
    projectsGrid.innerHTML = projects.map((project, index) => `
        <div class="bg-slate-800/50 rounded-xl overflow-hidden backdrop-blur-sm border ${
            index === currentProjectIndex 
                ? 'border-blue-500 transform scale-105' 
                : 'border-slate-700/50 hover:border-slate-600'
        } transition-all duration-300 cursor-pointer" onclick="selectProject(${index})">
            <div class="relative h-48">
                <img src="${project.imageUrl}" alt="${project.title}" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            </div>
            <div class="p-6">
                <div class="flex items-center gap-2 text-slate-400 text-sm mb-2">
                    <i class="fas fa-calendar"></i>
                    <span>${project.date}</span>
                </div>
                <h3 class="text-xl font-bold text-white mb-2">${project.title}</h3>
                <p class="text-slate-300 text-sm line-clamp-2 mb-4">
                    ${project.description}
                </p>
                <div class="flex flex-wrap gap-2">
                    ${project.technologies.slice(0, 3).map(tech => 
                        `<span class="bg-slate-700 text-slate-300 px-2 py-1 rounded text-xs">${tech}</span>`
                    ).join('')}
                    ${project.technologies.length > 3 ? 
                        `<span class="text-slate-400 text-xs">+${project.technologies.length - 3} more</span>` 
                        : ''
                    }
                </div>
            </div>
        </div>
    `).join('');
}

function selectProject(index) {
    currentProjectIndex = index;
    showProject(currentProjectIndex);
    loadProjectsGrid(); // Refresh grid to show selection
}

// ========================================
// CONTACT FORM
// ========================================

function handleContactForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };
    
    // Validate form data
    if (!data.name || !data.email || !data.subject || !data.message) {
        showNotification('Please fill in all required fields.', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
    }
    
    // Show loading state
    const submitButton = document.getElementById('submitButton');
    const originalHTML = submitButton.innerHTML;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Sending...</span>';
    submitButton.disabled = true;
    
    // Simulate sending message
    setTimeout(() => {
        // Reset button
        submitButton.innerHTML = originalHTML;
        submitButton.disabled = false;
        
        // Show success message
        showNotification('Message sent successfully! Awdhesh will get back to you soon.', 'success');
        
        // Reset form
        form.reset();
        
        // Log the message (for development)
        console.log('Contact Form Submission:', data);
    }, 2000);
}

// ========================================
// HEADER SCROLL EFFECT
// ========================================

function handleHeaderScroll() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('bg-slate-900/95', 'backdrop-blur-md', 'border-b', 'border-slate-700/50');
    } else {
        header.classList.remove('bg-slate-900/95', 'backdrop-blur-md', 'border-b', 'border-slate-700/50');
    }
}

// ========================================
// SMOOTH SCROLLING
// ========================================

function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobileMenu');
                if (!mobileMenu.classList.contains('hidden')) {
                    toggleMobileMenu();
                }
            }
        });
    });
}

// ========================================
// ANIMATIONS
// ========================================

function setupScrollAnimations() {
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
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// ========================================
// INITIALIZATION
// ========================================

function initPortfolio() {
    console.log('Initializing Awdhesh Mishra Portfolio...');
    
    // Set up smooth scrolling
    setupSmoothScrolling();
    
    // Set up header scroll effect
    window.addEventListener('scroll', () => {
        requestAnimationFrame(handleHeaderScroll);
    });
    
    // Set up contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Initialize projects
    if (projects.length > 0) {
        showProject(0);
        loadProjectsGrid();
        
        // Auto-rotate projects every 5 seconds
        setInterval(nextProject, 5000);
    }
    
    // Set up scroll animations
    setupScrollAnimations();
    
    // Handle window resize
    window.addEventListener('resize', () => {
        const mobileMenu = document.getElementById('mobileMenu');
        if (window.innerWidth > 768 && !mobileMenu.classList.contains('hidden')) {
            toggleMobileMenu();
        }
    });
    
    // Handle keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const mobileMenu = document.getElementById('mobileMenu');
            if (!mobileMenu.classList.contains('hidden')) {
                toggleMobileMenu();
            }
        }
        
        if (e.key === 'ArrowLeft') {
            prevProject();
        } else if (e.key === 'ArrowRight') {
            nextProject();
        }
    });
    
    console.log('Portfolio initialized successfully!');
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPortfolio);
} else {
    initPortfolio();
}