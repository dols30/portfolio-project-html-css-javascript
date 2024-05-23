function toggleMenu(){
    const menu= document.querySelector(".menu-links");
    const icon= document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
    }
    document.getElementById('dark-mode-toggle').addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        // Save preference to local storage
        if (document.body.classList.contains('dark-mode')) {
          localStorage.setItem('theme', 'dark');
          document.getElementById('dark-mode-toggle').src = './assets/icon-dark.png'; // Path to dark mode icon
    
        } else {
          localStorage.setItem('theme', 'light');
          document.getElementById('dark-mode-toggle').src = './assets/icon-light.png'; // Path to dark mode icon
    
        }
      });
      
      // Check saved preference on load
      window.addEventListener('load', function() {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
          document.body.classList.add('dark-mode');
          document.getElementById('dark-mode-toggle').src = './assets/icon-dark.png'; // Path to dark mode icon
    
        }else{
            document.getElementById('dark-mode-toggle').src = './assets/icon-light.png'; // Path to dark mode icon
    
        }
      });
      