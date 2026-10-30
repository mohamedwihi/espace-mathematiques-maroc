---
id: tc-arithmetique
titre: Arithmétique dans ℕ
niveau: tc
semestre: 1
duree: 8 heures
---

## Objectifs
- Reconnaître les nombres pairs et impairs et utiliser leurs propriétés.
- Connaître et utiliser les critères de divisibilité.
- Reconnaître un nombre premier et décomposer un entier en produit de facteurs premiers.
- Déterminer les diviseurs d’un entier, le PGCD et le PPCM de deux entiers.

## Prérequis
- Les quatre opérations dans ℕ.
- Puissances d’un entier.
- Calcul littéral.

# I. Multiples et diviseurs

:::definition
Soient $a$ et $b$ deux entiers naturels avec $b\ne0$. On dit que $a$ est un **multiple** de $b$ (ou que $b$ est un **diviseur** de $a$, ou que $b$ **divise** $a$) s’il existe un entier naturel $k$ tel que $a=k\times b$. On note $b\mid a$.
:::

:::exemple
$36=4\times9$ : $36$ est un multiple de $4$ et de $9$ ; $4$ et $9$ sont des diviseurs de $36$. Les multiples de $7$ sont $0$, $7$, $14$, $21$, … ; ils s’écrivent $7k$ avec $k\in\mathbb N$.
:::

:::propriete
- $0$ est un multiple de tout entier ; $1$ divise tout entier.
- Si $c$ divise $a$ et $b$, alors $c$ divise $a+b$, $a-b$ (si $a\ge b$) et $\alpha a+\beta b$ pour tous entiers $\alpha$, $\beta$.
:::

# II. Nombres pairs et nombres impairs

:::definition
- Un entier naturel $n$ est **pair** s’il est multiple de $2$ : il s’écrit $n=2k$ avec $k\in\mathbb N$.
- Un entier naturel $n$ est **impair** s’il n’est pas pair : il s’écrit $n=2k+1$ avec $k\in\mathbb N$.
:::

:::propriete
| Opération | Résultat |
|---|---|
| pair $+$ pair | pair |
| impair $+$ impair | pair |
| pair $+$ impair | impair |
| pair $\times$ entier | pair |
| impair $\times$ impair | impair |

Le carré d’un nombre pair est pair ; le carré d’un nombre impair est impair.
:::

:::demonstration Exemples de preuves
- Si $a=2k+1$ et $b=2k'+1$, alors $a+b=2(k+k'+1)$ est pair.
- Si $a=2k+1$, alors $a^2=4k^2+4k+1=2(2k^2+2k)+1$ est impair.
:::

:::propriete
Pour tout entier naturel $n$, le produit $n(n+1)$ de deux entiers consécutifs est **pair**.
:::

:::demonstration
Si $n$ est pair, $n(n+1)$ est pair. Si $n$ est impair, $n+1$ est pair, donc $n(n+1)$ est pair.
:::

:::exemple
Montrer que pour tout $n\in\mathbb N$, $n^2+n+6$ est pair : $n^2+n+6=n(n+1)+6$, somme de deux nombres pairs.
:::

# III. Critères de divisibilité

:::propriete
Un entier naturel est divisible :
- par $2$ si son chiffre des unités est $0$, $2$, $4$, $6$ ou $8$ ;
- par $5$ si son chiffre des unités est $0$ ou $5$ ;
- par $10$ si son chiffre des unités est $0$ ;
- par $4$ si le nombre formé par ses deux derniers chiffres est divisible par $4$ ;
- par $3$ si la somme de ses chiffres est divisible par $3$ ;
- par $9$ si la somme de ses chiffres est divisible par $9$.
:::

:::exemple
$4\,716$ : divisible par $2$ (unité $6$), par $4$ ($16$ est divisible par $4$), par $3$ et par $9$ ($4+7+1+6=18$). Il n’est divisible ni par $5$ ni par $10$.
:::

