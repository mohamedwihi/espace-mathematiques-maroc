---
id: 1bac-logique
titre: Notions de logique
niveau: 1bac
semestre: 1
duree: 10 heures
---

## Objectifs
- Reconnaître une proposition et déterminer sa valeur de vérité.
- Utiliser les connecteurs logiques (négation, conjonction, disjonction, implication, équivalence) et leurs propriétés.
- Utiliser les quantificateurs et écrire la négation d’une proposition quantifiée.
- Choisir et rédiger un raisonnement adapté : contraposée, absurde, disjonction des cas, équivalences successives, récurrence.

## Prérequis
- Calcul algébrique dans ℝ.
- Notions d’ensembles : appartenance, inclusion.
- Parité, divisibilité.

# I. Propositions

:::definition
Une **proposition** est un énoncé mathématique qui est soit **vrai** (V), soit **faux** (F), mais pas les deux à la fois.
:::

:::exemple
- « $\sqrt{16}=4$ » est une proposition vraie.
- « $7$ est un nombre pair » est une proposition fausse.
- « $x+1=3$ » n’est pas une proposition (sa vérité dépend de $x$) : c’est une **fonction propositionnelle**.
:::

# II. Les connecteurs logiques

:::definition
Soient $P$ et $Q$ deux propositions.
- La **négation** de $P$, notée $\bar P$ (« non $P$ »), est vraie lorsque $P$ est fausse et fausse lorsque $P$ est vraie.
- La **conjonction** « $P$ et $Q$ », notée $P\wedge Q$, est vraie seulement lorsque $P$ et $Q$ sont vraies toutes les deux.
- La **disjonction** « $P$ ou $Q$ », notée $P\vee Q$, est fausse seulement lorsque $P$ et $Q$ sont fausses toutes les deux.
- L’**implication** « $P\Rightarrow Q$ » est fausse seulement lorsque $P$ est vraie et $Q$ fausse.
- L’**équivalence** « $P\iff Q$ » est vraie lorsque $P$ et $Q$ ont la même valeur de vérité.
:::

:::propriete Table de vérité
| $P$ | $Q$ | $\bar P$ | $P\wedge Q$ | $P\vee Q$ | $P\Rightarrow Q$ | $P\iff Q$ |
|---|---|---|---|---|---|---|
| V | V | F | V | V | V | V |
| V | F | F | F | V | F | F |
| F | V | V | F | V | V | F |
| F | F | V | F | F | V | V |
:::

:::remarque
- L’implication $Q\Rightarrow P$ est la **réciproque** de $P\Rightarrow Q$.
- $P\iff Q$ signifie « $P\Rightarrow Q$ et $Q\Rightarrow P$ ».
- Une implication dont l’hypothèse est fausse est toujours vraie : « $2>3\Rightarrow1=0$ » est vraie.
:::

# III. Propriétés des connecteurs

:::propriete
Pour toutes propositions $P$, $Q$ et $R$ :
- $\overline{\bar P}\iff P$ (double négation) ;
- **lois de Morgan** : $\overline{P\wedge Q}\iff\bar P\vee\bar Q$ et $\overline{P\vee Q}\iff\bar P\wedge\bar Q$ ;
- $(P\Rightarrow Q)\iff\left(\bar P\vee Q\right)$ et $\overline{P\Rightarrow Q}\iff\left(P\wedge\bar Q\right)$ ;
- **contraposée** : $(P\Rightarrow Q)\iff\left(\bar Q\Rightarrow\bar P\right)$ ;
- **transitivité** : $\left[(P\Rightarrow Q)\wedge(Q\Rightarrow R)\right]\Rightarrow(P\Rightarrow R)$.
:::

:::remarque Lien avec les ensembles
Si $A$ et $B$ sont des parties d’un ensemble $E$ : $x\in A\cap B\iff(x\in A\wedge x\in B)$ ; $x\in A\cup B\iff(x\in A\vee x\in B)$ ; $A\subset B$ signifie $(x\in A\Rightarrow x\in B)$. Les lois de Morgan donnent $\overline{A\cap B}=\bar A\cup\bar B$ et $\overline{A\cup B}=\bar A\cap\bar B$ (complémentaires dans $E$).
:::

# IV. Les quantificateurs

:::definition
Soit $P(x)$ une fonction propositionnelle où $x$ décrit un ensemble $E$.
- « $\forall x\in E,\ P(x)$ » signifie : **pour tout** $x$ de $E$, $P(x)$ est vraie (**quantificateur universel**).
- « $\exists x\in E,\ P(x)$ » signifie : **il existe au moins** un $x$ de $E$ tel que $P(x)$ soit vraie (**quantificateur existentiel**).
- « $\exists!\,x\in E,\ P(x)$ » signifie : il existe un **unique** $x$ de $E$ tel que $P(x)$.
:::

