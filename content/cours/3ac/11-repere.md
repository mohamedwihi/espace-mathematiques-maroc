---
id: 3ac-repere
titre: Repère du plan
niveau: 3ac
semestre: 2
duree: 8 heures
---

## Objectifs
- Lire et placer des points dans un repère du plan.
- Calculer les coordonnées du milieu d’un segment.
- Calculer les coordonnées d’un vecteur et reconnaître deux vecteurs égaux.
- Calculer la distance entre deux points dans un repère orthonormé.

## Prérequis
- Vecteurs : égalité, somme, produit par un réel.
- Théorème de Pythagore.
- Racines carrées.

# I. Coordonnées d’un point

## 1. Repère du plan

:::definition
Un **repère** du plan est formé de deux droites graduées sécantes en un point $O$ appelé **origine** : l’**axe des abscisses** $(Ox)$ et l’**axe des ordonnées** $(Oy)$, chacun muni d’une unité. On le note $(O,I,J)$ où $I$ et $J$ sont les points de coordonnées $(1;0)$ et $(0;1)$.
- Si les axes sont perpendiculaires, le repère est **orthogonal**.
- S’il est orthogonal et que $OI=OJ$, le repère est **orthonormé**.
:::

:::definition
Tout point $M$ du plan est repéré par un unique couple de nombres $(x_M;y_M)$ : ses **coordonnées**. $x_M$ est l’**abscisse** et $y_M$ l’**ordonnée** de $M$. On écrit $M(x_M;y_M)$.
:::

```figure
{"type":"graph","x":[-4,5],"y":[-3,4],"width":360,
 "points":[{"x":3,"y":2,"label":"A(3;2)"},{"x":-2,"y":3,"label":"B(−2;3)"},{"x":-3,"y":-2,"label":"C(−3;−2)"},{"x":2,"y":-1,"label":"D(2;−1)"}],
 "caption":"Des points placés dans un repère orthonormé."}
```

## 2. Coordonnées du milieu d’un segment

:::propriete
Soient $A(x_A;y_A)$ et $B(x_B;y_B)$. Le milieu $I$ du segment $[AB]$ a pour coordonnées :
$$x_I=\frac{x_A+x_B}{2}\qquad y_I=\frac{y_A+y_B}{2}.$$
:::

:::exemple
$A(3;2)$ et $B(-2;3)$ : le milieu de $[AB]$ est $I\left(\dfrac{3+(-2)}2;\dfrac{2+3}2\right)=I\left(\dfrac12;\dfrac52\right)$.
:::

:::methode Trouver le symétrique d’un point
Si $B$ est le symétrique de $A$ par rapport à $I$, alors $I$ est le milieu de $[AB]$, d’où $x_B=2x_I-x_A$ et $y_B=2y_I-y_A$.
:::

# II. Coordonnées d’un vecteur

## 1. Définition

:::definition
Soient $A(x_A;y_A)$ et $B(x_B;y_B)$. Le vecteur $\overrightarrow{AB}$ a pour coordonnées :
$$\overrightarrow{AB}\left(x_B-x_A;\ y_B-y_A\right).$$
:::

:::exemple
$A(3;2)$ et $D(2;-1)$ : $\overrightarrow{AD}(2-3;-1-2)$, soit $\overrightarrow{AD}(-1;-3)$.
:::

## 2. Égalité de deux vecteurs

:::propriete
Deux vecteurs sont égaux si et seulement si ils ont les **mêmes coordonnées** : $\vec u(x;y)=\vec v(x';y')$ équivaut à $x=x'$ et $y=y'$.
:::

:::methode Reconnaître un parallélogramme
$ABCD$ est un parallélogramme si et seulement si $\overrightarrow{AB}=\overrightarrow{DC}$ : on compare les coordonnées des deux vecteurs.
:::

:::exemple
$A(1;1)$, $B(4;2)$, $C(5;5)$ et $D(2;4)$ : $\overrightarrow{AB}(3;1)$ et $\overrightarrow{DC}(3;1)$. Ces vecteurs sont égaux, donc $ABCD$ est un parallélogramme.
:::

## 3. Règles de calcul

:::propriete
Si $\vec u(x;y)$ et $\vec v(x';y')$ et $k$ est un réel :
- $\vec u+\vec v$ a pour coordonnées $(x+x';\ y+y')$ ;
- $k\vec u$ a pour coordonnées $(kx;\ ky)$ ;
- $-\vec u$ a pour coordonnées $(-x;\ -y)$.
:::

:::exemple
$\vec u(2;-1)$ et $\vec v(-3;4)$ : $\vec u+\vec v(-1;3)$ ; $3\vec u(6;-3)$ ; $2\vec u-\vec v(7;-6)$.
:::

# III. Distance entre deux points

:::propriete
Dans un repère **orthonormé**, la distance entre $A(x_A;y_A)$ et $B(x_B;y_B)$ est :
$$AB=\sqrt{\left(x_B-x_A\right)^2+\left(y_B-y_A\right)^2}.$$
:::

