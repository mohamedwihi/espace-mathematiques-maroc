---
id: 2ac-droites-remarquables
titre: Les droites remarquables d’un triangle
niveau: 2ac
semestre: 1
duree: 8 heures
---

## Objectifs
- Connaître et construire les médiatrices, bissectrices, hauteurs et médianes d’un triangle.
- Connaître leurs points de concours : centre du cercle circonscrit, centre du cercle inscrit, orthocentre, centre de gravité.
- Utiliser ces droites dans des démonstrations.

## Prérequis
- Médiatrice d’un segment et bissectrice d’un angle, avec leurs propriétés caractéristiques.
- Distance d’un point à une droite.

# I. Les médiatrices

:::definition
Une **médiatrice** d’un triangle est la médiatrice de l’un de ses côtés.
:::

:::propriete
Les trois médiatrices d’un triangle sont **concourantes** en un point $O$, **centre du cercle circonscrit** au triangle (le cercle qui passe par ses trois sommets) :
$$OA=OB=OC.$$
:::

:::demonstration
$O$ est sur la médiatrice de $[AB]$, donc $OA=OB$ ; sur celle de $[BC]$, donc $OB=OC$. Ainsi $OA=OC$ : $O$ est aussi sur la médiatrice de $[AC]$.
:::

```figure
{"type":"geometry","x":[-0.8,9],"y":[-3.4,6.4],"width":300,"orthonormal":true,
 "polygons":[{"points":[[0,0],[8,0],[3,5]],"color":"ink","fill":false}],
 "circles":[{"c":[4,1],"r":4.123,"color":"brand"}],
 "segments":[{"from":[4,-1.5],"to":[4,4.5],"dashed":true},{"from":[0,3.4],"to":[6,-0.2],"dashed":true},{"from":[5.5,2.5],"to":[1.9,-1.1],"dashed":true}],
 "points":[{"x":0,"y":0,"label":"A"},{"x":8,"y":0,"label":"B"},{"x":3,"y":5,"label":"C"},{"x":4,"y":1,"label":"O"}],
 "caption":"Les médiatrices se coupent en $O$, centre du cercle circonscrit."}
```

# II. Les bissectrices

:::definition
Une **bissectrice** d’un triangle est la bissectrice de l’un de ses angles.
:::

:::propriete
Les trois bissectrices d’un triangle sont concourantes en un point $I$, **centre du cercle inscrit** dans le triangle (cercle tangent aux trois côtés). $I$ est équidistant des trois côtés.
:::

# III. Les hauteurs

:::definition
Une **hauteur** d’un triangle est la droite qui passe par un sommet et qui est **perpendiculaire** au côté opposé (ou à son support).
:::

:::propriete
Les trois hauteurs d’un triangle sont concourantes en un point $H$ appelé **orthocentre** du triangle.
:::

```figure
{"type":"geometry","x":[-1,9],"y":[-0.8,5.8],"width":300,"orthonormal":true,
 "polygons":[{"points":[[0,0],[8,0],[3,5]],"color":"ink","fill":false}],
 "segments":[{"from":[3,5],"to":[3,0],"dashed":true,"color":"brand"},{"from":[0,0],"to":[4,4],"dashed":true,"color":"brand"},{"from":[8,0],"to":[2.12,3.53],"dashed":true,"color":"brand"}],
 "rightAngles":[{"at":[3,0],"u":[1,0],"v":[0,1]}],
 "points":[{"x":0,"y":0,"label":"A"},{"x":8,"y":0,"label":"B"},{"x":3,"y":5,"label":"C"},{"x":3,"y":3,"label":"H"}],
 "caption":"Les hauteurs se coupent en $H$, l’orthocentre."}
```

:::remarque
- Dans un triangle rectangle, l’orthocentre est le sommet de l’angle droit.
- Dans un triangle obtusangle, l’orthocentre est à l’extérieur du triangle.
- L’aire d’un triangle est $\dfrac{\text{base}\times\text{hauteur}}2$, quelle que soit la base choisie.
:::

# IV. Les médianes

:::definition
Une **médiane** d’un triangle est la droite qui passe par un sommet et par le **milieu du côté opposé**.
:::

:::propriete
Les trois médianes d’un triangle sont concourantes en un point $G$ appelé **centre de gravité** du triangle. Il est situé aux **deux tiers** de chaque médiane à partir du sommet :
$$AG=\frac23AA'\qquad(A'\ \text{milieu de}\ [BC]).$$
:::

