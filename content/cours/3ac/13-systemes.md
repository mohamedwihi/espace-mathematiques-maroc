---
id: 3ac-systemes
titre: Systèmes de deux équations à deux inconnues
niveau: 3ac
semestre: 2
duree: 8 heures
---

## Objectifs
- Reconnaître un système de deux équations du premier degré à deux inconnues.
- Résoudre un système algébriquement (substitution, combinaison linéaire).
- Résoudre un système graphiquement.
- Résoudre un problème en le mettant en système.

## Prérequis
- Équations du premier degré à une inconnue.
- Équation réduite d’une droite.

# I. Système de deux équations du premier degré à deux inconnues

:::definition
Un **système de deux équations du premier degré à deux inconnues** $x$ et $y$ s’écrit
$$\begin{cases}ax+by=c\\a'x+b'y=c'\end{cases}$$
où $a$, $b$, $c$, $a'$, $b'$ et $c'$ sont des réels. Une **solution** du système est un couple $(x;y)$ qui vérifie **les deux équations à la fois**.
:::

:::exemple
Le couple $(2;1)$ est solution de $\begin{cases}x+y=3\\2x-y=3\end{cases}$ car $2+1=3$ et $4-1=3$. Le couple $(1;2)$ n’en est pas une : $2\times1-2=0\ne3$.
:::

# II. Résolution algébrique

## 1. Méthode par substitution

:::methode
1. Dans l’une des équations, exprimer une inconnue en fonction de l’autre (de préférence celle dont le coefficient vaut $1$ ou $-1$).
2. Remplacer (substituer) cette expression dans l’autre équation : on obtient une équation à une seule inconnue.
3. Résoudre cette équation, puis calculer l’autre inconnue.
4. Vérifier et conclure.
:::

:::exemple
$$\begin{cases}2x+y=7\\3x-2y=0\end{cases}$$
De la première équation : $y=7-2x$. On remplace dans la seconde : $3x-2(7-2x)=0$, soit $7x-14=0$ et $x=2$. Puis $y=7-4=3$.

Vérification : $4+3=7$ et $6-6=0$. Le couple solution est $(2;3)$.
:::

## 2. Méthode par combinaison linéaire

:::methode
1. Multiplier les équations par des nombres choisis pour que les coefficients d’une même inconnue soient **opposés**.
2. Additionner membre à membre : cette inconnue disparaît.
3. Résoudre l’équation obtenue, puis calculer l’autre inconnue.
:::

:::exemple
$$\begin{cases}3x+2y=12\\5x-3y=1\end{cases}$$
On multiplie la première équation par $3$ et la seconde par $2$ :
$$\begin{cases}9x+6y=36\\10x-6y=2\end{cases}$$
En additionnant : $19x=38$, donc $x=2$. Puis $3\times2+2y=12$ donne $y=3$. Le couple solution est $(2;3)$.
:::

# III. Résolution graphique

:::propriete
Chaque équation du système peut s’écrire $y=mx+p$ (si $b\ne0$) : elle représente une **droite**. Les solutions du système sont les coordonnées des points communs aux deux droites :
- droites **sécantes** : une solution unique (le point d’intersection) ;
- droites **strictement parallèles** : aucune solution ;
- droites **confondues** : une infinité de solutions.
:::

:::exemple
$\begin{cases}x+y=3\\2x-y=3\end{cases}$ s’écrit $\begin{cases}y=-x+3\\y=2x-3\end{cases}$. Les droites se coupent au point $(2;1)$ : le couple solution est $(2;1)$.
:::

```figure
{"type":"graph","x":[-1,5],"y":[-3,5],"width":320,"orthonormal":true,
 "functions":[{"fn":"-x+3","label":"y=-x+3","color":"brand"},{"fn":"2*x-3","label":"y=2x-3","color":"saffron"}],
 "points":[{"x":2,"y":1,"label":"(2;1)"}],
 "caption":"Le point d’intersection des deux droites donne la solution du système."}
```

