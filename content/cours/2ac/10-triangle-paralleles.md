---
id: 2ac-triangle-paralleles
titre: Le triangle et les droites parallèles
niveau: 2ac
semestre: 1
duree: 8 heures
---

## Objectifs
- Connaître et utiliser les propriétés de la droite des milieux dans un triangle.
- Connaître la propriété des trois rapports égaux (droites parallèles dans un triangle).
- Calculer des longueurs et démontrer des parallélismes.

## Prérequis
- Parallélogramme et ses propriétés.
- Calcul sur les rationnels ; produits en croix.

# I. Droite des milieux

:::propriete 1 Théorème direct
Dans un triangle, la droite qui passe par les **milieux de deux côtés** est **parallèle** au troisième côté.
:::

:::propriete 2 Réciproque
Dans un triangle, si une droite passe par le **milieu d’un côté** et est **parallèle à un deuxième côté**, alors elle coupe le troisième côté en son **milieu**.
:::

:::propriete 3 Longueur
Dans un triangle, la longueur du segment qui joint les milieux de deux côtés est égale à la **moitié** de la longueur du troisième côté.
:::

```figure
{"type":"geometry","x":[-0.5,9],"y":[-0.6,5.8],"width":300,
 "polygons":[{"points":[[0,0],[8,0],[3,5]],"color":"ink","fill":false}],
 "segments":[{"from":[1.5,2.5],"to":[5.5,2.5],"color":"brand"}],
 "points":[{"x":0,"y":0,"label":"B"},{"x":8,"y":0,"label":"C"},{"x":3,"y":5,"label":"A"},{"x":1.5,"y":2.5,"label":"I"},{"x":5.5,"y":2.5,"label":"J"}],
 "caption":"$I$ et $J$ milieux de $[AB]$ et $[AC]$ : $(IJ)\\parallel(BC)$ et $IJ=\\dfrac{BC}2$."}
```

:::demonstration Propriétés 1 et 3
Soit $K$ le symétrique de $I$ par rapport à $J$. $J$ est le milieu de $[AC]$ et de $[IK]$, donc $AICK$ est un parallélogramme : $(CK)\parallel(AI)$ et $CK=AI=IB$. Alors $IBCK$ a deux côtés opposés $[IB]$ et $[CK]$ parallèles et de même longueur : c’est un parallélogramme. Donc $(IJ)\parallel(BC)$ et $IK=BC$, soit $IJ=\dfrac{BC}2$.
:::

:::exemple
Dans le triangle $ABC$, $I$ et $J$ sont les milieux de $[AB]$ et $[AC]$, et $BC=9$ cm. Alors $(IJ)\parallel(BC)$ et $IJ=4{,}5$ cm.
:::

:::methode Démontrer qu’un point est un milieu
On montre que le point est sur une droite qui passe par le milieu d’un côté et qui est parallèle à un autre côté (propriété 2).
:::

# II. Droites parallèles dans un triangle

:::propriete Propriété des trois rapports égaux
Soit $ABC$ un triangle, $M$ un point de $[AB]$ et $N$ un point de $[AC]$. Si $(MN)\parallel(BC)$, alors
$$\frac{AM}{AB}=\frac{AN}{AC}=\frac{MN}{BC}.$$
:::

```figure
{"type":"geometry","x":[-0.5,9],"y":[-0.6,5.8],"width":300,
 "polygons":[{"points":[[0,0],[8,0],[3,5]],"color":"ink","fill":false}],
 "segments":[{"from":[1.2,2],"to":[6,2],"color":"brand"}],
 "points":[{"x":0,"y":0,"label":"B"},{"x":8,"y":0,"label":"C"},{"x":3,"y":5,"label":"A"},{"x":1.2,"y":2,"label":"M"},{"x":6,"y":2,"label":"N"}],
 "caption":"$(MN)\\parallel(BC)$ : $\\dfrac{AM}{AB}=\\dfrac{AN}{AC}=\\dfrac{MN}{BC}$."}
```

:::remarque
Le triangle $AMN$ est une **réduction** du triangle $ABC$ : ses côtés sont proportionnels à ceux de $ABC$. La droite des milieux est le cas où le rapport vaut $\dfrac12$.
:::

:::exemple
$AB=6$ cm, $AC=8$ cm, $BC=7$ cm, $M\in[AB]$ avec $AM=4{,}5$ cm, et $(MN)\parallel(BC)$. Alors
$$\frac{4{,}5}{6}=\frac{AN}{8}=\frac{MN}{7},\quad\text{donc}\quad AN=\frac{4{,}5\times8}6=6\ \text{cm},\quad MN=\frac{4{,}5\times7}6=5{,}25\ \text{cm}.$$
:::

# Exercices

:::exercice Droite des milieux
$ABC$ est un triangle tel que $AB=8$ cm, $AC=6$ cm et $BC=10$ cm. $I$, $J$ et $K$ sont les milieux respectifs de $[AB]$, $[AC]$ et $[BC]$.
1. Calculer $IJ$, $JK$ et $IK$, puis le périmètre du triangle $IJK$.
2. Montrer que $AIKJ$ est un parallélogramme.
:::

