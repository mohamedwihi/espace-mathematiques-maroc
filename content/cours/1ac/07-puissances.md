---
id: 1ac-puissances
titre: Les puissances
niveau: 1ac
semestre: 2
duree: 4 heures
---

## Objectifs
- Comprendre la notation $a^n$ et calculer des puissances.
- Déterminer le signe d’une puissance d’un nombre relatif.
- Connaître les puissances de $10$ et l’écriture scientifique.
- Respecter les priorités de calcul avec des puissances.

## Prérequis
- Multiplication des nombres relatifs et règle des signes.
- Multiplication par $10$, $100$, $1000$.

# I. Définition

:::definition
Soit $a$ un nombre relatif et $n$ un entier naturel supérieur ou égal à $2$. Le produit de $n$ facteurs égaux à $a$ se note $a^n$ :
$$a^n=\underbrace{a\times a\times\cdots\times a}_{n\ \text{facteurs}}.$$
$a^n$ se lit « $a$ puissance $n$ » ; $n$ est l’**exposant**. Par convention : $a^1=a$ et, pour $a\ne0$, $a^0=1$.
:::

:::vocabulaire
- $a^2$ se lit « $a$ au carré » : c’est l’aire d’un carré de côté $a$.
- $a^3$ se lit « $a$ au cube » : c’est le volume d’un cube d’arête $a$.
:::

:::exemple
$2^5=2\times2\times2\times2\times2=32$ ; $0{,}3^2=0{,}09$ ; $1^{100}=1$ ; $0^7=0$ ; $7^0=1$.
:::

:::remarque Attention
$3^4\ne3\times4$ : $3^4=81$ alors que $3\times4=12$.
:::

# II. Signe d’une puissance

:::exemple Observation
$(-2)^2=4$ ; $(-2)^3=-8$ ; $(-2)^4=16$ ; $(-2)^5=-32$.
:::

:::regle
Soit $a$ un nombre **négatif** non nul :
- si l’exposant $n$ est **pair**, $a^n$ est **positif** ;
- si l’exposant $n$ est **impair**, $a^n$ est **négatif**.

Une puissance d’un nombre positif est toujours positive.
:::

:::remarque Attention aux parenthèses
$(-3)^2=(-3)\times(-3)=9$, mais $-3^2=-(3\times3)=-9$.
:::

# III. Puissances de $10$

:::definition
Pour tout entier naturel $n$ :
$$10^n=1\underbrace{0\cdots0}_{n\ \text{zéros}}\qquad10^{-n}=\frac1{10^n}=0{,}\underbrace{0\cdots0}_{n-1\ \text{zéros}}1.$$
:::

:::exemple
$10^3=1\,000$ ; $10^6=1\,000\,000$ (un million) ; $10^{-2}=0{,}01$ ; $10^{-4}=0{,}0001$.
:::

:::regle
- Multiplier un nombre par $10^n$ revient à décaler la virgule de $n$ rangs vers la droite.
- Multiplier un nombre par $10^{-n}$ revient à décaler la virgule de $n$ rangs vers la gauche.
:::

:::exemple
$3{,}25\times10^2=325$ ; $47\times10^{-3}=0{,}047$.
:::

# IV. Écriture scientifique

:::definition
L’**écriture scientifique** d’un nombre décimal positif est de la forme $a\times10^n$, où $1\le a<10$ (un seul chiffre non nul avant la virgule) et $n$ un entier relatif.
:::

:::exemple
- $45\,000=4{,}5\times10^4$.
- $0{,}0032=3{,}2\times10^{-3}$.
- Distance Terre–Soleil : environ $150\,000\,000$ km $=1{,}5\times10^8$ km.
:::

# V. Priorités opératoires

:::regle
Dans un calcul, on effectue dans l’ordre : les parenthèses, puis les **puissances**, puis les multiplications et divisions, puis les additions et soustractions.
:::

:::exemple
$$A=5+2\times3^2=5+2\times9=5+18=23$$
$$B=(5+2)\times3^2=7\times9=63\qquad C=(2\times3)^2-4^2=36-16=20.$$
:::

# Exercices

