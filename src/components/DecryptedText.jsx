import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion"; 
// Note: Pastikan kamu install 'framer-motion'. 
// Jika kamu pakai library 'motion', ubah import di atas jadi: from "motion/react"

export default function DecryptedText({
  text,
  speed = 50, // Kecepatan ngacak huruf
  revealSpeed = 50, // Opsional (tidak dipakai di logika baru ini, tapi biar ga error kalau ada props sisa)
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*",
  className = "",
  parentClassName = "",
  encryptedClassName = "",
  animateOn = "view", // view | hover
}) {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false); // Agar animasi cuma jalan sekali

  // Fungsi helper: Ambil karakter acak
  const getRandomChar = () => characters[Math.floor(Math.random() * characters.length)];

  const startScan = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    let iteration = 0; // Posisi "Scan Line" (Kursor)

    intervalRef.current = setInterval(() => {
      setDisplayText(() => {
        return text
          .split("")
          .map((char, index) => {
            // LOGIKA UTAMA:
            // Jika posisi huruf (index) lebih kecil dari iterasi, TAMPILKAN HURUF ASLI
            if (index < iteration) {
              return text[index];
            }
            // Jika tidak, tampilkan HURUF ACAK
            return getRandomChar();
          })
          .join("");
      });

      // Kecepatan gerak scan ke kanan.
      // Angka 1/3 artinya: Tiap 3 kali ganti huruf acak, kursor maju 1 langkah.
      // Ubah jadi 1/2 atau 1 kalau mau lebih cepat scanning-nya.
      iteration += 1/3; 

      // Stop jika semua sudah terbuka
      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
        setDisplayText(text);
      }
    }, speed);
  };

  useEffect(() => {
    // Logic untuk trigger animasi (View atau Hover)
    if (animateOn === "view") {
        // Langsung jalan saat di-load
        startScan();
    }
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text, animateOn]);

  // Handler jika ingin animasi ulang saat hover (opsional)
  const handleMouseEnter = () => {
      if (animateOn === "hover") startScan();
  };

  return (
    <span 
        className={parentClassName} 
        onMouseEnter={handleMouseEnter}
    >
      <span className={className}>
        {displayText.split("").map((char, index) => {
          const isRevealed = char === text[index];
          return (
            <span
              key={index}
              className={isRevealed ? className : encryptedClassName}
            >
              {char}
            </span>
          );
        })}
      </span>
    </span>
  );
}