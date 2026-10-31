---
id: 2bac-probabilites
titre: Calcul des probabilités
niveau: 2bac
semestre: 2
duree: 18 heures
---

## Objectifs
- Dénombrer à l’aide du principe fondamental, des arrangements, des permutations et des combinaisons ; utiliser la formule du binôme.
- Modéliser une expérience aléatoire et calculer des probabilités (équiprobabilité, événements contraires, réunion).
- Calculer une probabilité conditionnelle ; utiliser l’indépendance et la formule des probabilités totales.
- Étudier une variable aléatoire : loi, espérance, variance, écart-type ; reconnaître une loi binomiale.

## Prérequis
- Ensembles : réunion, intersection, complémentaire.
- Calcul de sommes, puissances.
- Statistiques (moyenne, variance).

# I. Dénombrement

:::definition
Un ensemble $E$ est **fini** s’il a un nombre fini d’éléments ; ce nombre est son **cardinal**, noté $\mathrm{card}\,E$. Pour $A$ et $B$ finis : $\mathrm{card}(A\cup B)=\mathrm{card}A+\mathrm{card}B-\mathrm{card}(A\cap B)$.
:::

:::propriete Principe fondamental du dénombrement
Si une expérience se déroule en $p$ étapes successives, la première pouvant se réaliser de $n_1$ façons, la deuxième de $n_2$ façons, …, la $p$-ième de $n_p$ façons, alors l’expérience peut se réaliser de $n_1\times n_2\times\dots\times n_p$ façons.
:::

:::propriete Les modèles de tirage
On tire $p$ éléments parmi $n$ :
| Type de tirage | Ordre | Nombre de résultats |
|---|---|---|
| successif **avec remise** | compte | $n^p$ (arrangements avec répétition) |
| successif **sans remise** | compte | $A_n^p=n(n-1)\cdots(n-p+1)=\dfrac{n!}{(n-p)!}$ |
| **simultané** | ne compte pas | $C_n^p=\dfrac{A_n^p}{p!}=\dfrac{n!}{p!(n-p)!}$ |

Le nombre de **permutations** de $n$ éléments est $n!=n\times(n-1)\times\dots\times1$, avec $0!=1$.
:::

:::propriete Combinaisons
$C_n^0=C_n^n=1$ ; $C_n^1=n$ ; $C_n^p=C_n^{n-p}$ ; $C_n^p=C_{n-1}^{p-1}+C_{n-1}^p$ (triangle de Pascal).
:::

:::theoreme Formule du binôme de Newton
Pour tous réels $a$, $b$ et tout $n\in\mathbb N$ :
$$(a+b)^n=\sum_{k=0}^{n}C_n^ka^{n-k}b^k=C_n^0a^n+C_n^1a^{n-1}b+\dots+C_n^nb^n.$$
:::

:::exemple
- Code de $4$ chiffres : $10^4=10\,000$ possibilités.
- Podium de $3$ coureurs parmi $8$ : $A_8^3=8\times7\times6=336$.
- Comité de $3$ élèves parmi $10$ : $C_{10}^3=\dfrac{10\times9\times8}{6}=120$.
- $(1+x)^4=1+4x+6x^2+4x^3+x^4$.
:::

# II. Expériences aléatoires et probabilités

:::vocabulaire
- Une **expérience aléatoire** a des résultats possibles connus mais imprévisibles ; l’ensemble des résultats est l’**univers** $\Omega$.
- Un **événement** est une partie de $\Omega$ ; un événement **élémentaire** contient un seul résultat.
- $\varnothing$ est l’événement **impossible**, $\Omega$ l’événement **certain**.
- $A\cap B$ : « $A$ et $B$ » ; $A\cup B$ : « $A$ ou $B$ » ; $\bar A$ : événement **contraire** de $A$.
- $A$ et $B$ sont **incompatibles** si $A\cap B=\varnothing$.
:::

:::propriete
Une probabilité $p$ sur $\Omega$ vérifie : $0\le p(A)\le1$ ; $p(\Omega)=1$ ; $p(\varnothing)=0$ ;
$$p(\bar A)=1-p(A)\qquad p(A\cup B)=p(A)+p(B)-p(A\cap B).$$
:::

:::propriete Équiprobabilité
Si tous les résultats ont la même probabilité :
$$p(A)=\frac{\mathrm{card}\,A}{\mathrm{card}\,\Omega}=\frac{\text{nombre de cas favorables}}{\text{nombre de cas possibles}}.$$
:::