:::propriete Négation
$$\overline{\forall x\in E,\ P(x)}\iff\exists x\in E,\ \overline{P(x)}\qquad\overline{\exists x\in E,\ P(x)}\iff\forall x\in E,\ \overline{P(x)}.$$
:::

:::exemple
- « $\forall x\in\mathbb R,\ x^2+1>0$ » est vraie ; sa négation est « $\exists x\in\mathbb R,\ x^2+1\le0$ ».
- « $\exists x\in\mathbb N,\ x^2=2$ » est fausse ; sa négation « $\forall x\in\mathbb N,\ x^2\ne2$ » est vraie.
- « $\forall x\in\mathbb R,\ \exists y\in\mathbb R,\ y>x$ » est vraie (prendre $y=x+1$), mais « $\exists y\in\mathbb R,\ \forall x\in\mathbb R,\ y>x$ » est fausse : **l’ordre des quantificateurs compte**.
:::

:::remarque
Pour montrer qu’une proposition « $\forall x,\ P(x)$ » est fausse, il suffit de trouver **un contre-exemple**.
:::

# V. Types de raisonnement

## 1. Raisonnement par équivalences successives

:::exemple
Montrer que pour tous réels $a$ et $b$ : $a^2+b^2\ge2ab$. On a $a^2+b^2\ge2ab\iff a^2-2ab+b^2\ge0\iff(a-b)^2\ge0$, ce qui est vrai.
:::

## 2. Raisonnement par contraposée

:::methode
Pour montrer $P\Rightarrow Q$, on montre $\bar Q\Rightarrow\bar P$.
:::

:::exemple
Montrer que si $n^2$ est pair, alors $n$ est pair. Contraposée : si $n$ est impair, $n=2k+1$, alors $n^2=2(2k^2+2k)+1$ est impair. Donc la proposition est vraie.
:::

## 3. Raisonnement par l’absurde

:::methode
Pour montrer que $P$ est vraie, on suppose $\bar P$ vraie et on aboutit à une contradiction.
:::

:::exemple
Montrer que $\sqrt2\notin\mathbb Q$. Supposons $\sqrt2=\dfrac pq$ avec $\dfrac pq$ irréductible. Alors $p^2=2q^2$ : $p^2$ est pair, donc $p$ est pair, $p=2p'$. Il vient $q^2=2p'^2$, donc $q$ est pair : contradiction avec la fraction irréductible.
:::

## 4. Raisonnement par disjonction des cas

:::exemple
Montrer que pour tout $n\in\mathbb N$, $n(n+1)$ est pair. Si $n$ est pair, c’est vrai ; si $n$ est impair, $n+1$ est pair, donc le produit est pair.
:::

## 5. Raisonnement par récurrence

:::theoreme
Soit $P(n)$ une proposition dépendant d’un entier $n\ge n_0$. Si :
1. **initialisation** : $P(n_0)$ est vraie ;
2. **hérédité** : pour tout $n\ge n_0$, $P(n)\Rightarrow P(n+1)$ ;

alors $P(n)$ est vraie pour tout entier $n\ge n_0$.
:::

:::exemple
Montrer que pour tout $n\ge1$ : $1+2+\dots+n=\dfrac{n(n+1)}2$.
- Initialisation : pour $n=1$, $1=\dfrac{1\times2}2$.
- Hérédité : supposons la formule vraie au rang $n$. Alors $1+\dots+n+(n+1)=\dfrac{n(n+1)}2+(n+1)=\dfrac{(n+1)(n+2)}2$ : la formule est vraie au rang $n+1$.
:::

# Exercices

:::exercice Valeurs de vérité
Déterminer la valeur de vérité de : $P_1$ : « $\sqrt2\in\mathbb Q$ ou $3\mid12$ » ; $P_2$ : « $(-2)^2=-4\Rightarrow5<1$ » ; $P_3$ : « $\forall x\in\mathbb R,\ x^2\ge x$ » ; $P_4$ : « $\exists x\in\mathbb R,\ x^2-3x+2=0$ ».
:::

:::exercice Négations
Écrire la négation de : « $\forall x\in\mathbb R,\ x^2-2x+2>0$ » ; « $\exists n\in\mathbb N,\ n^2=n+1$ » ; « $\forall\varepsilon>0,\ \exists n\in\mathbb N^*,\ \dfrac1n<\varepsilon$ ».
:::

:::exercice Contraposée
Soient $x$ et $y$ deux réels. Montrer par contraposée : si $x\ne1$ et $y\ne1$, alors $x+y-xy\ne1$.
:::

