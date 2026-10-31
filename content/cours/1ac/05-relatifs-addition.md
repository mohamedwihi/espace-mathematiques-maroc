---
id: 1ac-relatifs-addition
titre: Addition et soustraction des nombres décimaux relatifs
niveau: 1ac
semestre: 1
duree: 6 heures
---

## Objectifs
- Additionner deux nombres décimaux relatifs.
- Soustraire un nombre relatif en ajoutant son opposé.
- Calculer une somme algébrique et supprimer des parenthèses.
- Calculer la distance entre deux points d’une droite graduée.

## Prérequis
- Nombres relatifs : signe, distance à zéro, opposé.
- Droite graduée.

# I. Addition de deux nombres relatifs

:::exemple Situation
Le matin, la température est $-3\,°$C ; elle monte de $5\,°$C dans la matinée : elle devient $(-3)+(+5)=+2\,°$C. L’après-midi, elle baisse de $6\,°$C : $(+2)+(-6)=-4\,°$C.
:::

:::regle Même signe
Pour additionner deux nombres relatifs de **même signe** :
- on garde le **signe commun** ;
- on **additionne** leurs distances à zéro.
:::

:::exemple
$(+3)+(+4{,}5)=+7{,}5$ ; $(-2)+(-6)=-8$ ; $(-1{,}2)+(-0{,}8)=-2$.
:::

:::regle Signes contraires
Pour additionner deux nombres relatifs de **signes contraires** :
- on prend le signe de celui qui a la **plus grande** distance à zéro ;
- on **soustrait** la plus petite distance à zéro de la plus grande.
:::

:::exemple
$(+7)+(-3)=+4$ ; $(-9)+(+2)=-7$ ; $(-4{,}5)+(+6)=+1{,}5$.
:::

:::propriete
- La somme de deux nombres **opposés** est nulle : $(-5)+(+5)=0$.
- $a+0=a$ pour tout nombre relatif $a$.
- L’addition est commutative et associative : on peut changer l’ordre des termes et les regrouper.
:::

# II. Soustraction

:::regle
**Soustraire** un nombre relatif revient à **ajouter son opposé** :
$$a-b=a+(\text{opposé de }b).$$
:::

:::exemple
- $(+3)-(+8)=(+3)+(-8)=-5$.
- $(-4)-(-6)=(-4)+(+6)=+2$.
- $(-2{,}5)-(+1{,}5)=(-2{,}5)+(-1{,}5)=-4$.
:::

:::methode Distance entre deux points
Sur une droite graduée, si $A$ et $B$ ont pour abscisses $a$ et $b$ avec $a\le b$, alors
$$AB=b-a\quad(\text{la plus grande abscisse moins la plus petite}).$$
:::

```figure
{"type":"graph","x":[-4.5,4.5],"y":[-0.8,0.8],"width":340,
 "points":[{"x":-3,"y":0,"label":"A(-3)"},{"x":2,"y":0,"label":"B(2)"},{"x":0,"y":0,"label":"O"}],
 "caption":"$AB=2-(-3)=2+3=5$."}
```

# III. Sommes algébriques

:::definition
Une **somme algébrique** est une suite d’additions et de soustractions de nombres relatifs. En transformant chaque soustraction en addition de l’opposé, on obtient une somme de nombres relatifs.
:::

:::methode Calculer une somme algébrique
1. On transforme les soustractions en additions.
2. On regroupe les termes positifs d’une part, les termes négatifs d’autre part.
3. On calcule.
:::

:::exemple
$$A=(-5)-(+3)+(+8)-(-4)=(-5)+(-3)+(+8)+(+4)=(-8)+(+12)=+4.$$
:::

:::remarque Écriture simplifiée
On peut supprimer les parenthèses et le signe $+$ d’addition : $(+7)+(-3)-(-2)$ s’écrit $7-3+2$.
:::

:::regle Suppression des parenthèses
- Une parenthèse précédée du signe $+$ peut être supprimée **sans changer** les signes à l’intérieur : $a+(b-c)=a+b-c$.
- Une parenthèse précédée du signe $-$ peut être supprimée **en changeant** tous les signes à l’intérieur : $a-(b-c)=a-b+c$.
:::

:::exemple
$B=12-(7-4)+(3-9)=12-7+4+3-9=19-16=3$.

$C=-(-2+5)-(1-6)=2-5-1+6=2$.
:::

# Exercices

