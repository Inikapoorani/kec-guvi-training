// ========================================
// VALIDATION FUNCTIONS
// ========================================

/**
 * Validate email format
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Validate password requirements
 */
function isValidPassword(password) {
    return password && password.length >= 6;
}

/**
 * Validate non-empty field
 */
function isEmpty(value) {
    return !value || value.trim() === '';
}

/**
 * Show error message for form field
 */
function showError(fieldId, message) {
    const errorElement = document.getElementById(fieldId + 'Error');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

/**
 * Clear error message for form field
 */
function clearError(fieldId) {
    const errorElement = document.getElementById(fieldId + 'Error');
    if (errorElement) {
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }
}

/**
 * Show modal
 */
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('show');
        modal.style.display = 'flex';
    }
}

/**
 * Hide modal
 */
function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('show');
        modal.style.display = 'none';
    }
}

/**
 * Close modals when clicking outside
 */
function setupModalCloseHandlers() {
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.classList.remove('show');
            event.target.style.display = 'none';
        }
    });

    // Close button handlers
    const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            if (modal) {
                modal.classList.remove('show');
                modal.style.display = 'none';
            }
        });
    });
}

/**
 * Validate signup form
 */
function validateSignupForm(formData) {
    let isValid = true;

    // Validate Name
    if (isEmpty(formData.name)) {
        showError('name', 'Full name is required');
        isValid = false;
    } else {
        clearError('name');
    }

    // Validate Email
    if (isEmpty(formData.email)) {
        showError('email', 'Email is required');
        isValid = false;
    } else if (!isValidEmail(formData.email)) {
        showError('email', 'Please enter a valid email');
        isValid = false;
    } else {
        clearError('email');
    }

    // Validate Register Number
    if (isEmpty(formData.registerNo)) {
        showError('registerNo', 'Register number is required');
        isValid = false;
    } else {
        clearError('registerNo');
    }

    // Validate Department
    if (isEmpty(formData.department)) {
        showError('department', 'Department is required');
        isValid = false;
    } else {
        clearError('department');
    }

    // Validate Year
    if (isEmpty(formData.year)) {
        showError('year', 'Year is required');
        isValid = false;
    } else {
        clearError('year');
    }

    // Validate Password
    if (!isValidPassword(formData.password)) {
        showError('password', 'Password must be at least 6 characters');
        isValid = false;
    } else {
        clearError('password');
    }

    // Validate Password Match
    if (formData.password !== formData.confirmPassword) {
        showError('confirmPassword', 'Passwords do not match');
        isValid = false;
    } else if (isEmpty(formData.confirmPassword)) {
        showError('confirmPassword', 'Please confirm your password');
        isValid = false;
    } else {
        clearError('confirmPassword');
    }

    return isValid;
}

/**
 * Validate login form
 */
function validateLoginForm(email, password) {
    let isValid = true;

    if (isEmpty(email)) {
        document.getElementById('errorMessage').textContent = 'Email is required';
        document.getElementById('errorMessage').style.display = 'block';
        isValid = false;
    } else if (!isValidEmail(email)) {
        document.getElementById('errorMessage').textContent = 'Please enter a valid email';
        document.getElementById('errorMessage').style.display = 'block';
        isValid = false;
    }

    if (isEmpty(password)) {
        document.getElementById('errorMessage').textContent = 'Password is required';
        document.getElementById('errorMessage').style.display = 'block';
        isValid = false;
    }

    return isValid;
}

/**
 * Validate contact form
 */
function validateContactForm(formData) {
    let isValid = true;

    if (isEmpty(formData.name)) {
        showError('contactName', 'Name is required');
        isValid = false;
    } else {
        clearError('contactName');
    }

    if (isEmpty(formData.email)) {
        showError('contactEmail', 'Email is required');
        isValid = false;
    } else if (!isValidEmail(formData.email)) {
        showError('contactEmail', 'Please enter a valid email');
        isValid = false;
    } else {
        clearError('contactEmail');
    }

    if (isEmpty(formData.subject)) {
        showError('contactSubject', 'Subject is required');
        isValid = false;
    } else {
        clearError('contactSubject');
    }

    if (isEmpty(formData.message)) {
        showError('contactMessage', 'Message is required');
        isValid = false;
    } else {
        clearError('contactMessage');
    }

    return isValid;
}

/**
 * Initialize form validation on page load
 */
document.addEventListener('DOMContentLoaded', function() {
    setupModalCloseHandlers();
});
