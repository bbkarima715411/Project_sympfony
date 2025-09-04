Project_sympfony



Cahier des charges



Contexte & objectifs

Réaliser un site d’enchères d’antiquités avec Symfony.

Pas de paiement réel : simulation de paiement et génération d’une facture PDF factice et envoyé par mail avec confirmation de commande.

Visiteur : parcourir les lots, recherche, voir détails, s’inscrire.

Utilisateur (enchérisseur) : profil, placer enchères, suivre favoris, “payer” (simulation).


Catalogue & enchères

Page d’accueil avec lots en cours, prochains lots, filtres (catégorie, période, prix).

Fiche lot : photos, description, catégorie, prix de départ, estimation valeur date/heure de début et de fin, enchère la plus haute.


Alerte simple : message flash si surenchéri ou nouvelle enchère.

“Temps réel” léger : auto-refresh de l’enchère courante toutes les secondes (AJAX).


Comptes & sécurité

Inscription / connexion.



Paiement simulé & facture

Pour le lot remporté : bouton “Payer (simulation)”, statut “payé”.

Génération PDF facture envoyé par mail.


Chatbot

Encoder FAQ, limiter acces a toutes questions hors sujet de l'article en enchère




Règles

Une enchère doit être doit etre superieur au prix de départ et égale plus ou moin a l'estimation.

Si enchèer inférieur ou pas d'enchère annulé le lot.

Le gagnant est l'enchère est clôture.

Outils utilisés : Symfony, JS, responive design, ajax, boostrap.



Photo génére avec ia 


Barre de navigation 


Accueil


Catégories (menu déroulant)
+++++Mobilier

    +++++Sièges & Fauteuils

    +++++Tables & Bureaux

    +++++Armoires & Commodes

++++++Tableaux & Arts graphiques

    ++++++Peintures anciennes

    ++++++Gravures & Dessins

    ++++++Affiches anciennes

+++++++Bijoux & Montres

    ++++++Bijoux anciens

    ++++++Montres de collection

    ++++++Objets précieux

    Monnaies & Médailles


+++++++Art d’Orient & Ethnique

    +++++Objets asiatiques

    +++++Objets africains

    +++++Objets amérindiens



Mon compte 
(si connecté : profil, mes enchères, mes favoris, mes factures)

Contact 

Chatbot (FAQ interactive)






