---
id: 1bac-barycentre
titre: Le barycentre dans le plan
niveau: 1bac
semestre: 1
duree: 8 heures
---

## Objectifs
- Définir le barycentre de deux, trois ou quatre points pondérés.
- Utiliser la propriété caractéristique pour construire un barycentre.
- Utiliser l’homogénéité et l’associativité du barycentre.
- Calculer les coordonnées d’un barycentre ; démontrer un alignement ou un concours de droites.

## Prérequis
- Calcul vectoriel, relation de Chasles, colinéarité.
- Milieu d’un segment, centre de gravité.
- Repère du plan.

# I. Barycentre de deux points

:::propriete Propriété de base
Soient $(A;a)$ et $(B;b)$ deux points pondérés avec $a+b\ne0$. Il existe un **unique** point $G$ tel que
$$a\overrightarrow{GA}+b\overrightarrow{GB}=\vec0.$$
:::

:::demonstration
$a\overrightarrow{GA}+b\overrightarrow{GB}=\vec0\iff a\overrightarrow{GA}+b\left(\overrightarrow{GA}+\overrightarrow{AB}\right)=\vec0\iff(a+b)\overrightarrow{AG}=b\overrightarrow{AB}\iff\overrightarrow{AG}=\dfrac{b}{a+b}\overrightarrow{AB}$, ce qui définit un unique point $G$.
:::

:::definition
Ce point $G$ est le **barycentre** du système $\{(A;a),(B;b)\}$. On note $G=\mathrm{Bar}\{(A;a),(B;b)\}$.
:::

:::propriete
1. $\overrightarrow{AG}=\dfrac{b}{a+b}\overrightarrow{AB}$ : $G$ appartient à la droite $(AB)$.
2. **Propriété caractéristique** : pour tout point $M$, $a\overrightarrow{MA}+b\overrightarrow{MB}=(a+b)\overrightarrow{MG}$.
3. **Homogénéité** : pour tout réel $k\ne0$, $\mathrm{Bar}\{(A;ka),(B;kb)\}=\mathrm{Bar}\{(A;a),(B;b)\}$.
4. Si $a=b$, $G$ est le milieu de $[AB]$ (on parle d’**isobarycentre**).
5. Si $a$ et $b$ sont de même signe, $G\in[AB]$ ; sinon $G$ est sur la droite $(AB)$ à l’extérieur de $[AB]$.
:::

:::exemple Construction
Construire $G=\mathrm{Bar}\{(A;2),(B;-3)\}$ : $\overrightarrow{AG}=\dfrac{-3}{2-3}\overrightarrow{AB}=3\overrightarrow{AB}$.
:::

```figure
{"type":"geometry","x":[-0.5,7],"y":[-0.6,0.8],"width":380,
 "segments":[{"from":[-0.3,0],"to":[6.8,0]}],
 "points":[{"x":0,"y":0,"label":"A"},{"x":2,"y":0,"label":"B"},{"x":6,"y":0,"label":"G"}],
 "caption":"$G=\\mathrm{Bar}\\{(A;2),(B;-3)\\}$ vérifie $\\overrightarrow{AG}=3\\overrightarrow{AB}$."}
```

# II. Barycentre de trois points

:::definition
Soient $(A;a)$, $(B;b)$, $(C;c)$ trois points pondérés avec $a+b+c\ne0$. Le **barycentre** de ce système est l’unique point $G$ tel que
$$a\overrightarrow{GA}+b\overrightarrow{GB}+c\overrightarrow{GC}=\vec0.$$
:::

:::propriete
- Pour tout point $M$ : $a\overrightarrow{MA}+b\overrightarrow{MB}+c\overrightarrow{MC}=(a+b+c)\overrightarrow{MG}$. En particulier, avec $M=A$ : $\overrightarrow{AG}=\dfrac{b}{a+b+c}\overrightarrow{AB}+\dfrac{c}{a+b+c}\overrightarrow{AC}$.
- Si $a=b=c$, $G$ est le **centre de gravité** du triangle $ABC$ (point de concours des médianes).
:::

