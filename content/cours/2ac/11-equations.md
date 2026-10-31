---
id: 2ac-equations
titre: Les équations
niveau: 2ac
semestre: 2
duree: 6 heures
---

## Objectifs
- Résoudre une équation du premier degré à une inconnue.
- Résoudre une équation produit $(ax+b)(cx+d)=0$.
- Reconnaître une équation sans solution ou ayant une infinité de solutions.
- Mettre en équation et résoudre un problème.

## Prérequis
- Calcul littéral : développement, factorisation, identités remarquables.
- Calcul sur les rationnels.

# I. Rappels

:::definition
Une **équation** à une inconnue $x$ est une égalité contenant $x$. Une **solution** est une valeur de $x$ qui rend l’égalité vraie. **Résoudre** l’équation, c’est trouver toutes ses solutions.
:::

:::propriete
- On peut ajouter (ou soustraire) un même nombre aux deux membres d’une équation.
- On peut multiplier (ou diviser) les deux membres par un même nombre **non nul**.

On obtient alors une équation qui a les mêmes solutions.
:::

# II. Équation du premier degré

:::definition
Une équation de la forme $ax+b=0$ (ou qui s’y ramène), où $a$ et $b$ sont des nombres donnés, est une **équation du premier degré** à une inconnue.
:::

:::methode
1. On développe et on réduit chaque membre.
2. On regroupe les termes en $x$ dans un membre et les constantes dans l’autre.
3. On isole $x$.
:::

:::exemple
- $3x-7=5x+9\iff3x-5x=9+7\iff-2x=16\iff x=-8$.
- $4(x-1)-3(2x+1)=5\iff4x-4-6x-3=5\iff-2x=12\iff x=-6$.
:::

:::exemple Avec des fractions
$\dfrac{x}{2}-\dfrac{x-1}{3}=1$ : on multiplie par $6$ : $3x-2(x-1)=6\iff3x-2x+2=6\iff x=4$.
:::

:::propriete Nombre de solutions de $ax=b$
- Si $a\ne0$ : une seule solution $x=\dfrac ba$.
- Si $a=0$ et $b\ne0$ : **aucune** solution.
- Si $a=0$ et $b=0$ : **tout** nombre est solution.
:::

:::exemple
- $2(x+3)=2x+1\iff0x=-5$ : aucune solution.
- $3(x-2)+6=3x\iff0x=0$ : tout nombre est solution.
:::

# III. Équation produit

:::propriete
Un produit de facteurs est nul si et seulement si l’un au moins de ses facteurs est nul :
$$A\times B=0\iff A=0\ \text{ou}\ B=0.$$
:::

:::exemple
$(x-3)(2x+5)=0\iff x-3=0\ \text{ou}\ 2x+5=0\iff x=3\ \text{ou}\ x=-\dfrac52$.
:::

:::methode Se ramener à une équation produit
On factorise d’abord :
- $x^2-5x=0\iff x(x-5)=0\iff x=0$ ou $x=5$ ;
- $x^2-9=0\iff(x-3)(x+3)=0\iff x=3$ ou $x=-3$.
:::

# IV. Mise en équation d’un problème

:::methode Étapes
1. Lire et bien comprendre le problème.
2. Choisir l’inconnue.
3. Mettre en équation.
4. Résoudre l’équation.
5. Interpréter le résultat et conclure.
6. Vérifier.
:::

:::exemple
Trois entiers consécutifs ont pour somme $72$. Lesquels ?
Soit $n$ le plus petit : $n+(n+1)+(n+2)=72\iff3n+3=72\iff n=23$. Les nombres sont $23$, $24$ et $25$.
:::

# Exercices

:::exercice Premier degré
Résoudre : $7x+4=3x-8$ ; $5-2(x-3)=x+2$ ; $3(2x-1)-(x+4)=2x+2$ ; $\dfrac{2x-1}{3}=\dfrac{x+2}{4}$.
:::

:::exercice Cas particuliers
Résoudre : $4x-3=2(2x+1)$ ; $5(x+2)-3=5x+7$ ; $(x+1)^2=x^2+3$.
:::

:::exercice Équations produits
Résoudre : $(x+4)(3x-6)=0$ ; $x(2x+7)=0$ ; $4x^2-25=0$ ; $x^2=6x$ ; $(x-1)^2=16$.
:::

:::exercice Problème : rectangle
La longueur d’un rectangle est le triple de sa largeur. Si l’on augmente la largeur de $4$ cm et qu’on diminue la longueur de $4$ cm, on obtient un carré. Calculer les dimensions du rectangle.
:::

:::exercice Problème : âges
Un père a $41$ ans et son fils $9$ ans. Dans combien d’années l’âge du père sera-t-il le triple de celui du fils ?
:::

:::exercice Approfondissement — problème des robinets
Un bassin se remplit en $4$ h avec un robinet A et en $6$ h avec un robinet B. On ouvre A seul pendant $1$ h, puis A et B ensemble. Au bout de combien de temps (au total) le bassin est-il plein ?
:::

:::exercice Approfondissement — équation produit cachée
Résoudre : $(2x+1)^2=(x-3)^2$ ; $x^2+5x=0$ ; $(x-2)(x+3)=(x-2)(2x-1)$.
:::

# Corrigés

:::corrige
- $4x=-12$ : $x=-3$.
- $5-2x+6=x+2\iff-3x=-9\iff x=3$.
- $6x-3-x-4=2x+2\iff3x=9\iff x=3$.
- $4(2x-1)=3(x+2)\iff8x-4=3x+6\iff5x=10\iff x=2$.
:::

:::corrige
- $4x-3=4x+2\iff0x=5$ : aucune solution.
- $5x+7=5x+7$ : tout nombre est solution.
- $x^2+2x+1=x^2+3\iff2x=2\iff x=1$.
:::

:::corrige
- $x=-4$ ou $x=2$.
- $x=0$ ou $x=-\dfrac72$.
- $(2x-5)(2x+5)=0$ : $x=\dfrac52$ ou $x=-\dfrac52$.
- $x(x-6)=0$ : $x=0$ ou $x=6$.
- $(x-1)^2-16=0\iff(x-5)(x+3)=0$ : $x=5$ ou $x=-3$.
:::

:::corrige
Soit $\ell$ la largeur ; longueur $3\ell$. $\ell+4=3\ell-4\iff2\ell=8\iff\ell=4$. Le rectangle mesure $4$ cm sur $12$ cm (le carré a pour côté $8$ cm).
:::

:::corrige
Dans $n$ années : $41+n=3(9+n)\iff41+n=27+3n\iff2n=14\iff n=7$. Dans $7$ ans (le père aura $48$ ans, le fils $16$).
:::

:::corrige
A remplit $\dfrac14$ par heure, B $\dfrac16$. Après $1$ h, il reste $\dfrac34$. Ensemble : $\dfrac14+\dfrac16=\dfrac5{12}$ par heure. Durée $t$ : $\dfrac5{12}t=\dfrac34$, $t=\dfrac95=1{,}8$ h. Total : $2{,}8$ h, soit $2$ h $48$ min.
:::

:::corrige
- $(2x+1-x+3)(2x+1+x-3)=0\iff(x+4)(3x-2)=0$ : $x=-4$ ou $x=\dfrac23$.
- $x(x+5)=0$ : $x=0$ ou $x=-5$.
- $(x-2)\left[(x+3)-(2x-1)\right]=0\iff(x-2)(-x+4)=0$ : $x=2$ ou $x=4$.
:::
