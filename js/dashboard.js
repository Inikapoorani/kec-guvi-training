// ========================================
// DASHBOARD FUNCTIONS
// ========================================

// Declare variables before using them
function protectPage() {
    // Placeholder implementation
    return true;
}

function getCurrentUser() {
    // Placeholder implementation
    return { name: 'John Doe', email: 'john.doe@example.com' };
}

function getStudentCourse(studentEmail) {
    // Placeholder implementation
    return { courseName: 'Web Development', registrationDate: 'February 15, 2024', status: 'Active' };
}

/**
 * Initialize dashboard
 */
document.addEventListener('DOMContentLoaded', function() {
    if (!protectPage()) return;

    const currentUser = getCurrentUser();
    if (!currentUser) {
        window.location.href = 'login.html';
        return;
    }

    // Display student name
    document.getElementById('studentName').textContent = currentUser.name;

    // Load registered course
    loadRegisteredCourse(currentUser.email);

    // Load training schedule
    loadTrainingSchedule(currentUser.email);

    // Update registration status
    updateRegistrationStatus(currentUser.email);
});

/**
 * Load student's registered course
 */
function loadRegisteredCourse(studentEmail) {
    const registration = getStudentCourse(studentEmail);
    const registeredCourseDiv = document.getElementById('registeredCourse');

    if (registration) {
        registeredCourseDiv.innerHTML = `
            <div class="course-info-display">
                <p><strong>Course:</strong> ${registration.courseName}</p>
                <p><strong>Registration Date:</strong> ${registration.registrationDate}</p>
                <p><strong>Status:</strong> <span style="color: #27ae60; font-weight: bold;">${registration.status}</span></p>
            </div>
        `;
    } else {
        registeredCourseDiv.innerHTML = '<p class="no-data">No course registered yet</p>';
    }
}

/**
 * Load training schedule based on registered course
 */
function loadTrainingSchedule(studentEmail) {
    const registration = getStudentCourse(studentEmail);
    const scheduleDiv = document.getElementById('trainingSchedule');

    if (registration) {
        const schedules = {
            'Web Development': {
                startDate: 'March 1, 2024',
                time: '9:00 AM - 1:00 PM',
                mode: 'Online',
                duration: '10 weeks'
            },
            'Python': {
                startDate: 'March 5, 2024',
                time: '2:00 PM - 5:00 PM',
                mode: 'Offline',
                duration: '10 weeks'
            },
            'Java': {
                startDate: 'March 8, 2024',
                time: '10:00 AM - 2:00 PM',
                mode: 'Online',
                duration: '10 weeks'
            },
            'DevOps': {
                startDate: 'March 3, 2024',
                time: '3:00 PM - 6:00 PM',
                mode: 'Hybrid',
                duration: '8 weeks'
            },
            'Cloud Computing': {
                startDate: 'March 10, 2024',
                time: '9:00 AM - 12:00 PM',
                mode: 'Online',
                duration: '10 weeks'
            },
            'Data Science': {
                startDate: 'March 6, 2024',
                time: '1:00 PM - 4:00 PM',
                mode: 'Offline',
                duration: '10 weeks'
            }
        };

        const schedule = schedules[registration.courseName];
        if (schedule) {
            scheduleDiv.innerHTML = `
                <div class="schedule-info-display">
                    <p><strong>Start Date:</strong> ${schedule.startDate}</p>
                    <p><strong>Time:</strong> ${schedule.time}</p>
                    <p><strong>Mode:</strong> ${schedule.mode}</p>
                    <p><strong>Duration:</strong> ${schedule.duration}</p>
                </div>
            `;
        }
    } else {
        scheduleDiv.innerHTML = '<p class="no-data">Schedule will appear after course registration</p>';
    }
}

/**
 * Update registration status
 */
function updateRegistrationStatus(studentEmail) {
    const registration = getStudentCourse(studentEmail);
    const regStatusSpan = document.getElementById('regStatus');
    const progressSpan = document.getElementById('progressValue');

    if (registration) {
        regStatusSpan.textContent = 'Registered';
        regStatusSpan.style.color = '#27ae60';
        progressSpan.textContent = '50%';
    } else {
        regStatusSpan.textContent = 'Not Registered';
        regStatusSpan.style.color = '#e74c3c';
        progressSpan.textContent = '0%';
    }
}
