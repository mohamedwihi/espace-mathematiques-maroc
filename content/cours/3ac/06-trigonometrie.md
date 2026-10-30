---
id: 3ac-trigonometrie
titre: Trigonométrie
niveau: 3ac
semestre: 1
duree: 10 heures
---

## Objectifs
- Connaître le cosinus, le sinus et la tangente d’un angle aigu dans un triangle rectangle.
- Calculer une longueur ou une mesure d’angle à l’aide de ces rapports.
- Connaître et utiliser les relations $\cos^2x+\sin^2x=1$ et $\tan x=\dfrac{\sin x}{\cos x}$.
- Connaître les rapports trigonométriques des angles particuliers et des angles complémentaires.

## Prérequis
- Triangle rectangle, théorème de Pythagore.
- Cosinus d’un angle aigu (2AC).
- Calculs avec les racines carrées.

# I. Cosinus, sinus et tangente d’un angle aigu

:::definition
Dans un triangle rectangle, pour un angle aigu :
- le **cosinus** est le quotient du côté **adjacent** par l’**hypoténuse** ;
- le **sinus** est le quotient du côté **opposé** par l’**hypoténuse** ;
- la **tangente** est le quotient du côté **opposé** par le côté **adjacent**.
:::

```figure
{"type":"geometry","x":[-0.6,5],"y":[-0.6,3.6],"width":320,
 "polygons":[{"points":[[0,0],[4,0],[4,3]],"color":"brand"}],
 "rightAngles":[{"at":[4,0],"u":[-1,0],"v":[0,1]}],
 "points":[{"x":0,"y":0,"label":"B"},{"x":4,"y":0,"label":"A"},{"x":4,"y":3,"label":"C"}],
 "caption":"Triangle $ABC$ rectangle en $A$ : pour l’angle $\\hat B$, $[AB]$ est le côté adjacent, $[AC]$ le côté opposé et $[BC]$ l’hypoténuse."}
```

$$\cos\hat B=\frac{AB}{BC}\qquad\sin\hat B=\frac{AC}{BC}\qquad\tan\hat B=\frac{AC}{AB}$$

:::remarque
- Le cosinus et le sinus d’un angle aigu sont compris strictement entre $0$ et $1$ : $0<\cos\hat B<1$ et $0<\sin\hat B<1$ (car l’hypoténuse est le plus grand côté).
- La tangente d’un angle aigu est un nombre strictement positif.
- Ces nombres n’ont pas d’unité. On les obtient, ainsi que les angles, avec la calculatrice réglée **en degrés**.
:::

:::exemple Calculer les rapports
$ABC$ est rectangle en $A$ avec $AB=4$ et $BC=5$. Alors $AC^2=25-16=9$, $AC=3$ et
$$\cos\hat B=\frac45\qquad\sin\hat B=\frac35\qquad\tan\hat B=\frac34.$$
:::

:::exemple Calculer une longueur
$EFG$ est rectangle en $F$ avec $EG=10$ et $\hat E=35^\circ$. Calculer $EF$.

$\cos\hat E=\dfrac{EF}{EG}$, donc $EF=EG\times\cos35^\circ=10\times\cos35^\circ\approx8{,}19$.
:::

:::exemple Calculer un angle
$ABC$ est rectangle en $B$ avec $AB=4{,}8$ et $AC=6{,}9$. Alors $\cos\widehat{BAC}=\dfrac{4{,}8}{6{,}9}\approx0{,}696$ et, à la calculatrice, $\widehat{BAC}\approx45{,}9^\circ$.
:::

# II. Formules trigonométriques

:::propriete
Pour tout angle aigu de mesure $x$ :
$$\cos^2x+\sin^2x=1\qquad\text{et}\qquad\tan x=\frac{\sin x}{\cos x}.$$
:::

:::demonstration
Dans le triangle $ABC$ rectangle en $A$ : $\cos^2\hat B+\sin^2\hat B=\dfrac{AB^2+AC^2}{BC^2}=\dfrac{BC^2}{BC^2}=1$ (théorème de Pythagore), et $\dfrac{\sin\hat B}{\cos\hat B}=\dfrac{AC/BC}{AB/BC}=\dfrac{AC}{AB}=\tan\hat B$.
:::

:::remarque
- La première formule permet de calculer $\sin x$ quand on connaît $\cos x$ (ou l’inverse).
- La deuxième permet de calculer l’un des trois rapports quand on connaît les deux autres.
:::

:::exemple
Soit $x$ un angle aigu tel que $\cos x=0{,}8$. Calculer $\sin x$ et $\tan x$.

$\sin^2x=1-\cos^2x=1-0{,}64=0{,}36$ et $\sin x>0$, donc $\sin x=0{,}6$. Puis $\tan x=\dfrac{0{,}6}{0{,}8}=0{,}75$.
:::

:::exemple Simplifier une expression
$A=(\cos x+\sin x)^2+(\cos x-\sin x)^2=2\left(\cos^2x+\sin^2x\right)=2$.
:::

# III. Angles particuliers

:::propriete
| Angle $x$ | $30^\circ$ | $45^\circ$ | $60^\circ$ |
|---|---|---|---|
| $\sin x$ | $\dfrac12$ | $\dfrac{\sqrt2}2$ | $\dfrac{\sqrt3}2$ |
| $\cos x$ | $\dfrac{\sqrt3}2$ | $\dfrac{\sqrt2}2$ | $\dfrac12$ |
| $\tan x$ | $\dfrac{\sqrt3}3$ | $1$ | $\sqrt3$ |
:::

