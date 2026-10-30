---
id: 3ac-ordre-operations
titre: Ordre et opérations
niveau: 3ac
semestre: 1
duree: 12 heures
---

## Objectifs
- Comparer deux nombres réels.
- Connaître et utiliser les propriétés de l’ordre avec l’addition, la multiplication, l’inverse, le carré et la racine carrée.
- Écrire et exploiter un encadrement.
- Utiliser les propriétés de l’ordre pour résoudre des problèmes.

## Prérequis
- Comparaison de deux nombres rationnels.
- Opérations sur les nombres réels.
- Racines carrées.

# I. Comparaison de deux nombres réels

:::propriete
Soient $a$ et $b$ deux nombres réels.
- Si $a-b<0$, alors $a<b$.
- Si $a-b>0$, alors $a>b$.
- Si $a-b=0$, alors $a=b$.

Pour comparer deux nombres, on peut donc étudier le **signe de leur différence**.
:::

:::exemple
Comparer $\dfrac35$ et $\dfrac67$ : $\dfrac35-\dfrac67=\dfrac{21}{35}-\dfrac{30}{35}=-\dfrac9{35}<0$, donc $\dfrac35<\dfrac67$.
:::

:::exemple
Comparer $a=3-\sqrt5$ et $b=3-\sqrt6$ : $a-b=\sqrt6-\sqrt5>0$ (car $6>5$), donc $a>b$.
:::

# II. Ordre et opérations

## 1. Ordre et addition, ordre et soustraction

:::propriete
Soient $a$, $b$ et $c$ trois nombres réels. Si $a<b$, alors :
$$a+c<b+c\qquad\text{et}\qquad a-c<b-c.$$
On peut ajouter ou soustraire un même nombre aux deux membres d’une inégalité **sans changer son sens**.
:::

:::demonstration
$(a+c)-(b+c)=a-b<0$, donc $a+c<b+c$. De même, $(a-c)-(b-c)=a-b<0$.
:::

:::propriete Somme membre à membre
Soient $a$, $b$, $c$ et $d$ des réels. Si $a<b$ et $c<d$, alors $a+c<b+d$.
:::

:::exemple
Si $a<4$ et $b<3$, alors $a+b<7$. Si $x>3$, alors $x-5>-2$.
:::

## 2. Ordre et multiplication

:::propriete
Soient $a$, $b$ et $c$ des nombres réels avec $a<b$.
- Si $c>0$, alors $ac<bc$ : **le sens est conservé**.
- Si $c<0$, alors $ac>bc$ : **le sens est inversé**.
:::

:::remarque
En particulier, si $a<b$ alors $-a>-b$ (multiplication par $-1$). Diviser par $c\neq0$, c’est multiplier par $\dfrac1c$ : la même règle s’applique.
:::

:::exemple
Si $x<3$, alors $-4x>-12$. Si $x\ge-2$, alors $\dfrac x2\ge-1$.
:::

:::propriete Produit membre à membre (nombres positifs)
Soient $a$, $b$, $c$ et $d$ des réels **positifs**. Si $a<b$ et $c<d$, alors $ac<bd$.
:::

:::exemple
Soient $x$ et $y$ positifs avec $x<3$ et $y<2\sqrt6$. Alors $xy<3\times2\sqrt6=6\sqrt6$.
:::

## 3. Ordre et inverse

:::propriete
Soient $a$ et $b$ deux nombres réels **de même signe** et non nuls. Si $a<b$, alors $\dfrac1a>\dfrac1b$.
:::

:::exemple
$2<8$, donc $\dfrac12>\dfrac18$. De même $-10<-5$, donc $-\dfrac1{10}>-\dfrac15$.
:::

## 4. Ordre et carré, ordre et racine carrée

:::propriete
Soient $a$ et $b$ deux nombres réels **positifs**.
- $a<b$ équivaut à $a^2<b^2$.
- $a<b$ équivaut à $\sqrt a<\sqrt b$.
:::

:::exemple
Comparer $2\sqrt7$ et $3\sqrt3$ : ces nombres sont positifs, $\left(2\sqrt7\right)^2=28$ et $\left(3\sqrt3\right)^2=27$. Comme $28>27$, on a $2\sqrt7>3\sqrt3$.
:::

:::remarque
Pour les nombres **négatifs**, le carré inverse l’ordre : $-5<-3$ mais $(-5)^2=25>(-3)^2=9$.
:::

# III. Encadrement

:::definition
**Encadrer** un nombre $x$, c’est trouver deux nombres $a$ et $b$ tels que $a\le x\le b$. Le nombre $b-a$ s’appelle l’**amplitude** de l’encadrement.
:::

:::exemple
$1{,}41<\sqrt2<1{,}42$ est un encadrement de $\sqrt2$ d’amplitude $0{,}01$.
:::