:::theoreme Associativité
Si $a+b\ne0$ et $H=\mathrm{Bar}\{(A;a),(B;b)\}$, alors
$$\mathrm{Bar}\{(A;a),(B;b),(C;c)\}=\mathrm{Bar}\{(H;a+b),(C;c)\}.$$
On peut remplacer deux points par leur barycentre partiel affecté de la somme de leurs coefficients.
:::

:::exemple
$ABC$ est un triangle et $G=\mathrm{Bar}\{(A;1),(B;1),(C;2)\}$. Soit $I$ le milieu de $[AB]$ : $I=\mathrm{Bar}\{(A;1),(B;1)\}$, donc $G=\mathrm{Bar}\{(I;2),(C;2)\}$ : $G$ est le **milieu de $[IC]$**.
:::

:::methode Démontrer un alignement ou un concours
- Pour montrer que trois points sont alignés, on montre que l’un est barycentre des deux autres.
- Pour montrer que trois droites sont concourantes, on montre que le même point $G$ appartient à chacune, en utilisant l’associativité de trois façons différentes.
:::

# III. Coordonnées du barycentre

:::propriete
Dans un repère, si $G=\mathrm{Bar}\{(A;a),(B;b),(C;c)\}$ avec $a+b+c\ne0$ :
$$x_G=\frac{ax_A+bx_B+cx_C}{a+b+c}\qquad y_G=\frac{ay_A+by_B+cy_C}{a+b+c}.$$
Pour deux points, on supprime le terme en $C$.
:::

:::exemple
$A(1;2)$, $B(4;-1)$, $C(0;3)$ et $G=\mathrm{Bar}\{(A;2),(B;1),(C;-1)\}$ : $a+b+c=2$, $x_G=\dfrac{2+4+0}{2}=3$ et $y_G=\dfrac{4-1-3}{2}=0$. Donc $G(3;0)$.
:::

# Exercices

:::exercice Construction
$A$ et $B$ sont deux points tels que $AB=6$. Construire $G_1=\mathrm{Bar}\{(A;1),(B;2)\}$, $G_2=\mathrm{Bar}\{(A;3),(B;-1)\}$ et $G_3=\mathrm{Bar}\{(A;-2),(B;-2)\}$ en calculant $AG_1$, $AG_2$, $AG_3$.
:::

:::exercice Réciproquement
$M$ est le point de $(AB)$ tel que $\overrightarrow{AM}=\dfrac25\overrightarrow{AB}$. Écrire $M$ comme barycentre de $A$ et $B$.
:::

:::exercice Associativité
$ABC$ est un triangle, $G=\mathrm{Bar}\{(A;2),(B;1),(C;1)\}$ et $I$ le milieu de $[BC]$.
1. Montrer que $G$ est le milieu de $[AI]$.
2. Soit $J=\mathrm{Bar}\{(A;2),(B;1)\}$. Montrer que $J$, $G$ et $C$ sont alignés.
:::

:::exercice Ensemble de points
$ABC$ est un triangle et $G=\mathrm{Bar}\{(A;1),(B;1),(C;2)\}$. Déterminer l’ensemble des points $M$ du plan tels que $\left\|\overrightarrow{MA}+\overrightarrow{MB}+2\overrightarrow{MC}\right\|=8$.
:::

:::exercice Coordonnées
$A(-1;2)$, $B(3;0)$ et $C(1;-4)$. Déterminer les coordonnées de $G=\mathrm{Bar}\{(A;1),(B;2),(C;1)\}$ et du centre de gravité du triangle $ABC$.
:::

:::exercice Série — construction
$ABC$ est un triangle. Construire le barycentre $G$ des points pondérés $(A;1)$, $(B;2)$, $(C;1)$ en utilisant le milieu $I$ de $[AC]$ (barycentre partiel).
:::

:::exercice Série — lieu de points
$A$ et $B$ sont deux points distincts. Déterminer l’ensemble des points $M$ du plan tels que $\left\lVert\overrightarrow{MA}+3\overrightarrow{MB}\right\rVert=8$, sachant que $AB=4$.
:::

