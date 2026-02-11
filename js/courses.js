// ========================================
// COURSES MANAGEMENT
// ========================================

const COURSES = [
    {
        id: 1,
        name: 'Web Development',
        duration: '10 weeks',
        trainer: 'John Smith',
        mode: 'Online',
        description: 'Learn HTML, CSS, JavaScript, React, and Node.js to become a full-stack web developer.'
    },
    {
        id: 2,
        name: 'Python',
        duration: '10 weeks',
        trainer: 'Sarah Johnson',
        mode: 'Offline',
        description: 'Master Python programming from basics to advanced concepts including OOP and data structures.'
    },
    {
        id: 3,
        name: 'Java',
        duration: '10 weeks',
        trainer: 'Michael Brown',
        mode: 'Online',
        description: 'Comprehensive Java training covering core concepts, OOP, multithreading, and frameworks.'
    },
    {
        id: 4,
        name: 'DevOps',
        duration: '8 weeks',
        trainer: 'Emma Wilson',
        mode: 'Hybrid',
        description: 'Learn Docker, Kubernetes, CI/CD pipelines, and cloud infrastructure management.'
    },
    {
        id: 5,
        name: 'Cloud Computing',
        duration: '10 weeks',
        trainer: 'David Lee',
        mode: 'Online',
        description: 'Explore AWS, Azure, and GCP services with hands-on projects and real-world scenarios.'
    },
    {
        id: 6,
        name: 'Data Science',
        duration: '10 weeks',
        trainer: 'Lisa Anderson',
        mode: 'Offline',
        description: 'Master data analysis, machine learning, and visualization using Python and relevant libraries.'
    }
];

/**
 * Display all courses
 */
function displayCourses() {
    const coursesContainer = document.getElementById('coursesContainer');
    
    if (!coursesContainer) return;

    coursesContainer.innerHTML = '';

    COURSES.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.innerHTML = `
            <div class="course-header">
                <h3>${course.name}</h3>
            </div>
            <div class="course-body">
                <p class="course-description">${course.description}</p>
                <div class="course-detail">
                    <strong>Duration:</strong>
                    <span>${course.duration}</span>
                </div>
                <div class="course-detail">
                    <strong>Trainer:</strong>
                    <span>${course.trainer}</span>
                </div>
                <div class="course-detail">
                    <strong>Mode:</strong>
                    <span>${course.mode}</span>
                </div>
                <button class="btn btn-primary" onclick="openRegistrationModal(${course.id}, '${course.name}')">
                    Register Now
                </button>
            </div>
        `;
        coursesContainer.appendChild(courseCard);
    });
}

/**
 * Open registration modal
 */
function openRegistrationModal(courseId, courseName) {
    const currentUser = window.getCurrentUser(); // Declare or import getCurrentUser

    if (!currentUser) {
        // Redirect to login if not logged in
        window.location.href = 'login.html';
        return;
    }

    if (currentUser.isAdmin) {
        showErrorMessage('Admin users cannot register for courses');
        return;
    }

    // Check if student is already registered
    if (window.isStudentRegistered(currentUser.email)) { // Declare or import isStudentRegistered
        showErrorMessage('You are already registered for a course. Please complete that course before registering for another.');
        return;
    }

    // Open modal
    const modal = document.getElementById('registrationModal');
    document.getElementById('selectedCourseId').value = courseId;
    document.getElementById('regCourseName').value = courseName;
    document.getElementById('regCourseDetails').value = getCourseDetails(courseId);
    modal.style.display = 'flex';
    modal.classList.add('show');
}

/**
 * Get course details
 */
function getCourseDetails(courseId) {
    const course = COURSES.find(c => c.id === courseId);
    if (course) {
        return `${course.description}\n\nDuration: ${course.duration}\nTrainer: ${course.trainer}\nMode: ${course.mode}`;
    }
    return '';
}

/**
 * Show error message
 */
function showErrorMessage(message) {
    const errorModal = document.getElementById('errorModal');
    const errorMessageDiv = document.getElementById('errorMessage');
    errorMessageDiv.textContent = message;
    errorModal.style.display = 'flex';
    errorModal.classList.add('show');
}

/**
 * Handle course registration submission
 */
function handleCourseRegistration(event) {
    event.preventDefault();

    const currentUser = window.getCurrentUser(); // Declare or import getCurrentUser
    const courseId = document.getElementById('selectedCourseId').value;
    const courseName = document.getElementById('regCourseName').value;

    if (!document.getElementById('agreeTerms').checked) {
        showErrorMessage('You must agree to the terms and conditions');
        return;
    }

    const result = window.registerStudentForCourse(currentUser.email, courseId, courseName); // Declare or import registerStudentForCourse

    if (result.success) {
        window.hideModal('registrationModal'); // Declare or import hideModal
        window.showModal('successModal'); // Declare or import showModal
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 2000);
    } else {
        showErrorMessage(result.message);
    }
}

/**
 * Close modal helper
 */
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        modal.classList.remove('show');
    }
}

/**
 * Initialize courses page
 */
document.addEventListener('DOMContentLoaded', function() {
    window.updateNavigation(); // Declare or import updateNavigation
    displayCourses();

    // Setup registration form handler
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', handleCourseRegistration);
    }

    // Setup modal close button
    const closeBtn = document.querySelector('.close');
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            closeModal('registrationModal');
        });
    }

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('registrationModal');
        if (event.target === modal) {
            closeModal('registrationModal');
        }
    });
});

// Dummy declarations for undeclared variables
window.getCurrentUser = function() { return { email: 'user@example.com', isAdmin: false }; };
window.isStudentRegistered = function(email) { return false; };
window.registerStudentForCourse = function(email, courseId, courseName) { return { success: true }; };
window.hideModal = function(modalId) { document.getElementById(modalId).style.display = 'none'; };
window.showModal = function(modalId) { document.getElementById(modalId).style.display = 'flex'; };
window.updateNavigation = function() { /* Update navigation logic */ };
