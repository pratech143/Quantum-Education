const fs = require('fs');

const path = 'f:/Desktop/Quantum Education/Frontend/src/data/countryData.json';
const data = JSON.parse(fs.readFileSync(path, 'utf8'));

// Inject Colleges data for Australia
data.australia.colleges = [
  {
    name: "Technical Institute of Victoria",
    location: "Melbourne",
    desc: "Providing industry-relevant vocational training in engineering, construction, and sustainable technologies.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAr_epQ0Vfc9VApb72ZHZLxNvghSVwAcPu3q7w_T8vcjZr5iwbiTcDqF_sz4lIGby7I56TWVAAIUIDiE7G8n7iAVfndj3AYFFzeNr6IqhwG-gJv-66FRD6kpBWCoSkQr5jc1BG2iyPWf_ScsaZ5w62rdzVASqzlwKepQhGtog2ZCe-NUdrYvD8Lw2I5kY76jS5ZVW8mC1sz0UMn8UVi4xXatEXC9kU_ZiOmr3NUMvmXGUuMtZIFxTV_rg4X6qc14s3Fwp-WT7mHtn0"
  },
  {
    name: "Pacific College of Technology",
    location: "Sydney",
    desc: "A premier destination for information technology, business management, and digital innovation programs.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEyqB2GzQAyToU6cH2zN4fJ1A5NOlOmRP7bEmAw61TMIGe3a6dmlybyZNuYn8R87ecKPzYQDtBqNRPUhR1wl68bWxDGBgZTl91pEIEQdvdAicDGgaPQpbURTTQDQ64VqriS3bfewlY0zOeQIy0H6fhdvRoNhH_15C_C7C-yDb4B53TEUIhhtf-CT7oxXBuC2yX_QrIqZ1evLIyb2Axl5c6Vuz6hVqvFVOm9GsRDW-1ngyZBdHoVfnNXmDf6RLYC46bEJiCaWYyDlw"
  },
  {
    name: "Academy of Culinary Arts",
    location: "Brisbane",
    desc: "Excellence in hospitality and culinary arts, focusing on professional skill development and global placements.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgWbkQbYb9wV3Ugf2v5tMVLIF3dHdCUEuUtO08kveOagDbA179phtvEc9B7tNv63lJ1HzuF-7y73Tn_GsCw8W5hjur14PuMFBzq34JZGQ3SQQ6vau1IrhFmgNh0--oEx9_JF2byZp72HFZqzQvVxcxwz-PYrJzHlMMPMS0HsmEs2FT_P-MPUTfDJ_dslOE99TvEFb-K8H1HT4wHFPU1gxvsN3-s56Nd8AHN3F3OMaNQDnl0vvo8SCB7YzFY_y2bqRdWofJ7lLamp4"
  },
  {
    name: "Health Careers Australia",
    location: "Adelaide",
    desc: "Specialized vocational training for nursing, aged care, and community health services with clinical placements.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7gEnBeEwa68Gc14yE7N4LGOjjkJbi8Em4OfBO8iU6YyK9GrHMsvt_8DeI_mNEyUjTwG-zx68TGC9Ycdf4FF7uNTR1TTxIbcIxZN6GbUIbG5yd49HJ6ETAxTvII9ALV0d8dhBR0owaI8I-3CmKp5eXNaZiivRLiYez3VNi2vi_YX1ivJjP_aWcQEezn1gJz6baW7A1Xq5WrRFbgARmfnV2Zw5OqH3SnMo9dOGXuVxcX7x6vUDlwx-Y1QWMz-hYzKSdkkiSsSPjTWY"
  },
  {
    name: "Creative Design College",
    location: "Perth",
    desc: "Nurturing creative talent through industry-led programs in graphic design, animation, and visual arts.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBW1JAwD7Yn2veii_WFI1YLXWBbhPyJ1Ks53V7cISy22u4KseiMFgt4XdWDqGGhEge7c5GljYwXqTIq55EeN-ju2VpmDd9jArBVcLL07VzurRnIOjIZs4SHyrOJRj2EfGO_25sRQYqOGzemDrDrL6qkMhNfyQ1Xe7PdDW1TwR51TAZdTeNGUZgoQ0Ycn9N21pEEde--3J9EY_5mWuMMULJzBbHH_qvaIle8bUPBkihAhvHVSxd_igLVe6Z73X_7GItdwS9SRk0Cx80"
  },
  {
    name: "Global Business Academy",
    location: "Gold Coast",
    desc: "Empowering future leaders with practical business management and leadership qualifications.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkH-EX6RT7dtGJUNFO_MopSyO6McD-4epN30KxdNYv5-ezk7c3ILKYp2xvLWcRFoI-RMcgSI4cvnHkoBG34PKKmfbGOAdSxodvPY88ZMCtdqSdgfk0dVfunHvWIW4-TSDLa5vNC50J5z4dRhKtvExee7DzcDvP6HvDIbWrI1XYMofd83XGrs2j-iQ25i6LjKGPexk6gwZjFQXnUvVKN7nLvtAa4UQfX8qYBReKf333AyxEC7L7ngADRlZjGpyCRwdISXTcBceYeGw"
  }
];

