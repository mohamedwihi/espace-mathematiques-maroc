---
id: tc-trigonometrie-1
titre: Calcul trigonométrique (partie 1)
niveau: tc
semestre: 1
duree: 12 heures
---

## Objectifs
- Utiliser le radian et convertir des mesures d’angles.
- Repérer un point sur le cercle trigonométrique par ses abscisses curvilignes.
- Connaître les angles orientés et leurs mesures.
- Définir et utiliser $\cos x$, $\sin x$ et $\tan x$ ; connaître leur signe et les valeurs remarquables.
- Utiliser les relations entre les lignes trigonométriques de $x$, $-x$, $\pi-x$, $\pi+x$ et $\dfrac\pi2-x$.

## Prérequis
- Trigonométrie dans le triangle rectangle (3AC).
- Cercle, périmètre, angles inscrits.
- Repère orthonormé.

# I. Le radian

:::definition
Le **radian** est la mesure de l’angle au centre qui intercepte, sur un cercle de rayon $r$, un arc de longueur $r$. Comme le cercle entier mesure $2\pi r$, un tour complet vaut $2\pi$ radians :
$$180^\circ=\pi\ \text{rad}.$$
:::

:::propriete Conversion
Si un angle mesure $x$ en degrés et $\alpha$ en radians : $\dfrac{x}{180}=\dfrac{\alpha}{\pi}$. On utilise aussi le **grade** : $200\ \text{gr}=\pi\ \text{rad}$.
| Degrés | $0$ | $30$ | $45$ | $60$ | $90$ | $120$ | $135$ | $150$ | $180$ |
|---|---|---|---|---|---|---|---|---|---|
| Radians | $0$ | $\dfrac\pi6$ | $\dfrac\pi4$ | $\dfrac\pi3$ | $\dfrac\pi2$ | $\dfrac{2\pi}3$ | $\dfrac{3\pi}4$ | $\dfrac{5\pi}6$ | $\pi$ |
:::

:::propriete
Sur un cercle de rayon $r$, un arc intercepté par un angle au centre de $\alpha$ radians a pour longueur $\ell=r\alpha$.
:::

# II. Cercle trigonométrique et abscisses curvilignes

:::definition
- **Orienter** le plan, c’est choisir un sens de rotation positif : le sens **direct** (inverse des aiguilles d’une montre).
- Le **cercle trigonométrique** est le cercle de centre $O$ et de rayon $1$, orienté dans le sens direct, muni d’une origine $I$.
- Si $M$ est un point de ce cercle et $\alpha$ une mesure de l’arc $\overset{\frown}{IM}$, alors les réels $\alpha+2k\pi$ ($k\in\mathbb Z$) sont les **abscisses curvilignes** de $M$. Une seule d’entre elles appartient à $]-\pi;\pi]$ : c’est l’**abscisse curviligne principale**.
:::

:::exemple
Le point d’abscisse curviligne $\dfrac{17\pi}{4}$ : $\dfrac{17\pi}4=\dfrac\pi4+2\times2\pi$. Son abscisse curviligne principale est $\dfrac\pi4$.

Pour $-\dfrac{11\pi}{3}$ : $-\dfrac{11\pi}3=\dfrac\pi3-2\times2\pi$ ; abscisse principale $\dfrac\pi3$.
:::

# III. Angles orientés

:::definition
Soient $\vec u$ et $\vec v$ deux vecteurs non nuls, $M$ et $N$ les points du cercle trigonométrique tels que $\overrightarrow{OM}$ et $\overrightarrow{ON}$ ont même direction et même sens que $\vec u$ et $\vec v$. Si $\alpha$ et $\beta$ sont des abscisses curvilignes de $M$ et $N$, une mesure de l’**angle orienté** $(\vec u,\vec v)$ est $\beta-\alpha$. Ses mesures sont les réels $\beta-\alpha+2k\pi$, et on écrit
$$(\vec u,\vec v)\equiv\beta-\alpha\ [2\pi].$$
:::

:::propriete
Pour tous vecteurs non nuls $\vec u$, $\vec v$, $\vec w$ :
- $(\vec v,\vec u)\equiv-(\vec u,\vec v)\ [2\pi]$ ;
- **relation de Chasles** : $(\vec u,\vec v)+(\vec v,\vec w)\equiv(\vec u,\vec w)\ [2\pi]$.
:::

# IV. Lignes trigonométriques d’un réel

