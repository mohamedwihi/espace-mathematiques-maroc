---
id: 2ac-triangle-rectangle-cercle
titre: Le triangle rectangle et le cercle
niveau: 2ac
semestre: 2
duree: 10 heures
---

## Objectifs
- Connaître la propriété de la médiane relative à l’hypoténuse et sa réciproque.
- Connaître le cercle circonscrit à un triangle rectangle et caractériser un triangle rectangle inscrit dans un cercle.
- Connaître et utiliser le théorème de Pythagore et sa réciproque.

## Prérequis
- Rectangle et ses propriétés ; médiane d’un triangle.
- Cercle circonscrit ; racine carrée (calcul à la calculatrice).

# I. Médiane relative à l’hypoténuse

:::exemple Activité
$ABC$ est rectangle en $A$ et $I$ est le milieu de $[BC]$. Soit $D$ le symétrique de $A$ par rapport à $I$. $ABDC$ a des diagonales de même milieu et un angle droit : c’est un rectangle. Ses diagonales ont donc la même longueur : $AD=BC$, d’où $IA=IB=IC=\dfrac{BC}2$.
:::

:::propriete Directe
Dans un triangle rectangle, la **médiane relative à l’hypoténuse** a pour longueur la **moitié de l’hypoténuse**.

Si $ABC$ est rectangle en $A$ et $I$ le milieu de $[BC]$, alors $AI=\dfrac{BC}2$.
:::

:::propriete Réciproque
Si, dans un triangle, la médiane relative à un côté a pour longueur la moitié de ce côté, alors ce triangle est **rectangle**, et ce côté est l’hypoténuse.
:::

# II. Triangle rectangle et cercle

:::propriete
Si un triangle est rectangle, alors son **cercle circonscrit** a pour **diamètre l’hypoténuse** : son centre est le milieu de l’hypoténuse.
:::

```figure
{"type":"geometry","x":[-3.5,3.5],"y":[-3.4,3.4],"width":280,"orthonormal":true,
 "circles":[{"c":[0,0],"r":3,"color":"brand"}],
 "polygons":[{"points":[[-3,0],[3,0],[-1.2,2.75]],"color":"saffron"}],
 "segments":[{"from":[0,0],"to":[-1.2,2.75],"dashed":true}],
 "rightAngles":[{"at":[-1.2,2.75],"u":[-0.33,-0.48],"v":[0.73,-0.48]}],
 "points":[{"x":-3,"y":0,"label":"B"},{"x":3,"y":0,"label":"C"},{"x":-1.2,"y":2.75,"label":"A"},{"x":0,"y":0,"label":"I"}],
 "caption":"$ABC$ rectangle en $A$ : $A$ est sur le cercle de diamètre $[BC]$."}
```

:::propriete Réciproque
Si un triangle est inscrit dans un cercle ayant pour **diamètre l’un de ses côtés**, alors ce triangle est **rectangle** ; l’angle droit est au sommet opposé à ce diamètre.
:::

:::methode Construire un triangle rectangle d’hypoténuse donnée
On trace le cercle de diamètre $[BC]$ ; tout point $A$ de ce cercle (distinct de $B$ et $C$) donne un triangle $ABC$ rectangle en $A$.
:::

# III. Théorème de Pythagore

:::theoreme Théorème de Pythagore
Si un triangle $ABC$ est rectangle en $A$, alors le carré de l’hypoténuse est égal à la somme des carrés des deux autres côtés :
$$BC^2=AB^2+AC^2.$$
:::

```figure
{"type":"geometry","x":[-4.5,7.5],"y":[-4.5,8],"width":290,"orthonormal":true,
 "polygons":[{"points":[[0,0],[4,0],[0,3]],"color":"ink"},{"points":[[0,0],[4,0],[4,-4],[0,-4]],"color":"brand"},{"points":[[0,0],[0,3],[-3,3],[-3,0]],"color":"saffron"},{"points":[[4,0],[0,3],[3,7],[7,4]],"color":"brand","fill":false}],
 "rightAngles":[{"at":[0,0],"u":[1,0],"v":[0,1]}],
 "points":[{"x":0,"y":0,"label":"A"},{"x":4,"y":0,"label":"B"},{"x":0,"y":3,"label":"C"}],
 "caption":"$AB=4$, $AC=3$ : $BC^2=16+9=25$, donc $BC=5$."}
```

