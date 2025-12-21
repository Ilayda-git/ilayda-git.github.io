# Économétrie – Analyse des ventes de cigares

**Auteures :** Imane Lemkhayer · Ilayda Yilmaz · Hafsa Mousalli

---

## Objectif

Ce projet a pour objectif d’identifier les principaux déterminants des ventes de cigares aux États-Unis à partir de données de panel.  
L’étude mobilise différents modèles économétriques afin de mesurer l’influence des facteurs économiques, démographiques et temporels. 
lien  : https://ilayda-git.github.io/Ventes-des-cigares/Ventes-Cigares.html

---

## Données

- **Source** : base `Cigar` du package `plm`
- **Période** : 1963 à 1992
- **Unités** : 46 États
- **Variables clés** :
  - `sales` : ventes de cigares (en millions de paquets)
  - `price`, `cpi`, `ndi` : variables économiques
  - `pop`, `pop16`, `pimin` : variables démographiques
  - `state`, `year` : identifiants de panel

---

## Méthodologie

Trois approches économétriques sont comparées :

- **Modèle poolé (OLS)**
- **Modèle à effets fixes**
- **Modèle à effets aléatoires**

### Tests effectués

- **Hausman** : choix entre effets fixes et aléatoires
- **Fisher** : présence d’effets individuels
- **Breusch–Pagan** : comparaison poolé vs effets aléatoires

---

## Résultats

- Le **modèle à effets fixes** est statistiquement préféré.
- Les variables **prix**, **revenu disponible (NDI)** et **part des consommateurs (pimin)** ont un impact significatif sur les ventes.
- Le **prix** a un effet négatif, traduisant une sensibilité au coût.
- Le modèle à effets fixes explique **44 % de la variance**, contre 35 % pour les effets aléatoires et 24 % pour le modèle poolé.

---


## Technologies utilisées

- R, RMarkdown  
- Packages : `plm`, `dplyr`, `ggplot2`, `stargazer`, `data.table`

---
