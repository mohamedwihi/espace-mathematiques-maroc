---
id: 1bac-vecteurs-espace
titre: Vecteurs de l’espace
niveau: 1bac
semestre: 2
duree: 8 heures
---

## Objectifs
- Étendre la notion de vecteur et les opérations vectorielles à l’espace.
- Caractériser vectoriellement une droite et un plan de l’espace.
- Reconnaître des vecteurs colinéaires, des points alignés.
- Reconnaître des vecteurs coplanaires, des points coplanaires ; démontrer un parallélisme.

## Prérequis
- Calcul vectoriel dans le plan.
- Géométrie dans l’espace (tronc commun) : positions relatives, parallélisme.

# I. Vecteurs de l’espace

:::definition
Les notions de vecteur, d’égalité de vecteurs, de somme et de produit par un réel s’étendent à l’espace avec les **mêmes définitions** et les **mêmes règles de calcul** que dans le plan.
- $\overrightarrow{AB}=\overrightarrow{CD}$ si et seulement si $ABDC$ est un parallélogramme (éventuellement aplati).
- Relation de Chasles : $\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}$.
- Pour tout point $O$ et tout vecteur $\vec u$, il existe un unique point $M$ tel que $\overrightarrow{OM}=\vec u$.
:::

:::exemple
Dans le cube $ABCDEFGH$ : $\overrightarrow{AB}=\overrightarrow{DC}=\overrightarrow{EF}=\overrightarrow{HG}$ et $\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{AE}=\overrightarrow{AC}+\overrightarrow{CG}=\overrightarrow{AG}$.
:::

```figure
{"type":"geometry","x":[-0.5,6.5],"y":[-0.5,6.2],"width":290,
 "polygons":[{"points":[[0,0],[4,0],[4,4],[0,4]],"color":"brand","fill":false}],
 "segments":[{"from":[0,4],"to":[1.8,5.8]},{"from":[4,4],"to":[5.8,5.8]},{"from":[4,0],"to":[5.8,1.8]},{"from":[5.8,1.8],"to":[5.8,5.8]},{"from":[1.8,5.8],"to":[5.8,5.8]},
   {"from":[0,0],"to":[1.8,1.8],"dashed":true},{"from":[1.8,1.8],"to":[5.8,1.8],"dashed":true},{"from":[1.8,1.8],"to":[1.8,5.8],"dashed":true},{"from":[0,0],"to":[5.8,5.8],"color":"saffron"}],
 "points":[{"x":0,"y":0,"label":"A"},{"x":4,"y":0,"label":"B"},{"x":5.8,"y":1.8,"label":"C"},{"x":1.8,"y":1.8,"label":"D"},{"x":0,"y":4,"label":"E"},{"x":4,"y":4,"label":"F"},{"x":5.8,"y":5.8,"label":"G"},{"x":1.8,"y":5.8,"label":"H"}],
 "caption":"$\\overrightarrow{AG}=\\overrightarrow{AB}+\\overrightarrow{AD}+\\overrightarrow{AE}$ (en orange)."}
```

# II. Colinéarité — droites de l’espace

:::definition
Deux vecteurs $\vec u$ et $\vec v$ sont **colinéaires** s’il existe un réel $k$ tel que $\vec v=k\vec u$ (ou si $\vec u=\vec0$).
:::

:::propriete
- $A$, $B$, $C$ sont **alignés** si et seulement si $\overrightarrow{AB}$ et $\overrightarrow{AC}$ sont colinéaires.
- Les droites $(AB)$ et $(CD)$ sont **parallèles** si et seulement si $\overrightarrow{AB}$ et $\overrightarrow{CD}$ sont colinéaires.
:::

:::definition Définition vectorielle d’une droite
Soient $A$ un point et $\vec u$ un vecteur non nul. La droite $D(A,\vec u)$ passant par $A$ et de vecteur directeur $\vec u$ est l’ensemble des points $M$ tels que
$$\overrightarrow{AM}=t\vec u,\qquad t\in\mathbb R.$$
:::

# III. Coplanarité — plans de l’espace

