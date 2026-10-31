---
id: 1ac-droites-plan
titre: Droites dans le plan
niveau: 1ac
semestre: 1
duree: 6 heures
---

## Objectifs
- Connaître et noter les droites, demi-droites et segments.
- Reconnaître des points alignés et les positions relatives de deux droites.
- Construire des droites parallèles et perpendiculaires et connaître leurs propriétés.
- Construire le milieu et la médiatrice d’un segment ; connaître la propriété de la médiatrice.

## Prérequis
- Utilisation de la règle, de l’équerre et du compas.

# I. Droite, demi-droite, segment

:::definition Droite
Par deux points distincts $A$ et $B$ passe **une seule droite**, notée $(AB)$. Une droite est illimitée des deux côtés.
:::

:::definition Points alignés
Des points sont **alignés** s’ils appartiennent à une même droite. On note $M\in(AB)$ si $M$ appartient à $(AB)$ et $N\notin(AB)$ sinon.
:::

:::definition Demi-droite
La **demi-droite** $[AB)$ est la partie de la droite $(AB)$ limitée par le point $A$ (son **origine**) et contenant $B$.
:::

:::definition Segment
Le **segment** $[AB]$ est la partie de la droite $(AB)$ comprise entre $A$ et $B$ ; $A$ et $B$ sont ses **extrémités**. Sa longueur se note $AB$.
:::

```figure
{"type":"geometry","x":[-0.5,10.5],"y":[-0.5,4.6],"width":340,
 "segments":[{"from":[0,4],"to":[10,4]},{"from":[2,2.2],"to":[10,2.2]},{"from":[2,0.4],"to":[6,0.4]}],
 "points":[{"x":2,"y":4,"label":"A"},{"x":6,"y":4,"label":"B"},{"x":2,"y":2.2,"label":"A"},{"x":6,"y":2.2,"label":"B"},{"x":2,"y":0.4,"label":"A"},{"x":6,"y":0.4,"label":"B"},{"x":8.6,"y":4.45,"label":"(AB)","dot":false},{"x":8.6,"y":2.65,"label":"[AB)","dot":false},{"x":4,"y":0.85,"label":"[AB]","dot":false}],
 "caption":"Une droite, une demi-droite et un segment."}
```

# II. Positions de deux droites

:::definition Droites sécantes
Deux droites sont **sécantes** si elles ont un seul point commun, appelé **point d’intersection**.
:::

:::definition Droites perpendiculaires
Deux droites sont **perpendiculaires** si elles sont sécantes en formant un **angle droit**. On note $(D)\perp(\Delta)$.
:::

:::definition Droites parallèles
Deux droites sont **parallèles** si elles n’ont **aucun point commun** ou si elles sont **confondues**. On note $(D)\parallel(\Delta)$.
:::

```figure
{"type":"geometry","x":[-0.5,12],"y":[-0.5,4.5],"width":360,
 "segments":[{"from":[0,0.5],"to":[3,4]},{"from":[0,3.5],"to":[3.2,0.3]},{"from":[4,2],"to":[7.5,2]},{"from":[5.75,0.2],"to":[5.75,3.8]},{"from":[8.5,0.8],"to":[11.8,2.6]},{"from":[8.5,2],"to":[11.8,3.8]}],
 "rightAngles":[{"at":[5.75,2],"u":[1,0],"v":[0,1]}],
 "caption":"Droites sécantes, perpendiculaires, parallèles."}
```

:::propriete Propriétés des droites parallèles et perpendiculaires
- **P1** : par un point donné, il passe **une seule** droite parallèle à une droite donnée.
- **P2** : par un point donné, il passe **une seule** droite perpendiculaire à une droite donnée.
- **P3** : si deux droites sont parallèles à une même troisième, alors elles sont parallèles entre elles.
- **P4** : si deux droites sont perpendiculaires à une même troisième, alors elles sont parallèles.
- **P5** : si deux droites sont parallèles, toute droite perpendiculaire à l’une est perpendiculaire à l’autre.
:::

:::methode Construire avec l’équerre et la règle
- Pour tracer la perpendiculaire à $(D)$ passant par $M$ : on place un côté de l’angle droit de l’équerre sur $(D)$ et on fait glisser jusqu’à $M$.
- Pour tracer la parallèle à $(D)$ passant par $M$ : on trace la perpendiculaire $(\Delta)$ à $(D)$ passant par $M$, puis la perpendiculaire à $(\Delta)$ passant par $M$ (propriété P4).
:::

:::definition Distance d’un point à une droite
La **distance** du point $M$ à la droite $(D)$ est la longueur $MH$, où $H$ est le pied de la perpendiculaire à $(D)$ passant par $M$. C’est la plus courte distance entre $M$ et un point de $(D)$.
:::

# III. Milieu et médiatrice d’un segment

:::definition Milieu
Le **milieu** d’un segment $[AB]$ est le point $I$ de $[AB]$ tel que $IA=IB=\dfrac{AB}2$.
:::

:::definition Médiatrice
La **médiatrice** d’un segment est la droite **perpendiculaire** à ce segment en son **milieu**.
:::

