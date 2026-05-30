document.addEventListener('click', (e) => {
    // Only spawn particles if the music introduction overlay is already cleared
    if (document.getElementById("click")) return;

    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.width = '6px';
        particle.style.height = '6px';
        particle.style.background = '#ffffff';
        particle.style.boxShadow = '0 0 8px #ffffff';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.left = e.clientX + 'px';
        particle.style.top = e.clientY + 'px';
        particle.style.zIndex = '99999';
        
        // Random trajectories
        const destinationX = (Math.random() - 0.5) * 150;
        const destinationY = (Math.random() - 0.5) * 150;
        
        document.body.appendChild(particle);
        
        // Animates the micro-particles out via JavaScript Web Animations API
        particle.animate([
            { transform: 'translate(0, 0)', opacity: 1 },
            { transform: `translate(${destinationX}px, ${destinationY}px)`, opacity: 0 }
        ], {
            duration: 600 + Math.random() * 400,
            easing: 'cubic-bezier(0.1, 0.8, 0.3, 1)'
        }).onfinish = () => particle.remove();
    }
});
