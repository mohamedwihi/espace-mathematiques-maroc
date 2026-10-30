---
id: tc-polynomes
titre: Les polynômes
niveau: tc
semestre: 1
duree: 8 heures
---

## Objectifs
- Reconnaître un polynôme, son degré et ses coefficients ; reconnaître deux polynômes égaux.
- Calculer la somme et le produit de deux polynômes.
- Reconnaître une racine d’un polynôme et diviser un polynôme par $x-a$.
- Factoriser un polynôme connaissant une ou plusieurs racines.

## Prérequis
- Calcul littéral, identités remarquables.
- Puissances.
- Équations du premier degré.

# I. Généralités

:::definition
On appelle **polynôme** toute expression de la forme
$$P(x)=a_nx^n+a_{n-1}x^{n-1}+\dots+a_1x+a_0$$
où $n\in\mathbb N$ et $a_0$, $a_1$, …, $a_n$ sont des réels appelés **coefficients**. Si $a_n\ne0$, l’entier $n$ est le **degré** de $P$, noté $d^\circ P=n$, et $a_n$ est le coefficient dominant.
:::

:::exemple
- $P(x)=2x^3-60x^2+450x$ est un polynôme de degré $3$.
- $Q(x)=5$ est un polynôme constant (de degré $0$) ; le polynôme nul n’a pas de degré.
- $R(x)=x^2+\dfrac1x$ et $S(x)=\sqrt x+1$ ne sont pas des polynômes.
- Un polynôme de degré $1$ s’écrit $ax+b$ ($a\ne0$) ; de degré $2$, $ax^2+bx+c$ ($a\ne0$) : on parle de **trinôme du second degré**.
:::

:::propriete Égalité de deux polynômes
Deux polynômes sont **égaux** si et seulement s’ils ont le **même degré** et les **mêmes coefficients** pour les termes de même degré.
:::

:::exemple
Déterminer $a$, $b$, $c$ pour que $P(x)=2x^2-x-3$ soit égal à $Q(x)=(x+1)(ax+b)+c$. On développe : $Q(x)=ax^2+(a+b)x+b+c$. Par identification : $a=2$, $a+b=-1$ donc $b=-3$, et $b+c=-3$ donc $c=0$. Ainsi $P(x)=(x+1)(2x-3)$.
:::

# II. Somme et produit de polynômes

:::propriete
Soient $P$ et $Q$ deux polynômes non nuls.
- $P+Q$ est un polynôme et $d^\circ(P+Q)\le\max\left(d^\circ P;d^\circ Q\right)$.
- $P\times Q$ est un polynôme et $d^\circ(P\times Q)=d^\circ P+d^\circ Q$.
:::

:::exemple
$P(x)=x^2-3x+1$ et $Q(x)=2x+5$ :
- $P(x)+Q(x)=x^2-x+6$ (degré $2$) ;
- $P(x)\times Q(x)=2x^3+5x^2-6x^2-15x+2x+5=2x^3-x^2-13x+5$ (degré $3=2+1$).
:::

# III. Racine d’un polynôme — division par $x-a$

:::definition
On dit que le réel $a$ est une **racine** (ou un zéro) du polynôme $P$ si $P(a)=0$.
:::

:::theoreme
Le réel $a$ est une racine de $P$ si et seulement si $P(x)$ est **divisible par $x-a$**, c’est-à-dire s’il existe un polynôme $Q$ tel que
$$P(x)=(x-a)Q(x)\qquad\text{avec}\qquad d^\circ Q=d^\circ P-1.$$
:::

:::methode Déterminer $Q$
- **Par identification** : on écrit $Q(x)=bx^2+cx+d$ (par exemple), on développe $(x-a)Q(x)$ et on identifie les coefficients.
- **Par la division euclidienne** : on pose la division de $P(x)$ par $x-a$ comme une division de nombres.
- **Par le schéma de Horner** : pour $P(x)=a_3x^3+a_2x^2+a_1x+a_0$, on calcule successivement $b_2=a_3$, $b_1=a_2+ab_2$, $b_0=a_1+ab_1$ ; le reste $a_0+ab_0$ doit être nul. Alors $Q(x)=b_2x^2+b_1x+b_0$.
:::

:::exemple
$P(x)=x^3-2x^2-5x+6$. On remarque que $P(1)=1-2-5+6=0$ : $1$ est racine, donc $P(x)=(x-1)Q(x)$.

Schéma de Horner avec $a=1$ :
| Coefficients de $P$ | $1$ | $-2$ | $-5$ | $6$ |
|---|---|---|---|---|
| Ligne calculée | $1$ | $-2+1\times1=-1$ | $-5+1\times(-1)=-6$ | $6+1\times(-6)=0$ |

Donc $Q(x)=x^2-x-6=(x-3)(x+2)$ et $P(x)=(x-1)(x-3)(x+2)$. Les racines de $P$ sont $-2$, $1$ et $3$.
:::

:::remarque
- Un polynôme de degré $n$ admet **au plus $n$ racines**.
- Si $a$ et $b$ sont deux racines distinctes de $P$, alors $P(x)$ est divisible par $(x-a)(x-b)$.
- Pour trouver une racine « évidente », on essaie les petites valeurs $0$, $1$, $-1$, $2$, $-2$… Si les coefficients sont entiers, une racine entière divise le terme constant $a_0$.
:::

