---
id: 3ac-racines-carrees
titre: Les racines carrées
niveau: 3ac
semestre: 1
duree: 10 heures
---

## Objectifs
- Connaître la définition de la racine carrée d’un nombre positif.
- Utiliser les égalités $\left(\sqrt a\right)^2=a$ et $\sqrt{a^2}=a$ pour $a\ge0$.
- Utiliser $\sqrt a\times\sqrt b=\sqrt{ab}$ et $\dfrac{\sqrt a}{\sqrt b}=\sqrt{\dfrac ab}$.
- Simplifier une écriture de la forme $\sqrt{k^2b}$ et réduire une somme de radicaux.
- Rendre rationnel le dénominateur d’une écriture fractionnaire.
- Résoudre une équation de la forme $x^2=a$.

## Prérequis
- Calculs sur les nombres rationnels.
- Puissances d’un nombre rationnel.
- Équations du premier degré.
- Théorème de Pythagore.

# I. Notion de racine carrée

:::definition
Soit $a$ un nombre **positif**. La **racine carrée** de $a$, notée $\sqrt a$, est le nombre **positif** dont le carré est égal à $a$.

Le symbole $\sqrt{\phantom{a}}$ s’appelle le **radical**.
:::

:::exemple
- $\sqrt{49}=7$ car $7\ge0$ et $7^2=49$.
- $\sqrt{0{,}25}=0{,}5$ car $0{,}5\ge0$ et $0{,}5^2=0{,}25$.
- $\sqrt{\dfrac{9}{16}}=\dfrac34$ car $\dfrac34\ge0$ et $\left(\dfrac34\right)^2=\dfrac{9}{16}$.
- $\sqrt0=0$ et $\sqrt1=1$.
:::

:::regle
Pour tout nombre positif $a$ :
$$\left(\sqrt a\right)^2=a\qquad\text{et}\qquad\sqrt{a^2}=a.$$
:::

:::exemple
$\left(\sqrt{13}\right)^2=13$ ; $\left(\sqrt{6{,}15}\right)^2=6{,}15$ ; $\sqrt{7^2}=7$ ; $\sqrt{36\times81}=\sqrt{6^2\times9^2}=\sqrt{(6\times9)^2}=54$.
:::

:::remarque
- La racine carrée d’un nombre **strictement négatif n’existe pas** : $\sqrt{-4}$ n’a pas de sens, car aucun carré n’est négatif.
- Attention : pour $a$ négatif, $\sqrt{a^2}=-a$. Par exemple $\sqrt{(-5)^2}=\sqrt{25}=5=-(-5)$.
- Les nombres $0$, $1$, $4$, $9$, $16$, $25$, $36$, $49$, $64$, $81$, $100$, $121$, $144$… sont des **carrés parfaits** : leurs racines carrées sont des entiers.
- $\sqrt2\approx1{,}414$ et $\sqrt3\approx1{,}732$ ne sont pas des nombres décimaux : on les garde sous forme de radical dans les calculs exacts.
:::

# II. Racines carrées et opérations

## 1. Produit de deux racines carrées

:::propriete
Soient $a$ et $b$ deux nombres positifs. On a :
$$\sqrt a\times\sqrt b=\sqrt{a\times b}.$$
:::

:::demonstration
$\sqrt a\times\sqrt b$ est positif (produit de deux positifs) et $\left(\sqrt a\times\sqrt b\right)^2=\left(\sqrt a\right)^2\times\left(\sqrt b\right)^2=a\times b$. C’est donc le nombre positif dont le carré est $ab$, c’est-à-dire $\sqrt{ab}$.
:::

:::exemple
$\sqrt3\times\sqrt{12}=\sqrt{36}=6$ ; $\sqrt2\times\sqrt{50}=\sqrt{100}=10$ ; $\sqrt{18}=\sqrt{9\times2}=\sqrt9\times\sqrt2=3\sqrt2$.
:::

