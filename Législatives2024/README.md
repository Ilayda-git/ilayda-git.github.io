# **🗳️ Élections législatives 2024 - Tour 1**

Analyse statistique des comportements électoraux régionaux en France

# 📌 Description du projet

Ce projet vise à explorer les dynamiques politiques régionales lors du premier tour des élections législatives françaises de 2024, à travers une approche statistique rigoureuse. Il s’appuie sur les données officielles des résultats électoraux par région et applique plusieurs méthodes d’analyse de données, notamment :

ACP (Analyse en Composantes Principales)
ACM (Analyse des Correspondances Multiples)
Clustering (classification hiérarchique et par consolidation)
L’objectif est de mettre en lumière les spécificités régionales, de repérer des regroupements politiques cohérents, et de comprendre les différences de comportements électoraux entre la métropole et l’Outre-mer.

# 👩‍💻 Réalisé par

Hafsa MOUSALLI
Imane LEMKHAYER
Ilayda YILMAZ

# 📁 Contenu du dépôt

ElectionLegislative-24.Rmd : Rapport complet en R Markdown avec visualisations et analyses détaillées.
resultats-definitifs-par-regions.csv : Données brutes issues d’OpenDataUniversity.
resultat_combiné_région_1.csv : Base transformée, regroupant les partis politiques en grandes familles.
ElectionLegislative-24.pdf : Version PDF générée du rapport (optionnelle à inclure si demandée).

# 📊 Méthodologie

Préparation des données
Nettoyage des fichiers bruts
Regroupement des partis en 6 grandes familles politiques
Calcul de nouveaux indicateurs (% exprimés, % votants, etc.)
Analyse exploratoire
Visualisation des corrélations entre variables électorales
Comparaison des taux de participation, d’abstention, de votes blancs/nuls
ACP
Étude des contributions des variables et des régions
Visualisation des oppositions entre métropole et Outre-mer
ACM
Transformation des pourcentages de voix en modalités (Faible/Moyen/Fort)
Étude des relations entre partis politiques et régions
Clustering
Segmentation des régions selon leur profil électoral
Analyse des clusters avec parangons et individus "typiques"

# 📦 Packages utilisés

Ce projet utilise notamment les packages R suivants :

tidyverse, FactoMineR, factoextra, ggplot2, ggcorrplot, skimr,
kableExtra, modelsummary, explor, cowplot, ggpubr, gridExtra


# 🧠 Résultats principaux

- Les régions d’Outre-mer se démarquent par des taux de participation plus faibles et une plus grande part de votes blancs/nuls.
- La métropole présente une homogénéité plus marquée, avec des variations plus subtiles entre les régions.
- L’extrême droite et l’Union de la Gauche constituent les deux grands pôles électoraux opposés.
- Le clustering révèle deux grands profils régionaux selon le soutien aux partis et le niveau de polarisation politique.

# 📝 Licence

Ce projet est réalisé dans un cadre académique. Vous êtes libre de le consulter, de l'adapter ou de vous en inspirer pour des projets similaires à but pédagogique.
