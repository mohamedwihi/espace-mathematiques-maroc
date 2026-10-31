---
id: tc-produit-scalaire
titre: Le produit scalaire
niveau: tc
semestre: 2
duree: 10 heures
---

## Objectifs
- Calculer le produit scalaire de deux vecteurs à l’aide de la projection orthogonale.
- Utiliser la forme trigonométrique du produit scalaire.
- Connaître et utiliser les propriétés du produit scalaire ; caractériser l’orthogonalité.
- Utiliser le produit scalaire dans le triangle : théorème d’Al-Kashi, théorème de la médiane, relations métriques dans le triangle rectangle.

## Prérequis
- Projection orthogonale, calcul vectoriel.
- Trigonométrie (cosinus d’un angle).
- Théorème de Pythagore.

# I. Produit scalaire de deux vecteurs

:::definition
Soient $\vec u=\overrightarrow{AB}$ et $\vec v=\overrightarrow{AC}$ deux vecteurs non nuls, et $H$ le projeté orthogonal de $C$ sur la droite $(AB)$. Le **produit scalaire** de $\vec u$ et $\vec v$, noté $\vec u\cdot\vec v$, est le réel :
- $\overrightarrow{AB}\cdot\overrightarrow{AC}=AB\times AH$ si $\overrightarrow{AB}$ et $\overrightarrow{AH}$ ont le **même sens** ;
- $\overrightarrow{AB}\cdot\overrightarrow{AC}=-AB\times AH$ s’ils sont de **sens contraires**.

Si $\vec u=\vec0$ ou $\vec v=\vec0$, on pose $\vec u\cdot\vec v=0$.
:::

```figure
{"type":"geometry","x":[-0.5,6],"y":[-0.6,3.4],"width":330,
 "segments":[{"from":[0,0],"to":[5.5,0],"color":"brand"},{"from":[0,0],"to":[3.5,3]},{"from":[3.5,3],"to":[3.5,0],"dashed":true}],
 "rightAngles":[{"at":[3.5,0],"u":[1,0],"v":[0,1]}],
 "points":[{"x":0,"y":0,"label":"A"},{"x":5.5,"y":0,"label":"B"},{"x":3.5,"y":3,"label":"C"},{"x":3.5,"y":0,"label":"H"}],
 "caption":"$H$ est le projeté orthogonal de $C$ sur $(AB)$ : $\\overrightarrow{AB}\\cdot\\overrightarrow{AC}=AB\\times AH$."}
```

:::exemple
$ABC$ est un triangle équilatéral de côté $4$ et $I$ le milieu de $[AB]$ (projeté orthogonal de $C$ sur $(AB)$) : $\overrightarrow{AB}\cdot\overrightarrow{AC}=AB\times AI=4\times2=8$.
:::

# II. Forme trigonométrique

:::propriete
Pour tous vecteurs non nuls $\vec u=\overrightarrow{AB}$ et $\vec v=\overrightarrow{AC}$, avec $\theta=\widehat{BAC}$ :
$$\vec u\cdot\vec v=\|\vec u\|\times\|\vec v\|\times\cos\theta.$$
:::

:::demonstration
Si $\theta$ est aigu, $AH=AC\cos\theta$ et $\overrightarrow{AH}$ a le sens de $\overrightarrow{AB}$. Si $\theta$ est obtus, $AH=AC\cos(\pi-\theta)=-AC\cos\theta$ et les sens sont contraires. Dans les deux cas, $\vec u\cdot\vec v=AB\times AC\times\cos\theta$.
:::

:::exemple
$\|\vec u\|=3$, $\|\vec v\|=4$ et l’angle entre eux vaut $\dfrac{2\pi}3$ : $\vec u\cdot\vec v=3\times4\times\left(-\dfrac12\right)=-6$.
:::

# III. Propriétés

:::propriete
Pour tous vecteurs $\vec u$, $\vec v$, $\vec w$ et tout réel $k$ :
- **symétrie** : $\vec u\cdot\vec v=\vec v\cdot\vec u$ ;
- **linéarité** : $\vec u\cdot(\vec v+\vec w)=\vec u\cdot\vec v+\vec u\cdot\vec w$ et $(k\vec u)\cdot\vec v=k(\vec u\cdot\vec v)$ ;
- **carré scalaire** : $\vec u\cdot\vec u=\vec u^{\,2}=\|\vec u\|^2\ge0$ ; en particulier $\overrightarrow{AB}^{\,2}=AB^2$.
:::

