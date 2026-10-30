---
id: tc-projection
titre: La projection dans le plan
niveau: tc
semestre: 1
duree: 6 heures
---

## Objectifs
- Construire le projeté d’un point sur une droite parallèlement à une autre droite.
- Connaître les propriétés de la projection : conservation du milieu et du coefficient de colinéarité.
- Utiliser le théorème de Thalès et sa réciproque, vus comme conséquences de la projection.

## Prérequis
- Calcul vectoriel, colinéarité.
- Théorème de Thalès (3AC).
- Parallélogramme, trapèze.

# I. Projection sur une droite

## 1. Projection parallèlement à une droite

:::definition
Soient $(D)$ et $(\Delta)$ deux droites **sécantes** du plan, et $M$ un point. La parallèle à $(\Delta)$ passant par $M$ coupe $(D)$ en un unique point $M'$. On dit que $M'$ est le **projeté** de $M$ sur $(D)$ **parallèlement** à $(\Delta)$.

L’application qui à tout point $M$ associe $M'$ est la **projection** sur $(D)$ parallèlement à $(\Delta)$.
:::

```figure
{"type":"geometry","x":[-0.5,7],"y":[-0.8,4],"width":340,
 "segments":[{"from":[-0.5,0],"to":[7,0],"color":"brand"},{"from":[0.2,-0.6],"to":[1.6,3.6],"color":"saffron"},{"from":[3.9,3],"to":[2.9,0],"dashed":true},{"from":[5.6,1.5],"to":[5.1,0],"dashed":true}],
 "points":[{"x":3.9,"y":3,"label":"M"},{"x":2.9,"y":0,"label":"M'"},{"x":5.6,"y":1.5,"label":"N"},{"x":5.1,"y":0,"label":"N'"},{"x":6.4,"y":0.25,"label":"(D)","dot":false},{"x":1.6,"y":3.6,"label":"(Δ)","dot":false}],
 "caption":"$M'$ et $N'$ sont les projetés de $M$ et $N$ sur $(D)$ parallèlement à $(\\Delta)$."}
```

:::remarque
- Si $M\in(D)$, alors $M'=M$ : les points de $(D)$ sont leurs propres projetés.
- Si $(\Delta)\perp(D)$, on parle de **projection orthogonale** sur $(D)$.
- Deux points distincts peuvent avoir le même projeté : c’est le cas si $(MN)\parallel(\Delta)$.
:::

## 2. Conservation du milieu

:::propriete
Si $I$ est le milieu de $[AB]$, alors son projeté $I'$ est le milieu de $[A'B']$, où $A'$ et $B'$ sont les projetés de $A$ et $B$.
:::

# II. Théorème de Thalès

:::theoreme Théorème de Thalès direct
Soient $(D_1)$ et $(D_2)$ deux droites sécantes en $A$. Soient $B$ et $M$ deux points de $(D_1)$, et $C$ et $N$ deux points de $(D_2)$, distincts de $A$. Si $(BC)\parallel(MN)$, alors
$$\frac{AM}{AB}=\frac{AN}{AC}=\frac{MN}{BC}\qquad\text{et, vectoriellement,}\qquad\overrightarrow{AM}=k\overrightarrow{AB}\Rightarrow\overrightarrow{AN}=k\overrightarrow{AC}.$$
:::

:::theoreme Réciproque
Avec les mêmes notations, si $\overrightarrow{AM}=k\overrightarrow{AB}$ et $\overrightarrow{AN}=k\overrightarrow{AC}$ (même réel $k$), alors $(MN)\parallel(BC)$. En longueurs : si $\dfrac{AM}{AB}=\dfrac{AN}{AC}$ et si les points $A$, $B$, $M$ et $A$, $C$, $N$ sont dans le même ordre, alors $(MN)\parallel(BC)$.
:::

# III. Conservation du coefficient de colinéarité

:::propriete
Soit $p$ une projection sur $(D)$ parallèlement à $(\Delta)$. Si $A'$, $B'$, $C'$, $D'$ sont les projetés de $A$, $B$, $C$, $D$ et si
$$\overrightarrow{CD}=k\overrightarrow{AB},\qquad\text{alors}\qquad\overrightarrow{C'D'}=k\overrightarrow{A'B'}.$$
La projection **conserve le coefficient de colinéarité** de deux vecteurs.
:::

:::remarque
La conservation du milieu est le cas particulier $\overrightarrow{AI}=\dfrac12\overrightarrow{AB}\Rightarrow\overrightarrow{A'I'}=\dfrac12\overrightarrow{A'B'}$. Le théorème de Thalès en est aussi une conséquence : on projette sur $(D_2)$ parallèlement à $(BC)$.
:::

:::exemple
Soit $ABC$ un triangle, $E\in[AB]$ tel que $\overrightarrow{AE}=\dfrac13\overrightarrow{AB}$. La parallèle à $(BC)$ passant par $E$ coupe $(AC)$ en $F$. On projette sur $(AC)$ parallèlement à $(BC)$ : $A\mapsto A$, $E\mapsto F$, $B\mapsto C$. Par conservation du coefficient : $\overrightarrow{AF}=\dfrac13\overrightarrow{AC}$.

