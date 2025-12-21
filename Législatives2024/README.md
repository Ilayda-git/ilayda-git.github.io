# Élections législatives 2024 – Tour 1  
**Analyse statistique des dynamiques électorales régionales**

**Auteures :** Imane Lemkhayer · Ilayda Yilmaz · Hafsa Mousalli

## Présentation

Ce projet propose une analyse statistique des résultats du **premier tour des élections législatives françaises de 2024**, à l’échelle régionale. À l’aide de méthodes exploratoires et multivariées, l’objectif est de comprendre les comportements électoraux et les regroupements politiques dans un contexte marqué par la diversité territoriale.

## Objectifs

- Identifier des profils électoraux régionaux.
- Mettre en évidence les grands axes de variation du vote.
- Regrouper les régions selon leurs tendances politiques.
- Analyser la structure du paysage électoral français.

## Données

- **Source** : OpenDataUniversity  
- **Format brut** : Résultats par région et par nuance politique  
- **Traitement** : Agrégation en 6 grandes familles politiques :
  - Union de la Gauche (UG)
  - Extrême Gauche (EG)
  - Union de la Droite (UD)
  - Extrême Droite (ED)
  - Parti Présidentiel (P)
  - Indépendants (IND)

## Méthodologie

- **Nettoyage et transformation** des données.
- **Analyse en Composantes Principales (ACP)** : exploration des variables électorales (% votants, exprimés, blancs, etc.).
- **Analyse des Correspondances Multiples (ACM)** : étude des voix par famille politique selon des modalités (faible, moyen, fort).
- **Clustering** (classification hiérarchique) : regroupement des régions selon leur profil électoral.

## Résultats

L’analyse met en évidence une **polarisation nette entre l’Union de la Gauche et l’Extrême Droite**, principales forces structurantes du vote. Deux grands ensembles régionaux se distinguent :

- Les **régions métropolitaines**, relativement homogènes, présentent un fort engagement électoral et une répartition plus classique des forces politiques.
- Les **régions d’Outre-mer**, marquées par une plus forte abstention, un recours plus fréquent au vote blanc ou nul, et un soutien plus fragmenté, traduisent des dynamiques électorales propres.

Cette segmentation reflète les contrastes entre enjeux nationaux et préoccupations locales dans le cadre des élections législatives de 2024.

## Technologies utilisées

- **Langage** : R  
- **Packages principaux** :
  - `tidyverse`, `FactoMineR`, `factoextra`, `explor`
  - `ggplot2`, `ggcorrplot`, `kableExtra`, `skimr`, `ggpubr`, `HCPC`