:::propriete Opérations sur les encadrements
Si $a\le x\le b$ et $c\le y\le d$, alors :
| Opération | Encadrement obtenu |
|---|---|
| Somme | $a+c\le x+y\le b+d$ |
| Opposé | $-b\le -x\le -a$ |
| Différence | $a-d\le x-y\le b-c$ |
| Produit ($a$, $c$ positifs) | $ac\le xy\le bd$ |
| Inverse ($a>0$) | $\dfrac1b\le\dfrac1x\le\dfrac1a$ |
| Carré ($a\ge0$) | $a^2\le x^2\le b^2$ |
| Racine ($a\ge0$) | $\sqrt a\le\sqrt x\le\sqrt b$ |
:::

:::methode Encadrer une différence
Pour encadrer $x-y$, on écrit $x-y=x+(-y)$ : on encadre d’abord $-y$ (en inversant l’encadrement de $y$), puis on additionne membre à membre.
:::

:::exemple
On donne $2\le x\le3$ et $1\le y\le4$.
- $x+y$ : $3\le x+y\le7$.
- $-y$ : $-4\le-y\le-1$, donc $x-y$ : $-2\le x-y\le2$.
- $xy$ : $2\le xy\le12$.
- $\dfrac1x$ : $\dfrac13\le\dfrac1x\le\dfrac12$.
- $2x-3y$ : $4\le2x\le6$ et $-12\le-3y\le-3$, donc $-8\le2x-3y\le3$.
:::

# Exercices

:::exercice Comparer
Comparer : $a=\dfrac47$ et $b=\dfrac56$ ; $c=3-\sqrt{4}$ et $d=3-\sqrt5$ ; $e=-3\sqrt2-1$ et $f=\sqrt2+7$.
:::

:::exercice Compléter
Sachant que $x>6$, compléter : $x+7>\dots$ ; $x-4>\dots$ ; $3x>\dots$ ; $-2x<\dots$ ; $\dfrac x2>\dots$.
:::

:::exercice Carrés et racines
Comparer sans calculatrice : $5\sqrt2$ et $4\sqrt3$ ; $\sqrt{10}$ et $3$ ; $\dfrac1{\sqrt7}$ et $\dfrac1{\sqrt5}$.
:::

:::exercice Encadrements
On donne $-3\le a\le-1$ et $2\le b\le5$. Encadrer : $a+b$ ; $b-a$ ; $-2a$ ; $\dfrac1b$ ; $a^2$.
:::

:::exercice Périmètre et aire
Un rectangle a pour longueur $L$ et largeur $\ell$ avec $5{,}2\le L\le5{,}3$ et $3{,}1\le\ell\le3{,}2$ (en cm). Encadrer son périmètre $P$ et son aire $S$.
:::

:::exercice Démontrer une inégalité
Soient $x$ et $y$ deux réels tels que $x\le-8$ et $y\le5$. Montrer que $x+4\le-4$ puis que $x+y\le-3$.
:::

# Corrigés

:::corrige
- $a-b=\dfrac{24-35}{42}=-\dfrac{11}{42}<0$, donc $a<b$.
- $c=3-2=1$ et $c-d=\sqrt5-2>0$ (car $\sqrt5>\sqrt4=2$), donc $c>d$.
- $e<0<f$, donc $e<f$.
:::

:::corrige
$x+7>13$ ; $x-4>2$ ; $3x>18$ ; $-2x<-12$ ; $\dfrac x2>3$.
:::

:::corrige
- $\left(5\sqrt2\right)^2=50$ et $\left(4\sqrt3\right)^2=48$, donc $5\sqrt2>4\sqrt3$.
- $\sqrt{10}>\sqrt9=3$.
- $\sqrt7>\sqrt5>0$, donc $\dfrac1{\sqrt7}<\dfrac1{\sqrt5}$.
:::

:::corrige
- $-1\le a+b\le4$.
- $1\le-a\le3$, donc $3\le b-a\le8$.
- $2\le-2a\le6$.
- $\dfrac15\le\dfrac1b\le\dfrac12$.
- $1\le-a\le3$, donc $1\le a^2\le9$.
:::

:::corrige
- $P=2(L+\ell)$ : $8{,}3\le L+\ell\le8{,}5$, donc $16{,}6\le P\le17$.
- $S=L\times\ell$ (nombres positifs) : $5{,}2\times3{,}1\le S\le5{,}3\times3{,}2$, soit $16{,}12\le S\le16{,}96$ (en cm²).
:::

:::corrige
- $x\le-8$, donc $x+4\le-8+4=-4$.
- En additionnant $x\le-8$ et $y\le5$ membre à membre : $x+y\le-3$.
:::
