---
id: tc-ensembles-nombres
titre: Les ensembles de nombres ℕ, ℤ, 𝔻, ℚ et ℝ
niveau: tc
semestre: 1
duree: 8 heures
---

## Objectifs
- Connaître les ensembles de nombres et les relations d’inclusion entre eux.
- Utiliser les symboles $\in$, $\notin$, $\subset$.
- Maîtriser les règles de calcul dans $\mathbb R$ : fractions, puissances, identités remarquables, racines carrées.

## Prérequis
- Nombres entiers, décimaux et rationnels.
- Puissances et racines carrées (3AC).
- Identités remarquables.

# I. Les ensembles de nombres

:::definition
- $\mathbb N=\{0;1;2;3;\dots\}$ est l’ensemble des **entiers naturels**.
- $\mathbb Z=\{\dots;-2;-1;0;1;2;\dots\}$ est l’ensemble des **entiers relatifs**.
- $\mathbb D$ est l’ensemble des **nombres décimaux** : ceux qui s’écrivent $\dfrac{a}{10^n}$ avec $a\in\mathbb Z$ et $n\in\mathbb N$.
- $\mathbb Q$ est l’ensemble des **nombres rationnels** : ceux qui s’écrivent $\dfrac ab$ avec $a\in\mathbb Z$ et $b\in\mathbb Z^*$.
- $\mathbb R$ est l’ensemble des **nombres réels** : les abscisses des points d’une droite graduée.
:::

:::propriete
$$\mathbb N\subset\mathbb Z\subset\mathbb D\subset\mathbb Q\subset\mathbb R.$$
Un réel qui n’est pas rationnel est dit **irrationnel** ; par exemple $\sqrt2$, $\sqrt3$ et $\pi$ sont irrationnels.
:::

:::exemple
| Nombre | $\mathbb N$ | $\mathbb Z$ | $\mathbb D$ | $\mathbb Q$ | $\mathbb R$ |
|---|---|---|---|---|---|
| $\dfrac{12}{4}=3$ | oui | oui | oui | oui | oui |
| $-7$ | non | oui | oui | oui | oui |
| $\dfrac7{20}=0{,}35$ | non | non | oui | oui | oui |
| $\dfrac13$ | non | non | non | oui | oui |
| $\sqrt2$ | non | non | non | non | oui |
:::

:::remarque Notations
- $\mathbb N^*$, $\mathbb Z^*$, $\mathbb R^*$ désignent ces ensembles privés de $0$ ; $\mathbb R^+$ est l’ensemble des réels positifs, $\mathbb R^-$ celui des réels négatifs.
- $x\in\mathbb Q$ se lit « $x$ appartient à $\mathbb Q$ » ; $A\subset B$ se lit « $A$ est inclus dans $B$ ».
- Un rationnel $\dfrac ab$ (fraction irréductible) est décimal si et seulement si $b$ n’a pas d’autres facteurs premiers que $2$ et $5$. Ainsi $\dfrac7{20}$ est décimal ($20=2^2\times5$) mais $\dfrac13$ ne l’est pas.
:::

# II. Règles de calcul dans ℝ

## 1. Fractions

:::propriete
Pour tous réels $a$, $b$, $c$, $d$ avec les dénominateurs non nuls :
$$\frac ab+\frac cb=\frac{a+c}b\qquad\frac ab+\frac cd=\frac{ad+bc}{bd}\qquad\frac ab\times\frac cd=\frac{ac}{bd}\qquad\frac{a/b}{c/d}=\frac ab\times\frac dc.$$
:::

## 2. Puissances

:::propriete
Pour tous réels $a$, $b$ non nuls et tous entiers relatifs $m$, $n$ :
$$a^0=1\quad a^{-n}=\frac1{a^n}\quad a^m\times a^n=a^{m+n}\quad\frac{a^m}{a^n}=a^{m-n}\quad\left(a^m\right)^n=a^{mn}\quad(ab)^n=a^nb^n\quad\left(\frac ab\right)^n=\frac{a^n}{b^n}.$$
:::

