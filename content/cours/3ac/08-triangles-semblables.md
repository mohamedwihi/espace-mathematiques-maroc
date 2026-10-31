---
id: 3ac-triangles-semblables
titre: Triangles semblables
niveau: 3ac
semestre: 1
duree: 8 heures
---

## Objectifs
- Reconnaître deux triangles semblables et leurs éléments homologues.
- Connaître et utiliser le rapport de similitude.
- Connaître et utiliser les trois cas de similitude.
- Utiliser les propriétés des triangles semblables (longueurs, périmètres, aires).

## Prérequis
- Somme des angles d’un triangle.
- Théorème de Thalès.
- Proportionnalité.

# I. Triangles semblables

:::definition
Deux triangles sont **semblables** lorsque leurs angles sont respectivement égaux et que les côtés de l’un sont **proportionnels** aux côtés homologues de l’autre.
:::

:::vocabulaire
Si les triangles $ABC$ et $A'B'C'$ sont semblables avec $\hat A=\hat A'$, $\hat B=\hat B'$ et $\hat C=\hat C'$ :
- les sommets $A$ et $A'$, $B$ et $B'$, $C$ et $C'$ sont **homologues** ;
- les côtés $[BC]$ et $[B'C']$ (opposés à des angles égaux) sont **homologues**, de même que $[AC]$ et $[A'C']$, $[AB]$ et $[A'B']$.
:::

# II. Rapport de similitude

:::definition
Quand deux triangles $ABC$ et $A'B'C'$ sont semblables,
$$\frac{A'B'}{AB}=\frac{A'C'}{AC}=\frac{B'C'}{BC}=k.$$
Ce quotient commun $k$ s’appelle le **rapport de similitude** du triangle $ABC$ au triangle $A'B'C'$.
:::

:::remarque
- Si $k>1$, le triangle $A'B'C'$ est un **agrandissement** de $ABC$ ; si $k<1$, c’est une **réduction**.
- Deux triangles **isométriques** (superposables) sont semblables avec $k=1$.
- Lorsqu’une droite parallèle à $(BC)$ coupe $(AB)$ en $M$ et $(AC)$ en $N$, les triangles $AMN$ et $ABC$ sont semblables (théorème de Thalès et angles correspondants).
:::

# III. Cas de similitude

## 1. Premier cas : deux angles

:::propriete
Si deux angles d’un triangle sont respectivement égaux à deux angles d’un autre triangle, alors ces deux triangles sont semblables.
:::

:::remarque
Le troisième angle est alors automatiquement égal, puisque la somme des angles d’un triangle vaut $180^\circ$.
:::

:::exemple
Dans les triangles $ABC$ et $DEF$, $\hat A=50^\circ$, $\hat B=70^\circ$, $\hat D=50^\circ$ et $\hat F=60^\circ$. Alors $\hat C=180^\circ-50^\circ-70^\circ=60^\circ=\hat F$ et $\hat A=\hat D$ : les triangles sont semblables, $A$ homologue de $D$, $C$ de $F$ et donc $B$ de $E$.
:::

## 2. Deuxième cas : un angle et deux côtés proportionnels

:::propriete
Si deux triangles ont un angle égal et si les côtés adjacents à cet angle sont proportionnels, alors ces deux triangles sont semblables.
:::

:::exemple
$ABC$ avec $AB=4$, $AC=6$, $\hat A=40^\circ$ et $A'B'C'$ avec $A'B'=6$, $A'C'=9$, $\hat A'=40^\circ$ : $\dfrac{A'B'}{AB}=\dfrac64=1{,}5$ et $\dfrac{A'C'}{AC}=\dfrac96=1{,}5$. Les triangles sont semblables de rapport $1{,}5$.
:::

## 3. Troisième cas : trois côtés proportionnels

:::propriete
Si les trois côtés d’un triangle sont proportionnels aux trois côtés d’un autre triangle, alors ces deux triangles sont semblables.
:::

:::exemple
Les triangles de côtés $3$, $4$, $5$ et $6$, $8$, $10$ sont semblables car $\dfrac63=\dfrac84=\dfrac{10}5=2$.
:::