## 2. Quotient de deux racines carrées

:::propriete
Soient $a$ un nombre positif et $b$ un nombre strictement positif. On a :
$$\frac{\sqrt a}{\sqrt b}=\sqrt{\frac ab}.$$
:::

:::exemple
$\sqrt{\dfrac{49}{25}}=\dfrac{\sqrt{49}}{\sqrt{25}}=\dfrac75$ ; $\dfrac{\sqrt{12}}{\sqrt3}=\sqrt{\dfrac{12}3}=\sqrt4=2$.
:::

:::remarque
Il n’existe **pas** de règle analogue pour la somme ni pour la différence. En général :
$$\sqrt{a+b}\ne\sqrt a+\sqrt b.$$
Contre-exemple : $\sqrt{9+16}=\sqrt{25}=5$ alors que $\sqrt9+\sqrt{16}=3+4=7$.
:::

## 3. Simplifier une racine carrée

:::methode Écrire sous la forme $a\sqrt b$
Pour simplifier $\sqrt n$, on cherche dans $n$ le plus grand facteur qui est un carré parfait : si $n=k^2\times b$ avec $k\ge0$, alors
$$\sqrt n=\sqrt{k^2}\times\sqrt b=k\sqrt b.$$
:::

:::exemple
- $\sqrt{32}=\sqrt{16\times2}=4\sqrt2$.
- $\sqrt{200}=\sqrt{100\times2}=10\sqrt2$.
- $\sqrt{72}=\sqrt{36\times2}=6\sqrt2$.
- $\sqrt{75}=\sqrt{25\times3}=5\sqrt3$.
:::

## 4. Réduire une somme de radicaux

:::methode
On simplifie chaque racine carrée, puis on regroupe les termes qui ont le **même radical**, comme on regroupe des termes semblables : $a\sqrt c+b\sqrt c=(a+b)\sqrt c$.
:::

:::exemple
Réduire $A=7\sqrt3-\sqrt{27}+2\sqrt{12}$.

$\sqrt{27}=\sqrt{9\times3}=3\sqrt3$ et $\sqrt{12}=\sqrt{4\times3}=2\sqrt3$, donc
$$A=7\sqrt3-3\sqrt3+4\sqrt3=8\sqrt3.$$
:::

:::exemple
Réduire $B=\sqrt{20}+2\sqrt{45}-3\sqrt{80}$.

$\sqrt{20}=2\sqrt5$, $\sqrt{45}=3\sqrt5$ et $\sqrt{80}=4\sqrt5$, donc
$$B=2\sqrt5+6\sqrt5-12\sqrt5=-4\sqrt5.$$
:::

# III. Rendre rationnel le dénominateur

Rendre rationnel le dénominateur d’une écriture fractionnaire, c’est la transformer en une écriture égale dont le dénominateur ne contient plus de radical.

## 1. Premier cas : dénominateur de la forme $\sqrt b$

:::methode
On multiplie le numérateur et le dénominateur par $\sqrt b$, en utilisant $\sqrt b\times\sqrt b=b$ :
$$\frac{a}{\sqrt b}=\frac{a\times\sqrt b}{\sqrt b\times\sqrt b}=\frac{a\sqrt b}{b}.$$
:::

:::exemple
$$\frac{2}{\sqrt7}=\frac{2\sqrt7}{7}\qquad;\qquad\frac{5}{2\sqrt3}=\frac{5\sqrt3}{2\times3}=\frac{5\sqrt3}{6}\qquad;\qquad\frac{2+\sqrt5}{\sqrt3}=\frac{(2+\sqrt5)\sqrt3}{3}=\frac{2\sqrt3+\sqrt{15}}{3}.$$
:::

## 2. Deuxième cas : utilisation du conjugué

:::definition
Soient $a$ et $b$ deux nombres réels. Le **conjugué** de $a+b$ est $a-b$, et le conjugué de $a-b$ est $a+b$.
:::

