# SAE401 - Alexis BERNARD

Bienvenue sur la page du projet pour le cours SAE401. Ce document contient toutes les informations essentielles pour accéder aux différentes ressources du projet.

## Informations Générales

- **Étudiant:** Alexis BERNARD
- **Cours:** SAE401

## Ressources du Projet

### Site Web

L'URL du site pour accéder au projet est disponible ci-dessous:

- [Accéder au site](https://sae401.alexisbernardev.fr/)
- [Backup](https://sae401-alexisbernard.netlify.app/)

### Base de Données Supabase

Pour voir les types et structures utilisés dans la base de données Supabase, suivez le lien suivant:

- [Types Supabase](https://github.com/MMI-NFC-DEV-2022/sae-401-GitAlexisBERNARD/blob/main/src/types.ts)

### Design sur Figma

Le design et les maquettes du projet ont été réalisés sur Figma. Vous pouvez les consulter via le lien ci-dessous:

- [Voir le design sur Figma](https://www.figma.com/file/Mkb7jmillHprRNexw6cSv6/Maquettes-site-film-SAE-401?type=design&node-id=1%3A23&mode=design&t=JM7dyhTr5n4cKhUp-1)

## Fonctionnalités du Projet

Cette section liste toutes les fonctionnalités principales du projet avec des liens directs vers le site web pour une démonstration en direct et le code source sur GitHub pour les détails techniques.

## Fonctionnalités du Projet

Le site web a été conçu pour offrir une plateforme d'affichage d'informations sur les films, permettant aux utilisateurs de naviguer, de découvrir, et d'interagir avec une base de données riche en contenus cinématographiques. Voici un aperçu des principales fonctionnalités :

### Affichage des Films

- **Carousel Mobile et Grid Desktop :** Présentation des films sous forme de carousel sur mobile et en grille sur desktop, affichant tous les films de la base de données

  - [Démonstration](https://sae401.alexisbernardev.fr/)
  - [Code Source](https://github.com/MMI-NFC-DEV-2022/sae-401-GitAlexisBERNARD/blob/main/src/pages/index.vue)

- **Films Nouveautés et Créations Utilisateurs :** Un carousel distinct met en avant les films étiquetés comme nouveautés et les films créés par les utilisateurs.
  base de données
  - [Démonstration](https://sae401.alexisbernardev.fr/)
  - [Code Source](https://github.com/MMI-NFC-DEV-2022/sae-401-GitAlexisBERNARD/blob/main/src/pages/index.vue)

### Découverte et Gestion des Films

- **Page Tous les Films :** Affiche la collection complète des films sans limitation de la base de données.

  - [Démonstration](https://sae401.alexisbernardev.fr/films)
  - [Code Source](https://github.com/MMI-NFC-DEV-2022/sae-401-GitAlexisBERNARD/blob/main/src/pages/films/index.vue)

- **Détails du Film :** Accès complet aux informations d'un film listées dans Supabase, incluant un carousel des acteurs et la possibilité de mettre le film en favori.

  - [Démonstration](https://sae401.alexisbernardev.fr/films/2)
  - [Code Source](https://github.com/MMI-NFC-DEV-2022/sae-401-GitAlexisBERNARD/blob/main/src/pages/films/%5Bid%5D.vue)

- **Fonction Favoris :** Les utilisateurs peuvent ajouter des films à leur liste de favoris, avec un changement de couleur sur l'icone de like sur l'icône de like non automatiquement mise à jour.

### Exploration des Acteurs et Créateurs

- **Page Acteurs :** Affiche tous les acteurs et permet de visualiser les films dans lesquels ils ont joué.

  - [Démonstration page acteur](https://sae401.alexisbernardev.fr/acteur)
  - [Code Source page acteur](https://github.com/MMI-NFC-DEV-2022/sae-401-GitAlexisBERNARD/blob/main/src/pages/acteur.vue)
  - [Démonstration Page d'un acteur](https://sae401.alexisbernardev.fr/films/acteur/7)
  - [Code Source Page un acteur](https://github.com/MMI-NFC-DEV-2022/sae-401-GitAlexisBERNARD/blob/main/src/pages/films/acteur/%5Bid%5D.vue)

- **Page Réalisateurs et Producteurs :** Permet d'explorer les informations sur les réalisateurs et producteurs associés aux films.

  - [Démonstration](https://sae401.alexisbernardev.fr/films/2)
  - [Code Source](https://github.com/MMI-NFC-DEV-2022/sae-401-GitAlexisBERNARD/blob/main/src/pages/films/%5Bid%5D.vue)

### Interaction Utilisateur

- **Authentification :** Connexion via un mot de passe ou GitHub, permettant l'accès à des fonctionnalités personnalisées.

  - [Démonstration](https://sae401.alexisbernardev.fr/connexion)
  - [Code Source](https://github.com/MMI-NFC-DEV-2022/sae-401-GitAlexisBERNARD/blob/main/src/pages/acteur.vue)

- **Espace Utilisateur :** Les utilisateurs connectés peuvent créer des films, les ajouter aux films utilisateurs, et consulter leur liste de films favoris.
  - [Démonstration](https://sae401.alexisbernardev.fr/userprofile)
  - [Code Source](https://github.com/MMI-NFC-DEV-2022/sae-401-GitAlexisBERNARD/blob/main/src/pages/userprofile.vue)

**Note Importante :** Un problème connu est l'absence de rechargement automatique pour l'indication des films mis en favoris, et les limitations liées à la gestion des images utilisateur.

