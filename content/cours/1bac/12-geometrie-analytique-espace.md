---
id: 1bac-geometrie-analytique-espace
titre: Géométrie analytique de l’espace
niveau: 1bac
semestre: 2
duree: 12 heures
---

## Objectifs
- Utiliser un repère de l’espace : coordonnées d’un point et d’un vecteur.
- Utiliser les déterminants pour étudier la colinéarité de deux vecteurs et la coplanarité de trois vecteurs.
- Déterminer une représentation paramétrique d’une droite et d’un plan.
- Déterminer une équation cartésienne d’un plan ; caractériser une droite par un système de deux équations.
- Étudier les positions relatives de droites et de plans.

## Prérequis
- Vecteurs de l’espace.
- Droite dans le plan : déterminant, représentation paramétrique.
- Systèmes d’équations.

# I. Repère et coordonnées

:::definition
Un **repère** de l’espace est un quadruplet $(O,\vec i,\vec j,\vec k)$ où $O$ est un point et $\vec i$, $\vec j$, $\vec k$ trois vecteurs **non coplanaires**. Pour tout point $M$, il existe un unique triplet $(x;y;z)$ tel que
$$\overrightarrow{OM}=x\vec i+y\vec j+z\vec k.$$
$x$, $y$ et $z$ sont l’**abscisse**, l’**ordonnée** et la **cote** de $M$ ; on note $M(x;y;z)$.
:::

