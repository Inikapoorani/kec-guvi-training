// ========================================
// PROFILE MANAGEMENT
// ========================================

/**
 * Initialize profile page
 */
document.addEventListener('DOMContentLoaded', function() {
    const currentUser = getCurrentUser();
    if (!currentUser) {
        window.location.href = 'login.html';
        return;
    }

    // Load profile data
    loadProfileData(currentUser);

    // Load registered course
    loadRegisteredCourseInfo(currentUser.email);

    // Setup form submission
    setupProfileFormHandler(currentUser);

    // Setup password change
    setupPasswordChangeHandler(currentUser);
});

/**
 * Load profile data into form
 */
function loadProfileData(currentUser) {
    document.getElementById('profileName').value = currentUser.name;
    document.getElementById('profileEmail').value = currentUser.email;
    document.getElementById('profileRegisterNo').value = currentUser.registerNo || '';
    document.getElementById('profileDepartment').value = currentUser.department || '';
    document.getElementById('profileYear').value = currentUser.year || '';
}

/**
 * Load registered course information
 */
function loadRegisteredCourseInfo(studentEmail) {
    const courseInfoDiv = document.getElementById('registeredCourseInfo');
    const registration = getStudentCourse(studentEmail);

    if (registration) {
        courseInfoDiv.innerHTML = `
            <div style="background-color: #e8f5e9; padding: 20px; border-radius: 5px; border-left: 4px solid #27ae60;">
                <p><strong style="color: #27ae60;">✓ Course Registered</strong></p>
                <p><strong>Course Name:</strong> ${registration.courseName}</p>
                <p><strong>Registration Date:</strong> ${registration.registrationDate}</p>
                <p><strong>Status:</strong> ${registration.status}</p>
            </div>
        `;
    }
}

/**
 * Setup profile form submission handler
 */
function setupProfileFormHandler(currentUser) {
    const profileForm = document.getElementById('profileForm');

    if (profileForm) {
        profileForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const updatedData = {
                ...currentUser,
                name: document.getElementById('profileName').value,
                registerNo: document.getElementById('profileRegisterNo').value,
                department: document.getElementById('profileDepartment').value,
                year: document.getElementById('profileYear').value
            };

            // Validate fields
            if (!updatedData.name.trim()) {
                alert('Name is required');
                return;
            }

            // Update user in localStorage
            const users = getAllUsers();
            const userIndex = users.findIndex(u => u.email === currentUser.email);
            if (userIndex !== -1) {
                users[userIndex] = {
                    ...users[userIndex],
                    name: updatedData.name,
                    registerNo: updatedData.registerNo,
                    department: updatedData.department,
                    year: updatedData.year
                };
                localStorage.setItem('users', JSON.stringify(users));
            }

            // Show success message
            const successModal = document.getElementById('successModal');
            const successMessage = document.getElementById('successMessage');
            successMessage.textContent = 'Profile updated successfully!';
            showModal('successModal');
        });
    }
}

/**
 * Setup password change handler
 */
function setupPasswordChangeHandler(currentUser) {
    const passwordForm = document.getElementById('passwordForm');

    if (passwordForm) {
        passwordForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const currentPassword = document.getElementById('currentPassword').value;
            const newPassword = document.getElementById('newPassword').value;
            const confirmNewPassword = document.getElementById('confirmNewPassword').value;

            // Clear previous errors
            clearError('currentPassword');
            clearError('newPassword');
            clearError('confirmNewPassword');

            // Validate current password
            const user = findUserByEmail(currentUser.email);
            if (!user || user.password !== currentPassword) {
                showError('currentPassword', 'Current password is incorrect');
                return;
            }

            // Validate new password
            if (!isValidPassword(newPassword)) {
                showError('newPassword', 'Password must be at least 6 characters');
                return;
            }

            // Validate password match
            if (newPassword !== confirmNewPassword) {
                showError('confirmNewPassword', 'Passwords do not match');
                return;
            }

            // Update password in localStorage
            const users = getAllUsers();
            const userIndex = users.findIndex(u => u.email === currentUser.email);
            if (userIndex !== -1) {
                users[userIndex].password = newPassword;
                localStorage.setItem('users', JSON.stringify(users));
            }

            // Show success message
            const successModal = document.getElementById('successModal');
            const successMessage = document.getElementById('successMessage');
            successMessage.textContent = 'Password changed successfully!';
            showModal('successModal');

            // Close password modal and reset form
            hideModal('passwordModal');
            passwordForm.reset();

            // Reload page after 2 seconds
            setTimeout(() => {
                location.reload();
            }, 2000);
        });
    }
}

/**
 * Helper: Get all users from localStorage
 */
function getAllUsers() {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
}

/**
 * Helper: Get current user from localStorage
 */
function getCurrentUser() {
    const users = getAllUsers();
    const currentUserEmail = localStorage.getItem('currentUserEmail');
    return users.find(u => u.email === currentUserEmail);
}

/**
 * Helper: Get student course registration from localStorage
 */
function getStudentCourse(studentEmail) {
    const registrations = localStorage.getItem('registrations');
    return registrations ? JSON.parse(registrations).find(r => r.studentEmail === studentEmail) : null;
}

/**
 * Helper: Set current user in localStorage
 */
function setCurrentUser(updatedData) {
    localStorage.setItem('currentUserEmail', updatedData.email);
}

/**
 * Helper: Show modal
 */
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
}

/**
 * Helper: Hide modal
 */
function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

/**
 * Helper: Clear error message
 */
function clearError(elementId) {
    const errorElement = document.getElementById(elementId + 'Error');
    if (errorElement) {
        errorElement.textContent = '';
    }
}

/**
 * Helper: Show error message
 */
function showError(elementId, errorMessage) {
    const errorElement = document.getElementById(elementId + 'Error');
    if (errorElement) {
        errorElement.textContent = errorMessage;
    }
}

/**
 * Helper: Validate password
 */
function isValidPassword(password) {
    return password.length >= 6;
}
