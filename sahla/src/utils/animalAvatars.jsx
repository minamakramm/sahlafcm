import React from 'react';

const ANIMAL_SVGS = [
  // 1. Cat — premium detailed portrait with layered fur, expressive eyes, refined anatomy
  (color) => (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Ambient fur aura */}
      <path d="M34 68 C31 44 42 26 60 24 C78 22 90 38 88 60 C87 78 80 94 70 102 C64 107 56 107 50 102 C42 96 36 86 34 68Z"
            stroke={color} strokeWidth="0.4" strokeDasharray="2 4" opacity="0.12" fill="none"/>

      {/* Main head — smooth organic shape */}
      <path d="M32 66 C30 44 40 26 60 24 C80 22 92 38 90 60 C89 78 82 94 72 102 C66 107 54 107 48 102 C40 96 34 86 32 66Z"
            stroke={color} strokeWidth="2.2" strokeLinecap="round" fill="none"/>

      {/* Left ear — outer with thickness */}
      <path d="M34 54 L20 18 L52 42" stroke={color} strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none"/>
      {/* Left ear — inner structure */}
      <path d="M33 50 L24 24 L48 42" stroke={color} strokeWidth="1" strokeLinejoin="round" opacity="0.45" fill="none"/>
      {/* Left ear — inner ridge lines */}
      <line x1="24" y1="32" x2="36" y2="42" stroke={color} strokeWidth="0.5" opacity="0.3"/>
      <line x1="22" y1="38" x2="34" y2="46" stroke={color} strokeWidth="0.45" opacity="0.25"/>
      <line x1="26" y1="28" x2="38" y2="40" stroke={color} strokeWidth="0.4" opacity="0.2"/>

      {/* Right ear — outer */}
      <path d="M88 54 L100 18 L70 42" stroke={color} strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none"/>
      {/* Right ear — inner structure */}
      <path d="M89 50 L96 24 L72 42" stroke={color} strokeWidth="1" strokeLinejoin="round" opacity="0.45" fill="none"/>
      <line x1="96" y1="32" x2="84" y2="42" stroke={color} strokeWidth="0.5" opacity="0.3"/>
      <line x1="98" y1="38" x2="86" y2="46" stroke={color} strokeWidth="0.45" opacity="0.25"/>
      <line x1="94" y1="28" x2="82" y2="40" stroke={color} strokeWidth="0.4" opacity="0.2"/>

      {/* Forehead fur — crown detail */}
      <path d="M52 36 C54 30 60 27 60 27 C60 27 66 30 68 36" stroke={color} strokeWidth="0.9" opacity="0.35" fill="none" strokeLinecap="round"/>
      <path d="M55 34 C56 30 60 28 60 28" stroke={color} strokeWidth="0.6" opacity="0.22" fill="none" strokeLinecap="round"/>
      <path d="M65 34 C64 30 60 28 60 28" stroke={color} strokeWidth="0.6" opacity="0.22" fill="none" strokeLinecap="round"/>
      <line x1="58" y1="32" x2="57" y2="38" stroke={color} strokeWidth="0.4" opacity="0.18"/>
      <line x1="62" y1="32" x2="63" y2="38" stroke={color} strokeWidth="0.4" opacity="0.18"/>

      {/* Cheek fur — left */}
      <line x1="28" y1="62" x2="36" y2="64" stroke={color} strokeWidth="0.5" opacity="0.22"/>
      <line x1="27" y1="68" x2="35" y2="69" stroke={color} strokeWidth="0.5" opacity="0.2"/>
      <line x1="28" y1="74" x2="36" y2="74" stroke={color} strokeWidth="0.45" opacity="0.18"/>
      <line x1="29" y1="80" x2="36" y2="79" stroke={color} strokeWidth="0.4" opacity="0.15"/>
      {/* Cheek fur — right */}
      <line x1="92" y1="62" x2="84" y2="64" stroke={color} strokeWidth="0.5" opacity="0.22"/>
      <line x1="93" y1="68" x2="85" y2="69" stroke={color} strokeWidth="0.5" opacity="0.2"/>
      <line x1="92" y1="74" x2="84" y2="74" stroke={color} strokeWidth="0.45" opacity="0.18"/>
      <line x1="91" y1="80" x2="84" y2="79" stroke={color} strokeWidth="0.4" opacity="0.15"/>

      {/* Left eye — detailed almond with iris, pupil, catchlights */}
      <path d="M43 58 C46 52 56 52 56 58 C56 64 46 64 43 58Z" stroke={color} strokeWidth="1.8" fill="none"/>
      {/* Iris ring */}
      <circle cx="50" cy="58" r="3.5" stroke={color} strokeWidth="0.6" opacity="0.4" fill="none"/>
      {/* Pupil — vertical slit */}
      <ellipse cx="50" cy="58" rx="1.6" ry="3.8" fill={color} opacity="0.85"/>
      {/* Primary catchlight */}
      <circle cx="52" cy="56" r="1.1" fill={color} opacity="0.2"/>
      {/* Secondary catchlight */}
      <circle cx="48" cy="60" r="0.6" fill={color} opacity="0.12"/>
      {/* Upper lid line */}
      <path d="M44 56 C47 53 54 53 56 56" stroke={color} strokeWidth="0.5" opacity="0.3" fill="none"/>

      {/* Right eye */}
      <path d="M64 58 C67 52 77 52 77 58 C77 64 67 64 64 58Z" stroke={color} strokeWidth="1.8" fill="none"/>
      <circle cx="71" cy="58" r="3.5" stroke={color} strokeWidth="0.6" opacity="0.4" fill="none"/>
      <ellipse cx="71" cy="58" rx="1.6" ry="3.8" fill={color} opacity="0.85"/>
      <circle cx="73" cy="56" r="1.1" fill={color} opacity="0.2"/>
      <circle cx="69" cy="60" r="0.6" fill={color} opacity="0.12"/>
      <path d="M65 56 C68 53 75 53 77 56" stroke={color} strokeWidth="0.5" opacity="0.3" fill="none"/>

      {/* Nose — refined inverted triangle */}
      <path d="M56 72 L60 77 L64 72 Q61 69 60 69 Q59 69 56 72Z" fill={color} stroke="none" opacity="0.85"/>
      <path d="M56.5 73.5 L63.5 73.5" stroke={color} strokeWidth="0.4" opacity="0.3" strokeLinecap="round"/>
      {/* Nose bridge */}
      <line x1="60" y1="65" x2="60" y2="69" stroke={color} strokeWidth="0.5" opacity="0.15"/>

      {/* Philtrum + mouth */}
      <line x1="60" y1="77" x2="60" y2="80" stroke={color} strokeWidth="1.1" strokeLinecap="round" opacity="0.75"/>
      <path d="M54 80 Q60 87 66 80" stroke={color} strokeWidth="1.6" strokeLinecap="round" fill="none"/>

      {/* Whisker pads — small bumps */}
      <ellipse cx="52" cy="76" rx="3" ry="2" stroke={color} strokeWidth="0.5" opacity="0.2" fill="none"/>
      <ellipse cx="68" cy="76" rx="3" ry="2" stroke={color} strokeWidth="0.5" opacity="0.2" fill="none"/>

      {/* Whiskers left */}
      <line x1="14" y1="66" x2="50" y2="72" stroke={color} strokeWidth="0.7" opacity="0.6" strokeLinecap="round"/>
      <line x1="12" y1="73" x2="50" y2="76" stroke={color} strokeWidth="0.8" opacity="0.7" strokeLinecap="round"/>
      <line x1="13" y1="80" x2="50" y2="79" stroke={color} strokeWidth="0.7" opacity="0.6" strokeLinecap="round"/>
      <line x1="16" y1="86" x2="52" y2="82" stroke={color} strokeWidth="0.5" opacity="0.4" strokeLinecap="round"/>

      {/* Whiskers right */}
      <line x1="106" y1="66" x2="70" y2="72" stroke={color} strokeWidth="0.7" opacity="0.6" strokeLinecap="round"/>
      <line x1="108" y1="73" x2="70" y2="76" stroke={color} strokeWidth="0.8" opacity="0.7" strokeLinecap="round"/>
      <line x1="107" y1="80" x2="70" y2="79" stroke={color} strokeWidth="0.7" opacity="0.6" strokeLinecap="round"/>
      <line x1="104" y1="86" x2="68" y2="82" stroke={color} strokeWidth="0.5" opacity="0.4" strokeLinecap="round"/>

      {/* Chin fur detail */}
      <path d="M52 102 C56 106 60 108 64 106" stroke={color} strokeWidth="0.6" opacity="0.25" fill="none" strokeLinecap="round"/>
      <line x1="56" y1="104" x2="56" y2="109" stroke={color} strokeWidth="0.4" opacity="0.18"/>
      <line x1="60" y1="106" x2="60" y2="110" stroke={color} strokeWidth="0.4" opacity="0.18"/>
      <line x1="64" y1="104" x2="64" y2="109" stroke={color} strokeWidth="0.4" opacity="0.18"/>
    </svg>
  ),

  // 2. Panda — premium portrait with plush fur, expressive eye patches, and charming face
  (color) => (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Soft fur aura */}
      <circle cx="60" cy="68" r="48" stroke={color} strokeWidth="0.4" strokeDasharray="1.5 5" opacity="0.15" fill="none"/>

      {/* Head */}
      <circle cx="60" cy="68" r="43" stroke={color} strokeWidth="2.2" fill="none"/>
      {/* Cheek roundness — left */}
      <path d="M20 76 C16 68 18 58 23 58" stroke={color} strokeWidth="0.8" opacity="0.3" fill="none"/>
      {/* Cheek roundness — right */}
      <path d="M100 76 C104 68 102 58 97 58" stroke={color} strokeWidth="0.8" opacity="0.3" fill="none"/>

      {/* Crown fur tufts */}
      <line x1="52" y1="26" x2="54" y2="34" stroke={color} strokeWidth="0.5" opacity="0.25"/>
      <line x1="60" y1="24" x2="60" y2="32" stroke={color} strokeWidth="0.5" opacity="0.25"/>
      <line x1="68" y1="26" x2="66" y2="34" stroke={color} strokeWidth="0.5" opacity="0.25"/>
      <line x1="48" y1="28" x2="50" y2="36" stroke={color} strokeWidth="0.4" opacity="0.18"/>
      <line x1="72" y1="28" x2="70" y2="36" stroke={color} strokeWidth="0.4" opacity="0.18"/>
      <line x1="56" y1="25" x2="57" y2="32" stroke={color} strokeWidth="0.35" opacity="0.15"/>
      <line x1="64" y1="25" x2="63" y2="32" stroke={color} strokeWidth="0.35" opacity="0.15"/>

      {/* Left ear — layered circles with fur texture */}
      <circle cx="26" cy="30" r="14" stroke={color} strokeWidth="2.4" fill="none"/>
      <circle cx="26" cy="30" r="10" stroke={color} strokeWidth="1.2" opacity="0.5" fill="none"/>
      <circle cx="26" cy="30" r="6" stroke={color} strokeWidth="0.6" opacity="0.28" fill="none"/>
      {/* Ear fur radiating */}
      <line x1="15" y1="24" x2="21" y2="26" stroke={color} strokeWidth="0.5" opacity="0.28"/>
      <line x1="14" y1="30" x2="20" y2="30" stroke={color} strokeWidth="0.5" opacity="0.28"/>
      <line x1="15" y1="36" x2="21" y2="34" stroke={color} strokeWidth="0.5" opacity="0.28"/>
      <line x1="18" y1="20" x2="23" y2="23" stroke={color} strokeWidth="0.4" opacity="0.2"/>
      <line x1="18" y1="40" x2="23" y2="37" stroke={color} strokeWidth="0.4" opacity="0.2"/>

      {/* Right ear */}
      <circle cx="94" cy="30" r="14" stroke={color} strokeWidth="2.4" fill="none"/>
      <circle cx="94" cy="30" r="10" stroke={color} strokeWidth="1.2" opacity="0.5" fill="none"/>
      <circle cx="94" cy="30" r="6" stroke={color} strokeWidth="0.6" opacity="0.28" fill="none"/>
      <line x1="105" y1="24" x2="99" y2="26" stroke={color} strokeWidth="0.5" opacity="0.28"/>
      <line x1="106" y1="30" x2="100" y2="30" stroke={color} strokeWidth="0.5" opacity="0.28"/>
      <line x1="105" y1="36" x2="99" y2="34" stroke={color} strokeWidth="0.5" opacity="0.28"/>
      <line x1="102" y1="20" x2="97" y2="23" stroke={color} strokeWidth="0.4" opacity="0.2"/>
      <line x1="102" y1="40" x2="97" y2="37" stroke={color} strokeWidth="0.4" opacity="0.2"/>

      {/* Left eye patch — organic layered shape */}
      <path d="M34 60 C31 52 36 44 46 46 C56 48 60 58 55 64 C50 70 34 68 34 60Z"
            stroke={color} strokeWidth="2" fill="none"/>
      <path d="M37 60 C35 54 39 48 46 50 C53 52 56 59 53 63"
            stroke={color} strokeWidth="0.7" strokeDasharray="1.5 2.5" opacity="0.35" fill="none"/>
      {/* Patch texture */}
      <line x1="36" y1="56" x2="42" y2="54" stroke={color} strokeWidth="0.4" opacity="0.22"/>
      <line x1="35" y1="61" x2="41" y2="60" stroke={color} strokeWidth="0.4" opacity="0.22"/>
      <line x1="37" y1="65" x2="43" y2="63" stroke={color} strokeWidth="0.35" opacity="0.18"/>

      {/* Right eye patch */}
      <path d="M86 60 C89 52 84 44 74 46 C64 48 60 58 65 64 C70 70 86 68 86 60Z"
            stroke={color} strokeWidth="2" fill="none"/>
      <path d="M83 60 C85 54 81 48 74 50 C67 52 64 59 67 63"
            stroke={color} strokeWidth="0.7" strokeDasharray="1.5 2.5" opacity="0.35" fill="none"/>
      <line x1="84" y1="56" x2="78" y2="54" stroke={color} strokeWidth="0.4" opacity="0.22"/>
      <line x1="85" y1="61" x2="79" y2="60" stroke={color} strokeWidth="0.4" opacity="0.22"/>
      <line x1="83" y1="65" x2="77" y2="63" stroke={color} strokeWidth="0.35" opacity="0.18"/>

      {/* Left eye — detailed with iris ring */}
      <circle cx="46" cy="58" r="5.5" stroke={color} strokeWidth="1.6" fill="none"/>
      <circle cx="46" cy="58" r="3.2" stroke={color} strokeWidth="0.4" opacity="0.3" fill="none"/>
      <circle cx="46" cy="58" r="2.8" fill={color}/>
      <circle cx="48" cy="56" r="1.2" fill={color} opacity="0.25"/>
      <circle cx="44" cy="60" r="0.7" fill={color} opacity="0.12"/>

      {/* Right eye */}
      <circle cx="74" cy="58" r="5.5" stroke={color} strokeWidth="1.6" fill="none"/>
      <circle cx="74" cy="58" r="3.2" stroke={color} strokeWidth="0.4" opacity="0.3" fill="none"/>
      <circle cx="74" cy="58" r="2.8" fill={color}/>
      <circle cx="76" cy="56" r="1.2" fill={color} opacity="0.25"/>
      <circle cx="72" cy="60" r="0.7" fill={color} opacity="0.12"/>

      {/* Nose — rounded bean with nostrils */}
      <path d="M52 74 Q60 80 68 74 Q64 69 60 69 Q56 69 52 74Z" fill={color} opacity="0.85" stroke="none"/>
      <line x1="53" y1="75" x2="67" y2="75" stroke={color} strokeWidth="0.4" opacity="0.25"/>
      {/* Nostrils */}
      <circle cx="56" cy="73" r="1" stroke={color} strokeWidth="0.4" opacity="0.3" fill="none"/>
      <circle cx="64" cy="73" r="1" stroke={color} strokeWidth="0.4" opacity="0.3" fill="none"/>

      {/* Philtrum */}
      <line x1="60" y1="80" x2="60" y2="84" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.75"/>
      {/* Mouth — gentle smile */}
      <path d="M52 84 Q60 91 68 84" stroke={color} strokeWidth="1.8" strokeLinecap="round" fill="none"/>

      {/* Cheek blush — subtle circles */}
      <circle cx="33" cy="74" r="4" stroke={color} strokeWidth="0.5" opacity="0.15" fill="none"/>
      <line x1="31" y1="73" x2="35" y2="73" stroke={color} strokeWidth="0.4" opacity="0.18"/>
      <line x1="31" y1="75" x2="35" y2="75" stroke={color} strokeWidth="0.4" opacity="0.15"/>
      <circle cx="87" cy="74" r="4" stroke={color} strokeWidth="0.5" opacity="0.15" fill="none"/>
      <line x1="85" y1="73" x2="89" y2="73" stroke={color} strokeWidth="0.4" opacity="0.18"/>
      <line x1="85" y1="75" x2="89" y2="75" stroke={color} strokeWidth="0.4" opacity="0.15"/>
    </svg>
  ),

  // 3. Fox — dramatic angular face with rich fur detail
  (color) => (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Triangular head — refined */}
      <path d="M60 22 L20 92 L100 92 Z" stroke={color} strokeWidth="2.2" strokeLinejoin="round" fill="none"/>
      {/* Inner echo */}
      <path d="M60 28 L24 92 L96 92 Z" stroke={color} strokeWidth="0.5" strokeDasharray="2 5" opacity="0.25" fill="none"/>

      {/* Left ear flare */}
      <path d="M20 92 L4 44 L36 66" stroke={color} strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" fill="none"/>
      <path d="M18 86 L7 50 L34 66" stroke={color} strokeWidth="0.8" strokeLinejoin="round" opacity="0.35" fill="none"/>
      {/* Inner ear lines */}
      <line x1="8" y1="56" x2="24" y2="62" stroke={color} strokeWidth="0.5" opacity="0.28"/>
      <line x1="7" y1="64" x2="22" y2="68" stroke={color} strokeWidth="0.45" opacity="0.24"/>
      <line x1="9" y1="72" x2="22" y2="73" stroke={color} strokeWidth="0.4" opacity="0.2"/>
      <line x1="6" y1="60" x2="20" y2="64" stroke={color} strokeWidth="0.35" opacity="0.15"/>

      {/* Right ear flare */}
      <path d="M100 92 L116 44 L84 66" stroke={color} strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" fill="none"/>
      <path d="M102 86 L113 50 L86 66" stroke={color} strokeWidth="0.8" strokeLinejoin="round" opacity="0.35" fill="none"/>
      <line x1="112" y1="56" x2="96" y2="62" stroke={color} strokeWidth="0.5" opacity="0.28"/>
      <line x1="113" y1="64" x2="98" y2="68" stroke={color} strokeWidth="0.45" opacity="0.24"/>
      <line x1="111" y1="72" x2="98" y2="73" stroke={color} strokeWidth="0.4" opacity="0.2"/>
      <line x1="114" y1="60" x2="100" y2="64" stroke={color} strokeWidth="0.35" opacity="0.15"/>

      {/* Face mask — muzzle region */}
      <path d="M38 82 Q60 74 82 82 Q72 92 60 94 Q48 92 38 82Z" stroke={color} strokeWidth="0.9" opacity="0.4" fill="none"/>

      {/* Forehead fur — center stripe */}
      <line x1="56" y1="38" x2="52" y2="50" stroke={color} strokeWidth="0.5" opacity="0.28"/>
      <line x1="64" y1="38" x2="68" y2="50" stroke={color} strokeWidth="0.5" opacity="0.28"/>
      <line x1="60" y1="34" x2="60" y2="46" stroke={color} strokeWidth="0.5" opacity="0.28"/>
      <line x1="53" y1="46" x2="50" y2="56" stroke={color} strokeWidth="0.4" opacity="0.18"/>
      <line x1="67" y1="46" x2="70" y2="56" stroke={color} strokeWidth="0.4" opacity="0.18"/>
      <line x1="58" y1="36" x2="56" y2="44" stroke={color} strokeWidth="0.35" opacity="0.15"/>
      <line x1="62" y1="36" x2="64" y2="44" stroke={color} strokeWidth="0.35" opacity="0.15"/>

      {/* Left eye — cunning slant with iris */}
      <path d="M39 67 C42 62 52 62 52 68 C52 73 42 73 39 68Z" stroke={color} strokeWidth="1.6" fill="none"/>
      <circle cx="46" cy="68" r="3" stroke={color} strokeWidth="0.5" opacity="0.35" fill="none"/>
      <ellipse cx="46" cy="68" rx="1.8" ry="2.8" fill={color} opacity="0.85"/>
      <circle cx="48" cy="66" r="1" fill={color} opacity="0.22"/>
      <circle cx="44" cy="70" r="0.5" fill={color} opacity="0.12"/>
      <path d="M41 66 C43 63 50 64 52 66" stroke={color} strokeWidth="0.5" opacity="0.3" fill="none"/>

      {/* Right eye */}
      <path d="M68 67 C71 62 81 62 81 68 C81 73 71 73 68 68Z" stroke={color} strokeWidth="1.6" fill="none"/>
      <circle cx="75" cy="68" r="3" stroke={color} strokeWidth="0.5" opacity="0.35" fill="none"/>
      <ellipse cx="75" cy="68" rx="1.8" ry="2.8" fill={color} opacity="0.85"/>
      <circle cx="77" cy="66" r="1" fill={color} opacity="0.22"/>
      <circle cx="73" cy="70" r="0.5" fill={color} opacity="0.12"/>
      <path d="M70 66 C72 63 79 64 81 66" stroke={color} strokeWidth="0.5" opacity="0.3" fill="none"/>

      {/* Nose */}
      <path d="M55 79 L60 84 L65 79 Q62 75 60 75 Q58 75 55 79Z" fill={color} opacity="0.85" stroke="none"/>
      <line x1="55.5" y1="80" x2="64.5" y2="80" stroke={color} strokeWidth="0.4" opacity="0.28"/>

      {/* Philtrum + mouth */}
      <line x1="60" y1="84" x2="60" y2="87" stroke={color} strokeWidth="1.1" strokeLinecap="round" opacity="0.75"/>
      <path d="M54 87 Q60 93 66 87" stroke={color} strokeWidth="1.6" strokeLinecap="round" fill="none"/>

      {/* Cheek fur spots */}
      <circle cx="30" cy="78" r="0.8" fill={color} opacity="0.3"/>
      <circle cx="28" cy="82" r="0.8" fill={color} opacity="0.3"/>
      <circle cx="26" cy="78" r="0.8" fill={color} opacity="0.25"/>
      <circle cx="32" cy="84" r="0.6" fill={color} opacity="0.2"/>
      <circle cx="90" cy="78" r="0.8" fill={color} opacity="0.3"/>
      <circle cx="92" cy="82" r="0.8" fill={color} opacity="0.3"/>
      <circle cx="94" cy="78" r="0.8" fill={color} opacity="0.25"/>
      <circle cx="88" cy="84" r="0.6" fill={color} opacity="0.2"/>

      {/* Chin tuft */}
      <path d="M56 94 C58 98 60 100 62 98 C60 96 60 100 60 100" stroke={color} strokeWidth="0.7" opacity="0.25" fill="none" strokeLinecap="round"/>
    </svg>
  ),

  // 4. Penguin — charming and detailed with plumage, expressive eyes, and feathered wings
  (color) => (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Body aura */}
      <path d="M30 72 C26 48 30 26 60 22 C90 18 96 44 92 72 C90 90 78 106 60 108 C42 108 32 92 30 72Z"
            stroke={color} strokeWidth="0.4" strokeDasharray="3 5" opacity="0.12" fill="none"/>

      {/* Main body */}
      <path d="M28 70 C24 46 28 24 60 20 C92 16 98 42 94 70 C92 88 80 104 60 106 C40 106 30 90 28 70Z"
            stroke={color} strokeWidth="2.2" fill="none"/>

      {/* Belly plumage — triple layer */}
      <path d="M40 68 C38 50 42 36 60 34 C78 32 82 48 82 68 C82 86 74 100 60 102 C46 102 42 88 40 68Z"
            stroke={color} strokeWidth="1.4" opacity="0.55" fill="none"/>
      <path d="M44 68 C42 53 46 42 60 40 C74 38 78 52 78 68 C78 84 70 96 60 98 C50 98 46 86 44 68Z"
            stroke={color} strokeWidth="0.7" opacity="0.28" fill="none"/>
      <path d="M48 68 C46 56 50 48 60 46 C70 44 74 56 74 68 C74 80 66 92 60 94 C54 94 50 82 48 68Z"
            stroke={color} strokeWidth="0.4" opacity="0.15" fill="none"/>

      {/* Crown feather tufts — premium */}
      <line x1="52" y1="20" x2="49" y2="10" stroke={color} strokeWidth="1.4" strokeLinecap="round" opacity="0.6"/>
      <line x1="60" y1="18" x2="60" y2="7" stroke={color} strokeWidth="1.4" strokeLinecap="round" opacity="0.65"/>
      <line x1="68" y1="20" x2="71" y2="10" stroke={color} strokeWidth="1.4" strokeLinecap="round" opacity="0.6"/>
      <line x1="56" y1="19" x2="54" y2="9" stroke={color} strokeWidth="0.8" strokeLinecap="round" opacity="0.38"/>
      <line x1="64" y1="19" x2="66" y2="9" stroke={color} strokeWidth="0.8" strokeLinecap="round" opacity="0.38"/>
      <line x1="48" y1="22" x2="45" y2="14" stroke={color} strokeWidth="0.5" strokeLinecap="round" opacity="0.22"/>
      <line x1="72" y1="22" x2="75" y2="14" stroke={color} strokeWidth="0.5" strokeLinecap="round" opacity="0.22"/>

      {/* Eyes — large and expressive */}
      <circle cx="46" cy="44" r="6" stroke={color} strokeWidth="1.8" fill="none"/>
      <circle cx="46" cy="44" r="3.5" stroke={color} strokeWidth="0.5" opacity="0.3" fill="none"/>
      <circle cx="46" cy="44" r="3" fill={color}/>
      <circle cx="48" cy="42" r="1.2" fill={color} opacity="0.25"/>
      <circle cx="44" cy="46" r="0.7" fill={color} opacity="0.12"/>

      <circle cx="74" cy="44" r="6" stroke={color} strokeWidth="1.8" fill="none"/>
      <circle cx="74" cy="44" r="3.5" stroke={color} strokeWidth="0.5" opacity="0.3" fill="none"/>
      <circle cx="74" cy="44" r="3" fill={color}/>
      <circle cx="76" cy="42" r="1.2" fill={color} opacity="0.25"/>
      <circle cx="72" cy="46" r="0.7" fill={color} opacity="0.12"/>

      {/* Beak — diamond with ridge */}
      <path d="M51 54 L60 66 L69 54 Q60 48 51 54Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" fill="none"/>
      <line x1="52" y1="59" x2="68" y2="59" stroke={color} strokeWidth="0.8" opacity="0.4"/>
      <line x1="53" y1="56" x2="67" y2="56" stroke={color} strokeWidth="0.5" opacity="0.22"/>
      <path d="M57 54 C58 52 62 52 63 54" stroke={color} strokeWidth="0.5" opacity="0.3" fill="none"/>

      {/* Left wing — detailed feathers */}
      <path d="M28 62 C14 58 10 74 16 88 C20 96 28 90 28 72" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none"/>
      <path d="M24 66 C18 72 16 82 18 90" stroke={color} strokeWidth="0.6" strokeLinecap="round" opacity="0.32" fill="none"/>
      <line x1="14" y1="74" x2="24" y2="72" stroke={color} strokeWidth="0.45" opacity="0.22"/>
      <line x1="13" y1="80" x2="23" y2="78" stroke={color} strokeWidth="0.45" opacity="0.22"/>
      <line x1="14" y1="86" x2="22" y2="84" stroke={color} strokeWidth="0.4" opacity="0.18"/>
      <line x1="12" y1="77" x2="22" y2="75" stroke={color} strokeWidth="0.35" opacity="0.15"/>

      {/* Right wing */}
      <path d="M92 62 C106 58 110 74 104 88 C100 96 92 90 92 72" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none"/>
      <path d="M96 66 C102 72 104 82 102 90" stroke={color} strokeWidth="0.6" strokeLinecap="round" opacity="0.32" fill="none"/>
      <line x1="106" y1="74" x2="96" y2="72" stroke={color} strokeWidth="0.45" opacity="0.22"/>
      <line x1="107" y1="80" x2="97" y2="78" stroke={color} strokeWidth="0.45" opacity="0.22"/>
      <line x1="106" y1="86" x2="98" y2="84" stroke={color} strokeWidth="0.4" opacity="0.18"/>
      <line x1="108" y1="77" x2="98" y2="75" stroke={color} strokeWidth="0.35" opacity="0.15"/>

      {/* Feet — webbed */}
      <path d="M48 106 L42 114 M52 108 L48 116 M44 112 L42 114 L48 116" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M72 106 L78 114 M68 108 L72 116 M76 112 L78 114 L72 116" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),

  // 5. Lion — majestic layered mane, bold face, regal details
  (color) => (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer mane aura */}
      <circle cx="60" cy="64" r="54" stroke={color} strokeWidth="0.4" strokeDasharray="1.5 6" opacity="0.2" fill="none"/>

      {/* Mane strokes — radial, dense */}
      {[
        [60,16,60,2],[60,16,50,0],[60,16,70,0],
        [42,20,30,8],[78,20,90,8],
        [26,36,12,28],[94,36,108,28],
        [22,56,6,50],[98,56,114,50],
        [24,78,10,90],[96,78,110,90],
        [34,96,22,110],[86,96,98,110],
        [48,100,44,116],[72,100,76,116],
        [60,102,60,116],
      ].map(([x1,y1,x2,y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      ))}
      {/* Inner mane layer */}
      {[
        [60,18,60,8],[54,18,46,6],[66,18,74,6],
        [38,24,26,14],[82,24,94,14],
        [28,42,14,34],[92,42,106,34],
        [26,64,12,60],[94,64,108,60],
      ].map(([x1,y1,x2,y2], i) => (
        <line key={`m2-${i}`} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke={color} strokeWidth="0.7" strokeLinecap="round" opacity="0.32"/>
      ))}

      {/* Mane ring */}
      <circle cx="60" cy="64" r="48" stroke={color} strokeWidth="1" strokeDasharray="4 7" opacity="0.35" fill="none"/>

      {/* Face */}
      <circle cx="60" cy="64" r="34" stroke={color} strokeWidth="2.2" fill="none"/>
      <line x1="28" y1="66" x2="36" y2="68" stroke={color} strokeWidth="0.5" opacity="0.22"/>
      <line x1="27" y1="72" x2="35" y2="73" stroke={color} strokeWidth="0.5" opacity="0.2"/>
      <line x1="92" y1="66" x2="84" y2="68" stroke={color} strokeWidth="0.5" opacity="0.22"/>
      <line x1="93" y1="72" x2="85" y2="73" stroke={color} strokeWidth="0.5" opacity="0.2"/>

      {/* Forehead */}
      <path d="M52 36 C54 32 60 30 60 30 C60 30 66 32 68 36" stroke={color} strokeWidth="0.9" opacity="0.32" fill="none" strokeLinecap="round"/>
      <line x1="56" y1="34" x2="55" y2="40" stroke={color} strokeWidth="0.4" opacity="0.18"/>
      <line x1="64" y1="34" x2="65" y2="40" stroke={color} strokeWidth="0.4" opacity="0.18"/>
      <line x1="60" y1="32" x2="60" y2="38" stroke={color} strokeWidth="0.4" opacity="0.18"/>

      {/* Eyes */}
      <circle cx="48" cy="58" r="5.5" stroke={color} strokeWidth="1.6" fill="none"/>
      <circle cx="48" cy="58" r="3" stroke={color} strokeWidth="0.4" opacity="0.3" fill="none"/>
      <ellipse cx="48" cy="58" rx="2.4" ry="3.2" fill={color}/>
      <circle cx="50" cy="56" r="1" fill={color} opacity="0.25"/>
      <path d="M44 56 C46 53 52 54 54 57" stroke={color} strokeWidth="0.5" opacity="0.28" fill="none"/>

      <circle cx="72" cy="58" r="5.5" stroke={color} strokeWidth="1.6" fill="none"/>
      <circle cx="72" cy="58" r="3" stroke={color} strokeWidth="0.4" opacity="0.3" fill="none"/>
      <ellipse cx="72" cy="58" rx="2.4" ry="3.2" fill={color}/>
      <circle cx="74" cy="56" r="1" fill={color} opacity="0.25"/>
      <path d="M68 56 C70 53 76 54 78 57" stroke={color} strokeWidth="0.5" opacity="0.28" fill="none"/>

      {/* Nose */}
      <path d="M54 72 Q60 77 66 72 Q63 68 60 68 Q57 68 54 72Z" fill={color} opacity="0.85" stroke="none"/>
      <line x1="54" y1="73" x2="66" y2="73" stroke={color} strokeWidth="0.4" opacity="0.25"/>

      {/* Mouth */}
      <line x1="60" y1="77" x2="60" y2="80" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.75"/>
      <path d="M52 80 Q60 88 68 80" stroke={color} strokeWidth="1.8" strokeLinecap="round" fill="none"/>

      {/* Whisker dots + lines */}
      <circle cx="34" cy="72" r="1" fill={color} opacity="0.4"/>
      <circle cx="30" cy="74" r="1" fill={color} opacity="0.35"/>
      <circle cx="26" cy="72" r="1" fill={color} opacity="0.3"/>
      <circle cx="86" cy="72" r="1" fill={color} opacity="0.4"/>
      <circle cx="90" cy="74" r="1" fill={color} opacity="0.35"/>
      <circle cx="94" cy="72" r="1" fill={color} opacity="0.3"/>
      <line x1="28" y1="70" x2="46" y2="73" stroke={color} strokeWidth="0.6" opacity="0.35"/>
      <line x1="28" y1="76" x2="46" y2="75" stroke={color} strokeWidth="0.6" opacity="0.32"/>
      <line x1="92" y1="70" x2="74" y2="73" stroke={color} strokeWidth="0.6" opacity="0.35"/>
      <line x1="92" y1="76" x2="74" y2="75" stroke={color} strokeWidth="0.6" opacity="0.32"/>
    </svg>
  ),

  // 6. Koala — fluffy, wide ears with fur texture, sleepy charm
  (color) => (
    <svg viewBox="0 0 100 105" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Left ear — triple ring with fur */}
      <circle cx="18" cy="42" r="20" stroke={color} strokeWidth="1.8" strokeDasharray="1.5 3" fill="none"/>
      <circle cx="18" cy="42" r="14" stroke={color} strokeWidth="1.2" opacity="0.5" fill="none"/>
      <circle cx="18" cy="42" r="8" stroke={color} strokeWidth="0.8" opacity="0.3" fill="none"/>
      {/* Ear fur — radiating lines left */}
      {[[-8,0],[-6,-6],[0,-8],[6,-6],[8,0],[6,6],[0,8],[-6,6]].map(([dx,dy],i) => (
        <line key={`el-${i}`}
          x1={18+dx*0.8} y1={42+dy*0.8}
          x2={18+dx*1.7} y2={42+dy*1.7}
          stroke={color} strokeWidth="0.5" opacity="0.28"/>
      ))}

      {/* Right ear — triple ring with fur */}
      <circle cx="82" cy="42" r="20" stroke={color} strokeWidth="1.8" strokeDasharray="1.5 3" fill="none"/>
      <circle cx="82" cy="42" r="14" stroke={color} strokeWidth="1.2" opacity="0.5" fill="none"/>
      <circle cx="82" cy="42" r="8" stroke={color} strokeWidth="0.8" opacity="0.3" fill="none"/>
      {[[-8,0],[-6,-6],[0,-8],[6,-6],[8,0],[6,6],[0,8],[-6,6]].map(([dx,dy],i) => (
        <line key={`er-${i}`}
          x1={82+dx*0.8} y1={42+dy*0.8}
          x2={82+dx*1.7} y2={42+dy*1.7}
          stroke={color} strokeWidth="0.5" opacity="0.28"/>
      ))}

      {/* Head */}
      <circle cx="50" cy="66" r="34" stroke={color} strokeWidth="2.2" fill="none"/>
      {/* Cheek puffs */}
      <path d="M20 74 C16 68 18 60 22 60" stroke={color} strokeWidth="0.9" opacity="0.38" fill="none"/>
      <path d="M80 74 C84 68 82 60 78 60" stroke={color} strokeWidth="0.9" opacity="0.38" fill="none"/>

      {/* Crown fur tufts */}
      <line x1="44" y1="33" x2="42" y2="24" stroke={color} strokeWidth="0.8" strokeLinecap="round" opacity="0.38"/>
      <line x1="50" y1="32" x2="50" y2="23" stroke={color} strokeWidth="0.8" strokeLinecap="round" opacity="0.38"/>
      <line x1="56" y1="33" x2="58" y2="24" stroke={color} strokeWidth="0.8" strokeLinecap="round" opacity="0.38"/>
      <line x1="41" y1="35" x2="39" y2="27" stroke={color} strokeWidth="0.5" strokeLinecap="round" opacity="0.22"/>
      <line x1="59" y1="35" x2="61" y2="27" stroke={color} strokeWidth="0.5" strokeLinecap="round" opacity="0.22"/>

      {/* Face fur texture on sides */}
      <line x1="20" y1="62" x2="26" y2="64" stroke={color} strokeWidth="0.4" opacity="0.22"/>
      <line x1="19" y1="68" x2="25" y2="69" stroke={color} strokeWidth="0.4" opacity="0.22"/>
      <line x1="80" y1="62" x2="74" y2="64" stroke={color} strokeWidth="0.4" opacity="0.22"/>
      <line x1="81" y1="68" x2="75" y2="69" stroke={color} strokeWidth="0.4" opacity="0.22"/>

      {/* Eyes */}
      <circle cx="38" cy="59" r="5" stroke={color} strokeWidth="1.6" fill="none"/>
      <circle cx="38" cy="59" r="2.6" fill={color}/>
      <circle cx="39.8" cy="57.2" r="1" fill={color} opacity="0.3"/>
      <circle cx="36" cy="61" r="0.6" fill={color} opacity="0.15"/>
      {/* Sleepy lower lid */}
      <path d="M34 61 Q38 63 42 61" stroke={color} strokeWidth="0.7" opacity="0.4" fill="none"/>

      <circle cx="62" cy="59" r="5" stroke={color} strokeWidth="1.6" fill="none"/>
      <circle cx="62" cy="59" r="2.6" fill={color}/>
      <circle cx="63.8" cy="57.2" r="1" fill={color} opacity="0.3"/>
      <circle cx="60" cy="61" r="0.6" fill={color} opacity="0.15"/>
      <path d="M58 61 Q62 63 66 61" stroke={color} strokeWidth="0.7" opacity="0.4" fill="none"/>

      {/* Big nose */}
      <path d="M36 73 C36 66 42 62 50 62 C58 62 64 66 64 73 C64 79 58 84 50 84 C42 84 36 79 36 73Z"
            stroke={color} strokeWidth="2.2" fill="none"/>
      {/* Nose nostrils / texture */}
      <path d="M40 71 C42 68 48 67 52 70" stroke={color} strokeWidth="0.8" opacity="0.4" fill="none"/>
      <path d="M60 71 C58 68 52 67 48 70" stroke={color} strokeWidth="0.5" opacity="0.25" fill="none"/>
      <line x1="50" y1="62" x2="50" y2="66" stroke={color} strokeWidth="0.7" opacity="0.3"/>

      {/* Mouth */}
      <path d="M43 86 Q50 93 57 86" stroke={color} strokeWidth="1.6" strokeLinecap="round" fill="none"/>
      {/* Chin fur */}
      <line x1="47" y1="91" x2="47" y2="96" stroke={color} strokeWidth="0.4" opacity="0.22"/>
      <line x1="50" y1="93" x2="50" y2="98" stroke={color} strokeWidth="0.4" opacity="0.22"/>
      <line x1="53" y1="91" x2="53" y2="96" stroke={color} strokeWidth="0.4" opacity="0.22"/>
    </svg>
  ),
];

export const getAnimalAvatar = (name, color = '#333') => {
  if (!name) return ANIMAL_SVGS[0](color);
  const charCode = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const index = charCode % ANIMAL_SVGS.length;
  return ANIMAL_SVGS[index](color);
};