:::propriete Identités remarquables
$$(\vec u+\vec v)^2=\vec u^{\,2}+2\vec u\cdot\vec v+\vec v^{\,2}\qquad(\vec u-\vec v)^2=\vec u^{\,2}-2\vec u\cdot\vec v+\vec v^{\,2}\qquad(\vec u+\vec v)\cdot(\vec u-\vec v)=\vec u^{\,2}-\vec v^{\,2}.$$
On en déduit : $\vec u\cdot\vec v=\dfrac12\left(\|\vec u+\vec v\|^2-\|\vec u\|^2-\|\vec v\|^2\right)$.
:::

:::definition Orthogonalité
Deux vecteurs $\vec u$ et $\vec v$ sont **orthogonaux** si $\vec u=\vec0$, $\vec v=\vec0$, ou si leurs directions sont perpendiculaires.
:::

:::propriete
$$\vec u\perp\vec v\iff\vec u\cdot\vec v=0.$$
:::

# IV. Applications dans le triangle

:::theoreme Théorème d’Al-Kashi
Dans un triangle $ABC$ avec $a=BC$, $b=AC$, $c=AB$ :
$$a^2=b^2+c^2-2bc\cos\hat A.$$
:::

:::demonstration
$BC^2=\overrightarrow{BC}^{\,2}=\left(\overrightarrow{AC}-\overrightarrow{AB}\right)^2=AC^2+AB^2-2\overrightarrow{AB}\cdot\overrightarrow{AC}=b^2+c^2-2bc\cos\hat A$.
:::

:::remarque
Si $\hat A=90^\circ$, on retrouve le théorème de Pythagore.
:::

:::exemple
$AB=5$, $AC=8$ et $\hat A=60^\circ$ : $BC^2=64+25-2\times8\times5\times\dfrac12=49$, donc $BC=7$.
:::

:::theoreme Théorème de la médiane
Soit $I$ le milieu de $[BC]$. Pour tout triangle $ABC$ :
$$AB^2+AC^2=2AI^2+\frac{BC^2}{2}\qquad\text{et}\qquad\overrightarrow{AB}\cdot\overrightarrow{AC}=AI^2-\frac{BC^2}4.$$
:::

:::propriete Relations dans le triangle rectangle
Si $ABC$ est rectangle en $A$ et $H$ est le pied de la hauteur issue de $A$ :
$$BA^2=BH\times BC\qquad CA^2=CH\times CB\qquad AH^2=HB\times HC\qquad AH\times BC=AB\times AC.$$
:::

:::demonstration Pour $BA^2=BH\times BC$
$\overrightarrow{BA}\cdot\overrightarrow{BC}$ se calcule de deux façons : avec le projeté de $A$ sur $(BC)$, c’est $BH\times BC$ ; avec le projeté de $C$ sur $(BA)$, qui est $A$, c’est $BA\times BA=BA^2$.
:::

# Exercices

:::exercice Avec la projection
$ABCD$ est un carré de côté $3$. Calculer $\overrightarrow{AB}\cdot\overrightarrow{AC}$, $\overrightarrow{AB}\cdot\overrightarrow{AD}$ et $\overrightarrow{AB}\cdot\overrightarrow{CD}$.
:::

:::exercice Forme trigonométrique
On donne $\|\vec u\|=2$, $\|\vec v\|=5$ et $\vec u\cdot\vec v=-5$. Déterminer la mesure de l’angle géométrique entre $\vec u$ et $\vec v$.
:::

:::exercice Calcul vectoriel
On donne $\|\vec u\|=3$, $\|\vec v\|=2$ et $\vec u\cdot\vec v=1$. Calculer $(\vec u+\vec v)^2$, $(2\vec u-\vec v)\cdot\vec v$ et $\|\vec u-\vec v\|$.
:::

:::exercice Al-Kashi
Un triangle $ABC$ vérifie $AB=4$, $AC=6$ et $BC=8$. Calculer $\cos\hat A$. L’angle $\hat A$ est-il aigu ou obtus ?
:::

:::exercice Triangle rectangle
$ABC$ est rectangle en $A$, $H$ est le pied de la hauteur issue de $A$, $BH=2$ et $HC=8$. Calculer $AH$, $AB$ et $AC$.
:::

:::exercice Série — calculs
$ABC$ est un triangle avec $AB=4$, $AC=6$ et $\widehat{BAC}=\dfrac{\pi}{3}$.
1. Calculer $\overrightarrow{AB}\cdot\overrightarrow{AC}$.
2. En déduire $BC$ (on développera $BC^2=\left(\overrightarrow{AC}-\overrightarrow{AB}\right)^2$).
:::