# IV. Propriétés des triangles semblables

:::propriete
Si deux triangles sont semblables de rapport $k$ (du premier au second) :
- les longueurs des côtés, des hauteurs, des médianes… sont multipliées par $k$ ;
- le **périmètre** est multiplié par $k$ ;
- l’**aire** est multipliée par $k^2$.
:::

:::exemple
Un triangle d’aire $12\ \text{cm}^2$ et de périmètre $16$ cm est agrandi avec le rapport $k=3$. Le triangle obtenu a pour périmètre $16\times3=48$ cm et pour aire $12\times3^2=108\ \text{cm}^2$.
:::

```figure
{"type":"geometry","x":[-0.5,9],"y":[-0.5,4.5],"width":380,
 "polygons":[{"points":[[0,0],[3,0],[1,2]],"color":"brand"},{"points":[[4,0],[8.5,0],[5.5,3]],"color":"saffron"}],
 "points":[{"x":0,"y":0,"label":"A"},{"x":3,"y":0,"label":"B"},{"x":1,"y":2,"label":"C"},{"x":4,"y":0,"label":"A'"},{"x":8.5,"y":0,"label":"B'"},{"x":5.5,"y":3,"label":"C'"}],
 "caption":"$A'B'C'$ est un agrandissement de $ABC$ de rapport $k=1{,}5$ : les angles sont conservés, les longueurs multipliées par $1{,}5$, l’aire par $2{,}25$."}
```

# Exercices

:::exercice Reconnaître
Les triangles suivants sont-ils semblables ? Justifier.
1. $ABC$ avec $\hat A=35^\circ$, $\hat B=85^\circ$ et $EFG$ avec $\hat E=60^\circ$, $\hat F=85^\circ$.
2. $IJK$ de côtés $5$, $7$, $9$ et $LMN$ de côtés $10$, $14$, $20$.
:::

:::exercice Calculer des longueurs
Les triangles $ABC$ et $DEF$ sont semblables, $A$, $B$, $C$ étant respectivement homologues de $D$, $E$, $F$, avec $AB=6$, $BC=8$, $AC=5$ et $DE=9$. Calculer le rapport de similitude, puis $EF$ et $DF$.
:::

:::exercice Parallèle
Dans un triangle $ABC$, $M\in[AB]$ et $N\in[AC]$ avec $(MN)\parallel(BC)$, $AM=3$ et $AB=7{,}5$.
1. Justifier que les triangles $AMN$ et $ABC$ sont semblables.
2. Calculer le rapport de similitude de $ABC$ à $AMN$, puis $MN$ sachant que $BC=10$.
:::

:::exercice Aires
Deux triangles sont semblables de rapport $k=\dfrac23$ du premier au second. L’aire du premier est $36\ \text{cm}^2$. Calculer l’aire du second.
:::

:::exercice Triangle rectangle et hauteur
$ABC$ est rectangle en $A$ et $H$ est le pied de la hauteur issue de $A$.
1. Montrer que les triangles $ABC$ et $HBA$ sont semblables.
2. En déduire que $AB^2=BH\times BC$.
:::

:::exercice Série — reconnaître des triangles semblables
$ABC$ a pour côtés $4$, $6$ et $8$ cm ; $EFG$ a pour côtés $6$, $9$ et $12$ cm.
1. Montrer que ces triangles sont semblables et donner le rapport.
2. L’aire de $ABC$ est environ $11{,}6\ \text{cm}^2$ : en déduire celle de $EFG$.
:::

:::exercice Série — angles égaux
$ABC$ est un triangle ; $M\in[AB]$ et $N\in[AC]$ tels que $\widehat{AMN}=\widehat{ACB}$. On donne $AM=3$, $AN=4$, $AB=8$.
1. Montrer que les triangles $AMN$ et $ACB$ sont semblables.
2. Calculer $AC$.
:::