:::exercice Réciproque
$ABC$ est un triangle et $I$ est le milieu de $[AB]$. La parallèle à $(BC)$ passant par $I$ coupe $[AC]$ en $J$.
1. Montrer que $J$ est le milieu de $[AC]$.
2. $BC=11$ cm : calculer $IJ$.
:::

:::exercice Quadrilatère des milieux
$ABCD$ est un quadrilatère quelconque ; $M$, $N$, $P$, $Q$ sont les milieux de $[AB]$, $[BC]$, $[CD]$ et $[DA]$.
1. En utilisant les triangles $ABC$ et $ACD$, montrer que $(MN)\parallel(QP)$ et $MN=QP$.
2. En déduire la nature du quadrilatère $MNPQ$.
:::

:::exercice Trois rapports
$ABC$ est un triangle avec $AB=10$ cm, $AC=12$ cm et $BC=8$ cm. $M$ est le point de $[AB]$ tel que $AM=4$ cm ; la parallèle à $(BC)$ passant par $M$ coupe $[AC]$ en $N$.
1. Calculer $AN$ et $MN$.
2. Calculer le périmètre du triangle $AMN$ et comparer avec celui de $ABC$.
:::

:::exercice Approfondissement — trapèze
$ABCD$ est un trapèze de bases $[AB]$ et $[CD]$, avec $AB=10$ et $CD=6$. $I$ et $J$ sont les milieux de $[AD]$ et $[BC]$, et $K$ le milieu de la diagonale $[AC]$.
1. Dans le triangle $ACD$, calculer $IK$ ; dans le triangle $ABC$, calculer $KJ$.
2. Montrer que $I$, $K$, $J$ sont alignés et calculer $IJ$.
:::

:::exercice Approfondissement — partage en trois
$[AB]$ est un segment de $9$ cm. On trace une demi-droite $[Ax)$ et on y place $C$, $D$, $E$ tels que $AC=CD=DE=2$ cm. La parallèle à $(EB)$ passant par $D$ coupe $[AB]$ en $N$, et celle passant par $C$ coupe $[AB]$ en $M$.
Montrer que $AM=MN=NB=3$ cm.
:::

# Corrigés

:::corrige
1. $IJ=\dfrac{BC}2=5$ cm ; $JK=\dfrac{AB}2=4$ cm ; $IK=\dfrac{AC}2=3$ cm. Périmètre : $12$ cm.
2. Dans $ABC$ : $(IK)\parallel(AC)$, donc $(IK)\parallel(AJ)$ ; et $(JK)\parallel(AB)$, donc $(JK)\parallel(AI)$. Les côtés opposés de $AIKJ$ sont parallèles : c’est un parallélogramme.
:::

:::corrige
1. La droite passe par le milieu $I$ de $[AB]$ et est parallèle à $(BC)$ : d’après la réciproque, elle coupe $[AC]$ en son milieu, donc $J$ est le milieu de $[AC]$.
2. $IJ=\dfrac{11}2=5{,}5$ cm.
:::

:::corrige
1. Dans $ABC$ : $(MN)\parallel(AC)$ et $MN=\dfrac{AC}2$. Dans $ACD$ : $(QP)\parallel(AC)$ et $QP=\dfrac{AC}2$. Donc $(MN)\parallel(QP)$ et $MN=QP$.
2. $MNPQ$ a deux côtés opposés parallèles et de même longueur : c’est un parallélogramme.
:::

:::corrige
1. $\dfrac{AM}{AB}=\dfrac4{10}=\dfrac25$. $AN=\dfrac25\times12=4{,}8$ cm et $MN=\dfrac25\times8=3{,}2$ cm.
2. Périmètre de $AMN$ : $4+4{,}8+3{,}2=12$ cm ; celui de $ABC$ : $30$ cm. On a $12=\dfrac25\times30$ : les périmètres sont dans le même rapport.
:::

:::corrige
1. Dans $ACD$, $I$ et $K$ sont les milieux de $[AD]$ et $[AC]$ : $(IK)\parallel(DC)$ et $IK=3$. Dans $ABC$ : $(KJ)\parallel(AB)$ et $KJ=5$.
2. $(IK)$ et $(KJ)$ sont parallèles à $(AB)$ (car $(DC)\parallel(AB)$) et passent par $K$ : elles sont confondues, $I$, $K$, $J$ sont alignés. $IJ=3+5=8=\dfrac{AB+CD}2$.
:::

:::corrige
Dans le triangle $AEB$, $(DN)\parallel(EB)$ : $\dfrac{AN}{AB}=\dfrac{AD}{AE}=\dfrac46$, donc $AN=6$. De même $(CM)\parallel(EB)$ : $\dfrac{AM}{AB}=\dfrac{AC}{AE}=\dfrac26$, donc $AM=3$. Ainsi $AM=3$, $MN=3$, $NB=3$.
:::
