// ========================================
// AUTHENTICATION FUNCTIONS
// ========================================

const ADMIN_EMAIL = 'admin@kec-guvi.com';
const ADMIN_PASSWORD = 'admin123';

/**
 * Get all users from localStorage
 */
function getAllUsers() {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
}

/**
 * Save user to localStorage
 */
function saveUser(userData) {
    const users = getAllUsers();
    const userExists = users.some(u => u.email === userData.email);
    
    if (userExists) {
        return false; // User already exists
    }
    
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
    return true;
}

/**
 * Find user by email
 */
function findUserByEmail(email) {
    const users = getAllUsers();
    return users.find(u => u.email === email);
}

/**
 * Get current logged-in user
 */
function getCurrentUser() {
    const user = sessionStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
}

/**
 * Set current logged-in user
 */
function setCurrentUser(user) {
    sessionStorage.setItem('currentUser', JSON.stringify(user));
}

/**
 * Clear current logged-in user
 */
function clearCurrentUser() {
    sessionStorage.removeItem('currentUser');
}

/**
 * Check if user is logged in
 */
function isLoggedIn() {
    return getCurrentUser() !== null;
}

/**
 * Check if current user is admin
 */
function isAdmin() {
    const user = getCurrentUser();
    return user && user.isAdmin === true;
}

/**
 * Login user
 */
function loginUser(email, password) {
    // Check for admin login
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        const adminUser = {
            email: ADMIN_EMAIL,
            name: 'Administrator',
            isAdmin: true
        };
        setCurrentUser(adminUser);
        return { success: true, isAdmin: true };
    }

    // Check for student login
    const user = findUserByEmail(email);
    if (user && user.password === password) {
        const loggedInUser = {
            id: user.id,
            email: user.email,
            name: user.name,
            registerNo: user.registerNo,
            department: user.department,
            year: user.year,
            isAdmin: false
        };
        setCurrentUser(loggedInUser);
        return { success: true, isAdmin: false };
    }

    return { success: false };
}

/**
 * Logout user
 */
function logoutUser() {
    clearCurrentUser();
}

/**
 * Get student's registered course
 */
function getStudentCourse(email) {
    const registrations = localStorage.getItem('registrations');
    const regList = registrations ? JSON.parse(registrations) : [];
    return regList.find(r => r.studentEmail === email);
}

/**
 * Check if student is already registered for a course
 */
function isStudentRegistered(email) {
    return getStudentCourse(email) !== undefined;
}

/**
 * Register student for a course
 */
function registerStudentForCourse(studentEmail, courseId, courseName) {
    // Check if already registered
    if (isStudentRegistered(studentEmail)) {
        return { success: false, message: 'You are already registered for a course' };
    }

    const registrations = localStorage.getItem('registrations');
    const regList = registrations ? JSON.parse(registrations) : [];

    const registration = {
        id: Date.now().toString(),
        studentEmail: studentEmail,
        courseId: courseId,
        courseName: courseName,
        registrationDate: new Date().toLocaleDateString(),
        status: 'Active'
    };

    regList.push(registration);
    localStorage.setItem('registrations', JSON.stringify(regList));
    return { success: true, registration: registration };
}

/**
 * Update student registration
 */
function updateStudentRegistration(email, courseId, courseName) {
    const registration = getStudentCourse(email);
    if (registration) {
        registration.courseId = courseId;
        registration.courseName = courseName;
        const registrations = localStorage.getItem('registrations');
        const regList = JSON.parse(registrations);
        const index = regList.findIndex(r => r.studentEmail === email);
        if (index !== -1) {
            regList[index] = registration;
            localStorage.setItem('registrations', JSON.stringify(regList));
        }
    }
}

/**
 * Delete student registration (admin function)
 */
function deleteStudentRegistration(registrationId) {
    const registrations = localStorage.getItem('registrations');
    const regList = registrations ? JSON.parse(registrations) : [];
    const filteredList = regList.filter(r => r.id !== registrationId);
    localStorage.setItem('registrations', JSON.stringify(filteredList));
}

/**
 * Get all registrations
 */
function getAllRegistrations() {
    const registrations = localStorage.getItem('registrations');
    return registrations ? JSON.parse(registrations) : [];
}

/**
 * Protect page - redirect to login if not logged in
 */
function protectPage() {
    if (!isLoggedIn()) {
        window.location.href = 'login.html';
        return false;
    }
    return true;
}