:::propriete
D’après l’identité remarquable $(a+b)(a-b)=a^2-b^2$, pour $x\ge0$ et $y\ge0$ :
$$\left(\sqrt x+\sqrt y\right)\left(\sqrt x-\sqrt y\right)=x-y.$$
Le produit d’une expression par son conjugué ne contient donc plus de radical.
:::

:::methode
Quand le dénominateur est de la forme $\sqrt x+\sqrt y$ (ou $\sqrt x-\sqrt y$, ou $a+\sqrt y$…), on multiplie le numérateur et le dénominateur par le **conjugué** du dénominateur.
:::

:::exemple
$$\frac{2}{\sqrt5-\sqrt3}=\frac{2\left(\sqrt5+\sqrt3\right)}{\left(\sqrt5-\sqrt3\right)\left(\sqrt5+\sqrt3\right)}=\frac{2\left(\sqrt5+\sqrt3\right)}{5-3}=\sqrt5+\sqrt3.$$
$$\frac{6}{\sqrt7+1}=\frac{6\left(\sqrt7-1\right)}{\left(\sqrt7\right)^2-1^2}=\frac{6\left(\sqrt7-1\right)}{6}=\sqrt7-1.$$
:::

# IV. Résolution de l’équation $x^2=a$

:::regle
Soit $a$ un nombre réel. Pour résoudre l’équation $x^2=a$ :
1. si $a>0$, l’équation admet **deux solutions** : $\sqrt a$ et $-\sqrt a$ ;
2. si $a=0$, l’équation admet **une seule solution** : $0$ ;
3. si $a<0$, l’équation **n’admet pas de solution** (un carré n’est jamais négatif).
:::

:::exemple
- $x^2=11$ : comme $11>0$, les solutions sont $\sqrt{11}$ et $-\sqrt{11}$.
- $x^2=-8$ : comme $-8<0$, il n’y a pas de solution.
- $x^2=0$ : la seule solution est $0$.
- $x^2-25=0$ équivaut à $x^2=25$ : les solutions sont $5$ et $-5$.
- $(x-6)^2=0$ équivaut à $x-6=0$ : la solution est $6$.
:::

:::remarque
L’équation $(x-b)^2=a$ avec $a>0$ se ramène à $x-b=\sqrt a$ ou $x-b=-\sqrt a$, soit $x=b+\sqrt a$ ou $x=b-\sqrt a$.
:::

# Exercices

:::exercice Calculs directs
Calculer : $\sqrt{16}$ ; $\sqrt{\dfrac4{36}}$ ; $\sqrt{2^{12}}$ ; $\sqrt{(-49)^2}$ ; $\sqrt{\dfrac{0{,}25}{0{,}04}}$ ; $\sqrt{21+(-4)^2-1}$ ; $\sqrt9+\sqrt{81}$.
:::

:::exercice Forme $a\sqrt b$
Écrire chaque nombre sous la forme $a\sqrt2$ où $a$ est un entier : $\sqrt{18}$ ; $\sqrt{32}$ ; $\sqrt{200}$ ; $\sqrt{72}$.
:::

:::exercice Réduire
Réduire : $A=\sqrt{20}+2\sqrt{45}-3\sqrt{80}$ ; $B=\sqrt{12}+\sqrt{75}-\sqrt{27}$ ; $C=3\sqrt8+\sqrt{50}+2\sqrt{32}$.
:::

:::exercice Développer avec des radicaux
Développer et réduire : $D=\left(2\sqrt3+5\right)^2$ ; $E=\left(\sqrt7-\sqrt2\right)^2$ ; $F=\left(3\sqrt2-1\right)\left(3\sqrt2+1\right)$.
:::

