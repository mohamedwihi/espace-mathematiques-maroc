---
id: 3ac-fonctions-lineaires-affines
titre: Fonctions linéaires et fonctions affines
niveau: 3ac
semestre: 2
duree: 10 heures
---

## Objectifs
- Reconnaître une fonction linéaire et une fonction affine.
- Calculer une image et un antécédent.
- Déterminer le coefficient d’une fonction linéaire ou affine.
- Représenter graphiquement une fonction linéaire ou affine et lire un graphique.

## Prérequis
- Proportionnalité, pourcentages.
- Repère du plan, équation d’une droite.
- Équations du premier degré.

# I. Fonctions linéaires

## 1. Définition

:::definition
Soit $a$ un nombre réel. La fonction qui à tout nombre $x$ associe le nombre $ax$ s’appelle la **fonction linéaire de coefficient $a$**. On la note $f:x\mapsto ax$ ou $f(x)=ax$.
- $f(x)$ est l’**image** de $x$ par $f$ ;
- si $f(x)=y$, on dit que $x$ est un **antécédent** de $y$.
:::

:::exemple
$f(x)=3x$ est la fonction linéaire de coefficient $3$. L’image de $-2$ est $f(-2)=-6$. L’antécédent de $12$ est la solution de $3x=12$, soit $x=4$.
:::

:::remarque
Une fonction linéaire traduit une situation de **proportionnalité** : $a$ est le coefficient de proportionnalité. Par exemple, augmenter un prix de $20\,\%$ revient à appliquer la fonction linéaire $x\mapsto1{,}2x$.
:::

## 2. Coefficient d’une fonction linéaire

:::propriete
Si $f$ est une fonction linéaire et $x_0\ne0$, alors son coefficient est $a=\dfrac{f(x_0)}{x_0}$.
:::

:::exemple
$f$ est linéaire et $f(4)=-10$ : $a=\dfrac{-10}4=-\dfrac52$, donc $f(x)=-\dfrac52x$.
:::

:::propriete
Pour une fonction linéaire $f$ : $f(x+x')=f(x)+f(x')$ et $f(kx)=kf(x)$.
:::

## 3. Représentation graphique

:::propriete
Dans un repère, la représentation graphique de la fonction linéaire $x\mapsto ax$ est la **droite d’équation $y=ax$**, qui passe par l’**origine** $O$. Le coefficient $a$ est le coefficient directeur de cette droite.
:::

# II. Fonctions affines

## 1. Définition

:::definition
Soient $a$ et $b$ deux réels. La fonction qui à tout nombre $x$ associe le nombre $ax+b$ s’appelle une **fonction affine**. On la note $f:x\mapsto ax+b$.
:::

:::remarque
- Si $b=0$, $f(x)=ax$ : une fonction linéaire est une fonction affine particulière.
- Si $a=0$, $f(x)=b$ : $f$ est une fonction **constante**.
:::

:::exemple
$g(x)=-2x+5$. L’image de $3$ est $g(3)=-1$. L’antécédent de $9$ : $-2x+5=9$ donne $x=-2$.
:::

## 2. Coefficient d’une fonction affine

:::propriete
Si $f(x)=ax+b$ et $x_1\ne x_2$, alors
$$a=\frac{f(x_2)-f(x_1)}{x_2-x_1}.$$
Les accroissements de $f(x)$ sont proportionnels aux accroissements de $x$.
:::

:::methode Déterminer une fonction affine à partir de deux images
1. Calculer $a=\dfrac{f(x_2)-f(x_1)}{x_2-x_1}$.
2. Calculer $b$ en remplaçant dans $f(x_1)=ax_1+b$.
:::

:::exemple
$f$ est affine avec $f(1)=3$ et $f(4)=9$. $a=\dfrac{9-3}{4-1}=2$, puis $3=2\times1+b$ donne $b=1$ : $f(x)=2x+1$.
:::

## 3. Représentation graphique

