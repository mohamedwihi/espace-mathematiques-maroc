---
id: 1bac-suites
titre: Les suites numériques
niveau: 1bac
semestre: 1
duree: 14 heures
---

## Objectifs
- Définir une suite de façon explicite ou par récurrence ; calculer ses termes.
- Reconnaître une suite majorée, minorée, bornée ; étudier la monotonie d’une suite.
- Utiliser le raisonnement par récurrence sur les suites.
- Reconnaître une suite arithmétique ou géométrique ; calculer son terme général et la somme de termes consécutifs.

## Prérequis
- Raisonnement par récurrence (logique).
- Généralités sur les fonctions.
- Puissances.

# I. Généralités

:::definition
Une **suite numérique** est une fonction $u$ définie sur $\mathbb N$ (ou sur une partie $I=\{n\in\mathbb N;\ n\ge n_0\}$) à valeurs dans $\mathbb R$. On note $u_n$ l’image de $n$ (le **terme général** ou terme d’indice $n$) et $(u_n)_{n\ge n_0}$ la suite.
:::

:::propriete Deux façons de définir une suite
- **Explicitement** : $u_n=f(n)$ ; par exemple $u_n=\dfrac{2n+1}{n+1}$.
- **Par récurrence** : on donne le premier terme et une relation $u_{n+1}=f(u_n)$ ; par exemple $u_0=1$ et $u_{n+1}=\dfrac12u_n+3$.
:::

:::exemple
Avec $u_0=1$ et $u_{n+1}=\dfrac12u_n+3$ : $u_1=3{,}5$ ; $u_2=4{,}75$ ; $u_3=5{,}375$.
:::

# II. Suites majorées, minorées, bornées

:::definition
- $(u_n)$ est **majorée** s’il existe $M$ tel que $u_n\le M$ pour tout $n$.
- $(u_n)$ est **minorée** s’il existe $m$ tel que $u_n\ge m$ pour tout $n$.
- $(u_n)$ est **bornée** si elle est majorée et minorée.
:::

:::exemple
$u_n=\dfrac{2n+1}{n+1}=2-\dfrac1{n+1}$ : pour tout $n$, $1\le u_n<2$. La suite est bornée.
:::

:::exemple Avec une récurrence
Montrer que pour la suite $u_0=1$, $u_{n+1}=\dfrac12u_n+3$, on a $u_n<6$ pour tout $n$.
- Initialisation : $u_0=1<6$.
- Hérédité : si $u_n<6$, alors $\dfrac12u_n+3<3+3=6$, donc $u_{n+1}<6$.
:::

# III. Monotonie d’une suite

:::definition
- $(u_n)$ est **croissante** si $u_{n+1}\ge u_n$ pour tout $n$ ; **strictement croissante** si $u_{n+1}>u_n$.
- $(u_n)$ est **décroissante** si $u_{n+1}\le u_n$ pour tout $n$ ; **strictement décroissante** si $u_{n+1}<u_n$.
- $(u_n)$ est **constante** si $u_{n+1}=u_n$ pour tout $n$ ; **monotone** si elle est croissante ou décroissante.
:::