/**
 * Protect admin page
 */
function protectAdminPage() {
    if (!isLoggedIn() || !isAdmin()) {
        window.location.href = 'login.html';
        return false;
    }
    return true;
}

/**
 * Update navigation based on login status
 */
function updateNavigation() {
    const user = getCurrentUser();
    const loginLink = document.getElementById('loginLink');
    const logoutLink = document.getElementById('logoutLink');
    const dashboardLink = document.getElementById('dashboardLink');
    const logoutBtn = document.getElementById('logoutBtn');
    const logoutBtn2 = document.getElementById('logoutBtn2');

    if (user) {
        if (loginLink) loginLink.style.display = 'none';
        if (logoutLink) logoutLink.style.display = 'block';
        if (dashboardLink && !user.isAdmin) dashboardLink.style.display = 'block';

        // Logout button handler
        if (logoutBtn) {
            logoutBtn.addEventListener('click', function(e) {
                e.preventDefault();
                logoutUser();
                window.location.href = 'index.html';
            });
        }
        if (logoutBtn2) {
            logoutBtn2.addEventListener('click', function(e) {
                e.preventDefault();
                logoutUser();
                window.location.href = 'index.html';
            });
        }
    } else {
        if (loginLink) loginLink.style.display = 'block';
        if (logoutLink) logoutLink.style.display = 'none';
        if (dashboardLink) dashboardLink.style.display = 'none';
    }
}

/**
 * Handle signup form submission
 */
document.addEventListener('DOMContentLoaded', function() {
    updateNavigation();

    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                registerNo: document.getElementById('registerNo').value,
                department: document.getElementById('department').value,
                year: document.getElementById('year').value,
                password: document.getElementById('password').value,
                confirmPassword: document.getElementById('confirmPassword').value
            };

            if (validateSignupForm(formData)) {
                // Check if email already exists
                if (findUserByEmail(formData.email)) {
                    showError('email', 'Email already registered');
                    return;
                }

                const newUser = {
                    id: Date.now().toString(),
                    name: formData.name,
                    email: formData.email,
                    registerNo: formData.registerNo,
                    department: formData.department,
                    year: formData.year,
                    password: formData.password, // In production, should be hashed
                    registrationDate: new Date().toLocaleDateString()
                };

                if (saveUser(newUser)) {
                    showModal('successModal');
                    setTimeout(() => {
                        window.location.href = 'login.html';
                    }, 2000);
                } else {
                    showError('email', 'User with this email already exists');
                }
            }
        });
    }

    // Handle login form submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            if (validateLoginForm(email, password)) {
                const result = loginUser(email, password);
                if (result.success) {
                    if (result.isAdmin) {
                        window.location.href = 'admin.html';
                    } else {
                        window.location.href = 'dashboard.html';
                    }
                } else {
                    document.getElementById('errorMessage').textContent = 'Invalid email or password';
                    document.getElementById('errorMessage').style.display = 'block';
                }
            }
        });
    }

    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = {
                name: document.getElementById('contactName').value,
                email: document.getElementById('contactEmail').value,
                phone: document.getElementById('contactPhone').value,
                subject: document.getElementById('contactSubject').value,
                message: document.getElementById('contactMessage').value
            };

            if (validateContactForm(formData)) {
                // Save contact message to localStorage
                const messages = localStorage.getItem('contactMessages');
                const msgList = messages ? JSON.parse(messages) : [];
                msgList.push({
                    id: Date.now().toString(),
                    ...formData,
                    date: new Date().toLocaleDateString()
                });
                localStorage.setItem('contactMessages', JSON.stringify(msgList));

                contactForm.reset();
                showModal('successModal');
                setTimeout(() => {
                    hideModal('successModal');
                }, 3000);
            }
        });
    }
});

// Declare missing functions
function validateSignupForm(formData) {
    // Implement signup form validation logic here
    return formData.password === formData.confirmPassword;
}

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorElement = document.createElement('div');
    errorElement.className = 'error';
    errorElement.textContent = message;
    field.parentNode.insertBefore(errorElement, field.nextSibling);
}

function showModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
}

function validateLoginForm(email, password) {
    // Implement login form validation logic here
    return email && password;
}

function validateContactForm(formData) {
    // Implement contact form validation logic here
    return formData.name && formData.email && formData.phone && formData.subject && formData.message;
}

function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}
