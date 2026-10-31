---
id: 1ac-developpement-factorisation
titre: Développement et factorisation
niveau: 1ac
semestre: 2
duree: 8 heures
---

## Objectifs
- Écrire et calculer une expression littérale pour une valeur donnée.
- Réduire une expression littérale.
- Développer avec la distributivité simple.
- Factoriser une expression avec un facteur commun.

## Prérequis
- Priorités opératoires ; nombres relatifs.
- Distributivité de la multiplication sur des nombres.

# I. Expressions littérales

:::definition
Une **expression littérale** est une expression dans laquelle un ou plusieurs nombres sont désignés par des **lettres**.
:::

:::exemple
- Le périmètre d’un rectangle de longueur $L$ et de largeur $\ell$ est $P=2\times(L+\ell)$.
- Yahya achète $x$ cahiers à $6$ DH et un sac à $85$ DH : il paie $6\times x+85$ DH.
:::

:::regle Conventions d’écriture
On peut supprimer le signe $\times$ devant une lettre ou une parenthèse : $6\times x=6x$, $a\times b=ab$, $3\times(x+2)=3(x+2)$.
On écrit $x\times x=x^2$ et $x\times x\times x=x^3$ ; $1x=x$.
:::

:::remarque
On ne supprime jamais le signe $\times$ entre deux nombres : $3\times5\ne35$.
:::

:::methode Calculer la valeur d’une expression
On remplace la lettre par sa valeur (en rétablissant les signes $\times$), puis on calcule.

Pour $x=4$ : $6x+85=6\times4+85=109$ ; pour $a=-2$ : $a^2-3a=(-2)^2-3\times(-2)=4+6=10$.
:::

# II. Réduire une expression

:::definition
**Réduire** une expression littérale, c’est l’écrire avec le moins de termes possible en regroupant les termes **semblables** (même partie littérale).
:::

:::regle
$$ax+bx=(a+b)x\qquad ax-bx=(a-b)x.$$
:::

:::exemple
- $5x+3x=8x$ ; $7a-9a=-2a$.
- $3x+4+2x-7=5x-3$.
- $2x^2+5x-x^2+x=x^2+6x$ (on ne peut pas ajouter $x^2$ et $x$).
- $4\times3y=12y$ ; $2a\times5a=10a^2$.
:::

# III. Développement

:::definition
**Développer** un produit, c’est le transformer en une somme (ou une différence).
:::

:::propriete Distributivité
Pour tous nombres $k$, $a$ et $b$ :
$$k(a+b)=ka+kb\qquad k(a-b)=ka-kb.$$
:::

```figure
{"type":"geometry","x":[-0.8,8.5],"y":[-0.8,3.8],"width":320,
 "polygons":[{"points":[[0,0],[5,0],[5,3],[0,3]],"color":"brand"},{"points":[[5,0],[8,0],[8,3],[5,3]],"color":"saffron"}],
 "points":[{"x":2.5,"y":-0.45,"label":"a","dot":false},{"x":6.5,"y":-0.45,"label":"b","dot":false},{"x":-0.4,"y":1.5,"label":"k","dot":false}],
 "caption":"Aire totale : $k(a+b)$ ou $ka+kb$."}
```

:::exemple
- $3(x+5)=3x+15$.
- $-2(4a-1)=-8a+2$.
- $x(x+7)=x^2+7x$.
- $A=4(2x-3)-5(x-2)=8x-12-5x+10=3x-2$.
:::

# IV. Factorisation

:::definition
**Factoriser** une somme (ou une différence), c’est la transformer en un produit, en mettant en évidence un **facteur commun**.
:::

:::propriete
$$ka+kb=k(a+b)\qquad ka-kb=k(a-b).$$
:::

:::exemple
- $7x+7y=7(x+y)$.
- $6a-15=3\times2a-3\times5=3(2a-5)$.
- $x^2+4x=x\times x+4\times x=x(x+4)$.
- $12y+8=4(3y+2)$.
:::

