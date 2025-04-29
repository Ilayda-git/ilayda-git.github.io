# **Utilisation du Machine Learning pour la Détection Précoce des AVC**

Ce projet a été réalisé dans le cadre d'un travail de machine learning appliqué à la santé. L'objectif principal est de construire des modèles prédictifs capables d'identifier la survenue d'un accident vasculaire cérébral (AVC) à partir de données médicales et socio-démographiques. Dans ce contexte médical, la priorité a été donnée à la maximisation de la sensibilité, afin de limiter au maximum le nombre de faux négatifs.

Plusieurs modèles supervisés ont été développés, notamment LDA, la régression logistique, les machines à vecteurs de support (SVM linéaire et radial), les arbres de décision (CART), le k plus proches voisins (KNN), les forêts aléatoires (Random Forest) et le Boosting (XGBoost). L'ensemble des modèles ont été optimisés par validation croisée, en ajustant leurs hyperparamètres spécifiques et en utilisant des techniques de sur-échantillonnage comme SMOTE-NC pour corriger le déséquilibre des classes.

Les performances ont été évaluées à travers différentes métriques adaptées à la problématique, telles que la sensibilité, la spécificité, la précision, l'AUC et le F-score. Le modèle **SVM linéaire** a finalement été retenu, car il offre la meilleure capacité de détection des AVC, avec une sensibilité de 88,31 % et une AUC de 83,81 %, ce qui en fait le choix le plus cohérent dans une approche de dépistage médical.

Le projet a été entièrement développé en R, en s'appuyant sur les packages du tidyverse et du framework tidymodels.
