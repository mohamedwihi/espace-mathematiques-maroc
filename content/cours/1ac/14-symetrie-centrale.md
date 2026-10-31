---
id: 1ac-symetrie-centrale
titre: La symétrie centrale
niveau: 1ac
semestre: 2
duree: 7 heures
---

## Objectifs
- Construire le symétrique d’un point par rapport à un point.
- Construire le symétrique d’un segment, d’une droite, d’une demi-droite, d’un angle et d’un cercle.
- Connaître et utiliser les propriétés de conservation de la symétrie centrale.
- Reconnaître un centre de symétrie d’une figure.

## Prérequis
- Milieu d’un segment ; droites parallèles.
- Angles et cercle.

# I. Symétrique d’un point

:::definition
Soit $O$ un point. Le **symétrique** d’un point $M$ par rapport à $O$ est le point $M'$ tel que $O$ soit le **milieu** du segment $[MM']$. Le symétrique de $O$ est $O$ lui-même.
:::

```figure
{"type":"geometry","x":[-0.5,8.5],"y":[-0.5,4.5],"width":300,
 "segments":[{"from":[1,1],"to":[7,3],"dashed":true}],
 "points":[{"x":1,"y":1,"label":"M"},{"x":4,"y":2,"label":"O"},{"x":7,"y":3,"label":"M'"}],
 "caption":"$O$ est le milieu de $[MM']$ : $M'$ est le symétrique de $M$ par rapport à $O$."}
```

:::methode Construction
1. On trace la demi-droite $[MO)$.
2. Avec le compas, on reporte la longueur $OM$ de l’autre côté de $O$ : on obtient $M'$ avec $OM'=OM$.
:::

:::remarque
Si $M'$ est le symétrique de $M$ par rapport à $O$, alors $M$ est le symétrique de $M'$ : on dit que $M$ et $M'$ sont **symétriques** par rapport à $O$.
:::

# II. Symétrique d’un segment, d’une droite, d’une demi-droite

:::propriete Segment
Le symétrique d’un segment $[AB]$ par rapport à un point $O$ est le segment $[A'B']$, où $A'$ et $B'$ sont les symétriques de $A$ et $B$. De plus :
$$A'B'=AB\qquad\text{et}\qquad(A'B')\parallel(AB).$$
On dit que la symétrie centrale **conserve les longueurs**.
:::

```figure
{"type":"geometry","x":[-0.5,9],"y":[-0.5,5],"width":300,
 "segments":[{"from":[1,1],"to":[3,3.5],"color":"brand"},{"from":[7,3],"to":[5,0.5],"color":"saffron"},{"from":[1,1],"to":[7,3],"dashed":true},{"from":[3,3.5],"to":[5,0.5],"dashed":true}],
 "points":[{"x":1,"y":1,"label":"A"},{"x":3,"y":3.5,"label":"B"},{"x":4,"y":2,"label":"O"},{"x":7,"y":3,"label":"A'"},{"x":5,"y":0.5,"label":"B'"}],
 "caption":"$[A'B']$ est le symétrique de $[AB]$ : même longueur et droites parallèles."}
```

:::propriete Droite et points alignés
- Le symétrique d’une droite $(AB)$ par rapport à $O$ est la droite $(A'B')$, **parallèle** à $(AB)$.
- Le symétrique de points alignés est formé de points alignés : la symétrie centrale **conserve l’alignement**.
- Le symétrique du milieu d’un segment est le milieu du segment symétrique.
:::

:::propriete Demi-droite
Le symétrique de la demi-droite $[AB)$ par rapport à $O$ est la demi-droite $[A'B')$.
:::

:::remarque
Une droite qui passe par le centre $O$ est sa propre symétrique.
:::

# III. Symétrique d’un angle et d’un cercle

