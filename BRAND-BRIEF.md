# Studio Facile — Design System Brief v2.0

## 1. Essence de marque

### Tagline
**Landing pages *super faciles* pour business *super chauds.***

### Promesse
Rapide · Propre · Efficace · Sans surdesign

### Positionnement
L'anti-agence : pas de process lourds, pas de surdesign, focus conversion.

### Valeurs
- **Vélocité** : Délais courts, réponses rapides
- **Clarté** : Communication directe, pas de jargon
- **Efficacité** : Chaque élément sert la conversion
- **Accessibilité** : Prix honnêtes, process clair

---

## 2. Couleurs

### Primaires
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-yellow` | #FFE600 | Accent principal, hero, CTA |
| `--color-yellow-light` | #FFF4B3 | Backgrounds secondaires, témoignages |
| `--color-yellow-dark` | #CCB800 | Hover states sur jaune |
| `--color-black` | #1D1D1B | Texte, boutons primary, nav |
| `--color-white` | #FFFFFF | Backgrounds, texte sur dark |
| `--color-cream` | #FFFDF5 | Background sections alternées |

### Neutres
| Token | Hex |
|-------|-----|
| `--color-gray-900` | #1D1D1B |
| `--color-gray-800` | #2D2D2B |
| `--color-gray-700` | #4A4A4A |
| `--color-gray-600` | #6A6A6A |
| `--color-gray-500` | #8A8A8A |
| `--color-gray-400` | #ABABAB |
| `--color-gray-300` | #D4D4D4 |
| `--color-gray-200` | #E5E5E5 |
| `--color-gray-100` | #F5F5F5 |

### Feedback
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-success` | #22C55E | Validation, checkmarks |
| `--color-success-light` | #DCFCE7 | Background success |
| `--color-error` | #EF4444 | Erreurs |
| `--color-error-light` | #FEE2E2 | Background erreur |

### Règles d'usage
- Max 60% de jaune par section
- Jamais 2 sections jaunes consécutives
- Noir réservé au CTA final et footer
- Contraste WCAG AA minimum

---

## 3. Typographie

### Polices
- **Sans** : Manrope (400, 500, 600, 700)
- **Serif** : PP Editorial Old (Italic 400, Ultrabold Italic 700) — self-hosted

### Échelle
| Token | Valeur |
|-------|--------|
| `--text-xs` | 0.75rem (12px) |
| `--text-sm` | 0.875rem (14px) |
| `--text-base` | 1rem (16px) |
| `--text-lg` | 1.125rem (18px) |
| `--text-xl` | 1.25rem (20px) |
| `--text-2xl` | 1.5rem (24px) |
| `--text-3xl` | 2rem (32px) |
| `--text-4xl` | 2.5rem (40px) |
| `--text-5xl` | 3rem (48px) |

### Poids
| Token | Valeur |
|-------|--------|
| `--font-normal` | 400 |
| `--font-medium` | 500 |
| `--font-semibold` | 600 |
| `--font-bold` | 700 |

### Line heights
| Token | Valeur |
|-------|--------|
| `--leading-none` | 1 |
| `--leading-tight` | 1.15 |
| `--leading-snug` | 1.3 |
| `--leading-normal` | 1.5 |
| `--leading-relaxed` | 1.65 |

### Letter spacing
| Token | Valeur |
|-------|--------|
| `--tracking-tight` | -0.02em |
| `--tracking-normal` | 0 |
| `--tracking-wide` | 0.02em |

### Hiérarchie
| Élément | Size | Weight | Line height | Tracking |
|---------|------|--------|-------------|----------|
| H1 | clamp(2rem, 5vw, 2.5rem) | 700 | 1.15 | -0.02em |
| H2 | clamp(1.5rem, 4vw, 2rem) | 700 | 1.3 | -0.02em |
| H3 | 1.25rem | 700 | 1.3 | 0 |
| Body | 1rem | 400 | 1.65 | 0 |
| Lead | 1.125rem | 400 | 1.65 | 0 |
| Caption | 0.75rem | 600 | 1.5 | 0.1em |

### ⚠️ Règle critique : Serif Accent
La classe `.serif-accent` est utilisée UNIQUEMENT pour les mots-clés signature :
- "super faciles"
- "super chauds"
- Mots accentués dans les titres (max 3-4 mots par écran)

