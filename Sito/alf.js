document.addEventListener('DOMContentLoaded', function() {
    
    document.querySelectorAll('.scroll-link').forEach(link => {
        link.addEventListener('click', function(event) {
            
            event.preventDefault();

            
            const targetId = this.getAttribute('href').substring(1);

            
            const targetSection = document.getElementById(targetId);

            
            targetSection.scrollIntoView({ behavior: 'smooth' });

            
            if (targetId === 'about-us-section') {
                resetAboutUsAnimation();
            }
        });
    });

    
    function resetAboutUsAnimation() {
        const teamSection = document.getElementById('team-section');
        teamSection.style.animation = 'none';
        void teamSection.offsetWidth; 
        teamSection.style.animation = null;
    }
});