:::demonstration
On note $H(x_B;y_A)$. Le triangle $AHB$ est rectangle en $H$ avec $AH=|x_B-x_A|$ et $HB=|y_B-y_A|$. Le théorème de Pythagore donne $AB^2=AH^2+HB^2$.
:::

:::exemple
$A(1;2)$ et $B(4;6)$ : $AB=\sqrt{3^2+4^2}=\sqrt{25}=5$.
:::

:::methode Nature d’un triangle
On calcule les trois longueurs. Deux longueurs égales : triangle isocèle ; trois : équilatéral ; si de plus $BC^2=AB^2+AC^2$ : triangle rectangle (réciproque de Pythagore).
:::

# Exercices

:::exercice Milieu et symétrique
$A(-2;5)$, $B(4;-1)$ et $C(3;3)$.
1. Calculer les coordonnées du milieu $I$ de $[AB]$.
2. Calculer les coordonnées de $D$, symétrique de $C$ par rapport à $I$.
:::

:::exercice Coordonnées de vecteurs
$E(2;-3)$, $F(-1;4)$ et $G(5;0)$. Calculer les coordonnées de $\overrightarrow{EF}$, $\overrightarrow{FG}$, $\overrightarrow{EF}+\overrightarrow{FG}$ et $\overrightarrow{EG}$. Que remarque-t-on ?
:::

:::exercice Quatrième sommet
$A(1;-2)$, $B(5;0)$ et $C(3;4)$. Calculer les coordonnées du point $D$ tel que $ABCD$ soit un parallélogramme.
:::

:::exercice Nature d’un triangle
Dans un repère orthonormé, $A(1;1)$, $B(5;3)$ et $C(3;7)$.
1. Calculer $AB$, $AC$ et $BC$.
2. Quelle est la nature du triangle $ABC$ ?
:::

:::exercice Cercle
Dans un repère orthonormé, $\Omega(2;-1)$ et $M(5;3)$. Calculer le rayon du cercle de centre $\Omega$ passant par $M$. Le point $N(-1;-5)$ est-il sur ce cercle ?
:::

:::exercice Série — nature d’un triangle
Dans un repère orthonormé, on donne $A(-1;2)$, $B(3;4)$ et $C(1;-2)$.
1. Calculer $AB$, $AC$ et $BC$.
2. Quelle est la nature du triangle $ABC$ ?
3. Calculer les coordonnées du milieu $I$ de $[BC]$ et la longueur $AI$.
:::

:::exercice Série — parallélogramme
On donne $E(2;1)$, $F(5;2)$ et $G(4;5)$. Déterminer les coordonnées du point $H$ tel que $EFGH$ soit un parallélogramme, puis celles de son centre.
:::

# Corrigés

:::corrige
1. $I\left(\dfrac{-2+4}2;\dfrac{5-1}2\right)=I(1;2)$.
2. $x_D=2\times1-3=-1$ et $y_D=2\times2-3=1$ : $D(-1;1)$.
:::

:::corrige
$\overrightarrow{EF}(-3;7)$ ; $\overrightarrow{FG}(6;-4)$ ; $\overrightarrow{EF}+\overrightarrow{FG}(3;3)$ ; $\overrightarrow{EG}(3;3)$. On retrouve la relation de Chasles : $\overrightarrow{EF}+\overrightarrow{FG}=\overrightarrow{EG}$.
:::

:::corrige
$ABCD$ est un parallélogramme si $\overrightarrow{AB}=\overrightarrow{DC}$. $\overrightarrow{AB}(4;2)$ et $\overrightarrow{DC}(3-x_D;4-y_D)$, donc $3-x_D=4$ et $4-y_D=2$ : $D(-1;2)$.
:::

:::corrige
1. $AB=\sqrt{4^2+2^2}=\sqrt{20}=2\sqrt5$ ; $AC=\sqrt{2^2+6^2}=\sqrt{40}=2\sqrt{10}$ ; $BC=\sqrt{(-2)^2+4^2}=\sqrt{20}=2\sqrt5$.
2. $AB=BC$ : le triangle est isocèle en $B$. De plus $AC^2=40=AB^2+BC^2=20+20$ : il est rectangle en $B$. $ABC$ est rectangle isocèle en $B$.
:::

:::corrige
$r=\Omega M=\sqrt{3^2+4^2}=5$. $\Omega N=\sqrt{(-3)^2+(-4)^2}=5$ : oui, $N$ est sur le cercle.
:::

:::corrige
1. $AB=\sqrt{16+4}=\sqrt{20}$ ; $AC=\sqrt{4+16}=\sqrt{20}$ ; $BC=\sqrt{4+36}=\sqrt{40}$.
2. $AB=AC$ et $AB^2+AC^2=40=BC^2$ : $ABC$ est rectangle et isocèle en $A$.
3. $I(2;1)$ ; $AI=\sqrt{9+1}=\sqrt{10}$ (c’est bien $\dfrac{BC}2=\dfrac{\sqrt{40}}2=\sqrt{10}$).
:::

:::corrige
$\overrightarrow{EF}=\overrightarrow{HG}$ : $(3;1)=(4-x_H;5-y_H)$, donc $H(1;4)$. Le centre est le milieu de $[EG]$ : $\left(3;3\right)$.
:::
