---
id: 3ac-angles-inscrits
titre: Angle inscrit et angle au centre
niveau: 3ac
semestre: 1
duree: 6 heures
---

## Objectifs
- Reconnaître un angle inscrit et un angle au centre, ainsi que l’arc qu’ils interceptent.
- Connaître et utiliser la relation entre un angle inscrit et l’angle au centre associé.
- Connaître et utiliser l’égalité de deux angles inscrits qui interceptent le même arc.

## Prérequis
- Cercle : centre, rayon, corde, diamètre, arc.
- Somme des angles d’un triangle ; triangle isocèle.
- Triangle rectangle inscrit dans un demi-cercle (2AC).

# I. Angle au centre et angle inscrit

## 1. Angle au centre

:::definition
Dans un cercle de centre $O$, un **angle au centre** est un angle dont le sommet est le centre $O$ du cercle.
:::

## 2. Angle inscrit

:::definition
Dans un cercle, un **angle inscrit** est un angle dont le sommet est un point du cercle et dont les côtés coupent le cercle en deux autres points.
:::

:::vocabulaire
Si $A$, $B$ et $M$ sont trois points d’un cercle $(\mathcal C)$ de centre $O$ :
- l’angle $\widehat{AMB}$ est un angle inscrit qui **intercepte** l’arc $\overset{\frown}{AB}$ (celui qui ne contient pas $M$) ;
- l’angle au centre $\widehat{AOB}$ intercepte le même arc : on dit qu’il est **associé** à l’angle inscrit $\widehat{AMB}$.
:::

```figure
{"type":"geometry","x":[-3.4,3.4],"y":[-3.4,3.4],"width":300,
 "circles":[{"c":[0,0],"r":3}],
 "segments":[{"from":[0,3],"to":[-2.6,-1.5],"color":"brand"},{"from":[0,3],"to":[2.6,-1.5],"color":"brand"},{"from":[0,0],"to":[-2.6,-1.5],"color":"ink"},{"from":[0,0],"to":[2.6,-1.5],"color":"ink"}],
 "points":[{"x":0,"y":0,"label":"O"},{"x":0,"y":3,"label":"M"},{"x":-2.6,"y":-1.5,"label":"A"},{"x":2.6,"y":-1.5,"label":"B"}],
 "caption":"$\\widehat{AMB}$ (en vert) est inscrit, $\\widehat{AOB}$ (en bleu) est l’angle au centre associé : $\\widehat{AOB}=120^\\circ$ et $\\widehat{AMB}=60^\\circ$."}
```

# II. Angle inscrit et angle au centre associé

:::propriete
Dans un cercle, la mesure d’un angle inscrit est égale à la **moitié** de la mesure de l’angle au centre qui intercepte le même arc :
$$\widehat{AMB}=\frac12\,\widehat{AOB}.$$
:::

:::demonstration Cas où $[MA]$ est un diamètre
Le triangle $OMB$ est isocèle en $O$ ($OM=OB$), donc $\widehat{OMB}=\widehat{OBM}$. L’angle $\widehat{AOB}$ est un angle extérieur du triangle $OMB$ : $\widehat{AOB}=180^\circ-\widehat{MOB}=\widehat{OMB}+\widehat{OBM}=2\,\widehat{OMB}$. Donc $\widehat{AMB}=\dfrac12\widehat{AOB}$.

Les autres cas se ramènent à celui-ci en traçant le diamètre issu de $M$.
:::

:::exemple
$A$, $B$ et $M$ sont sur un cercle de centre $O$ avec $\widehat{AOB}=80^\circ$. Alors $\widehat{AMB}=40^\circ$. Inversement, si $\widehat{AMB}=35^\circ$, alors $\widehat{AOB}=70^\circ$.
:::

:::remarque Cas particulier : le demi-cercle
Si $[AB]$ est un diamètre, l’angle au centre $\widehat{AOB}$ est plat ($180^\circ$), donc tout angle inscrit $\widehat{AMB}$ mesure $90^\circ$ : on retrouve que le triangle $AMB$ est rectangle en $M$.
:::

