---
name: studio-facile-brand
description: Brand guide et design system pour Studio Facile. Utiliser ce skill pour créer tout asset de la marque Studio Facile, incluant landing pages, posts réseaux sociaux (Instagram, LinkedIn, Twitter), stories, carrousels, présentations, documents (devis, propositions), emails, et tout autre support visuel ou écrit. Ce skill définit les couleurs, typographies (Manrope + PP Editorial Old), spacing, composants UI, ton de voix, et templates pour chaque type d'asset.
---

# Studio Facile Brand Skill

Ce skill permet de créer des assets cohérents pour la marque Studio Facile.

## Identité rapide

- **Tagline** : Landing pages *super faciles* pour business *super chauds*
- **Personnalité** : Direct, confiant, décontracté, technique mais accessible
- **Tutoiement** systématique

## Couleurs principales

| Token | Hex | Usage |
|-------|-----|-------|
| `yellow` | #FFE600 | Accent principal, hero, CTA |
| `black` | #1D1D1B | Texte, boutons, footer |
| `white` | #FFFFFF | Backgrounds |
| `cream` | #FFFDF7 | Backgrounds alternatifs |
| `gray-100` | #F5F5F5 | Backgrounds sections |
| `gray-600` | #6A6A6A | Body text secondaire |

## Typographie

| Police | Usage |
|--------|-------|
| **Manrope** (400-800) | Tout le texte, titres, body |
| **PP Editorial Old** (Ultrabold Italic) | Accents serif dans titres uniquement |

### Classe `.serif-accent`
```css
font-family: 'PP Editorial Old', Georgia, serif;
font-style: italic;
font-weight: 700;
letter-spacing: -0.03em;
```
Usage : max 3-4 mots par titre ("super faciles", "super chauds")

## Spacing (base 8px)

| Token | Value | Usage courant |
|-------|-------|---------------|
| `space-4` | 16px | Gaps éléments |
| `space-6` | 24px | Gaps grilles, padding boutons |
| `space-8` | 32px | Padding cards |
| `space-9` | 40px | Bento gap/padding |
| `space-14` | 96px | Padding sections |

## Radius

| Token | Value | Usage |
|-------|-------|-------|
| `radius-md` | 8px | Boutons, badges |
| `radius-2xl` | 24px | Cards |
| `radius-3xl` | 32px | Bento containers |
| `radius-full` | 9999px | Pills, boutons ronds |

## Composants clés

**Bouton primary** : `bg: #1D1D1B, color: white, padding: 12px 24px, radius: full`

**Card** : `bg: white, radius: 24px, padding: 32px, border: 1px solid #F5F5F5`

**Badge/Pill** : `bg: #FFF9CC, padding: 8px 16px, radius: full, font: 12px uppercase`

## Par type d'asset

### Landing page
Consulter `references/landing-page.md` pour la structure complète et les sections.

### Réseaux sociaux
Consulter `references/social-media.md` pour les formats et templates.

### Documents & Présentations
Consulter `references/documents.md` pour les specs print et slides.

### Emails
Consulter `references/emails.md` pour la structure et le ton.

## Ton de voix

| ✅ Utiliser | ❌ Éviter |
|-------------|-----------|
| shipper, lancer | déployer |
| vite, rapide | dans les meilleurs délais |
| on, tu | nous, vous |
| call, brief | rendez-vous, cahier des charges |

**CTA exemples** : "Booker un call", "Tester mon éligibilité", "C'est parti"

## Assets disponibles

- `assets/fonts/` : PP Editorial Old (OTF)
- `assets/logo/` : Logo SVG (à créer)
- `assets/illustrations/` : Pixel art (à créer)

## Ressources détaillées

Pour les specs complètes, consulter :
- `references/brand-guide.md` : Guide complet avec toutes les specs
- `references/landing-page.md` : Structure et composants landing
- `references/social-media.md` : Formats et templates sociaux
- `references/documents.md` : Specs documents et présentations
- `references/emails.md` : Templates email