:::remarque
La lecture graphique donne souvent une valeur **approchée** : on la confirme par une résolution algébrique.
:::

# IV. Résoudre un problème avec un système

:::methode
1. Choisir les deux inconnues.
2. Traduire l’énoncé par deux équations.
3. Résoudre le système.
4. Vérifier et rédiger la réponse.
:::

:::exemple
Au marché, $2$ kg d’oranges et $3$ kg de pommes coûtent $39$ DH ; $4$ kg d’oranges et $1$ kg de pommes coûtent $33$ DH. Soit $x$ le prix d’un kg d’oranges et $y$ celui d’un kg de pommes :
$$\begin{cases}2x+3y=39\\4x+y=33\end{cases}$$
De la seconde : $y=33-4x$. Alors $2x+3(33-4x)=39$, soit $-10x=-60$ et $x=6$, puis $y=9$. Le kg d’oranges coûte $6$ DH et le kg de pommes $9$ DH.
:::

# Exercices

:::exercice Substitution
Résoudre par substitution : $\begin{cases}x-2y=1\\3x+y=10\end{cases}$.
:::

:::exercice Combinaison
Résoudre par combinaison linéaire : $\begin{cases}2x+3y=8\\5x-2y=1\end{cases}$.
:::

:::exercice Nombre de solutions
Sans résoudre, dire combien de solutions a chaque système :
1. $\begin{cases}y=2x+1\\y=2x-3\end{cases}$ 2. $\begin{cases}x+y=4\\2x+2y=8\end{cases}$ 3. $\begin{cases}y=x\\y=-x+2\end{cases}$
:::

:::exercice Problème : billets
Dans une salle de cinéma, une place adulte coûte $40$ DH et une place enfant $25$ DH. On a vendu $120$ places pour une recette de $3900$ DH. Combien de places de chaque sorte a-t-on vendues ?
:::

:::exercice Problème : rectangle
Le périmètre d’un rectangle est $34$ cm. Si l’on augmente sa longueur de $3$ cm et que l’on diminue sa largeur de $2$ cm, son aire ne change pas. Calculer ses dimensions.
:::

# Corrigés

:::corrige
De la première : $x=1+2y$. Alors $3(1+2y)+y=10$, soit $7y=7$ et $y=1$, puis $x=3$. Solution : $(3;1)$.
:::

:::corrige
On multiplie la première par $2$ et la seconde par $3$ : $4x+6y=16$ et $15x-6y=3$. En additionnant : $19x=19$, $x=1$, puis $3y=6$ et $y=2$. Solution : $(1;2)$.
:::

:::corrige
1. Même coefficient directeur, ordonnées à l’origine différentes : droites parallèles, **aucune** solution.
2. La seconde équation est la première multipliée par $2$ : droites confondues, **une infinité** de solutions.
3. Coefficients $1$ et $-1$ différents : droites sécantes, **une** solution, $(1;1)$.
:::

:::corrige
Soient $a$ le nombre de places adultes et $e$ celui de places enfants : $\begin{cases}a+e=120\\40a+25e=3900\end{cases}$. De la première, $e=120-a$ ; alors $40a+3000-25a=3900$, $15a=900$, $a=60$ et $e=60$. On a vendu $60$ places adultes et $60$ places enfants.
:::

:::corrige
Soient $L$ et $\ell$ les dimensions : $L+\ell=17$ et $(L+3)(\ell-2)=L\ell$. La seconde donne $L\ell-2L+3\ell-6=L\ell$, soit $-2L+3\ell=6$. Avec $L=17-\ell$ : $-34+2\ell+3\ell=6$, $5\ell=40$, $\ell=8$ et $L=9$. Le rectangle mesure $9$ cm sur $8$ cm (vérification : $12\times6=72=9\times8$).
:::