:::exercice Écriture
1. Écrire sous forme de puissance : $7\times7\times7$ ; $(-5)\times(-5)\times(-5)\times(-5)$ ; $0{,}2\times0{,}2$.
2. Calculer : $3^4$ ; $2^6$ ; $5^3$ ; $0{,}1^3$ ; $1{,}5^2$ ; $9^0$ ; $13^1$.
:::

:::exercice Signe
1. Donner le signe de : $(-7)^4$ ; $(-2)^9$ ; $(-1)^{2026}$ ; $(-1)^{101}$ ; $-5^2$.
2. Calculer : $(-3)^3$ ; $(-0{,}5)^2$ ; $(-1)^{15}$ ; $-2^4$ ; $(-2)^4$.
:::

:::exercice Puissances de 10
1. Écrire en écriture décimale : $10^5$ ; $10^{-3}$ ; $2{,}7\times10^3$ ; $6\times10^{-2}$.
2. Donner l’écriture scientifique de : $380\,000$ ; $0{,}00071$ ; $52{,}4$ ; $0{,}9$.
:::

:::exercice Priorités
Calculer : $D=4\times2^3-5^2$ ; $E=(4-7)^2+1$ ; $F=10-3\times(-2)^2$ ; $G=\dfrac{6^2-2^2}{2^3}$.
:::

:::exercice Problème
Un cube a une arête de $4$ cm.
1. Calculer l’aire d’une face, puis l’aire totale du cube.
2. Calculer son volume. Que devient le volume si l’on double l’arête ?
:::

:::exercice Approfondissement — comparer des puissances
1. Comparer $2^{10}$ et $10^3$.
2. Calculer $(-1)^{1}+(-1)^{2}+(-1)^{3}+\cdots+(-1)^{2026}$.
3. Quel est le chiffre des unités de $3^{2026}$ ? (On pourra observer les chiffres des unités de $3^1$, $3^2$, $3^3$, $3^4$, $3^5$…)
:::

:::exercice Approfondissement — bactéries
Une population de bactéries double toutes les heures. À midi, il y en a $500$.
1. Combien y en aura-t-il à $17$ h ? Écrire le résultat avec une puissance de $2$.
2. Donner l’écriture scientifique de ce nombre.
3. Combien y en avait-il à $10$ h ?
:::

# Corrigés

:::corrige
1. $7^3$ ; $(-5)^4$ ; $0{,}2^2$.
2. $81$ ; $64$ ; $125$ ; $0{,}001$ ; $2{,}25$ ; $1$ ; $13$.
:::

:::corrige
1. Positif ; négatif ; positif ; négatif ; négatif ($-5^2=-25$).
2. $-27$ ; $0{,}25$ ; $-1$ ; $-16$ ; $16$.
:::

:::corrige
1. $100\,000$ ; $0{,}001$ ; $2\,700$ ; $0{,}06$.
2. $3{,}8\times10^5$ ; $7{,}1\times10^{-4}$ ; $5{,}24\times10^1$ ; $9\times10^{-1}$.
:::

:::corrige
- $D=4\times8-25=7$.
- $E=(-3)^2+1=10$.
- $F=10-3\times4=-2$.
- $G=\dfrac{36-4}{8}=4$.
:::

:::corrige
1. Une face : $4^2=16\ \text{cm}^2$ ; aire totale : $6\times16=96\ \text{cm}^2$.
2. $V=4^3=64\ \text{cm}^3$. Avec une arête de $8$ cm : $8^3=512\ \text{cm}^3$, soit $8$ fois plus ($2^3=8$).
:::

:::corrige
1. $2^{10}=1\,024>1\,000=10^3$.
2. Les termes valent alternativement $-1$ et $+1$ ; $2026$ termes forment $1013$ paires de somme nulle : la somme vaut $0$.
3. Chiffres des unités : $3$, $9$, $7$, $1$, puis le cycle recommence tous les $4$ exposants. $2026=4\times506+2$ : le chiffre des unités est celui de $3^2$, c’est $9$.
:::

:::corrige
1. Cinq doublements : $500\times2^5=16\,000$.
2. $1{,}6\times10^4$.
3. Deux heures avant : $500\div2^2=125$.
:::