:::exercice Additions
Calculer : $(+6)+(+9)$ ; $(-7)+(-4)$ ; $(+11)+(-15)$ ; $(-3{,}6)+(+5)$ ; $(-8{,}25)+(+8{,}25)$ ; $(-0{,}7)+(-1{,}9)$.
:::

:::exercice Soustractions
Calculer : $(+5)-(+12)$ ; $(-6)-(-10)$ ; $(-3)-(+7)$ ; $(+2{,}4)-(-3{,}6)$ ; $0-(-9)$.
:::

:::exercice Sommes algébriques
Calculer en regroupant : $A=(-4)+(+9)+(-6)+(+3)$ ; $B=(+7)-(-2)+(-11)-(+5)$ ; $C=-3+8-12+5-1$.
:::

:::exercice Parenthèses
Supprimer les parenthèses puis calculer : $D=15-(8+3)+(2-7)$ ; $E=-(4-9)-(-2+6)$ ; $F=2{,}5-(1{,}5-4)+(-3+0{,}5)$.
:::

:::exercice Distances
Sur une droite graduée, on place $A(-4)$, $B(1{,}5)$ et $C(-0{,}5)$. Calculer $AB$, $AC$ et $BC$.
:::

:::exercice Problème
Un sous-marin est à $-120$ m (sous le niveau de la mer). Il remonte de $45$ m, puis descend de $70$ m, puis remonte de $95$ m.
1. Écrire une somme algébrique donnant sa position finale.
2. Calculer cette position.
:::

:::exercice Approfondissement — carré magique
Compléter le carré pour que les sommes de chaque ligne, de chaque colonne et de chaque diagonale soient égales à $-3$ :
| $\ldots$ | $-8$ | $\ldots$ |
|---|---|---|
| $\ldots$ | $-1$ | $\ldots$ |
| $0$ | $\ldots$ | $\ldots$ |
:::

:::exercice Approfondissement — températures
La température à Ifrane relevée à $6$ h est $-7{,}5\,°$C. Elle augmente de $4{,}5\,°$C jusqu’à $10$ h, puis de $6\,°$C jusqu’à $14$ h, puis baisse de $9{,}5\,°$C jusqu’à minuit.
1. Calculer la température à $14$ h puis à minuit.
2. Quel est l’écart entre la température la plus haute et la plus basse de cette journée ?
:::

# Corrigés

:::corrige
$+15$ ; $-11$ ; $-4$ ; $+1{,}4$ ; $0$ ; $-2{,}6$.
:::

:::corrige
$(+5)+(-12)=-7$ ; $(-6)+(+10)=+4$ ; $(-3)+(-7)=-10$ ; $(+2{,}4)+(+3{,}6)=+6$ ; $0+(+9)=+9$.
:::

:::corrige
- $A=(+9)+(+3)+(-4)+(-6)=(+12)+(-10)=+2$.
- $B=(+7)+(+2)+(-11)+(-5)=(+9)+(-16)=-7$.
- $C=(8+5)-(3+12+1)=13-16=-3$.
:::

:::corrige
- $D=15-8-3+2-7=17-18=-1$.
- $E=-4+9+2-6=1$.
- $F=2{,}5-1{,}5+4-3+0{,}5=2{,}5$.
:::

:::corrige
$AB=1{,}5-(-4)=5{,}5$ ; $AC=-0{,}5-(-4)=3{,}5$ ; $BC=1{,}5-(-0{,}5)=2$.
:::

:::corrige
1. $-120+45-70+95$.
2. $-120+45-70+95=140-190=-50$ : le sous-marin est à $50$ m sous le niveau de la mer.
:::

:::corrige
La diagonale passant par le centre et par $0$ donne la case en haut à droite : $-3-0-(-1)=-2$. Première ligne : $-3-(-8)-(-2)=7$. Première colonne : $-3-7-0=-10$. Ligne du milieu : $-3-(-10)-(-1)=8$. Colonne du milieu : $-3-(-8)-(-1)=6$. Dernière case : $-3-0-6=-9$.
| $7$ | $-8$ | $-2$ |
|---|---|---|
| $-10$ | $-1$ | $8$ |
| $0$ | $6$ | $-9$ |
Vérification sur l’autre diagonale : $7+(-1)+(-9)=-3$.
:::

:::corrige
1. $14$ h : $-7{,}5+4{,}5+6=3\,°$C ; minuit : $3-9{,}5=-6{,}5\,°$C.
2. Plus haute $3\,°$C, plus basse $-7{,}5\,°$C : écart $3-(-7{,}5)=10{,}5\,°$C.
:::
