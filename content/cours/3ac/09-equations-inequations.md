---
id: 3ac-equations-inequations
titre: Équations et inéquations
niveau: 3ac
semestre: 2
duree: 10 heures
---

## Objectifs
- Résoudre une équation du premier degré à une inconnue, ou une équation qui s’y ramène.
- Résoudre une équation « produit nul ».
- Résoudre une inéquation du premier degré à une inconnue et représenter ses solutions sur une droite graduée.
- Mettre en équation un problème et le résoudre.

## Prérequis
- Développement, factorisation, identités remarquables.
- Propriétés de l’ordre.
- Équations du premier degré (2AC).

# I. Équations du premier degré à une inconnue

## 1. Vocabulaire

:::definition
Une **équation du premier degré à une inconnue** $x$ est une égalité qui peut s’écrire sous la forme $ax+b=cx+d$, où $a$, $b$, $c$ et $d$ sont des nombres réels.

Une **solution** de l’équation est une valeur de $x$ pour laquelle l’égalité est vraie. **Résoudre** l’équation, c’est trouver toutes ses solutions.
:::

:::exemple
$3$ est solution de $2x+1=x+4$ car $2\times3+1=7$ et $3+4=7$. En revanche $1$ n’est pas solution : $2\times1+1=3\ne5$.
:::

## 2. Résolution

:::propriete
On obtient une équation qui a les mêmes solutions :
- en **ajoutant** ou en **soustrayant** un même nombre aux deux membres ;
- en **multipliant** ou en **divisant** les deux membres par un même nombre **non nul**.
:::

:::methode
1. Développer et réduire chaque membre si nécessaire.
2. Regrouper les termes en $x$ dans un membre et les nombres dans l’autre.
3. Diviser par le coefficient de $x$.
4. Conclure : « la solution de l’équation est… ».
:::

:::exemple
$$5x-3=2x+9\iff5x-2x=9+3\iff3x=12\iff x=4.$$
La solution est $4$.
:::

:::exemple Avec des fractions
$$\frac{x}{2}+\frac{x-1}{3}=2.$$
On multiplie par $6$ : $3x+2(x-1)=12$, donc $5x-2=12$, $5x=14$ et $x=\dfrac{14}5$.
:::

:::propriete Nombre de solutions
L’équation $ax=b$ :
- si $a\ne0$, admet **une seule** solution $x=\dfrac ba$ ;
- si $a=0$ et $b\ne0$, n’admet **aucune** solution ;
- si $a=0$ et $b=0$, admet **une infinité** de solutions (tout réel est solution).
:::

:::exemple
$2(x+3)=2x+5$ donne $2x+6=2x+5$, soit $0x=-1$ : aucune solution.
:::

## 3. Équation produit nul

:::propriete
Un produit de facteurs est nul si et seulement si l’un au moins de ses facteurs est nul :
$$a\times b=0\iff a=0\ \text{ou}\ b=0.$$
:::

:::exemple
$$(2x-3)(x+5)=0\iff2x-3=0\ \text{ou}\ x+5=0\iff x=\frac32\ \text{ou}\ x=-5.$$
Les solutions sont $\dfrac32$ et $-5$.
:::

:::methode Se ramener à un produit nul
1. Tout ramener dans un membre pour obtenir « $\dots=0$ ».
2. Factoriser (facteur commun, identité remarquable).
3. Appliquer la propriété du produit nul.
:::

:::exemple
$$x^2=5x\iff x^2-5x=0\iff x(x-5)=0\iff x=0\ \text{ou}\ x=5.$$
$$4x^2-9=0\iff(2x-3)(2x+3)=0\iff x=\frac32\ \text{ou}\ x=-\frac32.$$
:::

# II. Inéquations du premier degré à une inconnue

## 1. Vocabulaire

:::definition
Une **inéquation** à une inconnue $x$ est une inégalité entre deux expressions contenant $x$ (avec l’un des symboles $<$, $>$, $\le$, $\ge$). Une **solution** est une valeur de $x$ qui vérifie l’inégalité. **Résoudre** l’inéquation, c’est trouver toutes ses solutions.
:::

## 2. Résolution

:::propriete
On obtient une inéquation qui a les mêmes solutions :
- en ajoutant ou en soustrayant un même nombre aux deux membres ;
- en multipliant ou en divisant les deux membres par un même nombre **strictement positif** ;
- en multipliant ou en divisant les deux membres par un même nombre **strictement négatif**, à condition de **changer le sens** de l’inégalité.
:::

:::exemple
$$-2x+1>7\iff-2x>6\iff x<\frac{6}{-2}\iff x<-3.$$
Les solutions sont tous les nombres strictement inférieurs à $-3$.
:::

```figure
{"type":"graph","x":[-7,3],"y":[-0.6,0.6],"width":420,
 "segments":[{"from":[-7,0],"to":[-3,0],"color":"brand"}],
 "points":[{"x":-3,"y":0,"label":"−3 (exclu)"}],
 "caption":"Représentation des solutions de $x<-3$ : la partie en vert de la droite graduée, sans le point $-3$."}
```