:::exercice Approfondissement — hauteur dans un triangle rectangle
$ABC$ est rectangle en $A$ et $H$ est le pied de la hauteur issue de $A$.
1. Montrer que les triangles $HBA$ et $ABC$ sont semblables, puis que $AB^2=BH\times BC$.
2. Application : $BH=3{,}6$ et $BC=10$. Calculer $AB$, puis $AC$ et $AH$.
:::

:::exercice Approfondissement — agrandissement
Un triangle $T$ a pour périmètre $24$ cm et pour aire $24\ \text{cm}^2$. Un triangle $T'$ semblable à $T$ a pour périmètre $36$ cm.
1. Quel est le rapport de similitude ?
2. Quelle est l’aire de $T'$ ?
:::

# Corrigés

:::corrige
1. Dans $ABC$, $\hat C=180^\circ-35^\circ-85^\circ=60^\circ$. Donc $\hat C=\hat E$ et $\hat B=\hat F$ : deux angles égaux, les triangles sont semblables.
2. $\dfrac{10}5=2$, $\dfrac{14}7=2$ mais $\dfrac{20}9\ne2$ : les côtés ne sont pas proportionnels, les triangles ne sont pas semblables.
:::

:::corrige
$k=\dfrac{DE}{AB}=\dfrac96=1{,}5$. Donc $EF=1{,}5\times BC=12$ et $DF=1{,}5\times AC=7{,}5$.
:::

:::corrige
1. Les triangles ont l’angle $\hat A$ en commun, et $\widehat{AMN}=\widehat{ABC}$ (angles correspondants, car $(MN)\parallel(BC)$) : deux angles égaux, ils sont semblables.
2. $k=\dfrac{AB}{AM}=\dfrac{7{,}5}3=2{,}5$ de $AMN$ à $ABC$, donc le rapport de $ABC$ à $AMN$ est $\dfrac1{2{,}5}=0{,}4$ et $MN=0{,}4\times10=4$.
:::

:::corrige
L’aire est multipliée par $k^2=\dfrac49$ : $36\times\dfrac49=16\ \text{cm}^2$.
:::

:::corrige
1. Les triangles $ABC$ (rectangle en $A$) et $HBA$ (rectangle en $H$) ont l’angle $\hat B$ en commun et un angle droit : deux angles égaux, ils sont semblables, avec $A\leftrightarrow H$, $B\leftrightarrow B$, $C\leftrightarrow A$.
2. Les côtés homologues sont proportionnels : $\dfrac{BH}{BA}=\dfrac{BA}{BC}$, donc $AB^2=BH\times BC$.
:::

:::corrige
1. $\dfrac64=\dfrac96=\dfrac{12}8=1{,}5$ : les côtés sont proportionnels, les triangles sont semblables ; $EFG$ est un agrandissement de rapport $k=1{,}5$.
2. Les aires sont multipliées par $k^2=2{,}25$ : $\mathcal A_{EFG}\approx26{,}1\ \text{cm}^2$.
:::

:::corrige
1. Ils ont l’angle $\widehat A$ en commun et $\widehat{AMN}=\widehat{ACB}$ : deux angles égaux, ils sont semblables (avec $M\leftrightarrow C$ et $N\leftrightarrow B$).
2. $\dfrac{AM}{AC}=\dfrac{AN}{AB}$, soit $\dfrac{3}{AC}=\dfrac{4}{8}$ : $AC=6$.
:::

:::corrige
1. Ils ont l’angle $\widehat B$ en commun et un angle droit ($\widehat{BHA}=\widehat{BAC}=90°$) : ils sont semblables. Donc $\dfrac{BH}{BA}=\dfrac{BA}{BC}$, soit $AB^2=BH\times BC$.
2. $AB^2=36$, $AB=6$ ; $AC^2=100-36=64$, $AC=8$ ; aire : $\dfrac{AB\times AC}2=\dfrac{BC\times AH}2$, donc $AH=\dfrac{48}{10}=4{,}8$.
:::

:::corrige
1. $k=\dfrac{36}{24}=1{,}5$.
2. $\mathcal A'=k^2\mathcal A=2{,}25\times24=54\ \text{cm}^2$.
:::
