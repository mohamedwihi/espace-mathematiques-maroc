---
id: 2ac-puissances
titre: Les puissances
niveau: 2ac
semestre: 1
duree: 8 heures
---

## Objectifs
- Connaître les puissances d’exposant entier relatif d’un nombre rationnel.
- Déterminer le signe d’une puissance.
- Utiliser les règles de calcul sur les puissances.
- Utiliser les puissances de $10$ et l’écriture scientifique.

## Prérequis
- Puissances (1re année) ; multiplication et division des rationnels ; inverse.

# I. Définitions

:::definition Exposant positif
Soit $a$ un rationnel et $n$ un entier naturel non nul. On pose
$$a^n=\underbrace{a\times a\times\cdots\times a}_{n\ \text{facteurs}},\qquad a^1=a,\qquad a^0=1\ (a\ne0).$$
:::

:::definition Exposant négatif
Soit $a$ un rationnel **non nul** et $n$ un entier naturel. On pose
$$a^{-n}=\frac{1}{a^n}.$$
$a^{-n}$ est l’inverse de $a^n$ ; en particulier $a^{-1}=\dfrac1a$.
:::

:::exemple
- $(-6)\times(-6)\times(-6)=(-6)^3=-216$.
- $\left(\dfrac23\right)^3=\dfrac{2^3}{3^3}=\dfrac8{27}$.
- $2^{-3}=\dfrac1{2^3}=\dfrac18$ ; $\left(\dfrac{3}{4}\right)^{-2}=\left(\dfrac43\right)^2=\dfrac{16}9$.
:::

# II. Signe d’une puissance

:::regle
Soit $a$ un rationnel non nul et $n$ un entier relatif :
- si $a>0$, alors $a^n>0$ ;
- si $a<0$ et $n$ est **pair**, alors $a^n>0$ ;
- si $a<0$ et $n$ est **impair**, alors $a^n<0$.
:::

:::exemple
$(-2)^4=16$ ; $(-2)^5=-32$ ; $(-1)^{2027}=-1$ ; $(-3)^{-2}=\dfrac19$ ; $(-2)^{-3}=-\dfrac18$.
:::

:::remarque
$-3^2=-9$ alors que $(-3)^2=9$.
:::

# III. Règles de calcul

:::propriete
Pour tous rationnels non nuls $a$ et $b$ et tous entiers relatifs $m$ et $n$ :
| Propriété | Exemple |
|---|---|
| $a^m\times a^n=a^{m+n}$ | $3^2\times3^5=3^7$ |
| $\dfrac{a^m}{a^n}=a^{m-n}$ | $\dfrac{5^7}{5^3}=5^4$ |
| $\left(a^m\right)^n=a^{m\times n}$ | $\left(2^3\right)^4=2^{12}$ |
| $(a\times b)^n=a^n\times b^n$ | $(2\times5)^3=2^3\times5^3$ |
| $\left(\dfrac ab\right)^n=\dfrac{a^n}{b^n}$ | $\left(\dfrac23\right)^4=\dfrac{2^4}{3^4}$ |
:::

:::exemple Observation
$\left(\dfrac12\right)^3\times\left(\dfrac12\right)^5=\dfrac18\times\dfrac1{32}=\dfrac1{256}=\left(\dfrac12\right)^8$ : on additionne les exposants.
:::

:::exemple
$$A=\frac{2^5\times2^{-2}}{2^4}=2^{5-2-4}=2^{-1}=\frac12\qquad B=\frac{(-3)^4\times5^4}{15^3}=\frac{15^4}{15^3}=15.$$
:::

# IV. Puissances de 10

:::propriete
Pour tout entier naturel $n$ : $10^n=1\underbrace{0\cdots0}_{n}$ et $10^{-n}=0{,}\underbrace{0\cdots0}_{n-1}1$.
Les règles précédentes s’appliquent : $10^m\times10^n=10^{m+n}$, $\dfrac{10^m}{10^n}=10^{m-n}$, $\left(10^m\right)^n=10^{mn}$.
:::

:::exemple
$10^4\times10^{-7}=10^{-3}=0{,}001$ ; $\dfrac{10^{2}}{10^{-3}}=10^5$.
:::