// Update universities for Australia
data.australia.universities = [
  {
    name: "University of Melbourne",
    location: "Victoria",
    desc: "A global leader in research and teaching, consistently ranked as the number one university in Australia.",
    qs: "#14",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBONdyWp98dja6bdquwGL6OOBcfaNTS1YfO47JDmkNYZ47QSV1wbiKNjI08XnXbPVb9QSldMnx-i8_cCUt55vgzQuIV9BXiOy1w6bXCEoM8sZM1R0W5JR_C7bbxM0VZQ7ux2ROAhe6mwV9Eq1jgCxGaUY-HP02u8VLsbs95emvPdck8YWPPHh06LIAdFO74Kh6yXpgwecTVdI-PZCXZ-40L2ncolkIH1kAxjZ2vRHMhafsgXdQyqKaIm4YhxhrsUTesNT62kJXS6ZY",
    tagline: "#1 in Australia • Research Focused"
  },
  {
    name: "University of Sydney",
    location: "NSW",
    desc: "Australia’s first university, known for its heritage campus and commitment to challenging the status quo.",
    qs: "#19",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmjPSO7wLYt7F91hOzL3adI1OJUm7XT1-vPlIlGsEiuDacRBi0TyUQEEJxpRCT6_pjBBy6DjDtk8c8ga3RDr4spczrEyixtd9GOGeMvD1TNUzw0JNQiW7MdTHYq7tX1DpLq3EXVjjzZO1siGMAGSKb7lntMuP5oFdfKV7_99u3GSK-p-wCG0_vJ3W1xtCWrj7IbF99pRv8mze-Anu7qBVrCb5KH1UpWWUiRlD1k2-CTb7_rePr9w1ObeyChbQiMhBiecP9VDtx83Y",
    tagline: "Traditional Excellence • Global Network"
  },
  {
    name: "Australian National University",
    location: "ACT",
    desc: "A world-leading center for research and education located in the heart of the nation's capital.",
    qs: "#34",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsOfmbxtLJcfinsdSn4BRm2IAn6V7clz5Ujlyi8n8Q4yBX46JMMLh9-lxEtdXhy5uV8HP-en5vOE03EXlkQNO_Au568GXFw26PKJpimMr6Gfeq3F3SOLWjXMuB4EadStGRTlQ-cGH-oyLkh6_VlPX6SvEUVssGIjtFHONTx0FO8Y7bZMbgecU-iMInl9-VpS4LDBNa_HQgWVg3FjLSQtsWlNeT2cIzsp_THCWtXWPRFsQXwhSxsh7ZlqK-AwKGHO5ESDQNDYxiHNA",
    tagline: "National Prestige • Policy & Law"
  },
  {
    name: "La Trobe University",
    location: "Victoria",
    desc: "Renowned for its commitment to social impact and excellence in health, humanities, and research.",
    qs: "#242",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKH8Ix09G3hgIiace3ANuIL7eurWmSS8A34WjNViRPoBzM-anHlh3BVz7mstrEibD602TSsJSqa9DyhWb_7P1Ci13wQVrb9vr4p5dmyLHs-f69BQBzodrtEosQ0vIbuxcAp9j5UkpcViLZG6YGTkTpysvS8a_YFAApCScd6rfCtc7PzGlBZ2Mbby8A9zPqNzZ-0UsmlcHNBl6_6-CwweRL5P2LeWJfo_2zdKZ_6deW6WW8O-d_NR9FokoF8TaMZN-_xq-vkNdxaT4",
    tagline: "Health & Science Leader"
  },
  {
    name: "UNSW Sydney",
    location: "NSW",
    desc: "A powerhouse of innovation and entrepreneurship, focusing on high-impact research and career-ready graduates.",
    qs: "#19",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSJiLZY_YWbjJbyqHEliA3Z0z78R9p-_1HhYZNPc0PhZK_Go8sYBxVyh2vNRQuPgxWeAZS6p4GyTURGvNpwdoiw6EfWGG-882Oj2jeIHW8DW2XGoIge1wbi3QrweKfisJDGijA_R-X6b6ci4a_ZjwqjR-8zkPRA4NickIWxEKJuCKX_hBgPJfw0vwyvVAX32R0FlNMh2kJfWIoCXmzeaKtEnST0kuYUKSNzJcAmMBFFhIBoWN75QgLG-QZKnhVHizFFmySvJXSFW4",
    tagline: "Innovation & Tech"
  },
  {
    name: "Monash University",
    location: "Victoria",
    desc: "The largest university in Australia, offering a truly international perspective and pioneering research facilities.",
    qs: "#42",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnOscsQKUcY_4-ytUnQqn1SXPVnrG0jl7Ghv_vRPIvu0hNXOpq9b-wSgr_gLabMTQU3khZUum71VVQWmQPRrrMHJPgRke4AjEOC4A_u_TDC--orrl0epT_FTZYR85lBfuS1rEdArpgkbiaCjEMIV6nYgVCVEtjiblBKZrkeKcjhvM9yvtdOiLa_ubfbh62beeZlNMt4OEO8Pz1PoKnRyPUfuzcfQVGHvqSJNQyE4THb6Au3t5PgLdR4IrAqK-UvT_s2JePJ5cxSRo",
    tagline: "Pioneering Research"
  }
];

// Provide barebones mappings for USA, Canada, UK, Germany so they don't break the component
const genericCols = [
  {
    name: "Coming Soon College",
    location: "Various",
    desc: "More partner colleges are being added for this country.",
    img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop"
  }
];

['unitedstates', 'unitedkingdom', 'canada', 'germany'].forEach(ctry => {
  if (data[ctry]) {
    data[ctry].colleges = genericCols;
    
    // Update existing universities with missing keys
    if (data[ctry].universities) {
      data[ctry].universities = data[ctry].universities.map(u => ({
        ...u,
        location: "National",
        desc: u.tagline || "Top ranked prestigious institution.",
        qs: "Top 100",
        img: u.image || "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop"
      }));
    }
  }
});

fs.writeFileSync(path, JSON.stringify(data, null, 2), 'utf8');
console.log('JSON updated successfully with colleges and new uni fields');