:::exercice Dénominateurs rationnels
Rendre rationnel le dénominateur : $\dfrac{1}{\sqrt3}$ ; $\dfrac{2\sqrt3}{\sqrt5}$ ; $\dfrac{1}{\sqrt3+1}$ ; $\dfrac{4}{3-\sqrt5}$ ; $\dfrac{\sqrt2-1}{\sqrt2+1}$.
:::

:::exercice Équations
Résoudre : $x^2=49$ ; $x^2+9=0$ ; $5x^2=20$ ; $2x^2=6$ ; $(x-3)^2=16$.
:::

:::exercice Problème
Un carré a une aire de $50\ \text{cm}^2$.
1. Calculer la valeur exacte de la longueur de son côté, sous la forme $a\sqrt2$.
2. Calculer la valeur exacte de la longueur de sa diagonale.
:::

:::exercice Série — rendre rationnel
Écrire sans radical au dénominateur : $A=\dfrac{6}{\sqrt3}$ ; $B=\dfrac{2}{\sqrt5-1}$ ; $C=\dfrac{\sqrt2}{3+\sqrt2}$.
:::

:::exercice Série — comparer et simplifier
1. Simplifier : $D=\sqrt{50}-3\sqrt{8}+\sqrt{18}$ et $E=\left(2\sqrt3-1\right)^2$.
2. Comparer $3\sqrt5$ et $2\sqrt{11}$.
3. Montrer que $\left(\sqrt7-2\right)\left(\sqrt7+2\right)$ est un entier.
:::

:::exercice Approfondissement — radicaux imbriqués
1. Développer $\left(\sqrt5-1\right)^2$ et en déduire $\sqrt{6-2\sqrt5}$.
2. Montrer que $A=\sqrt{7+4\sqrt3}+\sqrt{7-4\sqrt3}$ est un entier (on calculera $\left(2\pm\sqrt3\right)^2$).
3. Montrer que $\dfrac{1}{\sqrt2+1}+\dfrac{1}{\sqrt3+\sqrt2}+\dfrac{1}{2+\sqrt3}=1$.
:::

:::exercice Approfondissement — comparer avec les carrés
Soit $a=\sqrt{11}-\sqrt{10}$ et $b=\sqrt{10}-3$.
1. Montrer que $a=\dfrac{1}{\sqrt{11}+\sqrt{10}}$ et $b=\dfrac{1}{\sqrt{10}+3}$.
2. En déduire la comparaison de $a$ et $b$.
:::

# Corrigés

:::corrige
$\sqrt{16}=4$ ; $\sqrt{\dfrac4{36}}=\dfrac26=\dfrac13$ ; $\sqrt{2^{12}}=\sqrt{\left(2^6\right)^2}=2^6=64$ ; $\sqrt{(-49)^2}=\sqrt{2401}=49$ ; $\sqrt{\dfrac{0{,}25}{0{,}04}}=\dfrac{0{,}5}{0{,}2}=2{,}5$ ; $\sqrt{21+16-1}=\sqrt{36}=6$ ; $\sqrt9+\sqrt{81}=3+9=12$.
:::

:::corrige
$\sqrt{18}=\sqrt{9\times2}=3\sqrt2$ ; $\sqrt{32}=\sqrt{16\times2}=4\sqrt2$ ; $\sqrt{200}=\sqrt{100\times2}=10\sqrt2$ ; $\sqrt{72}=\sqrt{36\times2}=6\sqrt2$.
:::

:::corrige
- $A=2\sqrt5+2\times3\sqrt5-3\times4\sqrt5=2\sqrt5+6\sqrt5-12\sqrt5=-4\sqrt5$.
- $B=2\sqrt3+5\sqrt3-3\sqrt3=4\sqrt3$.
- $C=3\times2\sqrt2+5\sqrt2+2\times4\sqrt2=6\sqrt2+5\sqrt2+8\sqrt2=19\sqrt2$.
:::

