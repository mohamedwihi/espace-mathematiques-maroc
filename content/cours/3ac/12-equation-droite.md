---
id: 3ac-equation-droite
titre: Équation d’une droite
niveau: 3ac
semestre: 2
duree: 10 heures
---

## Objectifs
- Connaître l’équation réduite d’une droite et interpréter le coefficient directeur et l’ordonnée à l’origine.
- Tracer une droite définie par son équation.
- Déterminer l’équation réduite d’une droite passant par deux points.
- Reconnaître des droites parallèles ou perpendiculaires à l’aide de leurs coefficients directeurs.

## Prérequis
- Repère du plan, coordonnées d’un point et d’un vecteur.
- Équations du premier degré.
- Proportionnalité.

# I. Équation réduite d’une droite

## 1. Droite non parallèle à l’axe des ordonnées

:::propriete
Toute droite $(D)$ non parallèle à l’axe des ordonnées a une équation de la forme
$$y=mx+p,$$
appelée **équation réduite** de $(D)$. Un point $M(x;y)$ appartient à $(D)$ si et seulement si ses coordonnées vérifient $y=mx+p$.
- $m$ est le **coefficient directeur** (ou pente) de $(D)$ ;
- $p$ est l’**ordonnée à l’origine** : $(D)$ coupe l’axe des ordonnées au point $(0;p)$.
:::

:::remarque
- Une droite parallèle à l’axe des **abscisses** a une équation de la forme $y=p$ (coefficient directeur nul).
- Une droite parallèle à l’axe des **ordonnées** a une équation de la forme $x=c$ : elle n’a pas d’équation réduite $y=mx+p$.
- Si $p=0$, la droite $y=mx$ passe par l’origine $O$.
:::

:::propriete Coefficient directeur
Si $A(x_A;y_A)$ et $B(x_B;y_B)$ sont deux points distincts de $(D)$ avec $x_A\ne x_B$, alors
$$m=\frac{y_B-y_A}{x_B-x_A}.$$
Quand $x$ augmente de $1$, $y$ varie de $m$.
:::

## 2. Tracer une droite définie par son équation

:::methode
On choisit deux valeurs de $x$, on calcule les valeurs de $y$ correspondantes, on place les deux points et on trace la droite qui les relie.
:::

:::exemple
Tracer $(D):y=2x-1$. Pour $x=0$, $y=-1$ ; pour $x=2$, $y=3$. La droite passe par $(0;-1)$ et $(2;3)$.
:::

```figure
{"type":"graph","x":[-3,4],"y":[-4,5],"width":340,"orthonormal":true,
 "functions":[{"fn":"2*x-1","label":"(D):\\ y=2x-1","color":"brand"},{"fn":"-0.5*x+2","label":"(\\Delta):\\ y=-\\frac12x+2","color":"saffron"}],
 "points":[{"x":0,"y":-1,"label":"(0;−1)"},{"x":2,"y":3,"label":"(2;3)"}],
 "caption":"Les droites $(D)$ et $(\\Delta)$ sont perpendiculaires : $2\\times\\left(-\\frac12\\right)=-1$."}
```

## 3. Équation d’une droite passant par deux points

:::methode
Pour trouver l’équation réduite de la droite $(AB)$ :
1. calculer le coefficient directeur $m=\dfrac{y_B-y_A}{x_B-x_A}$ ;
2. remplacer $x$ et $y$ par les coordonnées de $A$ (ou de $B$) dans $y=mx+p$ pour trouver $p$.
:::

:::exemple
$A(1;3)$ et $B(3;7)$. $m=\dfrac{7-3}{3-1}=2$. Puis $3=2\times1+p$ donne $p=1$. Donc $(AB):y=2x+1$.

Vérification avec $B$ : $2\times3+1=7$.
:::

:::methode Le point appartient-il à la droite ?
On remplace $x$ par l’abscisse du point dans l’équation et on compare le résultat avec son ordonnée.
:::

:::exemple
$C(-2;-3)$ appartient-il à $(AB):y=2x+1$ ? $2\times(-2)+1=-3$ : oui.
:::

# II. Droites parallèles, droites perpendiculaires

## 1. Condition de parallélisme

:::propriete
Deux droites d’équations $y=mx+p$ et $y=m'x+p'$ sont **parallèles** si et seulement si elles ont le **même coefficient directeur** : $m=m'$.
:::

:::exemple
$(D_1):y=3x-2$ et $(D_2):y=3x+5$ sont parallèles ($m=m'=3$).

La parallèle à $(D_1)$ passant par $E(1;4)$ a une équation $y=3x+p$ avec $4=3+p$ : $y=3x+1$.
:::

## 2. Condition de perpendicularité

:::propriete
Dans un repère **orthonormé**, deux droites d’équations $y=mx+p$ et $y=m'x+p'$ sont **perpendiculaires** si et seulement si
$$m\times m'=-1.$$
:::

:::exemple
$(D):y=2x-1$ et $(\Delta):y=-\dfrac12x+2$ : $2\times\left(-\dfrac12\right)=-1$, donc $(D)\perp(\Delta)$.

La perpendiculaire à $(D)$ passant par $F(4;0)$ a un coefficient directeur $-\dfrac12$ : $y=-\dfrac12x+p$ avec $0=-2+p$, donc $y=-\dfrac12x+2$.
:::

# Exercices

:::exercice Lecture
Donner le coefficient directeur et l’ordonnée à l’origine de : $y=-3x+4$ ; $y=\dfrac x2$ ; $y=5$ ; $y=1-x$.
:::

:::exercice Points de la droite
$(D):y=-2x+3$. Les points $A(1;1)$, $B(-2;8)$ et $C(4;-6)$ appartiennent-ils à $(D)$ ? Calculer l’ordonnée du point de $(D)$ d’abscisse $\dfrac32$.
:::

:::exercice Équation par deux points
Déterminer l’équation réduite de la droite $(AB)$ : 1) $A(0;2)$ et $B(3;8)$ ; 2) $A(-1;4)$ et $B(2;-2)$ ; 3) $A(2;5)$ et $B(-3;5)$.
:::