```figure
{"type":"geometry","x":[-0.5,8.5],"y":[-1,5],"width":300,
 "segments":[{"from":[1,1.5],"to":[7,1.5]},{"from":[4,-0.7],"to":[4,4.8],"color":"brand"},{"from":[1,1.5],"to":[4,4],"dashed":true},{"from":[7,1.5],"to":[4,4],"dashed":true}],
 "points":[{"x":1,"y":1.5,"label":"A"},{"x":7,"y":1.5,"label":"B"},{"x":4,"y":1.5,"label":"I"},{"x":4,"y":4,"label":"M"},{"x":4.6,"y":-0.4,"label":"(Δ)","dot":false}],
 "rightAngles":[{"at":[4,1.5],"u":[1,0],"v":[0,1]}],
 "caption":"$(\\Delta)$ est la médiatrice de $[AB]$ ; $M\\in(\\Delta)$ donc $MA=MB$."}
```

:::propriete Propriété caractéristique de la médiatrice
- Si un point appartient à la médiatrice d’un segment, alors il est **équidistant** des extrémités de ce segment.
- Réciproquement, si un point est équidistant des extrémités d’un segment, alors il appartient à sa médiatrice.
:::

:::methode Construire la médiatrice au compas
On trace deux arcs de cercle de centre $A$ puis $B$, de même rayon (supérieur à $\dfrac{AB}2$). Ils se coupent en deux points équidistants de $A$ et $B$ : la droite qui les joint est la médiatrice.
:::

# Exercices

:::exercice Notations
Placer trois points non alignés $A$, $B$, $C$.
1. Tracer la droite $(AB)$, la demi-droite $[AC)$ et le segment $[BC]$.
2. Placer un point $M$ de $[AC)$ qui n’appartient pas à $[AC]$, puis compléter avec $\in$ ou $\notin$ : $M\ldots[AC)$ ; $M\ldots[AC]$ ; $B\ldots(AC)$.
:::

:::exercice Parallèles et perpendiculaires
Soit $(D)$ une droite et $M$ un point extérieur à $(D)$.
1. Construire la droite $(\Delta)$ perpendiculaire à $(D)$ passant par $M$ ; elle coupe $(D)$ en $H$.
2. Construire la droite $(L)$ parallèle à $(D)$ passant par $M$.
3. Que peut-on dire des droites $(\Delta)$ et $(L)$ ? Justifier.
:::

:::exercice Propriétés
On sait que $(D_1)\parallel(D_2)$ et $(D_2)\parallel(D_3)$, et que $(L)\perp(D_1)$.
1. Que peut-on dire de $(D_1)$ et $(D_3)$ ? Justifier.
2. Que peut-on dire de $(L)$ et $(D_3)$ ? Justifier.
:::

:::exercice Médiatrice
1. Tracer un segment $[AB]$ de longueur $6$ cm, puis construire son milieu $I$ et sa médiatrice $(\Delta)$.
2. Placer un point $M$ de $(\Delta)$ tel que $MA=5$ cm. Que vaut $MB$ ? Justifier.
3. Le point $N$ vérifie $NA=NB=4$ cm. À quelle droite appartient-il ?
:::

:::exercice Approfondissement — nombre de droites
1. Combien de droites passent par deux points parmi trois points non alignés ? parmi quatre points dont trois quelconques ne sont pas alignés ?
2. Combien de droites pour $n$ points (trois jamais alignés) ? Vérifier pour $n=5$.
:::

:::exercice Approfondissement — médiatrices
$A$, $B$, $C$ sont trois points non alignés. On trace les médiatrices $(\Delta_1)$ de $[AB]$ et $(\Delta_2)$ de $[BC]$ ; elles se coupent en $O$.
1. Montrer que $OA=OB=OC$.
2. En déduire que $O$ appartient à la médiatrice de $[AC]$.
3. Que peut-on dire du cercle de centre $O$ passant par $A$ ?
:::

# Corrigés

:::corrige
2. $M\in[AC)$ ; $M\notin[AC]$ ; $B\notin(AC)$ car $A$, $B$, $C$ ne sont pas alignés.
:::

:::corrige
3. $(\Delta)\perp(D)$ et $(L)\parallel(D)$ : si deux droites sont parallèles, toute perpendiculaire à l’une est perpendiculaire à l’autre (P5), donc $(\Delta)\perp(L)$.
:::

:::corrige
1. $(D_1)$ et $(D_3)$ sont parallèles à la même droite $(D_2)$, donc $(D_1)\parallel(D_3)$ (P3).
2. $(L)\perp(D_1)$ et $(D_1)\parallel(D_3)$, donc $(L)\perp(D_3)$ (P5).
:::

:::corrige
2. $M$ appartient à la médiatrice de $[AB]$, donc $MB=MA=5$ cm.
3. $N$ est équidistant de $A$ et $B$, donc il appartient à la médiatrice $(\Delta)$ de $[AB]$.
:::

:::corrige
1. $3$ droites, puis $6$ droites.
2. Chaque point est relié aux $n-1$ autres, et chaque droite est comptée deux fois : $\dfrac{n(n-1)}2$. Pour $n=5$ : $10$ droites.
:::

:::corrige
1. $O\in(\Delta_1)$ donc $OA=OB$ ; $O\in(\Delta_2)$ donc $OB=OC$. Ainsi $OA=OB=OC$.
2. $OA=OC$ : $O$ est équidistant de $A$ et $C$, il est sur la médiatrice de $[AC]$.
3. Il passe aussi par $B$ et $C$ : c’est le cercle passant par les trois points.
:::