# IV. Nombres premiers

:::definition
Un **nombre premier** est un entier naturel qui admet exactement deux diviseurs distincts : $1$ et lui-même.
:::

:::remarque
- $0$ et $1$ ne sont pas premiers. $2$ est le seul nombre premier pair.
- Les nombres premiers inférieurs à $50$ sont : $2$ ; $3$ ; $5$ ; $7$ ; $11$ ; $13$ ; $17$ ; $19$ ; $23$ ; $29$ ; $31$ ; $37$ ; $41$ ; $43$ ; $47$.
:::

:::methode Reconnaître un nombre premier
Pour savoir si $n\ge2$ est premier, on teste sa divisibilité par les nombres premiers $p$ tels que $p^2\le n$. Si aucun ne divise $n$, alors $n$ est premier.
:::

:::exemple
$127$ : on teste $2$, $3$, $5$, $7$, $11$ (car $13^2=169>127$). Aucun ne divise $127$ : $127$ est premier.
:::

# V. Décomposition en produit de facteurs premiers

:::propriete
Tout entier naturel $n\ge2$ s’écrit de façon unique (à l’ordre près) comme un produit de nombres premiers.
:::

:::methode
On divise successivement par les nombres premiers $2$, $3$, $5$, $7$, … tant que c’est possible.
:::

:::exemple
$$360=2\times180=2^2\times90=2^3\times45=2^3\times3\times15=2^3\times3^2\times5.$$
:::

# VI. Diviseurs, PGCD et PPCM

:::definition
- Le **PGCD** de deux entiers non nuls $a$ et $b$, noté $\mathrm{PGCD}(a;b)$ ou $a\wedge b$, est le plus grand de leurs diviseurs communs.
- Le **PPCM**, noté $\mathrm{PPCM}(a;b)$ ou $a\vee b$, est le plus petit de leurs multiples communs non nuls.
- Deux entiers sont **premiers entre eux** si leur PGCD est égal à $1$.
:::

:::propriete Calcul à l’aide des décompositions
- Le **PGCD** est le produit des facteurs premiers **communs**, chacun affecté du **plus petit** exposant.
- Le **PPCM** est le produit de **tous** les facteurs premiers, chacun affecté du **plus grand** exposant.
- Pour tous entiers non nuls $a$ et $b$ : $\mathrm{PGCD}(a;b)\times\mathrm{PPCM}(a;b)=a\times b$.
:::

:::exemple
$360=2^3\times3^2\times5$ et $84=2^2\times3\times7$.
- $\mathrm{PGCD}(360;84)=2^2\times3=12$.
- $\mathrm{PPCM}(360;84)=2^3\times3^2\times5\times7=2520$.
- Vérification : $12\times2520=30\,240=360\times84$.
:::

:::propriete Nombre de diviseurs
Si $n=p_1^{\alpha_1}\times p_2^{\alpha_2}\times\dots\times p_k^{\alpha_k}$, alors $n$ a $(\alpha_1+1)(\alpha_2+1)\cdots(\alpha_k+1)$ diviseurs.
:::

:::exemple
$360=2^3\times3^2\times5^1$ a $(3+1)(2+1)(1+1)=24$ diviseurs.
:::

:::methode Simplifier une fraction
On divise le numérateur et le dénominateur par leur PGCD : on obtient une fraction **irréductible**. Exemple : $\dfrac{84}{360}=\dfrac{84\div12}{360\div12}=\dfrac7{30}$.
:::

# Exercices

:::exercice Parité
Soit $n$ un entier naturel.
1. Montrer que si $n$ est impair, alors $n^2-1$ est multiple de $4$.
2. Étudier la parité de $3n^2+n$.
:::

:::exercice Critères
On considère le nombre $\overline{52x4}$ où $x$ est un chiffre. Déterminer $x$ pour que ce nombre soit divisible par $3$, puis par $9$.
:::

