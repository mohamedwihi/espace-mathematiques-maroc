---
id: tc-droite-plan
titre: La droite dans le plan
niveau: tc
semestre: 1
duree: 12 heures
---

## Objectifs
- Utiliser une base et un repère du plan ; calculer des coordonnées de points et de vecteurs.
- Utiliser le déterminant de deux vecteurs pour étudier la colinéarité.
- Calculer une norme et une distance dans un repère orthonormé.
- Déterminer une représentation paramétrique et une équation cartésienne d’une droite.
- Étudier le parallélisme de deux droites.

## Prérequis
- Calcul vectoriel, colinéarité.
- Repère et équation réduite d’une droite (3AC).
- Systèmes d’équations.

# I. Base, repère et coordonnées

:::definition
- Deux vecteurs non colinéaires $\vec i$ et $\vec j$ forment une **base** $(\vec i,\vec j)$ du plan. Tout vecteur $\vec u$ s’écrit de façon unique $\vec u=x\vec i+y\vec j$ : $(x;y)$ sont les **coordonnées** de $\vec u$, notées $\vec u(x;y)$.
- Un point $O$ et une base $(\vec i,\vec j)$ forment un **repère** $(O,\vec i,\vec j)$. Les coordonnées d’un point $M$ sont celles du vecteur $\overrightarrow{OM}$.
- Le repère est **orthonormé** si $\vec i\perp\vec j$ et $\|\vec i\|=\|\vec j\|=1$.
:::

:::propriete
Pour $A(x_A;y_A)$, $B(x_B;y_B)$, $\vec u(x;y)$, $\vec v(x';y')$ et $k\in\mathbb R$ :
- $\overrightarrow{AB}(x_B-x_A;\ y_B-y_A)$ ;
- $\vec u+\vec v(x+x';\ y+y')$ et $k\vec u(kx;\ ky)$ ;
- le milieu $I$ de $[AB]$ a pour coordonnées $\left(\dfrac{x_A+x_B}2;\dfrac{y_A+y_B}2\right)$ ;
- $\vec u=\vec v\iff x=x'$ et $y=y'$.
:::

# II. Déterminant et colinéarité

:::definition
Le **déterminant** des vecteurs $\vec u(x;y)$ et $\vec v(x';y')$ est le nombre
$$\det(\vec u,\vec v)=\begin{vmatrix}x&x'\\y&y'\end{vmatrix}=xy'-x'y.$$
:::

:::propriete
$\vec u$ et $\vec v$ sont **colinéaires** si et seulement si $\det(\vec u,\vec v)=0$.
:::

:::exemple
$\vec u(2;-3)$ et $\vec v(-4;6)$ : $\det(\vec u,\vec v)=2\times6-(-4)\times(-3)=12-12=0$, donc $\vec u$ et $\vec v$ sont colinéaires ($\vec v=-2\vec u$).

$A(1;2)$, $B(3;5)$, $C(7;11)$ : $\overrightarrow{AB}(2;3)$, $\overrightarrow{AC}(6;9)$ et $\det=2\times9-6\times3=0$ : $A$, $B$, $C$ sont alignés.
:::

# III. Norme et distance (repère orthonormé)

:::propriete
Dans un repère **orthonormé** : $\|\vec u\|=\sqrt{x^2+y^2}$ et $AB=\sqrt{\left(x_B-x_A\right)^2+\left(y_B-y_A\right)^2}$.
:::

:::exemple
$A(-1;2)$ et $B(3;-1)$ : $AB=\sqrt{4^2+(-3)^2}=5$.
:::

# IV. Représentation paramétrique d’une droite

:::definition
Un **vecteur directeur** d’une droite $(D)$ est un vecteur non nul $\vec u$ dont la direction est celle de $(D)$. La droite passant par $A$ et dirigée par $\vec u$ est notée $D(A,\vec u)$ :
$$M\in D(A,\vec u)\iff\overrightarrow{AM}\text{ et }\vec u\text{ sont colinéaires}\iff\exists t\in\mathbb R,\ \overrightarrow{AM}=t\vec u.$$
:::

:::propriete
Si $A(x_A;y_A)$ et $\vec u(a;b)$, une **représentation paramétrique** de $D(A,\vec u)$ est
$$\begin{cases}x=x_A+at\\y=y_A+bt\end{cases}\qquad(t\in\mathbb R).$$
:::

:::exemple
La droite passant par $A(1;-2)$ et dirigée par $\vec u(3;1)$ : $\begin{cases}x=1+3t\\y=-2+t\end{cases}$. Pour $t=2$, on obtient le point $(7;0)$ de cette droite.
:::

# V. Équation cartésienne d’une droite