:::definition Écriture scientifique
L’écriture scientifique d’un décimal non nul est $a\times10^n$ avec $1\le\lvert a\rvert<10$ et $n$ entier relatif.
:::

:::exemple
$-0{,}000\,58=-5{,}8\times10^{-4}$ ; $356\times10^5=3{,}56\times10^7$.
:::

# Exercices

:::exercice Calculs
Calculer : $(-4)^3$ ; $\left(\dfrac{-2}{5}\right)^2$ ; $3^{-2}$ ; $\left(\dfrac{1}{2}\right)^{-4}$ ; $(-1)^{100}$ ; $(-1)^{-7}$ ; $-2^6$.
:::

:::exercice Signe
Sans calculer, donner le signe de : $(-7)^{12}$ ; $(-2{,}5)^{9}$ ; $-(-3)^4$ ; $\left(\dfrac{-1}{3}\right)^{-5}$ ; $(-5)^3\times(-2)^6$.
:::

:::exercice Règles de calcul
Écrire sous la forme d’une seule puissance : $7^4\times7^{-6}$ ; $\dfrac{(-3)^8}{(-3)^5}$ ; $\left(5^{-2}\right)^3$ ; $2^6\times5^6$ ; $\dfrac{12^5}{4^5}$ ; $\dfrac{a^3\times a^{-5}}{a^{-4}}$ ($a\ne0$).
:::

:::exercice Simplifier
Simplifier : $C=\dfrac{3^5\times2^4}{6^3}$ ; $D=\dfrac{(-2)^3\times10^{-2}}{4\times10^{-5}}$ ; $E=\dfrac{9^2\times4^{-1}}{3^3\times2^{-3}}$.
:::

:::exercice Écriture scientifique
Donner l’écriture scientifique de : $45\,600\,000$ ; $0{,}000\,203$ ; $72\times10^{-5}$ ; $0{,}6\times10^{8}$ ; $\dfrac{3\times10^{4}\times8\times10^{-6}}{4\times10^{-3}}$.
:::

:::exercice Approfondissement — simplifier une grande expression
Simplifier $A=\dfrac{2^{12}\times3^{5}\times10^{-3}}{6^{4}\times4^{3}\times5^{-3}}$.
:::

:::exercice Approfondissement — comparer des puissances
1. Comparer $2^{30}$ et $3^{20}$ (écrire $2^{30}=\left(2^3\right)^{10}$).
2. Comparer $5^{40}$ et $4^{50}$.
:::

# Corrigés

:::corrige
$-64$ ; $\dfrac4{25}$ ; $\dfrac19$ ; $16$ ; $1$ ; $-1$ ; $-64$.
:::

:::corrige
Positif ; négatif ; négatif ; négatif (exposant impair, base négative) ; négatif.
:::

:::corrige
$7^{-2}$ ; $(-3)^3$ ; $5^{-6}$ ; $10^6$ ; $3^5$ ; $a^{3-5+4}=a^2$.
:::

:::corrige
- $C=\dfrac{3^5\times2^4}{2^3\times3^3}=3^2\times2=18$.
- $D=\dfrac{-8}{4}\times10^{-2+5}=-2\times10^3=-2\,000$.
- $E=\dfrac{3^4\times2^{-2}}{3^3\times2^{-3}}=3\times2=6$.
:::

:::corrige
$4{,}56\times10^7$ ; $2{,}03\times10^{-4}$ ; $7{,}2\times10^{-4}$ ; $6\times10^7$ ; $\dfrac{24}{4}\times10^{4-6+3}=6\times10^1$.
:::

:::corrige
$10^{-3}=2^{-3}\times5^{-3}$, $6^4=2^4\times3^4$, $4^3=2^6$. Donc $A=\dfrac{2^{12-3}\times3^5\times5^{-3}}{2^{4+6}\times3^4\times5^{-3}}=2^{9-10}\times3=\dfrac32$.
:::

:::corrige
1. $2^{30}=8^{10}$ et $3^{20}=9^{10}$ : $2^{30}<3^{20}$.
2. $5^{40}=\left(5^4\right)^{10}=625^{10}$ et $4^{50}=\left(4^5\right)^{10}=1024^{10}$ : $5^{40}<4^{50}$.
:::