:::exercice Premier ou non ?
Les nombres $91$, $97$, $221$ et $251$ sont-ils premiers ?
:::

:::exercice PGCD et PPCM
Décomposer $252$ et $180$ en produits de facteurs premiers, puis calculer leur PGCD, leur PPCM et simplifier $\dfrac{180}{252}$.
:::

:::exercice Problème
On dispose de $120$ roses et de $84$ tulipes. On veut faire le plus grand nombre de bouquets identiques en utilisant toutes les fleurs. Combien de bouquets ? Quelle est la composition de chacun ?
:::

:::exercice Problème
Deux phares s’allument ensemble à minuit ; le premier s’allume toutes les $18$ secondes et le second toutes les $24$ secondes. Au bout de combien de secondes s’allumeront-ils de nouveau ensemble ?
:::

:::exercice Série — parité
Soit $n$ un entier naturel.
1. Montrer que $n^2+n$ est pair.
2. En déduire la parité de $n^2+3n+5$.
3. Montrer que $n^2$ et $n$ ont la même parité.
:::

:::exercice Série — nombre à deux chiffres
On note $\overline{xy}=10x+y$ un entier de deux chiffres ($x$ chiffre des dizaines, $y$ chiffre des unités).
1. Montrer que $\overline{xy}+\overline{yx}$ est divisible par $11$.
2. Montrer que $\overline{xy}-\overline{yx}$ est divisible par $9$ (lorsque $x\ge y$).
:::

# Corrigés

:::corrige
1. $n=2k+1$, donc $n^2-1=4k^2+4k=4(k^2+k)$ : c’est un multiple de $4$.
2. $3n^2+n=n(3n+1)$. Si $n$ est pair, le produit est pair ; si $n$ est impair, $3n+1$ est pair. Donc $3n^2+n$ est toujours pair.
:::

:::corrige
La somme des chiffres est $5+2+x+4=11+x$.
- Divisible par $3$ : $11+x\in\{12;15;18\}$, donc $x\in\{1;4;7\}$.
- Divisible par $9$ : $11+x=18$, donc $x=7$.
:::

:::corrige
- $91=7\times13$ : non premier.
- $97$ : non divisible par $2$, $3$, $5$, $7$ (et $11^2>97$) : premier.
- $221=13\times17$ : non premier.
- $251$ : non divisible par $2$, $3$, $5$, $7$, $11$, $13$ (et $17^2>251$) : premier.
:::

:::corrige
$252=2^2\times3^2\times7$ et $180=2^2\times3^2\times5$. $\mathrm{PGCD}=2^2\times3^2=36$ ; $\mathrm{PPCM}=2^2\times3^2\times5\times7=1260$. $\dfrac{180}{252}=\dfrac{180\div36}{252\div36}=\dfrac57$.
:::

:::corrige
Le nombre de bouquets divise $120$ et $84$ ; le plus grand est $\mathrm{PGCD}(120;84)=12$. Chaque bouquet contient $\dfrac{120}{12}=10$ roses et $\dfrac{84}{12}=7$ tulipes.
:::

:::corrige
$18=2\times3^2$ et $24=2^3\times3$, donc $\mathrm{PPCM}(18;24)=2^3\times3^2=72$. Ils s’allumeront ensemble après $72$ secondes.
:::

:::corrige
1. $n^2+n=n(n+1)$ est le produit de deux entiers consécutifs, dont l’un est pair : il est pair.
2. $n^2+3n+5=(n^2+n)+2n+4+1=2k+2(n+2)+1$ : il est impair.
3. $n^2-n=n(n-1)$ est pair, donc $n^2$ et $n$ ont la même parité.
:::

:::corrige
1. $\overline{xy}+\overline{yx}=10x+y+10y+x=11(x+y)$.
2. $\overline{xy}-\overline{yx}=9x-9y=9(x-y)$.
:::
