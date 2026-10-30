---
id: 2ac-symetrie-axiale
titre: La symétrie axiale
niveau: 2ac
semestre: 1
duree: 8 heures
---

## Objectifs
- Construire le symétrique d’un point par rapport à une droite.
- Construire le symétrique d’un segment, d’une droite, d’une demi-droite, d’un angle et d’un cercle.
- Connaître et utiliser les propriétés de conservation de la symétrie axiale.
- Reconnaître les axes de symétrie d’une figure.

## Prérequis
- Médiatrice d’un segment et sa propriété caractéristique.
- Symétrie centrale (1re année).

# I. Symétrique d’un point

:::definition
Soit $(\Delta)$ une droite. Le **symétrique** d’un point $M$ par rapport à $(\Delta)$ est le point $M'$ tel que :
- si $M\notin(\Delta)$ : $(\Delta)$ est la **médiatrice** du segment $[MM']$ ;
- si $M\in(\Delta)$ : $M'=M$.
:::

```figure
{"type":"geometry","x":[-0.5,8.5],"y":[-0.5,5.5],"width":300,
 "segments":[{"from":[4,-0.3],"to":[4,5.3],"color":"brand"},{"from":[1.5,2.5],"to":[6.5,2.5],"dashed":true}],
 "rightAngles":[{"at":[4,2.5],"u":[1,0],"v":[0,1]}],
 "points":[{"x":1.5,"y":2.5,"label":"M"},{"x":6.5,"y":2.5,"label":"M'"},{"x":4,"y":2.5,"label":"H"},{"x":4.5,"y":5,"label":"(Δ)","dot":false}],
 "caption":"$(\\Delta)\\perp(MM')$ et $H$ est le milieu de $[MM']$."}
```

:::methode Construction
- **À l’équerre** : on trace la perpendiculaire à $(\Delta)$ passant par $M$ ; elle coupe $(\Delta)$ en $H$ ; on place $M'$ sur cette droite, de l’autre côté, avec $HM'=HM$.
- **Au compas** : on choisit deux points $A$ et $B$ de $(\Delta)$ ; les cercles de centre $A$ passant par $M$ et de centre $B$ passant par $M$ se recoupent en $M'$.
:::

:::remarque
Si $M'$ est le symétrique de $M$, alors $M$ est le symétrique de $M'$. Pour tout point $A$ de $(\Delta)$, $AM=AM'$.
:::

# II. Symétrique d’un segment

:::propriete
Le symétrique d’un segment $[AB]$ par rapport à une droite est le segment $[A'B']$, où $A'$ et $B'$ sont les symétriques de $A$ et $B$, et
$$A'B'=AB.$$
La symétrie axiale **conserve les longueurs**.
:::

:::propriete
Le symétrique du milieu d’un segment est le milieu du segment symétrique.
:::

# III. Symétrique d’une droite et d’une demi-droite

:::propriete 1 Droite
Le symétrique d’une droite $(AB)$ par rapport à $(\Delta)$ est la droite $(A'B')$. La symétrie axiale **conserve l’alignement**.
:::

:::propriete 2 Cas particuliers
- Si $(D)\parallel(\Delta)$, alors sa symétrique $(D')$ est aussi parallèle à $(\Delta)$.
- Si $(D)$ coupe $(\Delta)$ en un point $I$, alors $(D')$ passe aussi par $I$.
- Si $(D)\perp(\Delta)$, alors $(D)$ est sa propre symétrique.
:::

:::propriete 3 Demi-droite
Le symétrique de la demi-droite $[AB)$ est la demi-droite $[A'B')$.
:::

:::propriete Parallélisme et orthogonalité
Les symétriques de deux droites parallèles sont deux droites parallèles ; les symétriques de deux droites perpendiculaires sont deux droites perpendiculaires.
:::

# IV. Symétrique d’un angle et d’un cercle

:::propriete Angle
Le symétrique d’un angle $\widehat{ABC}$ est l’angle $\widehat{A'B'C'}$, et $\widehat{A'B'C'}=\widehat{ABC}$. La symétrie axiale **conserve les mesures des angles**.
:::

:::propriete Cercle
Le symétrique du cercle de centre $O$ et de rayon $r$ est le cercle de centre $O'$ (symétrique de $O$) et de **même rayon** $r$.
:::

```figure
{"type":"geometry","x":[-0.5,10],"y":[-0.5,5.5],"width":320,
 "segments":[{"from":[5,-0.3],"to":[5,5.3],"color":"brand"}],
 "polygons":[{"points":[[1,1],[3.5,1.5],[2,4]],"color":"saffron"},{"points":[[9,1],[6.5,1.5],[8,4]],"color":"saffron"}],
 "points":[{"x":1,"y":1,"label":"A"},{"x":3.5,"y":1.5,"label":"B"},{"x":2,"y":4,"label":"C"},{"x":9,"y":1,"label":"A'"},{"x":6.5,"y":1.5,"label":"B'"},{"x":8,"y":4,"label":"C'"}],
 "caption":"Le triangle $A'B'C'$, symétrique de $ABC$, lui est superposable."}
```

:::propriete Bilan
La symétrie axiale conserve les longueurs, l’alignement, les angles, le parallélisme, l’orthogonalité, les périmètres et les aires.
:::

# V. Axes de symétrie d’une figure

:::definition
Une droite $(\Delta)$ est un **axe de symétrie** d’une figure si le symétrique de cette figure par rapport à $(\Delta)$ est la figure elle-même.
:::

:::exemple
| Figure | Axes de symétrie |
|---|---|
| Segment | sa médiatrice (et sa droite support) |
| Angle | sa bissectrice |
| Triangle isocèle | la médiatrice de sa base |
| Triangle équilatéral | ses trois médiatrices |
| Rectangle | les deux médiatrices de ses côtés |
| Losange | ses deux diagonales |
| Carré | quatre axes |
| Cercle | tous ses diamètres |
:::

# Exercices

:::exercice Construction
Tracer une droite $(\Delta)$ et trois points $A$, $B$, $C$ non alignés, avec $C\in(\Delta)$.
1. Construire $A'$, $B'$ et $C'$, symétriques de $A$, $B$, $C$ par rapport à $(\Delta)$.
2. Construire le symétrique du triangle $ABC$. Comparer leurs périmètres.
:::

:::exercice Propriétés
$ABC$ est un triangle tel que $AB=5$ cm, $\widehat{ABC}=40°$, et $I$ est le milieu de $[BC]$. On note $A'$, $B'$, $C'$, $I'$ les symétriques de $A$, $B$, $C$, $I$ par rapport à une droite $(\Delta)$.
Que valent $A'B'$ et $\widehat{A'B'C'}$ ? Que représente $I'$ pour $[B'C']$ ? Justifier.
:::

:::exercice Droites
$(D_1)$ et $(D_2)$ sont deux droites perpendiculaires et $(\Delta)$ une droite qui coupe $(D_1)$ en $I$.
1. On note $(D_1')$ et $(D_2')$ leurs symétriques par rapport à $(\Delta)$. Que dire de $(D_1')$ et $(D_2')$ ?
2. Justifier que $I\in(D_1')$.
:::

:::exercice Cercle
Tracer un cercle $(\mathcal C)$ de centre $O$ et de rayon $2$ cm, et une droite $(\Delta)$ telle que la distance de $O$ à $(\Delta)$ soit $3$ cm. Construire le symétrique $(\mathcal C')$ de $(\mathcal C)$ par rapport à $(\Delta)$. Les deux cercles se coupent-ils ?
:::

:::exercice Axes de symétrie
Combien d’axes de symétrie ont : un triangle isocèle non équilatéral ; un parallélogramme quelconque ; un hexagone régulier ; la lettre H ?
:::

# Corrigés

:::corrige
1. $C\in(\Delta)$, donc $C'=C$.
2. La symétrie axiale conserve les longueurs : $A'B'=AB$, $B'C'=BC$, $A'C'=AC$, les périmètres sont égaux.
:::

:::corrige
$A'B'=AB=5$ cm (conservation des longueurs) ; $\widehat{A'B'C'}=40°$ (conservation des angles) ; $I'$ est le milieu de $[B'C']$ (conservation du milieu).
:::

:::corrige
1. La symétrie conserve l’orthogonalité : $(D_1')\perp(D_2')$.
2. $I\in(\Delta)$ est son propre symétrique et $I\in(D_1)$, donc $I\in(D_1')$.
:::

:::corrige
$OO'=2\times3=6$ cm et les deux rayons valent $2$ cm ; comme $6>2+2$, les cercles ne se coupent pas.
:::

:::corrige
Un ; aucun ; six ; deux.
:::
