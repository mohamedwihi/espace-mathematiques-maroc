---
id: 3ac-vecteurs-translation
titre: Vecteurs et translation
niveau: 3ac
semestre: 2
duree: 12 heures
---

## Objectifs
- Reconnaître un vecteur (direction, sens, longueur) et construire des vecteurs égaux.
- Construire la somme de deux vecteurs et utiliser la relation de Chasles.
- Construire le produit d’un vecteur par un réel ; reconnaître des vecteurs colinéaires.
- Construire l’image d’une figure par une translation et utiliser ses propriétés.

## Prérequis
- Parallélogramme et ses propriétés.
- Milieu d’un segment, symétrie centrale.
- Droites parallèles.

# I. Les vecteurs

## 1. Direction, sens et longueur

:::definition
- Une droite définit une **direction**. Deux droites parallèles (ou confondues) ont la même direction ; deux droites sécantes n’ont pas la même direction.
- Sur une droite, il y a deux **sens** de parcours : de $A$ vers $B$ ou de $B$ vers $A$.
:::

:::definition
Deux points distincts $A$ et $B$ déterminent le **vecteur** $\overrightarrow{AB}$, caractérisé par :
1. sa **direction** : celle de la droite $(AB)$ ;
2. son **sens** : de $A$ vers $B$ ;
3. sa **longueur** (ou norme) : la distance $AB$, notée aussi $\|\overrightarrow{AB}\|$.

$A$ est l’**origine** et $B$ est l’**extrémité** du vecteur.
:::

:::remarque
Pour tout point $A$, le vecteur $\overrightarrow{AA}$ est le **vecteur nul**, noté $\vec0$.
:::

## 2. Égalité de deux vecteurs

:::propriete
$\overrightarrow{AB}=\overrightarrow{CD}$ signifie que les vecteurs $\overrightarrow{AB}$ et $\overrightarrow{CD}$ ont la même direction ($(AB)\parallel(CD)$), le même sens et la même longueur ($AB=CD$).
:::

:::propriete
Si $A$, $B$, $C$ et $D$ ne sont pas alignés : $\overrightarrow{AB}=\overrightarrow{DC}$ si et seulement si $ABCD$ est un **parallélogramme**.
:::

```figure
{"type":"geometry","x":[-0.5,6.5],"y":[-0.5,3.5],"width":330,
 "polygons":[{"points":[[0,0],[4,0],[6,3],[2,3]],"color":"brand","fill":false}],
 "segments":[{"from":[0,0],"to":[4,0],"color":"saffron"},{"from":[2,3],"to":[6,3],"color":"saffron"}],
 "points":[{"x":0,"y":0,"label":"A"},{"x":4,"y":0,"label":"B"},{"x":6,"y":3,"label":"C"},{"x":2,"y":3,"label":"D"}],
 "caption":"$\\overrightarrow{AB}=\\overrightarrow{DC}$ : $ABCD$ est un parallélogramme."}
```

## 3. Vecteur opposé

:::definition
Le vecteur **opposé** au vecteur $\overrightarrow{AB}$ est le vecteur $\overrightarrow{BA}$ : on écrit $\overrightarrow{BA}=-\overrightarrow{AB}$. Deux vecteurs opposés ont la même direction et la même longueur, mais des **sens contraires**.
:::

## 4. Somme de deux vecteurs

:::propriete Relation de Chasles
Pour tous points $A$, $B$ et $C$ :
$$\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}.$$
:::

:::propriete Règle du parallélogramme
$ABCD$ est un parallélogramme si et seulement si $\overrightarrow{AB}+\overrightarrow{AD}=\overrightarrow{AC}$.
:::

:::exemple
$\overrightarrow{MN}+\overrightarrow{NP}=\overrightarrow{MP}$ ; $\overrightarrow{AB}+\overrightarrow{BC}+\overrightarrow{CA}=\overrightarrow{AC}+\overrightarrow{CA}=\overrightarrow{AA}=\vec0$.
:::

## 5. Produit d’un vecteur par un nombre réel

:::definition
Soient $\vec u$ un vecteur non nul et $k$ un réel non nul. Le vecteur $k\vec u$ a :
- la **même direction** que $\vec u$ ;
- le **même sens** que $\vec u$ si $k>0$, le **sens contraire** si $k<0$ ;
- pour longueur $|k|$ fois la longueur de $\vec u$.