:::definition
Le plan est muni d’un repère orthonormé direct $(O,\vec i,\vec j)$ et $M$ est le point du cercle trigonométrique d’abscisse curviligne $x$.
- Le **cosinus** de $x$ est l’abscisse de $M$ ; le **sinus** de $x$ est l’ordonnée de $M$ : $M(\cos x;\sin x)$.
- Si $\cos x\ne0$, la **tangente** de $x$ est $\tan x=\dfrac{\sin x}{\cos x}$.
:::

```figure
{"type":"geometry","x":[-1.4,1.6],"y":[-1.3,1.3],"width":300,
 "circles":[{"c":[0,0],"r":1}],
 "segments":[{"from":[-1.3,0],"to":[1.4,0]},{"from":[0,-1.2],"to":[0,1.2]},{"from":[0,0],"to":[0.766,0.643],"color":"brand"},{"from":[0.766,0.643],"to":[0.766,0],"dashed":true},{"from":[0.766,0.643],"to":[0,0.643],"dashed":true}],
 "points":[{"x":0,"y":0,"label":"O"},{"x":1,"y":0,"label":"I"},{"x":0,"y":1,"label":"J"},{"x":0.766,"y":0.643,"label":"M"},{"x":0.62,"y":-0.22,"label":"cos x","dot":false},{"x":-0.5,"y":0.72,"label":"sin x","dot":false}],
 "caption":"Sur le cercle trigonométrique, $M(\\cos x;\\sin x)$."}
```

:::propriete
Pour tout réel $x$ et tout entier $k$ :
- $-1\le\cos x\le1$ et $-1\le\sin x\le1$ ;
- $\cos^2x+\sin^2x=1$ ;
- $\cos(x+2k\pi)=\cos x$ et $\sin(x+2k\pi)=\sin x$ ; $\tan(x+k\pi)=\tan x$ ;
- si $\cos x\ne0$ : $1+\tan^2x=\dfrac1{\cos^2x}$.
:::

## Signes