:::propriete
La représentation graphique de la fonction affine $x\mapsto ax+b$ est la **droite d’équation $y=ax+b$** :
- $a$ est son **coefficient directeur** ;
- $b$ est son **ordonnée à l’origine** : elle passe par le point $(0;b)$.
:::

```figure
{"type":"graph","x":[-3,4],"y":[-4,6],"width":340,
 "functions":[{"fn":"2*x","label":"f(x)=2x","color":"ink"},{"fn":"2*x+1","label":"g(x)=2x+1","color":"brand"},{"fn":"-x+3","label":"h(x)=-x+3","color":"saffron"}],
 "points":[{"x":0,"y":1,"label":"(0;1)"},{"x":0,"y":3,"label":"(0;3)"}],
 "caption":"$f$ est linéaire (sa droite passe par $O$) ; $g$ et $h$ sont affines. Les droites de $f$ et $g$ sont parallèles (même coefficient $2$)."}
```

:::propriete Sens de variation
- Si $a>0$, la fonction affine est **croissante** (la droite « monte »).
- Si $a<0$, elle est **décroissante** (la droite « descend »).
- Si $a=0$, elle est **constante**.
:::

# Exercices

:::exercice Images et antécédents
$f(x)=-4x$ et $g(x)=3x-2$.
1. Calculer $f(5)$, $f\left(-\dfrac12\right)$, $g(0)$ et $g(-3)$.
2. Déterminer l’antécédent de $10$ par $f$ et l’antécédent de $10$ par $g$.
:::

:::exercice Fonction linéaire
$f$ est une fonction linéaire telle que $f(6)=-9$. Déterminer $f(x)$, puis calculer $f(-4)$.
:::

:::exercice Fonction affine
$h$ est une fonction affine telle que $h(-1)=7$ et $h(2)=-2$. Déterminer $h(x)$, puis l’antécédent de $0$.
:::

:::exercice Pourcentages
Un article coûte $x$ DH. Pendant les soldes, son prix baisse de $30\,\%$.
1. Exprimer le prix soldé $p(x)$. Quelle est la nature de la fonction $p$ ?
2. Un article soldé coûte $210$ DH. Quel était son prix initial ?
:::

:::exercice Deux tarifs
Une salle de sport propose : tarif A, $f(x)=60x$ ; tarif B, $g(x)=30x+300$, où $x$ est le nombre de mois.
1. Calculer le prix de chaque tarif pour $8$ mois et pour $12$ mois.
2. Pour combien de mois les deux tarifs sont-ils égaux ? Interpréter graphiquement.
:::

# Corrigés

:::corrige
1. $f(5)=-20$ ; $f\left(-\dfrac12\right)=2$ ; $g(0)=-2$ ; $g(-3)=-11$.
2. $-4x=10$ donne $x=-\dfrac52$ ; $3x-2=10$ donne $x=4$.
:::

:::corrige
$a=\dfrac{-9}6=-\dfrac32$, donc $f(x)=-\dfrac32x$ et $f(-4)=6$.
:::

:::corrige
$a=\dfrac{-2-7}{2-(-1)}=-3$ ; $7=-3\times(-1)+b$ donne $b=4$ : $h(x)=-3x+4$. Antécédent de $0$ : $-3x+4=0$, $x=\dfrac43$.
:::

:::corrige
1. $p(x)=x-0{,}3x=0{,}7x$ : $p$ est une fonction linéaire de coefficient $0{,}7$.
2. $0{,}7x=210$, donc $x=300$ DH.
:::

:::corrige
1. Pour $8$ mois : $f(8)=480$ DH et $g(8)=540$ DH. Pour $12$ mois : $f(12)=720$ DH et $g(12)=660$ DH.
2. $60x=30x+300$ donne $x=10$ : pour $10$ mois les deux tarifs coûtent $600$ DH. Graphiquement, c’est l’abscisse du point d’intersection des deux droites ; avant $10$ mois le tarif A est moins cher, après le tarif B l’est.
:::
