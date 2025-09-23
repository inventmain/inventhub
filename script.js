document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const faqItem = button.parentElement;
            const answer = button.nextElementSibling;
            const icon = button.querySelector('.icon');
            const isActive = faqItem.classList.contains('active');

            // Close all other FAQs for a cleaner accordion effect
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove('active');
                    item.querySelector('.faq-answer').style.maxHeight = 0;
                    item.querySelector('.icon').classList.remove('fa-minus');
                    item.querySelector('.icon').classList.add('fa-plus');
                }
            });

            // Toggle the clicked FAQ
            if (!isActive) {
                faqItem.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
            } else {
                faqItem.classList.remove('active');
                answer.style.maxHeight = 0;
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
            }
        });
    });
});