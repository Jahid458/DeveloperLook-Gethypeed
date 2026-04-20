/* eslint-disable @next/next/no-img-element */
"use client";

import styles from "../../../styles/BrandCarousel.module.css";

const logos = [
  { src: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/68c1952f22281ee50d3620b5_zclv.svg", alt: "Brand 1" },
  { src: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/69241146b4df63c4ca966552_Bullit%20Digital.svg", alt: "Brand 2" },
  { src: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/68c194e6d1b186563459b107_morssinkhof.svg", alt: "Brand 3" },
  { src: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d88f755388cc2c74ecff_salontopper.svg", alt: "Brand 4" },
  { src: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d880bed5996600cbc586_seesing-flex.svg", alt: "Brand 5" },
  { src: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d86cd6ba384af3c14e58_graafschap-college.svg", alt: "Brand 6" },
  { src: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d85341bf0d7476e56a8c_fides.svg",  alt: "Brand 7" },
  { src: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d838fc5735f090bd9843_SRHK.svg", alt: "Brand 8" },
  { src: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d81e72e08110e3fd1a17_knltb.svg", alt: "Brand 9" },
  { src: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/684c05642bf8f5cea7384403_de-talententuin.svg", alt: "Brand 10" },
];

export default function BrandCarousel() {
  const doubled = [...logos, ...logos]; 
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        These brands<br />got hyped.
      </h2>
      <div className={styles.trackWrap}>
        <div className={styles.track}>
          {doubled.map((logo, i) => (
            <div key={i} className={styles.card}>
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
        <hr className={styles.hr} />
      </div>
    </section>
  );
}