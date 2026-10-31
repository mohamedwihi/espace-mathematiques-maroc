---
id: tc-ordre-r
titre: L’ordre dans ℝ
niveau: tc
semestre: 1
duree: 10 heures
---

## Objectifs
- Comparer des réels et utiliser les propriétés de l’ordre et des opérations.
- Connaître et utiliser les intervalles, leur intersection et leur réunion.
- Connaître et utiliser la valeur absolue et ses propriétés.
- Encadrer une expression ; déterminer une valeur approchée d’un réel.

## Prérequis
- Ordre et opérations (3AC).
- Ensembles de nombres.
- Racines carrées.

# I. Ordre et opérations

:::definition
Pour tous réels $a$ et $b$ : $a\le b$ signifie $b-a\ge0$ ; $a<b$ signifie $b-a>0$.
:::

:::propriete
Pour tous réels $a$, $b$, $c$, $d$ :
- si $a\le b$, alors $a+c\le b+c$ ;
- si $a\le b$ et $c\le d$, alors $a+c\le b+d$ ;
- si $a\le b$ et $c>0$, alors $ac\le bc$ ; si $a\le b$ et $c<0$, alors $ac\ge bc$ ;
- si $0\le a\le b$ et $0\le c\le d$, alors $ac\le bd$ ;
- si $0<a\le b$, alors $\dfrac1a\ge\dfrac1b$ ;
- si $0\le a\le b$, alors $a^2\le b^2$ et $\sqrt a\le\sqrt b$.
:::

:::propriete Comparer $a$, $a^2$ et $\sqrt a$
- Si $0<a<1$ : $a^2<a<\sqrt a$.
- Si $a>1$ : $\sqrt a<a<a^2$.
:::

:::exemple
Comparer $x=\sqrt5-2$ et $y=\dfrac1{\sqrt5+2}$ : $y=\dfrac{\sqrt5-2}{5-4}=\sqrt5-2$, donc $x=y$.
:::

# II. Les intervalles