:::demonstration Pour $45^\circ$
Dans un triangle rectangle isocèle de côtés $1$, l’hypoténuse vaut $\sqrt2$ ; donc $\cos45^\circ=\sin45^\circ=\dfrac1{\sqrt2}=\dfrac{\sqrt2}2$ et $\tan45^\circ=1$.

Pour $30^\circ$ et $60^\circ$, on utilise la moitié d’un triangle équilatéral de côté $2$ : les côtés sont $1$, $\sqrt3$ et $2$.
:::

# IV. Angles complémentaires

:::definition
Deux angles sont **complémentaires** lorsque la somme de leurs mesures est égale à $90^\circ$. Par exemple, $15^\circ$ et $75^\circ$ sont complémentaires.
:::

:::propriete
Si $x$ et $y$ sont les mesures de deux angles complémentaires, alors :
$$\cos x=\sin y\qquad\sin x=\cos y\qquad\tan x=\frac1{\tan y}.$$
:::

:::remarque
Dans un triangle $ABC$ rectangle en $A$, les angles $\hat B$ et $\hat C$ sont complémentaires : le côté adjacent à l’un est le côté opposé à l’autre.
:::

:::exemple
Calculer $A=\cos^220^\circ+\cos^270^\circ$. Comme $20^\circ+70^\circ=90^\circ$, $\cos70^\circ=\sin20^\circ$, donc $A=\cos^220^\circ+\sin^220^\circ=1$.
:::

# Exercices

:::exercice Rapports dans un triangle
$IJK$ est rectangle en $I$ avec $IJ=6$ et $IK=8$. Calculer $JK$, puis $\cos\hat J$, $\sin\hat J$ et $\tan\hat J$.
:::

:::exercice Longueurs
$ABC$ est rectangle en $A$ avec $BC=12$ et $\hat B=40^\circ$. Calculer $AB$ et $AC$ (arrondir au dixième).
:::

:::exercice À partir du sinus
Soit $x$ un angle aigu tel que $\sin x=\dfrac{\sqrt5}3$. Calculer $\cos x$ et $\tan x$.
:::

:::exercice Angles particuliers
Calculer $A=\sin30^\circ+\cos60^\circ$ ; $B=\tan45^\circ-2\sin^245^\circ$ ; $C=\cos^230^\circ-\sin^260^\circ$.
:::

:::exercice Complémentaires
Calculer sans calculatrice : $D=\sin^235^\circ+\sin^255^\circ$ et $E=\tan25^\circ\times\tan65^\circ$.
:::

:::exercice Problème
Une échelle de $4$ m est posée contre un mur et fait un angle de $60^\circ$ avec le sol horizontal. À quelle hauteur touche-t-elle le mur ? À quelle distance du mur est son pied ?
:::

:::exercice Série — relations trigonométriques
$x$ est la mesure d’un angle aigu telle que $\cos x=\dfrac{\sqrt5}{3}$.
1. Calculer $\sin x$ puis $\tan x$.
2. Simplifier $A=\left(\cos x+\sin x\right)^2+\left(\cos x-\sin x\right)^2$.
:::

:::exercice Série — calcul de hauteur
D’un point $P$ situé à $40$ m du pied d’une tour verticale, on voit le sommet de la tour sous un angle de $35°$ avec l’horizontale.
Calculer la hauteur de la tour (arrondir au dixième ; $\tan35°\approx0{,}70$).
:::

# Corrigés

:::corrige
$JK^2=36+64=100$, donc $JK=10$. Pour l’angle $\hat J$ : adjacent $IJ=6$, opposé $IK=8$.

$\cos\hat J=\dfrac6{10}=0{,}6$ ; $\sin\hat J=\dfrac8{10}=0{,}8$ ; $\tan\hat J=\dfrac86=\dfrac43$.
:::

:::corrige
$AB=BC\times\cos40^\circ\approx12\times0{,}766\approx9{,}2$ et $AC=BC\times\sin40^\circ\approx12\times0{,}643\approx7{,}7$.
:::

:::corrige
$\cos^2x=1-\dfrac59=\dfrac49$ et $\cos x>0$, donc $\cos x=\dfrac23$. Puis $\tan x=\dfrac{\sqrt5/3}{2/3}=\dfrac{\sqrt5}2$.
:::

:::corrige
- $A=\dfrac12+\dfrac12=1$.
- $B=1-2\times\dfrac24=1-1=0$.
- $C=\dfrac34-\dfrac34=0$.
:::

:::corrige
- $55^\circ=90^\circ-35^\circ$, donc $\sin55^\circ=\cos35^\circ$ et $D=\sin^235^\circ+\cos^235^\circ=1$.
- $\tan65^\circ=\dfrac1{\tan25^\circ}$, donc $E=1$.
:::

:::corrige
L’échelle est l’hypoténuse. Hauteur : $h=4\sin60^\circ=4\times\dfrac{\sqrt3}2=2\sqrt3\approx3{,}46$ m. Distance au mur : $d=4\cos60^\circ=4\times\dfrac12=2$ m.
:::

:::corrige
1. $\sin^2x=1-\dfrac59=\dfrac49$, et $\sin x>0$ : $\sin x=\dfrac23$. $\tan x=\dfrac{\sin x}{\cos x}=\dfrac{2}{\sqrt5}=\dfrac{2\sqrt5}{5}$.
2. $A=2\left(\cos^2x+\sin^2x\right)=2$ (les doubles produits s’éliminent).
:::

:::corrige
Le triangle formé est rectangle au pied de la tour : $\tan35°=\dfrac{h}{40}$, donc $h=40\tan35°\approx28{,}0$ m.
:::