:::propriete
- Toute droite du plan admet une **équation cartésienne** de la forme $ax+by+c=0$ avec $(a;b)\ne(0;0)$.
- Réciproquement, l’ensemble des points $M(x;y)$ tels que $ax+by+c=0$, avec $(a;b)\ne(0;0)$, est une droite de vecteur directeur $\vec u(-b;a)$.
:::

:::methode Équation de $D(A,\vec u)$
$M(x;y)\in D(A,\vec u)\iff\det\left(\overrightarrow{AM},\vec u\right)=0$. On développe le déterminant.
:::

:::exemple
$A(2;1)$ et $\vec u(3;-1)$ : $\overrightarrow{AM}(x-2;y-1)$ et
$$\det\left(\overrightarrow{AM},\vec u\right)=(x-2)(-1)-3(y-1)=-x-3y+5.$$
Une équation cartésienne est $x+3y-5=0$.
:::

:::propriete Coefficient directeur et équation réduite
Si $b\ne0$, l’équation $ax+by+c=0$ s’écrit $y=mx+p$ avec $m=-\dfrac ab$ : c’est l’**équation réduite**, $m$ est le **coefficient directeur** et $\vec u(1;m)$ est un vecteur directeur. Si $b=0$, la droite est parallèle à l’axe des ordonnées (équation $x=k$).
:::

# VI. Droites parallèles

