# Détection Précoce des AVC par Machine Learning

**Auteurs** : Mathias Depussay · Ilayda Yilmaz  
---

## Objectif

Ce projet vise à développer un modèle de machine learning capable de **prédire la survenue d’un AVC** (Accident Vasculaire Cérébral) à partir de **données médicales et socio-démographiques**.  
L'enjeu principal est de maximiser la **détection des individus à risque**, afin d'améliorer la prévention en milieu médical.

---

## Données

- **Nom** : Healthcare Stroke Dataset  
- **Taille** : 5110 individus · 11 variables  
- **Types de données** : numériques, catégorielles et binaires  
- **Variables clés** :
  - `age`, `avg_glucose_level`, `bmi` (quantitatives)
  - `hypertension`, `heart_disease`, `smoking_status`, etc. (facteurs de risque)

Le déséquilibre des classes (seulement 4.9 % de cas positifs) a été traité via **SMOTE-NC** pour améliorer la performance des modèles.

---

## Méthodologie

1. **Prétraitement des données**
   - Imputation des valeurs manquantes (`bmi`, `smoking_status`)
   - Encodage des variables catégorielles
   - Normalisation et réduction de colinéarité via ACP

2. **Sélection des modèles**
   - Modèles linéaires : LDA, LOGIT
   - Méthodes non linéaires : KNN, SVM (linéaire et radial), CART, Random Forest, Boosting
   - Optimisation des hyperparamètres par validation croisée

3. **Critères d’évaluation**
   - Sensibilité (rappel), précision, F-score, AUC
   - Importance donnée à la **sensibilité** pour éviter les faux négatifs

---

## Modèle retenu

Le **SVM linéaire** a été sélectionné pour sa **sensibilité élevée (88.31%)** et sa **bonne capacité de discrimination (AUC = 83.81%)**.  
Il permet de détecter efficacement les patients à risque, malgré une précision modérée, ce qui est acceptable dans un contexte médical.

---

## Technologies utilisées

- **Langage** : R  
- **Packages principaux** : `tidymodels`, `themis`, `xgboost`, `recipes`, `dplyr`, `ggplot2`

---

## Conclusion

Le projet démontre qu’il est possible d’utiliser des modèles de machine learning performants pour anticiper les risques d’AVC à partir de données simples.  
L'approche adoptée privilégie la **détection des cas réels**, ce qui est crucial pour la prévention dans le domaine de la santé.

---
