---
id: 1ac-triangles
titre: Les triangles
niveau: 1ac
semestre: 1
duree: 6 heures
---

## Objectifs
- Connaître l’inégalité triangulaire et l’utiliser pour savoir si un triangle est constructible.
- Connaître et utiliser la somme des angles d’un triangle.
- Reconnaître et construire les triangles particuliers (rectangle, isocèle, équilatéral) et connaître leurs propriétés.

## Prérequis
- Angles, mesure et construction ; parallèles et sécante.
- Utilisation du compas et du rapporteur.

# I. Inégalité triangulaire

:::propriete
Pour trois points $A$, $B$ et $C$ du plan :
$$AC\le AB+BC.$$
L’égalité $AC=AB+BC$ a lieu si et seulement si le point $B$ appartient au segment $[AC]$.
:::

:::exemple
Peut-on construire un triangle de côtés $4$ cm, $5$ cm et $10$ cm ? Non, car $4+5=9<10$. Avec $4$ cm, $5$ cm et $8$ cm, oui : $4+5=9>8$.
:::

:::remarque
Pour savoir si un triangle est constructible, il suffit de vérifier que la plus grande longueur est inférieure à la somme des deux autres.
:::

# II. Le triangle

:::vocabulaire
Un triangle $ABC$ a trois **sommets** $A$, $B$, $C$, trois **côtés** $[AB]$, $[BC]$, $[AC]$ et trois **angles** $\widehat{A}$, $\widehat{B}$, $\widehat{C}$. Le côté $[BC]$ est le côté **opposé** au sommet $A$.
:::

:::methode Construire un triangle connaissant ses trois côtés
Pour $AB=6$ cm, $AC=4$ cm, $BC=5$ cm : on trace $[AB]$, puis un arc de centre $A$ de rayon $4$ cm et un arc de centre $B$ de rayon $5$ cm ; ils se coupent en $C$.
:::

# III. Somme des angles d’un triangle

:::theoreme
La somme des mesures des angles d’un triangle est égale à $180°$ :
$$\widehat A+\widehat B+\widehat C=180°.$$
:::

:::demonstration
On trace la parallèle $(L)$ à $(BC)$ passant par $A$. Avec les sécantes $(AB)$ et $(AC)$, les angles alternes-internes sont égaux : les trois angles du triangle se retrouvent côte à côte en $A$ et forment un angle plat, soit $180°$.
:::

```figure
{"type":"geometry","x":[-1.5,9.5],"y":[-0.6,4.8],"width":330,
 "polygons":[{"points":[[0,0],[8,0],[3,4]],"color":"brand"}],
 "segments":[{"from":[-1,4],"to":[9,4],"dashed":true}],
 "points":[{"x":0,"y":0,"label":"B"},{"x":8,"y":0,"label":"C"},{"x":3,"y":4,"label":"A"},{"x":8.6,"y":4.35,"label":"(L)","dot":false}],
 "caption":"$(L)\\parallel(BC)$ : les trois angles du triangle forment en $A$ un angle plat."}
```

:::exemple
Dans un triangle $ABC$, $\widehat A=70°$ et $\widehat B=45°$, donc $\widehat C=180°-(70°+45°)=65°$.
:::

# IV. Triangles particuliers

:::definition Triangle rectangle
Un triangle **rectangle** a un angle droit. Le côté opposé à l’angle droit est l’**hypoténuse**.
:::

:::propriete
Dans un triangle rectangle, les deux angles aigus sont **complémentaires** (leur somme est $90°$).
:::

:::definition Triangle isocèle
Un triangle **isocèle** a deux côtés de même longueur. Si $AB=AC$, le point $A$ est le **sommet principal** et $[BC]$ est la **base**.
:::

:::propriete
- Si un triangle est isocèle, alors ses **angles à la base** ont la même mesure.
- Réciproquement, si un triangle a deux angles de même mesure, alors il est isocèle.
:::

:::exemple
$ABC$ est isocèle en $A$ avec $\widehat A=40°$ : $\widehat B=\widehat C=\dfrac{180°-40°}2=70°$.
:::

:::definition Triangle équilatéral
Un triangle **équilatéral** a ses trois côtés de même longueur.
:::

:::propriete
Les trois angles d’un triangle équilatéral mesurent chacun $60°$. Réciproquement, un triangle qui a trois angles de $60°$ (ou deux) est équilatéral.
:::

:::definition Triangle rectangle isocèle
Un triangle **rectangle isocèle** a un angle droit et deux côtés de l’angle droit de même longueur ; ses angles aigus mesurent $45°$.
:::

