---
id: tc-transformations
titre: Les transformations du plan
niveau: tc
semestre: 2
duree: 10 heures
---

## Objectifs
- Connaître les définitions vectorielles de la symétrie centrale, de la symétrie axiale, de la translation et de l’homothétie.
- Construire l’image d’un point et d’une figure par ces transformations.
- Connaître et utiliser les propriétés de conservation (distances, alignement, parallélisme, angles, milieu).
- Utiliser les transformations pour résoudre des problèmes de géométrie.

## Prérequis
- Calcul vectoriel, colinéarité.
- Symétries et translation (collège).
- Théorème de Thalès.

# I. Transformations du plan

:::definition
Une **transformation** du plan est une application qui à tout point $M$ associe un unique point $M'$ appelé **image** de $M$. Un point $M$ est **invariant** si $M'=M$.
:::

# II. Symétrie centrale

:::definition
Soit $\Omega$ un point. La **symétrie centrale** de centre $\Omega$, notée $S_\Omega$, associe à tout point $M$ le point $M'$ tel que $\Omega$ soit le milieu de $[MM']$, c’est-à-dire
$$\overrightarrow{\Omega M'}=-\overrightarrow{\Omega M}.$$
Le seul point invariant est $\Omega$.
:::

:::propriete
Si $S_\Omega(M)=M'$ et $S_\Omega(N)=N'$, alors $\overrightarrow{M'N'}=-\overrightarrow{MN}$ ; en particulier $M'N'=MN$.
:::

# III. Symétrie axiale

:::definition
Soit $(\Delta)$ une droite. La **symétrie axiale** d’axe $(\Delta)$, notée $S_{(\Delta)}$, associe à tout point $M\notin(\Delta)$ le point $M'$ tel que $(\Delta)$ soit la **médiatrice** de $[MM']$ ; les points de $(\Delta)$ sont invariants.
:::

:::propriete
La symétrie axiale **conserve les distances** : si $S_{(\Delta)}(M)=M'$ et $S_{(\Delta)}(N)=N'$, alors $M'N'=MN$.
:::

# IV. Translation