:::corrige
- $D=\left(2\sqrt3\right)^2+2\times2\sqrt3\times5+5^2=12+20\sqrt3+25=37+20\sqrt3$.
- $E=7-2\sqrt7\sqrt2+2=9-2\sqrt{14}$.
- $F=\left(3\sqrt2\right)^2-1^2=18-1=17$.
:::

:::corrige
- $\dfrac1{\sqrt3}=\dfrac{\sqrt3}{3}$ ; $\dfrac{2\sqrt3}{\sqrt5}=\dfrac{2\sqrt3\times\sqrt5}{5}=\dfrac{2\sqrt{15}}5$.
- $\dfrac1{\sqrt3+1}=\dfrac{\sqrt3-1}{3-1}=\dfrac{\sqrt3-1}2$.
- $\dfrac4{3-\sqrt5}=\dfrac{4\left(3+\sqrt5\right)}{9-5}=3+\sqrt5$.
- $\dfrac{\sqrt2-1}{\sqrt2+1}=\dfrac{\left(\sqrt2-1\right)^2}{2-1}=2-2\sqrt2+1=3-2\sqrt2$.
:::

:::corrige
- $x^2=49$ : $x=7$ ou $x=-7$.
- $x^2+9=0$ équivaut à $x^2=-9$ : pas de solution.
- $5x^2=20$ équivaut à $x^2=4$ : $x=2$ ou $x=-2$.
- $2x^2=6$ équivaut à $x^2=3$ : $x=\sqrt3$ ou $x=-\sqrt3$.
- $(x-3)^2=16$ : $x-3=4$ ou $x-3=-4$, donc $x=7$ ou $x=-1$.
:::

:::corrige
1. Si $c$ est le côté, $c^2=50$ et $c>0$, donc $c=\sqrt{50}=\sqrt{25\times2}=5\sqrt2\ \text{cm}$.
2. D’après le théorème de Pythagore, la diagonale $d$ vérifie $d^2=c^2+c^2=100$, donc $d=10\ \text{cm}$.
:::

:::corrige
- $A=\dfrac{6\sqrt3}{3}=2\sqrt3$.
- $B=\dfrac{2\left(\sqrt5+1\right)}{5-1}=\dfrac{\sqrt5+1}{2}$.
- $C=\dfrac{\sqrt2\left(3-\sqrt2\right)}{9-2}=\dfrac{3\sqrt2-2}{7}$.
:::

:::corrige
1. $D=5\sqrt2-6\sqrt2+3\sqrt2=2\sqrt2$ ; $E=12-4\sqrt3+1=13-4\sqrt3$.
2. $\left(3\sqrt5\right)^2=45$ et $\left(2\sqrt{11}\right)^2=44$ ; deux nombres positifs sont rangés comme leurs carrés : $3\sqrt5>2\sqrt{11}$.
3. $\left(\sqrt7\right)^2-2^2=7-4=3$.
:::

:::corrige
1. $\left(\sqrt5-1\right)^2=6-2\sqrt5$ et $\sqrt5-1>0$, donc $\sqrt{6-2\sqrt5}=\sqrt5-1$.
2. $\left(2+\sqrt3\right)^2=7+4\sqrt3$ et $\left(2-\sqrt3\right)^2=7-4\sqrt3$, avec $2-\sqrt3>0$ : $A=\left(2+\sqrt3\right)+\left(2-\sqrt3\right)=4$.
3. En rendant rationnels : $\left(\sqrt2-1\right)+\left(\sqrt3-\sqrt2\right)+\left(2-\sqrt3\right)=1$.
:::

:::corrige
1. On multiplie par l’expression conjuguée : $a=\dfrac{11-10}{\sqrt{11}+\sqrt{10}}$ et $b=\dfrac{10-9}{\sqrt{10}+3}$.
2. $\sqrt{11}+\sqrt{10}>\sqrt{10}+3$ (car $\sqrt{11}>3$), donc $a<b$.
:::
