---
id: 2ac-vecteurs-translation
titre: Vecteurs et translation
niveau: 2ac
semestre: 2
duree: 7 heures
---

## Objectifs
- Connaître les éléments d’un vecteur : direction, sens, longueur.
- Reconnaître deux vecteurs égaux et caractériser un parallélogramme par une égalité vectorielle.
- Construire la somme de deux vecteurs (relation de Chasles, règle du parallélogramme).
- Construire l’image d’un point et d’une figure par une translation et connaître ses propriétés.

## Prérequis
- Parallélogramme ; milieu d’un segment.
- Symétries axiale et centrale.

# I. Notion de vecteur

:::definition
Soient $A$ et $B$ deux points distincts. Le **vecteur** $\overrightarrow{AB}$ est défini par :
- sa **direction** : celle de la droite $(AB)$ ;
- son **sens** : de $A$ vers $B$ ;
- sa **longueur** (ou norme) : la distance $AB$.

$A$ est l’**origine** et $B$ l’**extrémité** du vecteur.
:::

```figure
{"type":"geometry","x":[-0.5,8],"y":[-0.5,4],"width":280,
 "segments":[{"from":[1,1],"to":[6,3],"color":"brand"},{"from":[6,3],"to":[5.25,3.05],"color":"brand"},{"from":[6,3],"to":[5.45,2.5],"color":"brand"}],
 "points":[{"x":1,"y":1,"label":"A"},{"x":6,"y":3,"label":"B"}],
 "caption":"Le vecteur $\\overrightarrow{AB}$, d’origine $A$ et d’extrémité $B$."}
```

:::definition Vecteur nul et vecteur opposé
- Le vecteur $\overrightarrow{AA}$ est le **vecteur nul**, noté $\vec0$.
- Le vecteur $\overrightarrow{BA}$ a la même direction et la même longueur que $\overrightarrow{AB}$ mais un sens contraire : c’est l’**opposé** de $\overrightarrow{AB}$, noté $-\overrightarrow{AB}$.
:::

# II. Égalité de deux vecteurs

:::definition
Deux vecteurs sont **égaux** s’ils ont la même direction, le même sens et la même longueur.
:::

:::propriete
Soient $A$, $B$, $C$ et $D$ quatre points :
$$\overrightarrow{AB}=\overrightarrow{DC}\iff ABCD\ \text{est un parallélogramme (éventuellement aplati)}.$$
:::

```figure
{"type":"geometry","x":[-0.5,9],"y":[-0.6,4.4],"width":300,
 "polygons":[{"points":[[0,0],[6,0],[8,3.5],[2,3.5]],"color":"brand"}],
 "points":[{"x":0,"y":0,"label":"A"},{"x":6,"y":0,"label":"B"},{"x":8,"y":3.5,"label":"C"},{"x":2,"y":3.5,"label":"D"}],
 "caption":"$ABCD$ est un parallélogramme : $\\overrightarrow{AB}=\\overrightarrow{DC}$ et $\\overrightarrow{AD}=\\overrightarrow{BC}$."}
```

:::propriete Milieu
$I$ est le milieu du segment $[AB]$ si et seulement si $\overrightarrow{AI}=\overrightarrow{IB}$.
:::

# III. Somme de deux vecteurs

:::propriete Relation de Chasles
Pour tous points $A$, $B$ et $C$ :
$$\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}.$$
:::

:::exemple
$\overrightarrow{MN}+\overrightarrow{NP}+\overrightarrow{PQ}=\overrightarrow{MQ}$ ; $\overrightarrow{AB}+\overrightarrow{BA}=\overrightarrow{AA}=\vec0$.
:::

:::propriete Règle du parallélogramme
Si $ABCD$ est un parallélogramme, alors
$$\overrightarrow{AB}+\overrightarrow{AD}=\overrightarrow{AC}.$$
:::

:::methode Construire $\vec u+\vec v$
On place les vecteurs « bout à bout » : on construit $\overrightarrow{AB}=\vec u$, puis $\overrightarrow{BC}=\vec v$ ; alors $\vec u+\vec v=\overrightarrow{AC}$.
:::