Par convention $0\times\vec u=\vec0$.
:::

:::definition
Deux vecteurs $\vec u$ et $\vec v$ sont **colinéaires** s’il existe un réel $k$ tel que $\vec v=k\vec u$ (ils ont la même direction).
:::

:::propriete
- Si $\overrightarrow{AC}=k\overrightarrow{AB}$, alors les points $A$, $B$ et $C$ sont **alignés**.
- Si $\overrightarrow{CD}=k\overrightarrow{AB}$, alors les droites $(AB)$ et $(CD)$ sont **parallèles**.
:::

:::exemple
Si $\overrightarrow{AM}=\dfrac13\overrightarrow{AB}$ et $\overrightarrow{AN}=\dfrac13\overrightarrow{AC}$, alors par la relation de Chasles
$$\overrightarrow{MN}=\overrightarrow{MA}+\overrightarrow{AN}=-\frac13\overrightarrow{AB}+\frac13\overrightarrow{AC}=\frac13\left(\overrightarrow{BA}+\overrightarrow{AC}\right)=\frac13\overrightarrow{BC},$$
donc $(MN)\parallel(BC)$.
:::

## 6. Vecteur et milieu d’un segment

:::propriete
$I$ est le milieu de $[AB]$ si et seulement si $\overrightarrow{AI}=\overrightarrow{IB}$, ce qui équivaut aussi à $\overrightarrow{AI}=\dfrac12\overrightarrow{AB}$ ou à $\overrightarrow{IA}+\overrightarrow{IB}=\vec0$.
:::

# II. La translation

## 1. Image d’un point