:::definition Définition vectorielle d’un plan
Soient $A$ un point et $\vec u$, $\vec v$ deux vecteurs **non colinéaires**. Le plan $P(A,\vec u,\vec v)$ passant par $A$ et dirigé par $\vec u$ et $\vec v$ est l’ensemble des points $M$ tels que
$$\overrightarrow{AM}=\alpha\vec u+\beta\vec v,\qquad\alpha,\beta\in\mathbb R.$$
Le couple $(\vec u,\vec v)$ est une **base** de la direction du plan.
:::

:::definition
Trois vecteurs $\vec u$, $\vec v$, $\vec w$ sont **coplanaires** si, en les représentant à partir d’un même point $O$ ($\overrightarrow{OA}=\vec u$, $\overrightarrow{OB}=\vec v$, $\overrightarrow{OC}=\vec w$), les points $O$, $A$, $B$, $C$ sont dans un même plan.
:::

:::propriete
Si $\vec u$ et $\vec v$ ne sont pas colinéaires : $\vec u$, $\vec v$, $\vec w$ sont **coplanaires** si et seulement s’il existe deux réels $\alpha$ et $\beta$ tels que
$$\vec w=\alpha\vec u+\beta\vec v.$$
:::

:::propriete Applications
- Quatre points $A$, $B$, $C$, $D$ sont **coplanaires** si et seulement si $\overrightarrow{AB}$, $\overrightarrow{AC}$, $\overrightarrow{AD}$ sont coplanaires.
- Une droite $D(A,\vec w)$ est **parallèle** au plan $P(B,\vec u,\vec v)$ si et seulement si $\vec u$, $\vec v$, $\vec w$ sont coplanaires.
- Deux plans $P(A,\vec u,\vec v)$ et $P'(B,\vec u',\vec v')$ sont **parallèles** si et seulement si $\vec u'$ et $\vec v'$ s’écrivent chacun en fonction de $\vec u$ et $\vec v$.
:::

:::exemple
Dans le cube $ABCDEFGH$, $I$ est le milieu de $[EF]$ et $J$ celui de $[CG]$. Alors
$$\overrightarrow{AI}=\overrightarrow{AE}+\frac12\overrightarrow{AB}\qquad\overrightarrow{AJ}=\overrightarrow{AB}+\overrightarrow{AD}+\frac12\overrightarrow{AE},$$
d’où $\overrightarrow{IJ}=\dfrac12\overrightarrow{AB}+\overrightarrow{AD}-\dfrac12\overrightarrow{AE}=\dfrac12\left(\overrightarrow{AB}-\overrightarrow{AE}\right)+\overrightarrow{AD}=\dfrac12\overrightarrow{EB}+\overrightarrow{AD}$.

Donc $\overrightarrow{IJ}$, $\overrightarrow{EB}$ et $\overrightarrow{AD}$ sont coplanaires : la droite $(IJ)$ est parallèle au plan $(EBC)$, qui est dirigé par $\overrightarrow{EB}$ et $\overrightarrow{BC}=\overrightarrow{AD}$.
:::

# Exercices

:::exercice Simplifications
Dans le cube $ABCDEFGH$, simplifier : $\overrightarrow{AB}+\overrightarrow{CG}$ ; $\overrightarrow{AD}+\overrightarrow{FB}$ ; $\overrightarrow{EF}+\overrightarrow{AD}+\overrightarrow{GC}$.
:::

:::exercice Centre de gravité d’une face
$ABCD$ est un tétraèdre et $G$ le centre de gravité du triangle $BCD$. Exprimer $\overrightarrow{AG}$ en fonction de $\overrightarrow{AB}$, $\overrightarrow{AC}$, $\overrightarrow{AD}$.
:::

:::exercice Coplanarité
$ABCD$ est un tétraèdre ; $E$ et $F$ sont définis par $\overrightarrow{AE}=\dfrac13\overrightarrow{AB}$ et $\overrightarrow{AF}=\dfrac13\overrightarrow{AC}$. Montrer que $(EF)$ est parallèle au plan $(BCD)$.
:::

:::exercice Points coplanaires
$ABCD$ est un tétraèdre ; $M$ est défini par $\overrightarrow{AM}=2\overrightarrow{AB}-\overrightarrow{AC}+\overrightarrow{AD}$. Les points $A$, $B$, $C$, $M$ sont-ils coplanaires ? Et les points $B$, $C$, $D$, $M$ ?
:::