:::exemple
$$A=\frac{2^5\times3^{-2}}{2^3\times3^{-4}}=2^{5-3}\times3^{-2+4}=2^2\times3^2=36.$$
:::

## 3. Identités remarquables

:::propriete
Pour tous réels $a$ et $b$ :
$$(a+b)^2=a^2+2ab+b^2\qquad(a-b)^2=a^2-2ab+b^2\qquad(a-b)(a+b)=a^2-b^2$$
$$(a+b)^3=a^3+3a^2b+3ab^2+b^3\qquad(a-b)^3=a^3-3a^2b+3ab^2-b^3$$
$$a^3-b^3=(a-b)\left(a^2+ab+b^2\right)\qquad a^3+b^3=(a+b)\left(a^2-ab+b^2\right)$$
:::

:::exemple
$(x+2)^3=x^3+6x^2+12x+8$ ; $x^3-27=(x-3)\left(x^2+3x+9\right)$ ; $8+x^3=(2+x)\left(4-2x+x^2\right)$.
:::

## 4. Racines carrées

:::propriete
Pour tous réels positifs $a$ et $b$ :
$$\left(\sqrt a\right)^2=a\qquad\sqrt{a^2}=a\qquad\sqrt{ab}=\sqrt a\sqrt b\qquad\sqrt{\frac ab}=\frac{\sqrt a}{\sqrt b}\ (b>0).$$
Pour tout réel $x$ : $\sqrt{x^2}=|x|$.
:::

:::exemple
$\sqrt{50}-3\sqrt8+\sqrt{18}=5\sqrt2-6\sqrt2+3\sqrt2=2\sqrt2$ ; $\dfrac{1}{\sqrt5-2}=\dfrac{\sqrt5+2}{5-4}=\sqrt5+2$.
:::

# Exercices

:::exercice Appartenance
Compléter par $\in$ ou $\notin$ : $-5\dots\mathbb N$ ; $\dfrac{9}{3}\dots\mathbb N$ ; $\dfrac{3}{8}\dots\mathbb D$ ; $\dfrac{2}{3}\dots\mathbb D$ ; $\sqrt{16}\dots\mathbb Z$ ; $\pi\dots\mathbb Q$ ; $-\sqrt{\dfrac{4}{25}}\dots\mathbb D$.
:::

:::exercice Fractions
Calculer et donner le résultat sous forme irréductible : $A=\dfrac23-\dfrac56+\dfrac14$ ; $B=\dfrac{\frac35-1}{2+\frac15}$.
:::

:::exercice Puissances
Simplifier : $C=\dfrac{\left(3^2\right)^3\times9^{-1}}{27^2}$ ; $D=\dfrac{(-2)^5\times4^{-2}}{8^{-1}}$.
:::

:::exercice Identités
Développer $(2x-1)^3$, puis factoriser $x^3-8$ et $27x^3+1$.
:::

:::exercice Racines
1. Simplifier $E=\sqrt{75}-2\sqrt{12}+\sqrt{27}$.
2. Rendre rationnel le dénominateur de $F=\dfrac{3}{2+\sqrt3}$.
3. Calculer $\left(\sqrt{7+4\sqrt3}\right)^2$ et $\left(2+\sqrt3\right)^2$ ; en déduire $\sqrt{7+4\sqrt3}$.
:::

:::exercice Série — appartenance
Compléter par $\in$ ou $\notin$ : $\sqrt{16}\ldots\mathbb N$ ; $-\dfrac{12}{4}\ldots\mathbb Z$ ; $\dfrac{1}{3}\ldots\mathbb D$ ; $\dfrac{7}{20}\ldots\mathbb D$ ; $\sqrt{2}\ldots\mathbb Q$ ; $\left(1-\sqrt3\right)\left(1+\sqrt3\right)\ldots\mathbb Z$.
:::

:::exercice Série — simplifications
1. Simplifier $A=\sqrt{75}-2\sqrt{12}+\sqrt{27}$ et $B=\dfrac{1}{\sqrt3-\sqrt2}-\dfrac{1}{\sqrt3+\sqrt2}$.
2. Montrer que $\sqrt{7+4\sqrt3}=2+\sqrt3$.
:::

