---
id: 1ac-angles
titre: Les angles
niveau: 1ac
semestre: 1
duree: 7 heures
---

## Objectifs
- Nommer, mesurer et tracer un angle ; reconnaître les angles particuliers.
- Reconnaître des angles complémentaires, supplémentaires, adjacents et opposés par le sommet.
- Construire la bissectrice d’un angle et connaître sa propriété caractéristique.
- Construire le cercle inscrit dans un triangle.

## Prérequis
- Droites, demi-droites, droites perpendiculaires.
- Distance d’un point à une droite ; utilisation du rapporteur.

# I. Vocabulaire

:::definition
Un **angle** est une figure formée par deux demi-droites de même origine. L’origine commune est le **sommet** de l’angle ; les deux demi-droites sont ses **côtés**.

L’angle formé par $[OA)$ et $[OB)$ se note $\widehat{AOB}$ (le sommet au milieu). Sa mesure s’exprime en **degrés** et se mesure au **rapporteur**.
:::

```figure
{"type":"geometry","x":[-0.5,6.5],"y":[-0.5,4.5],"width":260,
 "segments":[{"from":[0,0],"to":[6,0]},{"from":[0,0],"to":[3.2,3.8]}],
 "points":[{"x":0,"y":0,"label":"O"},{"x":5,"y":0,"label":"A"},{"x":2.7,"y":3.2,"label":"B"}],
 "caption":"L’angle $\\widehat{AOB}$ de sommet $O$ et de côtés $[OA)$ et $[OB)$."}
```

# II. Angles particuliers

:::vocabulaire
| Angle | Mesure |
|---|---|
| Angle nul | $0°$ |
| Angle aigu | entre $0°$ et $90°$ |
| Angle droit | $90°$ |
| Angle obtus | entre $90°$ et $180°$ |
| Angle plat | $180°$ (côtés dans le prolongement l’un de l’autre) |
:::

# III. Angles associés

:::definition Angles complémentaires et supplémentaires
- Deux angles sont **complémentaires** si la somme de leurs mesures est $90°$.
- Deux angles sont **supplémentaires** si la somme de leurs mesures est $180°$.
:::

:::exemple
Un angle de $35°$ et un angle de $55°$ sont complémentaires ; un angle de $130°$ et un angle de $50°$ sont supplémentaires.
:::

:::definition Angles adjacents
Deux angles sont **adjacents** s’ils ont le **même sommet**, un **côté commun** et s’ils sont situés de part et d’autre de ce côté commun.
:::

:::definition Angles opposés par le sommet
Deux angles sont **opposés par le sommet** s’ils ont le même sommet et si leurs côtés sont dans le prolongement l’un de l’autre.
:::

```figure
{"type":"geometry","x":[-4.5,4.5],"y":[-3,3],"width":300,
 "segments":[{"from":[-4,-2],"to":[4,2]},{"from":[-3,2.6],"to":[3,-2.6]}],
 "points":[{"x":0,"y":0,"label":"O"},{"x":3.6,"y":1.8,"label":"A"},{"x":-3.6,"y":-1.8,"label":"C"},{"x":-2.7,"y":2.34,"label":"B"},{"x":2.7,"y":-2.34,"label":"D"}],
 "caption":"$\\widehat{AOB}$ et $\\widehat{COD}$ sont opposés par le sommet ; $\\widehat{AOB}$ et $\\widehat{BOC}$ sont adjacents et supplémentaires."}
```

:::propriete
Deux angles opposés par le sommet ont la **même mesure**.
:::

:::demonstration
$\widehat{AOB}+\widehat{BOC}=180°$ (angle plat $\widehat{AOC}$) et $\widehat{BOC}+\widehat{COD}=180°$ (angle plat $\widehat{BOD}$). Donc $\widehat{AOB}=180°-\widehat{BOC}=\widehat{COD}$.
:::

# IV. Bissectrice d’un angle

:::definition
La **bissectrice** d’un angle est la demi-droite issue de son sommet qui partage cet angle en **deux angles adjacents de même mesure**.
:::

:::exemple
Si $\widehat{xOy}=80°$ et $[Oz)$ est sa bissectrice, alors $\widehat{xOz}=\widehat{zOy}=40°$.
:::

:::methode Construire la bissectrice au compas
1. Un arc de centre $O$ coupe $[Ox)$ en $A$ et $[Oy)$ en $B$.
2. Deux arcs de même rayon, de centres $A$ et $B$, se coupent en $M$.
3. La demi-droite $[OM)$ est la bissectrice de $\widehat{xOy}$.
:::

:::propriete Propriété caractéristique
- **Directe** : si un point appartient à la bissectrice d’un angle, alors il est **équidistant** des côtés de cet angle.
- **Réciproque** : si un point situé à l’intérieur d’un angle est équidistant de ses côtés, alors il appartient à la bissectrice de cet angle.
:::

```figure
{"type":"geometry","x":[-0.5,7],"y":[-0.5,5],"width":290,
 "segments":[{"from":[0,0],"to":[7,0]},{"from":[0,0],"to":[4.3,4.3]},{"from":[0,0],"to":[6.5,2.69],"color":"brand"},{"from":[4,1.657],"to":[4,0],"dashed":true},{"from":[4,1.657],"to":[2.83,2.83],"dashed":true}],
 "points":[{"x":0,"y":0,"label":"O"},{"x":4,"y":1.657,"label":"M"},{"x":4,"y":0,"label":"H"},{"x":2.83,"y":2.83,"label":"K"},{"x":6.6,"y":0.35,"label":"x","dot":false},{"x":4.6,"y":4.4,"label":"y","dot":false},{"x":6.6,"y":3.1,"label":"z","dot":false}],
 "rightAngles":[{"at":[4,0],"u":[0,1],"v":[-1,0]}],
 "caption":"$M$ est sur la bissectrice $[Oz)$ : $MH=MK$."}
```