:::propriete
Soient $(D):ax+by+c=0$ et $(D'):a'x+b'y+c'=0$. Les droites $(D)$ et $(D')$ sont **parallèles** si et seulement si leurs vecteurs directeurs sont colinéaires, c’est-à-dire
$$\begin{vmatrix}-b&-b'\\a&a'\end{vmatrix}=0\iff ab'-a'b=0.$$
Avec les équations réduites : $(D)\parallel(D')\iff m=m'$.
:::

:::exemple
$(D):2x-y+3=0$ et $(D'):-4x+2y+1=0$ : $2\times2-(-4)\times(-1)=4-4=0$, donc $(D)\parallel(D')$.

La parallèle à $(D)$ passant par $B(2;1)$ a une équation $2x-y+c=0$ avec $4-1+c=0$, soit $c=-3$ : $2x-y-3=0$.
:::

:::remarque Droites sécantes
Si $ab'-a'b\ne0$, les droites sont sécantes ; les coordonnées de leur point d’intersection sont la solution du système formé par leurs deux équations.
:::

# Exercices

:::exercice Coordonnées
Dans un repère, $A(-1;3)$, $B(2;-1)$ et $C(4;5)$. Calculer les coordonnées de $\overrightarrow{AB}$, $\overrightarrow{AC}$, $2\overrightarrow{AB}-\overrightarrow{AC}$, du milieu $I$ de $[BC]$ et du point $D$ tel que $ABCD$ soit un parallélogramme.
:::

:::exercice Colinéarité
1. Les vecteurs $\vec u(3;-2)$ et $\vec v(-6;4)$ sont-ils colinéaires ?
2. Déterminer $m$ pour que $\vec w(m;2)$ et $\vec z(8;m)$ soient colinéaires.
3. Les points $E(1;1)$, $F(3;4)$ et $G(7;10)$ sont-ils alignés ?
:::

:::exercice Équations
1. Déterminer une équation cartésienne de la droite $(AB)$ avec $A(1;2)$ et $B(4;-1)$.
2. Donner une représentation paramétrique de cette droite.
3. Le point $C(-2;5)$ appartient-il à $(AB)$ ?
:::

:::exercice Parallèles et intersection
$(D):x-2y+1=0$ et $(D'):3x+y-4=0$.
1. Montrer que $(D)$ et $(D')$ sont sécantes et déterminer leur point d’intersection.
2. Déterminer une équation de la droite $(\Delta)$ parallèle à $(D)$ passant par $P(0;3)$.
:::

:::exercice Distance et nature
Dans un repère orthonormé, $A(1;0)$, $B(4;4)$ et $C(-3;3)$. Calculer $AB$, $AC$ et $BC$. Quelle est la nature du triangle $ABC$ ?
:::

:::exercice Série — équation cartésienne
On donne $A(2;-1)$, $B(4;3)$ et $C(-1;2)$.
1. Déterminer une équation cartésienne de $(AB)$.
2. Déterminer une équation de la droite $(D)$ passant par $C$ et parallèle à $(AB)$.
3. La droite $(AB)$ coupe l’axe des ordonnées en $E$ : calculer les coordonnées de $E$.
:::

:::exercice Série — position relative
Étudier la position relative des droites $(D_1):2x-y+3=0$ et $(D_2):-4x+2y+1=0$, puis de $(D_1)$ et $(D_3):x+y-3=0$ (préciser le point d’intersection).
:::

:::exercice Approfondissement — médianes concourantes
On donne $A(-2;1)$, $B(4;3)$ et $C(1;-4)$.
1. Déterminer une équation de la médiane issue de $A$ et de celle issue de $B$.
2. Calculer leur point d’intersection et vérifier qu’il a pour coordonnées la moyenne des coordonnées des sommets.
:::

:::exercice Approfondissement — famille de droites
Pour tout réel $m$, on pose $(D_m):(m-1)x+(2m+1)y-3m=0$.
1. Montrer que toutes ces droites passent par un point fixe.
2. Déterminer $m$ pour que $(D_m)$ soit parallèle à l’axe des abscisses.
:::

# Corrigés

:::corrige
$\overrightarrow{AB}(3;-4)$ ; $\overrightarrow{AC}(5;2)$ ; $2\overrightarrow{AB}-\overrightarrow{AC}(1;-10)$ ; $I(3;2)$. $ABCD$ parallélogramme $\iff\overrightarrow{AB}=\overrightarrow{DC}$ : $4-x_D=3$ et $5-y_D=-4$, donc $D(1;9)$.
:::

:::corrige
1. $\det=3\times4-(-6)\times(-2)=12-12=0$ : colinéaires.
2. $\det=m\times m-8\times2=m^2-16=0\iff m=4$ ou $m=-4$.
3. $\overrightarrow{EF}(2;3)$, $\overrightarrow{EG}(6;9)$ : $\det=18-18=0$, les points sont alignés.
:::

:::corrige
1. $\overrightarrow{AB}(3;-3)$. $\det\left(\overrightarrow{AM},\overrightarrow{AB}\right)=(x-1)(-3)-3(y-2)=-3x-3y+9$ : $x+y-3=0$.
2. $\begin{cases}x=1+3t\\y=2-3t\end{cases}$ ($t\in\mathbb R$).
3. $-2+5-3=0$ : oui, $C\in(AB)$.
:::

:::corrige
1. $1\times1-3\times(-2)=7\ne0$ : sécantes. Avec $x=2y-1$ : $3(2y-1)+y-4=0$, $7y=7$, $y=1$ et $x=1$. Point d’intersection : $(1;1)$.
2. $(\Delta):x-2y+c=0$ avec $0-6+c=0$ : $x-2y+6=0$.
:::

:::corrige
$AB=\sqrt{9+16}=5$ ; $AC=\sqrt{16+9}=5$ ; $BC=\sqrt{49+1}=\sqrt{50}=5\sqrt2$. $AB=AC$ et $BC^2=50=AB^2+AC^2$ : $ABC$ est rectangle isocèle en $A$.
:::

:::corrige
1. $\overrightarrow{AB}(2;4)$ dirige $(AB)$ : $4(x-2)-2(y+1)=0$, soit $2x-y-5=0$.
2. $(D):2x-y+c=0$ avec $C$ : $-2-2+c=0$, $c=4$ : $2x-y+4=0$.
3. $x=0$ : $-y-5=0$, $E(0;-5)$.
:::

:::corrige
- $-4x+2y+1=0\iff2x-y-\dfrac12=0$ : mêmes coefficients de $x$ et $y$ que $(D_1)$, constantes différentes : $(D_1)\parallel(D_2)$ strictement.
- $(D_1)$ et $(D_3)$ : en additionnant, $3x=0$, donc $x=0$ et $y=3$ : elles sont sécantes en $(0;3)$.
:::

:::corrige
1. Milieu de $[BC]$ : $A'\left(\dfrac52;-\dfrac12\right)$ ; $\overrightarrow{AA'}\left(\dfrac92;-\dfrac32\right)$, colinéaire à $(3;-1)$ : médiane $(AA')$ : $x+3y-1=0$. Milieu de $[AC]$ : $B'\left(-\dfrac12;-\dfrac32\right)$ ; $\overrightarrow{BB'}\left(-\dfrac92;-\dfrac92\right)$, colinéaire à $(1;1)$ : médiane $(BB')$ : $x-y-1=0$.
2. En soustrayant : $4y=0$, $y=0$ et $x=1$ : $G(1;0)$, et $\dfrac{-2+4+1}3=1$, $\dfrac{1+3-4}3=0$.
:::

:::corrige
1. $m(x+2y-3)+(-x+y)=0$ pour tout $m$ dès que $x+2y-3=0$ et $-x+y=0$ : $x=y=1$. Point fixe $(1;1)$.
2. Il faut un coefficient de $x$ nul : $m=1$ ; alors $(D_1):3y-3=0$, soit $y=1$.
:::