:::exercice Approfondissement — irrationalité
On admet que $\sqrt2$ est irrationnel.
1. Montrer par l’absurde que $1+\sqrt2$ est irrationnel.
2. Montrer que $3\sqrt2$ est irrationnel.
3. La somme de deux irrationnels est-elle toujours irrationnelle ? (Chercher un contre-exemple.)
:::

:::exercice Approfondissement — décimaux et rationnels
1. Écrire $x=1{,}\overline{27}=1{,}2727\ldots$ sous forme de fraction irréductible.
2. Montrer que $\dfrac{7}{40}$ est un nombre décimal et que $\dfrac{5}{12}$ n’en est pas un.
:::

# Corrigés

:::corrige
$-5\notin\mathbb N$ ; $\dfrac93=3\in\mathbb N$ ; $\dfrac38=0{,}375\in\mathbb D$ ; $\dfrac23\notin\mathbb D$ ; $\sqrt{16}=4\in\mathbb Z$ ; $\pi\notin\mathbb Q$ ; $-\dfrac25=-0{,}4\in\mathbb D$.
:::

:::corrige
- $A=\dfrac{8-10+3}{12}=\dfrac1{12}$.
- $B=\dfrac{-\frac25}{\frac{11}5}=-\dfrac25\times\dfrac5{11}=-\dfrac2{11}$.
:::

:::corrige
- $C=\dfrac{3^6\times3^{-2}}{3^6}=3^{-2}=\dfrac19$.
- $D=\dfrac{-2^5\times2^{-4}}{2^{-3}}=-2^{5-4+3}=-2^4=-16$.
:::

:::corrige
$(2x-1)^3=8x^3-12x^2+6x-1$ ; $x^3-8=(x-2)\left(x^2+2x+4\right)$ ; $27x^3+1=(3x+1)\left(9x^2-3x+1\right)$.
:::

:::corrige
1. $E=5\sqrt3-4\sqrt3+3\sqrt3=4\sqrt3$.
2. $F=\dfrac{3\left(2-\sqrt3\right)}{4-3}=6-3\sqrt3$.
3. Les deux valent $7+4\sqrt3$ ; comme $2+\sqrt3>0$, $\sqrt{7+4\sqrt3}=2+\sqrt3$.
:::

:::corrige
$\sqrt{16}=4\in\mathbb N$ ; $-3\in\mathbb Z$ ; $\dfrac13\notin\mathbb D$ ; $\dfrac7{20}=0{,}35\in\mathbb D$ ; $\sqrt2\notin\mathbb Q$ ; $1-3=-2\in\mathbb Z$.
:::

:::corrige
1. $A=5\sqrt3-4\sqrt3+3\sqrt3=4\sqrt3$ ; $B=\left(\sqrt3+\sqrt2\right)-\left(\sqrt3-\sqrt2\right)=2\sqrt2$ (car $\left(\sqrt3-\sqrt2\right)\left(\sqrt3+\sqrt2\right)=1$).
2. $\left(2+\sqrt3\right)^2=4+4\sqrt3+3=7+4\sqrt3$ et $2+\sqrt3>0$.
:::

:::corrige
1. Si $1+\sqrt2=r\in\mathbb Q$, alors $\sqrt2=r-1\in\mathbb Q$ : absurde.
2. Si $3\sqrt2=r$, alors $\sqrt2=\dfrac r3\in\mathbb Q$ : absurde.
3. Non : $\sqrt2+\left(-\sqrt2\right)=0\in\mathbb Q$.
:::

:::corrige
1. $100x-x=127{,}27\ldots-1{,}27\ldots=126$, donc $x=\dfrac{126}{99}=\dfrac{14}{11}$.
2. $\dfrac7{40}=\dfrac{7\times25}{1000}=0{,}175$ ; $\dfrac5{12}$ irréductible a un dénominateur divisible par $3$ : ce n’est pas un décimal.
:::
