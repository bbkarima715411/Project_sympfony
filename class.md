# Site de Vente aux Enchères avec Chatbot

## Classes

### Utilisateur
```
class Utilisateur {
    - email : string
    - motDePasse : string
    - prenom : string
    - nom : string
    - telephone : string
}
```

### Lot
```
class Lot {
    - titre : string
    - description : string
    - prixDepart : float
    - valeurEstimee : float
    - dateDebut : DateTime
    - dateFin : DateTime
    - statut : StatutLot
    - categorie : Categorie
    - images : string[]
}
```

### Categorie
```
class Categorie {
    - nom : string
    - description : string
}
```

### Paiement
```
class Paiement {
    - montant : float
    - datePaiement : DateTime
    - statut : StatutPaiement
    - methode : MethodePaiement
}
```

### Facture
```
class Facture {
    - numeroFacture : string
    - dateEmission : DateTime
    - montantTotal : float
    - paiement : Paiement
    - cheminPDF : string
    + genererPDF()
    + envoyerParEmail()
}
```

### Chatbot
```
class Chatbot {
    - idSession : string
    - utilisateur : Utilisateur
}
```

### Notification
```
class Notification {
    - titre : string
    - message : string
}
```

### MethodePaiement
```
class MethodePaiement { }
```

## Description des Classes Principales

### Utilisateur
Représente les utilisateurs du système (visiteurs inscrits et enchérisseurs).
- Gère l'authentification et le profil
- Peut placer des enchères et gérer ses favoris

### Lot
Représente un objet d'antiquité mis aux enchères.
- Contient toutes les informations sur l'objet
- Gère son cycle de vie (brouillon → actif → terminé/vendu)

### Paiement
Gère la simulation de paiement.
- Traitement simulé du paiement
- Génération de facture PDF

### Chatbot
Système de chat automatisé avec FAQ intégrée.
- Limite les questions au contexte des enchères
- Utilise une base de FAQ pour répondre

### Notification
Système d'alertes pour informer les utilisateurs.
- Notifications en temps réel (surenchère, fin d'enchère, etc.)

## Règles

1. **Enchères** : Montant supérieur au prix de départ et proche de l'estimation
2. **Annulation** : Lot annulé si aucune enchère ou enchère insuffisante
3. **Gagnant** : Déterminé à la clôture de l'enchère
4. **Chatbot** : Accès limité aux sujets liés aux enchères
5. **Paiement** : Simulation avec génération de facture PDF
