# 🕵️ Undercover & Mr White

Le jeu d'imposteurs à jouer entre potes sur **un seul téléphone** qu'on se passe.

## Jouer

Ouvre `index.html` dans un navigateur, ou publie le dépôt avec GitHub Pages
(Settings → Pages → branche `main`, dossier `/`). Sur téléphone, « Ajouter à l'écran
d'accueil » : l'app s'ouvre en plein écran et marche même sans réseau.

## Déroulé

1. **Les mots** : chacun touche sa carte et découvre son mot en cachette.
2. **Les indices** : à tour de rôle, 1 ou 2 mots d'indice (Mr White ne commence jamais).
3. **Le débat** : minuteur (réglable ou désactivé), pause et +30 s.
4. **Le vote** : on touche le joueur éliminé, son rôle est révélé. En cas d'égalité, tirage au sort.
5. Mr White éliminé peut deviner le mot des Citizens pour voler la victoire.

Victoire des Citizens quand tous les imposteurs sont éliminés ; victoire des imposteurs
quand ils sont aussi nombreux que les Citizens. Points : Citizen +2, Mr White +6, Undercover +10.

## Les mots

Chaque paire reste dans **le même univers** mais n'est **jamais le jumeau évident** :
Sel / Farine plutôt que Sel / Poivre, Ketchup / Nutella plutôt que Ketchup / Mayo.
L'Undercover peut bluffer un tour, mais les indices finissent par le trahir.

**Méthode :** liste les traits du mot A, garde un trait *secondaire* et change tout le reste.
Parapluie (tenu à la main, protège, s'ouvre…) → on garde « on le tient pour se protéger » → **Bouclier**.

**Les 3 tests :**
- si on te donne A, B n'est pas dans tes 3 premières idées ;
- il existe un indice valable pour les deux (sinon c'est trop loin) ;
- il existe un indice qui ne marche que pour un seul (sinon c'est trop proche).

**Les pièges :**

| Piège | Exemple à éviter |
|---|---|
| Le jumeau | Sel / Poivre |
| La même fonction | Parapluie / K-way |
| Le tout et sa partie | Montre / Bracelet |
| Le mot et sa famille | Montre / Bijoux |
| L'univers trop étroit | Sapin de Noël / Bûche (tout est « Noël ») |
| Trop loin | Pizza / Voiture |

La banque (`WORD_BANK` dans `index.html`) compte 22 thèmes, et chacun peut ajouter
ses propres paires depuis l'app (« ✏️ Mes paires »).

## Pratique

- Joueurs, réglages, thèmes et classement sont mémorisés sur le téléphone.
- Partie reprise automatiquement après un rechargement ou un appel.
- Le bouton retour ouvre le menu au lieu de quitter la partie ; l'écran reste allumé.
- « Revoir mon mot » dans le menu pour ceux qui ont oublié.
