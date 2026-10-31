---
id: 3ac-statistique
titre: Statistique
niveau: 3ac
semestre: 2
duree: 8 heures
---

## Objectifs
- Connaître le vocabulaire de la statistique et organiser des données dans un tableau.
- Calculer des effectifs cumulés, des fréquences et des fréquences cumulées.
- Représenter une série par un diagramme adapté.
- Calculer et interpréter la moyenne, la médiane, le mode et l’étendue d’une série.

## Prérequis
- Pourcentages et proportionnalité.
- Calculs sur les nombres décimaux.
- Lecture de graphiques.

# I. Vocabulaire

:::vocabulaire
- La **population** est l’ensemble étudié ; chaque élément est un **individu**.
- Le **caractère** (ou variable statistique) est la propriété étudiée. Il est **quantitatif** s’il se mesure par un nombre (note, taille…), **qualitatif** sinon (couleur, sport préféré…).
- Les **valeurs** (ou modalités) sont les résultats possibles du caractère.
- L’**effectif** d’une valeur est le nombre d’individus qui ont cette valeur ; l’**effectif total** $N$ est le nombre total d’individus.
- La **fréquence** d’une valeur est $f=\dfrac{\text{effectif}}{N}$ ; elle peut s’écrire en pourcentage.
- L’**effectif cumulé croissant** d’une valeur est la somme des effectifs des valeurs inférieures ou égales à celle-ci.
:::

:::exemple
Notes de $20$ élèves à un devoir :
| Note $x_i$ | $8$ | $10$ | $12$ | $14$ | $16$ |
|---|---|---|---|---|---|
| Effectif $n_i$ | $2$ | $5$ | $6$ | $4$ | $3$ |
| Effectif cumulé | $2$ | $7$ | $13$ | $17$ | $20$ |
| Fréquence | $10\,\%$ | $25\,\%$ | $30\,\%$ | $20\,\%$ | $15\,\%$ |

La somme des fréquences est égale à $1$ (soit $100\,\%$).
:::

# II. Les diagrammes

:::propriete Choisir un diagramme
- **Diagramme en bâtons** : pour un caractère quantitatif discret ; la hauteur de chaque bâton est proportionnelle à l’effectif.
- **Diagramme à barres** : même principe, avec des barres (souvent pour un caractère qualitatif).
- **Diagramme en ligne brisée** : on relie les sommets des bâtons ; utile pour suivre une évolution.
- **Diagramme circulaire** : chaque secteur a un angle proportionnel à l’effectif : $\text{angle}=\dfrac{n_i}{N}\times360^\circ$.
:::

```figure
{"type":"graph","x":[6,18],"y":[0,7],"width":360,
 "segments":[{"from":[8,0],"to":[8,2],"color":"brand"},{"from":[10,0],"to":[10,5],"color":"brand"},{"from":[12,0],"to":[12,6],"color":"brand"},{"from":[14,0],"to":[14,4],"color":"brand"},{"from":[16,0],"to":[16,3],"color":"brand"},
   {"from":[8,2],"to":[10,5],"dashed":true},{"from":[10,5],"to":[12,6],"dashed":true},{"from":[12,6],"to":[14,4],"dashed":true},{"from":[14,4],"to":[16,3],"dashed":true}],
 "points":[{"x":8,"y":2},{"x":10,"y":5},{"x":12,"y":6},{"x":14,"y":4},{"x":16,"y":3}],
 "caption":"Diagramme en bâtons des notes (en vert) et ligne brisée des effectifs (en pointillés)."}
```

:::exemple Diagramme circulaire
Pour la note $12$ (effectif $6$ sur $20$) : angle $=\dfrac6{20}\times360^\circ=108^\circ$. De même : $8\to36^\circ$ ; $10\to90^\circ$ ; $14\to72^\circ$ ; $16\to54^\circ$ (total $360^\circ$).
:::

# III. Paramètres de position

## 1. La moyenne arithmétique