:::methode Étudier la monotonie
- Étudier le signe de $u_{n+1}-u_n$.
- Si tous les termes sont strictement positifs, comparer $\dfrac{u_{n+1}}{u_n}$ à $1$.
- Si $u_n=f(n)$ avec $f$ monotone sur $[0;+\infty[$, $(u_n)$ a la même monotonie que $f$.
:::

:::exemple
$u_n=\dfrac{n}{n+1}$ : $u_{n+1}-u_n=\dfrac{n+1}{n+2}-\dfrac{n}{n+1}=\dfrac{(n+1)^2-n(n+2)}{(n+1)(n+2)}=\dfrac1{(n+1)(n+2)}>0$. La suite est strictement croissante.
:::

:::exemple
Pour $u_0=1$, $u_{n+1}=\dfrac12u_n+3$ : $u_{n+1}-u_n=3-\dfrac12u_n=\dfrac12(6-u_n)>0$ car $u_n<6$. La suite est strictement croissante.
:::

# IV. Suites arithmétiques

:::definition
Une suite $(u_n)$ est **arithmétique** s’il existe un réel $r$, appelé **raison**, tel que pour tout $n$ : $u_{n+1}=u_n+r$.
:::

:::propriete
Si $(u_n)$ est arithmétique de raison $r$ :
- **terme général** : $u_n=u_0+nr$ et, plus généralement, $u_n=u_p+(n-p)r$ ;
- $(u_n)$ est croissante si $r>0$, décroissante si $r<0$ ;
- trois nombres $a$, $b$, $c$ sont des termes consécutifs d’une suite arithmétique si et seulement si $2b=a+c$ ;
- **somme de termes consécutifs** :
$$S=u_p+u_{p+1}+\dots+u_n=\frac{(n-p+1)\left(u_p+u_n\right)}{2}=\text{nombre de termes}\times\frac{\text{premier}+\text{dernier}}2.$$
:::

:::exemple
$(u_n)$ arithmétique avec $u_3=11$ et $u_8=26$ : $u_8-u_3=5r=15$, donc $r=3$ et $u_0=u_3-3r=2$. Alors $u_n=2+3n$ et $u_0+u_1+\dots+u_{20}=\dfrac{21\times(2+62)}{2}=672$.
:::

:::remarque
En particulier, $1+2+\dots+n=\dfrac{n(n+1)}2$.
:::

# V. Suites géométriques

:::definition
Une suite $(u_n)$ est **géométrique** s’il existe un réel $q$, appelé **raison**, tel que pour tout $n$ : $u_{n+1}=q\,u_n$.
:::

:::propriete
Si $(u_n)$ est géométrique de raison $q$ :
- **terme général** : $u_n=u_0\,q^n$ et, plus généralement, $u_n=u_p\,q^{n-p}$ ;
- trois nombres non nuls $a$, $b$, $c$ sont des termes consécutifs d’une suite géométrique si et seulement si $b^2=ac$ ;
- **somme de termes consécutifs** (si $q\ne1$) :
$$S=u_p+u_{p+1}+\dots+u_n=u_p\times\frac{1-q^{n-p+1}}{1-q}=\text{premier terme}\times\frac{1-q^{\text{nombre de termes}}}{1-q}.$$
Si $q=1$, la suite est constante et $S=(n-p+1)u_p$.
:::

:::propriete Monotonie (pour $u_0>0$)
Si $q>1$ la suite est strictement croissante ; si $0<q<1$ elle est strictement décroissante ; si $q<0$ elle n’est pas monotone (les signes alternent).
:::

:::exemple
$u_0=3$ et $q=2$ : $u_n=3\times2^n$, $u_5=96$ et $u_0+\dots+u_5=3\times\dfrac{1-2^6}{1-2}=3\times63=189$.
:::

:::methode Suite auxiliaire
Pour $u_{n+1}=au_n+b$ (avec $a\ne1$), on pose $v_n=u_n-\ell$ où $\ell$ vérifie $\ell=a\ell+b$ : la suite $(v_n)$ est géométrique de raison $a$.
:::

:::exemple
$u_0=1$, $u_{n+1}=\dfrac12u_n+3$. Ici $\ell=\dfrac12\ell+3$ donne $\ell=6$. Avec $v_n=u_n-6$ : $v_{n+1}=\dfrac12u_n+3-6=\dfrac12(u_n-6)=\dfrac12v_n$. $(v_n)$ est géométrique de raison $\dfrac12$ et $v_0=-5$, donc $u_n=6-5\left(\dfrac12\right)^n$.
:::

# Exercices

:::exercice Termes et monotonie
Soit $u_n=n^2-4n+1$. Calculer $u_0$, $u_1$, $u_2$, $u_3$, puis étudier le signe de $u_{n+1}-u_n$. La suite est-elle croissante à partir d’un certain rang ?
:::

:::exercice Récurrence
Soit $u_0=0$ et $u_{n+1}=\sqrt{u_n+2}$.
1. Montrer par récurrence que $0\le u_n\le2$ pour tout $n$.
2. Montrer que $u_{n+1}-u_n=\dfrac{(2-u_n)(1+u_n)}{\sqrt{u_n+2}+u_n}$ pour $n\ge1$, et en déduire que $(u_n)$ est croissante.
:::

:::exercice Arithmétique
Une suite arithmétique vérifie $u_5=17$ et $u_{12}=38$. Déterminer sa raison, $u_0$ et la somme $S=u_5+u_6+\dots+u_{12}$.
:::

:::exercice Géométrique
Une suite géométrique de termes positifs vérifie $u_2=12$ et $u_4=48$. Déterminer sa raison, $u_0$ et $S=u_0+u_1+\dots+u_7$.
:::

:::exercice Suite auxiliaire
Soit $u_0=4$ et $u_{n+1}=\dfrac13u_n+2$.
1. Montrer que $v_n=u_n-3$ définit une suite géométrique.
2. Exprimer $u_n$ en fonction de $n$ ; étudier la monotonie de $(u_n)$.
:::

:::exercice Problème
Un capital de $10\,000$ DH est placé à intérêts composés au taux annuel de $5\,\%$. On note $C_n$ le capital après $n$ années. Exprimer $C_n$ en fonction de $n$ et calculer $C_{10}$ (arrondi au dirham).
:::

:::exercice Série — suite auxiliaire
On définit $u_0=2$ et $u_{n+1}=\dfrac12u_n+3$. On pose $v_n=u_n-6$.
1. Montrer que $(v_n)$ est géométrique et préciser sa raison.
2. Exprimer $v_n$ puis $u_n$ en fonction de $n$.
3. Calculer $S_n=v_0+v_1+\cdots+v_n$.
:::

:::exercice Série — suite arithmétique
$(u_n)$ est arithmétique avec $u_3=11$ et $u_8=26$.
1. Calculer la raison et $u_0$.
2. Calculer $u_0+u_1+\cdots+u_{20}$.
:::

# Corrigés

:::corrige
$u_0=1$, $u_1=-2$, $u_2=-3$, $u_3=-2$. $u_{n+1}-u_n=(n+1)^2-4(n+1)+1-(n^2-4n+1)=2n-3$, positif pour $n\ge2$ : la suite est croissante à partir du rang $2$.
:::

:::corrige
1. Initialisation : $u_0=0\in[0;2]$. Hérédité : si $0\le u_n\le2$, alors $2\le u_n+2\le4$, donc $\sqrt2\le u_{n+1}\le2$, en particulier $0\le u_{n+1}\le2$.
2. En multipliant par la quantité conjuguée (non nulle car $u_n\ge\sqrt2>0$ pour $n\ge1$) : $u_{n+1}-u_n=\dfrac{u_n+2-u_n^2}{\sqrt{u_n+2}+u_n}=\dfrac{(2-u_n)(1+u_n)}{\sqrt{u_n+2}+u_n}\ge0$ car $u_n\le2$. Comme de plus $u_1=\sqrt2>u_0$, la suite est croissante.
:::

:::corrige
$7r=38-17=21$, donc $r=3$ et $u_0=17-15=2$. $S$ compte $8$ termes : $S=\dfrac{8\times(17+38)}{2}=220$.
:::

:::corrige
$q^2=\dfrac{48}{12}=4$ et $q>0$, donc $q=2$ ; $u_0=\dfrac{12}{4}=3$. $S=3\times\dfrac{1-2^8}{1-2}=3\times255=765$.
:::

:::corrige
1. $v_{n+1}=\dfrac13u_n+2-3=\dfrac13(u_n-3)=\dfrac13v_n$ : géométrique de raison $\dfrac13$, $v_0=1$.
2. $u_n=3+\left(\dfrac13\right)^n$. $u_{n+1}-u_n=\left(\dfrac13\right)^n\left(\dfrac13-1\right)<0$ : la suite est strictement décroissante.
:::

:::corrige
$C_{n+1}=1{,}05\,C_n$ : suite géométrique de raison $1{,}05$, donc $C_n=10\,000\times1{,}05^n$ et $C_{10}\approx16\,289$ DH.
:::

:::corrige
1. $v_{n+1}=u_{n+1}-6=\dfrac12u_n-3=\dfrac12\left(u_n-6\right)=\dfrac12v_n$ : raison $\dfrac12$, $v_0=-4$.
2. $v_n=-4\left(\dfrac12\right)^n$ et $u_n=6-4\left(\dfrac12\right)^n$.
3. $S_n=-4\times\dfrac{1-\left(\frac12\right)^{n+1}}{1-\frac12}=-8\left(1-\left(\dfrac12\right)^{n+1}\right)$.
:::

:::corrige
1. $5r=26-11=15$, $r=3$ ; $u_0=11-9=2$.
2. $u_{20}=2+60=62$ ; somme : $21\times\dfrac{2+62}{2}=672$.
:::