:::definition
Soient $A$ et $B$ deux points distincts. L’image d’un point $M$ par la **translation qui transforme $A$ en $B$** (ou translation de vecteur $\overrightarrow{AB}$) est le point $M'$ tel que
$$\overrightarrow{MM'}=\overrightarrow{AB}.$$
:::

:::remarque
- Si $M\notin(AB)$, $ABM'M$ est un parallélogramme.
- Si $M\in(AB)$, son image $M'$ appartient aussi à la droite $(AB)$.
:::

## 2. Image des figures usuelles

:::propriete
Une translation conserve les longueurs, l’alignement, le parallélisme et les mesures des angles. Plus précisément :
- l’image d’une **droite** $(D)$ est une droite $(D')$ **parallèle** à $(D)$ ;
- l’image d’un **segment** $[AB]$ est un segment $[A'B']$ de **même longueur** ;
- l’image d’un **angle** est un angle de **même mesure** ;
- l’image d’un **cercle** de centre $O$ et de rayon $r$ est le cercle de centre $O'$ (image de $O$) et de **même rayon** $r$.
:::

:::methode Montrer qu’un point est l’image d’un autre
Pour montrer que $M'$ est l’image de $M$ par la translation de vecteur $\overrightarrow{AB}$, on montre que $\overrightarrow{MM'}=\overrightarrow{AB}$ (par exemple en reconnaissant un parallélogramme, ou avec la relation de Chasles).
:::

# Exercices

:::exercice Relation de Chasles
Simplifier : $\vec u=\overrightarrow{AB}+\overrightarrow{BC}+\overrightarrow{CD}$ ; $\vec v=\overrightarrow{MA}-\overrightarrow{MB}$ ; $\vec w=\overrightarrow{AB}+\overrightarrow{CA}+\overrightarrow{BC}$.
:::

:::exercice Parallélogramme
$ABC$ est un triangle et $I$ le milieu de $[BC]$. $D$ est le symétrique de $A$ par rapport à $I$.
1. Montrer que $\overrightarrow{AB}=\overrightarrow{CD}$.
2. En déduire $\overrightarrow{AB}+\overrightarrow{AC}$ en fonction de $\overrightarrow{AD}$.
:::

:::exercice Alignement
$ABC$ est un triangle. On place $E$ et $F$ tels que $\overrightarrow{AE}=\dfrac13\overrightarrow{AB}$ et $\overrightarrow{AF}=\dfrac13\overrightarrow{AC}$. Montrer que $\overrightarrow{EF}=\dfrac13\overrightarrow{BC}$ et en déduire la position des droites $(EF)$ et $(BC)$.
:::

:::exercice Translation et losange
$ABCD$ est un losange de centre $O$ et $t$ la translation de vecteur $\overrightarrow{AO}$.
1. Quelle est l’image de $O$ par $t$ ?
2. Quelle est l’image de l’angle $\widehat{AOB}$ ? En déduire sa mesure.
:::

:::exercice Image d’un cercle
$A$ et $B$ sont deux points distincts, $(\mathcal C)$ le cercle de centre $A$ passant par $B$ et $t$ la translation qui transforme $A$ en $B$. Déterminer l’image de $(\mathcal C)$ par $t$.
:::

:::exercice Série — construire avec des sommes
$ABC$ est un triangle.
1. Construire le point $M$ tel que $\overrightarrow{AM}=\overrightarrow{AB}+\overrightarrow{AC}$. Quelle est la nature de $ABMC$ ?
2. $N$ est le symétrique de $M$ par rapport à $A$. Montrer que $\overrightarrow{AN}=\overrightarrow{BA}+\overrightarrow{CA}$.
:::

:::exercice Série — simplifier
Simplifier : $\vec u=\overrightarrow{AB}-\overrightarrow{AC}+\overrightarrow{BC}$ ; $\vec v=\overrightarrow{MA}+\overrightarrow{BM}+\overrightarrow{AB}$ ; $\vec w=\overrightarrow{EF}+\overrightarrow{GE}-\overrightarrow{GF}$.
:::

# Corrigés

:::corrige
- $\vec u=\overrightarrow{AC}+\overrightarrow{CD}=\overrightarrow{AD}$.
- $\vec v=\overrightarrow{MA}+\overrightarrow{BM}=\overrightarrow{BM}+\overrightarrow{MA}=\overrightarrow{BA}$.
- $\vec w=\overrightarrow{CA}+\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{CC}=\vec0$.
:::

:::corrige
1. $I$ est le milieu de $[BC]$ et de $[AD]$ : les diagonales du quadrilatère $ABDC$ ont le même milieu, c’est un parallélogramme, donc $\overrightarrow{AB}=\overrightarrow{CD}$.
2. $\overrightarrow{AB}+\overrightarrow{AC}=\overrightarrow{CD}+\overrightarrow{AC}=\overrightarrow{AC}+\overrightarrow{CD}=\overrightarrow{AD}$.
:::

:::corrige
$\overrightarrow{EF}=\overrightarrow{EA}+\overrightarrow{AF}=-\dfrac13\overrightarrow{AB}+\dfrac13\overrightarrow{AC}=\dfrac13\left(\overrightarrow{BA}+\overrightarrow{AC}\right)=\dfrac13\overrightarrow{BC}$. Les vecteurs sont colinéaires, donc $(EF)\parallel(BC)$.
:::

:::corrige
1. Les diagonales d’un losange se coupent en leur milieu : $\overrightarrow{AO}=\overrightarrow{OC}$, donc $t(O)=C$.
2. $t(A)=O$, $t(O)=C$ et $t(B)=B'$ avec $\overrightarrow{BB'}=\overrightarrow{AO}$. L’image de $\widehat{AOB}$ est $\widehat{OCB'}$, de même mesure. Les diagonales d’un losange sont perpendiculaires, donc $\widehat{AOB}=90^\circ$ et son image mesure aussi $90^\circ$.
:::

:::corrige
$t(A)=B$ et une translation conserve les rayons : l’image de $(\mathcal C)$ est le cercle de centre $B$ et de rayon $AB$.
:::

:::corrige
1. D’après la règle du parallélogramme, $ABMC$ est un parallélogramme.
2. $A$ est le milieu de $[MN]$, donc $\overrightarrow{AN}=-\overrightarrow{AM}=-\overrightarrow{AB}-\overrightarrow{AC}=\overrightarrow{BA}+\overrightarrow{CA}$.
:::

:::corrige
- $\vec u=\overrightarrow{AB}+\overrightarrow{CA}+\overrightarrow{BC}=\overrightarrow{CA}+\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{CC}=\vec0$.
- $\vec v=\overrightarrow{BM}+\overrightarrow{MA}+\overrightarrow{AB}=\overrightarrow{BB}=\vec0$.
- $\vec w=\overrightarrow{GE}+\overrightarrow{EF}+\overrightarrow{FG}=\vec0$.
:::