# V. Bissectrices d’un triangle et cercle inscrit

:::propriete
Les trois bissectrices des angles d’un triangle sont **concourantes** en un point $I$. Ce point est le **centre du cercle inscrit** dans le triangle, c’est-à-dire du cercle tangent aux trois côtés.
:::

:::methode Construire le cercle inscrit
1. Tracer deux bissectrices ; elles se coupent en $I$.
2. Construire le projeté orthogonal $H$ de $I$ sur un côté.
3. Tracer le cercle de centre $I$ et de rayon $IH$.
:::

```figure
{"type":"geometry","x":[-0.5,8.5],"y":[-0.6,5.8],"width":300,
 "polygons":[{"points":[[0,0],[8,0],[2.5,5.5]],"color":"ink","fill":false}],
 "circles":[{"c":[3.13,2.02],"r":2.02,"color":"brand"}],
 "segments":[{"from":[0,0],"to":[4.86,3.14],"dashed":true},{"from":[8,0],"to":[1.27,2.79],"dashed":true},{"from":[3.13,2.02],"to":[3.13,0]}],
 "points":[{"x":0,"y":0,"label":"A"},{"x":8,"y":0,"label":"B"},{"x":2.5,"y":5.5,"label":"C"},{"x":3.13,"y":2.02,"label":"I"},{"x":3.13,"y":0,"label":"H"}],
 "caption":"Le cercle inscrit, de centre $I$ (intersection des bissectrices) et de rayon $IH$."}
```

# Exercices

:::exercice Nature d’un angle
Donner la nature de chacun des angles : $45°$ ; $90°$ ; $135°$ ; $180°$ ; $12°$ ; $95°$.
:::

:::exercice Complémentaire et supplémentaire
1. Calculer le complémentaire d’un angle de $28°$, puis de $63°$.
2. Calculer le supplémentaire d’un angle de $72°$, puis de $155°$.
3. Deux angles supplémentaires ont la même mesure : quelle est cette mesure ?
:::

:::exercice Angles opposés par le sommet
Deux droites $(AC)$ et $(BD)$ se coupent en $O$, avec $\widehat{AOB}=65°$.
Calculer $\widehat{COD}$, $\widehat{BOC}$ et $\widehat{AOD}$ en justifiant.
:::

:::exercice Bissectrice
1. Tracer un angle $\widehat{xOy}=110°$ et construire sa bissectrice $[Oz)$. Calculer $\widehat{xOz}$.
2. Placer un point $M$ de $[Oz)$ ; construire ses projetés orthogonaux $H$ sur $[Ox)$ et $K$ sur $[Oy)$. Comparer $MH$ et $MK$ en justifiant.
3. Tracer le cercle de centre $M$ et de rayon $MH$. Que remarque-t-on ?
:::

:::exercice Cercle inscrit
Tracer un triangle $ABC$ tel que $AB=7$ cm, $AC=5$ cm et $BC=6$ cm. Construire son cercle inscrit.
:::

:::exercice Approfondissement — bissectrices de deux angles adjacents
$\widehat{AOB}$ et $\widehat{BOC}$ sont deux angles adjacents supplémentaires. $[OM)$ est la bissectrice de $\widehat{AOB}$ et $[ON)$ celle de $\widehat{BOC}$.
Montrer que $\widehat{MON}=90°$.
:::

:::exercice Approfondissement — angles et horloge
1. Quel angle forment les aiguilles d’une horloge à $3$ h ? à $5$ h ? à $9$ h $30$ ?
2. À quelle heure (entière) les aiguilles forment-elles un angle plat ?
:::

# Corrigés

:::corrige
Aigu ; droit ; obtus ; plat ; aigu ; obtus.
:::

:::corrige
1. $90°-28°=62°$ ; $90°-63°=27°$.
2. $180°-72°=108°$ ; $180°-155°=25°$.
3. $180°\div2=90°$ : ce sont deux angles droits.
:::

:::corrige
- $\widehat{COD}=\widehat{AOB}=65°$ (opposés par le sommet).
- $\widehat{BOC}=180°-65°=115°$ ($\widehat{AOB}$ et $\widehat{BOC}$ sont adjacents et forment l’angle plat $\widehat{AOC}$).
- $\widehat{AOD}=\widehat{BOC}=115°$ (opposés par le sommet).
:::

:::corrige
1. $\widehat{xOz}=110°\div2=55°$.
2. $M$ appartient à la bissectrice de $\widehat{xOy}$, il est donc équidistant de ses côtés : $MH=MK$.
3. Le cercle passe par $H$ et $K$ et est tangent aux deux côtés de l’angle.
:::

:::corrige
On construit deux bissectrices (par exemple celles de $\widehat A$ et $\widehat B$), qui se coupent en $I$ ; on construit le projeté orthogonal $H$ de $I$ sur $[AB]$ ; le cercle de centre $I$ et de rayon $IH$ est le cercle inscrit (il touche les trois côtés).
:::

:::corrige
$\widehat{MON}=\widehat{MOB}+\widehat{BON}=\dfrac{\widehat{AOB}}2+\dfrac{\widehat{BOC}}2=\dfrac{\widehat{AOB}+\widehat{BOC}}2=\dfrac{180°}2=90°$.
:::

:::corrige
1. Une heure correspond à $\dfrac{360°}{12}=30°$. À $3$ h : $90°$ ; à $5$ h : $150°$. À $9$ h $30$, la petite aiguille est entre $9$ et $10$ (à $285°$) et la grande sur $6$ ($180°$) : $105°$.
2. À $6$ h.
:::
