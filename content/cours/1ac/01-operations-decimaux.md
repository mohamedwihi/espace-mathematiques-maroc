---
id: 1ac-operations-decimaux
titre: Opérations sur les nombres entiers et décimaux
niveau: 1ac
semestre: 1
duree: 10 heures
---

## Objectifs
- Effectuer les quatre opérations sur les nombres entiers et décimaux.
- Respecter les priorités opératoires dans une suite d’opérations, avec ou sans parenthèses.
- Utiliser la distributivité de la multiplication par rapport à l’addition et à la soustraction.
- Écrire une expression correspondant à un programme de calcul et résoudre des problèmes.

## Prérequis
- Nombres entiers et décimaux : écriture, comparaison.
- Tables de multiplication ; calcul de l’aire d’un rectangle.

# I. Les quatre opérations

:::vocabulaire
| Opération | Écriture | Termes | Résultat |
|---|---|---|---|
| Addition | $a+b$ | les termes | la **somme** |
| Soustraction | $a-b$ ($a\ge b$) | les termes | la **différence** |
| Multiplication | $a\times b$ | les facteurs | le **produit** |
| Division | $a\div b$ ($b\ne0$) | dividende, diviseur | le **quotient** |
:::

:::exemple
- $12{,}5+7{,}25=19{,}75$ : somme des termes $12{,}5$ et $7{,}25$.
- $11-8{,}5=2{,}5$ : différence.
- $2{,}5\times4=10$ : produit des facteurs $2{,}5$ et $4$.
- $15\div3=5$ : quotient de $15$ par $3$.
:::

:::propriete
- L’addition et la multiplication sont **commutatives** : $a+b=b+a$ et $a\times b=b\times a$.
- Elles sont **associatives** : on peut regrouper les termes (ou les facteurs) comme on veut.
- $a+0=a$, $a\times1=a$ et $a\times0=0$.
:::

:::methode Calculer astucieusement
On regroupe les termes ou les facteurs qui « vont bien ensemble » :
$$4{,}7+3{,}8+5{,}3=(4{,}7+5{,}3)+3{,}8=10+3{,}8=13{,}8$$
$$25\times7{,}3\times4=(25\times4)\times7{,}3=100\times7{,}3=730.$$
:::

:::regle Multiplier ou diviser par $10$, $100$, $1000$
- Multiplier par $10$, $100$, $1000$ revient à décaler la virgule de $1$, $2$, $3$ rangs vers la **droite**.
- Multiplier par $0{,}1$, $0{,}01$, $0{,}001$ (ou diviser par $10$, $100$, $1000$) revient à décaler la virgule vers la **gauche**.
:::

:::exemple
$3{,}42\times100=342$ ; $57\times0{,}1=5{,}7$ ; $8{,}6\div1000=0{,}0086$.
:::

# II. Suites d’opérations sans parenthèses

:::regle Additions et soustractions seulement
Dans une expression sans parenthèses ne comportant que des additions et des soustractions, on effectue les calculs **de gauche à droite**.
:::

:::exemple
$A=15-6+4-3=9+4-3=13-3=10$.
:::

:::regle Multiplications et divisions seulement
Dans une expression sans parenthèses ne comportant que des multiplications et des divisions, on effectue les calculs **de gauche à droite**.
:::

:::exemple
$B=36\div4\times3\div9=9\times3\div9=27\div9=3$.
:::

:::regle Priorité de la multiplication et de la division
Dans une expression sans parenthèses, on effectue d’abord les **multiplications et les divisions**, puis les **additions et les soustractions**.
:::

:::exemple
$C=7+3\times5=7+15=22$ (et non $10\times5$).

$D=20-12\div4+2\times3=20-3+6=23$.
:::

# III. Suites d’opérations avec parenthèses

:::regle
Dans une expression avec parenthèses, on effectue d’abord les calculs **entre parenthèses** (en commençant par les plus intérieures), puis on applique les règles précédentes.
:::

:::exemple
$E=(7+3)\times5=10\times5=50$.

$F=2\times\left[18-(4+2)\times2\right]=2\times(18-6\times2)=2\times(18-12)=2\times6=12$.
:::

:::remarque
- Le trait de fraction joue le rôle de parenthèses : $\dfrac{12+8}{4+1}=(12+8)\div(4+1)=20\div5=4$.
- Le signe $\times$ peut être sous-entendu devant une parenthèse : $3(4+5)=3\times(4+5)$.
:::

:::methode Traduire un programme de calcul
« Ajouter $4$ à $6$, puis multiplier le résultat par $3$ » s’écrit $(6+4)\times3=30$.

« Multiplier $4$ par $3$, puis ajouter $6$ » s’écrit $6+4\times3=18$.
:::

# IV. La distributivité

:::propriete
Pour tous nombres $k$, $a$ et $b$ :
$$k\times(a+b)=k\times a+k\times b\qquad k\times(a-b)=k\times a-k\times b.$$
On dit que la multiplication est **distributive** par rapport à l’addition et à la soustraction.
:::

```figure
{"type":"geometry","x":[-0.5,8.5],"y":[-0.8,3.8],"width":330,
 "polygons":[{"points":[[0,0],[5,0],[5,3],[0,3]],"color":"brand"},{"points":[[5,0],[8,0],[8,3],[5,3]],"color":"saffron"}],
 "points":[{"x":2.5,"y":-0.45,"label":"a","dot":false},{"x":6.5,"y":-0.45,"label":"b","dot":false},{"x":-0.35,"y":1.5,"label":"k","dot":false},{"x":2.5,"y":1.5,"label":"k×a","dot":false},{"x":6.5,"y":1.5,"label":"k×b","dot":false}],
 "caption":"Aire du grand rectangle : $k\\times(a+b)=k\\times a+k\\times b$."}
```

