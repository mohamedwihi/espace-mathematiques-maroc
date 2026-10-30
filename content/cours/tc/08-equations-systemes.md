---
id: tc-equations-systemes
titre: Équations, inéquations et systèmes
niveau: tc
semestre: 1
duree: 14 heures
---

## Objectifs
- Résoudre les équations et inéquations du premier degré à une inconnue.
- Résoudre une équation du second degré à l’aide du discriminant ; utiliser la somme et le produit des racines.
- Factoriser un trinôme et étudier son signe ; résoudre une inéquation du second degré.
- Résoudre graphiquement une inéquation du premier degré à deux inconnues.
- Résoudre un système de deux équations à deux inconnues (déterminant, substitution, combinaison).

## Prérequis
- Calcul littéral, identités remarquables.
- Ordre dans ℝ, valeur absolue.
- Droite dans le plan.

# I. Équations et inéquations du premier degré (rappels)

:::propriete
L’équation $ax+b=0$ :
- si $a\ne0$, admet une unique solution $x=-\dfrac ba$ ;
- si $a=0$ et $b\ne0$, n’a pas de solution ; si $a=b=0$, tout réel est solution.
:::

:::propriete Signe de $ax+b$ ($a\ne0$)
| $x$ | $-\infty$ … $-\dfrac ba$ | $-\dfrac ba$ … $+\infty$ |
|---|---|---|
| $ax+b$ | signe de $-a$ | signe de $a$ |
:::

:::exemple
Résoudre $\dfrac{2x-1}{x+3}\le0$ (avec $x\ne-3$). On dresse un tableau de signes : $2x-1$ s’annule en $\dfrac12$, $x+3$ en $-3$. Le quotient est négatif ou nul entre ces valeurs : $S=\left]-3;\dfrac12\right]$.
:::

# II. Équations du second degré

## 1. Forme canonique et discriminant

:::definition
Une équation du second degré s’écrit $ax^2+bx+c=0$ avec $a\ne0$. Son **discriminant** est
$$\Delta=b^2-4ac.$$
:::

:::propriete Forme canonique
$$ax^2+bx+c=a\left[\left(x+\frac b{2a}\right)^2-\frac{\Delta}{4a^2}\right].$$
:::

:::theoreme
- Si $\Delta>0$ : deux solutions $x_1=\dfrac{-b-\sqrt\Delta}{2a}$ et $x_2=\dfrac{-b+\sqrt\Delta}{2a}$.
- Si $\Delta=0$ : une solution double $x_0=-\dfrac b{2a}$.
- Si $\Delta<0$ : aucune solution réelle.
:::

:::exemple
$2x^2+4x-6=0$ : $\Delta=16+48=64$, donc $x_1=\dfrac{-4-8}{4}=-3$ et $x_2=\dfrac{-4+8}4=1$. $S=\{-3;1\}$.

$x^2-6x+9=0$ : $\Delta=0$, $x_0=3$. $\quad x^2+x+1=0$ : $\Delta=-3<0$, $S=\varnothing$.
:::

## 2. Somme et produit des racines

:::propriete
Si $\Delta\ge0$, les racines $x_1$ et $x_2$ de $ax^2+bx+c$ vérifient
$$x_1+x_2=-\frac ba\qquad x_1\times x_2=\frac ca.$$
Réciproquement, deux nombres de somme $S$ et de produit $P$ sont les solutions de $x^2-Sx+P=0$.
:::

:::exemple
- $1$ est racine évidente de $3x^2-7x+4$ ; l’autre vérifie $1\times x_2=\dfrac43$, donc $x_2=\dfrac43$.
- Trouver deux nombres de somme $7$ et de produit $10$ : solutions de $x^2-7x+10=0$, soit $2$ et $5$.
:::

## 3. Factorisation et signe du trinôme

:::propriete
Soit $P(x)=ax^2+bx+c$ avec $a\ne0$.
| Cas | Factorisation | Signe de $P(x)$ |
|---|---|---|
| $\Delta>0$ | $a(x-x_1)(x-x_2)$ | signe de $a$ à l’extérieur des racines, signe de $-a$ entre les racines |
| $\Delta=0$ | $a(x-x_0)^2$ | signe de $a$, nul en $x_0$ |
| $\Delta<0$ | pas de factorisation | signe de $a$ pour tout $x$ |
:::