:::exemple Calculer l’hypoténuse
$ABC$ est rectangle en $A$ avec $AB=6$ cm et $AC=8$ cm : $BC^2=36+64=100$, donc $BC=10$ cm.
:::

:::exemple Calculer un côté de l’angle droit
$EFG$ est rectangle en $E$ avec $FG=13$ cm et $EF=5$ cm : $EG^2=FG^2-EF^2=169-25=144$, donc $EG=12$ cm.
:::

:::theoreme Réciproque de Pythagore
Si, dans un triangle $ABC$, $BC^2=AB^2+AC^2$, alors ce triangle est **rectangle en $A$**.
:::

:::methode Démontrer qu’un triangle est (ou n’est pas) rectangle
On calcule séparément le carré du **plus grand côté** et la somme des carrés des deux autres :
- s’ils sont égaux, le triangle est rectangle (réciproque) ;
- sinon, il n’est pas rectangle (conséquence du théorème).
:::

:::exemple
- $MN=7$, $NP=24$, $MP=25$ : $MP^2=625$ et $MN^2+NP^2=49+576=625$ : $MNP$ est rectangle en $N$.
- $RS=5$, $ST=6$, $RT=8$ : $64\ne25+36=61$ : $RST$ n’est pas rectangle.
:::

# Exercices

:::exercice Médiane
$ABC$ est rectangle en $A$ avec $BC=9$ cm ; $I$ est le milieu de $[BC]$.
1. Calculer $AI$.
2. Quelle est la nature du triangle $AIB$ ?
:::

:::exercice Cercle
$[EF]$ est un diamètre d’un cercle $(\mathcal C)$ de centre $O$ et de rayon $4$ cm ; $M$ est un point de $(\mathcal C)$ distinct de $E$ et $F$.
1. Quelle est la nature du triangle $EMF$ ? Justifier.
2. On donne $EM=4$ cm. Quelle est la nature du triangle $OEM$ ? En déduire $\widehat{MEF}$.
:::

:::exercice Pythagore
1. $ABC$ est rectangle en $B$ avec $AB=9$ cm et $BC=12$ cm. Calculer $AC$.
2. $DEF$ est rectangle en $F$ avec $DE=17$ cm et $DF=8$ cm. Calculer $EF$.
3. Calculer la diagonale d’un carré de côté $5$ cm (valeur approchée au mm).
:::

:::exercice Réciproque
Les triangles suivants sont-ils rectangles ?
1. $AB=10$, $BC=24$, $AC=26$.
2. $EF=6$, $FG=7$, $EG=9$.
3. $KL=1{,}5$, $LM=2$, $KM=2{,}5$.
:::

:::exercice Problème
Une échelle de $5$ m est appuyée contre un mur vertical ; son pied est à $1{,}4$ m du mur. À quelle hauteur l’échelle touche-t-elle le mur ?
:::

# Corrigés

:::corrige
1. $AI=\dfrac{BC}2=4{,}5$ cm.
2. $AI=IB=4{,}5$ cm : $AIB$ est isocèle en $I$.
:::

:::corrige
1. $EMF$ est inscrit dans le cercle de diamètre $[EF]$ : il est rectangle en $M$.
2. $OE=OM=4$ cm (rayons) et $EM=4$ cm : $OEM$ est équilatéral, donc $\widehat{MEF}=\widehat{MEO}=60°$.
:::

:::corrige
1. $AC^2=81+144=225$, $AC=15$ cm.
2. $EF^2=289-64=225$, $EF=15$ cm.
3. $d^2=25+25=50$, $d=\sqrt{50}\approx7{,}1$ cm.
:::

:::corrige
1. $26^2=676$ et $10^2+24^2=100+576=676$ : rectangle en $B$.
2. $81\ne36+49=85$ : non rectangle.
3. $2{,}5^2=6{,}25$ et $2{,}25+4=6{,}25$ : rectangle en $L$.
:::

:::corrige
Le mur, le sol et l’échelle forment un triangle rectangle d’hypoténuse $5$ m : $h^2=25-1{,}96=23{,}04$, donc $h=4{,}8$ m.
:::