:::definition
Soit $\vec u$ un vecteur. La **translation** de vecteur $\vec u$, notée $t_{\vec u}$, associe à tout point $M$ le point $M'$ tel que
$$\overrightarrow{MM'}=\vec u.$$
Si $\vec u\ne\vec0$, aucun point n’est invariant.
:::

:::propriete
Si $t_{\vec u}(M)=M'$ et $t_{\vec u}(N)=N'$, alors $\overrightarrow{M'N'}=\overrightarrow{MN}$ : $MNN'M'$ est un parallélogramme et $M'N'=MN$.
:::

# V. Homothétie

:::definition
Soient $\Omega$ un point et $k$ un réel non nul. L’**homothétie** de centre $\Omega$ et de rapport $k$, notée $h(\Omega,k)$, associe à tout point $M$ le point $M'$ tel que
$$\overrightarrow{\Omega M'}=k\overrightarrow{\Omega M}.$$
:::

:::remarque
- $\Omega$, $M$ et $M'$ sont alignés. Si $k\ne1$, le seul point invariant est $\Omega$.
- $h(\Omega,1)$ est l’identité ; $h(\Omega,-1)$ est la symétrie centrale de centre $\Omega$.
- Si $|k|>1$, l’homothétie est un **agrandissement** ; si $|k|<1$, une **réduction**.
:::

:::propriete Propriété caractéristique
Si $h(\Omega,k)$ transforme $M$ en $M'$ et $N$ en $N'$, alors
$$\overrightarrow{M'N'}=k\overrightarrow{MN}\qquad\text{donc}\qquad M'N'=|k|\,MN.$$
:::

:::demonstration
$\overrightarrow{M'N'}=\overrightarrow{M'\Omega}+\overrightarrow{\Omega N'}=-k\overrightarrow{\Omega M}+k\overrightarrow{\Omega N}=k\left(\overrightarrow{M\Omega}+\overrightarrow{\Omega N}\right)=k\overrightarrow{MN}$.
:::

```figure
{"type":"geometry","x":[-0.5,7.5],"y":[-0.5,4.6],"width":360,
 "polygons":[{"points":[[2,1],[3.5,1],[2.5,2]],"color":"brand"},{"points":[[4,2],[7,2],[5,4]],"color":"saffron"}],
 "segments":[{"from":[0,0],"to":[4,2],"dashed":true},{"from":[0,0],"to":[7,2],"dashed":true},{"from":[0,0],"to":[5,4],"dashed":true}],
 "points":[{"x":0,"y":0,"label":"Ω"},{"x":2,"y":1,"label":"A"},{"x":3.5,"y":1,"label":"B"},{"x":2.5,"y":2,"label":"C"},{"x":4,"y":2,"label":"A'"},{"x":7,"y":2,"label":"B'"},{"x":5,"y":4,"label":"C'"}],
 "caption":"Image du triangle $ABC$ par l’homothétie de centre $\\Omega$ et de rapport $2$."}
```

# VI. Propriétés communes et images des figures

:::propriete Conservation
Les symétries, la translation et l’homothétie conservent :
- l’**alignement** des points ;
- le **parallélisme** et l’**orthogonalité** des droites ;
- les **mesures des angles** géométriques ;
- le **milieu** d’un segment (et plus généralement le coefficient de colinéarité).

Les symétries et la translation conservent aussi les **distances** (ce sont des isométries). L’homothétie de rapport $k$ multiplie les distances par $|k|$ et les aires par $k^2$.
:::

:::propriete Images de figures
| Figure | Image par $S_\Omega$, $S_{(\Delta)}$ ou $t_{\vec u}$ | Image par $h(\Omega,k)$ |
|---|---|---|
| Segment $[AB]$ | segment $[A'B']$ avec $A'B'=AB$ | segment $[A'B']$ avec $A'B'=\lvert k\rvert AB$ |
| Droite $(AB)$ | droite $(A'B')$ | droite $(A'B')$ **parallèle** à $(AB)$ |
| Cercle de centre $O$, rayon $r$ | cercle de centre $O'$, rayon $r$ | cercle de centre $O'$, rayon $\lvert k\rvert r$ |
| Angle | angle de même mesure | angle de même mesure |

L’image d’une droite par une translation ou une symétrie centrale est aussi une droite parallèle.
:::

:::exemple
$ABC$ est un triangle, $I$ et $J$ les milieux de $[AB]$ et $[AC]$. L’homothétie $h\left(A,\dfrac12\right)$ transforme $B$ en $I$ et $C$ en $J$, donc $\overrightarrow{IJ}=\dfrac12\overrightarrow{BC}$ : on retrouve le théorème de la droite des milieux.
:::

# Exercices

:::exercice Constructions
Construire un triangle $ABC$, puis son image par : la symétrie centrale de centre $A$ ; la translation de vecteur $\overrightarrow{BC}$ ; l’homothétie de centre $B$ et de rapport $-\dfrac12$.
:::

:::exercice Homothétie
On donne $\overrightarrow{\Omega A'}=3\overrightarrow{\Omega A}$ et $\overrightarrow{\Omega B'}=3\overrightarrow{\Omega B}$ avec $AB=2$. Calculer $A'B'$ et montrer que $(A'B')\parallel(AB)$.
:::

:::exercice Déterminer une homothétie
$A$, $B$, $C$ sont trois points alignés avec $\overrightarrow{AC}=-2\overrightarrow{AB}$. Déterminer le centre et le rapport de l’homothétie qui transforme $B$ en $C$ et laisse $A$ invariant.
:::

:::exercice Parallélogramme
$ABCD$ est un parallélogramme de centre $O$. Déterminer l’image de $[AB]$ par $S_O$, puis l’image de $D$ par la translation de vecteur $\overrightarrow{AB}$.
:::

:::exercice Aires
Un triangle d’aire $6\ \text{cm}^2$ est transformé par une homothétie de rapport $-3$. Calculer l’aire de l’image.
:::

# Corrigés

:::corrige
- $S_A$ : $A$ reste fixe, $B'$ et $C'$ sont les symétriques de $B$ et $C$ par rapport à $A$.
- $t_{\overrightarrow{BC}}$ : chaque point est déplacé du vecteur $\overrightarrow{BC}$ ; en particulier $B$ a pour image $C$.
- $h\left(B,-\dfrac12\right)$ : $B$ est fixe, $\overrightarrow{BA'}=-\dfrac12\overrightarrow{BA}$ et $\overrightarrow{BC'}=-\dfrac12\overrightarrow{BC}$.
:::

:::corrige
D’après la propriété caractéristique, $\overrightarrow{A'B'}=3\overrightarrow{AB}$, donc $A'B'=6$ et les vecteurs sont colinéaires : $(A'B')\parallel(AB)$.
:::

:::corrige
$A$ invariant : le centre est $A$. On cherche $k$ avec $\overrightarrow{AC}=k\overrightarrow{AB}$ : $k=-2$. C’est l’homothétie $h(A,-2)$.
:::

:::corrige
$S_O(A)=C$ et $S_O(B)=D$ : l’image de $[AB]$ est $[CD]$. Et $\overrightarrow{DC}=\overrightarrow{AB}$, donc $t_{\overrightarrow{AB}}(D)=C$.
:::

:::corrige
Les aires sont multipliées par $k^2=9$ : $6\times9=54\ \text{cm}^2$.
:::
