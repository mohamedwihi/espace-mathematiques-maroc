---
id: 3ac-identites-puissances
titre: Identités remarquables et puissances
niveau: 3ac
semestre: 1
duree: 12 heures
---

## Objectifs
- Développer et factoriser une expression littérale.
- Connaître et utiliser les identités remarquables dans les deux sens.
- Connaître et utiliser les règles de calcul sur les puissances (exposants positifs et négatifs).
- Utiliser les puissances de 10 et l’écriture scientifique.

## Prérequis
- Calcul littéral.
- Distributivité.
- Puissances d’un nombre rationnel.
- Racines carrées.

# I. Développement

:::definition
**Développer** une expression, c’est transformer un **produit** en une **somme** (ou une différence).
:::

:::propriete Distributivité
Pour tous nombres réels $k$, $a$, $b$, $c$ et $d$ :
$$k(a+b)=ka+kb\qquad k(a-b)=ka-kb\qquad (a+b)(c+d)=ac+ad+bc+bd.$$
:::

:::exemple
$$A=-5(2x-3)=-10x+15.$$
$$B=(3x-1)(x+2)=3x^2+6x-x-2=3x^2+5x-2.$$
$$C=\sqrt2\left(3+\sqrt2\right)=3\sqrt2+2.$$
:::

:::remarque
Pour développer $-(a+b)$, on change tous les signes : $-(a+b)=-a-b$ et $-(a-b)=-a+b$.
:::

# II. Factorisation

:::definition
**Factoriser** une expression, c’est transformer une **somme** (ou une différence) en un **produit**.
:::

:::propriete Facteur commun
Pour tous nombres réels $k$, $a$ et $b$ :
$$ka+kb=k(a+b)\qquad ka-kb=k(a-b).$$
:::

:::exemple
- $3x+9=3\times x+3\times3=3(x+3)$.
- $14x^2-21x=7x\times2x-7x\times3=7x(2x-3)$.
- $(2x+3)^2+(x-5)(2x+3)=(2x+3)\left[(2x+3)+(x-5)\right]=(2x+3)(3x-2)$.
- $(x+1)(2x-5)-(x+1)(x-9)=(x+1)\left[(2x-5)-(x-9)\right]=(x+1)(x+4)$.
:::

:::methode
1. Repérer le facteur commun (un nombre, une lettre ou une parenthèse entière).
2. L’écrire devant une parenthèse.
3. Écrire dans la parenthèse ce qui reste de chaque terme, **en gardant les signes**.
4. Réduire l’intérieur de la parenthèse.
:::

# III. Les identités remarquables

:::propriete
Pour tous nombres réels $a$ et $b$ :
$$(a+b)^2=a^2+2ab+b^2$$
$$(a-b)^2=a^2-2ab+b^2$$
$$(a+b)(a-b)=a^2-b^2$$
:::

:::demonstration
$(a+b)^2=(a+b)(a+b)=a^2+ab+ba+b^2=a^2+2ab+b^2$.

$(a-b)^2=(a-b)(a-b)=a^2-ab-ba+b^2=a^2-2ab+b^2$.

$(a+b)(a-b)=a^2-ab+ba-b^2=a^2-b^2$.
:::

```figure
{"type":"geometry","x":[-0.5,6.5],"y":[-0.5,6.5],"width":300,
 "polygons":[{"points":[[0,0],[4,0],[4,4],[0,4]],"color":"brand"},{"points":[[4,4],[6,4],[6,6],[4,6]],"color":"saffron"},{"points":[[4,0],[6,0],[6,4],[4,4]],"color":"ink"},{"points":[[0,4],[4,4],[4,6],[0,6]],"color":"ink"}],
 "points":[{"x":1.6,"y":2,"label":"a²"},{"x":4.6,"y":5,"label":"b²"},{"x":4.6,"y":2,"label":"ab"},{"x":1.6,"y":5,"label":"ab"}],
 "caption":"Le carré de côté $a+b$ a pour aire $a^2+2ab+b^2$."}
```

## 1. Développer avec les identités remarquables

