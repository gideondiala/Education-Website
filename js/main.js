// COURSE CATEGORY FILTER
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button state:
        document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.remove('active', 'btn-primary');
            b.classList.add('btn-outline-secondary');
        });
        btn.classList.add('active', 'btn-primary');
        btn.classList.remove('btn-outline-secondary');

        const filter = btn.dataset.filter;
        document.querySelectorAll('.course-card-wrapper').forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.classList.remove('d-none');
            } else {
                card.classList.add('d-none');
            }
        });
    });
});

// ENROLMENT FORM VALIDATION + MODAL TRIGGER
const enrolForm = document.getElementById('enrol-form');
if (enrolForm) {
    enrolForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        const firstName = document.getElementById('first-name');
        if (firstName.value.trim().length < 2) {
            firstName.classList.add('is-invalid');
            isValid = false;
        } else {
            firstName.classList.remove('is-invalid');
            firstName.classList.add('is-valid');
        }

        const lastName = document.getElementById('last-name');
        if (lastName.value.trim().length < 2) {
            lastName.classList.add('is-invalid');
            isValid = false;
        } else {
            lastName.classList.remove('is-invalid');
            lastName.classList.add('is-valid');
        }

        const email = document.getElementById('enrol-email');
        if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            email.classList.add('is-invalid');
            isValid = false;
        } else {
            email.classList.remove('is-invalid');
            email.classList.add('is-valid');
        }

        const courseSelect = document.getElementById('course-select');
        if (!courseSelect.value) {
            courseSelect.classList.add('is-invalid');
            isValid = false;
        } else {
            courseSelect.classList.remove('is-invalid');
            courseSelect.classList.add('is-valid');
        }

        const terms = document.getElementById('terms');
        if (!terms.checked) {
            terms.classList.add('is-invalid');
            isValid = false;
        } else {
            terms.classList.remove('is-invalid');
            terms.classList.add('is-valid');
        }

        if (isValid) {
            const courseName = courseSelect.options[courseSelect.selectedIndex].text;
            document.getElementById('modal-course-name').textContent = courseName;
            new bootstrap.Modal(document.getElementById('enrol-confirm-modal')).show();
            e.target.reset();
            document.querySelectorAll('.is-valid').forEach(el => el.classList.remove('is-valid'));
        }
    });
}

// FOOTER YEAR
const lbYear = document.getElementById('lb-year');
if (lbYear) {
    lbYear.textContent = new Date().getFullYear();
}