# IV. Translation

:::definition
Soient $A$ et $B$ deux points. L’**image** d’un point $M$ par la **translation** qui transforme $A$ en $B$ est le point $M'$ tel que
$$\overrightarrow{MM'}=\overrightarrow{AB},$$
c’est-à-dire tel que $ABM'M$ soit un parallélogramme. On parle de translation de vecteur $\overrightarrow{AB}$.
:::

```figure
{"type":"geometry","x":[-0.5,10],"y":[-0.5,5.5],"width":320,
 "segments":[{"from":[0.5,0.5],"to":[3,1.5],"color":"brand"},{"from":[3,1.5],"to":[2.4,1.55],"color":"brand"},{"from":[3,1.5],"to":[2.55,1.15],"color":"brand"}],
 "polygons":[{"points":[[1,2.5],[3.5,2.5],[2,4.5]],"color":"saffron"},{"points":[[3.5,3.5],[6,3.5],[4.5,5.5]],"color":"saffron"}],
 "points":[{"x":0.5,"y":0.5,"label":"A"},{"x":3,"y":1.5,"label":"B"},{"x":1,"y":2.5,"label":"M"},{"x":3.5,"y":3.5,"label":"M'"}],
 "caption":"La translation de vecteur $\\overrightarrow{AB}$ fait « glisser » la figure."}
```

:::propriete
La translation conserve les longueurs, l’alignement, les mesures des angles, le parallélisme et les milieux :
- l’image d’un segment est un segment de **même longueur** ;
- l’image d’une droite est une droite **parallèle** ;
- l’image d’un cercle de centre $O$ et de rayon $r$ est un cercle de centre $O'$ (image de $O$) et de même rayon $r$.
:::

:::remarque
Si $\overrightarrow{MM'}=\overrightarrow{AB}$ et $\overrightarrow{NN'}=\overrightarrow{AB}$, alors $\overrightarrow{MN}=\overrightarrow{M'N'}$ : c’est pourquoi $M'N'=MN$ et $(M'N')\parallel(MN)$.
:::

# Exercices

:::exercice Égalités de vecteurs
$ABCD$ est un parallélogramme de centre $O$.
1. Citer tous les vecteurs égaux à $\overrightarrow{AB}$, puis à $\overrightarrow{AO}$, parmi ceux dont les extrémités sont des points de la figure.
2. Citer l’opposé de $\overrightarrow{BC}$.
:::

:::exercice Chasles
Simplifier : $\vec u=\overrightarrow{AB}+\overrightarrow{BC}+\overrightarrow{CD}$ ; $\vec v=\overrightarrow{MN}+\overrightarrow{PM}$ ; $\vec w=\overrightarrow{AB}-\overrightarrow{CB}$ ; $\vec t=\overrightarrow{EF}+\overrightarrow{FE}$.
:::

:::exercice Parallélogramme
$A$, $B$, $C$ sont trois points non alignés.
1. Construire le point $D$ tel que $\overrightarrow{AD}=\overrightarrow{BC}$. Quelle est la nature de $ABCD$ ?
2. Construire le point $E$ tel que $\overrightarrow{AE}=\overrightarrow{AB}+\overrightarrow{AC}$.
:::

:::exercice Translation
$ABC$ est un triangle et $I$ le milieu de $[BC]$. On considère la translation $t$ qui transforme $A$ en $I$.
1. Construire $B'$ et $C'$, images de $B$ et $C$ par $t$.
2. Comparer $B'C'$ et $BC$ ; que dire des droites $(B'C')$ et $(BC)$ ?
3. Quelle est l’image par $t$ du milieu $I$ de $[BC]$ ? Justifier.
:::

:::exercice Milieu
$I$ est le milieu de $[AB]$ et $M$ un point quelconque. Montrer que $\overrightarrow{MA}+\overrightarrow{MB}=2\overrightarrow{MI}$ (on pourra utiliser la relation de Chasles avec le point $I$).
:::

:::exercice Approfondissement — égalités vectorielles et milieux
$ABCD$ est un parallélogramme de centre $O$. $E$ est défini par $\overrightarrow{CE}=\overrightarrow{OD}$.
1. Montrer que $\overrightarrow{OE}=\overrightarrow{OC}+\overrightarrow{OD}$.
2. Montrer que $OCED$ est un parallélogramme, puis comparer $\overrightarrow{OC}$ et $\overrightarrow{DE}$, et enfin $\overrightarrow{AO}$ et $\overrightarrow{DE}$.
:::

:::exercice Approfondissement — composée de deux translations
$t_1$ est la translation de vecteur $\overrightarrow{AB}$ et $t_2$ celle de vecteur $\overrightarrow{BC}$. $M$ est un point, $M_1=t_1(M)$ et $M_2=t_2(M_1)$.
Montrer que $\overrightarrow{MM_2}=\overrightarrow{AC}$ : la composée est la translation de vecteur $\overrightarrow{AC}$.
:::

# Corrigés

:::corrige
1. $\overrightarrow{AB}=\overrightarrow{DC}$ ; $\overrightarrow{AO}=\overrightarrow{OC}$ (car $O$ est le milieu de $[AC]$).
2. $-\overrightarrow{BC}=\overrightarrow{CB}=\overrightarrow{DA}$.
:::

:::corrige
$\vec u=\overrightarrow{AD}$ ; $\vec v=\overrightarrow{PM}+\overrightarrow{MN}=\overrightarrow{PN}$ ; $\vec w=\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}$ ; $\vec t=\vec0$.
:::