:::exemple
Si la médiane $[AA']$ mesure $9$ cm, alors $AG=6$ cm et $GA'=3$ cm.
:::

:::remarque
Chaque médiane partage le triangle en deux triangles de même aire.
:::

# V. Cas du triangle isocèle et équilatéral

:::propriete
Dans un triangle $ABC$ isocèle en $A$, la médiatrice de $[BC]$, la bissectrice de $\widehat A$, la hauteur et la médiane issues de $A$ sont **confondues** : c’est l’axe de symétrie du triangle.

Dans un triangle équilatéral, les quatre points $O$, $I$, $H$ et $G$ sont confondus.
:::

# Exercices

:::exercice Cercle circonscrit
1. Construire un triangle $ABC$ tel que $AB=6$ cm, $BC=5$ cm et $AC=4$ cm.
2. Construire son cercle circonscrit. Justifier la construction.
:::

:::exercice Orthocentre
$ABC$ est un triangle ; $[AK]$ et $[BL]$ sont deux hauteurs qui se coupent en $H$.
1. Que représente la droite $(CH)$ pour le triangle $ABC$ ? Justifier.
2. Que peut-on dire des droites $(CH)$ et $(AB)$ ?
:::

:::exercice Centre de gravité
$ABC$ est un triangle ; $I$ est le milieu de $[BC]$ et $J$ le milieu de $[AC]$. Les droites $(AI)$ et $(BJ)$ se coupent en $G$.
1. Que représente $G$ ? Justifier.
2. On donne $AI=7{,}5$ cm. Calculer $AG$ et $GI$.
3. La droite $(CG)$ coupe $[AB]$ en $K$. Que représente $K$ ?
:::

:::exercice Triangle rectangle
$ABC$ est un triangle rectangle en $A$.
1. Quel est son orthocentre ?
2. On admet que le centre du cercle circonscrit est le milieu $M$ de $[BC]$. Si $BC=10$ cm, quel est le rayon de ce cercle ?
:::

:::exercice Triangle isocèle
$ABC$ est isocèle en $A$ avec $\widehat{BAC}=40°$ ; $I$ est le milieu de $[BC]$.
1. Montrer que $(AI)$ est la bissectrice de $\widehat{BAC}$ et calculer $\widehat{BAI}$.
2. Que représente $(AI)$ pour $[BC]$ ?
:::

:::exercice Approfondissement — orthocentre et parallèles
$ABC$ est un triangle, $H$ son orthocentre. On mène par $A$ la parallèle à $(BC)$, par $B$ la parallèle à $(AC)$ et par $C$ la parallèle à $(AB)$ ; elles forment un triangle $A'B'C'$.
1. Montrer que $A$ est le milieu de $[B'C']$ (utiliser des parallélogrammes).
2. En déduire que les hauteurs de $ABC$ sont les médiatrices de $A'B'C'$, et que $H$ est le centre du cercle circonscrit à $A'B'C'$.
:::

:::exercice Approfondissement — centre de gravité et aires
$G$ est le centre de gravité du triangle $ABC$ et $A'$ le milieu de $[BC]$. L’aire de $ABC$ est $36\ \text{cm}^2$.
1. Calculer l’aire de $ABA'$.
2. Calculer l’aire de $GBA'$ (on utilisera $GA'=\dfrac13AA'$).
3. En déduire l’aire de $GBC$.
:::

# Corrigés

:::corrige
2. On construit deux médiatrices (par exemple de $[AB]$ et $[BC]$) ; leur point d’intersection $O$ vérifie $OA=OB=OC$. Le cercle de centre $O$ et de rayon $OA$ passe par les trois sommets.
:::

:::corrige
1. Les trois hauteurs sont concourantes ; $H$ est l’orthocentre, donc $(CH)$ est la troisième hauteur, issue de $C$.
2. $(CH)\perp(AB)$.
:::

:::corrige
1. $(AI)$ et $(BJ)$ sont deux médianes : $G$ est le centre de gravité.
2. $AG=\dfrac23\times7{,}5=5$ cm et $GI=7{,}5-5=2{,}5$ cm.
3. $(CG)$ est la troisième médiane : $K$ est le milieu de $[AB]$.
:::

:::corrige
1. Les hauteurs issues de $B$ et $C$ sont $(AB)$ et $(AC)$ ; elles se coupent en $A$ : l’orthocentre est $A$.
2. $r=\dfrac{BC}2=5$ cm.
:::

:::corrige
1. Dans un triangle isocèle en $A$, la médiane issue de $A$ est aussi bissectrice : $\widehat{BAI}=20°$.
2. C’est aussi la médiatrice de $[BC]$ (et la hauteur issue de $A$).
:::

:::corrige
1. $ABCB'$ et $ACBC'$ sont des parallélogrammes (côtés opposés parallèles), avec $B'$ et $C'$ sur la parallèle à $(BC)$ passant par $A$ : $AB'=BC$ et $AC'=BC$. Donc $A$ est le milieu de $[B'C']$.
2. La hauteur issue de $A$ est perpendiculaire à $(BC)$, donc à $(B'C')$, en son milieu $A$ : c’est la médiatrice de $[B'C']$. De même pour les autres. Les trois hauteurs de $ABC$ concourent en $H$, qui est donc le point de concours des médiatrices de $A'B'C'$.
:::

:::corrige
1. Une médiane partage le triangle en deux triangles de même aire : $18\ \text{cm}^2$.
2. $GBA'$ et $ABA'$ ont la même hauteur issue de $B$ et des bases $GA'=\dfrac13AA'$ : aire $6\ \text{cm}^2$.
3. $GBC$ est formé de $GBA'$ et $GA'C$ (même aire) : $12\ \text{cm}^2$.
:::
