---
id: 2ac-ordre-operations
titre: Ordre et opérations
niveau: 2ac
semestre: 2
duree: 6 heures
---

## Objectifs
- Comparer deux nombres rationnels, notamment en étudiant le signe de leur différence.
- Connaître les liens entre l’ordre et l’addition, la soustraction et la multiplication.
- Encadrer une somme, une différence et un produit.

## Prérequis
- Nombres rationnels et opérations.
- Comparaison des nombres relatifs.

# I. Comparaison de deux nombres rationnels

:::regle Même dénominateur positif
Si $c>0$ : $\dfrac ac<\dfrac bc\iff a<b$.
:::

:::methode Dénominateurs différents
On réduit au même dénominateur positif, puis on compare les numérateurs.
$\dfrac{-5}{6}$ et $\dfrac{-3}{4}$ : $\dfrac{-10}{12}<\dfrac{-9}{12}$, donc $\dfrac{-5}{6}<\dfrac{-3}{4}$.
:::

:::regle Comparaison et différence
Pour tous rationnels $a$ et $b$ :
$$a\le b\iff a-b\le0\qquad a\ge b\iff a-b\ge0.$$
:::

:::exemple
Comparer $\dfrac{7}{9}$ et $\dfrac{4}{5}$ : $\dfrac79-\dfrac45=\dfrac{35-36}{45}=-\dfrac1{45}<0$, donc $\dfrac79<\dfrac45$.
:::

# II. Ordre et addition

:::propriete 1
On peut **ajouter** (ou soustraire) un même nombre aux deux membres d’une inégalité sans changer son sens :
$$a\le b\implies a+c\le b+c\ \text{et}\ a-c\le b-c.$$
:::

:::demonstration
$(b+c)-(a+c)=b-a\ge0$, donc $a+c\le b+c$.
:::

:::propriete 2 Addition membre à membre
$$\text{Si }a\le b\ \text{et}\ c\le d,\ \text{alors}\ a+c\le b+d.$$
:::

:::exemple
Si $x\le3$, alors $x+5\le8$ et $x-2\le1$. Si $a\le2$ et $b\le7$, alors $a+b\le9$.
:::

:::remarque
On ne soustrait **pas** membre à membre deux inégalités de même sens.
:::

# III. Ordre et multiplication

:::propriete
Soit $c$ un nombre :
- si $c>0$ : $a\le b\implies ac\le bc$ (le sens est **conservé**) ;
- si $c<0$ : $a\le b\implies ac\ge bc$ (le sens est **changé**).
:::

:::exemple
Si $x\le4$, alors $3x\le12$ et $-2x\ge-8$.
:::

:::propriete Multiplication membre à membre
Si $a$, $b$, $c$, $d$ sont **positifs**, $a\le b$ et $c\le d$, alors $ac\le bd$.
:::

:::remarque
Pour les inverses : si $0<a\le b$, alors $\dfrac1a\ge\dfrac1b$.
:::

# IV. Encadrements

:::definition
**Encadrer** un nombre $x$, c’est trouver deux nombres $a$ et $b$ tels que $a\le x\le b$. Le nombre $b-a$ est l’**amplitude** de l’encadrement.
:::

:::methode Encadrer une somme, une différence, un produit
Soit $2\le x\le3$ et $1\le y\le4$.
- Somme : $2+1\le x+y\le3+4$, soit $3\le x+y\le7$.
- Différence : $x-y=x+(-y)$ avec $-4\le-y\le-1$, donc $-2\le x-y\le2$.
- Produit (nombres positifs) : $2\times1\le xy\le3\times4$, soit $2\le xy\le12$.
- $3x-2y$ : $6\le3x\le9$ et $-8\le-2y\le-2$, donc $-2\le3x-2y\le7$.
:::

:::exemple Périmètre
Un rectangle a une longueur $L$ telle que $5{,}2\le L\le5{,}3$ et une largeur $\ell$ telle que $3{,}1\le\ell\le3{,}2$. Alors $2(5{,}2+3{,}1)\le P\le2(5{,}3+3{,}2)$, soit $16{,}6\le P\le17$.
:::

# Exercices

:::exercice Comparer
Comparer : $\dfrac{-7}{8}$ et $\dfrac{-5}{6}$ ; $\dfrac{11}{12}$ et $\dfrac{12}{13}$ (utiliser la différence) ; $\dfrac{-3}{5}$ et $\dfrac{4}{-7}$.
:::

:::exercice Inégalités
Sachant que $a\le b$, comparer : $a+7$ et $b+7$ ; $a-\dfrac{1}{2}$ et $b-\dfrac12$ ; $5a$ et $5b$ ; $-3a$ et $-3b$ ; $2-a$ et $2-b$.
:::

:::exercice Comparer avec la différence
Soit $x$ un nombre. Comparer $A=(x+3)^2$ et $B=x^2+6x+5$.
:::

:::exercice Encadrements
On sait que $-1\le x\le2$ et $3\le y\le5$. Encadrer : $x+y$ ; $x-y$ ; $2x+3y$ ; $-4x$ ; $y^2$.
:::

:::exercice Aire
Les dimensions d’un rectangle vérifient $4{,}5\le L\le4{,}6$ et $2{,}5\le\ell\le2{,}6$ (en cm). Encadrer son périmètre et son aire.
:::

# Corrigés

:::corrige
- $\dfrac{-21}{24}<\dfrac{-20}{24}$ : $\dfrac{-7}8<\dfrac{-5}6$.
- $\dfrac{11}{12}-\dfrac{12}{13}=\dfrac{143-144}{156}<0$ : $\dfrac{11}{12}<\dfrac{12}{13}$.
- $\dfrac{-21}{35}<\dfrac{-20}{35}$ : $\dfrac{-3}5<\dfrac4{-7}$.
:::

:::corrige
$a+7\le b+7$ ; $a-\dfrac12\le b-\dfrac12$ ; $5a\le5b$ ; $-3a\ge-3b$ ; $-a\ge-b$ donc $2-a\ge2-b$.
:::

:::corrige
$A-B=x^2+6x+9-x^2-6x-5=4>0$, donc $A>B$ pour tout $x$.
:::

:::corrige
- $2\le x+y\le7$.
- $-5\le-y\le-3$, donc $-6\le x-y\le-1$.
- $-2\le2x\le4$ et $9\le3y\le15$ : $7\le2x+3y\le19$.
- $-8\le-4x\le4$.
- $y$ positif : $9\le y^2\le25$.
:::

:::corrige
- $2(4{,}5+2{,}5)\le P\le2(4{,}6+2{,}6)$ : $14\le P\le14{,}4$ cm.
- $4{,}5\times2{,}5\le\mathcal A\le4{,}6\times2{,}6$ : $11{,}25\le\mathcal A\le11{,}96\ \text{cm}^2$.
:::
