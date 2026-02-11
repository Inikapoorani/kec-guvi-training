// ========================================
// ADMIN DASHBOARD
// ========================================

let studentToDelete = null;

// Declare protectAdminPage function
function protectAdminPage() {
    // Placeholder implementation
    return true;
}

/**
 * Initialize admin dashboard
 */
document.addEventListener('DOMContentLoaded', function() {
    if (!protectAdminPage()) return;

    // Load admin data
    loadAdminData();

    // Setup tab switching
    setupTabSwitching();

    // Setup search functionality
    setupSearch();

    // Setup delete confirmation
    setupDeleteConfirmation();
});

/**
 * Load admin dashboard data
 */
function loadAdminData() {
    updateStats();
    displayAllStudents();
    displayCourseWise();
}

/**
 * Update admin statistics
 */
function updateStats() {
    const users = getAllUsers();
    const registrations = getAllRegistrations();
    const registeredCount = registrations.length;

    document.getElementById('totalStudents').textContent = users.length;
    document.getElementById('registeredCount').textContent = registeredCount;
}

/**
 * Display all students in table
 */
function displayAllStudents() {
    const users = getAllUsers();
    const tbody = document.getElementById('studentsTableBody');

    if (users.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" class="no-data">No students found</td></tr>';
        return;
    }

    tbody.innerHTML = '';

    users.forEach(user => {
        const registration = getStudentCourse(user.email);
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.registerNo}</td>
            <td>${user.department}</td>
            <td>${registration ? registration.courseName : 'Not Registered'}</td>
            <td>
                ${registration ? `<button class="btn btn-small" style="background-color: #e74c3c; color: white;" onclick="confirmDelete('${registration.id}', '${user.name}')">Remove</button>` : '-'}
            </td>
        `;
        tbody.appendChild(row);
    });
}

/**
 * Display course-wise student list
 */
function displayCourseWise() {
    const container = document.getElementById('courseWiseContainer');
    const registrations = getAllRegistrations();
    const courses = {};

    // Group registrations by course
    registrations.forEach(reg => {
        if (!courses[reg.courseName]) {
            courses[reg.courseName] = [];
        }
        courses[reg.courseName].push(reg);
    });

    container.innerHTML = '';

    if (Object.keys(courses).length === 0) {
        container.innerHTML = '<p class="no-data" style="text-align: center; padding: 40px;">No students registered for any course</p>';
        return;
    }

    Object.keys(courses).forEach(courseName => {
        const registrations = courses[courseName];
        const section = document.createElement('div');
        section.className = 'course-section';

        let tableHTML = `
            <h3>${courseName}</h3>
            <p>Total Students: <strong>${registrations.length}</strong></p>
            <table class="admin-table">
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Email</th>
                        <th>Register No.</th>
                        <th>Department</th>
                        <th>Registration Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
        `;

        registrations.forEach(reg => {
            const user = findUserByEmail(reg.studentEmail);
            if (user) {
                tableHTML += `
                    <tr>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                        <td>${user.registerNo}</td>
                        <td>${user.department}</td>
                        <td>${reg.registrationDate}</td>
                        <td>
                            <button class="btn btn-small" style="background-color: #e74c3c; color: white;" onclick="confirmDelete('${reg.id}', '${user.name}')">Remove</button>
                        </td>
                    </tr>
                `;
            }
        });

        tableHTML += `
                </tbody>
            </table>
        `;

        section.innerHTML = tableHTML;
        container.appendChild(section);
    });
}

/**
 * Find user by email
 */
function findUserByEmail(email) {
    const users = getAllUsers();
    return users.find(u => u.email === email);
}

/**
 * Get all users from localStorage
 */
function getAllUsers() {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
}

/**
 * Setup tab switching functionality
 */
function setupTabSwitching() {
    const buttons = document.querySelectorAll('.tab-button');
    const panes = document.querySelectorAll('.tab-pane');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons and panes
            buttons.forEach(btn => btn.classList.remove('active'));
            panes.forEach(pane => pane.classList.remove('active'));

            // Add active class to clicked button and corresponding pane
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

/**
 * Setup search functionality
 */
function setupSearch() {
    const searchInput = document.getElementById('searchInput');

    if (searchInput) {
        searchInput.addEventListener('keyup', function() {
            const searchTerm = this.value.toLowerCase();
            const tbody = document.getElementById('studentsTableBody');
            const rows = tbody.querySelectorAll('tr');

            rows.forEach(row => {
                const cells = row.querySelectorAll('td');
                let match = false;

                cells.forEach(cell => {
                    if (cell.textContent.toLowerCase().includes(searchTerm)) {
                        match = true;
                    }
                });

                row.style.display = match ? '' : 'none';
            });
        });
    }
}

/**
 * Confirm delete action
 */
function confirmDelete(registrationId, studentName) {
    studentToDelete = { id: registrationId, name: studentName };
    showModal('deleteModal');
}

/**
 * Setup delete confirmation handler
 */
function setupDeleteConfirmation() {
    const confirmBtn = document.getElementById('confirmDeleteBtn');

    if (confirmBtn) {
        confirmBtn.addEventListener('click', function() {
            if (studentToDelete) {
                deleteStudentRegistration(studentToDelete.id);
                hideModal('deleteModal');

                // Show success message
                const successModal = document.getElementById('successModal');
                const successMessage = document.getElementById('successMessage');
                successMessage.textContent = `${studentToDelete.name}'s registration has been removed.`;
                showModal('successModal');

                // Reload data
                setTimeout(() => {
                    location.reload();
                }, 2000);
            }
        });
    }
}

// Declare showModal and hideModal functions
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
}

function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

/**
 * Helper functions from auth.js
 */
function getStudentCourse(email) {
    const registrations = localStorage.getItem('registrations');
    const regList = registrations ? JSON.parse(registrations) : [];
    return regList.find(r => r.studentEmail === email);
}

function getAllRegistrations() {
    const registrations = localStorage.getItem('registrations');
    return registrations ? JSON.parse(registrations) : [];
}

function deleteStudentRegistration(registrationId) {
    const registrations = localStorage.getItem('registrations');
    const regList = registrations ? JSON.parse(registrations) : [];
    const filteredList = regList.filter(r => r.id !== registrationId);
    localStorage.setItem('registrations', JSON.stringify(filteredList));
}