```figure
{"type":"graph","x":[-4,3],"y":[-9,7],"width":320,
 "functions":[{"fn":"2*x*x+4*x-6","label":"y=2x^2+4x-6","color":"brand"}],
 "points":[{"x":-3,"y":0,"label":"−3"},{"x":1,"y":0,"label":"1"}],
 "caption":"$2x^2+4x-6=2(x+3)(x-1)$ est négatif entre $-3$ et $1$, positif à l’extérieur."}
```

:::exemple Inéquation du second degré
Résoudre $2x^2+4x-6\le0$. Les racines sont $-3$ et $1$, et $a=2>0$ : le trinôme est négatif entre les racines. $S=[-3;1]$.
:::

:::exemple
Résoudre $-x^2+x+6>0$ : $\Delta=1+24=25$, racines $-2$ et $3$, $a=-1<0$ : le trinôme est positif entre les racines. $S=]-2;3[$.
:::

# III. Équations et inéquations du premier degré à deux inconnues

:::propriete
- L’ensemble des couples $(x;y)$ solutions de $ax+by+c=0$ (avec $(a;b)\ne(0;0)$) est représenté par une **droite** $(D)$.
- Si $b\ne0$, la droite $(D):ax+by+c=0$ partage le plan en deux **demi-plans** : l’un est l’ensemble des points vérifiant $ax+by+c>0$, l’autre $ax+by+c<0$.
:::

:::methode Résolution graphique de $ax+by+c\ge0$
1. Tracer la droite $(D):ax+by+c=0$.
2. Tester un point ne se trouvant pas sur $(D)$ (souvent l’origine $O$).
3. Si ses coordonnées vérifient l’inéquation, la solution est le demi-plan qui le contient ; sinon c’est l’autre. On hachure la partie qui n’est **pas** solution.
:::

:::exemple
$2x+5y-10\le0$ : la droite passe par $(5;0)$ et $(0;2)$. Pour $O(0;0)$ : $-10\le0$ est vrai. Les solutions sont les points du demi-plan contenant $O$, droite comprise.
:::

# IV. Systèmes de deux équations du premier degré

:::definition
Soit le système $(S):\begin{cases}ax+by=c\\a'x+b'y=c'\end{cases}$. Son **déterminant** est
$$\Delta=\begin{vmatrix}a&b\\a'&b'\end{vmatrix}=ab'-a'b.$$
:::

:::theoreme Méthode de Cramer
Si $\Delta\ne0$, le système admet une **unique** solution :
$$x=\frac{\Delta_x}{\Delta}=\frac{\begin{vmatrix}c&b\\c'&b'\end{vmatrix}}{\Delta}=\frac{cb'-c'b}{\Delta}\qquad y=\frac{\Delta_y}{\Delta}=\frac{\begin{vmatrix}a&c\\a'&c'\end{vmatrix}}{\Delta}=\frac{ac'-a'c}{\Delta}.$$
Si $\Delta=0$, le système n’a aucune solution ou en a une infinité (droites parallèles ou confondues).
:::

:::exemple
$\begin{cases}2x+3y=8\\5x-2y=1\end{cases}$ : $\Delta=2\times(-2)-5\times3=-19$ ; $\Delta_x=8\times(-2)-1\times3=-19$ ; $\Delta_y=2\times1-5\times8=-38$. Donc $x=1$ et $y=2$ : $S=\{(1;2)\}$.
:::

:::remarque
On peut aussi résoudre par **substitution** ou par **combinaison linéaire** (méthodes de 3AC). Graphiquement, la solution est le point d’intersection des deux droites.
:::

# Exercices

:::exercice Premier degré
Résoudre : $3(x-1)-2(2x+1)=4$ ; $\dfrac{x+1}{2}-\dfrac{x-2}{3}\ge1$ ; $(2x-3)(1-x)>0$.
:::

:::exercice Second degré
Résoudre dans $\mathbb R$ : $x^2-5x+6=0$ ; $4x^2-4x+1=0$ ; $2x^2+x+3=0$ ; $x^2-2\sqrt3x+2=0$.
:::

:::exercice Somme et produit
1. Sans calculer $\Delta$, montrer que $2$ est racine de $3x^2-5x-2$ et trouver l’autre racine.
2. Déterminer deux réels dont la somme est $-1$ et le produit $-12$.
:::

:::exercice Signe et inéquations
Factoriser $P(x)=-2x^2+3x+2$, dresser son tableau de signes, puis résoudre $P(x)\ge0$ et $x^2+2x+5<0$.
:::

:::exercice Système
Résoudre par la méthode du déterminant : $\begin{cases}3x-y=5\\x+2y=4\end{cases}$. Interpréter graphiquement.
:::

:::exercice Problème
Un rectangle a un périmètre de $34$ m et une aire de $60\ \text{m}^2$. Calculer ses dimensions.
:::

:::exercice Série — second degré
Résoudre dans $\mathbb R$ : $2x^2-7x+3=0$ ; $x^2-4x+5=0$ ; $9x^2-6x+1=0$ ; puis l’inéquation $x^2-x-6\le0$.
:::

:::exercice Série — somme et produit
Déterminer deux nombres dont la somme est $11$ et le produit $28$.
:::

# Corrigés

:::corrige
- $3x-3-4x-2=4$, donc $-x=9$ et $x=-9$.
- On multiplie par $6$ : $3x+3-2x+4\ge6$, soit $x\ge-1$ : $S=[-1;+\infty[$.
- $2x-3$ s’annule en $\dfrac32$, $1-x$ en $1$ ; le produit est positif entre $1$ et $\dfrac32$ : $S=\left]1;\dfrac32\right[$.
:::

:::corrige
- $\Delta=1$ : $S=\{2;3\}$.
- $(2x-1)^2=0$ : $S=\left\{\dfrac12\right\}$.
- $\Delta=1-24<0$ : $S=\varnothing$.
- $\Delta=12-8=4$ : $x=\dfrac{2\sqrt3\pm2}{2}=\sqrt3\pm1$ ; $S=\left\{\sqrt3-1;\sqrt3+1\right\}$.
:::

:::corrige
1. $3\times4-10-2=0$. Produit des racines $=-\dfrac23$, donc l’autre racine est $-\dfrac13$.
2. Solutions de $x^2+x-12=0$ : $\Delta=49$, soit $3$ et $-4$.
:::

:::corrige
$\Delta=9+16=25$, racines $-\dfrac12$ et $2$ : $P(x)=-2\left(x+\dfrac12\right)(x-2)=-(2x+1)(x-2)$. $a<0$ : $P(x)\ge0$ entre les racines, $S=\left[-\dfrac12;2\right]$. Pour $x^2+2x+5$ : $\Delta=-16<0$ et $a>0$, le trinôme est toujours positif : $S=\varnothing$.
:::

:::corrige
$\Delta=3\times2-1\times(-1)=7$ ; $\Delta_x=5\times2-4\times(-1)=14$ ; $\Delta_y=3\times4-1\times5=7$. Donc $x=2$, $y=1$. Les deux droites se coupent au point $(2;1)$.
:::

:::corrige
Soient $L$ et $\ell$ les dimensions : $L+\ell=17$ et $L\ell=60$. Ce sont les solutions de $x^2-17x+60=0$ : $\Delta=289-240=49$, donc $12$ et $5$. Le rectangle mesure $12$ m sur $5$ m.
:::

:::corrige
- $\Delta=49-24=25$ : $x=\dfrac{7\pm5}{4}$, $S=\left\{\dfrac12;3\right\}$.
- $\Delta=16-20<0$ : $S=\varnothing$.
- $(3x-1)^2=0$ : $S=\left\{\dfrac13\right\}$.
- $x^2-x-6=(x-3)(x+2)\le0\iff x\in[-2;3]$.
:::

:::corrige
Ce sont les solutions de $X^2-11X+28=0$ : $\Delta=121-112=9$, $X=\dfrac{11\pm3}2$, soit $4$ et $7$.
:::
