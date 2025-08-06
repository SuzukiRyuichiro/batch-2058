## Contexte et Objectifs

Aujourd'hui, tu vas créer une liste de cadeaux de Noël, comme tu l'as fait dans le module d'Introduction à Ruby, mais cette fois **avec un véritable front-end !**

Tu vas créer un formulaire qui te permettra d'ajouter des cadeaux à ta liste. Tu utiliseras aussi une [API](https://fakestoreapi.com/) pour obtenir des idées de cadeaux que tu pourras ajouter à ta liste.

La feuille de style Bootstrap est déjà liée dans le fichier `index.html`, alors n'hésite pas à utiliser ses classes prédéfinies ou à créer les tiennes dans `style.css` !

Note : il n'y aura pas de `rake` pour cet exercice ! Pour vérifier si ta page fonctionne, tu devras la tester toi-même dans le navigateur.

## 1. HTML et CSS

### 1.1. Créer un formulaire

![Formulaire et liste](https://raw.githubusercontent.com/lewagon/fullstack-images/master/frontend/js-reboot/step1.png)

Commençons par créer notre formulaire de cadeaux. Il devrait avoir les champs suivants :

1. Nom
2. Prix

Utilise un peu de CSS et/ou Bootstrap pour le rendre soigné et le centrer au milieu de la page. Ne t'inquiète pas de passer trop de temps dessus ; tu pourras y revenir à la fin si tu veux le rendre plus joli 🖌️

### 1.2. Créer une liste

Créons une liste avec deux ou trois éléments prédéfinis. Nous les supprimerons bientôt pour pouvoir ajouter des éléments via le formulaire ; ils sont juste là pour l'instant pour que nous puissions styliser notre liste :)

## 2. Formulaire JavaScript

![Formulaire et liste dynamiques](https://raw.githubusercontent.com/lewagon/fullstack-images/master/frontend/js-reboot/step2.gif)

Faisons fonctionner notre formulaire !

### 2.1. Écouter la soumission

À quel moment voulons-nous ajouter un élément à notre liste ? Quand nous **soumettons** notre formulaire, bien sûr !

Commence par sélectionner le formulaire. Puis, écoute la soumission du formulaire. Pour l'instant, nous pouvons simplement faire `console.log('Formulaire soumis !')` quand nous l'entendons.

Note : N'oublie pas que le comportement par défaut d'un formulaire est de rafraîchir la page à moins que tu ne lui indiques de ne pas le faire !

### 2.2. Récupérer les champs

Avant de commencer à penser à ajouter des choses à la liste, commençons par récupérer le nom et le prix des champs du formulaire.

Rappelle-toi que tu dois d'abord sélectionner chaque champ de saisie et _ensuite_ tu pourras accéder à sa valeur.

Pour vérifier si tu accèdes aux bons éléments, tu peux utiliser `console.log()` à chaque étape.

### 2.3. Ajouter les informations des champs à la liste

Maintenant que nous avons les informations du formulaire, sélectionnons notre liste et ajoutons notre cadeau à la **fin** de celle-ci.

## 3. Fetch et API

Il est parfois difficile de trouver des cadeaux pour tout le monde. Alors, utilisons la Fake Store API pour obtenir quelques idées ! Prends une minute pour lire la [documentation](https://fakestoreapi.com/docs) avant de commencer.

### 3.1. Créer un formulaire pour 'trouver des idées'

![Formulaire d'idées](https://raw.githubusercontent.com/lewagon/fullstack-images/master/frontend/js-reboot/step3.gif)

Pour notre formulaire d'idées, nous voulons avoir un menu déroulant avec les différentes catégories de la Fake Store API. Tu peux voir les options ici : `[https://fakestoreapi.com/products/categories](https://fakestoreapi.com/products/categories)`

```json
[
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing"
]
```

_Note : Le mot "jewelery" est mal orthographié, mais c'est comme ça dans l'API ! Nous ne pouvons pas le changer._

**Important :** Peu importe si tu as le texte affiché dans les options en majuscules ou non, mais la `valeur` de chacun _doit_ être écrite exactement comme [ici](https://fakestoreapi.com/products/categories)

Suis les mêmes étapes que pour ton formulaire précédent (HTML, CSS de base et écoute de la soumission).

### 3.2. À la soumission, appeler l'API

Nous allons faire une requête `fetch` pour appeler l'API.

Comme il y a un point de terminaison pour chaque catégorie, nous voulons nous assurer de pouvoir accéder à n'importe quel point de terminaison en utilisant le même code.

Voici un code pour commencer. N'oublie pas de d'abord récupérer la catégorie choisie par l'utilisateurice depuis le champ de saisie !

Voici un code qui fait un appel au point de terminaison de la catégorie "jewelery". Tu peux l'utiliser comme point de départ pour t'aider à comprendre comment faire des appels dynamiques à l'API selon la catégorie sélectionnée par l'utilisateurice.

```
fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(response => response.json())
            .then(data => console.log(data))
```

Utilise `console.log()` pour voir ce que tu as obtenu de l'API.

### 3.3. Afficher les idées de cadeaux dans une liste

![Afficher les idées de cadeaux](https://raw.githubusercontent.com/lewagon/fullstack-images/master/frontend/js-reboot/step4.gif)

Regarde attentivement ce que l'API t'a donné - quelles informations sont pertinentes pour notre liste ? Comment y accéder ?

Affichons les options de cadeaux dans une liste séparée pour que l'utilisateurice puisse voir les choix disponibles.

Dans un moment, nous voudrons pouvoir sélectionner des idées et les ajouter à notre liste principale, alors tu peux créer un bouton "Ajouter" pour chacune.

### 3.4. Choisir une idée et l'ajouter à la liste

![Sélectionner des idées de cadeaux](https://raw.githubusercontent.com/lewagon/fullstack-images/master/frontend/js-reboot/step5.gif)

Maintenant, quand un clic est entendu sur le bouton "Ajouter" de chaque idée, retirons cet élément de la liste d'idées et ajoutons-le à la liste principale de cadeaux.

## Optionnels

### Cliquer sur un élément pour le barrer

![Sélectionner des idées de cadeaux](https://raw.githubusercontent.com/lewagon/fullstack-images/master/frontend/js-reboot/step6.gif)

As-tu déjà acheté un cadeau ? Génial ! Alors, barrons-le dans notre liste.

Pour les éléments que nous ajoutons via notre formulaire et aussi ceux qui viennent de notre liste d'idées, écoute un clic. En cliquant, nous voulons barrer l'élément.

🤔 Bonus : Peux-tu faire en sorte qu'au survol d'un élément, la souris se transforme en 👆🏽 ?

### Sauvegarder la liste

Remarque comment, en rafraîchissant la page, nous perdons les éléments que nous avons ajoutés à notre liste. Peux-tu stocker les éléments dans [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) au fur et à mesure que nous les ajoutons et les charger lors du rafraîchissement ?

### Améliorer avec des packages JS

Essaie d'implémenter [Tom Select](https://tom-select.js.org/) pour améliorer l'apparence de la liste déroulante.
