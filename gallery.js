 window.onload = function() {
      if(localStorage.getItem('isLoggedIn') !== 'true') {
        alert('Please login first!');
        window.location.href = 'login.html';
        return;
      }
      
      // Images list for full gallery
      const images = [
        { src: 'assets/gojo2.jpeg', alt: 'Wallpaper 1' },
        { src: 'wallpapers/apod4.jpeg', alt: 'Wallpaper 2' },
        { src: 'wallpapers/archd2.jpeg', alt: 'Wallpaper 3' },
        { src: 'wallpapers/bleach2.jpg', alt: 'Wallpaper 3' },
        { src: 'wallpapers/castlevania1.jpeg', alt: 'Wallpaper 4' },
         { src: 'wallpapers/itachi3.jpeg', alt: 'Wallpaper 3' },
        { src: 'assets/tanji1.jpeg', alt: 'Wallpaper 5' },
        // Add more images here...
        { src: 'wallpapers/apod2.jpeg', alt: 'Wallpaper 1' },
        { src: 'wallpapers/archd1.jpeg', alt: 'Wallpaper 2' },
        { src: 'wallpapers/bb3.jpg', alt: 'Wallpaper 3' },
         { src: 'wallpapers/codegeass1.jpeg', alt: 'Wallpaper 1' },
        { src: 'wallpapers/dn.jpeg', alt: 'Wallpaper 2' },
        { src: 'wallpapers/casvania2.jpg', alt: 'Wallpaper 3' },
         { src: 'wallpapers/chainsaw3.jpeg', alt: 'Wallpaper 1' },
        { src: 'wallpapers/dn3.jpeg', alt: 'Wallpaper 2' },

          { src: 'wallpapers/goku2.jpeg', alt: 'Wallpaper 3' },
           { src: 'assets/sukuneon.jpeg', alt: 'Wallpaper 3' },

        { src: 'wallpapers/uppermoons.jpeg', alt: 'Wallpaper 3' },
         { src: 'wallpapers/luffy4.jpeg', alt: 'Wallpaper 1' },
        { src: 'wallpapers/zoro.jpeg', alt: 'Wallpaper 2' },
        { src: 'wallpapers/sukuart.jpeg', alt: 'Wallpaper 3' },
         { src: 'wallpapers/solobhoot.jpeg', alt: 'Wallpaper 1' },
        { src: 'wallpapers/myheroaca.jpeg', alt: 'Wallpaper 2' },
        { src: 'wallpapers/onepiece1.jpeg', alt: 'Wallpaper 3' },
         { src: 'wallpapers/narukaka.jpeg', alt: 'Wallpaper 1' },
        { src: 'wallpapers/narusau2.jpeg', alt: 'Wallpaper 2' },
        { src: 'wallpapers/ns3.jpeg', alt: 'Wallpaper 3' },
        { src: 'wallpapers/hashira.jpeg', alt: 'Wallpaper 2' },
        { src: 'wallpapers/jira2.jpeg', alt: 'Wallpaper 3' },
        { src: 'wallpapers/eren2.jpeg', alt: 'Wallpaper 2' },
        { src: 'wallpapers/jinwoo6.jpeg', alt: 'Wallpaper 3' },

         { src: 'wallpapers/mikasa.jpeg', alt: 'Wallpaper 3' },
          { src: 'wallpapers/muzan.avif', alt: 'Wallpaper 3' },
         { src: 'wallpapers/narukaka.jpeg', alt: 'Wallpaper 3' },
          { src: 'wallpapers/itachi.jpeg', alt: 'Wallpaper 3' },
           { src: 'wallpapers/igiris.jpeg', alt: 'Wallpaper 3' },
           { src: 'wallpapers/jira1.jpeg', alt: 'Wallpaper 3' },
           { src: 'wallpapers/goku.jpeg', alt: 'Wallpaper 3' },
           { src: 'wallpapers/akaza.jpeg', alt: 'Wallpaper 3' },


        
      ];
      
      const gallery = document.getElementById('fullGallery');
      images.forEach(image => {
        const card = document.createElement('div');
        card.className = 'image-wrapper';
        card.innerHTML = `
          <img src="${image.src}" alt="${image.alt}" />
          <div class="overlay">
            <button class="like-btn">❤️ Like</button>
            <a href="${image.src}" download class="download-btn">⬇️ Download</a>
          </div>
        `;
        gallery.appendChild(card);
      });

      // Like button toggle
      gallery.addEventListener('click', function(e) {
        if (e.target.classList.contains('like-btn')) {
          e.stopPropagation();
          const btn = e.target;
          if (btn.textContent.includes('❤️')) {
            btn.textContent = '💔 Unlike';
            btn.style.backgroundColor = '#999';
          } else {
            btn.textContent = '❤️ Like';
            btn.style.backgroundColor = '#ff235a';
          }
        }
      });
    }