:::exercice Absurde
Montrer par l’absurde que pour tout réel $x\ge0$ : $\dfrac{x}{1+x}\ne1$.
:::

:::exercice Récurrence
1. Montrer que pour tout $n\in\mathbb N$ : $3^n\ge1+2n$.
2. Montrer que pour tout $n\in\mathbb N$, $4^n-1$ est divisible par $3$.
:::

:::exercice Disjonction des cas
Résoudre dans $\mathbb R$ l’équation $|x-1|+|x+2|=5$.
:::

:::exercice Série — valeur de vérité
Donner la valeur de vérité et la négation de chacune des propositions :
1. $P$ : « $\forall x\in\mathbb R,\ x^2+1>0$ ».
2. $Q$ : « $\exists n\in\mathbb N,\ n^2=2n$ ».
3. $R$ : « $\forall x\in\mathbb R,\ \exists y\in\mathbb R,\ x+y=0$ ».
:::

:::exercice Série — raisonnements
1. Par contraposée, montrer que pour tout $n\in\mathbb N$ : si $n^2$ est impair, alors $n$ est impair.
2. Par l’absurde, montrer que $\sqrt2\notin\mathbb Q$ (on admettra que si $n^2$ est pair, alors $n$ est pair).
3. Par récurrence, montrer que pour tout $n\in\mathbb N^*$ : $1+3+5+\cdots+(2n-1)=n^2$.
:::

# Corrigés

:::corrige
- $P_1$ : « $3\mid12$ » est vraie, donc $P_1$ est vraie.
- $P_2$ : l’hypothèse $(-2)^2=-4$ est fausse, donc l’implication est vraie.
- $P_3$ : fausse (contre-exemple $x=\dfrac12$ : $\dfrac14<\dfrac12$).
- $P_4$ : vraie ($x=1$).
:::

:::corrige
- « $\exists x\in\mathbb R,\ x^2-2x+2\le0$ ».
- « $\forall n\in\mathbb N,\ n^2\ne n+1$ ».
- « $\exists\varepsilon>0,\ \forall n\in\mathbb N^*,\ \dfrac1n\ge\varepsilon$ ».
:::

:::corrige
Contraposée : si $x+y-xy=1$, alors $x=1$ ou $y=1$. En effet $x+y-xy-1=0\iff-(x-1)(y-1)=0\iff x=1$ ou $y=1$.
:::

:::corrige
Supposons $\dfrac x{1+x}=1$ avec $x\ge0$. Alors $x=1+x$, soit $0=1$ : contradiction. Donc $\dfrac x{1+x}\ne1$.
:::

:::corrige
1. Initialisation : $3^0=1\ge1$. Hérédité : si $3^n\ge1+2n$, alors $3^{n+1}=3\times3^n\ge3+6n\ge3+2n=1+2(n+1)$.
2. Initialisation : $4^0-1=0$ est divisible par $3$. Hérédité : si $4^n-1=3k$, alors $4^{n+1}-1=4\times4^n-1=4(3k+1)-1=12k+3=3(4k+1)$.
:::

:::corrige
- Si $x\le-2$ : $(1-x)+(-x-2)=5$, soit $-2x-1=5$, $x=-3$ (convient).
- Si $-2\le x\le1$ : $(1-x)+(x+2)=3\ne5$ : pas de solution.
- Si $x\ge1$ : $(x-1)+(x+2)=5$, soit $2x+1=5$, $x=2$ (convient).

$S=\{-3;2\}$.
:::

:::corrige
1. Vraie ; $\overline P$ : « $\exists x\in\mathbb R,\ x^2+1\le0$ ».
2. Vraie ($n=0$ ou $n=2$) ; $\overline Q$ : « $\forall n\in\mathbb N,\ n^2\ne2n$ ».
3. Vraie ($y=-x$) ; $\overline R$ : « $\exists x\in\mathbb R,\ \forall y\in\mathbb R,\ x+y\ne0$ ».
:::

:::corrige
1. Contraposée : si $n$ est pair, $n=2k$, alors $n^2=4k^2$ est pair.
2. Supposons $\sqrt2=\dfrac pq$ avec $\dfrac pq$ irréductible. Alors $p^2=2q^2$ est pair, donc $p=2p'$ ; puis $q^2=2p'^2$ est pair, donc $q$ est pair : contradiction avec l’irréductibilité.
3. Pour $n=1$ : $1=1^2$. Si la somme vaut $n^2$, en ajoutant $2(n+1)-1=2n+1$ on obtient $n^2+2n+1=(n+1)^2$.
:::
