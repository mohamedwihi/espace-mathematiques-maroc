---
id: 3ac-pythagore
titre: Le théorème de Pythagore
niveau: 3ac
semestre: 1
duree: 6 heures
---

## Objectifs
- Reconnaître l’hypoténuse d’un triangle rectangle.
- Calculer une longueur à l’aide du théorème de Pythagore.
- Démontrer qu’un triangle est rectangle (ou ne l’est pas) à l’aide de la réciproque.

## Prérequis
- Carré et racine carrée d’un nombre.
- Triangle rectangle et cercle circonscrit (2AC).
- Résolution de l’équation $x^2=a$.

# I. Le théorème de Pythagore

:::definition
Dans un triangle $ABC$ rectangle en $A$, le côté $[BC]$, opposé à l’angle droit, s’appelle l’**hypoténuse**. C’est le plus long des trois côtés.
:::

:::theoreme Théorème de Pythagore
Si un triangle $ABC$ est rectangle en $A$, alors le carré de la longueur de l’hypoténuse est égal à la somme des carrés des longueurs des deux autres côtés :
$$BC^2=AB^2+AC^2.$$
:::

```figure
{"type":"geometry","x":[-0.6,4.8],"y":[-0.6,3.6],"width":300,
 "polygons":[{"points":[[0,0],[4,0],[0,3]],"color":"brand"}],
 "rightAngles":[{"at":[0,0],"u":[1,0],"v":[0,1]}],
 "points":[{"x":0,"y":0,"label":"A"},{"x":4,"y":0,"label":"B"},{"x":0,"y":3,"label":"C"}],
 "caption":"$AB=4$, $AC=3$ et $BC^2=4^2+3^2=25$, donc $BC=5$."}
```

:::exemple Calculer l’hypoténuse
$IJK$ est rectangle en $I$ avec $IJ=3\ \text{cm}$ et $IK=4\ \text{cm}$. D’après le théorème de Pythagore :
$$JK^2=IJ^2+IK^2=9+16=25,\quad\text{donc}\quad JK=\sqrt{25}=5\ \text{cm}.$$
:::

:::exemple Calculer un côté de l’angle droit
$ABC$ est rectangle en $A$ avec $BC=2{,}5$ et $AC=1{,}5$. D’après le théorème de Pythagore, $BC^2=AB^2+AC^2$, donc
$$AB^2=BC^2-AC^2=6{,}25-2{,}25=4\quad\text{et}\quad AB=2.$$
:::

:::exemple Valeur exacte
Un carré a pour côté $c$. Sa diagonale $d$ vérifie $d^2=c^2+c^2=2c^2$, donc $d=c\sqrt2$.

Un triangle équilatéral de côté $a$ a pour hauteur $h$ avec $h^2=a^2-\left(\dfrac a2\right)^2=\dfrac{3a^2}4$, donc $h=\dfrac{a\sqrt3}2$.
:::

# II. Réciproque du théorème de Pythagore

:::theoreme Réciproque du théorème de Pythagore
Si, dans un triangle, le carré de la longueur du plus grand côté est égal à la somme des carrés des longueurs des deux autres côtés, alors ce triangle est **rectangle**. L’angle droit est le sommet opposé au plus grand côté.

Autrement dit : si $BC^2=AB^2+AC^2$, alors $ABC$ est rectangle en $A$.
:::

:::remarque
- La réciproque permet de **démontrer que deux droites sont perpendiculaires**.
- **Contraposée** : si $BC^2\ne AB^2+AC^2$ (avec $[BC]$ le plus grand côté), alors le triangle $ABC$ **n’est pas rectangle**.
:::

:::methode
1. Repérer le plus grand côté.
2. Calculer séparément son carré et la somme des carrés des deux autres côtés.
3. Comparer et conclure avec la réciproque (égalité) ou la contraposée (inégalité).
:::

:::exemple
$ABC$ est un triangle avec $AB=4$, $AC=3$ et $BC=5$. Le plus grand côté est $[BC]$.
- $BC^2=25$.
- $AB^2+AC^2=16+9=25$.

On a $BC^2=AB^2+AC^2$ : d’après la réciproque du théorème de Pythagore, $ABC$ est rectangle en $A$.
:::

:::exemple
$EFG$ est un triangle avec $EF=6$, $FG=7$ et $EG=9$. $EG^2=81$ et $EF^2+FG^2=36+49=85$. Comme $81\ne85$, le triangle $EFG$ n’est pas rectangle.
:::

# Exercices

:::exercice Hypoténuse
$ABC$ est rectangle en $C$ avec $CA=8$ et $CB=6$. Calculer $AB$.
:::

:::exercice Côté de l’angle droit
$RST$ est rectangle en $S$ avec $RT=13$ et $ST=5$. Calculer $RS$.
:::

:::exercice Rectangle ou non ?
Les triangles suivants sont-ils rectangles ?
1. $MNP$ avec $MN=10$, $NP=24$, $MP=26$.
2. $IJK$ avec $IJ=5$, $JK=7$, $IK=9$.
3. $UVW$ avec $UV=\sqrt5$, $VW=\sqrt{11}$, $UW=4$.
:::

