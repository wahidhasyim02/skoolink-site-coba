
    document.addEventListener("DOMContentLoaded", () => {
        const fallback = "/img/default.png"; // Ganti ke default.png jika kamu pakai .png

        document.querySelectorAll("img").forEach(img => {
            const rawSrc = img.getAttribute("src") || "";
            const cleanedSrc = rawSrc.trim();

            const isReallyBadSrc =
                cleanedSrc === "" ||
                cleanedSrc === "%20" ||
                /^(\s*|\/?%20)$/.test(rawSrc);

            // Kasus src kosong atau tidak valid
            if (isReallyBadSrc) {
                console.warn(`🔍 src kosong/tidak valid (${rawSrc}), set default`);
                img.src = fallback;
                img.classList.add("fallback-applied");
            }

            // Gagal dimuat sebelum event error sempat dipasang
            if (img.complete && img.naturalWidth === 0) {
                console.warn(`⚠️ Gambar gagal dimuat sejak awal: ${img.src}, ganti default`);
                if (!img.classList.contains("fallback-applied")) {
                    img.src = fallback;
                    img.classList.add("fallback-applied");
                }
            }

            // Gagal dimuat setelah render
            img.onerror = () => {
                if (img.src !== fallback && !img.classList.contains("fallback-applied")) {
                    console.warn(`❌ Gagal muat gambar: ${img.src}, ganti default`);
                    img.src = fallback;
                    img.classList.add("fallback-applied");
                }
            };
        });
    }); 



  const fonts = [
    { name: 'Inter', google: 'https://fonts.googleapis.com/css2?family=Inter&display=swap' },
    { name: 'Kanit', google: 'https://fonts.googleapis.com/css2?family=Kanit&display=swap' },
    { name: 'Rubik', google: 'https://fonts.googleapis.com/css2?family=Rubik&display=swap' }
  ];

  fonts.forEach(font => {
    if (!document.fonts.check(`1em ${font.name}`)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = font.google;
      document.head.appendChild(link);
    }
  }); 