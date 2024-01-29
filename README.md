![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

# Backend Projet Angular - Gestion des Devoirs

## Auteurs 👨‍💻
- **Florian AIME**
- **Thibault CANAVAGGIO**

## Accès au Projet 🌐
- [Frontend](https://assignment-front-2c79479bd1b2.herokuapp.com/home)
- [Backend API](https://assignment-back-c0dfe7c8382c.herokuapp.com/api/assignments)
- [Repo du front](https://github.com/florian83440/projet_angular_m1_miage)

## Introduction 🚀
Bienvenue dans la partie backend du projet de gestion des devoirs. Ce backend a été développé dans le cadre du Master 1 MIAGE par Florian AIME et Thibault CANAVAGGIO.

## Objectif du Projet 🎯
Le projet vise à fournir une solution robuste pour la gestion des devoirs. Il inclut un backend API qui permet d'effectuer des opérations CRUD (Create, Read, Update, Delete) sur les données des devoirs, stockées dans une base de données MongoDB.

## Fonctionnalités du Backend 🛠️
### 1. **Devoirs**
   - Les opérations CRUD (Create, Read, Update, Delete) sont disponibles pour la gestion des devoirs.

### 2. **Enseignants**
   - Les opérations de lecture (Read), uniquement sont disponibles.
     
## Architecture du Backend 🔧
L'architecture de la base de données MongoDB  comporte deux collections : `assignments` et `teachers` *(en test actuellement)*. 

Voici une description de chacune d'elles :

### Collection `assignments`

La collection `assignments` stocke les informations relatives aux devoirs. Chaque document dans cette collection représente un devoir spécifique et suit un schéma similaire à l'exemple ci-dessous :

```json
{
  "id": 1,
  "nom": "Devoir angular",
  "dateDeRendu": {"$date": "2024-01-28T23:59:59.000Z"},
  "matiere_id": 2,
  "enseignant_id": 1,
  "note": 19,
  "auteur_id": 1,
  "comment": "Très bien !",
  "rendu": true
}
```

- `id`: Identifiant unique du devoir.
- `nom`: Nom du devoir.
- `dateDeRendu`: Date de rendu du devoir au format ISO 8601.
- `matiere_id`: Identifiant de la matière associée au devoir.
- `enseignant_id`: Identifiant de l'enseignant responsable du devoir.
- `note`: Note attribuée au devoir.
- `auteur_id`: Identifiant de l'auteur (étudiant) du devoir.
- `comment`: Commentaire associé au devoir.
- `rendu`: Indique si le devoir a été rendu ou non.

### Collection `teachers`

La collection `teachers` stocke les informations relatives aux enseignants. Chaque document dans cette collection représente un enseignant spécifique et suit un schéma similaire à l'exemple ci-dessous :

```json
{
  "id": 1,
  "nom": "BUFFA",
  "prenom": "Michel",
  "image_id": 1
}
```

- `id`: Identifiant unique de l'enseignant.
- `nom`: Nom de l'enseignant.
- `prenom`: Prénom de l'enseignant.
- `image_id`: Identifiant de l'image associée à l'enseignant (l'image est stocké sur le disque).


## Accès au Backend 🌐
Le backend est accessible à l'adresse suivante : [https://assignment-back-c0dfe7c8382c.herokuapp.com/api/assignments](https://assignment-back-c0dfe7c8382c.herokuapp.com/api/assignments)


## Technologies Utilisées 💻
- **Node.js:** Plateforme d'exécution pour le backend.
- **Express.js:** Framework web pour Node.js, utilisé pour la gestion des routes et des requêtes HTTP.
- **MongoDB:** Base de données NoSQL utilisée pour stocker les données des devoirs.

## Documentation 📖

### Routes pour la gestion des devoirs (`assignments`)

#### 1. Récupérer tous les devoirs
- **URL:** `GET /api/assignments`
- **Description:** Récupère la liste complète des devoirs.
- **Paramètres de requête:** Aucun.

#### 2. Récupérer un devoir spécifique
- **URL:** `GET /api/assignments/:id`
- **Description:** Récupère un devoir spécifique en fonction de son ID.
- **Paramètres de requête:** `id` - ID du devoir.

#### 3. Ajouter un nouveau devoir
- **URL:** `POST /api/assignments`
- **Description:** Ajoute un nouveau devoir à la base de données.
- **Paramètres de requête:** Les détails du devoir à ajouter dans le corps de la requête au format JSON.

#### 4. Mettre à jour un devoir existant
- **URL:** `PUT /api/assignments`
- **Description:** Met à jour les détails d'un devoir existant.
- **Paramètres de requête:** Les détails mis à jour du devoir dans le corps de la requête au format JSON.

#### 5. Supprimer un devoir
- **URL:** `DELETE /api/assignments/:id`
- **Description:** Supprime un devoir spécifique en fonction de son ID.
- **Paramètres de requête:** `id` - ID du devoir à supprimer.

### Route pour peupler la base de données (`peuplerbdd`)

#### 6. Peupler la base de données avec des données par défaut
- **URL:** `POST /api/peuplerbdd`
- **Description:** Peuple la base de données avec des données de devoirs par défaut.
- **Paramètres de requête:** Aucun.

### Route pour la gestion des enseignants (`teacher`)

#### 7. Récupérer tous les enseignants
- **URL:** `GET /api/teacher`
- **Description:** Récupère la liste complète des enseignants.
- **Paramètres de requête:** Aucun.

### Route pour peupler la base de données d'enseignants (`peuplerbdd-teacher`)

#### 8. Peupler la base de données des enseignants
- **URL:** `GET /api/peuplerbdd-teacher`
- **Description:** Peuple la base de données des enseignants avec des données par défaut.
- **Paramètres de requête:** Aucun.

## Mises à Jour Futures 🚀
Mettre en place la gestion des enseignants, étudiants et matières sur la base de données

## Installation et Exécution 🔧
1. Clonez le projet depuis le repository.
2. Assurez-vous d'avoir Node.js installé.
3. Installez les dépendances avec la commande `npm install`.
4. Lancez le backend avec la commande `npm start`.
5. Le backend sera accessible à l'adresse `http://localhost:8010/`.

## Contact
Pour tout problème, n'hésitez pas à nous contacter :

- Florian : [LinkedIn](https://www.linkedin.com/in/florian-aime/) / florian.aime@etu.unice.fr
- Thibault : thibault.canavaggio@etu.unice.fr
