---
id: 1bac-rotation
titre: La rotation dans le plan
niveau: 1bac
semestre: 2
duree: 8 heures
---

## Objectifs
- Définir une rotation par son centre et son angle orienté.
- Construire l’image d’un point et d’une figure par une rotation.
- Connaître et utiliser la propriété caractéristique et les propriétés de conservation de la rotation.
- Utiliser la rotation pour résoudre des problèmes de géométrie (triangles équilatéraux, carrés…).

## Prérequis
- Angles orientés, cercle trigonométrique.
- Transformations du plan (tronc commun).
- Triangles isométriques.

# I. Définition

:::definition
Le plan est orienté. Soient $\Omega$ un point et $\theta$ un réel. La **rotation** $R$ de centre $\Omega$ et d’angle $\theta$ est la transformation qui :
- laisse $\Omega$ invariant : $R(\Omega)=\Omega$ ;
- associe à tout point $M\ne\Omega$ le point $M'$ tel que
$$\Omega M'=\Omega M\qquad\text{et}\qquad\left(\overrightarrow{\Omega M},\overrightarrow{\Omega M'}\right)\equiv\theta\ [2\pi].$$
On note $R=r(\Omega,\theta)$.
:::

:::remarque
- $r(\Omega,0)$ est l’**identité** ; $r(\Omega,\pi)$ est la **symétrie centrale** de centre $\Omega$.
- Si $\theta\not\equiv0\ [2\pi]$, le seul point invariant est $\Omega$.
- $M'=R(M)$ équivaut à $M=R'(M')$ où $R'=r(\Omega,-\theta)$ est la **rotation réciproque**.
:::

```figure
{"type":"geometry","x":[-3.2,4],"y":[-0.8,4],"width":330,
 "polygons":[{"points":[[1,0.5],[3,0.5],[2,2]],"color":"brand"},{"points":[[-0.5,1],[-0.5,3],[-2,2]],"color":"saffron"}],
 "segments":[{"from":[0,0],"to":[2,2],"dashed":true},{"from":[0,0],"to":[-2,2],"dashed":true}],
 "rightAngles":[{"at":[0,0],"u":[0.707,0.707],"v":[-0.707,0.707]}],
 "points":[{"x":0,"y":0,"label":"Ω"},{"x":2,"y":2,"label":"C"},{"x":-2,"y":2,"label":"C'"}],
 "caption":"Image d’un triangle par la rotation de centre $\\Omega$ et d’angle $\\dfrac\\pi2$."}
```

# II. Propriété caractéristique

:::theoreme
Soit $R$ une rotation d’angle $\theta$. Pour tous points $M$ et $N$ d’images $M'$ et $N'$ :
$$M'N'=MN\qquad\text{et, si }M\ne N,\qquad\left(\overrightarrow{MN},\overrightarrow{M'N'}\right)\equiv\theta\ [2\pi].$$
:::

:::remarque
La rotation est donc une **isométrie** (elle conserve les distances) qui « tourne » toutes les directions du même angle $\theta$.
:::

# III. Propriétés de conservation

:::propriete
Une rotation conserve :
- les **distances** et donc les longueurs, les aires et les périmètres ;
- l’**alignement** et le **milieu** d’un segment ;
- les **mesures des angles orientés** ;
- le **parallélisme** et l’**orthogonalité**.
:::

:::propriete Images de figures
Par une rotation $R$ d’angle $\theta$ :
- l’image d’une droite $(D)$ est une droite $(D')$ avec $\left(\vec u,\vec u'\right)\equiv\theta$ pour leurs vecteurs directeurs ;
- l’image d’un segment $[AB]$ est le segment $[A'B']$ de même longueur ;
- l’image d’un cercle de centre $O$ et de rayon $r$ est le cercle de centre $R(O)$ et de même rayon $r$ ;
- l’image d’un triangle est un triangle isométrique.
:::

# IV. Applications

:::methode Reconnaître une rotation
Si $\Omega A=\Omega B$ et $\left(\overrightarrow{\Omega A},\overrightarrow{\Omega B}\right)\equiv\theta$, alors $B$ est l’image de $A$ par la rotation $r(\Omega,\theta)$.
:::

:::exemple Triangle équilatéral
Si $ABC$ est un triangle équilatéral direct ($\left(\overrightarrow{AB},\overrightarrow{AC}\right)\equiv\dfrac\pi3$), alors $C=r\left(A,\dfrac\pi3\right)(B)$.
:::

:::exemple Carré
Si $ABCD$ est un carré direct de centre $O$, la rotation $r\left(O,\dfrac\pi2\right)$ transforme $A$ en $B$, $B$ en $C$, $C$ en $D$ et $D$ en $A$ : elle laisse le carré globalement invariant.
:::

:::exemple Problème classique
$ABC$ est un triangle équilatéral direct et $M$ un point de $[BC]$. On construit $M'$ tel que $AMM'$ soit équilatéral direct. Soit $R=r\left(A,\dfrac\pi3\right)$ : $R(B)=C$ et $R(M)=M'$. Par la propriété caractéristique, $CM'=BM$ et $\left(\overrightarrow{BM},\overrightarrow{CM'}\right)\equiv\dfrac\pi3$.
:::

# Exercices

:::exercice Construction
Placer deux points $\Omega$ et $A$ avec $\Omega A=3$ cm. Construire $B=r\left(\Omega,\dfrac\pi3\right)(A)$ et $C=r\left(\Omega,-\dfrac{\pi}2\right)(A)$. Quelle est la nature du triangle $\Omega AB$ ?
:::

:::exercice Carré
$ABCD$ est un carré direct de centre $O$. Déterminer l’image de $[AB]$ et de la droite $(AC)$ par $r\left(O,\dfrac\pi2\right)$. En déduire que $(AC)\perp(BD)$.
:::

:::exercice Triangles équilatéraux
$ABC$ est un triangle quelconque. On construit, à l’extérieur, les triangles équilatéraux $ABD$ et $ACE$. Montrer, à l’aide de la rotation de centre $A$ et d’angle $\dfrac\pi3$ (ou $-\dfrac\pi3$), que $DC=BE$.
:::

:::exercice Cercle
$(\mathcal C)$ est le cercle de centre $O(2;0)$ et de rayon $1$. Déterminer le centre et le rayon de son image par la rotation de centre l’origine $(0;0)$ et d’angle $\dfrac\pi2$.
:::

# Corrigés

:::corrige
$\Omega B=\Omega A$ et $\left(\overrightarrow{\Omega A},\overrightarrow{\Omega B}\right)\equiv\dfrac\pi3$ : le triangle $\Omega AB$ est isocèle en $\Omega$ avec un angle au sommet de $60^\circ$ : il est **équilatéral**. $C$ est obtenu en tournant $A$ de $90^\circ$ dans le sens indirect.
:::

:::corrige
$r\left(O,\dfrac\pi2\right)$ transforme $A$ en $B$ et $B$ en $C$ : l’image de $[AB]$ est $[BC]$. Elle transforme $A$ en $B$ et $C$ en $D$ : l’image de $(AC)$ est $(BD)$. Une rotation d’angle $\dfrac\pi2$ transforme une droite en une droite perpendiculaire : $(AC)\perp(BD)$.
:::

:::corrige
Avec l’orientation adaptée, la rotation $R$ de centre $A$ et d’angle $\dfrac\pi3$ transforme $D$ en $B$ et $C$ en $E$ (car $AD=AB$, $AC=AE$ et les angles valent $\dfrac\pi3$). Comme $R$ conserve les distances, $DC=BE$.
:::

:::corrige
L’image du centre $O(2;0)$ par la rotation de centre l’origine et d’angle $\dfrac\pi2$ est $O'(0;2)$. L’image est le cercle de centre $O'(0;2)$ et de rayon $1$.
:::