:::exercice Série — orthogonalité dans un repère
On donne $A(1;2)$, $B(4;3)$ et $C(2;-1)$ dans un repère orthonormé.
1. Calculer $\overrightarrow{AB}\cdot\overrightarrow{AC}$. Que peut-on conclure ?
2. Calculer l’aire du triangle $ABC$.
:::

:::exercice Approfondissement — théorème de la médiane
$ABC$ est un triangle et $I$ le milieu de $[BC]$.
1. Montrer que $AB^2+AC^2=2AI^2+\dfrac{BC^2}{2}$ (développer $\left(\overrightarrow{AI}+\overrightarrow{IB}\right)^2+\left(\overrightarrow{AI}+\overrightarrow{IC}\right)^2$).
2. Application : $AB=5$, $AC=7$, $BC=8$. Calculer $AI$.
:::

:::exercice Approfondissement — ensemble de points
$A$ et $B$ sont deux points tels que $AB=6$. Déterminer l’ensemble des points $M$ tels que $\overrightarrow{MA}\cdot\overrightarrow{MB}=0$, puis tels que $\overrightarrow{MA}\cdot\overrightarrow{MB}=7$ (on introduira le milieu $I$ de $[AB]$ : $\overrightarrow{MA}\cdot\overrightarrow{MB}=MI^2-IA^2$).
:::

# Corrigés

:::corrige
- Le projeté de $C$ sur $(AB)$ est $B$ : $\overrightarrow{AB}\cdot\overrightarrow{AC}=AB^2=9$.
- $\overrightarrow{AB}\perp\overrightarrow{AD}$ : produit nul.
- $\overrightarrow{CD}=-\overrightarrow{AB}$ : $\overrightarrow{AB}\cdot\overrightarrow{CD}=-AB^2=-9$.
:::

:::corrige
$\cos\theta=\dfrac{-5}{2\times5}=-\dfrac12$, donc $\theta=\dfrac{2\pi}3$ (soit $120^\circ$).
:::

:::corrige
- $(\vec u+\vec v)^2=9+2+4=15$.
- $(2\vec u-\vec v)\cdot\vec v=2\vec u\cdot\vec v-\vec v^{\,2}=2-4=-2$.
- $\|\vec u-\vec v\|^2=9-2+4=11$, donc $\|\vec u-\vec v\|=\sqrt{11}$.
:::

:::corrige
$64=36+16-2\times6\times4\cos\hat A$, donc $\cos\hat A=\dfrac{52-64}{48}=-\dfrac14<0$ : l’angle $\hat A$ est obtus.
:::

:::corrige
$AH^2=HB\times HC=16$, donc $AH=4$. $BC=10$ ; $AB^2=BH\times BC=20$, $AB=2\sqrt5$ ; $AC^2=CH\times CB=80$, $AC=4\sqrt5$. (Vérification : $20+80=100=BC^2$.)
:::

:::corrige
1. $\overrightarrow{AB}\cdot\overrightarrow{AC}=4\times6\times\cos\dfrac\pi3=12$.
2. $BC^2=AC^2-2\overrightarrow{AB}\cdot\overrightarrow{AC}+AB^2=36-24+16=28$, $BC=2\sqrt7$.
:::

:::corrige
1. $\overrightarrow{AB}(3;1)$, $\overrightarrow{AC}(1;-3)$ : $3-3=0$, le triangle est rectangle en $A$.
2. $AB=AC=\sqrt{10}$ : $\mathcal A=\dfrac{\sqrt{10}\times\sqrt{10}}2=5$ u.a.
:::

:::corrige
1. $\overrightarrow{IC}=-\overrightarrow{IB}$ : la somme vaut $2AI^2+2IB^2+2\overrightarrow{AI}\cdot\left(\overrightarrow{IB}+\overrightarrow{IC}\right)=2AI^2+2\left(\dfrac{BC}2\right)^2$.
2. $25+49=2AI^2+32$, donc $AI^2=21$ et $AI=\sqrt{21}$.
:::

:::corrige
$\overrightarrow{MA}\cdot\overrightarrow{MB}=MI^2-9$. Égal à $0$ : $MI=3$, cercle de diamètre $[AB]$. Égal à $7$ : $MI^2=16$, cercle de centre $I$ et de rayon $4$.
:::