:::propriete
Pour $A(x_A;y_A;z_A)$, $B(x_B;y_B;z_B)$, $\vec u(a;b;c)$, $\vec v(a';b';c')$ et $k\in\mathbb R$ :
- $\overrightarrow{AB}(x_B-x_A;\ y_B-y_A;\ z_B-z_A)$ ;
- $\vec u+\vec v(a+a';\ b+b';\ c+c')$ et $k\vec u(ka;\ kb;\ kc)$ ;
- milieu de $[AB]$ : $I\left(\dfrac{x_A+x_B}2;\dfrac{y_A+y_B}2;\dfrac{z_A+z_B}2\right)$ ;
- dans un repère **orthonormé** : $\|\vec u\|=\sqrt{a^2+b^2+c^2}$ et $AB=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2+(z_B-z_A)^2}$.
:::

# II. Colinéarité et coplanarité

:::propriete Colinéarité de deux vecteurs
$\vec u(a;b;c)$ et $\vec v(a';b';c')$ sont colinéaires si et seulement si les trois déterminants extraits sont nuls :
$$\begin{vmatrix}a&a'\\b&b'\end{vmatrix}=\begin{vmatrix}a&a'\\c&c'\end{vmatrix}=\begin{vmatrix}b&b'\\c&c'\end{vmatrix}=0.$$
:::

:::definition Déterminant de trois vecteurs
Le déterminant de $\vec u(a;b;c)$, $\vec v(a';b';c')$, $\vec w(a'';b'';c'')$ est
$$\det(\vec u,\vec v,\vec w)=\begin{vmatrix}a&a'&a''\\b&b'&b''\\c&c'&c''\end{vmatrix}=a\begin{vmatrix}b'&b''\\c'&c''\end{vmatrix}-b\begin{vmatrix}a'&a''\\c'&c''\end{vmatrix}+c\begin{vmatrix}a'&a''\\b'&b''\end{vmatrix}.$$
:::

:::propriete
$\vec u$, $\vec v$ et $\vec w$ sont **coplanaires** si et seulement si $\det(\vec u,\vec v,\vec w)=0$.
:::

:::exemple
$\vec u(1;2;3)$, $\vec v(2;0;1)$, $\vec w(1;0;-3)$ :
$$\det=1\begin{vmatrix}0&0\\1&-3\end{vmatrix}-2\begin{vmatrix}2&1\\1&-3\end{vmatrix}+3\begin{vmatrix}2&1\\0&0\end{vmatrix}=1\times0-2\times(-7)+3\times0=14\ne0.$$
Les vecteurs ne sont pas coplanaires.
:::

# III. Représentation paramétrique d’une droite

:::propriete
La droite $D(A,\vec u)$ passant par $A(x_A;y_A;z_A)$ et de vecteur directeur $\vec u(a;b;c)$ admet la **représentation paramétrique**
$$\begin{cases}x=x_A+at\\y=y_A+bt\\z=z_A+ct\end{cases}\qquad(t\in\mathbb R).$$
:::

:::exemple
La droite $(AB)$ avec $A(1;0;2)$ et $B(2;1;0)$ : $\overrightarrow{AB}(1;1;-2)$, donc $\begin{cases}x=1+t\\y=t\\z=2-2t\end{cases}$ ($t\in\mathbb R$).
:::

:::propriete Positions relatives de deux droites
Soient $D(A,\vec u)$ et $D'(B,\vec v)$.
- Si $\vec u$ et $\vec v$ sont colinéaires : les droites sont **parallèles** (confondues si de plus $A\in D'$).
- Sinon, on résout le système formé par les deux représentations paramétriques : une solution donne un point d’intersection (droites **sécantes**) ; aucune solution signifie que les droites sont **non coplanaires**.
:::

# IV. Plans de l’espace

## 1. Représentation paramétrique

:::propriete
Le plan $P(A,\vec u,\vec v)$ passant par $A$ et dirigé par $\vec u(a;b;c)$ et $\vec v(a';b';c')$ non colinéaires admet la représentation paramétrique
$$\begin{cases}x=x_A+at+a't'\\y=y_A+bt+b't'\\z=z_A+ct+c't'\end{cases}\qquad(t,t'\in\mathbb R).$$
:::

## 2. Équation cartésienne

:::theoreme
- Tout plan admet une **équation cartésienne** de la forme $ax+by+cz+d=0$ avec $(a;b;c)\ne(0;0;0)$.
- Réciproquement, l’ensemble des points $M(x;y;z)$ vérifiant une telle équation est un plan.
:::

:::methode Équation du plan $P(A,\vec u,\vec v)$
$M(x;y;z)\in P\iff\overrightarrow{AM}$, $\vec u$, $\vec v$ coplanaires $\iff\det\left(\overrightarrow{AM},\vec u,\vec v\right)=0$. On développe le déterminant.
:::

:::exemple
Plan passant par $A(1;0;2)$, $B(2;1;0)$, $C(0;1;2)$ : $\overrightarrow{AB}(1;1;-2)$, $\overrightarrow{AC}(-1;1;0)$ et $\overrightarrow{AM}(x-1;y;z-2)$.
$$\det=(x-1)\begin{vmatrix}1&1\\-2&0\end{vmatrix}-y\begin{vmatrix}1&-1\\-2&0\end{vmatrix}+(z-2)\begin{vmatrix}1&-1\\1&1\end{vmatrix}=2(x-1)+2y+2(z-2).$$
Une équation du plan est $x+y+z-3=0$ (vérification : $B$ et $C$ la vérifient).
:::

:::remarque Plans particuliers
$z=0$ est le plan $(O,\vec i,\vec j)$ ; $x=0$ le plan $(O,\vec j,\vec k)$ ; $y=0$ le plan $(O,\vec i,\vec k)$. Un plan d’équation $z=k$ est parallèle au plan $(O,\vec i,\vec j)$.
:::

## 3. Positions relatives de deux plans

:::propriete
Soient $(P):ax+by+cz+d=0$ et $(P'):a'x+b'y+c'z+d'=0$.
- Si les triplets $(a;b;c)$ et $(a';b';c')$ sont **proportionnels**, les plans sont **parallèles** (confondus si les quadruplets $(a;b;c;d)$ et $(a';b';c';d')$ sont proportionnels).
- Sinon, les plans sont **sécants** suivant une droite, caractérisée par le **système** $\begin{cases}ax+by+cz+d=0\\a'x+b'y+c'z+d'=0\end{cases}$.
:::

## 4. Position relative d’une droite et d’un plan

:::methode
Soient $(D)$ de représentation paramétrique $x=x_0+at$, $y=y_0+bt$, $z=z_0+ct$ et $(P):\alpha x+\beta y+\gamma z+\delta=0$. On remplace $x$, $y$, $z$ dans l’équation de $(P)$ : on obtient une équation en $t$.
- Une solution unique : $(D)$ coupe $(P)$ en un point.
- Aucune solution : $(D)$ est strictement parallèle à $(P)$.
- Tout $t$ est solution : $(D)$ est incluse dans $(P)$.
:::

:::exemple
$(D):x=1+t$, $y=2-t$, $z=3t$ et $(P):x+2y-z-1=0$. On obtient $1+t+4-2t-3t-1=0$, soit $4-4t=0$ et $t=1$ : $(D)$ coupe $(P)$ au point $(2;1;3)$.
:::

# Exercices

:::exercice Coordonnées
Dans un repère orthonormé, $A(2;-1;3)$, $B(0;1;-1)$ et $C(4;1;5)$. Calculer les coordonnées de $\overrightarrow{AB}$, $\overrightarrow{AC}$, du milieu de $[BC]$, puis $AB$. Les points $A$, $B$, $C$ sont-ils alignés ?
:::

:::exercice Coplanarité
Déterminer $m$ pour que $\vec u(1;m;1)$, $\vec v(2;1;0)$ et $\vec w(0;1;1)$ soient coplanaires.
:::

:::exercice Représentations
1. Donner une représentation paramétrique de la droite passant par $E(1;2;-1)$ et dirigée par $\vec u(2;-1;3)$.
2. Déterminer une équation cartésienne du plan passant par $A(1;1;0)$ et dirigé par $\vec u(1;0;1)$ et $\vec v(0;2;1)$.
:::

:::exercice Droite et plan
Étudier la position relative de la droite $(D):\begin{cases}x=2t\\y=1+t\\z=-1+t\end{cases}$ ($t\in\mathbb R$) et du plan $(P):x-y-z+3=0$.
:::

:::exercice Deux plans
Étudier la position relative des plans $(P):2x-y+z-1=0$ et $(Q):-4x+2y-2z+5=0$, puis des plans $(P)$ et $(R):x+y-z=0$.
:::

:::exercice Série — représentation paramétrique
On donne $A(1;0;2)$, $B(3;1;0)$ et $C(0;2;1)$.
1. Donner une représentation paramétrique de $(AB)$.
2. Le point $D(5;2;-2)$ appartient-il à $(AB)$ ?
3. Les points $A$, $B$, $C$ sont-ils alignés ?
:::

:::exercice Série — équation de plan
Déterminer une équation cartésienne du plan $(P)$ passant par $A(1;0;2)$ et dirigé par $\vec u(1;1;0)$ et $\vec v(0;1;1)$.
:::

# Corrigés

:::corrige
$\overrightarrow{AB}(-2;2;-4)$, $\overrightarrow{AC}(2;2;2)$ ; milieu de $[BC]$ : $(2;1;2)$ ; $AB=\sqrt{4+4+16}=2\sqrt6$. $\begin{vmatrix}-2&2\\2&2\end{vmatrix}=-8\ne0$ : les vecteurs ne sont pas colinéaires, les points ne sont pas alignés.
:::

:::corrige
$\det(\vec u,\vec v,\vec w)=1\begin{vmatrix}1&1\\0&1\end{vmatrix}-m\begin{vmatrix}2&0\\0&1\end{vmatrix}+1\begin{vmatrix}2&0\\1&1\end{vmatrix}=1-2m+2=3-2m$. Coplanaires si et seulement si $m=\dfrac32$.
:::

:::corrige
1. $\begin{cases}x=1+2t\\y=2-t\\z=-1+3t\end{cases}$ ($t\in\mathbb R$).
2. $\overrightarrow{AM}(x-1;y-1;z)$ : $\det=(x-1)\begin{vmatrix}0&2\\1&1\end{vmatrix}-(y-1)\begin{vmatrix}1&0\\1&1\end{vmatrix}+z\begin{vmatrix}1&0\\0&2\end{vmatrix}=-2(x-1)-(y-1)+2z$. Équation : $2x+y-2z-3=0$.
:::

:::corrige
$2t-(1+t)-(-1+t)+3=0$ donne $3=0$ : aucune solution. La droite est strictement parallèle au plan.
:::

:::corrige
- $(-4;2;-2)=-2(2;-1;1)$ mais $5\ne-2\times(-1)$ : $(P)$ et $(Q)$ sont strictement parallèles.
- $(2;-1;1)$ et $(1;1;-1)$ ne sont pas proportionnels : $(P)$ et $(R)$ sont sécants suivant une droite.
:::

:::corrige
1. $\overrightarrow{AB}(2;1;-2)$ : $x=1+2t$, $y=t$, $z=2-2t$ ($t\in\mathbb R$).
2. $t=2$ donne $(5;2;-2)$ : $D\in(AB)$.
3. $\overrightarrow{AC}(-1;2;-1)$ n’est pas colinéaire à $\overrightarrow{AB}$ (rapports $-\dfrac12$ et $2$) : non alignés.
:::

:::corrige
$M(x;y;z)\in(P)\iff\overrightarrow{AM}=a\vec u+b\vec v$ : $x-1=a$, $y=a+b$, $z-2=b$. Donc $y=(x-1)+(z-2)$, soit $(P):x-y+z-3=0$.
:::
