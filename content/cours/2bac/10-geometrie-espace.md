---
id: 2bac-geometrie-espace
titre: Géométrie dans l’espace
niveau: 2bac
semestre: 2
duree: 16 heures
---

## Objectifs
- Calculer et utiliser le produit scalaire dans l’espace (forme analytique, orthogonalité).
- Déterminer l’équation d’un plan défini par un point et un vecteur normal ; calculer la distance d’un point à un plan.
- Étudier le parallélisme et l’orthogonalité de droites et de plans.
- Déterminer l’équation d’une sphère et étudier sa position relative avec un plan ou une droite.
- Utiliser le produit vectoriel : vecteur normal, aire d’un triangle, distance d’un point à une droite.

## Prérequis
- Géométrie analytique de l’espace (1BAC) : représentations paramétriques, équations cartésiennes.
- Produit scalaire dans le plan.

# I. Produit scalaire dans l’espace

:::definition
Soient $\vec u=\overrightarrow{AB}$ et $\vec v=\overrightarrow{AC}$. Les points $A$, $B$, $C$ appartiennent à au moins un plan ; le **produit scalaire** $\vec u\cdot\vec v$ est le produit scalaire de $\overrightarrow{AB}$ et $\overrightarrow{AC}$ calculé dans ce plan :
$$\vec u\cdot\vec v=\|\vec u\|\,\|\vec v\|\cos\left(\widehat{BAC}\right)\quad(\vec u,\vec v\ne\vec0).$$
Il a les mêmes propriétés que dans le plan (symétrie, linéarité, $\vec u^{\,2}=\|\vec u\|^2$) et $\vec u\perp\vec v\iff\vec u\cdot\vec v=0$.
:::