:::definition
Pour $a<b$ :
| Intervalle | Inégalités | Nature |
|---|---|---|
| $[a;b]$ | $a\le x\le b$ | fermé |
| $]a;b[$ | $a<x<b$ | ouvert |
| $[a;b[$ | $a\le x<b$ | semi-ouvert |
| $]a;b]$ | $a<x\le b$ | semi-ouvert |
| $[a;+\infty[$ | $x\ge a$ | non borné |
| $]a;+\infty[$ | $x>a$ | non borné |
| $]-\infty;b]$ | $x\le b$ | non borné |
| $]-\infty;b[$ | $x<b$ | non borné |

$\mathbb R=]-\infty;+\infty[$. Pour un intervalle borné d’extrémités $a$ et $b$, l’**amplitude** est $b-a$ et le **centre** est $\dfrac{a+b}2$.
:::

## Intersection et réunion

:::definition
- L’**intersection** $I\cap J$ est l’ensemble des réels qui appartiennent à $I$ **et** à $J$.
- La **réunion** $I\cup J$ est l’ensemble des réels qui appartiennent à $I$ **ou** à $J$.
:::

:::exemple
Avec $I=[-2;3[$ et $J=]1;5]$ : $I\cap J=]1;3[$ et $I\cup J=[-2;5]$. Avec $K=]4;+\infty[$ : $I\cap K=\varnothing$.
:::

# III. Valeur absolue

:::definition
La **valeur absolue** d’un réel $x$, notée $|x|$, est :
$$|x|=x\ \text{ si } x\ge0\qquad\text{et}\qquad|x|=-x\ \text{ si } x\le0.$$
Sur une droite graduée d’origine $O$, si $M$ a pour abscisse $x$, alors $|x|=OM$. Pour deux réels $a$ et $b$, $|a-b|$ est la **distance** entre les points d’abscisses $a$ et $b$.
:::

:::propriete
Pour tous réels $x$ et $y$ :
- $|x|\ge0$ ; $|-x|=|x|$ ; $\sqrt{x^2}=|x|$ ;
- $|xy|=|x||y|$ ; $\left|\dfrac xy\right|=\dfrac{|x|}{|y|}$ ($y\ne0$) ;
- $|x+y|\le|x|+|y|$ (inégalité triangulaire) ;
- $|x|=|y|\iff x=y$ ou $x=-y$.
:::

:::propriete Équations et inéquations
Soit $r>0$ et $a$ un réel :
- $|x-a|=r\iff x=a+r$ ou $x=a-r$ ;
- $|x-a|\le r\iff a-r\le x\le a+r\iff x\in[a-r;a+r]$ ;
- $|x-a|\ge r\iff x\le a-r$ ou $x\ge a+r$.
:::

:::exemple
- $|2x+1|=5\iff2x+1=5$ ou $2x+1=-5\iff x=2$ ou $x=-3$.
- $|x-2|\le1\iff1\le x\le3$ : $S=[1;3]$.
- $|x+1|>3\iff x+1<-3$ ou $x+1>3$ : $S=]-\infty;-4[\cup]2;+\infty[$.
:::

# IV. Encadrement et approximation

:::definition
- Un **encadrement** de $x$ d’amplitude $r$ est une double inégalité $a\le x\le b$ avec $b-a=r$.
- Si $a\le x\le b$ avec $b-a=r$, on dit que $a$ est une **valeur approchée par défaut** de $x$ à $r$ près, et $b$ une **valeur approchée par excès** de $x$ à $r$ près.
- $a$ est une **valeur approchée** de $x$ à $r$ près si $|x-a|\le r$.
:::

:::exemple
$1{,}414<\sqrt2<1{,}415$ : $1{,}414$ est une valeur approchée par défaut de $\sqrt2$ à $10^{-3}$ près et $1{,}415$ une valeur approchée par excès.
:::

:::methode Encadrer une expression
On part de l’encadrement de la variable, puis on applique **une opération à la fois** (somme, produit par un nombre, inverse, carré…) en respectant les règles du I.
:::

:::exemple
On sait que $1\le x\le2$. Encadrer $A=\dfrac{1}{2x+1}$ : $2\le2x\le4$, donc $3\le2x+1\le5$, d’où $\dfrac15\le A\le\dfrac13$.
:::

# Exercices

:::exercice Comparaisons
Comparer : $a=\dfrac{13}{17}$ et $b=\dfrac{14}{18}$ ; $c=2\sqrt3$ et $d=3\sqrt2$ ; $e=\sqrt{0{,}49}$ et $0{,}49$.
:::

:::exercice Intervalles
Écrire sous forme d’intervalle puis représenter : $-1\le x<4$ ; $x>-2$ ; $x\le\sqrt2$. Déterminer $[-3;2]\cap]0;5[$ et $[-3;2]\cup]0;5[$.
:::

:::exercice Valeur absolue
Résoudre dans $\mathbb R$ : $|x-3|=2$ ; $|2x-1|\le3$ ; $|x+2|\ge1$.
:::

:::exercice Simplification
Soit $x\in[1;3]$. Écrire sans valeur absolue $E=|x-1|+|x-3|+|x+2|$.
:::

:::exercice Encadrement
On donne $2\le x\le3$ et $-1\le y\le1$. Encadrer $x+y$, $x-y$, $x^2$, $\dfrac1x$ et $3x-2y$.
:::

:::exercice Série — valeur absolue
Résoudre dans $\mathbb R$ : $\lvert x-3\rvert=5$ ; $\lvert 2x+1\rvert\le3$ ; $\lvert x+2\rvert>1$.
:::

:::exercice Série — encadrement et approximation
On sait que $2\le x\le3$ et $-1\le y\le1$.
1. Encadrer $x+2y$, $x^2$ et $\dfrac{1}{x}$.
2. Encadrer $\dfrac{x-1}{x}=1-\dfrac1x$.
:::

:::exercice Approfondissement — approximation de la racine
1. Montrer que pour tout $x\ge0$ : $\sqrt{1+x}\le1+\dfrac x2$.
2. En déduire un majorant de $\sqrt{1{,}02}$ et vérifier avec la calculatrice.
:::

:::exercice Approfondissement — inéquation à valeur absolue
Résoudre dans $\mathbb R$ : $\lvert x-1\rvert+\lvert x+2\rvert\le5$ (distinguer les cas $x<-2$, $-2\le x\le1$ et $x>1$).
:::

# Corrigés

:::corrige
- $a-b=\dfrac{13\times18-14\times17}{17\times18}=\dfrac{234-238}{306}<0$, donc $a<b$.
- $c^2=12<d^2=18$ et $c,d>0$, donc $c<d$.
- $e=0{,}7>0{,}49$ (car $0<0{,}49<1$).
:::

:::corrige
$[-1;4[$ ; $]-2;+\infty[$ ; $]-\infty;\sqrt2]$. $[-3;2]\cap]0;5[=]0;2]$ et $[-3;2]\cup]0;5[=[-3;5[$.
:::

:::corrige
- $x=5$ ou $x=1$.
- $-3\le2x-1\le3\iff-1\le x\le2$ : $S=[-1;2]$.
- $x+2\le-1$ ou $x+2\ge1$ : $S=]-\infty;-3]\cup[-1;+\infty[$.
:::

:::corrige
Pour $1\le x\le3$ : $x-1\ge0$, $x-3\le0$ et $x+2>0$. Donc $E=(x-1)+(3-x)+(x+2)=x+4$.
:::

:::corrige
$1\le x+y\le4$ ; $-1\le-y\le1$ donc $1\le x-y\le4$ ; $4\le x^2\le9$ ; $\dfrac13\le\dfrac1x\le\dfrac12$ ; $6\le3x\le9$ et $-2\le-2y\le2$ donc $4\le3x-2y\le11$.
:::

:::corrige
- $x-3=5$ ou $x-3=-5$ : $S=\{-2;8\}$.
- $-3\le2x+1\le3\iff-2\le x\le1$ : $S=[-2;1]$.
- $x+2>1$ ou $x+2<-1$ : $S=]-\infty;-3[\cup]-1;+\infty[$.
:::

:::corrige
1. $-2\le2y\le2$, donc $0\le x+2y\le5$ ; $4\le x^2\le9$ ; $\dfrac13\le\dfrac1x\le\dfrac12$.
2. $-\dfrac12\le-\dfrac1x\le-\dfrac13$, donc $\dfrac12\le\dfrac{x-1}{x}\le\dfrac23$.
:::

:::corrige
1. Les deux membres sont positifs ; $\left(1+\dfrac x2\right)^2=1+x+\dfrac{x^2}4\ge1+x$.
2. $\sqrt{1{,}02}\le1{,}01$ (valeur réelle $\approx1{,}00995$).
:::

:::corrige
- $x<-2$ : $-(x-1)-(x+2)=-2x-1\le5\iff x\ge-3$ : $[-3;-2[$.
- $-2\le x\le1$ : $-(x-1)+(x+2)=3\le5$ : toujours vrai.
- $x>1$ : $2x+1\le5\iff x\le2$ : $]1;2]$.

$S=[-3;2]$.
:::
