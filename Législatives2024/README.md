# 🗳️ Élections législatives 2024 – Tour 1  
*Analyse statistique des comportements électoraux régionaux en France*

## 📚 Description

Ce projet présente une **analyse statistique approfondie des résultats du premier tour des élections législatives françaises de 2024**, à l’échelle régionale. L’objectif est de mettre en évidence des **dynamiques électorales**, de **repérer des regroupements cohérents** entre régions et partis, et de **comprendre les comportements électoraux** à travers des outils statistiques.

L’étude s’appuie notamment sur :
- l’**Analyse en Composantes Principales (ACP)**,
- l’**Analyse des Correspondances Multiples (ACM)**,
- et des techniques de **clustering** (classification hiérarchique et consolidation).

---

## 👥 Auteurs

- **MOUSALLI Hafsa**  
- **LEMKHAYER Imane**  
- **YILMAZ Ilayda**

---

## 🗂️ Contenu du dépôt

- `ElectionLegislative-24.Rmd` – Rapport complet (code + analyse).
- `ElectionLegislative-24.pdf` – Version PDF du rapport (si générée).
- `resultats-definitifs-par-regions.csv` – Données brutes.
- `resultat_combiné_région_1.csv` – Données nettoyées et agrégées.
- Fichiers PNG – Graphiques générés automatiquement.

---

## 🧪 Méthodologie

### 1. **Préparation des données**
- Extraction depuis OpenDataUniversity.
- Regroupement des partis en **6 grandes familles politiques**.
- Calcul de pourcentages : exprimés/inscrits, blancs/nuls, etc.

### 2. **Analyse statistique**
- **ACP** : Étude des corrélations et contributions des variables.
- **ACM** : Transformation en modalités (Faible, Moyen, Fort).
- **Clustering** : Classification des régions selon leur profil politique.

---

## 📈 Résultats clés

- **Les régions d’Outre-mer** affichent une participation plus faible et des votes blancs/nuls plus fréquents.
- **La métropole** est plus homogène dans ses comportements électoraux.
- Deux grands blocs électoraux dominent :  
  ➤ **Union de la Gauche**  
  ➤ **Extrême Droite**  
- Le **clustering** révèle deux profils régionaux distincts :  
  1. Régions fortement politisées, marquées par la polarisation.  
  2. Régions peu peuplées, aux dynamiques électorales plus locales.

---

## 📦 Technologies

Ce projet utilise R avec les packages suivants :

- `tidyverse`, `FactoMineR`, `factoextra`, `ggplot2`, `ggcorrplot`  
- `explor`, `skimr`, `modelsummary`, `kableExtra`, `ggpubr`, etc.

---

## 📝 Licence

Projet académique à but pédagogique.  
Libre d’utilisation, de consultation et de réutilisation à des fins non commerciales.