```figure
{"type":"geometry","x":[-0.5,14.5],"y":[-0.6,4.4],"width":360,
 "polygons":[{"points":[[0,0],[4,0],[0,3]],"color":"brand"},{"points":[[5,0],[9,0],[7,3.8]],"color":"saffron"},{"points":[[10,0],[14,0],[12,3.46]],"color":"ink"}],
 "rightAngles":[{"at":[0,0],"u":[1,0],"v":[0,1]}],
 "caption":"Triangle rectangle, triangle isocèle, triangle équilatéral."}
```

# Exercices

:::exercice Constructible ?
Dire si l’on peut construire un triangle dont les côtés mesurent :
1. $3$ cm, $4$ cm et $6$ cm ;
2. $2$ cm, $5$ cm et $8$ cm ;
3. $4$ cm, $6$ cm et $10$ cm (que se passe-t-il ?).
:::

:::exercice Somme des angles
1. Dans un triangle $EFG$, $\widehat E=38°$ et $\widehat F=97°$. Calculer $\widehat G$.
2. $RST$ est rectangle en $R$ et $\widehat S=27°$. Calculer $\widehat T$.
3. Un triangle peut-il avoir deux angles obtus ? Justifier.
:::

:::exercice Triangle isocèle
1. $ABC$ est isocèle en $A$ et $\widehat B=52°$. Calculer $\widehat C$ et $\widehat A$.
2. $MNP$ est isocèle en $M$ et $\widehat M=110°$. Calculer $\widehat N$ et $\widehat P$.
3. Dans un triangle $IJK$, $\widehat I=35°$ et $\widehat J=110°$. Montrer que $IJK$ est isocèle.
:::

:::exercice Constructions
1. Construire un triangle $ABC$ rectangle en $A$ tel que $AB=4$ cm et $AC=3$ cm.
2. Construire un triangle $DEF$ isocèle en $D$ tel que $EF=5$ cm et $\widehat E=50°$ ; calculer $\widehat D$.
3. Construire un triangle équilatéral de périmètre $12$ cm.
:::

:::exercice Approfondissement — angles en fonction de x
Dans un triangle $ABC$, $\widehat A=x$, $\widehat B=2x$ et $\widehat C=3x$.
1. Calculer $x$ et les angles du triangle.
2. Quelle est la nature du triangle ?
:::

:::exercice Approfondissement — triangle isocèle et bissectrice
$ABC$ est isocèle en $A$ avec $\widehat{BAC}=36°$. La bissectrice de $\widehat{ABC}$ coupe $[AC]$ en $D$.
1. Calculer $\widehat{ABC}$, $\widehat{ABD}$ et $\widehat{BDC}$.
2. Montrer que les triangles $ABD$ et $BDC$ sont isocèles.
:::

# Corrigés

:::corrige
1. $3+4=7>6$ : oui.
2. $2+5=7<8$ : non.
3. $4+6=10$ : les trois points sont alignés, le « triangle » est aplati.
:::

:::corrige
1. $\widehat G=180°-(38°+97°)=45°$.
2. $\widehat T=90°-27°=63°$.
3. Non : deux angles obtus auraient une somme supérieure à $180°$.
:::

:::corrige
1. $\widehat C=\widehat B=52°$ ; $\widehat A=180°-104°=76°$.
2. $\widehat N=\widehat P=\dfrac{180°-110°}2=35°$.
3. $\widehat K=180°-(35°+110°)=35°=\widehat I$ : deux angles égaux, $IJK$ est isocèle en $J$.
:::

:::corrige
2. $\widehat F=\widehat E=50°$, donc $\widehat D=180°-100°=80°$.
3. Chaque côté mesure $12\div3=4$ cm ; on trace $[AB]$ de $4$ cm puis deux arcs de rayon $4$ cm centrés en $A$ et $B$.
:::

:::corrige
1. $x+2x+3x=180°$, donc $x=30°$ : $\widehat A=30°$, $\widehat B=60°$, $\widehat C=90°$.
2. Il est rectangle en $C$.
:::

:::corrige
1. $\widehat{ABC}=\widehat{ACB}=\dfrac{180°-36°}2=72°$ ; $\widehat{ABD}=36°$ ; dans $BDC$ : $\widehat{BDC}=180°-36°-72°=72°$.
2. $ABD$ : $\widehat{BAD}=\widehat{ABD}=36°$, isocèle en $D$. $BDC$ : $\widehat{BDC}=\widehat{BCD}=72°$, isocèle en $B$.
:::