:::exemple
Une urne contient $5$ boules rouges et $3$ vertes. On tire simultanément $3$ boules. $\mathrm{card}\,\Omega=C_8^3=56$.
- $A$ : « exactement $2$ rouges » : $p(A)=\dfrac{C_5^2\times C_3^1}{56}=\dfrac{30}{56}=\dfrac{15}{28}$.
- $B$ : « au moins une verte » : $\bar B$ = « trois rouges », $p(\bar B)=\dfrac{C_5^3}{56}=\dfrac{10}{56}$, donc $p(B)=\dfrac{46}{56}=\dfrac{23}{28}$.
:::

# III. Probabilité conditionnelle et indépendance

:::definition
Soit $B$ un événement tel que $p(B)\ne0$. La **probabilité de $A$ sachant $B$** est
$$p_B(A)=p(A/B)=\frac{p(A\cap B)}{p(B)}.$$
D’où la **formule des probabilités composées** : $p(A\cap B)=p(B)\times p_B(A)$.
:::

:::theoreme Probabilités totales
Si $B_1$, …, $B_n$ forment une **partition** de $\Omega$ (deux à deux incompatibles, de réunion $\Omega$, de probabilités non nulles), alors
$$p(A)=p(B_1)p_{B_1}(A)+p(B_2)p_{B_2}(A)+\dots+p(B_n)p_{B_n}(A).$$
:::

:::definition
Deux événements $A$ et $B$ sont **indépendants** si $p(A\cap B)=p(A)\times p(B)$ (ce qui équivaut, si $p(B)\ne0$, à $p_B(A)=p(A)$).
:::

:::exemple Arbre pondéré
Une usine a deux machines : $M_1$ produit $60\,\%$ des pièces avec $2\,\%$ de défauts, $M_2$ produit $40\,\%$ avec $5\,\%$ de défauts. Soit $D$ : « la pièce est défectueuse ».
- $p(D)=0{,}6\times0{,}02+0{,}4\times0{,}05=0{,}012+0{,}02=0{,}032$.
- $p_D(M_2)=\dfrac{p(M_2\cap D)}{p(D)}=\dfrac{0{,}02}{0{,}032}=0{,}625$.
:::

# IV. Variables aléatoires

:::definition
Une **variable aléatoire** $X$ associe un réel à chaque résultat de l’expérience. Sa **loi de probabilité** est donnée par les valeurs $x_1$, …, $x_n$ prises par $X$ et les probabilités $p_i=p(X=x_i)$, avec $\sum p_i=1$.
- **Espérance** : $E(X)=\sum_{i=1}^np_ix_i$.
- **Variance** : $V(X)=\sum_{i=1}^np_i\left(x_i-E(X)\right)^2=E\left(X^2\right)-\left(E(X)\right)^2$.
- **Écart-type** : $\sigma(X)=\sqrt{V(X)}$.
:::

:::exemple
On tire simultanément $2$ boules d’une urne contenant $4$ blanches et $2$ noires ; $X$ est le nombre de noires. $\mathrm{card}\,\Omega=C_6^2=15$.
| $x_i$ | $0$ | $1$ | $2$ |
|---|---|---|---|
| $p(X=x_i)$ | $\dfrac{C_4^2}{15}=\dfrac6{15}$ | $\dfrac{C_4^1C_2^1}{15}=\dfrac8{15}$ | $\dfrac{C_2^2}{15}=\dfrac1{15}$ |

$E(X)=\dfrac{8+2}{15}=\dfrac23$ ; $E\left(X^2\right)=\dfrac{8+4}{15}=\dfrac45$ ; $V(X)=\dfrac45-\dfrac49=\dfrac{16}{45}$.
:::

# V. Loi binomiale

:::definition
On répète $n$ fois, de façon **indépendante**, une épreuve à deux issues : **succès** (probabilité $p$) ou **échec** (probabilité $1-p$). La variable aléatoire $X$ égale au **nombre de succès** suit la **loi binomiale** de paramètres $n$ et $p$, notée $\mathcal B(n;p)$.
:::

:::theoreme
Si $X$ suit $\mathcal B(n;p)$ : pour tout $k\in\{0;1;\dots;n\}$,
$$p(X=k)=C_n^kp^k(1-p)^{n-k},\qquad E(X)=np,\qquad V(X)=np(1-p).$$
:::

:::exemple
On lance $4$ fois une pièce équilibrée ; $X$ est le nombre de « pile » : $X$ suit $\mathcal B\left(4;\dfrac12\right)$.
- $p(X=2)=C_4^2\left(\dfrac12\right)^4=\dfrac6{16}=\dfrac38$.
- $p(X\ge1)=1-p(X=0)=1-\dfrac1{16}=\dfrac{15}{16}$.
- $E(X)=2$ et $V(X)=1$.
:::