:::exemple
$$(x+3)^2=x^2+2\times x\times3+3^2=x^2+6x+9.$$
$$\left(2\sqrt5-3\right)^2=\left(2\sqrt5\right)^2-2\times2\sqrt5\times3+3^2=20-12\sqrt5+9=29-12\sqrt5.$$
$$\left(2\sqrt7+3\sqrt5\right)\left(2\sqrt7-3\sqrt5\right)=\left(2\sqrt7\right)^2-\left(3\sqrt5\right)^2=28-45=-17.$$
:::

## 2. Factoriser avec les identités remarquables

:::methode
On lit les identités « de droite à gauche » :
- $a^2+2ab+b^2=(a+b)^2$ et $a^2-2ab+b^2=(a-b)^2$ : on vérifie que le terme du milieu est bien le **double produit** $2ab$.
- $a^2-b^2=(a-b)(a+b)$ : une **différence de deux carrés**.
:::

:::exemple
- $x^2+10x+25=x^2+2\times x\times5+5^2=(x+5)^2$.
- $4x^2-4x+1=(2x)^2-2\times2x\times1+1^2=(2x-1)^2$.
- $9x^2-49=(3x)^2-7^2=(3x-7)(3x+7)$.
- $(2x-5)^2-(x+1)^2=\left[(2x-5)-(x+1)\right]\left[(2x-5)+(x+1)\right]=(x-6)(3x-4)$.
- $x^2-7=x^2-\left(\sqrt7\right)^2=\left(x-\sqrt7\right)\left(x+\sqrt7\right)$.
:::

# IV. Les puissances

## 1. Puissance d’un nombre réel

:::definition
Soient $a$ un nombre réel et $n$ un entier naturel.
- Pour $n\ge2$ : $a^n=\underbrace{a\times a\times\dots\times a}_{n\text{ facteurs}}$ ; on lit « $a$ exposant $n$ ».
- $a^1=a$ et, pour $a\ne0$, $a^0=1$.
- Pour $a\ne0$ : $a^{-n}=\dfrac1{a^n}$. En particulier $a^{-1}=\dfrac1a$.
:::

:::exemple
$3^3=27$ ; $(-2)^4=16$ ; $(-2)^3=-8$ ; $-2^4=-16$ ; $2^{-4}=\dfrac1{2^4}=\dfrac1{16}$ ; $\left(\dfrac73\right)^{-2}=\left(\dfrac37\right)^2=\dfrac9{49}$.
:::

:::regle Signe d’une puissance
- Une puissance d’un nombre positif est positive.
- Pour $a<0$ : $a^n$ est **positif si $n$ est pair** et **négatif si $n$ est impair**.
- Attention : $(-a)^2=a^2$ mais $-a^2=-(a^2)$.
:::

## 2. Règles de calcul

:::propriete
Pour tous réels $a$ et $b$ non nuls et tous entiers relatifs $m$ et $n$ :
| Règle | Formule |
|---|---|
| Produit de même base | $a^m\times a^n=a^{m+n}$ |
| Quotient de même base | $\dfrac{a^m}{a^n}=a^{m-n}$ |
| Puissance d’une puissance | $\left(a^m\right)^n=a^{m\times n}$ |
| Produit de même exposant | $a^n\times b^n=(a\times b)^n$ |
| Quotient de même exposant | $\dfrac{a^n}{b^n}=\left(\dfrac ab\right)^n$ |
:::

:::exemple
$(-3)^2\times(-3)^3=(-3)^5$ ; $2^7\times5^7=10^7$ ; $\left(2^3\right)^4=2^{12}$ ; $\dfrac{1{,}3^5}{1{,}3^3}=1{,}3^2$ ; $\dfrac{21^3}{7^3}=3^3=27$.
:::

## 3. Puissances de 10

