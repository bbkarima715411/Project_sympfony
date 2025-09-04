# Project Symfony - Site d'Enchères d'Antiquités

## Cahier des charges

### Contexte & Objectifs

Réaliser un site d'enchères d'antiquités avec Symfony.

**Caractéristiques principales :**
- Pas de paiement réel : simulation de paiement et génération d'une facture PDF factice envoyée par mail avec confirmation de commande
- **Visiteur** : parcourir les lots, recherche, voir détails, s'inscrire
- **Utilisateur (enchérisseur)** : profil, placer enchères, suivre favoris, "payer" (simulation)

### Catalogue & Enchères

**Page d'accueil :**
- Lots en cours
- Prochains lots
- Filtres (catégorie, période, prix)

**Fiche lot :**
- Photos, description, catégorie
- Prix de départ, estimation de valeur
- Date/heure de début et de fin
- Enchère la plus haute

**Fonctionnalités temps réel :**
- Alerte simple : message flash si surenchéri ou nouvelle enchère
- "Temps réel" léger : auto-refresh de l'enchère courante toutes les secondes (AJAX)

### Comptes & Sécurité

- Inscription / connexion

### Paiement Simulé & Facture

- Pour le lot remporté : bouton "Payer (simulation)", statut "payé"
- Génération PDF facture envoyée par mail

### Chatbot

- Encoder FAQ
- Limiter l'accès à toutes questions hors sujet de l'article en enchère


## Règles

1. **Enchères** : Une enchère doit être supérieure au prix de départ et égale plus ou moins à l'estimation
2. **Annulation** : Si enchère inférieure ou pas d'enchère, le lot est annulé
3. **Gagnant** : Le gagnant est déterminé à la clôture de l'enchère

## Outils Utilisés

- **Framework** : Symfony
- **Frontend** : JavaScript, Bootstrap
- **Design** : Responsive design
- **Technologies** : AJAX
- **Images** : Photos générées avec IA 


## Barre de Navigation

### Menu Principal

- **Accueil**
- **Catégories** (menu déroulant)
  - **Mobilier**
    - Sièges & Fauteuils
    - Tables & Bureaux
    - Armoires & Commodes
  - **Tableaux & Arts graphiques**
    - Peintures anciennes
    - Gravures & Dessins
    - Affiches anciennes
  - **Bijoux & Montres**
    - Bijoux anciens
    - Montres de collection
    - Objets précieux
    - Monnaies & Médailles
  - **Art d'Orient & Ethnique**
    - Objets asiatiques
    - Objets africains
    - Objets amérindiens
- **Mon compte** (si connecté : profil, mes enchères, mes favoris, mes factures)
- **Contact**
- **Chatbot** (FAQ interactive)