:::definition
La **moyenne** d’une série de valeurs $x_1$, $x_2$, …, $x_p$ d’effectifs $n_1$, $n_2$, …, $n_p$ est
$$\bar x=\frac{n_1x_1+n_2x_2+\dots+n_px_p}{N}\qquad\text{où }N=n_1+n_2+\dots+n_p.$$
:::

:::exemple
Pour les notes : $\bar x=\dfrac{2\times8+5\times10+6\times12+4\times14+3\times16}{20}=\dfrac{16+50+72+56+48}{20}=\dfrac{242}{20}=12{,}1$.
:::

## 2. La médiane

:::definition
La **médiane** $Me$ d’une série **rangée dans l’ordre croissant** est la valeur qui partage la série en deux groupes de même effectif : au moins la moitié des valeurs lui sont inférieures ou égales, et au moins la moitié lui sont supérieures ou égales.
:::

:::methode
On range les $N$ valeurs dans l’ordre croissant.
- Si $N$ est **impair**, la médiane est la valeur de rang $\dfrac{N+1}2$.
- Si $N$ est **pair**, la médiane est la moyenne des valeurs de rangs $\dfrac N2$ et $\dfrac N2+1$.

Avec un tableau, on utilise les **effectifs cumulés** pour repérer ces rangs.
:::

:::exemple
- Série $3$ ; $5$ ; $7$ ; $8$ ; $12$ ($N=5$) : la médiane est la $3^{\text{e}}$ valeur, $Me=7$.
- Série $2$ ; $4$ ; $6$ ; $9$ ; $11$ ; $15$ ($N=6$) : $Me=\dfrac{6+9}2=7{,}5$.
- Notes ($N=20$) : on cherche les $10^{\text{e}}$ et $11^{\text{e}}$ valeurs. D’après les effectifs cumulés ($7$ puis $13$), ce sont deux $12$ : $Me=12$.
:::

## 3. Le mode

:::definition
Le **mode** d’une série est la valeur qui a le **plus grand effectif**. Une série peut avoir plusieurs modes.
:::

:::exemple
Pour les notes, le mode est $12$ (effectif $6$).
:::

# IV. La dispersion

:::definition
L’**étendue** d’une série est la différence entre sa plus grande valeur et sa plus petite valeur. Elle mesure la **dispersion** des valeurs.
:::

:::exemple
Pour les notes : étendue $=16-8=8$.

Deux classes ont la même moyenne $12$ ; l’une a pour étendue $4$ et l’autre $14$ : les notes de la seconde sont beaucoup plus dispersées.
:::

:::remarque
La moyenne est sensible aux valeurs extrêmes, la médiane ne l’est pas. Pour la série $5$ ; $6$ ; $6$ ; $7$ ; $46$ : la moyenne vaut $14$ mais la médiane vaut $6$, plus représentative de la plupart des valeurs.
:::

# Exercices

:::exercice Tableau complet
On a relevé la pointure de $25$ élèves :
| Pointure | $37$ | $38$ | $39$ | $40$ | $41$ | $42$ |
|---|---|---|---|---|---|---|
| Effectif | $2$ | $4$ | $7$ | $6$ | $4$ | $2$ |

1. Calculer les effectifs cumulés et les fréquences (en %).
2. Calculer la moyenne (arrondie au dixième), la médiane, le mode et l’étendue.
:::

:::exercice Médiane
Déterminer la médiane de chaque série : $A$ : $12$ ; $7$ ; $15$ ; $9$ ; $10$ ; $14$ ; $8$. $B$ : $3$ ; $8$ ; $1$ ; $6$ ; $4$ ; $9$.
:::

:::exercice Note manquante
Les notes de Youssef sont $11$, $14$, $9$ et $x$. Sa moyenne est $12$. Calculer $x$.
:::

:::exercice Diagramme circulaire
Dans un collège de $400$ élèves, $160$ pratiquent le football, $100$ le basket, $80$ l’athlétisme et le reste la natation. Calculer les angles des secteurs du diagramme circulaire.
:::