```css
.serif-accent {
    font-family: var(--font-serif);
    font-style: italic;
    font-weight: 700; /* TOUJOURS bold */
    letter-spacing: -0.03em; /* tracking serré */
}
```

**JAMAIS** utiliser serif-accent sur :
- Les CTA
- Le body text
- Les labels de formulaire

---

## 4. Spacing

### Échelle (base 8px)
| Token | Valeur |
|-------|--------|
| `--space-0` | 0 |
| `--space-1` | 4px (0.25rem) |
| `--space-2` | 8px (0.5rem) |
| `--space-3` | 12px (0.75rem) |
| `--space-4` | 16px (1rem) |
| `--space-5` | 20px (1.25rem) |
| `--space-6` | 24px (1.5rem) |
| `--space-7` | 28px (1.75rem) |
| `--space-8` | 32px (2rem) |
| `--space-9` | 40px (2.5rem) |
| `--space-10` | 48px (3rem) |
| `--space-11` | 56px (3.5rem) |
| `--space-12` | 64px (4rem) |
| `--space-13` | 80px (5rem) |
| `--space-14` | 96px (6rem) |
| `--space-15` | 128px (8rem) |
| `--space-16` | 160px (10rem) |

### Usage recommandé
| Contexte | Token |
|----------|-------|
| Gap entre éléments inline | space-2 à space-4 |
| Padding boutons | space-3 / space-6 |
| Padding cards | space-8 |
| Gap grilles | space-6 |
| Padding sections | space-14 |
| Bento gap | space-9 (40px) |
| Bento padding | space-9 (40px) |

---

## 5. Border Radius

| Token | Valeur | Usage |
|-------|--------|-------|
| `--radius-none` | 0 | - |
| `--radius-sm` | 4px | Inputs, petits éléments |
| `--radius-md` | 8px | Boutons, badges |
| `--radius-lg` | 12px | Icons containers |
| `--radius-xl` | 16px | - |
| `--radius-2xl` | 24px | Cards |
| `--radius-3xl` | 32px | Bento container |
| `--radius-full` | 9999px | Pills, avatars, nav |

---

## 6. Shadows

| Token | Valeur |
|-------|--------|
| `--shadow-sm` | 0 1px 2px rgba(0,0,0,0.05) |
| `--shadow-md` | 0 4px 12px rgba(0,0,0,0.08) |
| `--shadow-lg` | 0 8px 24px rgba(0,0,0,0.12) |
| `--shadow-xl` | 0 16px 48px rgba(0,0,0,0.16) |

---

## 7. Bento System

### Structure
Le système Bento est utilisé pour les grilles de cards imbriquées (hero, features).

```
┌─────────────────────────────────────────────────────────┐
│                    BENTO CONTAINER                       │
│  background: gray-100                                    │
│  padding: 40px                                           │
│  gap: 40px                                               │
│  border-radius: 32px                                     │
│                                                          │
│  ┌─────────────────────┐  ┌─────────────────────┐       │
│  │    BENTO CARD       │  │    BENTO CARD       │       │
│  │  bg: white          │  │  bg: white          │       │
│  │  padding: 40px 60px │  │  padding: 40px 60px │       │
│  │  radius: 24px       │  │  radius: 24px       │       │
│  │                     │  │                     │       │
│  │  [icon]             │  │  [icon]             │       │
│  │  [illustration]     │  │  [illustration]     │       │
│  │  [text]             │  │  [text]             │       │
│  └─────────────────────┘  └─────────────────────┘       │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### Tokens Bento
| Token | Valeur |
|-------|--------|
| `--bento-gap` | 40px (space-9) |
| `--bento-padding` | 40px (space-9) |
| `--bento-padding-x` | 60px |
| `--bento-padding-y` | 40px (space-9) |
| `--bento-radius` | 32px (radius-3xl) |

### CSS
```css
.bento {
    display: flex;
    width: 100%;
    max-width: 1200px;
    padding: var(--bento-padding);
    gap: var(--bento-gap);
    background: var(--color-gray-100);
    border-radius: var(--bento-radius);
}