:::exercice Approfondissement — points alignés par barycentre
$ABC$ est un triangle. $I=\text{Bar}\{(B;1),(C;2)\}$, $J=\text{Bar}\{(A;3),(C;2)\}$ et $G=\text{Bar}\{(A;3),(B;1),(C;2)\}$.
1. Montrer que $G\in(AI)$ et $G\in(BJ)$.
2. En déduire que les droites $(AI)$, $(BJ)$ et $(CK)$ sont concourantes, où $K=\text{Bar}\{(A;3),(B;1)\}$.
:::

:::exercice Approfondissement — ensemble de points
$AB=4$. Déterminer l’ensemble des points $M$ tels que $\left\lVert2\overrightarrow{MA}+\overrightarrow{MB}\right\rVert=\left\lVert\overrightarrow{MA}-\overrightarrow{MB}\right\rVert$.
:::

# Corrigés

:::corrige
- $\overrightarrow{AG_1}=\dfrac23\overrightarrow{AB}$ : $AG_1=4$, $G_1\in[AB]$.
- $\overrightarrow{AG_2}=\dfrac{-1}{2}\overrightarrow{AB}$ : $AG_2=3$, du côté opposé à $B$.
- Coefficients égaux : $G_3$ est le milieu de $[AB]$, $AG_3=3$.
:::

:::corrige
$\overrightarrow{AM}=\dfrac25\overrightarrow{AB}=\dfrac{b}{a+b}\overrightarrow{AB}$ avec $b=2$ et $a+b=5$ : $M=\mathrm{Bar}\{(A;3),(B;2)\}$.
:::

:::corrige
1. $I=\mathrm{Bar}\{(B;1),(C;1)\}$, donc $G=\mathrm{Bar}\{(A;2),(I;2)\}$ : milieu de $[AI]$.
2. Par associativité, $G=\mathrm{Bar}\{(J;3),(C;1)\}$ : $G\in(JC)$, donc $J$, $G$, $C$ sont alignés.
:::

:::corrige
Pour tout $M$ : $\overrightarrow{MA}+\overrightarrow{MB}+2\overrightarrow{MC}=4\overrightarrow{MG}$. La condition devient $4MG=8$, soit $MG=2$ : c’est le cercle de centre $G$ et de rayon $2$.
:::

:::corrige
$x_G=\dfrac{-1+6+1}{4}=\dfrac32$ et $y_G=\dfrac{2+0-4}{4}=-\dfrac12$ : $G\left(\dfrac32;-\dfrac12\right)$. Centre de gravité : $\left(\dfrac{-1+3+1}3;\dfrac{2+0-4}3\right)=\left(1;-\dfrac23\right)$.
:::

:::corrige
$I$ est le barycentre de $(A;1)$ et $(C;1)$ ; par associativité, $G$ est le barycentre de $(I;2)$ et $(B;2)$ : $G$ est le milieu de $[IB]$.
:::

:::corrige
Soit $G$ le barycentre de $(A;1)$ et $(B;3)$ : $\overrightarrow{MA}+3\overrightarrow{MB}=4\overrightarrow{MG}$. La condition devient $4MG=8$, soit $MG=2$ : l’ensemble est le cercle de centre $G$ et de rayon $2$ (avec $\overrightarrow{AG}=\dfrac34\overrightarrow{AB}$, donc $AG=3$).
:::

:::corrige
1. Par associativité : $G=\text{Bar}\{(A;3),(I;3)\}$, donc $G\in(AI)$ (milieu de $[AI]$) ; et $G=\text{Bar}\{(J;5),(B;1)\}$, donc $G\in(BJ)$.
2. De même $G=\text{Bar}\{(K;4),(C;2)\}\in(CK)$ : les trois droites passent par $G$.
:::

:::corrige
Avec $G=\text{Bar}\{(A;2),(B;1)\}$ : $2\overrightarrow{MA}+\overrightarrow{MB}=3\overrightarrow{MG}$, et $\overrightarrow{MA}-\overrightarrow{MB}=\overrightarrow{BA}$. La condition devient $3MG=4$ : cercle de centre $G$ et de rayon $\dfrac43$.
:::
