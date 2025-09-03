Site de Vente aux Enchères avec Chatbot

Classes


    class User {
        -string email
        -string password
        -string firstName
        -string lastName
        -string phone

    }


    class Lot {
        -string title
        -string description
        -float startingPrice
        -float estimatedValue
        -DateTime startDate
        -DateTime endDate
        -LotStatus status
        -Category category
        -string[] images

    }

    class Category {
        -string name
        -string description
    }

 

    class Payment {
        -float amount
        -DateTime paymentDate
        -PaymentStatus status
        -PaymentMethod method
    }

    class Invoice {
        -string invoiceNumber
        -DateTime issueDate
        -float totalAmount
        -Payment payment
        -string pdfPath
        +generatePDF()
        +sendByEmail()
    }



    class Chatbot {
        -string sessionId
        -User user
    }




    class Notification {
        -string title
        -string message

    }


    class PaymentMethod {

    }


```

Description des Classes Principales

User
Représente les utilisateurs du système (visiteurs inscrits et enchérisseurs).
- Gère l'authentification et le profil
- Peut placer des enchères et gérer ses favori


Lot
Représente un objet d'antiquité mis aux enchères.
- Contient toutes les informations sur l'objet
- Gère son cycle de vie (brouillon → actif → terminé/vendu)


Payment
Gère la simulation de paiement.
- Traitement simulé du paiement
- Génération de facture PDF

Chatbot
Système de chat automatisé avec FAQ intégrée.
- Limite les questions au contexte des enchères
- Utilise une base de FAQ pour répondre

Notification
Système d'alertes pour informer les utilisateurs.
- Notifications en temps réel (surenchère, fin d'enchère, etc.)



Règles

1. Enchères : Montant supérieur au prix de départ et proche de l'estimation
2. Annulation : Lot annulé si aucune enchère ou enchère insuffisante
3. Gagnant : Déterminé à la clôture de l'enchère
4. Chatbot : Accès limité aux sujets liés aux enchères
5. Paiement : Simulation avec génération de facture PDF