:::methode Vérifier une factorisation
On développe le résultat : on doit retrouver l’expression de départ. Ainsi $3(2a-5)=6a-15$.
:::

# Exercices

:::exercice Expressions littérales
1. Simplifier l’écriture : $5\times a$ ; $x\times y\times3$ ; $2\times(x+1)$ ; $b\times b$.
2. Calculer $E=3x^2-2x+1$ pour $x=2$, puis pour $x=-1$.
3. Écrire en fonction de $x$ le périmètre d’un carré de côté $x+3$ et l’aire d’un rectangle de longueur $2x$ et de largeur $5$.
:::

:::exercice Réduire
Réduire : $A=9x-4x+x$ ; $B=3a+5-a-8$ ; $C=4y^2-2y+y^2+7y$ ; $D=2x\times6$ ; $F=3t\times4t$.
:::

:::exercice Développer
Développer et réduire : $G=5(x+4)$ ; $H=-3(2y-6)$ ; $K=a(3a-2)$ ; $L=2(x+3)+4(x-1)$ ; $M=6(a-1)-2(3a-5)$.
:::

:::exercice Factoriser
Factoriser : $8x+8y$ ; $5a-20$ ; $9t+12$ ; $x^2-3x$ ; $14y-21$ ; $2a^2+6a$.
:::

:::exercice Aire de deux façons
Un rectangle a pour largeur $4$ et pour longueur $x+6$.
1. Exprimer son aire de deux façons (forme factorisée et forme développée).
2. Calculer cette aire pour $x=2{,}5$.
:::

:::exercice Approfondissement — programme de calcul
Programme : « Choisir un nombre ; lui ajouter $3$ ; multiplier le résultat par $4$ ; soustraire $12$ ; diviser par le nombre de départ. »
1. Appliquer le programme à $5$, puis à $-2$.
2. Démontrer que le résultat est toujours le même (pour un nombre de départ non nul).
:::

:::exercice Approfondissement — périmètre et aire
Un rectangle a pour largeur $x$ et pour longueur $2x+3$ (en cm).
1. Exprimer son périmètre $P$ et son aire $\mathcal A$ en fonction de $x$, sous forme réduite.
2. Calculer $P$ et $\mathcal A$ pour $x=2{,}5$.
3. Pour quelle valeur de $x$ le périmètre vaut-il $36$ cm ?
:::

# Corrigés

:::corrige
1. $5a$ ; $3xy$ ; $2(x+1)$ ; $b^2$.
2. Pour $x=2$ : $E=12-4+1=9$ ; pour $x=-1$ : $E=3+2+1=6$.
3. Périmètre : $4(x+3)=4x+12$ ; aire : $2x\times5=10x$.
:::

:::corrige
$A=6x$ ; $B=2a-3$ ; $C=5y^2+5y$ ; $D=12x$ ; $F=12t^2$.
:::

:::corrige
- $G=5x+20$ ; $H=-6y+18$ ; $K=3a^2-2a$.
- $L=2x+6+4x-4=6x+2$.
- $M=6a-6-6a+10=4$.
:::

:::corrige
$8(x+y)$ ; $5(a-4)$ ; $3(3t+4)$ ; $x(x-3)$ ; $7(2y-3)$ ; $2a(a+3)$.
:::

:::corrige
1. $\mathcal A=4(x+6)=4x+24$.
2. Pour $x=2{,}5$ : $4\times8{,}5=34$, ou $10+24=34$.
:::

:::corrige
1. $5\to8\to32\to20\to4$ ; $-2\to1\to4\to-8\to4$.
2. Avec $x$ : $\dfrac{4(x+3)-12}{x}=\dfrac{4x+12-12}{x}=\dfrac{4x}x=4$.
:::

:::corrige
1. $P=2(x+2x+3)=6x+6$ ; $\mathcal A=x(2x+3)=2x^2+3x$.
2. $P=21$ cm ; $\mathcal A=12{,}5+7{,}5=20\ \text{cm}^2$.
3. $6x+6=36\iff x=5$.
:::