:::exercice Série — coplanarité
$ABCDEFGH$ est un cube ($ABCD$ et $EFGH$ faces opposées, $(AE)$ arête). Exprimer $\overrightarrow{DG}$ en fonction de $\overrightarrow{AB}$ et $\overrightarrow{AE}$, puis conclure sur la coplanarité des vecteurs $\overrightarrow{AB}$, $\overrightarrow{AE}$ et $\overrightarrow{DG}$.
:::

:::exercice Série — centre de gravité d’un tétraèdre
$ABCD$ est un tétraèdre ; $G$ est le point tel que $\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}+\overrightarrow{GD}=\vec0$, et $I$, $J$ les milieux de $[AB]$ et $[CD]$.
Montrer que $G$ est le milieu de $[IJ]$.
:::

# Corrigés

:::corrige
$\overrightarrow{AB}+\overrightarrow{CG}=\overrightarrow{AB}+\overrightarrow{BF}=\overrightarrow{AF}$ ; $\overrightarrow{AD}+\overrightarrow{FB}=\overrightarrow{AD}+\overrightarrow{EA}=\overrightarrow{ED}$ ; $\overrightarrow{EF}+\overrightarrow{AD}+\overrightarrow{GC}=\overrightarrow{EF}+\overrightarrow{FG}+\overrightarrow{GC}=\overrightarrow{EC}$.
:::

:::corrige
$G$ est le centre de gravité de $BCD$ : $\overrightarrow{GB}+\overrightarrow{GC}+\overrightarrow{GD}=\vec0$, d’où $3\overrightarrow{AG}=\overrightarrow{AB}+\overrightarrow{AC}+\overrightarrow{AD}$, soit $\overrightarrow{AG}=\dfrac13\left(\overrightarrow{AB}+\overrightarrow{AC}+\overrightarrow{AD}\right)$.
:::

:::corrige
$\overrightarrow{EF}=\overrightarrow{EA}+\overrightarrow{AF}=\dfrac13\left(\overrightarrow{AC}-\overrightarrow{AB}\right)=\dfrac13\overrightarrow{BC}$. $(EF)$ est parallèle à la droite $(BC)$ du plan $(BCD)$, donc parallèle à ce plan.
:::

:::corrige
- $\overrightarrow{AM}$ contient la composante $\overrightarrow{AD}$, non coplanaire avec $\overrightarrow{AB}$ et $\overrightarrow{AC}$ (tétraèdre) : $A$, $B$, $C$, $M$ ne sont pas coplanaires.
- $\overrightarrow{BM}=\overrightarrow{AM}-\overrightarrow{AB}=\overrightarrow{AB}-\overrightarrow{AC}+\overrightarrow{AD}$, $\overrightarrow{BC}=\overrightarrow{AC}-\overrightarrow{AB}$ et $\overrightarrow{BD}=\overrightarrow{AD}-\overrightarrow{AB}$. On cherche $\overrightarrow{BM}=\alpha\overrightarrow{BC}+\beta\overrightarrow{BD}$ : en identifiant, $\alpha=-1$, $\beta=1$ et $-\alpha-\beta=1$, ce qui donne $0=1$ : impossible. Les points ne sont pas coplanaires.
:::

:::corrige
$\overrightarrow{DG}=\overrightarrow{DC}+\overrightarrow{CG}=\overrightarrow{AB}+\overrightarrow{AE}$ : les trois vecteurs $\overrightarrow{AB}$, $\overrightarrow{AE}$ et $\overrightarrow{DG}$ sont coplanaires.
:::

:::corrige
$\overrightarrow{GA}+\overrightarrow{GB}=2\overrightarrow{GI}$ et $\overrightarrow{GC}+\overrightarrow{GD}=2\overrightarrow{GJ}$. Donc $2\overrightarrow{GI}+2\overrightarrow{GJ}=\vec0$, soit $\overrightarrow{GI}=-\overrightarrow{GJ}$ : $G$ est le milieu de $[IJ]$.
:::