:::exemple Développer
$4\times(10+3)=4\times10+4\times3=40+12=52$ ; $7\times(20-1)=140-7=133$.
:::

:::exemple Factoriser
$13\times8+13\times2=13\times(8+2)=13\times10=130$ ;
$6{,}5\times17-6{,}5\times7=6{,}5\times(17-7)=6{,}5\times10=65$.
:::

:::remarque
La distributivité permet le calcul mental : $99\times12=(100-1)\times12=1200-12=1188$.
:::

# Exercices

:::exercice Vocabulaire et calcul
1. Calculer la somme de $14{,}7$ et $5{,}38$, puis la différence de $20$ et $7{,}45$.
2. Calculer le produit de $0{,}25$ par $36$, puis le quotient de $45$ par $6$.
3. Calculer astucieusement : $2{,}6+9{,}3+7{,}4+0{,}7$ et $0{,}5\times13\times20$.
:::

:::exercice Priorités sans parenthèses
Calculer : $A=18-7+5-6$ ; $B=48\div6\times2$ ; $C=9+6\times4$ ; $D=30-15\div3\times2$ ; $E=5\times3{,}2+8\div0{,}5$.
:::

:::exercice Priorités avec parenthèses
Calculer : $F=(9+6)\times4$ ; $G=50-(12+3\times6)$ ; $H=3\times\left[20-(2+4)\times3\right]$ ; $K=\dfrac{36-6}{2\times5}$.
:::

:::exercice Distributivité
1. Développer puis calculer : $5\times(12+0{,}4)$ ; $8\times(25-3)$.
2. Factoriser puis calculer : $17\times6+17\times4$ ; $2{,}4\times135-2{,}4\times35$.
3. Calculer mentalement : $101\times23$ et $98\times15$.
:::

:::exercice Problème
Yahya achète $3$ cahiers à $7{,}50$ DH l’un et $4$ stylos à $2{,}75$ DH l’un. Il paie avec un billet de $50$ DH.
1. Écrire une seule expression donnant la somme rendue.
2. Calculer cette somme.
:::

:::exercice Aire de deux façons
Un jardin rectangulaire de largeur $12$ m est formé d’un potager de longueur $15$ m et d’une pelouse de longueur $9$ m placés côte à côte.
Calculer l’aire du jardin de deux façons différentes.
:::

:::exercice Approfondissement — placer les parenthèses
Placer des parenthèses (si nécessaire) pour que chaque égalité soit vraie :
1. $3+4\times5-2=33$
2. $3+4\times5-2=21$
3. $48\div4\times2+6=12$
4. $48\div4\times2+6=30$
:::

:::exercice Approfondissement — problème à étapes
Un commerçant achète $45$ kg de pommes à $6{,}40$ DH le kilogramme. Il en perd $5$ kg (abîmés) et vend le reste à $9{,}50$ DH le kilogramme.
1. Écrire une seule expression donnant son bénéfice, puis la calculer.
2. À quel prix minimal (au centime près) aurait-il dû vendre le kilogramme pour ne pas perdre d’argent ?
:::

# Corrigés

:::corrige
1. $14{,}7+5{,}38=20{,}08$ ; $20-7{,}45=12{,}55$.
2. $0{,}25\times36=9$ ; $45\div6=7{,}5$.
3. $(2{,}6+7{,}4)+(9{,}3+0{,}7)=10+10=20$ ; $(0{,}5\times20)\times13=10\times13=130$.
:::

:::corrige
$A=11+5-6=10$ ; $B=8\times2=16$ ; $C=9+24=33$ ; $D=30-5\times2=30-10=20$ ; $E=16+16=32$.
:::

:::corrige
$F=15\times4=60$ ; $G=50-(12+18)=50-30=20$ ; $H=3\times(20-18)=6$ ; $K=\dfrac{30}{10}=3$.
:::

:::corrige
1. $5\times12+5\times0{,}4=60+2=62$ ; $8\times25-8\times3=200-24=176$.
2. $17\times(6+4)=170$ ; $2{,}4\times(135-35)=2{,}4\times100=240$.
3. $(100+1)\times23=2300+23=2323$ ; $(100-2)\times15=1500-30=1470$.
:::

:::corrige
1. $50-(3\times7{,}50+4\times2{,}75)$.
2. $50-(22{,}50+11)=50-33{,}50=16{,}50$ DH.
:::

:::corrige
- Première façon : $12\times(15+9)=12\times24=288\ \text{m}^2$.
- Deuxième façon : $12\times15+12\times9=180+108=288\ \text{m}^2$.
:::

:::corrige
1. $(3+4)\times5-2=33$.
2. $3+4\times(5-2)=15$ ne convient pas ; sans parenthèses : $3+20-2=21$.
3. $48\div(4\times2)+6=6+6=12$.
4. Sans parenthèses : $12\times2+6=30$.
:::

:::corrige
1. $B=(45-5)\times9{,}50-45\times6{,}40=380-288=92$ DH.
2. Il faut $40\times p\ge288$, soit $p\ge7{,}20$ DH : au minimum $7{,}20$ DH le kilogramme.
:::