Puis $\overrightarrow{EF}=\overrightarrow{EA}+\overrightarrow{AF}=-\dfrac13\overrightarrow{AB}+\dfrac13\overrightarrow{AC}=\dfrac13\overrightarrow{BC}$.
:::

# Exercices

:::exercice Construction
Tracer deux droites sécantes $(D)$ et $(\Delta)$ et placer trois points $A$, $B$, $C$ non situés sur $(D)$. Construire leurs projetés sur $(D)$ parallèlement à $(\Delta)$. Que dire si $(AB)\parallel(\Delta)$ ?
:::

:::exercice Trapèze
$ABCD$ est un trapèze de bases $[AB]$ et $[CD]$. $E$ et $F$ sont les milieux de $[AD]$ et $[BC]$. En projetant sur $(BC)$ parallèlement à $(AB)$, montrer que la parallèle à $(AB)$ passant par $E$ passe par $F$.
:::

:::exercice Coefficient
$ABC$ est un triangle. $M$ est le point de $(AB)$ tel que $\overrightarrow{AM}=-2\overrightarrow{AB}$. La parallèle à $(BC)$ passant par $M$ coupe $(AC)$ en $N$. Exprimer $\overrightarrow{AN}$ en fonction de $\overrightarrow{AC}$, puis $\overrightarrow{MN}$ en fonction de $\overrightarrow{BC}$.
:::

:::exercice Thalès
$ABC$ est un triangle avec $AB=6$, $AC=9$ et $BC=12$. $M\in[AB]$ avec $AM=2$ ; la parallèle à $(BC)$ passant par $M$ coupe $[AC]$ en $N$. Calculer $AN$ et $MN$.
:::

:::exercice Réciproque
$ABC$ est un triangle. $E$ et $F$ sont tels que $\overrightarrow{AE}=3\overrightarrow{AB}$ et $\overrightarrow{AF}=3\overrightarrow{AC}$. Montrer que $(EF)\parallel(BC)$ et que $EF=3BC$.
:::

:::exercice Série — projection et milieux
$ABC$ est un triangle et $I$ le milieu de $[AB]$. On note $I'$ le projeté de $I$ sur $(BC)$ parallèlement à $(AC)$.
1. Quel est le projeté de $A$ ? celui de $B$ ?
2. En déduire que $I'$ est le milieu de $[BC]$.
:::

:::exercice Série — rapport conservé
Sur une droite $(D)$, les points $A$, $B$, $C$ vérifient $\overrightarrow{AC}=\dfrac35\overrightarrow{AB}$. Leurs projetés sur une droite $(\Delta)$ parallèlement à une direction donnée sont $A'$, $B'$, $C'$, avec $A'B'=10$ cm.
Calculer $A'C'$.
:::

# Corrigés

:::corrige
Pour chaque point, on trace la parallèle à $(\Delta)$ qui le contient et on prend son intersection avec $(D)$. Si $(AB)\parallel(\Delta)$, $A$ et $B$ sont sur la même parallèle à $(\Delta)$ : ils ont le même projeté.
:::

:::corrige
Projection $p$ sur $(BC)$ parallèlement à $(AB)$ : $p(A)=B$ et $p(D)=D'$ où $D'$ est l’intersection de $(BC)$ avec la parallèle à $(AB)$ passant par $D$ ; comme $(CD)\parallel(AB)$, $D'=C$. $E$ est le milieu de $[AD]$, donc $p(E)$ est le milieu de $[BC]$, c’est-à-dire $F$ : la parallèle à $(AB)$ passant par $E$ passe bien par $F$.
:::

:::corrige
Projection sur $(AC)$ parallèlement à $(BC)$ : $A\mapsto A$, $B\mapsto C$, $M\mapsto N$. Donc $\overrightarrow{AN}=-2\overrightarrow{AC}$ et $\overrightarrow{MN}=\overrightarrow{MA}+\overrightarrow{AN}=2\overrightarrow{AB}-2\overrightarrow{AC}=-2\overrightarrow{BC}$.
:::

:::corrige
D’après le théorème de Thalès : $\dfrac{AM}{AB}=\dfrac{AN}{AC}=\dfrac{MN}{BC}$, soit $\dfrac26=\dfrac{AN}9=\dfrac{MN}{12}$. Donc $AN=3$ et $MN=4$.
:::

:::corrige
$\overrightarrow{EF}=\overrightarrow{EA}+\overrightarrow{AF}=-3\overrightarrow{AB}+3\overrightarrow{AC}=3\left(\overrightarrow{BA}+\overrightarrow{AC}\right)=3\overrightarrow{BC}$. Les vecteurs sont colinéaires : $(EF)\parallel(BC)$, et $EF=3BC$.
:::

:::corrige
1. $A\in(AC)$ : son projeté est $C$ (intersection de $(BC)$ et de la parallèle à $(AC)$ passant par $A$, qui est $(AC)$ elle-même). $B\in(BC)$ est son propre projeté.
2. La projection conserve le milieu : $I'$ est le milieu de $[CB]$.
:::

:::corrige
La projection conserve le coefficient de colinéarité : $\overrightarrow{A'C'}=\dfrac35\overrightarrow{A'B'}$, donc $A'C'=\dfrac35\times10=6$ cm.
:::