:::propriete Angle
Le symétrique d’un angle $\widehat{ABC}$ par rapport à $O$ est l’angle $\widehat{A'B'C'}$, et
$$\widehat{A'B'C'}=\widehat{ABC}.$$
La symétrie centrale **conserve les mesures des angles**.
:::

:::propriete Cercle
Le symétrique du cercle $(\mathcal C)$ de centre $I$ et de rayon $r$ par rapport à $O$ est le cercle $(\mathcal C')$ de centre $I'$ (symétrique de $I$) et de **même rayon** $r$.
:::

:::propriete Conservation
La symétrie centrale conserve les longueurs, l’alignement, les mesures des angles, le parallélisme, les périmètres et les aires : une figure et sa symétrique sont **superposables**.
:::

# IV. Centre de symétrie d’une figure

:::definition
Un point $O$ est un **centre de symétrie** d’une figure si le symétrique de cette figure par rapport à $O$ est la figure elle-même.
:::

:::exemple
- Le milieu d’un segment est son centre de symétrie.
- Le centre d’un cercle est son centre de symétrie.
- Le point d’intersection des diagonales d’un parallélogramme est son centre de symétrie.
- Un triangle n’a pas de centre de symétrie.
:::

# Exercices

:::exercice Symétrique d’un point
Placer trois points $A$, $B$ et $O$ non alignés.
1. Construire $A'$ et $B'$, symétriques de $A$ et $B$ par rapport à $O$.
2. Construire le point $O'$ symétrique de $O$ par rapport à $A$.
3. Quelle est la nature du quadrilatère $ABA'B'$ ?
:::

:::exercice Segment et longueurs
$[EF]$ est un segment de longueur $5$ cm et $O$ un point extérieur à $(EF)$.
1. Construire $[E'F']$, symétrique de $[EF]$ par rapport à $O$.
2. Quelle est la longueur $E'F'$ ? Que dire des droites $(EF)$ et $(E'F')$ ? Justifier.
3. $I$ est le milieu de $[EF]$ ; où se trouve son symétrique $I'$ ?
:::

:::exercice Angle et cercle
1. Tracer un angle $\widehat{xAy}=50°$ et un point $O$ ; construire son symétrique $\widehat{x'A'y'}$ par rapport à $O$. Quelle est sa mesure ?
2. Tracer un cercle $(\mathcal C)$ de centre $I$ et de rayon $2$ cm, et un point $O$ tel que $OI=4$ cm. Construire le symétrique de $(\mathcal C)$ par rapport à $O$.
:::

:::exercice Centre de symétrie
Parmi les figures suivantes, lesquelles admettent un centre de symétrie : un segment ; un triangle équilatéral ; un rectangle ; un cercle ; une droite ; un angle ?
:::

:::exercice Démonstration
$ABC$ est un triangle et $I$ le milieu de $[BC]$. $D$ est le symétrique de $A$ par rapport à $I$.
1. Quel est le symétrique de $B$ par rapport à $I$ ? Justifier.
2. En déduire que $CD=AB$ et que $(CD)\parallel(AB)$.
:::

:::exercice Approfondissement — composée de deux symétries
$O$ et $O'$ sont deux points distincts. $M$ est un point quelconque, $M_1$ son symétrique par rapport à $O$ et $M_2$ le symétrique de $M_1$ par rapport à $O'$.
1. Faire une figure avec $OO'=3$ cm.
2. En utilisant la droite des milieux dans le triangle $MM_1M_2$, montrer que $MM_2=2OO'$ et que $(MM_2)\parallel(OO')$.
:::

:::exercice Approfondissement — construire avec la symétrie
$(D)$ et $(D')$ sont deux droites sécantes et $I$ un point qui n’appartient à aucune d’elles. Construire un point $A$ de $(D)$ et un point $B$ de $(D')$ tels que $I$ soit le milieu de $[AB]$. (Indication : construire le symétrique de $(D)$ par rapport à $I$.)
:::

# Corrigés

:::corrige
3. $O$ est le milieu de $[AA']$ et de $[BB']$ : les diagonales de $ABA'B'$ ont le même milieu, c’est un **parallélogramme**.
:::

:::corrige
2. La symétrie centrale conserve les longueurs : $E'F'=EF=5$ cm ; et le symétrique d’une droite est une droite parallèle : $(E'F')\parallel(EF)$.
3. La symétrie conserve les milieux : $I'$ est le milieu de $[E'F']$.
:::

:::corrige
1. La symétrie centrale conserve les angles : $\widehat{x'A'y'}=50°$.
2. On construit $I'$ symétrique de $I$ par rapport à $O$ ($OI'=4$ cm) ; le cercle symétrique a pour centre $I'$ et pour rayon $2$ cm.
:::

:::corrige
Ont un centre de symétrie : le segment (son milieu), le rectangle (intersection des diagonales), le cercle (son centre), la droite (n’importe lequel de ses points). Le triangle équilatéral et l’angle n’en ont pas.
:::

:::corrige
1. $I$ est le milieu de $[BC]$, donc le symétrique de $B$ par rapport à $I$ est $C$.
2. Le symétrique de $[AB]$ est $[DC]$ ; la symétrie conserve les longueurs et transforme une droite en une droite parallèle : $CD=AB$ et $(CD)\parallel(AB)$.
:::

:::corrige
2. Dans le triangle $MM_1M_2$, $O$ est le milieu de $[MM_1]$ et $O'$ celui de $[M_1M_2]$ : $(OO')\parallel(MM_2)$ et $OO'=\dfrac{MM_2}2$, soit $MM_2=2OO'$ (si $M_2\ne M$).
:::

:::corrige
Le symétrique $(D_1)$ de $(D)$ par rapport à $I$ coupe $(D')$ en $B$. Le symétrique $A$ de $B$ par rapport à $I$ est sur $(D)$ (car $B\in(D_1)$) et $I$ est le milieu de $[AB]$.
:::