:::propriete Expression analytique (repère orthonormé)
Si $\vec u(x;y;z)$ et $\vec v(x';y';z')$ :
$$\vec u\cdot\vec v=xx'+yy'+zz'\qquad\|\vec u\|=\sqrt{x^2+y^2+z^2}.$$
:::

:::exemple
$\vec u(1;-2;2)$ et $\vec v(4;1;-1)$ : $\vec u\cdot\vec v=4-2-2=0$ : les vecteurs sont orthogonaux. $\|\vec u\|=3$.
:::

# II. Plan défini par un point et un vecteur normal

:::definition
Un vecteur $\vec n$ non nul est **normal** à un plan $(P)$ s’il est orthogonal à deux vecteurs non colinéaires de $(P)$ (et alors à tout vecteur de $(P)$).
:::

:::theoreme
- Le plan passant par $A$ et de vecteur normal $\vec n$ est l’ensemble des points $M$ tels que $\overrightarrow{AM}\cdot\vec n=0$.
- Un plan de vecteur normal $\vec n(a;b;c)$ a une équation de la forme $ax+by+cz+d=0$. Réciproquement, le plan d’équation $ax+by+cz+d=0$ admet $\vec n(a;b;c)$ comme vecteur normal.
:::

:::exemple
Plan passant par $A(1;0;-2)$ de vecteur normal $\vec n(2;-1;3)$ : $2(x-1)-(y-0)+3(z+2)=0$, soit $2x-y+3z+4=0$.
:::

:::propriete Distance d’un point à un plan
La distance du point $A(x_0;y_0;z_0)$ au plan $(P):ax+by+cz+d=0$ est
$$d\left(A,(P)\right)=\frac{\left|ax_0+by_0+cz_0+d\right|}{\sqrt{a^2+b^2+c^2}}.$$
:::

:::exemple
$d\left(O,(P)\right)$ avec $(P):2x-y+2z-9=0$ : $\dfrac{|-9|}{\sqrt{4+1+4}}=3$.
:::

# III. Parallélisme et orthogonalité

:::propriete
Soient $(D)$ de vecteur directeur $\vec u$, $(P)$ et $(P')$ de vecteurs normaux $\vec n$ et $\vec n'$.
| Situation | Condition |
|---|---|
| $(D)\parallel(P)$ | $\vec u\cdot\vec n=0$ |
| $(D)\perp(P)$ | $\vec u$ et $\vec n$ colinéaires |
| $(P)\parallel(P')$ | $\vec n$ et $\vec n'$ colinéaires |
| $(P)\perp(P')$ | $\vec n\cdot\vec n'=0$ |
:::

:::exemple
$(P):x+y-z+1=0$ et $(Q):2x-y+z=0$ : $\vec n\cdot\vec n'=2-1-1=0$, donc $(P)\perp(Q)$.
:::

# IV. La sphère

:::definition
La **sphère** de centre $\Omega$ et de rayon $R>0$ est l’ensemble des points $M$ tels que $\Omega M=R$. Si $\Omega(a;b;c)$, son équation est
$$(x-a)^2+(y-b)^2+(z-c)^2=R^2.$$
:::

:::propriete
- L’ensemble des points $M(x;y;z)$ tels que $x^2+y^2+z^2-2ax-2by-2cz+d=0$ s’écrit $(x-a)^2+(y-b)^2+(z-c)^2=k$ avec $k=a^2+b^2+c^2-d$ : c’est une sphère de rayon $\sqrt k$ si $k>0$, le point $\Omega$ si $k=0$, l’ensemble vide si $k<0$.
- La sphère de diamètre $[AB]$ est l’ensemble des points $M$ tels que $\overrightarrow{MA}\cdot\overrightarrow{MB}=0$.
:::

:::propriete Position relative d’une sphère et d’un plan
Soit $(S)$ de centre $\Omega$ et de rayon $R$, et $d=d\left(\Omega,(P)\right)$.
- $d>R$ : le plan ne coupe pas la sphère.
- $d=R$ : le plan est **tangent** à la sphère en un point $H$ (le projeté orthogonal de $\Omega$ sur $(P)$) ; $\overrightarrow{\Omega H}$ est normal à $(P)$.
- $d<R$ : l’intersection est un **cercle** de centre $H$ et de rayon $r=\sqrt{R^2-d^2}$.
:::

:::propriete Position relative d’une sphère et d’une droite
On remplace la représentation paramétrique de la droite dans l’équation de la sphère : on obtient une équation du second degré en $t$, qui a $0$, $1$ ou $2$ solutions (droite extérieure, tangente ou sécante).
:::

:::exemple
$(S):x^2+y^2+z^2-2x-2y-2z-1=0$, soit $(x-1)^2+(y-1)^2+(z-1)^2=4$ : centre $\Omega(1;1;1)$, rayon $2$. Avec $(P):x+y+z-2=0$ : $d=\dfrac{|1+1+1-2|}{\sqrt3}=\dfrac1{\sqrt3}<2$. L’intersection est un cercle de rayon $\sqrt{4-\frac13}=\sqrt{\dfrac{11}3}$.
:::

# V. Produit vectoriel

:::definition
Dans un repère orthonormé direct, le **produit vectoriel** de $\vec u(x;y;z)$ et $\vec v(x';y';z')$ est le vecteur
$$\vec u\wedge\vec v=\left(\begin{vmatrix}y&y'\\z&z'\end{vmatrix};\ -\begin{vmatrix}x&x'\\z&z'\end{vmatrix};\ \begin{vmatrix}x&x'\\y&y'\end{vmatrix}\right)=\left(yz'-zy';\ zx'-xz';\ xy'-yx'\right).$$
:::

:::propriete
- $\vec u\wedge\vec v$ est **orthogonal** à $\vec u$ et à $\vec v$.
- $\vec u\wedge\vec v=\vec0\iff\vec u$ et $\vec v$ sont **colinéaires**.
- $\vec v\wedge\vec u=-\vec u\wedge\vec v$.
- $\left\|\vec u\wedge\vec v\right\|=\|\vec u\|\,\|\vec v\|\left|\sin\theta\right|$ où $\theta$ est l’angle entre $\vec u$ et $\vec v$.
:::

:::propriete Applications
- Si $A$, $B$, $C$ ne sont pas alignés, $\overrightarrow{AB}\wedge\overrightarrow{AC}$ est un **vecteur normal** au plan $(ABC)$.
- L’**aire du triangle** $ABC$ est $\dfrac12\left\|\overrightarrow{AB}\wedge\overrightarrow{AC}\right\|$.
- La **distance du point $M$ à la droite** $D(A,\vec u)$ est $\dfrac{\left\|\overrightarrow{AM}\wedge\vec u\right\|}{\|\vec u\|}$.
:::

:::exemple
$A(1;0;1)$, $B(0;1;1)$, $C(1;1;0)$ : $\overrightarrow{AB}(-1;1;0)$, $\overrightarrow{AC}(0;1;-1)$ et
$$\overrightarrow{AB}\wedge\overrightarrow{AC}=\left(1\times(-1)-0\times1;\ 0\times0-(-1)\times(-1);\ (-1)\times1-1\times0\right)=(-1;-1;-1).$$
Le plan $(ABC)$ a pour vecteur normal $\vec n(1;1;1)$ et passe par $A$ : $x+y+z-2=0$. L’aire du triangle vaut $\dfrac12\sqrt3$.
:::

# Exercices

:::exercice Produit scalaire
$A(1;2;0)$, $B(3;1;2)$, $C(2;4;0)$. Calculer $\overrightarrow{AB}\cdot\overrightarrow{AC}$, en déduire la nature du triangle $ABC$, puis calculer son aire.
:::

:::exercice Plan et distance
1. Écrire une équation du plan $(P)$ passant par $A(2;-1;1)$ et orthogonal à la droite de vecteur directeur $\vec u(1;2;-2)$.
2. Calculer la distance du point $B(1;3;4)$ à $(P)$.
:::

:::exercice Sphère
1. Déterminer le centre et le rayon de $(S):x^2+y^2+z^2+2x-4y-6z+5=0$.
2. Étudier la position de $(S)$ et du plan $(P):2x+y-2z+11=0$.
3. Étudier l’intersection de $(S)$ avec l’axe des ordonnées.
:::

:::exercice Produit vectoriel
$A(1;1;0)$, $B(2;0;1)$, $C(0;2;2)$.
1. Calculer $\overrightarrow{AB}\wedge\overrightarrow{AC}$ ; en déduire une équation du plan $(ABC)$ et l’aire du triangle $ABC$.
2. Calculer la distance de $O$ à la droite $(AB)$.
:::

# Corrigés

:::corrige
$\overrightarrow{AB}(2;-1;2)$, $\overrightarrow{AC}(1;2;0)$ : $\overrightarrow{AB}\cdot\overrightarrow{AC}=2-2+0=0$, donc $ABC$ est **rectangle en $A$**. $AB=\sqrt{4+1+4}=3$ et $AC=\sqrt{1+4}=\sqrt5$ : aire $=\dfrac{AB\times AC}{2}=\dfrac{3\sqrt5}2$.
:::

:::corrige
1. $\vec u$ est normal : $(x-2)+2(y+1)-2(z-1)=0$, soit $x+2y-2z+2=0$.
2. $d=\dfrac{|1+6-8+2|}{\sqrt{1+4+4}}=\dfrac13$.
:::

:::corrige
1. $(x+1)^2+(y-2)^2+(z-3)^2=1+4+9-5=9$ : centre $\Omega(-1;2;3)$, rayon $3$.
2. $d=\dfrac{|-2+2-6+11|}{3}=\dfrac53<3$ : le plan coupe la sphère suivant un cercle de rayon $\sqrt{9-\frac{25}9}=\dfrac{\sqrt{56}}3=\dfrac{2\sqrt{14}}3$.
3. Sur l’axe des ordonnées, $x=z=0$ : $y^2-4y+5=0$, $\Delta=-4<0$ : pas d’intersection.
:::

:::corrige
1. $\overrightarrow{AB}(1;-1;1)$, $\overrightarrow{AC}(-1;1;2)$ : $\overrightarrow{AB}\wedge\overrightarrow{AC}=\left((-1)(2)-1\times1;\ 1\times(-1)-1\times2;\ 1\times1-(-1)(-1)\right)=(-3;-3;0)$. Vecteur normal $(1;1;0)$ : $x+y-2=0$. Aire $=\dfrac12\sqrt{9+9}=\dfrac{3\sqrt2}2$.
2. $\overrightarrow{AO}(-1;-1;0)$ et $\vec u=\overrightarrow{AB}(1;-1;1)$ : $\overrightarrow{AO}\wedge\vec u=\left((-1)(1)-0\times(-1);\ 0\times1-(-1)(1);\ (-1)(-1)-(-1)(1)\right)=(-1;1;2)$. $d=\dfrac{\sqrt6}{\sqrt3}=\sqrt2$.
:::