```figure
{"type":"graph","x":[-0.5,4.5],"y":[-0.04,0.45],"width":330,
 "segments":[{"from":[0,0],"to":[0,0.0625],"color":"brand"},{"from":[1,0],"to":[1,0.25],"color":"brand"},{"from":[2,0],"to":[2,0.375],"color":"brand"},{"from":[3,0],"to":[3,0.25],"color":"brand"},{"from":[4,0],"to":[4,0.0625],"color":"brand"}],
 "points":[{"x":0,"y":0.0625,"label":"1/16"},{"x":1,"y":0.25,"label":"4/16"},{"x":2,"y":0.375,"label":"6/16"},{"x":3,"y":0.25,"label":"4/16"},{"x":4,"y":0.0625,"label":"1/16"}],
 "caption":"Loi de $X\\sim\\mathcal B\\left(4;\\tfrac12\\right)$ : diagramme en bâtons des probabilités."}
```

# Exercices

:::exercice Dénombrement
Une classe compte $12$ filles et $8$ garçons.
1. De combien de façons peut-on élire un président et un secrétaire (deux personnes distinctes) ?
2. De combien de façons peut-on choisir une délégation de $4$ élèves ? Avec exactement $2$ filles ?
:::

:::exercice Binôme
Développer $(2x-1)^4$ à l’aide de la formule du binôme.
:::

:::exercice Tirages
Une urne contient $4$ boules blanches et $2$ noires. On tire successivement et **avec remise** $3$ boules.
1. Calculer la probabilité d’obtenir $3$ boules blanches.
2. Calculer la probabilité d’obtenir au moins une boule noire.
3. Soit $X$ le nombre de boules noires obtenues. Justifier que $X$ suit une loi binomiale et calculer $E(X)$.
:::

:::exercice Conditionnelle
Dans une population, $30\,\%$ des personnes sont vaccinées. Parmi les vaccinées, $10\,\%$ tombent malades ; parmi les non vaccinées, $40\,\%$ tombent malades.
1. Calculer la probabilité qu’une personne tombe malade.
2. Une personne est malade : quelle est la probabilité qu’elle soit vaccinée ?
:::

:::exercice Jeu
Un joueur lance un dé équilibré. S’il obtient $6$, il gagne $10$ DH ; s’il obtient $4$ ou $5$, il gagne $2$ DH ; sinon il perd $3$ DH. Soit $G$ le gain algébrique. Déterminer la loi de $G$, son espérance, et dire si le jeu est favorable au joueur.
:::

:::exercice Série — tirage sans remise
Une urne contient $4$ boules rouges et $3$ boules vertes. On tire simultanément $3$ boules.
1. Calculer la probabilité d’obtenir exactement $2$ boules rouges.
2. Calculer la probabilité d’obtenir au moins une boule verte.
:::

:::exercice Série — loi binomiale
On lance $5$ fois un dé équilibré. $X$ est le nombre de « $6$ » obtenus.
1. Quelle est la loi de $X$ ? Calculer $P(X=2)$.
2. Calculer $E(X)$ et $P(X\ge1)$.
:::

:::exercice Approfondissement — probabilités conditionnelles
Dans un lycée, $60\,\%$ des élèves sont en filière PC et $40\,\%$ en SVT. $70\,\%$ des élèves de PC et $55\,\%$ des élèves de SVT ont la moyenne en mathématiques.
1. Calculer la probabilité qu’un élève choisi au hasard ait la moyenne.
2. Un élève a la moyenne : quelle est la probabilité qu’il soit en SVT ?
:::

:::exercice Approfondissement — variable aléatoire et jeu
Une urne contient $3$ boules blanches et $2$ noires. On tire successivement sans remise deux boules. On gagne $10$ DH par boule blanche et on perd $15$ DH par boule noire. $X$ est le gain algébrique.
1. Déterminer la loi de $X$.
2. Calculer $E(X)$. Le jeu est-il favorable ?
:::

:::exercice Série d’entraînement — dénombrement
1. Calculer $\binom{8}{3}$, $A_6^2$ et $5!$.
2. Combien de codes de $4$ chiffres (de $0$ à $9$) existe-t-il ? avec des chiffres tous différents ?
3. De combien de façons peut-on choisir un comité de $3$ élèves parmi $10$ ?
:::