.bento-card {
    flex: 1;
    background: var(--color-white);
    border-radius: var(--radius-2xl);
    padding: var(--bento-padding-y) var(--bento-padding-x);
}
```

---

## 8. Composants

### Boutons

#### Primary
```css
.btn--primary {
    background: var(--color-black);
    color: var(--color-white);
    padding: 12px 24px;
    border-radius: var(--radius-full);
    font-weight: 600;
    font-size: 14px;
}
```

#### Secondary
```css
.btn--secondary {
    background: transparent;
    color: var(--color-black);
    border: 2px solid var(--color-black);
    padding: 10px 22px;
}
```

#### Yellow (sur fond sombre)
```css
.btn--yellow {
    background: var(--color-yellow);
    color: var(--color-black);
}
```

### Navigation Capsule
```css
.nav__menu {
    display: flex;
    gap: 24px;
    background: var(--color-black);
    padding: 8px 8px 8px 24px;
    border-radius: var(--radius-full);
}
```

### Cards
```css
.card {
    background: var(--color-white);
    border-radius: var(--radius-2xl);
    padding: var(--space-8);
}

.card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
}
```

---

## 9. Ton de voix

### Principes
- **Direct** : Pas de périphrases
- **Décontracté** : Tutoiement systématique
- **Confiant** : Pas de "peut-être", "on essaie"
- **Utile** : Chaque mot apporte de l'info

### Vocabulaire

| ✓ À utiliser | ✗ À éviter |
|--------------|------------|
| shipper, lancer | déployer |
| vite, rapide | dans les meilleurs délais |
| simple, clean | épuré, minimaliste |
| ça marche | ça performe |
| business | entreprise |
| on, tu | nous, vous |

### Exemples CTA
| ✓ OK | ✗ Non |
|------|-------|
| Un rendez-vous. Vite. | Demander un devis gratuit |
| On en parle ? | Nous contacter |
| Booker un call | Prendre rendez-vous |
| Comment ça marche | Notre méthodologie |

### Microcopy
| Contexte | Texte |
|----------|-------|
| Succès formulaire | "C'est envoyé ! On revient vers toi sous 24h." |
| Erreur email | "Oups, cet email a l'air cassé." |
| Champ manquant | "Il manque un truc là." |
| Loading | "Ça charge..." |
| Placeholder email | nom@tonbusiness.com |
| Label projet | "C'est quoi le projet ?" |
| Label budget | "Tu as combien à mettre ?" |

---

## 10. Structure Landing Page

### Template recommandé
1. **Nav** — transparent/blur, capsule noire
2. **Hero** — Yellow, logo + H1 + CTA + Bento cards
3. **Social proof** — White, logos clients
4. **Features** — Cream, 4 cards
5. **Process** — Gray 100, 3 étapes
6. **Portfolio** — White, grille screenshots
7. **Pricing** — Cream, 2-3 options
8. **Témoignages** — Yellow Light, 2 cards
9. **FAQ** — White, accordion
10. **CTA final** — Black, H2 + CTA
11. **Footer** — Black

### Règles d'alternance
- Jamais 2 sections jaunes consécutives
- Jamais plus de 2 sections blanches consécutives
- Noir réservé aux sections 10-11

---

## 11. Illustrations Pixel Art

### Palette
- Noir outline: #1D1D1B
- Blanc highlight: #FFFFFF
- Beige machine: #E8DCC4
- Beige ombre: #C9B896
- Vert écran: #A8B5A0
- Jaune accent: #FFE600

### Spécifications
- Résolution: 64×64 ou 128×128px base
- Export: upscale 4x-8x nearest neighbor
- Perspective: isométrique 30° ou 45°
- Outline: noir 1px, pas d'anti-aliasing
- Ombre: décalage 2-4px, bas-droite

### Sujets autorisés
- Mac vintage
- Clavier / touches
- Disquettes
- Souris

### Sujets interdits
- Personnages humains
- Animaux
- Tout hors tech/bureau

---

## 12. Checklist pré-lancement

### Branding
- [ ] Logo SVG optimisé
- [ ] Favicon 32x32 + 180x180
- [ ] OG Image 1200x630

### UI/UX
- [ ] États hover sur tous les boutons
- [ ] États focus accessibles
- [ ] Responsive testé 320px → 1440px
- [ ] Animations prefers-reduced-motion

### Contenu
- [ ] Pas de lorem ipsum
- [ ] Tout en français
- [ ] CTA clairs et actionnables
- [ ] Microcopy validé

### Performance
- [ ] Images WebP
- [ ] Lighthouse > 90
- [ ] Fonts preload

### Accessibilité
- [ ] Contraste WCAG AA
- [ ] Navigation clavier
- [ ] Alt text sur images
