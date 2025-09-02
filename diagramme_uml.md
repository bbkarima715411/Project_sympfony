# Diagramme UML - Site de Vente aux Enchères avec Chatbot

## Diagramme de Classes

```mermaid
classDiagram
    class User {
        -int id
        -string email
        -string password
        -string firstName
        -string lastName
        -string phone
        -DateTime createdAt
        -boolean isActive
        -UserRole role
        +register()
        +login()
        +updateProfile()
        +addToFavorites(Lot lot)
        +placeBid(Lot lot, float amount)
    }

    class Admin {
        +moderateLots()
        +moderateUsers()
        +manageCategories()
        +configureSiteSettings()
        +generateReports()
    }

    class Lot {
        -int id
        -string title
        -string description
        -float startingPrice
        -float estimatedValue
        -DateTime startDate
        -DateTime endDate
        -LotStatus status
        -Category category
        -User seller
        -string[] images
        +addImage(string imagePath)
        +updateStatus(LotStatus status)
        +getCurrentHighestBid()
        +isActive()
        +hasEnded()
    }

    class Category {
        -int id
        -string name
        -string description
        -string icon
        +getLots()
        +addLot(Lot lot)
    }

    class Bid {
        -int id
        -float amount
        -DateTime bidDate
        -User bidder
        -Lot lot
        -BidStatus status
        +validate()
        +isWinning()
    }

    class Payment {
        -int id
        -float amount
        -DateTime paymentDate
        -PaymentStatus status
        -PaymentMethod method
        -User user
        -Lot lot
        +processSimulatedPayment()
        +generateInvoice()
        +sendConfirmationEmail()
    }

    class Invoice {
        -int id
        -string invoiceNumber
        -DateTime issueDate
        -float totalAmount
        -Payment payment
        -string pdfPath
        +generatePDF()
        +sendByEmail()
    }

    class Favorite {
        -int id
        -User user
        -Lot lot
        -DateTime addedAt
        +remove()
    }

    class Chatbot {
        -int id
        -string sessionId
        -User user
        -DateTime startTime
        +processMessage(string message)
        +getFAQResponse(string question)
        +validateTopicRelevance(string message)
        +endSession()
    }

    class ChatMessage {
        -int id
        -string message
        -MessageType type
        -DateTime timestamp
        -Chatbot session
        +isFromUser()
        +isFromBot()
    }

    class FAQ {
        -int id
        -string question
        -string answer
        -string[] keywords
        -boolean isActive
        +findByKeywords(string[] keywords)
        +updateAnswer(string newAnswer)
    }

    class Notification {
        -int id
        -string title
        -string message
        -NotificationType type
        -User user
        -DateTime createdAt
        -boolean isRead
        +markAsRead()
        +send()
    }

    %% Énumérations
    class UserRole {
        <<enumeration>>
        USER
        ADMIN
    }

    class LotStatus {
        <<enumeration>>
        DRAFT
        ACTIVE
        ENDED
        CANCELLED
        SOLD
    }

    class BidStatus {
        <<enumeration>>
        VALID
        OUTBID
        WINNING
    }

    class PaymentStatus {
        <<enumeration>>
        PENDING
        COMPLETED
        FAILED
    }

    class PaymentMethod {
        <<enumeration>>
        CREDIT_CARD
        PAYPAL
        BANK_TRANSFER
    }

    class MessageType {
        <<enumeration>>
        USER_MESSAGE
        BOT_RESPONSE
        SYSTEM_MESSAGE
    }

    class NotificationType {
        <<enumeration>>
        BID_OUTBID
        LOT_ENDING_SOON
        PAYMENT_REMINDER
        AUCTION_WON
    }

    %% Relations
    User ||--o{ Bid : "places"
    User ||--o{ Favorite : "has"
    User ||--o{ Payment : "makes"
    User ||--o{ Notification : "receives"
    User ||--o{ Chatbot : "interacts with"
    Admin --|> User : "inherits"
    
    Lot ||--o{ Bid : "receives"
    Lot }o--|| Category : "belongs to"
    Lot ||--o{ Favorite : "favorited by"
    Lot ||--o{ Payment : "paid for"
    
    Bid }o--|| User : "placed by"
    Bid }o--|| Lot : "for"
    
    Payment ||--|| Invoice : "generates"
    Payment }o--|| User : "made by"
    Payment }o--|| Lot : "for"
    
    Chatbot ||--o{ ChatMessage : "contains"
    Chatbot }o--|| User : "belongs to"
    
    FAQ ||--o{ ChatMessage : "referenced in"
```

## Description des Classes Principales

### **User**
Représente les utilisateurs du système (visiteurs inscrits et enchérisseurs).
- Gère l'authentification et le profil
- Peut placer des enchères et gérer ses favoris

### **Admin**
Hérite de User avec des privilèges étendus pour la modération.
- Gère les lots, utilisateurs et paramètres du site

### **Lot**
Représente un objet d'antiquité mis aux enchères.
- Contient toutes les informations sur l'objet
- Gère son cycle de vie (brouillon → actif → terminé/vendu)

### **Bid**
Représente une enchère placée par un utilisateur.
- Validation automatique selon les règles métier
- Suivi du statut (valide, surenchéri, gagnante)

### **Payment**
Gère la simulation de paiement.
- Traitement simulé du paiement
- Génération de facture PDF

### **Chatbot**
Système de chat automatisé avec FAQ intégrée.
- Limite les questions au contexte des enchères
- Utilise une base de FAQ pour répondre

### **Notification**
Système d'alertes pour informer les utilisateurs.
- Notifications en temps réel (surenchère, fin d'enchère, etc.)

## Règles Métier Implémentées

1. **Enchères** : Montant supérieur au prix de départ et proche de l'estimation
2. **Annulation** : Lot annulé si aucune enchère ou enchère insuffisante
3. **Gagnant** : Déterminé à la clôture de l'enchère
4. **Chatbot** : Accès limité aux sujets liés aux enchères
5. **Paiement** : Simulation avec génération de facture PDF

## Technologies Utilisées
- **Backend** : Symfony (PHP)
- **Frontend** : JavaScript, Bootstrap (responsive design)
- **Temps réel** : AJAX pour mise à jour des enchères
- **PDF** : Génération de factures
- **Email** : Envoi de confirmations