:::propriete
| Quadrant | $\left]0;\dfrac\pi2\right[$ | $\left]\dfrac\pi2;\pi\right[$ | $\left]-\pi;-\dfrac\pi2\right[$ | $\left]-\dfrac\pi2;0\right[$ |
|---|---|---|---|---|
| $\cos x$ | $+$ | $-$ | $-$ | $+$ |
| $\sin x$ | $+$ | $+$ | $-$ | $-$ |
| $\tan x$ | $+$ | $-$ | $+$ | $-$ |
:::

## Valeurs remarquables

:::propriete
| $x$ | $0$ | $\dfrac\pi6$ | $\dfrac\pi4$ | $\dfrac\pi3$ | $\dfrac\pi2$ | $\pi$ |
|---|---|---|---|---|---|---|
| $\cos x$ | $1$ | $\dfrac{\sqrt3}2$ | $\dfrac{\sqrt2}2$ | $\dfrac12$ | $0$ | $-1$ |
| $\sin x$ | $0$ | $\dfrac12$ | $\dfrac{\sqrt2}2$ | $\dfrac{\sqrt3}2$ | $1$ | $0$ |
| $\tan x$ | $0$ | $\dfrac{\sqrt3}3$ | $1$ | $\sqrt3$ | non défini | $0$ |
:::

:::exemple
Sachant que $\cos x=-\dfrac35$ et $x\in\left]\dfrac\pi2;\pi\right[$, calculer $\sin x$ et $\tan x$.

$\sin^2x=1-\dfrac9{25}=\dfrac{16}{25}$ et $\sin x>0$ sur cet intervalle, donc $\sin x=\dfrac45$ et $\tan x=\dfrac{4/5}{-3/5}=-\dfrac43$.
:::

# V. Relations entre les angles

:::propriete
Pour tout réel $x$ :
| Angle | $\cos$ | $\sin$ | $\tan$ |
|---|---|---|---|
| $-x$ | $\cos x$ | $-\sin x$ | $-\tan x$ |
| $\pi-x$ | $-\cos x$ | $\sin x$ | $-\tan x$ |
| $\pi+x$ | $-\cos x$ | $-\sin x$ | $\tan x$ |
| $\dfrac\pi2-x$ | $\sin x$ | $\cos x$ | $\dfrac1{\tan x}$ |
| $\dfrac\pi2+x$ | $-\sin x$ | $\cos x$ | $-\dfrac1{\tan x}$ |
:::

:::remarque
Ces relations se lisent sur le cercle trigonométrique par symétries : $-x$ (symétrie par rapport à l’axe des abscisses), $\pi-x$ (axe des ordonnées), $\pi+x$ (centre $O$), $\dfrac\pi2-x$ (première bissectrice).
:::

:::exemple
$\cos\dfrac{5\pi}6=\cos\left(\pi-\dfrac\pi6\right)=-\dfrac{\sqrt3}2$ ; $\sin\dfrac{7\pi}6=\sin\left(\pi+\dfrac\pi6\right)=-\dfrac12$ ; $\tan\left(-\dfrac\pi3\right)=-\sqrt3$.

$A=\cos(\pi-x)+\cos(\pi+x)+2\cos x=-\cos x-\cos x+2\cos x=0$.
:::

# Exercices

:::exercice Conversions
Convertir en radians : $72^\circ$, $210^\circ$, $-135^\circ$. Convertir en degrés : $\dfrac{5\pi}{12}$, $\dfrac{7\pi}{4}$. Convertir $60^\circ$ en grades.
:::

:::exercice Abscisse principale
Déterminer l’abscisse curviligne principale des points d’abscisses curvilignes $\dfrac{29\pi}{6}$, $-\dfrac{13\pi}{4}$ et $\dfrac{100\pi}{3}$.
:::

:::exercice Valeurs exactes
Calculer : $\cos\dfrac{2\pi}3$, $\sin\dfrac{3\pi}4$, $\tan\dfrac{5\pi}6$, $\cos\left(-\dfrac{\pi}{4}\right)$, $\sin\dfrac{11\pi}{6}$.
:::

:::exercice Un sinus connu
Sachant que $\sin x=\dfrac{\sqrt5}3$ et $x\in\left]\dfrac\pi2;\pi\right[$, calculer $\cos x$ et $\tan x$.
:::

:::exercice Simplifications
Simplifier : $B=\sin(\pi-x)+\cos\left(\dfrac\pi2-x\right)-2\sin(-x)$ et $C=\cos^2\dfrac\pi8+\cos^2\dfrac{3\pi}8$.
:::

:::exercice Arc
Sur un cercle de rayon $6$ cm, calculer la longueur de l’arc intercepté par un angle au centre de $\dfrac{2\pi}3$.
:::

# Corrigés

:::corrige
$72^\circ=\dfrac{2\pi}5$ ; $210^\circ=\dfrac{7\pi}6$ ; $-135^\circ=-\dfrac{3\pi}4$ ; $\dfrac{5\pi}{12}=75^\circ$ ; $\dfrac{7\pi}4=315^\circ$ ; $60^\circ=\dfrac{200}{180}\times60\approx66{,}67$ gr.
:::

:::corrige
$\dfrac{29\pi}6=\dfrac{5\pi}6+4\pi$ : $\dfrac{5\pi}6$. $\quad-\dfrac{13\pi}4=\dfrac{3\pi}4-4\pi$ : $\dfrac{3\pi}4$. $\quad\dfrac{100\pi}3=\dfrac{4\pi}{3}+32\pi$ et $\dfrac{4\pi}3-2\pi=-\dfrac{2\pi}3$ : $-\dfrac{2\pi}3$.
:::

:::corrige
$\cos\dfrac{2\pi}3=-\dfrac12$ ; $\sin\dfrac{3\pi}4=\dfrac{\sqrt2}2$ ; $\tan\dfrac{5\pi}6=-\dfrac{\sqrt3}3$ ; $\cos\left(-\dfrac\pi4\right)=\dfrac{\sqrt2}2$ ; $\sin\dfrac{11\pi}6=\sin\left(-\dfrac\pi6\right)=-\dfrac12$.
:::

:::corrige
$\cos^2x=1-\dfrac59=\dfrac49$ et $\cos x<0$ sur l’intervalle, donc $\cos x=-\dfrac23$ et $\tan x=\dfrac{\sqrt5/3}{-2/3}=-\dfrac{\sqrt5}2$.
:::

:::corrige
- $B=\sin x+\sin x+2\sin x=4\sin x$.
- $\dfrac{3\pi}8=\dfrac\pi2-\dfrac\pi8$, donc $\cos\dfrac{3\pi}8=\sin\dfrac\pi8$ et $C=\cos^2\dfrac\pi8+\sin^2\dfrac\pi8=1$.
:::

:::corrige
$\ell=r\alpha=6\times\dfrac{2\pi}3=4\pi\approx12{,}57$ cm.
:::