:::remarque
- Sur une droite graduée, on hachure (ou on colore) la partie qui contient les solutions ; un crochet tourné vers l’extérieur indique que la borne est **exclue** ($<$ ou $>$), tourné vers l’intérieur qu’elle est **incluse** ($\le$ ou $\ge$).
- On écrit aussi les solutions avec un intervalle : $x<-3$ correspond à $]-\infty;-3[$.
:::

:::exemple
$$3(x-2)\le5x+4\iff3x-6\le5x+4\iff-2x\le10\iff x\ge-5.$$
Les solutions sont les nombres supérieurs ou égaux à $-5$.
:::

# III. Mettre en équation un problème

:::methode Les cinq étapes
1. **Choix de l’inconnue** : préciser ce que représente $x$.
2. **Mise en équation** : traduire l’énoncé par une équation (ou une inéquation).
3. **Résolution**.
4. **Vérification** : la solution convient-elle à l’énoncé ?
5. **Conclusion** : répondre par une phrase.
:::

:::exemple
Déterminer deux entiers naturels consécutifs dont la somme est $2023$.

1. Soit $x$ le premier entier ; le suivant est $x+1$.
2. $x+(x+1)=2023$.
3. $2x+1=2023$, donc $2x=2022$ et $x=1011$.
4. $1011+1012=2023$.
5. Les deux entiers sont $1011$ et $1012$.
:::

:::exemple
Deux enfants ont ensemble $200$ DH ; l’un a $20$ DH de plus que l’autre. Soit $x$ la somme du premier : $x+(x+20)=200$, donc $2x=180$ et $x=90$. Les enfants ont $90$ DH et $110$ DH.
:::

# Exercices

:::exercice Équations
Résoudre : $7x-5=3x+11$ ; $4(x-2)=3(x+1)$ ; $\dfrac{2x-1}{3}=\dfrac{x+2}{2}$ ; $3x-(x+4)=2(x-1)$.
:::

:::exercice Produit nul
Résoudre : $(x-4)(3x+6)=0$ ; $x^2-16=0$ ; $(2x+1)^2=9$ ; $x^2+5x=0$ ; $(x-1)(x+2)-(x-1)(2x-3)=0$.
:::

:::exercice Inéquations
Résoudre et représenter les solutions : $2x-7\le3$ ; $5-3x>11$ ; $\dfrac{x}{2}-1\ge\dfrac{x+1}3$.
:::

:::exercice Trois entiers consécutifs
Existe-t-il trois entiers naturels consécutifs dont la somme est $2023$ ? Même question avec $2025$.
:::

:::exercice Kawtar et Hicham
Kawtar et Hicham choisissent le même nombre. Kawtar le multiplie par $10$ puis soustrait $2$ ; Hicham le multiplie par $8$ puis ajoute $7$. Ils obtiennent le même résultat. Quel nombre ont-ils choisi ?
:::

:::exercice Abonnement
Un club propose deux tarifs : tarif A, $25$ DH par séance ; tarif B, abonnement de $150$ DH plus $15$ DH par séance. À partir de combien de séances le tarif B est-il plus avantageux ?
:::

# Corrigés

:::corrige
- $4x=16$, $x=4$.
- $4x-8=3x+3$, $x=11$.
- On multiplie par $6$ : $2(2x-1)=3(x+2)$, $4x-2=3x+6$, $x=8$.
- $2x-4=2x-2$, soit $0x=2$ : aucune solution.
:::

:::corrige
- $x=4$ ou $x=-2$.
- $(x-4)(x+4)=0$ : $x=4$ ou $x=-4$.
- $(2x+1)^2-9=0$ : $(2x+1-3)(2x+1+3)=0$, soit $(2x-2)(2x+4)=0$ : $x=1$ ou $x=-2$.
- $x(x+5)=0$ : $x=0$ ou $x=-5$.
- $(x-1)\left[(x+2)-(2x-3)\right]=0$, soit $(x-1)(-x+5)=0$ : $x=1$ ou $x=5$.
:::

:::corrige
- $2x\le10$, donc $x\le5$.
- $-3x>6$, donc $x<-2$ (on change le sens en divisant par $-3$).
- On multiplie par $6$ : $3x-6\ge2x+2$, donc $x\ge8$.
:::

:::corrige
- $x+(x+1)+(x+2)=2023$ donne $3x=2020$ : $x$ n’est pas entier, donc c’est impossible.
- $3x+3=2025$ donne $x=674$ : les entiers sont $674$, $675$ et $676$.
:::

:::corrige
$10x-2=8x+7$, donc $2x=9$ et $x=4{,}5$. Vérification : $10\times4{,}5-2=43$ et $8\times4{,}5+7=43$. Le nombre choisi est $4{,}5$.
:::

:::corrige
Soit $n$ le nombre de séances. Le tarif B est plus avantageux si $150+15n<25n$, soit $150<10n$ et $n>15$. Le tarif B est plus avantageux à partir de $16$ séances.
:::