:::exercice Série — notes d’une classe
Les notes d’un devoir dans une classe sont :
| Note | $6$ | $8$ | $10$ | $12$ | $14$ | $16$ |
|---|---|---|---|---|---|---|
| Effectif | $2$ | $5$ | $8$ | $6$ | $3$ | $1$ |
1. Calculer l’effectif total et la moyenne (au centième).
2. Déterminer le mode et la médiane.
3. Calculer le pourcentage des élèves ayant au moins $12$.
:::

:::exercice Série — moyenne pondérée
Un élève a obtenu $13$ en mathématiques (coefficient $4$), $11$ en physique (coefficient $3$) et $15$ en français (coefficient $2$). Quelle note doit-il obtenir en anglais (coefficient $1$) pour avoir une moyenne de $13$ ?
:::

:::exercice Approfondissement — retrouver une donnée manquante
Les notes d’un groupe sont : $8$ (effectif $3$), $11$ (effectif $x$), $14$ (effectif $4$), $17$ (effectif $1$). La moyenne est $12$.
1. Montrer que $x$ vérifie $24+11x+56+17=12(8+x)$.
2. En déduire $x$, puis la médiane.
:::

:::exercice Approfondissement — moyennes de deux classes
La classe A ($24$ élèves) a une moyenne de $11{,}5$ et la classe B ($30$ élèves) une moyenne de $13$.
1. Calculer la moyenne de l’ensemble des deux classes.
2. Est-ce la moyenne de $11{,}5$ et $13$ ? Expliquer.
:::

# Corrigés

:::corrige
1. Effectifs cumulés : $2$ ; $6$ ; $13$ ; $19$ ; $23$ ; $25$. Fréquences : $8\,\%$ ; $16\,\%$ ; $28\,\%$ ; $24\,\%$ ; $16\,\%$ ; $8\,\%$.
2. $\bar x=\dfrac{74+152+273+240+164+84}{25}=\dfrac{987}{25}=39{,}48\approx39{,}5$. $N=25$ est impair : la médiane est la $13^{\text{e}}$ valeur, soit $39$. Le mode est $39$. L’étendue est $42-37=5$.
:::

:::corrige
- $A$ rangée : $7$ ; $8$ ; $9$ ; $10$ ; $12$ ; $14$ ; $15$ ($N=7$) : $Me=10$.
- $B$ rangée : $1$ ; $3$ ; $4$ ; $6$ ; $8$ ; $9$ ($N=6$) : $Me=\dfrac{4+6}2=5$.
:::

:::corrige
$\dfrac{11+14+9+x}4=12$, donc $34+x=48$ et $x=14$.
:::

:::corrige
Natation : $400-160-100-80=60$ élèves. Angles : football $\dfrac{160}{400}\times360^\circ=144^\circ$ ; basket $90^\circ$ ; athlétisme $72^\circ$ ; natation $54^\circ$. Total : $360^\circ$.
:::

:::corrige
1. $N=25$ ; $\bar x=\dfrac{12+40+80+72+42+16}{25}=\dfrac{262}{25}=10{,}48$.
2. Mode : $10$. Médiane : la $13^{\text{e}}$ valeur ; les effectifs cumulés sont $2$, $7$, $15$… donc la médiane est $10$.
3. $6+3+1=10$ élèves, soit $\dfrac{10}{25}=40\,\%$.
:::

:::corrige
$\dfrac{13\times4+11\times3+15\times2+x}{10}=13\iff115+x=130\iff x=15$.
:::

:::corrige
1. Effectif total $8+x$ et somme des notes $24+11x+56+17$.
2. $97+11x=96+12x\iff x=1$. Série ordonnée : $8$ ; $8$ ; $8$ ; $11$ ; $14$ ; $14$ ; $14$ ; $14$ ; $17$ ($9$ notes) : la médiane est la $5^{\text{e}}$ valeur, $14$.
:::

:::corrige
1. $\dfrac{24\times11{,}5+30\times13}{54}=\dfrac{276+390}{54}=\dfrac{666}{54}\approx12{,}33$.
2. Non ($12{,}25$) : les classes n’ont pas le même effectif, il faut pondérer.
:::