:::propriete
Pour tout entier naturel $n$ :
$$10^n=1\underbrace{0\dots0}_{n\text{ zéros}}\qquad 10^{-n}=0{,}\underbrace{0\dots0}_{n-1\text{ zéros}}1$$
et $10^0=1$, $10^1=10$. Les règles de calcul précédentes s’appliquent : $10^m\times10^n=10^{m+n}$, $\dfrac{10^m}{10^n}=10^{m-n}$, $\left(10^m\right)^n=10^{mn}$.
:::

:::exemple
$1\,000\,000\,000=10^9$ ; $0{,}000001=10^{-6}$ ; $10^5\times10^3=10^8$ ; $\dfrac{10^6}{10^2}=10^4$ ; $\left(10^5\right)^7=10^{35}$.
:::

## 4. L’écriture scientifique

:::definition
L’**écriture scientifique** d’un nombre décimal non nul est l’écriture de la forme
$$a\times10^n$$
où $n$ est un entier relatif et $a$ un nombre décimal tel que $1\le|a|<10$ (un seul chiffre non nul avant la virgule).
:::

:::exemple
- $265\,900=2{,}659\times10^5$.
- $0{,}0005321=5{,}321\times10^{-4}$.
- $-8145\times10^{-6}=-8{,}145\times10^3\times10^{-6}=-8{,}145\times10^{-3}$.
- $\dfrac{15\times10^7\times3\times10^{-9}}{5\times10^{-3}}=\dfrac{45}{5}\times10^{7-9+3}=9\times10^1$.
:::

# Exercices

:::exercice Développer
Développer et réduire : $A=-2x(3x-4)$ ; $B=(3x+4)(-2x-1)$ ; $C=7(x-5)-(2x-5)$ ; $D=(3x-1)(x-2)-(x+2)(3-x)$.
:::

:::exercice Identités remarquables
Développer : $E=(x-7)^2$ ; $F=\left(2\sqrt3+5\right)^2$ ; $G=(-5x-1)^2$ ; $H=\left(3\sqrt{10}+4\right)\left(3\sqrt{10}-4\right)$.
:::

:::exercice Factoriser
Factoriser : $I=x^2+6x+9$ ; $J=4x^2-4x+1$ ; $K=16x^2-1$ ; $L=121-8x^2$ ; $M=(2x-5)^2-(x+1)^2$.
:::

:::exercice Factoriser puis réduire
Factoriser : $N=x^2-9+(x+3)(5x-8)$ ; $P=9x^2+12x+4+(x+7)(3x+2)$.
:::

:::exercice Puissances
Écrire sous la forme $a^n$ : $11^5\times11^9$ ; $10^{-8}\times10^3$ ; $\dfrac{7^5}{7^2}$ ; $8^5\times3^5$ ; $\left(4^5\right)^{-3}$ ; $\left(\dfrac73\right)^4\times\left(\dfrac73\right)^{-4}$.
:::

:::exercice Écriture scientifique
Donner l’écriture scientifique de : $20\,000$ ; $2\,500\,000$ ; $0{,}008$ ; $0{,}00043$ ; $Q=\dfrac{3\times10^3\times2\times10^{-1}}{12\times10^{-2}}$.
:::

:::exercice Calcul astucieux
Sans calculatrice, calculer $R=1001^2-999^2$ et $S=99^2$.
:::

:::exercice Série — factoriser avec les identités
Factoriser : $A=9x^2-12x+4$ ; $B=(2x+1)^2-25$ ; $C=x^2-3-(x-\sqrt3)(2x+1)$.
:::

:::exercice Série — puissances et écriture scientifique
1. Simplifier $F=\dfrac{2^{5}\times3^{-2}\times6^{3}}{4^{3}\times3^{2}}$.
2. Donner l’écriture scientifique de $G=\dfrac{0{,}6\times10^{5}\times2{,}5\times10^{-3}}{5\times10^{-4}}$.
:::

:::exercice Approfondissement — identité et calcul mental
1. Montrer que pour tous réels $a$ et $b$ : $(a+b)^2-(a-b)^2=4ab$.
2. En déduire, sans calculatrice, $1\,002^2-998^2$.
3. Montrer que le produit de deux entiers impairs consécutifs augmenté de $1$ est un carré : $(2n-1)(2n+1)+1=(2n)^2$.
:::