# III. Angles inscrits interceptant le même arc

:::propriete
Dans un cercle, si deux angles inscrits interceptent le **même arc**, alors ils ont la **même mesure**.
:::

:::demonstration
Les deux angles inscrits ont le même angle au centre associé : chacun mesure la moitié de cet angle au centre. Ils sont donc égaux.
:::

:::exemple
$A$, $B$, $M$ et $N$ sont quatre points d’un cercle, avec $M$ et $N$ du même côté de la corde $[AB]$. Si $\widehat{AMB}=50^\circ$, alors $\widehat{ANB}=50^\circ$.
:::

:::methode
Pour calculer un angle dans une figure avec un cercle :
1. repérer les angles inscrits et l’arc qu’ils interceptent ;
2. utiliser l’angle au centre associé (moitié/double) ou un autre angle inscrit interceptant le même arc ;
3. compléter avec la somme des angles d’un triangle et les triangles isocèles formés par deux rayons.
:::

# Exercices

:::exercice Moitié et double
$A$, $B$ et $C$ sont sur un cercle de centre $O$.
1. Si $\widehat{AOB}=110^\circ$, calculer $\widehat{ACB}$.
2. Si $\widehat{ACB}=27^\circ$, calculer $\widehat{AOB}$.
:::

:::exercice Même arc
$A$, $B$, $C$ et $D$ sont sur un cercle, $C$ et $D$ du même côté de $(AB)$, avec $\widehat{ACB}=48^\circ$. Calculer $\widehat{ADB}$ puis $\widehat{AOB}$.
:::

:::exercice Triangle isocèle
$A$ et $B$ sont deux points d’un cercle de centre $O$ tels que $\widehat{AOB}=100^\circ$.
1. Calculer $\widehat{OAB}$.
2. $M$ est un point du grand arc $\overset{\frown}{AB}$. Calculer $\widehat{AMB}$.
:::

:::exercice Diamètre
$(\mathcal C)$ est un cercle de centre $O$ et de rayon $3$, circonscrit au triangle $ABC$ avec $\widehat{BAC}=40^\circ$. $D$ est le point diamétralement opposé à $B$.
1. Calculer $\widehat{BDC}$.
2. Quelle est la nature du triangle $BCD$ ? Calculer $\widehat{CBD}$.
:::

:::exercice Hexagone
Un hexagone régulier $ABCDEF$ est inscrit dans un cercle de centre $O$. Calculer $\widehat{AOB}$, puis $\widehat{ACB}$ et $\widehat{ADB}$.
:::

# Corrigés

:::corrige
1. $\widehat{ACB}=\dfrac{110^\circ}2=55^\circ$.
2. $\widehat{AOB}=2\times27^\circ=54^\circ$.
:::

:::corrige
$\widehat{ADB}$ et $\widehat{ACB}$ interceptent le même arc : $\widehat{ADB}=48^\circ$. Et $\widehat{AOB}=2\times48^\circ=96^\circ$.
:::

:::corrige
1. $OA=OB$ : le triangle $OAB$ est isocèle en $O$, donc $\widehat{OAB}=\dfrac{180^\circ-100^\circ}2=40^\circ$.
2. $\widehat{AMB}$ intercepte le petit arc $\overset{\frown}{AB}$ : $\widehat{AMB}=\dfrac{100^\circ}2=50^\circ$.
:::

:::corrige
1. $\widehat{BDC}$ et $\widehat{BAC}$ interceptent le même arc $\overset{\frown}{BC}$, donc $\widehat{BDC}=40^\circ$.
2. $[BD]$ est un diamètre, donc $BCD$ est rectangle en $C$. Puis $\widehat{CBD}=180^\circ-90^\circ-40^\circ=50^\circ$.
:::

:::corrige
Les six angles au centre sont égaux : $\widehat{AOB}=\dfrac{360^\circ}6=60^\circ$. Les angles inscrits $\widehat{ACB}$ et $\widehat{ADB}$ interceptent l’arc $\overset{\frown}{AB}$ : ils mesurent $30^\circ$.
:::