:::corrige
1. $\overrightarrow{AD}=\overrightarrow{BC}$ équivaut à : $ADCB$ est un parallélogramme. C’est le même quadrilatère que $ABCD$ : $ABCD$ est un parallélogramme (non aplati, car $A$, $B$, $C$ ne sont pas alignés).
2. Par la règle du parallélogramme, $E$ est le quatrième sommet du parallélogramme construit sur $[AB]$ et $[AC]$ : $ABEC$ est un parallélogramme.
:::

:::corrige
1. $\overrightarrow{BB'}=\overrightarrow{AI}$ et $\overrightarrow{CC'}=\overrightarrow{AI}$.
2. La translation conserve les longueurs : $B'C'=BC$ ; l’image d’une droite est une droite parallèle : $(B'C')\parallel(BC)$.
3. La translation conserve les milieux : l’image de $I$ (milieu de $[BC]$) est le milieu de $[B'C']$.
:::

:::corrige
$\overrightarrow{MA}+\overrightarrow{MB}=\left(\overrightarrow{MI}+\overrightarrow{IA}\right)+\left(\overrightarrow{MI}+\overrightarrow{IB}\right)=2\overrightarrow{MI}+\left(\overrightarrow{IA}+\overrightarrow{IB}\right)$. Comme $I$ est le milieu de $[AB]$, $\overrightarrow{IA}=-\overrightarrow{IB}$, donc $\overrightarrow{IA}+\overrightarrow{IB}=\vec0$ et $\overrightarrow{MA}+\overrightarrow{MB}=2\overrightarrow{MI}$.
:::

:::corrige
1. $\overrightarrow{OE}=\overrightarrow{OC}+\overrightarrow{CE}=\overrightarrow{OC}+\overrightarrow{OD}$.
2. $\overrightarrow{OD}=\overrightarrow{CE}$ signifie que $ODEC$ (c’est-à-dire $OCED$) est un parallélogramme ; donc $\overrightarrow{OC}=\overrightarrow{DE}$. Comme $O$ est le milieu de $[AC]$, $\overrightarrow{AO}=\overrightarrow{OC}=\overrightarrow{DE}$.
:::

:::corrige
$\overrightarrow{MM_2}=\overrightarrow{MM_1}+\overrightarrow{M_1M_2}=\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}$ (relation de Chasles).
:::