:::exercice Valeur exacte
Un rectangle a pour dimensions $\sqrt3$ cm et $\sqrt{15}$ cm. Calculer la valeur exacte de sa diagonale, puis l’écrire sous la forme $a\sqrt b$.
:::

:::exercice L’échelle
Une échelle de $5$ m est appuyée contre un mur vertical. Son pied est à $1{,}4$ m du mur. À quelle hauteur l’échelle touche-t-elle le mur ?
:::

:::exercice Problème
$ABCD$ est un rectangle avec $AB=8$ et $BC=6$. $M$ est le point de $[AB]$ tel que $AM=2$.
1. Calculer $DB$.
2. Calculer $DM$ et $MC$.
3. Le triangle $DMC$ est-il rectangle en $M$ ?
:::

:::exercice Série — triangle et hauteur
$ABC$ est un triangle tel que $AB=13$ cm, $AC=15$ cm ; $H$ est le pied de la hauteur issue de $A$ et $AH=12$ cm, avec $H\in[BC]$.
1. Calculer $BH$ et $HC$, puis $BC$.
2. Calculer l’aire du triangle $ABC$.
:::

:::exercice Série — rectangle ou non ?
$ABCD$ est un rectangle de longueur $AB=8$ cm et de largeur $AD=6$ cm ; $M$ est le point de $[CD]$ tel que $DM=2$ cm.
1. Calculer $AM$ et $BM$.
2. Le triangle $AMB$ est-il rectangle en $M$ ?
:::

:::exercice Approfondissement — diagonale d’un pavé
Un pavé droit $ABCDEFGH$ a pour dimensions $AB=6$, $AD=8$ et $AE=10$ (en cm).
1. Calculer la diagonale $AC$ de la base.
2. Le triangle $ACG$ est rectangle en $C$ : calculer la grande diagonale $AG$.
:::

:::exercice Approfondissement — triangle à côtés littéraux
Un triangle a pour côtés $x+1$, $x+8$ et $x+9$ (en cm), avec $x>0$.
1. Pour quelle valeur de $x$ est-il rectangle ?
2. Calculer alors son aire.
:::

# Corrigés

:::corrige
D’après le théorème de Pythagore dans $ABC$ rectangle en $C$ : $AB^2=CA^2+CB^2=64+36=100$, donc $AB=10$.
:::

:::corrige
$RT^2=RS^2+ST^2$, donc $RS^2=169-25=144$ et $RS=12$.
:::

:::corrige
1. $MP^2=676$ et $MN^2+NP^2=100+576=676$ : égalité, donc $MNP$ est rectangle en $N$.
2. $IK^2=81$ et $IJ^2+JK^2=25+49=74$ : $81\ne74$, donc $IJK$ n’est pas rectangle.
3. $UW^2=16$ et $UV^2+VW^2=5+11=16$ : $UVW$ est rectangle en $V$.
:::

:::corrige
$d^2=\left(\sqrt3\right)^2+\left(\sqrt{15}\right)^2=3+15=18$, donc $d=\sqrt{18}=\sqrt{9\times2}=3\sqrt2$ cm.
:::

:::corrige
Le mur, le sol et l’échelle forment un triangle rectangle d’hypoténuse $5$. Si $h$ est la hauteur cherchée : $h^2=5^2-1{,}4^2=25-1{,}96=23{,}04$, donc $h=4{,}8$ m.
:::

:::corrige
1. $DAB$ est rectangle en $A$ : $DB^2=AD^2+AB^2=36+64=100$, donc $DB=10$.
2. $DM^2=AD^2+AM^2=36+4=40$, donc $DM=\sqrt{40}=2\sqrt{10}$. $MB=6$ et $MC^2=MB^2+BC^2=36+36=72$, donc $MC=6\sqrt2$.
3. $DC^2=64$ et $DM^2+MC^2=40+72=112$. Comme $64\ne112$, le triangle $DMC$ n’est pas rectangle en $M$.
:::

:::corrige
1. Dans $ABH$ rectangle en $H$ : $BH^2=169-144=25$, $BH=5$ cm. Dans $ACH$ : $HC^2=225-144=81$, $HC=9$ cm. Donc $BC=14$ cm.
2. $\mathcal A=\dfrac{14\times12}{2}=84\ \text{cm}^2$.
:::

:::corrige
1. $AM^2=AD^2+DM^2=36+4=40$ ; $MC=6$ cm, $BM^2=BC^2+MC^2=36+36=72$.
2. $AM^2+BM^2=112\ne AB^2=64$ : le triangle $AMB$ n’est pas rectangle en $M$.
:::

:::corrige
1. $AC^2=36+64=100$, $AC=10$ cm.
2. $AG^2=AC^2+CG^2=100+100=200$, $AG=10\sqrt2\approx14{,}1$ cm.
:::

:::corrige
1. Le plus grand côté est $x+9$ : $(x+9)^2=(x+1)^2+(x+8)^2\iff x^2+18x+81=2x^2+18x+65\iff x^2=16$, donc $x=4$.
2. Côtés $5$, $12$, $13$ : aire $\dfrac{5\times12}2=30\ \text{cm}^2$.
:::