:::exercice Parallèle et perpendiculaire
$(D):y=\dfrac23x-1$ et $M(3;2)$.
1. Déterminer l’équation de la parallèle à $(D)$ passant par $M$.
2. Déterminer l’équation de la perpendiculaire à $(D)$ passant par $M$.
:::

:::exercice Triangle rectangle
Dans un repère orthonormé, $A(1;1)$, $B(3;5)$ et $C(5;0)$. Calculer les coefficients directeurs de $(AB)$ et $(AC)$. Le triangle $ABC$ est-il rectangle en $A$ ?
:::

:::exercice Série — droites parallèles et perpendiculaires
On donne $A(1;3)$ et $B(3;-1)$.
1. Déterminer l’équation réduite de la droite $(AB)$.
2. Déterminer l’équation de la droite $(D)$ passant par $C(0;2)$ et parallèle à $(AB)$.
3. Déterminer l’équation de la droite $(\Delta)$ passant par $C$ et perpendiculaire à $(AB)$.
:::

:::exercice Série — intersection et appartenance
On considère $(D_1):y=2x-3$ et $(D_2):y=-x+6$.
1. Le point $K(4;5)$ appartient-il à $(D_1)$ ? à $(D_2)$ ?
2. Calculer les coordonnées du point d’intersection de $(D_1)$ et $(D_2)$.
:::

:::exercice Approfondissement — hauteur et orthocentre
On donne $A(0;4)$, $B(-2;0)$ et $C(6;0)$.
1. Déterminer l’équation de la hauteur issue de $B$ (perpendiculaire à $(AC)$).
2. La hauteur issue de $A$ est l’axe des ordonnées. En déduire les coordonnées de l’orthocentre $H$.
:::

:::exercice Approfondissement — droites paramétrées
Pour tout réel $m$, on considère la droite $(D_m):y=mx+2-3m$.
1. Montrer que toutes les droites $(D_m)$ passent par un même point $P$.
2. Déterminer $m$ pour que $(D_m)$ soit parallèle à $y=2x+5$, puis perpendiculaire à cette droite.
:::

# Corrigés

:::corrige
$y=-3x+4$ : $m=-3$, $p=4$ ; $y=\dfrac x2$ : $m=\dfrac12$, $p=0$ ; $y=5$ : $m=0$, $p=5$ ; $y=1-x$ : $m=-1$, $p=1$.
:::

:::corrige
- $A$ : $-2+3=1$, oui. $B$ : $4+3=7\ne8$, non. $C$ : $-8+3=-5\ne-6$, non.
- Pour $x=\dfrac32$ : $y=-3+3=0$.
:::

:::corrige
1. $m=\dfrac{8-2}{3-0}=2$ et $p=2$ : $y=2x+2$.
2. $m=\dfrac{-2-4}{2+1}=-2$ ; $4=-2\times(-1)+p$ donne $p=2$ : $y=-2x+2$.
3. $m=0$ : $y=5$.
:::

:::corrige
1. Même coefficient $\dfrac23$ : $2=\dfrac23\times3+p$, $p=0$ : $y=\dfrac23x$.
2. Coefficient $m'$ avec $\dfrac23m'=-1$, soit $m'=-\dfrac32$ : $2=-\dfrac32\times3+p$, $p=\dfrac{13}2$ : $y=-\dfrac32x+\dfrac{13}2$.
:::

:::corrige
$m_{AB}=\dfrac{5-1}{3-1}=2$ et $m_{AC}=\dfrac{0-1}{5-1}=-\dfrac14$. Comme $2\times\left(-\dfrac14\right)=-\dfrac12\ne-1$, les droites ne sont pas perpendiculaires : $ABC$ n’est pas rectangle en $A$.
:::

:::corrige
1. Pente : $m=\dfrac{-1-3}{3-1}=-2$ ; $3=-2\times1+p$ donne $p=5$ : $(AB):y=-2x+5$.
2. Même pente : $(D):y=-2x+2$.
3. Pente $m'$ avec $m\times m'=-1$ : $m'=\dfrac12$ ; $(\Delta):y=\dfrac12x+2$.
:::

:::corrige
1. $2\times4-3=5$ : $K\in(D_1)$. $-4+6=2\ne5$ : $K\notin(D_2)$.
2. $2x-3=-x+6\iff x=3$, puis $y=3$ : le point $(3;3)$.
:::

:::corrige
1. Pente de $(AC)$ : $\dfrac{0-4}{6-0}=-\dfrac23$, donc la hauteur a pour pente $\dfrac32$ : $y=\dfrac32(x+2)=\dfrac32x+3$.
2. Avec $x=0$ : $y=3$, donc $H(0;3)$.
:::

:::corrige
1. $y=m(x-3)+2$ : pour $x=3$, $y=2$ quel que soit $m$ : $P(3;2)$.
2. Parallèle : $m=2$. Perpendiculaire : $2m=-1$, $m=-\dfrac12$.
:::