# IV. Factorisation

:::methode
Pour factoriser un polynôme :
1. chercher une racine évidente $a$ ;
2. écrire $P(x)=(x-a)Q(x)$ ;
3. recommencer avec $Q(x)$, ou le factoriser par une identité remarquable ou à l’aide du discriminant (degré $2$).
:::

:::exemple
$P(x)=2x^3+3x^2-3x-2$. $P(1)=2+3-3-2=0$, donc $P(x)=(x-1)\left(2x^2+5x+2\right)$. Puis $2x^2+5x+2$ s’annule pour $x=-2$ : $2x^2+5x+2=(x+2)(2x+1)$. Finalement $P(x)=(x-1)(x+2)(2x+1)$.
:::

# Exercices

:::exercice Degré et coefficients
Déterminer le degré et les coefficients de $P(x)=(x^2-1)(3x+2)-3x^3$. Lesquelles des expressions suivantes sont des polynômes : $2x^5-\sqrt3x$ ; $\dfrac{x^2+1}{x}$ ; $(x-\sqrt2)^2$ ?
:::

:::exercice Identification
Déterminer les réels $a$, $b$, $c$ tels que, pour tout $x$ : $x^3-7x+6=(x-1)(ax^2+bx+c)$. En déduire une factorisation complète.
:::

:::exercice Racines
Soit $P(x)=x^3+x^2-10x+8$.
1. Vérifier que $1$ et $2$ sont des racines de $P$.
2. En déduire que $P(x)$ est divisible par $x^2-3x+2$ et factoriser $P(x)$.
:::

:::exercice Paramètre
Déterminer le réel $m$ pour que $-2$ soit racine de $P(x)=x^3+mx^2-x-2$, puis factoriser $P(x)$.
:::

:::exercice Problème
On découpe un carré de côté $x$ dans chaque coin d’une plaque carrée de $30$ cm de côté pour fabriquer une boîte sans couvercle.
1. Montrer que le volume de la boîte est $V(x)=4x^3-120x^2+900x$.
2. Calculer $V(5)$ et vérifier que $V(x)-2000=4(x-5)\left(x^2-25x+100\right)$.
:::

:::exercice Série — division et factorisation
Soit $P(x)=x^3-2x^2-5x+6$.
1. Vérifier que $1$ est une racine de $P$.
2. Déterminer le polynôme $Q$ tel que $P(x)=(x-1)Q(x)$.
3. Factoriser $P(x)$ et résoudre $P(x)=0$.
:::

:::exercice Série — paramètre
Soit $P(x)=2x^3+ax^2-x+b$. Déterminer $a$ et $b$ pour que $P$ soit divisible par $x-1$ et par $x+2$.
:::

# Corrigés

:::corrige
$P(x)=3x^3+2x^2-3x-2-3x^3=2x^2-3x-2$ : degré $2$, coefficients $2$, $-3$, $-2$. $2x^5-\sqrt3x$ et $(x-\sqrt2)^2$ sont des polynômes ; $\dfrac{x^2+1}x$ n’en est pas un.
:::

:::corrige
$(x-1)(ax^2+bx+c)=ax^3+(b-a)x^2+(c-b)x-c$. Identification : $a=1$, $b-a=0$ donc $b=1$, $c-b=-7$ donc $c=-6$, et $-c=6$ ✓. Puis $x^2+x-6=(x+3)(x-2)$, d’où $x^3-7x+6=(x-1)(x-2)(x+3)$.
:::

:::corrige
1. $P(1)=1+1-10+8=0$ et $P(2)=8+4-20+8=0$.
2. $P$ est divisible par $(x-1)(x-2)=x^2-3x+2$ : $P(x)=(x^2-3x+2)(x+4)$ (le terme constant donne $2\times4=8$). Donc $P(x)=(x-1)(x-2)(x+4)$.
:::

:::corrige
$P(-2)=-8+4m+2-2=4m-8=0$, donc $m=2$. $P(x)=x^3+2x^2-x-2=x^2(x+2)-(x+2)=(x+2)(x-1)(x+1)$.
:::

:::corrige
1. La boîte a une base carrée de côté $30-2x$ et une hauteur $x$ : $V(x)=x(30-2x)^2=x\left(900-120x+4x^2\right)=4x^3-120x^2+900x$.
2. $V(5)=5\times20^2=2000$. Et $4(x-5)(x^2-25x+100)=4\left(x^3-30x^2+225x-500\right)=4x^3-120x^2+900x-2000=V(x)-2000$.
:::

:::corrige
1. $P(1)=1-2-5+6=0$.
2. $Q(x)=x^2-x-6$ (division euclidienne ou identification).
3. $x^2-x-6=(x-3)(x+2)$, donc $P(x)=(x-1)(x-3)(x+2)$ et $S=\{-2;1;3\}$.
:::

:::corrige
$P(1)=2+a-1+b=0$ et $P(-2)=-16+4a+2+b=0$, soit $a+b=-1$ et $4a+b=14$. Par soustraction : $3a=15$, $a=5$ et $b=-6$.
:::