:::exercice Approfondissement — puissances de 10 et ordre de grandeur
La lumière parcourt environ $3\times10^{5}$ km par seconde. Une année compte environ $3{,}15\times10^{7}$ secondes.
1. Calculer la distance parcourue par la lumière en un an (une année-lumière), en écriture scientifique.
2. L’étoile la plus proche du Soleil est à environ $4{,}2$ années-lumière. Exprimer cette distance en km.
:::

# Corrigés

:::corrige
- $A=-6x^2+8x$.
- $B=-6x^2-3x-8x-4=-6x^2-11x-4$.
- $C=7x-35-2x+5=5x-30$.
- $D=(3x^2-6x-x+2)-(3x-x^2+6-2x)=3x^2-7x+2-(-x^2+x+6)=4x^2-8x-4$.
:::

:::corrige
- $E=x^2-14x+49$.
- $F=12+20\sqrt3+25=37+20\sqrt3$.
- $G=(5x+1)^2=25x^2+10x+1$.
- $H=90-16=74$.
:::

:::corrige
- $I=(x+3)^2$ ; $J=(2x-1)^2$ ; $K=(4x-1)(4x+1)$.
- $L=11^2-\left(2\sqrt2\,x\right)^2=\left(11-2\sqrt2\,x\right)\left(11+2\sqrt2\,x\right)$.
- $M=\left[(2x-5)-(x+1)\right]\left[(2x-5)+(x+1)\right]=(x-6)(3x-4)$.
:::

:::corrige
- $N=(x-3)(x+3)+(x+3)(5x-8)=(x+3)\left[(x-3)+(5x-8)\right]=(x+3)(6x-11)$.
- $P=(3x+2)^2+(x+7)(3x+2)=(3x+2)\left[(3x+2)+(x+7)\right]=(3x+2)(4x+9)$.
:::

:::corrige
$11^{14}$ ; $10^{-5}$ ; $7^3$ ; $24^5$ ; $4^{-15}$ ; $\left(\dfrac73\right)^0=1$.
:::

:::corrige
$20\,000=2\times10^4$ ; $2\,500\,000=2{,}5\times10^6$ ; $0{,}008=8\times10^{-3}$ ; $0{,}00043=4{,}3\times10^{-4}$.

$Q=\dfrac{6\times10^{2}}{12\times10^{-2}}=0{,}5\times10^{4}=5\times10^{3}$.
:::

:::corrige
- $R=(1001-999)(1001+999)=2\times2000=4000$.
- $S=(100-1)^2=10\,000-200+1=9801$.
:::

:::corrige
- $A=(3x-2)^2$.
- $B=(2x+1-5)(2x+1+5)=(2x-4)(2x+6)=4(x-2)(x+3)$.
- $x^2-3=(x-\sqrt3)(x+\sqrt3)$, donc $C=(x-\sqrt3)\left[(x+\sqrt3)-(2x+1)\right]=(x-\sqrt3)\left(-x+\sqrt3-1\right)$.
:::

:::corrige
1. $6^3=2^3\times3^3$ et $4^3=2^6$ : $F=\dfrac{2^{8}\times3^{1}}{2^{6}\times3^{2}}=\dfrac{2^2}{3}=\dfrac43$.
2. $G=\dfrac{0{,}6\times2{,}5}{5}\times10^{5-3+4}=0{,}3\times10^{6}=3\times10^{5}$.
:::

:::corrige
1. $(a^2+2ab+b^2)-(a^2-2ab+b^2)=4ab$.
2. Avec $a=1\,000$ et $b=2$ : $4\times1\,000\times2=8\,000$.
3. $(2n-1)(2n+1)+1=4n^2-1+1=(2n)^2$.
:::

:::corrige
1. $3\times10^5\times3{,}15\times10^7=9{,}45\times10^{12}$ km.
2. $4{,}2\times9{,}45\times10^{12}=39{,}69\times10^{12}\approx3{,}97\times10^{13}$ km.
:::