:::exercice Série d’entraînement — probabilités conditionnelles
Dans une classe, $40\,\%$ des élèves font du sport ; parmi eux, $75\,\%$ ont la moyenne ; parmi ceux qui ne font pas de sport, $50\,\%$ ont la moyenne.
1. Calculer la probabilité qu’un élève ait la moyenne.
2. Sachant qu’un élève a la moyenne, quelle est la probabilité qu’il fasse du sport ?
3. Les événements « faire du sport » et « avoir la moyenne » sont-ils indépendants ?
:::

:::exercice Série d’entraînement — loi binomiale
Un tireur atteint sa cible avec la probabilité $0{,}8$. Il tire $4$ fois de façon indépendante ; $X$ est le nombre de tirs réussis.
1. Calculer $p(X=4)$ et $p(X=2)$.
2. Calculer $E(X)$ et $V(X)$.
:::

# Corrigés

:::corrige
1. $A_{20}^2=20\times19=380$.
2. $C_{20}^4=4845$ ; avec exactement $2$ filles : $C_{12}^2\times C_8^2=66\times28=1848$.
:::

:::corrige
$(2x-1)^4=16x^4-32x^3+24x^2-8x+1$.
:::

:::corrige
1. $\left(\dfrac46\right)^3=\left(\dfrac23\right)^3=\dfrac8{27}$.
2. $1-\dfrac8{27}=\dfrac{19}{27}$.
3. On répète $3$ fois de façon indépendante l’épreuve « tirer une noire » de probabilité $\dfrac13$ : $X\sim\mathcal B\left(3;\dfrac13\right)$ et $E(X)=1$.
:::

:::corrige
1. $p(M)=0{,}3\times0{,}1+0{,}7\times0{,}4=0{,}03+0{,}28=0{,}31$.
2. $p_M(V)=\dfrac{0{,}03}{0{,}31}=\dfrac3{31}\approx0{,}097$.
:::

:::corrige
| $g_i$ | $10$ | $2$ | $-3$ |
|---|---|---|---|
| $p(G=g_i)$ | $\dfrac16$ | $\dfrac26$ | $\dfrac36$ |

$E(G)=\dfrac{10+4-9}{6}=\dfrac56>0$ : le jeu est favorable au joueur (gain moyen de $0{,}83$ DH par partie environ).
:::

:::corrige
1. $\dfrac{\binom42\binom31}{\binom73}=\dfrac{6\times3}{35}=\dfrac{18}{35}$.
2. $1-\dfrac{\binom43}{\binom73}=1-\dfrac{4}{35}=\dfrac{31}{35}$.
:::

:::corrige
1. $X$ suit la loi binomiale $\mathcal B\left(5;\dfrac16\right)$ : $P(X=2)=\binom52\left(\dfrac16\right)^2\left(\dfrac56\right)^3=\dfrac{10\times125}{7776}=\dfrac{1250}{7776}\approx0{,}161$.
2. $E(X)=\dfrac56$ ; $P(X\ge1)=1-\left(\dfrac56\right)^5\approx0{,}598$.
:::

:::corrige
1. $P(M)=0{,}6\times0{,}7+0{,}4\times0{,}55=0{,}42+0{,}22=0{,}64$.
2. $P_M(\text{SVT})=\dfrac{0{,}22}{0{,}64}=\dfrac{11}{32}\approx0{,}34$.
:::

:::corrige
1. Deux blanches : $X=20$, $P=\dfrac35\times\dfrac24=\dfrac3{10}$ ; une de chaque : $X=-5$, $P=2\times\dfrac35\times\dfrac24=\dfrac6{10}$ ; deux noires : $X=-30$, $P=\dfrac25\times\dfrac14=\dfrac1{10}$.
2. $E(X)=\dfrac{60-30-30}{10}=0$ : le jeu est équitable.
:::

:::corrige
1. $\binom83=56$ ; $A_6^2=30$ ; $5!=120$.
2. $10^4=10\,000$ ; $A_{10}^4=5\,040$.
3. $\binom{10}3=120$.
:::

:::corrige
1. $0{,}4\times0{,}75+0{,}6\times0{,}5=0{,}3+0{,}3=0{,}6$.
2. $\dfrac{0{,}3}{0{,}6}=0{,}5$.
3. $p(S\cap M)=0{,}3$ et $p(S)p(M)=0{,}4\times0{,}6=0{,}24$ : ils ne sont pas indépendants.
:::

:::corrige
1. $p(X=4)=0{,}8^4=0{,}4096$ ; $p(X=2)=\binom42(0{,}8)^2(0{,}2)^2=6\times0{,}64\times0{,}04=0{,}1536$.
2. $E(X)=4\times0{,}8=3{,}2$ et $V(X)=4\times0{,}8\times0{,}2=0{,}64$.
:::
