document.addEventListener('DOMContentLoaded', function() {
    const flowerAnimation = document.getElementById('flower-animation');
    const landing = document.getElementById('landing');
    const stamens = document.querySelectorAll('.stamen');
    const reflectionSpaces = document.querySelectorAll('.reflection-space');
    const backButtons = document.querySelectorAll('.back-button');
    const aboutLink = document.getElementById('about-link');
    const hoverWrappers = document.querySelectorAll('.hover-wrapper');
    
    // Make stamens visible after a delay
    setTimeout(() => {
        stamens.forEach(stamen => {
            stamen.style.opacity = '1';
        });
    }, 2000);
    
    // Image hover effect
    hoverWrappers.forEach(wrapper => {
        const hoverText = wrapper.querySelector('.hover-text');
        
        wrapper.addEventListener('mouseenter', function() {
            if (hoverText) hoverText.style.opacity = '1';
        });
        
        wrapper.addEventListener('mouseleave', function() {
            if (hoverText) hoverText.style.opacity = '0.6';
        });
    });
    
    // Handle back buttons
    backButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Hide reflection spaces
            reflectionSpaces.forEach(space => {
                space.style.display = 'none';
            });
            
            // Reset animation
            flowerAnimation.style.transform = 'scale(1)';
            
        });
    });
    
    // Handle about link
    aboutLink.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Hide landing page
        landing.style.opacity = '0';
        landing.style.pointerEvents = 'none';
        
        // Show about section
        document.getElementById('about').style.display = 'flex';
    });
});